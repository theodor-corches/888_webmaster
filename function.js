fetch('http://feedsapi.safe-installation.com/api/GetJackpotTotalAmount?CurrencyCode=USD&currencySymbol=$&BrandID=0').then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
    let jackpotAmount = data.entity.totalAmount;
    document.getElementById("jackpotAmount").innerHTML = "$" + jackpotAmount.toLocaleString();

    if(data.entity.currencyCode == 'USD'){
        setInterval(function() {
            var increaseAmount = (Math.floor(Math.random() * 10) + 1) / 100;
            jackpotAmount += increaseAmount;
            document.getElementById("jackpotAmount").innerHTML = "$" + jackpotAmount.toLocaleString();
          }, 3000);
    }
    else {
        document.getElementById("jackpotAmount").innerHTML = jackpotAmount.toLocaleString();
    }
    
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});