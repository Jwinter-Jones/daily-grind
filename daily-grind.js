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
    
    case 2:
        today = "Tuesday";
        coffee = {
            color: "orange",
            name: "Flat White",
            pic: "images/Flat-White.jpg",
            alt: "A pic of Flat White",
            day: "Tuesday",
            desc: 'If its not flat white, then its not right'
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

        case 4:
            today = "Thursday";
            coffee = {
                color: "red",
                name: "Cortado",
                pic: "images/Cortado.png",
                alt: "A pic of Cortado",
                day: "Thursday",
                desc: 'I love me some Cortado'
            };
            break;


        case 5:
            today = "Friday";
            coffee = {
                color: "green",
                name: "Cappuccino",
                pic: "images/Cappuccino.jpg",
                alt: "A pic of Cappuccino",
                day: "Friday",
                desc: `With this cappuccino, i can take on a rhino`
             };
            break; 

        case 6:
            today = "Saturday";
            coffee = {
                color: "Blue",
                name: "Affogato",
                pic: "images/Affogato.jpg",
                alt: "A pic of Affogato",
                day: "Saturday",
                desc: `Which will wake me up? mi gato? Or my Affogato?`
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
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
    <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong>
    ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
    <p>`;
    console.log(myReturn);
    return myReturn;

}

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;

//console.log(today);