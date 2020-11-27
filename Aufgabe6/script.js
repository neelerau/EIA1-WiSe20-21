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
var africaProzentGesamt = ((Math.round)(africa2018 / emissionenGesamt) * 100);
var africaProzentVergleich = ((Math.round)((africa2018 / africa2008) - 1) * 100);
var africaVergleich = ((Math.round)(africa2018 - africa2008));
//South America
var southamericaProzentGesamt = ((Math.round)(southamerica2018 / emissionenGesamt) * 100);
var southamericaProzentVergleich = ((Math.round)((southamerica2018 / southamerica2008) - 1) * 100);
var southamericaVergleich = ((Math.round)(southamerica2018 - southamerica2008));
//North America
var northamericaProzentGesamt = ((Math.round)(northamerica2018 / emissionenGesamt) * 100);
var northamericaProzentVergleich = ((Math.round)((northamerica2018 / northamerica2008) - 1) * 100);
var northamericaVergleich = ((Math.round)(northamerica2018 - northamerica2008));
//Europe
var europeProzentGesamt = ((Math.round)(europe2018 / emissionenGesamt) * 100);
var europeProzentVergleich = ((Math.round)((europe2018 / europe2008) - 1) * 100);
var europeVergleich = ((Math.round)(europe2018 - europe2008));
//Asia
var asiaProzentGesamt = ((Math.round)(asia2018 / emissionenGesamt) * 100);
var asiaProzentVergleich = ((Math.round)((africa2018 / asia2008) - 1) * 100);
var asiaVergleich = ((Math.round)(asia2018 - asia2008));
//Australia
var ausraliaProzentGesamt = ((Math.round)(australia2018 / emissionenGesamt) * 100);
var australiaProzentVergleich = ((Math.round)((australia2018 / australia2008) - 1) * 100);
var australiaVergleich = ((Math.round)(australia2018 - australia2008));
// Funktion für Kontinente
function emissionen(continent, continet2018, ProzentGesamt, ProzentVergleich, Vergleich) {
    document.querySelector("h1").innerHTML;
    'Carbon Dioxid Emissions in' + "continent";
    document.querySelector("#h2a").innerHTML;
    'continent2018';
    document.querySelector("p").innerHTML;
    "Emission absolut of" + "continent" + "2018";
    document.querySelector("#h2b").innerHTML;
    "ProzentGesamt" + "%";
    document.querySelector("#h2c").innerHTML;
    "ProzentVergleich" + "%";
    document.querySelector("#h2d").innerHTML;
    "Vergleich" + "kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height:' + ((africa2018 / emissionenGesamt) * 100) + '%');
}
// Funktionen für Afrika
document.querySelector(".africa").addEventListener("click", emissionen.bind(null, "Africa", africa2018, africaProzentGesamt, africaProzentVergleich, africaVergleich));
// Funktionen für South America
document.querySelector(".southamerica").addEventListener("click", emissionen.bind(null, "South America", southamerica2018, southamericaProzentGesamt, southamericaProzentVergleich, southamericaVergleich));
// Funktionen für North America
document.querySelector(".northamerica").addEventListener("click", emissionen.bind(null, "North America", northamerica2018, northamericaProzentGesamt, northamericaProzentVergleich, northamericaVergleich));
// Funktionen für Europe
document.querySelector(".europe").addEventListener("click", emissionen.bind(null, "Europe", europe2018, europeProzentGesamt, europeProzentVergleich, europeVergleich));
// Funktionen für Asia
document.querySelector(".asia").addEventListener("click", emissionen.bind(null, "Asia", asia2018, asiaProzentGesamt, asiaProzentVergleich, asiaVergleich));
// Funktionen für Australia
document.querySelector(".australia").addEventListener("click", emissionen.bind(null, "Australia", australia2018, ausraliaProzentGesamt, australiaProzentVergleich, australiaVergleich));
//# sourceMappingURL=script.js.map