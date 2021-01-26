/*
Here is the info we will need to change
Image src
alt tag
Day of week
Name of coffee
Color
Description

*/

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

switch (myDay) {
    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"A picture of a Bubble Tea",
            day: "Monday",
            desc: `Sometimes you just need the drip`
        };
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"A picture of a Drip Coffee",
            day: "Wednesday",
            desc: `Sometimes you just need the drip`
        };
        break;

    default:
        break;
}
console.log(coffee);

if(urlParams.has('day')){//use querystring data
    myDay = urlParams.get('day');
}
else{//use date object
    myDay = myDate.getDay();
}

myDay = parseInt(myDay);

function coffeeTemplate(coffee){
    let myReturn = "";
    myReturn += `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee">
    <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special is:</strong>
    <p>`;
    console.log(myReturn);
    return myReturn;

}
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

//console.log(today);