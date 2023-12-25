// Zadatak.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

const recenica = prompt("Unesite recenicu: ");
let brCf = 0;
for (let i = 0; i < recenica.length; i++) {
  switch (recenica[i]) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      brCf++;
      break;
  }
}
console.log(brCf);

let brCf2 = 0;
for (let i = 0; i < recenica.length; i++) {
  if (!isNaN(recenica[i])) {
    brCf2++;
  }
}

//  2. Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

const recenica2 = "Ovo sve da bude jedna rec?";
let recenica3 = "";
for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === " ") continue;
  else recenica3 += recenica2[i];
}
console.log(recenica3);

// 2. Napraviti novu recenicu gde ce umesto slova "a" pisati "t".
// Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".
const originalnaRecenica = "Danas je lep dan";
let novaRecenica = "";
for (let i = 0; i < originalnaRecenica.length; i++) {
  if (originalnaRecenica[i] === "a" && originalnaRecenica[i + 1] === "n") {
    novaRecenica += "d";
  } else if (originalnaRecenica[i] === "a") {
    novaRecenica += "t";
  } else {
    novaRecenica += originalnaRecenica[i];
  }
}
console.log(novaRecenica);

// Domaci:
// Zadatak 1:
// Napiši program koji će zamijeniti sva mala slova u datom stringu velikim slovima i obrnuto. Na primjer, za string "Hello World" program treba vratiti "hELLO wORLD".

// Zadatak 2:
// Originalnu recenicu vratiti u obrnutom redosledu. Koristi petlju i bez korišćenja gotovih metoda poput.

// Zadatak 3: Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.
