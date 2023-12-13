// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

const prviBroj = +prompt("Unesite prvi broj:");
const drugiBroj = +prompt("Unesite drugi broj:");

if (isNaN(prviBroj) || isNaN(drugiBroj)) {
  console.log("Niste uneli brojeve.");
} else if (prviBroj === drugiBroj) {
  console.log("Uneli ste jednake brojeve.");
} else if (prviBroj > drugiBroj) {
  for (let i = drugiBroj; i <= prviBroj; i++) {
    console.log(i);
  }
} else {
  for (let i = prviBroj; i <= drugiBroj; i++) {
    console.log(i);
  }
}

// Preko switch naredbe:
console.log(new Date().getDay());
// getDay() - daje vrednost 0-6
// switch (new Date().getDay())...
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case_ove i eventualno default ispisati poruku:
// "Danas je 'radni dan'"
// "Ugodno provedite vikend"

switch (new Date().getDay()) {
  case 6:
  case 0:
    console.log("Ugodno provedite vikend");
    break;
  default:
    console.log("Danas je 'radni dan'");
}

// Sabrati brojeve od 1 do 10 i ispisati taj zbir.

let zbir = 0;
for (let i = 1; i <= 10; i++) {
  zbir += i;
}
console.log(zbir);

// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

const n = +prompt("Unesite neku vrenost.");
let saberi = 0;
let brBr = 0;
for (i = 1; i < n; i++) {
  if (i % 5 === 0) {
    saberi += i;
    brBr += 1;
  }
}
console.log(brBr);
console.log(saberi);

// 1.
// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

// 2.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.
