window.onload=function(){var e=document.querySelector(".crypto__currency"),t=document.querySelector(".crypto__currency").value,c=" $",n=(document.querySelector(".crypto__item--ethereum"),document.querySelector(".crypto__item--ethereum .crypto__value--price")),r=document.querySelector(".crypto__item--ethereum .crypto__value--hour"),i=document.querySelector(".crypto__item--ethereum .crypto__value--day"),o=document.querySelector(".crypto__item--ethereum .crypto__value--week"),a=document.querySelector(".crypto__item--ethereum .crypto__value--month"),u=(document.querySelector(".crypto__item--litecoin"),document.querySelector(".crypto__item--litecoin .crypto__value--price")),l=document.querySelector(".crypto__item--litecoin .crypto__value--hour"),_=document.querySelector(".crypto__item--litecoin .crypto__value--day"),p=document.querySelector(".crypto__item--litecoin .crypto__value--week"),y=document.querySelector(".crypto__item--litecoin .crypto__value--month"),s=(document.querySelector(".crypto__item--bitcoin"),document.querySelector(".crypto__item--bitcoin .crypto__value--price")),h=document.querySelector(".crypto__item--bitcoin .crypto__value--hour"),m=document.querySelector(".crypto__item--bitcoin .crypto__value--day"),g=document.querySelector(".crypto__item--bitcoin .crypto__value--week"),d=document.querySelector(".crypto__item--bitcoin .crypto__value--month"),v=document.querySelectorAll(".crypto__toggle");T("USD"),H("USD"),S("USD");for(var L=0;L<v.length;L++)v[L].onclick=function(){M(),this.checked?this.classList.contains("crypto__toggle--ethereum")?T(t,!0):this.classList.contains("crypto__toggle--litecoin")?H(t,!0):S(t,!0):this.classList.contains("crypto__toggle--ethereum")?T(t):this.classList.contains("crypto__toggle--litecoin")?H(t):S(t)};function T(e,t){t?$.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH"+e,function(e){n.innerHTML=e.ask+c,r.innerHTML=e.changes.percent.hour+"%",i.innerHTML=e.changes.percent.day+"%",o.innerHTML=e.changes.percent.week+"%",a.innerHTML=e.changes.percent.month+"%"}):$.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH"+e,function(e){n.innerHTML=e.ask+c,r.innerHTML=e.changes.price.hour+c,i.innerHTML=e.changes.price.day+c,o.innerHTML=e.changes.price.week+c,a.innerHTML=e.changes.price.month+c})}function H(e,t){t?$.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC"+e,function(e){u.innerHTML=e.ask+c,l.innerHTML=e.changes.percent.hour+"%",_.innerHTML=e.changes.percent.day+"%",p.innerHTML=e.changes.percent.week+"%",y.innerHTML=e.changes.percent.month+"%"}):$.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC"+e,function(e){u.innerHTML=e.ask+c,l.innerHTML=e.changes.price.hour+c,_.innerHTML=e.changes.price.day+c,p.innerHTML=e.changes.price.week+c,y.innerHTML=e.changes.price.month+c})}function M(){for(var e=document.querySelectorAll(".crypto__value"),t=0;t<e.length;t++)-1<e[t].innerHTML.indexOf("-")&&(console.log(e[t].innerHTML.indexOf("-")),e[t].classList.add("crypto__value--negative"))}function S(e,t){t?$.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC"+e,function(e){s.innerHTML=e.ask+c,h.innerHTML=e.changes.percent.hour+"%",m.innerHTML=e.changes.percent.day+"%",g.innerHTML=e.changes.percent.week+"%",d.innerHTML=e.changes.percent.month+"%"}):$.get("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC"+e,function(e){s.innerHTML=e.ask+c,h.innerHTML=e.changes.price.hour+c,m.innerHTML=e.changes.price.day+c,g.innerHTML=e.changes.price.week+c,d.innerHTML=e.changes.price.month+c})}e.addEventListener("change",function(){c="USD"==this.value?" $":"EUR"==this.value?" €":"RUB"==this.value?" ₽":" £",T(this.value),H(this.value),S(this.value)})};