// OPERATORI U JavaScriptu //

// Postoji 6 razlicitih vrsta operatora u JavaScriptu:

// 1.   Aritmeticki operatori (Arithmetic operators);
// 2.   Operatori dodele vrednosti (Assignment operators);
// 3.   String operatori;
// 4.   Operatori poredjenja (Comparison operators);
// 5.   Logicki operatori (Logical operators);
// 6.   Tipovni operatori (Type oprators).

// 1.1. Addition(+):
console.log(5 + 5);

// 1.2. Subtraction(-):
console.log(7 - 3);

// 1.3. Multiplication(*):
console.log(3 * 5);

// 1.4. Division(/):
console.log(15 / 3);

// 1.5. Exponentation(**):
console.log(2 ** 3);

// 1.6. Modul (Ostatak pri deljenju)(%):
console.log(12 % 5);

// Da bi broj bio paran mora ostatak pri deljenju sa 2 biti nula.
// broj % 2 mora biti 0

// Da bi broj bio neparan mora ostatak pri deljenju sa 2 biti razlicit od nule.
// broj % 2 mora biti razlicit od 0

// 1.7. Increment(++):
let a = 13;
a++;
console.log(a);

// 1.8. Decrement(--):
let b = 13;
b--;
console.log(b);

// 2.   Operatori dodele vrednosti (Assignment operators)

// 2.1. =
x = 34;
console.log(x);

// 2.2. +=
x += 6; // x = x + 6
console.log(x);

// 2.3. -=
x -= 5; // x = x - 5
console.log(x);

// 2.4. *=
x *= 2;
console.log(x);

// 2.5. *=
x /= 7;
console.log(x);

// 2.6. *=
x %= 4;
console.log(x);

// 2.7. *=
x **= 4;
console.log(x);

// 3.   String operatori

// + operator moze biti koriscen za spajanje stringova.

ime = "Demir";
prezime = "Miraljemovic";
imeIPrezime = ime + " " + prezime;
console.log(imeIPrezime);

brojGodina = 18;
console.log(ime + brojGodina);
console.log(brojGodina + ime);
console.log(typeof (brojGodina + ime));

// Pomocu + operatora mozemo dodavati broj stringu i obratno, rezultat je string.

console.log("55" + 44);
// Ako string moze da se pretvori u broj JavaScript ce izvrsiti to pretvaranje, pa tek onda oduzimanje ili biloo koju drugu aritmeticku operaciju osim sabiranja.
console.log("55" - 44);
console.log("55a" - 44); // NaN - Not a Number predstavlja nekorektan broj i njegov tip je number
console.log(typeof ("55a" - 44));
console.log(5 * "3");
console.log("55a" / 5);

// 4.   Operatori poredjenja (Comparison operators);

// 4.1.  == Poredjenje vrednosti

console.log(4 == 7); // false
console.log(5 == 5); // true
console.log(5 == "5"); // true

// 4.2. === Poredjenje tipa i vrednosti
console.log(5 === "5"); // false
console.log(5 === 5); // true

// 4.3. != Razlicita vrednost
console.log(5 != 5); // false
console.log(5 != "5"); // false

// 4.4. !== Razlicita vrednost ili razlicit tip
console.log(5 !== 5); // false
console.log(5 !== "5"); // true
console.log(5 !== 9); // true

//  4.5. > vece od
console.log(4 > 5);

//  4.6. < manje od
console.log(4 < 5);

//  4.7. > vece ili jednako od
console.log(4 >= 5);

//  4.8. < manje ili jednako od
console.log(4 <= 4);

// 4.9. ? Ternary operator
trenutnoVreme = 21;
pozdrav = trenutnoVreme < 4 ? "Dobar dan" : "Dobro vece";
console.log(pozdrav);

// 5.   Logicki operatori (Logical operators);

// 5.1. &&  logicko i (and)
prviBroj = 2;
drugiBroj = 3;
// Ispitati da li su oba broja pozitivna.
console.log(prviBroj > 0 && drugiBroj > 0);

// 5.2. || logicko ili (or)
// Ispitati da li je bar jedan od ponudjenih brojeva paran broj.
console.log(prviBroj % 2 === 0 || drugiBroj % 2 === 0);

// 5.3. ! logicko not
console.log(!(prviBroj % 2 === 0));

// 6.   Tipovni operatori (Type oprators)

// 6.1. typeof
console.log(typeof 14.17);

// 6.2. instanceof
console.log(typeof [1, 2, 3]);
console.log([1, 2, 3] instanceof Array);
