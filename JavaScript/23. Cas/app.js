// 1.	Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

const toLower = (str) => str.toLowerCase();
console.log(toLower("KoMBINAcija VELIKIH i MaliH sloVA."));

// 2.	Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.

function lastIndex(str) {
  lastPosition = str.lastIndexOf(" ");
  if (lastPosition === -1) {
    return "Dati string nema razmaka.";
  } else {
    return lastPosition;
  }
}
console.log(lastIndex("Pera ima devojku"));
console.log(lastIndex("Pera"));

// 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.

const duzinaPrveReci = (str) => str.indexOf(" ");
console.log(duzinaPrveReci("Danas smo bas tihi"));

// 4.	Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reči (odvojenih razmakom) unetog stringa. Npr. za A='Svuda pođi, kući dođi', dobija se B='Svuda dođi'. Podrazumeva se da uneti string nema vodeće ili prateće razmake.

const firstAndLast = (A) => {
  let B = "";
  const firstWord = A.slice(0, A.indexOf(" "));
  const lastWord = A.slice(A.lastIndexOf(" "));
  B += `${firstWord}${lastWord}`;
  return B;
};
console.log(firstAndLast("Svuda pođi, kući dođi"));

// Domaci zadaci:
// 1.	Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

// 2.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.
