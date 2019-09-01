const request = require('request')

const geocode = (address,callback) =>{

    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address +'.json?access_token=pk.eyJ1IjoiYWJoaTEyNzIiLCJhIjoiY2swMGY5Mm9vMHVxYzNncGRhY2dmbTRhYyJ9.qL__ORMVQUMQQ9NQJuX4jw&limit=1'

    request({url,json:true},(error,response)=>{
        if(error){
            callback('geocoding service is not working',null)
        }else if(response.body.features.length === 0){
            callback('request is not proper',null)
        }else{
            const latitude = response.body.features[0].center[1]
            const logitude = response.body.features[0].center[0]
            const place = response.body.features[0].place_name
            callback(null,
                    {
                        latitude:latitude,
                        logitude:logitude,
                        place:place

                    }
                )
        }
    })

}


module.exports = geocode