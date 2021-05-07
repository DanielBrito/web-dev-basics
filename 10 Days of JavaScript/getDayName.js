// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let date = new Date(dateString);
    switch(date.getDay()){
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
}
