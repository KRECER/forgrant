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
			ethereumHour.innerHTML = data['changes'].price.hour;
			ethereumDay.innerHTML = data['changes'].price.day;
			ethereumWeek.innerHTML = data['changes'].price.week;
			ethereumMonth.innerHTML = data['changes'].price.month;
			
		});
	}

	function printLitecoin(currency) {
		$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + currency, function(data) {
			litecoinPrice.innerHTML = data['ask'];
			litecoinHour.innerHTML = data['changes'].price.hour;
			litecoinDay.innerHTML = data['changes'].price.day;
			litecoinWeek.innerHTML = data['changes'].price.week;
			litecoinMonth.innerHTML = data['changes'].price.month;
			
		});
	}

	function printBitcoin(currency) {
		$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + currency, function(data) {
			bitcoinPrice.innerHTML = data['ask'];
			bitcoinHour.innerHTML = data['changes'].price.hour;
			bitcoinDay.innerHTML = data['changes'].price.day;
			bitcoinWeek.innerHTML = data['changes'].price.week;
			bitcoinMonth.innerHTML = data['changes'].price.month;
			
		});
	}

	printEthereum('USD');
	printLitecoin('USD');
	printBitcoin('USD');

	currency.addEventListener('change', function() {
		printEthereum(this.value);
		printLitecoin(this.value);
		printBitcoin(this.value);
	});
}