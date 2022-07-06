const axios = require("axios");
async function getAPIAsync(){
    let json = await axios.get('https://api.nasa.gov/planetary/apod?api_key=bQqeeWL7h1JmNABcitgdzSHHiWSW8QioRPVD3pWH')
    return json.data
}

getAPIAsync().then((result)=>{console.log(result)})

// function getAPI(){
//     return new Promise(function (resolve){
//         axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//             .then((json)=>{
//                 resolve(json.data)
//             })
//     })
// }
//
// getAPI().then(result => {
//     console.log(result);
// })