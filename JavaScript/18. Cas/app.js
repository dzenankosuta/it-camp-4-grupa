// Tražiti unos korisničkog imena sve dok korisnik ne unese ispravno korisničko ime
// (npr. dužina korisničkog imena mora biti najmanje 6 karaktera).

let username = prompt("Unesite korisnicko ime: ");

while (username.length < 6) {
  username = prompt("Unesite korisnicko ime: ");
}

const isSunny = false;

if (isSunny) {
  console.log("Napolju je suncano.");
} else if (!isSunny) {
  console.log("Napolju nije suncano.");
}

// TRUTHY I FALSY vrednosti nam olaksavaju pisanje uslova.
// Ako je vrednost TRUTHY, to znaci da je uslov zadovoljen i da ce se izvrsiti kod koji sledi.
// Ako je vrednost FALSY, to znaci da uslov nije zadovoljen i da se nece izvrsiti kod koji sledi.
// Postoji 8 FALSY vrednosti:

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null

// Trazi se unos od strane korisnika sve dok ne unese bilo sta:

let nesto = prompt("Unesite neki string: ");

while (!nesto) {
  nesto = prompt("Unesite neki string: ");
}

// Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka da li je uneta vrednost TRUTHY ili FALSY vrednost.

const isTruthy = () => {
  const value = prompt("Enter some value: ");
  if (value) {
    return "Entered value is TRUTHY value";
  } else {
    return "Entered value is FALSY value";
  }
};

console.log(isTruthy());

// 1. Primer ako korisnik unosi broj:(isti zadatak, ali posmatrati brojeve)

// 2. Korisnik unosi svoje ime. Proveriti da li je uneto ime truthy vrednost (nije prazan string, undefined ili null).
// Ako je uneto ime truthy, ispisati korisnikovo ime, inače ispisati da korisnik nema definisano ime.

// 3. Korisnik unosi broj. Proveriti da li je uneti broj falsy vrednost (0 ili NaN). Ako je uneti broj falsy, ispisati poruku da korisnik nema definisan broj, inače ispisati uneti broj.

// 4. Definisati promenljivu koja nije inicijalizovana. Proveriti da li je vrednost promenljive falsy (undefined).
// Ako je vrednost falsy, ispisati poruku da korisnik nema definisanu vrednost, inače ispisati vrednost promenljive.
