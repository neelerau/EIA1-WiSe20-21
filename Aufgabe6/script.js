var Kontinent;
(function (Kontinent) {
    // Emissionswerte der verschiedenen Kontinente
    // Werte Africa
    var africa2008 = 1028;
    var africa2018 = 1235.5;
    // Werte South America
    var southamerica2008 = 1132.6;
    var southamerica2018 = 1261.5;
    // Werte Europe
    var europe2008 = 4965.7;
    var europe2018 = 4209.3;
    // Werte North America
    var northamerica2008 = 6600.4;
    var northamerica2018 = 6036.6;
    // Werte Asia
    var asia2008 = 12954.7;
    var asia2018 = 16274.1;
    // Werte Australia
    var australia2008 = 1993;
    var australia2018 = 2100.5;
    // Berechnungen 
    var emissionenGesamt = africa2018 + southamerica2018 + northamerica2018 + europe2018 + asia2018 + australia2018;
    //Africa
    var africaProzentGesamt = ((africa2018 / emissionenGesamt) * 100);
    var africaProzentVergleich = (((africa2018 / africa2008) - 1) * 100);
    var africaVergleich = (africa2018 - africa2008);
    //South America
    var southamericaProzentGesamt = ((southamerica2018 / emissionenGesamt) * 100);
    var southamericaProzentVergleich = (((southamerica2018 / southamerica2008) - 1) * 100);
    var southamericaVergleich = (southamerica2018 - southamerica2008);
    //North America
    var northamericaProzentGesamt = ((northamerica2018 / emissionenGesamt) * 100);
    var northamericaProzentVergleich = (((northamerica2018 / northamerica2008) - 1) * 100);
    var northamericaVergleich = (northamerica2018 - northamerica2008);
    //Europe
    var europeProzentGesamt = ((europe2018 / emissionenGesamt) * 100);
    var europeProzentVergleich = (((europe2018 / europe2008) - 1) * 100);
    var europeVergleich = (europe2018 - europe2008);
    //Asia
    var asiaProzentGesamt = ((asia2018 / emissionenGesamt) * 100);
    var asiaProzentVergleich = (((africa2018 / asia2008) - 1) * 100);
    var asiaVergleich = ((asia2018 - asia2008));
    //Australia
    var ausraliaProzentGesamt = ((australia2018 / emissionenGesamt) * 100);
    var australiaProzentVergleich = (((australia2018 / australia2008) - 1) * 100);
    var australiaVergleich = (australia2018 - australia2008);
    // Funktion für Kontinente
    function emissionen(continent, continent2018, prozentGesamt, ProzentVergleich, Vergleich) {
        document.getElementById("überschrift1").innerHTML = continent2018 + "kg CO2";
        document.getElementById("überschrift2").innerHTML = prozentGesamt.toFixed(1) + "%";
        document.getElementById("überschrift3").innerHTML = ProzentVergleich.toFixed(1) + "%";
        document.getElementById("überschrift4").innerHTML = Vergleich.toFixed(1) + "kg CO2";
        document.querySelector(".chart").setAttribute('style', 'height:' + ((continent2018 / emissionenGesamt) * 100) + '%');
        document.getElementById("titleRegion").innerHTML = continent;
        document.getElementById("titleRegion2").innerHTML = continent;
    }
    ;
    // Funktionen für Afrika
    document.getElementById("africa").addEventListener("click", function () {
        emissionen("Africa", africa2018, africaProzentGesamt, africaProzentVergleich, africaVergleich);
    });
    // Funktionen für South America
    document.getElementById("southamerica").addEventListener("click", function () {
        emissionen("South America", southamerica2018, southamericaProzentGesamt, southamericaProzentVergleich, southamericaVergleich);
    });
    // Funktionen für North America
    document.getElementById("northamerica").addEventListener("click", function () {
        emissionen("North America", northamerica2018, northamericaProzentGesamt, northamericaProzentVergleich, northamericaVergleich);
    });
    // Funktionen für Europe
    document.getElementById("europe").addEventListener("click", function () {
        emissionen("Europe", europe2018, europeProzentGesamt, europeProzentVergleich, europeVergleich);
    });
    // Funktionen für Asia
    document.getElementById("asia").addEventListener("click", function () {
        emissionen("Asia", asia2018, asiaProzentGesamt, asiaProzentVergleich, asiaVergleich);
    });
    // Funktionen für Australia
    document.getElementById("australia").addEventListener("click", function () {
        emissionen("Australia", australia2018, ausraliaProzentGesamt, australiaProzentVergleich, australiaVergleich);
    });
})(Kontinent || (Kontinent = {}));
//# sourceMappingURL=script.js.map