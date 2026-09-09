
// ========================================
// WARTOŚCI - TUTAJ WPISUJESZ LICZBY
// ========================================

const a = 10;
const b = 3;
const c = 5;
const d = 4;


// ========================================
// ZADANIE 1 - Suma trzech liczb
// ========================================

var suma = a + b + c;

document.write("ZADANIE 1<br>");
document.write(suma);
document.write("<br><br>");


// ========================================
// ZADANIE 2 - Średnia trzech liczb
// ========================================

var srednia = (a + b + c) / 3;

document.write("ZADANIE 2<br>");
document.write(srednia);
document.write("<br><br>");


// ========================================
// ZADANIE 3 - Suma, różnica i iloczyn
// ========================================

document.write("ZADANIE 3<br>");
document.write(a + b);
document.write("<br>");
document.write(a - b);
document.write("<br>");
document.write(a * b);
document.write("<br><br>");


// ========================================
// ZADANIE 4 - Pierwiastek
// ========================================

document.write("ZADANIE 4<br>");
document.write(Math.sqrt(a));
document.write("<br><br>");


// ========================================
// ZADANIE 5 - Pole kwadratu
// ========================================

var poleKwadratu = a * a;

document.write("ZADANIE 5<br>");
document.write(poleKwadratu);
document.write("<br><br>");


// ========================================
// ZADANIE 6 - Pole prostopadłościanu
// ========================================

var poleProstopadloscianu = 2 * (a * b + a * c + b * c);

document.write("ZADANIE 6<br>");
document.write(poleProstopadloscianu);
document.write("<br><br>");


// ========================================
// ZADANIE 7 - Pole i obwód koła
// ========================================

var poleKola = Math.PI * a * a;
var obwodKola = 2 * Math.PI * a;

document.write("ZADANIE 7<br>");
document.write(poleKola);
document.write("<br>");
document.write(obwodKola);
document.write("<br><br>");


// ========================================
// ZADANIE 8 - Koszt przejazdu
// ========================================

const cenaBenzyny = 6.50;
const trasa = 360;
const spalanie = 8;

var litry = trasa * spalanie / 100;
var koszt = litry * cenaBenzyny;

document.write("ZADANIE 8<br>");
document.write(koszt);
document.write("<br><br>");


// ========================================
// ZADANIE 9 - Koszt dowolnej trasy
// ========================================

const cena = 6.50;
const dlugoscTrasy = 200;
const spalanieSamochodu = 7;

var litry2 = dlugoscTrasy * spalanieSamochodu / 100;
var koszt2 = litry2 * cena;

document.write("ZADANIE 9<br>");
document.write(koszt2);
document.write("<br><br>");


// ========================================
// ZADANIE 10 - Lokata
// ========================================

const kwota = 10000;
const oprocentowanie = 0.08;
const podatekBelki = 0.19;

var odsetki = kwota * oprocentowanie;
var podatek = odsetki * podatekBelki;
var zysk = odsetki - podatek;

document.write("ZADANIE 10<br>");
document.write(zysk);
