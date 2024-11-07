let myClock = document.querySelector('#myClock')
let myName = document.querySelector('#myName')
let name = prompt(`Lutfen Isminizi Giriniz`)
myName.innerHTML = name
function showTime(){
    let date =new Date();
    let day = date.getDay();
    day = days(day);
    let hour= date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    myClock.innerHTML = `${hour}:${minute}:${second} ${day}`;
    setTimeout(showTime, 1000);
    
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function days (i){
    let text;
    switch (i) {
        case 0 :
        text = `Pazar`;
        break;
        case 1 :
        text = `Pazartesi`;
        break;
        case 2 :
        text = `Sali`;
        break;
        case 3 :
        text = `Carsamba`;
        break;
        case 4 :
        text = `Persembe`;
        break;
        case 5 :
        text = `Cuma`;
        break;
        case 6 :
        text = `Cumartesi`;
        break;
    }
    return text
}
showTime()


