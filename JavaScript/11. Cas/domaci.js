// 1.
// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

// 2.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

// 1.
for (i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
  }
}

// 2.
zbir = 0;
brBr = 0;
for (i = 3; i < 18; i++) {
  if (i % 3 === 0) {
    zbir += i;
    brBr++;
  }
}
arVrednost = zbir / brBr;
console.log("Aritmeticka vrednost brojeva je " + arVrednost);
