// Function to count the number of unique users
function countDistinctUsers(activities) {
    const userIds = activities?.map(activity => activity.userId);
    return userIds?.filter((item, i, self) => self?.indexOf(item) === i)?.length;
}

// Function to find the most common activity type
function mostCommonActivity(activities) {
    const countOfActivity = activities?.reduce((activityCounts, activity) => {
        activityCounts[activity.activityType] = (activityCounts[activity.activityType] || 0) + 1;
        return activityCounts;
    }, {})

    let commonActivities = [];
    let maxCount = 0;

    // Finding maxCount of activity from of countOfActivity
    for (const [activity, count] of Object.entries(countOfActivity)) {
        if (count > maxCount) {
            maxCount = count;
            commonActivities = [activity];
        } else if (count === maxCount) commonActivities.push(activity); // if we have 2 or more activity has similar count
    }

    return commonActivities.length === 1 ? commonActivities[0] : commonActivities;
}

// Function to generate a timeline of activities for each user, sorted by timestamp
function generateTimelineActivities(activities) {
    // Getting all timelines
    const timelines = activities?.reduce((result, activity) => {
        // checking for userid exists inside result
        if (!result[activity.userId]) result[activity.userId] = [];
        // pushing the activity to result
        result[activity.userId].push(activity);
        return result;
    }, {});

    // Sorting the timelines- what happen first
    for (const userId in timelines) {
        timelines[userId]?.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    }
    return timelines;
}

// Activities that can be perforned
const activities = [
    { userId: 1, activityType: 'login', timestamp: '2024-06-14T10:00:00Z' },
    { userId: 2, activityType: 'login', timestamp: '2024-06-14T11:00:00Z' },
    { userId: 1, activityType: 'view', timestamp: '2024-06-14T10:05:00Z' },
    { userId: 3, activityType: 'login', timestamp: '2024-06-14T10:10:00Z' },
    { userId: 2, activityType: 'view', timestamp: '2024-06-14T11:15:00Z' },
    { userId: 3, activityType: 'logout', timestamp: '2024-06-14T10:20:00Z' },
    { userId: 4, activityType: 'view', timestamp: '2024-06-14T10:15:00Z' },
    { userId: 4, activityType: 'login', timestamp: '2024-06-14T10:10:00Z' },
    { userId: 4, activityType: 'logout', timestamp: '2024-06-14T10:20:00Z' },
];

// Output
console.log('Number of Unique Users:', countDistinctUsers(activities));
console.log('Most Common Activity Type:', mostCommonActivity(activities));
console.log('User Activity Timelines:', generateTimelineActivities(activities));

// Another way of finding uniques
// return new Set(userIds).size;

// return userIds?.reduce((acc, curr) => {
//     if (!acc?.includes(curr)) acc?.push(curr);
//     return acc;
// }, []).length;