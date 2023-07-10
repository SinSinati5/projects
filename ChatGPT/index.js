var button = document.getElementById("button");

var loader = document.getElementById("loader1");


var output = document.getElementById("output");
var input = document.getElementById("input");


button.addEventListener("click", start);

async function start(){
    loader.style.visibility = "visible";

    var inputdata = input.value;

    var bodys = {"prompt":inputdata};
    const bodyn = JSON.stringify(bodys);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'add00d691amsh2269587cb1989d1p16a5dfjsn36c949a16cc4',
            'X-RapidAPI-Host': 'you-chat-gpt.p.rapidapi.com'
        },
        body: bodyn
    };

    

    const resp = await fetch('https://you-chat-gpt.p.rapidapi.com/TextOnly', options);
    const json = await resp.json();
    
    
    console.log(json.answer);
    output.innerHTML = json.answer;
    loader.style.visibility = "hidden";

    

    


}





