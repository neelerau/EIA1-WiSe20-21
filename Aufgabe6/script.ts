// Emissionswerte der verschiedenen Kontinente

// Werte Africa
var africa2008 : number = 1028;
var africa2018 : number = 1235.5;

// Werte South America
var southamerica2008 : number = 1132.6;
var southamerica2018 : number = 1261.5;

// Werte Europe
var europe2008 : number = 4965.7;
var europe2018 : number = 4209.3;

// Werte North America
var northamerica2008 : number = 6600.4;
var northamerica2018 : number = 6036.6;

// Werte Asia
var asia2008 : number = 12954.7;
var asia2018 : number = 16274.1;

// Werte Australia
var australia2008 : number = 1993;
var australia2018 : number = 2100.5;


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


// Konsolenausgaben
console.log ('-Die Emissionswerte der verschiedenen Regionen unserer Welt-');
//Konsolenausgabe für Afrika:
console.log ('Die Emission von Afrika ist: ' + africa2018 + 'kg CO2');
console.log ('Relativ zur Gesamtenemission der Welt verursacht Afrika damit ' + africaProzentGesamt + '%');
console.log ('Für Afrika hat sich 2018 die Emission im Vergleich zu 2008 um ' + africaProzentVergleich + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + africaVergleich + 'kg CO2');

//Konsolenausgabe für Southamerica
console.log ('Die Emission von Südamerika ist: ' + southamerica2018 + 'kg CO2');
console.log ('Relativ zur Gesamtenemission der Welt verursacht Südamerika damit ' + southamericaProzentGesamt + '%');
console.log ('Für Südamerika hat sich 2018 die Emission im Vergleich zu 2008 um ' + southamericaProzentVergleich + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + southamericaVergleich + 'kg CO2');

//Konsolenausgabe für Europe
console.log ('Die Emission von Europa ist: ' + europe2018 + 'kg CO2');
console.log ('Relativ zur Gesamtenemission der Welt verursacht Europa damit ' + europeProzentGesamt + '%');
console.log ('Für Europa hat sich 2018 die Emission im Vergleich zu 2008 um ' + europeProzentVergleich + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + europeVergleich + 'kg CO2');

//Konsolenausgabe für North America
console.log ('Die Emission von Nordamerika ist: ' + northamerica2018 + 'kg CO2');
console.log ('Relativ zur Gesamtenemission der Welt verursacht Nordamerika damit ' + northamericaProzentGesamt + '%');
console.log ('Für Nordamerika hat sich 2018 die Emission im Vergleich zu 2008 um ' + northamericaProzentVergleich + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + northamericaVergleich + 'kg CO2');

//Konsolenausgabe für Asia
console.log ('Die Emission von Asien ist: ' + asia2018 + 'kg CO2');
console.log ('Relativ zur Gesamtenemission der Welt verursacht Asien damit ' + asiaProzentGesamt + '%');
console.log ('Für Asien hat sich 2018 die Emission im Vergleich zu 2008 um ' + asiaProzentVergleich + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + asiaVergleich + 'kg CO2');

// Konsolenausgabe für Australia
console.log ('Die Emission von Australien ist: ' + australia2018 + 'kg CO2');
console.log ('Relativ zur Gesamtenemission der Welt verursacht Australien damit ' + ausraliaProzentGesamt + '%');
console.log ('Für Australien hat sich 2018 die Emission im Vergleich zu 2008 um ' + australiaProzentVergleich + '% verändert');
console.log ('2018 im Vergleich zu 2008 sind das ' + australiaVergleich + 'kg CO2');
