// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:

// 1. innerHTML
paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Ovo je paragraf.";

// 2. document.write() - koristi se samo za testiranje.

// 3. alert()
// alert("Upozorenje korisniku.");

// 4. console.log()
console.log(paragraf.innerHTML);

// JavaScript name mora pocinjati sa:

//  1. Slovom (velikim ili malim) (A-Z ili a-z)
//  2. $ (dolar znakom)
//  3. _ (donjom crtom)

// Promenljive od vise reci:

// nas brat = "Demir" Nije ispravan nacin
// nas_brat = "Demir" Snake Case
// NasBrat = "Demir"  Upper Camel Case
nasBratDobri = "Demir"; // Lower Camel Case

// Napomena. U nazivu promenljive (varijable) se moze naci broj, ali ona ne sme poceti brojem.

amir = "Amir je odlican ucenik druge godine srednje skole.";
Amir = "Amir je dovoljan ucenik druge godine srednje skole.";

// JavaScript je case sensitive!!! (Razlikuje velika i mala slova)

console.log(Amir);

// Postoje 4 nacina da deklarisemo promenljivu u JavaScriptu:

// 1. koriscenjem var keyword (rezervisane reci) - prvenstveno koriscen na ranijim browserima;

// var prijatno = "Prijatno!"; primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu var.
var prijatno; // deklarisanje promenljive

console.log(prijatno); // undefined
console.log(typeof prijatno); // undefined

prijatno = "Prijatno!"; // inicijalizacija deklarisane promenljive prijatno

// 2. koriscenjem let keyword (rezervisane reci) - koristimo kada je vrednost promenljive(varijable) sklono menjanju.

// let brojGodina = 25 primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu let.

let brojGodina; // deklarisanje promenljive
brojGodina = 27; // inicijalizacija deklarisane promenljive brojGodina

// 3. koriscenjem const keyword (rezervisane reci) - koristimo za vrednosti koje se ne menjaju.

// const ime = "Dzenan"; primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu const.

// Koriscenjem const keyword nije dozvoljeno posebno inicijalizovanje, vec mora uz deklaraciju zajedno.
// const ime;
// ime = "Dzenan"

// 4. koriscenjem niceg.

mervan = "Mervan";

// Napomena.
// Promenljive (varijable) su kontejneri za skladistenje vrednosti.
