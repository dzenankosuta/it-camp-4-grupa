// includes() metoda - vraca boolean u zavisnosti od toga da li odredjeni string sadrzi  specificnu vrednost.
// includes(searchValue, start) start - Poziciju od koje se pocinje trazenje

const recenica = "Hvala Vam na iznenadjenju!";
console.log(recenica.includes("poklon"));

// startsWith() - metoda vraca true ako string pocinje argumentom metode, a false ako ne pocinje tim argumentom.

// startsWith(searchValue, start) start - Poziciju od koje se pocinje trazenje

console.log(recenica.startsWith("Hvala"));
console.log(recenica.startsWith("Hvala", 6));
console.log(recenica.startsWith("V", 6));

// endsWith() - metoda vraca true ako string zavrsava argumentom metode, a false ako ne zavrsava tim argumentom.

console.log(recenica.endsWith("Hvala"));
console.log(recenica.endsWith("iznenadjenju!"));

// match() - metoda vraca niz sa stringovima koji se podudaraju sa argumentom.

const pozdrav = "Dobro jutro. Dobar dan. dobro vece.";
const matchNiz = pozdrav.match(/Dobro/gi);
console.log(matchNiz); // niz sa /Dobro/gi vrednostima iz pozdrav stringa
console.log(matchNiz.length); // Broj pojavljivanja /Dobro/gi u pozdrav stringu

// 1.	Prebrojati koliko ima cifara u datom stringu.

function brCf(recenica) {
  let brojac = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (!isNaN(recenica[i]) && recenica[i] !== " ") {
      brojac++;
    }
  }
  return brojac;
}
console.log(brCf("Veceras nas ima 10."));

// Domaci:
// 1.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 2.	Ispitati da li u unetom stringu ima više malih ili velikih slova. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 3.	Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.
