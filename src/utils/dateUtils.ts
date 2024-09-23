//Utils used to handle the backCounter


/**
 * Returns a date with the month name in abbreviation. 
 * @param {Date} expiringDate 
 * @returns {string}
 */
export const getExpiringDate = (expiringDate:Date):string =>{
    const monthName:string[] = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

    const day: string = expiringDate.getDate().toString();
    const month:string = monthName[expiringDate.getMonth()];
    const year: string = expiringDate.getFullYear().toString();
    
    return(`${day} ${month} ${year}`);
}

interface countValues {
    daysLeft: number;
    hoursLeft: number;
    minutesLeft: number;
    secondsLeft: number;
}


/**
 * Returns an object with the days, hours, minutes, and seconds remaining until the given date.
 * @param expiringDate 
 * @returns {{}countValues}
 */
export const getInitialCount = (expiringDate:Date):countValues =>{
    const currentDate:Date = new Date();
    let timeLeft:number = expiringDate.getTime() - currentDate.getTime();

    const secondsPerDay:number = 1000 * 60 * 60 * 24;
    const secondsPerHour:number = 1000 * 60 * 60;
    const secondsPerMinute:number = 1000 * 60;

    const initialCountValues:countValues = {
        daysLeft: Math.floor(timeLeft/secondsPerDay),
        hoursLeft: Math.floor((timeLeft%secondsPerDay)/secondsPerHour),
        minutesLeft: Math.floor((timeLeft%secondsPerHour)/secondsPerMinute),
        secondsLeft: Math.floor((timeLeft%secondsPerMinute)/1000),
    }

    return(
        initialCountValues
    )
}