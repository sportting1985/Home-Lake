// Зміна пори року //

var month = (new Date()).getMonth(),
    timeOfYearPhoto,
    timeOfYearText;

    if (month < 2 || month == 11) {
    timeOfYearPhoto = 'url(public/img/winter.jpg)';
    timeOfYearText = 'Зима...';
} else if (month < 5) {
    timeOfYearPhoto = 'url(public/img/spring.jpg)';
    timeOfYearText = 'Весна...';
} else if (month < 8) {
    timeOfYearPhoto = "url(public/img/summer.jpg)";
    timeOfYearText = 'Літо...';
} else {
    timeOfYearPhoto = "url('public/img/autumn.jpg')";
    timeOfYearText = 'Осінь... Риба вже дрімає...';
}

console.log(timeOfYearPhoto);
console.log(timeOfYearText);

document.getElementsByClassName("photo")[0].style.backgroundImage = timeOfYearPhoto;
document.getElementsByTagName("h1")[0].innerHTML = timeOfYearText;



// Фотогалерея //



// Розрахунок //


