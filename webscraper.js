"use strict";
let subjectArr = [];
let subjectValue;
for (let i = 0; i < 6; i++) {
    subjectValue = (`${i + 1}) `+ document.getElementsByClassName("timetable-class")[i].getElementsByTagName('strong')[0].innerHTML + " / " + document.getElementsByClassName("timetable-class")[i].getElementsByTagName('strong')[1].innerHTML);subjectArr.push(subjectValue);console.log(subjectValue);
}
console.log(subjectArr);

