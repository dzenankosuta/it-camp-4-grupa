// while petlja se koristi za iteraciju kroz neki objekat.
// definise se drugacije u odnosu na for petlju.

// vreme = "Suncano";
// while (vreme === "Suncano") {
//   console.log("Danas je lep dan.");
//   vreme = "Kisovito";
// }

let i = 1;
while (i < 6) {
  console.log(i);
  //   Kad zavrsimo celu logiku za kod pod odredjenim uslovom moramo menjati i.
  i++;
}

// do while petlja se koristi za iteraciju kroz neki objekat.
// Razlika u odnosu na while petlju je sto se prvo izvrsava kod pa tek onda proverava uslov.

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

// nedostatak:
let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

// While
// Traziti od korisnika da unese neki broj.
// Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:

const broj = +prompt("Unesite broj:");
let iter = 1;
while (iter <= broj) {
  console.log(iter ** 2);
  iter++;
}

// Tražiti unos brojeva od korisnika sve dok ne unese nulu:

let korisnikovBroj = +prompt("Unesite vas broj");

while (korisnikovBroj !== 0) {
  korisnikovBroj = +prompt("Unesite vas broj");
}

// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// Razni zadaci:
// https://www.znanje.org/knjige/computer/algoritmi/88_quiz/ciklicna_for_0.php

// Proizvod neparnih 1 do 5.
let proizvod = 1;
for (let i = 1; i < 6; i++) {
  if (i % 2 !== 0) {
    proizvod *= i;
  }
}
console.log(proizvod);
