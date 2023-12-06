// KONDICIONALI //

// (5 > 4) je uslov koji kada je zadovoljen izvrsice se deo koda izmedju viticastih zagrada.
if (5 > 4) {
  console.log("vece je");
}

trenutnoVreme = 20;

if (trenutnoVreme >= 6 && trenutnoVreme < 12) {
  console.log("Dobro jutro");
} else if (trenutnoVreme >= 12 && trenutnoVreme < 17) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

//  Ako je broj godina  >= 18, neka se ispise poruka "punoletni ste",
// inace neka se ispise poruka "maloletni ste".
const brojGodina = 27;

if (brojGodina >= 18) {
  console.log("Punoletni ste");
} else {
  console.log("Maloletni ste");
}

// 2. Zadatak
// Na osnovu dve promenljive x i y napisati program koji izracunava i stampa
// kolicnik x/y ako je broj y razlicit od nule, a inace ispisuje poruku: Deljenje je nemoguce.
const x = 12;
const y = 6;

if (y === 0) {
  console.log("Deljenje je nemoguce.");
} else {
  console.log(x / y);
}

// Domaci:
// Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: "Vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba.

// const brojGodina = 27;
