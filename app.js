const button = document.querySelector(".img-container");
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const showYear = document.querySelector(".year-num");
const showMonth = document.querySelector(".month-num");
const showDay = document.querySelector(".day-num");
const dayError = document.querySelector("#dayError");
const monthError = document.querySelector("#monthError");
const yearError = document.querySelector("#yearError");
const monthError2 = document.querySelector("#monthError2");
const yearError2 = document.querySelector("#yearError2");
const dayError2 = document.querySelector("#dayError2");
const dayHeader = document.querySelector("#dayHeader");
const monthHeader = document.querySelector("#monthHeader");
const yearHeader = document.querySelector("#yearHeader");


let date = new Date();

const calculateAge = () => {
    let dayVal = dayInput.value;
    let monthVal = monthInput.value;
    let yearVal = yearInput.value;


    const headerError = (header, errorText) => {
        header.style.color = "red";
        header.style.display = "block";
        errorText.style.display = "block";
        header.style.opacity = 0.5;
    }

    let inputDate = new Date(yearVal, monthVal, 1);
    let lastDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), 0);
    daysInMonth = lastDay.getDate();

    if (dayVal.length == 0 && monthVal.length == 0 && yearVal.length == 0) {
        headerError(dayHeader, dayError);
        headerError(monthHeader, monthError);
        headerError(yearHeader, yearError);

    } else if (dayVal > 30 || dayVal > 31) {
        headerError(dayHeader, dayError2);

    } else if (monthVal > 12) {
        headerError(monthHeader, monthError2);
    } else if (yearVal > date.getFullYear()) {
        headerError(yearHeader, yearError2);
    } else if (yearVal == date.getFullYear() && monthVal == date.getMonth() + 1 && dayVal > date.getDate()) {
        headerError(dayHeader, dayError2);
        headerError(monthHeader, monthError2);
        headerError(yearHeader, yearError2);
    } else if (dayVal > daysInMonth) {
        headerError(dayHeader, dayError2);
    } else {
        inputDate = new Date(yearVal, monthVal - 1, dayVal);

        if (monthVal > date.getMonth() + 1) {
            let yearDiff = date.getFullYear() - inputDate.getFullYear();
            let exactYearDiff = yearDiff - 1;
            showYear.innerText = exactYearDiff;
        } else {
            let yearDiff = date.getFullYear() - inputDate.getFullYear();
            showYear.innerText = yearDiff;
        }

        let monthDiff = date.getMonth() - inputDate.getMonth();
        if (date.getMonth() === inputDate.getMonth()) {
            showMonth.innerText = 0;
        } else if (monthDiff > 0) {
            showMonth.innerText = monthDiff;
        } else {
            showMonth.innerHTML = monthDiff + 12;
        }


        if (dayVal < date.getDate()) {
            let totalDays = date.getDate() - dayVal;
            showDay.innerText = totalDays;
        }

        if (dayVal > date.getDate()) {
            let dateDiff = dayVal - date.getDate();
            let totalDays2 = daysInMonth - dateDiff;
            showDay.innerText = totalDays2;
        }
    }


}
button.addEventListener("click", calculateAge);

