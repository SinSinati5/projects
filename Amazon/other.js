async function start(){
    
    const url = 'https://superai1.p.rapidapi.com/api/v4/chat.ask';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'add00d691amsh2269587cb1989d1p16a5dfjsn36c949a16cc4',
            'X-RapidAPI-Host': 'superai1.p.rapidapi.com'
        },
        body: {
            user_id: '123456',
            scene_id: 'p35c',
            question: {
                text: 'what can you do?'
            },
            is_stream: false
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

start()