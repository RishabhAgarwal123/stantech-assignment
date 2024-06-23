export const timeConverter = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const am = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    return `${hours}:${minutes} ${am}`;
}

export const formatConvert = (value) => {
    if (value === '') {
        alert('Please enter a Fahrenheit value');
        return;
    }
    return (value - 273.15).toFixed(2);
}
