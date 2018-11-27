window.onload = function () {
	var currency = document.querySelector('.crypto__currency');
	var ethereum = document.querySelector('.crypto__item--ethereum');
	var ethereumPrice = document.querySelector('.crypto__item--ethereum .crypto__value--price');
	var ethereumHour = document.querySelector('.crypto__item--ethereum .crypto__value--hour');
	var ethereumDay = document.querySelector('.crypto__item--ethereum .crypto__value--day');
	var ethereumWeek = document.querySelector('.crypto__item--ethereum .crypto__value--week');
	var ethereumMonth = document.querySelector('.crypto__item--ethereum .crypto__value--month');
	var litecoin = document.querySelector('.crypto__item--litecoin');
	var litecoinPrice = document.querySelector('.crypto__item--litecoin .crypto__value--price');
	var litecoinHour = document.querySelector('.crypto__item--litecoin .crypto__value--hour');
	var litecoinDay = document.querySelector('.crypto__item--litecoin .crypto__value--day');
	var litecoinWeek = document.querySelector('.crypto__item--litecoin .crypto__value--week');
	var litecoinMonth = document.querySelector('.crypto__item--litecoin .crypto__value--month');
	var bitcoin = document.querySelector('.crypto__item--bitcoin');
	var bitcoinPrice = document.querySelector('.crypto__item--bitcoin .crypto__value--price');
	var bitcoinHour = document.querySelector('.crypto__item--bitcoin .crypto__value--hour');
	var bitcoinDay = document.querySelector('.crypto__item--bitcoin .crypto__value--day');
	var bitcoinWeek = document.querySelector('.crypto__item--bitcoin .crypto__value--week');
	var bitcoinMonth = document.querySelector('.crypto__item--bitcoin .crypto__value--month');

	function printEthereum(currency) {
		$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' + currency, function(data) {
			ethereumPrice.innerHTML = data['ask'];
			ethereumHour.innerHTML = data['open'].hour;
			ethereumDay.innerHTML = data['open'].day;
			ethereumWeek.innerHTML = data['open'].week;
			ethereumMonth.innerHTML = data['open'].month;
			
		});
	}

	function printLitecoin(currency) {
		$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + currency, function(data) {
			litecoinPrice.innerHTML = data['ask'];
			litecoinHour.innerHTML = data['open'].hour;
			litecoinDay.innerHTML = data['open'].day;
			litecoinWeek.innerHTML = data['open'].week;
			litecoinMonth.innerHTML = data['open'].month;
			
		});
	}

	function printBitcoin(currency) {
		$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + currency, function(data) {
			bitcoinPrice.innerHTML = data['ask'];
			bitcoinHour.innerHTML = data['open'].hour;
			bitcoinDay.innerHTML = data['open'].day;
			bitcoinWeek.innerHTML = data['open'].week;
			bitcoinMonth.innerHTML = data['open'].month;
			
		});
	}

	currency.addEventListener('change', function() {
		if (this.value == 'USD') {
			printEthereum('USD');
			printLitecoin('USD');
			printBitcoin('USD');
		} else if (this.value == 'EUR') {
			printEthereum('EUR');
			printLitecoin('EUR');
			printBitcoin('EUR');
		} else if (this.value == 'RUB') {
			printEthereum('RUB');
			printLitecoin('RUB');
			printBitcoin('RUB');
		} else if (this.value == 'GBP') {
			printEthereum('GBP');
			printLitecoin('GBP');
			printBitcoin('GBP');
		} 
	});
}