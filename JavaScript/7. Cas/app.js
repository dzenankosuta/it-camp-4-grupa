// Za interakciju sa korisnikom koristimo prompt metodu.

const fullName = prompt("Unesite vase ime i prezime");
console.log(fullName);

const age = prompt("Unesite broj godina");
console.log(age);
console.log(typeof age);

// Vrednost dobijena preko prompt metode je uvek tipa string.
// Taj string se moze prevesti u tip number na nekoliko nacina:

// 1. Number(age)
const brojGodina = Number(age);
console.log(brojGodina);
console.log(typeof brojGodina);

// 2. +age
const brojGodina2 = +age;
console.log(brojGodina2);
console.log(typeof brojGodina2);

// const visina = Number(prompt("Unesite vasu visinu"));
const visina = +prompt("Unesite vasu visinu");
console.log(visina);

// isNaN() je metoda koja proverava da li je neka vrednost nekorektan broj (NaN).

console.log(isNaN("55")); // false
console.log(isNaN("5ewe5")); // true

// Na osnovu unetih godina ispisati u konzoli sledece:
// ako je broj godina manji od 12: Vi ste decijeg doba
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba
// ako je korisnik uneo negativan broj: Broj godina ne moze biti negativan.
// ako korisnik nije uneo broj: Niste uneli broj godina.

const brojGodina3 = +prompt("Unesite broj godina");
if (isNaN(brojGodina3)) {
  console.log("Niste uneli broj godina");
} else if (brojGodina3 < 0) {
  console.log("Broj godina ne moze biti negativan");
} else if (brojGodina3 < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina3 >= 12 && brojGodina3 < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina3 >= 18 && brojGodina3 < 40) {
  console.log("Vi ste punoletni");
} else if (brojGodina3 >= 40) {
  console.log("Vi ste zrela osoba");
}

// Provera broja:
// Napiši program koji će tražiti od korisnika da unese broj, a zatim ispiši poruku koja će reći da li je broj pozitivan, negativan ili nula.

// Ocena studenta:
// Napiši program koji će korisnika pitati za unos ocene (broj između 0 i 100) i ispisati odgovarajuću ocenu (A, B, C, D ili F) prema standardnom školskom sistemu ocenjivanja.

// Provera parnosti broja:
// Napiši program koji će korisnika pitati za unos broja, a zatim ispisati poruku da li je broj paran ili neparan.

// Upoređivanje dva broja:
// Napiši program koji će tražiti od korisnika da unese dva broja, a zatim ispisati poruku koja će reći koji od ta dva broja je veći, ili da su jednaki.

// 1.
const broj = Number(prompt("Unesite neki broj"));

if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else if (broj < 0) {
  console.log("Broj je negativan");
} else if (broj === 0) {
  console.log("Broj je jednak nuli");
} else {
  console.log("Broj je pozitivan");
}
