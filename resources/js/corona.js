const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


const size = window.innerWidth - (window.innerWidth / 10) * 2;
let step 
canvas.width = size;
canvas.height = size;

const url = "https://corona-api.com/countries";

let countries = []
let colors = [
    '#f368e0',
    '#ff9f43',
    '#ee5253',
    '#0abde3',
    '#10ac84'
]

async function getData() {
    const response = await fetch(url);
    const APIdata = await response.json();
    const data = APIdata.data;

    let country;

    for(let x = 0; x < data.length; x++){
        country = {
            name: data[x].name,
            population: data[x].population,
            deaths: data[x].latest_data.deaths,
            confirmed: data[x].latest_data.confirmed,
            recovered: data[x].latest_data.recovered
        }
        countries.push(country)
    }
    animate();
}

function draw () {
    let x = 0;
    let y = 0;
    step = size / countries.length;

    for (let i = 0; i < countries.length; i++) {
        context.beginPath();
        context.arc(x, y, countries[i].confirmed/100, 0, Math.PI * 2, false);
        context.stroke();

        context.beginPath();
        context.arc(x, y, countries[i].deaths/500, 0, Math.PI * 2, false);
        context.fill();

        y += step;
        x += step;
    }
}

// Animate function definition
function animate() {
    requestAnimationFrame(animate);
    
    context.clearRect(0, 0, size, size);

    // move circles
    let temp = countries.pop();
    countries.unshift(temp);
    
    draw();
}

getData();