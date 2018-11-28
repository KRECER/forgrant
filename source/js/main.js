window.onload = function () {
	var currency = document.querySelector('.crypto__currency');
	var currencyVal = document.querySelector('.crypto__currency').value;
	var currencySymbol = ' $';
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

	var toggles = document.querySelectorAll('.crypto__toggle');

	printEthereum('USD');
	printLitecoin('USD');
	printBitcoin('USD');

	for (var i = 0; i < toggles.length; i++) {
		toggles[i].onclick = function() {
			searchNegative();
			if (this.checked) {
				if ( this.classList.contains('crypto__toggle--ethereum') ) {
					printEthereum(currencyVal, true);
					console.log('11111');
				} else if ( this.classList.contains('crypto__toggle--litecoin') ) {
					printLitecoin(currencyVal, true);
				} else {
					printBitcoin(currencyVal, true);
				}
			} else {
				if ( this.classList.contains('crypto__toggle--ethereum') ) {
					printEthereum(currencyVal);
				} else if ( this.classList.contains('crypto__toggle--litecoin') ) {
					printLitecoin(currencyVal);
				} else {
					printBitcoin(currencyVal);
				}
			}
		}
	}

	function printEthereum(currency, percent) {
		if (percent) {
			$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' + currency, function(data) {
				ethereumPrice.innerHTML = data['ask'] + currencySymbol;
				ethereumHour.innerHTML = data['changes'].percent.hour + '%';
				ethereumDay.innerHTML = data['changes'].percent.day + '%';
				ethereumWeek.innerHTML = data['changes'].percent.week + '%';
				ethereumMonth.innerHTML = data['changes'].percent.month + '%';
			});
		} else {
			$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' + currency, function(data) {
				ethereumPrice.innerHTML = data['ask'] + currencySymbol;
				ethereumHour.innerHTML = data['changes'].price.hour + currencySymbol;
				ethereumDay.innerHTML = data['changes'].price.day + currencySymbol;
				ethereumWeek.innerHTML = data['changes'].price.week + currencySymbol;
				ethereumMonth.innerHTML = data['changes'].price.month + currencySymbol;
			});
		}
	}

	function printLitecoin(currency, percent) {
		if (percent) {
			$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + currency, function(data) {
				litecoinPrice.innerHTML = data['ask'] + currencySymbol;
				litecoinHour.innerHTML = data['changes'].percent.hour + '%';
				litecoinDay.innerHTML = data['changes'].percent.day + '%';
				litecoinWeek.innerHTML = data['changes'].percent.week + '%';
				litecoinMonth.innerHTML = data['changes'].percent.month + '%';
			});
		} else {
			$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + currency, function(data) {
				litecoinPrice.innerHTML = data['ask'] + currencySymbol;
				litecoinHour.innerHTML = data['changes'].price.hour + currencySymbol;
				litecoinDay.innerHTML = data['changes'].price.day + currencySymbol;
				litecoinWeek.innerHTML = data['changes'].price.week + currencySymbol;
				litecoinMonth.innerHTML = data['changes'].price.month + currencySymbol;
			});
		}
	}

	function searchNegative() {
		var cryptoValue = document.querySelectorAll('.crypto__value');

		for (var i = 0 ; i < cryptoValue.length; i++) {
			if ( cryptoValue[i].innerHTML.indexOf('-') > -1) {
				console.log(cryptoValue[i].innerHTML.indexOf('-'));
				cryptoValue[i].classList.add('crypto__value--negative');
			}
		}
	}

	function printBitcoin(currency, percent) {
		if (percent) {
			$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + currency, function(data) {
				bitcoinPrice.innerHTML = data['ask'] + currencySymbol;
				bitcoinHour.innerHTML = data['changes'].percent.hour + '%';
				bitcoinDay.innerHTML = data['changes'].percent.day + '%';
				bitcoinWeek.innerHTML = data['changes'].percent.week + '%';
				bitcoinMonth.innerHTML = data['changes'].percent.month + '%';
			});
		} else {
			$.get('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + currency, function(data) {
				bitcoinPrice.innerHTML = data['ask'] + currencySymbol;
				bitcoinHour.innerHTML = data['changes'].price.hour + currencySymbol;
				bitcoinDay.innerHTML = data['changes'].price.day + currencySymbol;
				bitcoinWeek.innerHTML = data['changes'].price.week + currencySymbol;
				bitcoinMonth.innerHTML = data['changes'].price.month + currencySymbol;
			});
		}
	}

	currency.addEventListener('change', function() {
		if (this.value == 'USD') {
			currencySymbol = ' $';
		} else if (this.value == 'EUR') {
			currencySymbol = ' €';
		} else if (this.value == 'RUB') {
			currencySymbol = ' ₽';
		} else {
			currencySymbol = ' £';
		}

		printEthereum(this.value);
		printLitecoin(this.value);
		printBitcoin(this.value);

	});
}