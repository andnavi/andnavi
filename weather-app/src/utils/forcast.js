const request = require('request')


forcast = (address,callback) => {
    url = `https://api.darksky.net/forecast/1cb2b5cb046b06d6835ed22439cb203a/${address.latitude},${address.logitude}?units=si`

    request({url , json:true},(error,response)=>{
        if(error){
            callback('weather service is not working',null)
        }else if(response.body.error){
            callback(response.body.error,null)
        }else{
            callback(null,`It is currently ${response.body.currently.temperature} degree out There is a  ${response.body.currently.precipProbability} percent of chance to rain`)
        }
    });

}

module.exports = forcast