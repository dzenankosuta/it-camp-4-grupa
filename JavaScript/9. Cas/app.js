const demir = "Demir";

for (let i = 0; i < 10; i++) {
  console.log(demir);
}

// 1. Ispisati brojeve od 1 do 10, izuzev broja 2 i broja 5.

// 1. nacin
for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword koristimo kada zelimo da preskocimo radnju za tu iteraciju i nastavimo petlju sa narednom iteracijom.

// 2. nacin
for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// 2. Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja.

// break izvrsava prekidanje petlje. Ako zelimo da se u nekom momentu prestane izvrsavanje onda koristimo break.

for (let i = 1; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati parne brojeve od 1 do 20 na dva nacina.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
