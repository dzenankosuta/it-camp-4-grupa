// Ekstraktovanje karaktera mozemo odraditi na 3 razlicita nacina:

// charAt(position)
// charCodeAt(position)
// Pristupanje pomocu []

const recenica = "Jos max 10 dana";
console.log(recenica.charAt(5));
console.log(recenica.charCodeAt(5));
console.log(recenica[5]);

// Ako karakter sa odredjenom pozicijom ne postoji charAt vraca "", dok string[*] vraca undefined

// Postoji nekoliko search metoda u JavaScriptu:

// indexOf() metoda vraca index (poziciju) poslatog argumenta.

console.log(recenica.indexOf("max"));
console.log(recenica.indexOf("1"));

// Ako trazena vrednost ne postoji pozicija koju dobijamo iznosi -1.
console.log(recenica.indexOf("skola"));

// indexOf metoda prihvata drugi argument. On predstavlja startnu poziciju za trazenje odredjene vrednosti.

console.log(recenica.indexOf("max", 7));
console.log(recenica.indexOf("a", 7));

// lastIndexOf() metoda vraca poslednju poziciju poslatog argumenta.

console.log(recenica.lastIndexOf("a"));

// search() metoda vraca index (poziciju) poslatog argumenta.

console.log(recenica.search("max"));
console.log(recenica.search("1"));

// Drugi argument kod search metode nema smisla.
console.log(recenica.search("max", 7));

// Domaci zadaci:
// 1. Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti.
// Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string.
// Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".

// 2. Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore.
// Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.

// 3. Spajanje stringova
// Napiši funkciju koja prima dva stringa kao argumenta i vraća njihovu konkatenaciju.
// Na primer, za ulazne vrednosti "Hello" i "World!", funkcija treba da vrati "HelloWorld!".
