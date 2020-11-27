
namespace Kontinent{

// Emissionswerte der verschiedenen Kontinente

// Werte Africa
const africa2008 : number = 1028;
const africa2018 : number = 1235.5;

// Werte South America
const southamerica2008 : number = 1132.6;
const southamerica2018 : number = 1261.5;

// Werte Europe
const europe2008 : number = 4965.7;
const europe2018 : number = 4209.3;

// Werte North America
const northamerica2008 : number = 6600.4;
const northamerica2018 : number = 6036.6;

// Werte Asia
const asia2008 : number = 12954.7;
const asia2018 : number = 16274.1;

// Werte Australia
const australia2008 : number = 1993;
const australia2018 : number = 2100.5;


// Berechnungen 

const emissionenGesamt = africa2018 + southamerica2018 + northamerica2018 + europe2018 + asia2018 + australia2018;
//Africa
const africaProzentGesamt = ((africa2018 / emissionenGesamt) * 100);
const africaProzentVergleich = (((africa2018 / africa2008) - 1) * 100);
const africaVergleich = (africa2018 - africa2008);
//South America
const southamericaProzentGesamt = ((southamerica2018 / emissionenGesamt) * 100);
const southamericaProzentVergleich = (((southamerica2018 / southamerica2008) - 1) * 100);
const southamericaVergleich = (southamerica2018 - southamerica2008);
//North America
const northamericaProzentGesamt = ((northamerica2018 / emissionenGesamt) * 100);
const northamericaProzentVergleich = (((northamerica2018 / northamerica2008) - 1) * 100);
const northamericaVergleich = (northamerica2018 - northamerica2008);
//Europe
const europeProzentGesamt = ((europe2018 / emissionenGesamt) * 100);
const europeProzentVergleich = (((europe2018 / europe2008) - 1) * 100);
const europeVergleich = (europe2018 - europe2008);
//Asia
const asiaProzentGesamt = ((Math.round)(asia2018 / emissionenGesamt) * 100);
const asiaProzentVergleich = (((africa2018 / asia2008) - 1) * 100);
const asiaVergleich = ((asia2018 - asia2008));
//Australia
const ausraliaProzentGesamt = ((australia2018 / emissionenGesamt) * 100);
const australiaProzentVergleich = (((australia2018 / australia2008) - 1) * 100);
const australiaVergleich = (australia2018 - australia2008);

// Funktion für Kontinente
function emissionen( continent: string, continent2018: number, prozentGesamt: number, ProzentVergleich: number, Vergleich: number)
{
    document.querySelector("#h2.1").innerHTML = continent2018 + "kg CO2";
    document.querySelector("#h2.2").innerHTML = prozentGesamt + "%";
    document.querySelector("#h2.3").innerHTML = ProzentVergleich + "%";
    document.querySelector("#h2.4").innerHTML = Vergleich + "kg CO2";
    document.querySelector(".chart").setAttribute('style', 'height:' + ((africa2018 / emissionenGesamt) * 100) + '%');
    document.getElementById("#titleRegion").innerHTML = continent;
    document.getElementById("#titleRegion2").innerHTML = continent;
};

// Funktionen für Afrika
   document.getElementById("#africa").addEventListener("click", function () {
      emissionen("Africa",africa2018, africaProzentGesamt, africaProzentVergleich, africaVergleich );
      });
// Funktionen für South America
   document.getElementById("#southamerica").addEventListener("click", function () {
      emissionen("South America",southamerica2018, southamericaProzentGesamt, southamericaProzentVergleich, southamericaVergleich );
      });
// Funktionen für North America
   document.getElementById("#northamerica").addEventListener("click", function () {
      emissionen("North America",northamerica2018, northamericaProzentGesamt, northamericaProzentVergleich, northamericaVergleich);
      });
// Funktionen für Europe
   document.getElementById("#europe").addEventListener("click", function () {
      emissionen( "Europe",europe2018, europeProzentGesamt, europeProzentVergleich, europeVergleich);
      });
// Funktionen für Asia
   document.getElementById("#asia").addEventListener("click", function (){
      emissionen("Asia",asia2018, asiaProzentGesamt, asiaProzentVergleich, asiaVergleich );
      });
// Funktionen für Australia
   document.getElementById("#australia").addEventListener("click", function () {
      emissionen("Australia",australia2018, ausraliaProzentGesamt, australiaProzentVergleich, australiaVergleich);
      });
   
}