var usd =document.querySelector (`.usd`);
var toBegin = alert `Assalomu alaykum!`;  
var purchaseSale = prompt (`Siz valyuta Sotmoqshimisiz? yoki Xarid qilmoqshimisiz? 1 sotuv, 2 xarid`);

// Sotuv
if (purchaseSale==`1`) {
    var currency = prompt (`Qaysi chet el valyutasini sotib olmoqshisiz? (USD, EUR, RUB, JPY, GBP, CHF, KZT)`);

    var HowMuch = Number (prompt(`Summani kiriting! (Uzb sumda)`));

    var USD = 11340; 
    var EUR = 12450;
    var RUB = 180;
    var JPY = 90
    var GBP = 14150
    var CHF = 12350
    var KZT = 25

    var SaleResultUsd = (HowMuch/USD);
    var UsdFixed = SaleResultUsd.toFixed(2);
    var SaleResultEur = (HowMuch/EUR);
    var EurFixed = SaleResultEur.toFixed(2);
    var SaleResultRub = (HowMuch/RUB);
    var RubFixed = SaleResultRub.toFixed(2);
    var SaleResultJpy = (HowMuch/JPY);
    var JpyFixed = SaleResultJpy.toFixed(2);
    var SaleResultGbp = (HowMuch/GBP);
    var GbpFixed = SaleResultGbp.toFixed(2);
    var SaleResultChf = (HowMuch/CHF);
    var KztFixed = SaleResultChf.toFixed(2);

    
    if (currency == "USD") {
        usd.textContent = (`${UsdFixed} $ olishingiz mumkin!`)
    }
    else if (currency == "EUR") {
        usd.textContent = (`${EurFixed} € olishingiz mumkin!`)
    }
    else if (currency == "RUB") {
        usd.textContent = (`${RubFixed} ₽ olishingiz mumkin!`)
    }
    else if (currency == "JPY") {
        usd.textContent = (`${JpyFixed} ¥ olishingiz mumkin!`)
    }
    else if (currency == "GBP") {
        usd.textContent = (`${GbpFixed} £ olishingiz mumkin!`)
    }
    else if (currency == "CHF") {
        usd.textContent = (`${ChfFixed} Fr olishingiz mumkin!`)
    }
    else if (currency == "KZT") {
        usd.textContent = (`${KztFixed} ₸ olishingiz mumkin!`)
    }
    else {
        usd.textContent = ( `ERROR`)
    }
    
}

// Xarid
else {
    var currency2= prompt (`Qaysi chet el valyutasini xarid qilmoqshisiz? (USD, EUR, RUB, JPY, GBP, CHF, KZT)`);

    var HowMuch = Number (prompt(`Summani kiriting! (Uzb sumda)`));

    var USD2 = 11300; 
    var EUR2 = 10500;
    var RUB2 = 110;
    var JPY2 = 50;
    var GBP2 = 11100;
    var CHF2 = 10500;
    var KZT2 = 15;

    var PurchaseResultUsd = (HowMuch/USD2);
    var UsdFixed= PurchaseResultUsd.toFixed(2)
    var PurchaseResultEur = (HowMuch/EUR2);
    var EurFixed= PurchaseResultEur.toFixed(2)
    var PurchaseResultRub = (HowMuch/RUB2);
    var RubFixed= PurchaseResultRub.toFixed(2)
    var PurchaseResultJpy = (HowMuch/JPY2);
    var JpyFixed = PurchaseResultJpy.toFixed(2);
    var PurchaseResultGbp = (HowMuch/GBP2);
    var GbpFixed = PurchaseResultGbp.toFixed(2);
    var PurchaseResultChf = (HowMuch/CHF2);
    var ChfFixed = PurchaseResultChf.toFixed(2);
    var PurchaseResultKzt = (HowMuch/KZT2);
    var KztFixed = PurchaseResultKzt.toFixed(2);
    
    if (currency2 == "USD") {
        usd.textContent = (`${UsdFixed} $ xarid qilishingiz mumkin!`)
    }
    else if (currency2 == "EUR") {
        usd.textContent = (`${EurFixed} € xarid qilishingiz mumkin!`)
    }
    else if (currency2 == "RUB") {
        usd.textContent = (`${RubFixed} ₽ xarid qilishingiz mumkin!`)
    }
    else if (currency2 == "JPY") {
        usd.textContent = (`${JpyFixed} ¥ xarid qilishingiz mumkin!`)
    }
    else if (currency2 == "GBP") {
        usd.textContent = (`${GbpFixed} £ xarid qilishingiz mumkin!`)
    }
    else if (currency2 == "CHF") {
        usd.textContent = (`${ChfFixed} Fr xarid qilishingiz mumkin!`)
    }
    else if (currency2 == "KZT") {
        usd.textContent = (`${KztFixed} ₸ xarid qilishingiz mumkin!`)
    }
    else {
        usd.textContent = ( `ERROR`)
    }
}






















