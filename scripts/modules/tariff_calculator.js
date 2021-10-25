var currentDate = new Date()
var dateDayMonthYear = currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+ currentDate.getFullYear()
var currentHour = currentDate.getHours()
var currentDay = currentDate.getDay()
var holiday
var tariff 

export function getCurrentTariff(){
    //Fetch the current time discrimination tariff from the date object

    checkForNationalHoliday();

    if( holiday ){
        tariff = "valle";
    } else if ( currentDay == 6 || currentDay == 0 ){
        tariff = "valle";
    } else if (currentHour >= 0 && currentHour < 8) {
        tariff = "valle";
    } else if ( currentHour >= 8 && currentHour < 10 || currentHour >= 14 && currentHour < 18 || currentHour == 22 || currentHour == 23 ){
        tariff = "llana";
    } else if ( currentHour >= 10 && currentHour < 14 || currentHour >= 18 && currentHour <= 22) {
        //ahgora
        tariff = "punta";
    } 
    else{
        
        throw "Current time has no function assigned."

    }
    return tariff
}

export function checkForNationalHoliday(){
    let nationalHolidays = [
        "12/10/2021",
        "1/11/2021",
        "6/12/2021",
        "8/12/2021",
        "25/12/2021"
    ]
    nationalHolidays.forEach(element => {
        if ( element == dateDayMonthYear ){
            holiday = true;
        }
    });
}

