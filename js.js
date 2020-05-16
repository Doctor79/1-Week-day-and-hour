const godzina = new Date();
const getDay = godzina.getDay();
const getHour = godzina.getHours();
const getMin = godzina.getMinutes();
const getSec = godzina.getSeconds();
let hourPM = getHour - 12;
switch (getDay) {
    case 0:
        console.log('Today is: Sunday');
        break;
    case 1:
        console.log('Today is: Monday');
        break;
    case 2:
        console.log('Today is: Tuesday');
        break;
    case 3:
        console.log('Today is: Wednesday');
        break;
    case 4:
        console.log('Today is: Thursday');
        break;
    case 5:
        console.log('Today is: Friday')

    default:
        console.log('Today is: Saturday');
}
if (getHour <= 12) {
    console.log(`Current time is:` + getHour + ' AM' + ' : ' + getMin + ' : ' + getSec + 's');
} else {
    console.log('Current time is: ' + hourPM + ' PM' + ' : ' + getMin + ' : ' + getSec + 's');
}