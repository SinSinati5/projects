const axios = require('axios');
const cheerio = require('cheerio');

let reviewList = []; // Declare the reviewList as a global variable

async function start(inputdata){


  var bodys = {role:'user',content: `can you summarize these reviews? ${inputdata}`};
  const bodyn = JSON.stringify(bodys);

  
  const options = {
    method: 'POST',
    url: 'https://chatgpt53.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'add00d691amsh2269587cb1989d1p16a5dfjsn36c949a16cc4',
      'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
    },
    data: {
      messages: [
        {
          role: 'user',
          content: `can you summarize these reviews? ${inputdata}`
        }
      ],
      temperature: 1
    }
  };
    

    const resp = await axios.request(options);
      
    
    console.log(resp.data.choices[0].message.content);

}

async function getAmazonReviews(url) {
  try {
    const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "axios 0.21.1"
        }
      });
    const $ = cheerio.load(response.data);

    const reviews = [];

    $('.review').each((index, element) => {
      const reviewText = $(element).find('.review-text').text().trim();
      reviews.push(reviewText);
    });

    reviewList = reviews; // Assign the reviews to the global variable

    return reviews;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}


// Example usage
const amazonUrl = 'https://www.amazon.com/Ailun-iPhone-11-Pro-5-8/dp/B075S8V728?pd_rd_w=MTYvI&content-id=amzn1.sym.c15e5526-d433-4ac0-a393-a3f3f7218fab&pf_rd_p=c15e5526-d433-4ac0-a393-a3f3f7218fab&pf_rd_r=SW072VEBV7GMZB0QESY1&pd_rd_wg=YLtaY&pd_rd_r=c27130df-fe89-4adb-aa7a-0dd905e8508c&pd_rd_i=B075S8V728&psc=1&ref_=pd_bap_d_grid_rp_0_4_nped_t';


setTimeout(() => {
    getAmazonReviews(amazonUrl)
      .then(reviews => {
        console.log(reviews)
        start(reviews)

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, 5000); 
