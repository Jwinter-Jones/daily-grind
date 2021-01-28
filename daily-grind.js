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

if(urlParams.has('day')){//use querystring data
    myDay = urlParams.get('day');
}
else{//use date object
    myDay = myDate.getDay();
}

myDay = parseInt(myDay);

switch (myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            color: "purple",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "pic of a Cold Brew",
            day: "Sunday",
            desc: `ahhhh some Cold Brew would be nice right now...`
        };
        break;   


    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"pic of a Bubble Tea",
            day:"Monday",
            desc:`sometimes you just need some bubbles`
        };
        break;
    
    case 2:
        today = "Tuesday";
        coffee = {
            color: "orange",
            name: "Vietnamese Iced Coffee",
            pic: "images/vietnamese-iced-coffee.jpg",
            alt: "pic of a Vietnamese Iced Coffee",
            day: "Tuesday",
            desc: 'a Vietnamese Iced Coffee and Banh Mi sound good right now'
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
            desc: `sometimes you just need the drip`
        };
        break;

        case 4:
            today = "Thursday";
            coffee = {
                color: "yellow",
                name: "Caramel Latte",
                pic: "images/caramel-latte.jpg",
                alt: "pic of a Caramel Latte",
                day: "Thursday",
                desc: 'Caramel Latte\'s are very delicious'
            };
            break;


        case 5:
            today = "Friday";
            coffee = {
                color: "Tan",
                name: "Mocha",
                pic: "images/mocha.jpg",
                alt: "pic of a Mocha",
                day: "Friday",
                desc: `drink a Mocha today, for the nerves`
             };
            break; 

        case 6:
            today = "Saturday";
            coffee = {
                color: "Blue",
                name: "frappaccino",
                pic: "images/frappaccino.jpg",
                alt: "pic of a Frappaccino",
                day: "Saturday",
                desc: `this isn't just from that other coffee shop, you know`
            };
            break;

    default:
        break;
}
console.log(coffee);

function coffeeTemplate(coffee){
    let myReturn = "";
    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee" style="float: left;">
    <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong><br>
    ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
    <p><br>`;
    console.log(myReturn);
    return myReturn;

}

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

//console.log(today);