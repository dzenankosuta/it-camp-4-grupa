// STRINGOVI SU IMMUTABLE VREDNOSTI!

// const recenica = "Danas je bio 'suncan' dan."
// const recenica2 = 'Danas je bio "suncan" dan.'

const recenica3 = "Danas je bio \"suncan\" dan.";
console.log(recenica3);

const recenica4 = "sta ako zelimo \\ da se nadje u tekstu?"
console.log(recenica4);

const recenica5 = "sta ako zelimo da se nadje u tekstu? \
 sta ako zelimo da se nadje u tekstu? \
 sta ako zelimo da se nadje u tekstu? \
 sta ako zelimo da se nadje u tekstu? \
 sta ako zelimo da se nadje u tekstu? \
 sta ako zelimo da se nadje u tekstu?"

console.log(recenica5);

const recenica6 = "sta ako zelimo da se nadje u tekstu? \n sta ako zelimo da se nadje u tekstu? \n sta ako zelimo da se nadje u tekstu? \n sta ako zelimo da se nadje u tekstu? \n sta ako zelimo da se nadje u tekstu? \nsta ako zelimo da se nadje u tekstu?"

console.log(recenica6);

// Postoje 3 metode za ekstraktovanje dela stringa:

// slice(start, end) start se ukljucuje, end se ne ukljucuje

const isecak = recenica4.slice(0,3)
console.log(isecak)

console.log(recenica4.slice(8,recenica4.length)) // do kraja
console.log(recenica4.slice(8)) // do kraja (izostavljanjem drugog argumenta uzimamo ostatak stringa)

// slice metoda prihvata negativne indekse
console.log(recenica4.slice(-7))

// substring(start, end) start se ukljucuje, end se ne ukljucuje
// substring metoda ne prihvata negativne indekse

console.log(recenica4.substring(0,3))

// substr(start, length)
// Drugi argument predstavlja duzinu isecka.

console.log(recenica4.substr(4,10))

const rec = "rec"
console.log(rec.toUpperCase()) // pravi NOVI string (ne menja postojeci)
console.log(rec)

// concat() metoda za spajanje stringova
// Ova metoda spaja dva ili vise tringova

const ime = "Demir"
const prezime = "Miraljemovic"

console.log(ime + " " + prezime)

const imeIPrezime = ime.concat(" ", prezime)
console.log(imeIPrezime)

// trim() kosacica - brise razmake na krajevima

const email = "     dzenan_kosuta@hotmail.com     "
console.log(email)
console.log(email.length)
console.log(email.trim())
console.log(email.trim().length)

// Domaci:
// Ekstraktovanje teksta:

// Iz stringa recenica4 izdvojite reč "ako" i ispišite je.
// Iz stringa recenica5 izdvojite prvu rečenicu i ispišite je.

// Formatiranje teksta:

// Napravite novi string koji će sadržavati vrednost iz recenica6 sa velikim slovima.
// Zamolite korisnika da unese svoje ime i napravite personalizovanu poruku koristeći concat.

// Manipulacija dužinom teksta:

// Iz stringa recenica4 izdvojite poslednjih 5 karaktera i ispišite ih.
// Izračunajte dužinu stringa koji sadrži spajanje stringova ime i prezime sa razmakom.

// Uklanjanje razmaka:

// Iz stringa email uklonite sve razmake sa obe strane koristeći trim i ispišite rezultat.