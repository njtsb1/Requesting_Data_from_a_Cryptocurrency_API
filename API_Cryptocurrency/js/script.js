            //My api key
            var apikey = {
                key: 'd6d2aa3d-9ae9-4587-8f13-cca2683e4f8d'
            }

        //GET Fetch Requisition
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
                apikey.key)
                .then((response) => {
                    if(!response.ok) throw new Error('Error executing request, status ' + response.status);
                    return response.json();
            })
            .then((api) => {
                
                var text = "";
                // Get 10 coins and symbols 
                for(let i = 0; i < 10; i++){

                //Show API information

                   text = text + `
                  
                    <div class="average">
                        <img src="img/coin.png" class="align-self-center mr-3" alt="coin" width="80" height="80">
                        <div class="average-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <h6 class="mb-1">${api.data[i].symbol}</h6>
                        <p>${api.data[i].first_historical_data}</p>
                        </div>
                    </div>
               
                    `;

                    document.getElementById("coins").innerHTML = text;
                    
                }
            })
            .catch((error) => {
                console.error(error.message);
            });