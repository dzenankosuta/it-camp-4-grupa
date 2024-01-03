// Zadatak 4:
// Napiši funkciju koja prima broj i vraća sumu svih brojeva do tog broja (uključujući taj broj). Na primer, za broj 4, funkcija treba vratiti 1 + 2 + 3 + 4 = 10.

function suma(broj) {
  let suma = 0;
  for (let i = 1; i <= broj; i++) {
    suma += i;
  }
  return suma;
}

console.log(suma(4));
console.log(suma(77));
