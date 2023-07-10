function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


var json;





var mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var jokes = [ 
"Jokes about tofu are tasteless.",
"I\'m tired of people telling me to turn off my lights to save the environment. I tried it once, and nearly killed some guy on a bike.",
"Which musical instrument is optimally eco-friendly and yet contains CO2? An air guitar.",
"I now always ride to school by bike. It\'s supposed to be better for the environment. It\'s just difficult to get the bike in and out of the trunk.",
"Organic is only for young people. At my age, I rely on every preservative I can get.",
"I have no ecological footprint - because I go everywhere by car.",
"The teacher asks the class: \"What do you mean by the use of hydroelectric power? - 14-year-old Susi speaks up and asks: \"If I cry until dad buys me new shoes?",
"Organic is healthy? Then try an organic salad made from tuberous-leaved mushrooms and fly agarics.",
"I am WGtarian. I eat what my roommates cook.",
"Two planets meet far out in space. One planet says to the other planet, \"Well, you look like hell!\" - The other planet replies, \"I don\'t feel so good either.\" \"What\'s wrong with you?\" asks the first. \"I have homosapiens!\" complains the second. \"Oh,\" says the first one laughing, \"don\'t worry about it, I\'ve had that too, it\'ll pass soon.\"",
"If trees sent wifi signals, people would plant more of them. Too bad they only produce this oxygen stuff.",
"Animals do not pollute the environment like humans. Please behave like animals!",
"If one glacier says to the other: \"You still owe me 1,000 euros! - the other replies: \"Give me a few more days, soon I\'ll be liquid again.",
"Freedom for the gummy bears! Away with the plastic bags!",
"What is the most dangerous season? Summer: the sun stings, the heads of lettuce shoot, the trees lash out and the lawn is blown up.",
"Do you know what the difference is between a human being and a mouse? Man invented the atomic bomb. A mouse would never invent a mousetrap.",
"What is the surest remedy against the greenhouse effect? The nuclear winter.",
"If you\'re not a big light, at least you\'ll save electricity.",
"What are politics doing to combat climate change? They are limiting heated debates on environmental protection measures to one hour.",
"How can you recognize fine dust at home? Thick air, no traffic.",
"Says one cow to the other: \"You better not fart, we wanted to do something for climate protection!\"",
"I do not have cobwebs in the apartment - they are eco-dream catchers!",
"Stands a tree alone in the forest.",
"What\'s so eco about the organic asparagus? Did the harvest workers come from Poland by bike?",
"Environmental protection can be so simple! For example, I have deliberately never bought a jet or a yacht.",
"Says one snake to the other, \"Say, are we actually poisonous?\" - replies the other: I don\'t know, why?\" - the other says: \"I just bit my tongue.\"",
"How do you recognize a green SUV? By the color!",
"Mother to son: \"You shouldn\'t always lounge around so lazily on the couch!\" - Son: \"I\'m doing something for the environment - I\'m saving energy!",
"Air travel is very environmentally friendly, if you exchange it for a train ticket shortly before departure.",
"Why should we stop hiring Polish ice cream vendors? Because the ice melts so quickly at the Poles.",
"Tip for environmental protection: Instead of using an ice scraper made of harmful plastic, it is better to let your own car warm up for 10 minutes.",
"What does an eco-friendly prisoner ask for? A solar cell." 
];

document.getElementById("dad").innerText = jokes[getRandomInt(jokes.length)];

async function start(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'add00d691amsh2269587cb1989d1p16a5dfjsn36c949a16cc4',
            'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
        }
    };
    
    
    
    /*
-Nasa Climate - 2 & 3
-United Nations - ???
-Carbon Brief - 2 & 3 & 4
-The Guardian - 0 & 1
    */

    const resp = await fetch('https://climate-news-feed.p.rapidapi.com/?limit=10', options);
    json = await resp.json();

    console.log(json);

    for(let i = 0; i < 10; i++){
        document.getElementById(`img${i + 1}`).src = json.articles[i].thumbnail;

        document.getElementById(`button${i + 1}`).innerText = json.articles[i].title + " - " + mon[parseInt(json.articles[i].published.substring(5, 7)) - 1] + " " + json.articles[i].published.substring(8, 10) +  ", " + json.articles[i].published.substring(0, 4); 
        //year = 0 to 3, month = 5 to 6, day = 8 to 9
    }
    
}

start();

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");



button1.addEventListener("click", b1);
button2.addEventListener("click", b2);
button3.addEventListener("click", b3);
button4.addEventListener("click", b4);
button5.addEventListener("click", b5);
button6.addEventListener("click", b6);
button7.addEventListener("click", b7);
button8.addEventListener("click", b8);
button9.addEventListener("click", b9);
button10.addEventListener("click", b10);


async function b1(){
    window.open(json.articles[0].url, '_blank');
}
async function b2(){
    window.open(json.articles[1].url, '_blank');
}

async function b3(){
    window.open(json.articles[2].url, '_blank');
}

async function b4(){
    window.open(json.articles[3].url, '_blank');
}

async function b5(){
    window.open(json.articles[4].url, '_blank');
}
async function b6(){
    window.open(json.articles[5].url, '_blank');
}
async function b7(){
    window.open(json.articles[6].url, '_blank');
}

async function b8(){
    window.open(json.articles[7].url, '_blank');
}

async function b9(){
    window.open(json.articles[8].url, '_blank');
} 

async function b10(){
    window.open(json.articles[9].url, '_blank');
}