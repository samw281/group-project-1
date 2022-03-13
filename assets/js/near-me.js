var yelpUrl = "https://api.yelp.com/v3/businesses/WavvLdfdP6g8aZTtbBQHTw"
var api = function() {
    fetch(yelpUrl, {method: "GET", headers: {"Authorization": "Bearer 4lgdsl-360MnGas0cE_LkppLHrDh8gH7LRWVu8NY9cX9VWK35EPOcbaM0_782XfeVuOiG-JfYti8KGH-R4EQAY6iuDoL9by5Sby5PenpA1UoOCWzrd_4idCJVNosYnYx"}})
    .then(function(response){
        if(response.ok) {
            console.log(response);
    }})
    
    .catch((error)=> console.error(error)) 

}

api();
    // response.json().then(function(data){
    // console.log(data)
    // })

