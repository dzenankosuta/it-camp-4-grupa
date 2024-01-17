// U nekoj literaturi cemo naci da je JavaScript interpreterski jezik. Medjutim, to nije bas tako u potpunosti.
// Naime, u pozadini JS masina kompajlira skriptu (fajl) pre samog izvrsavanja. Te mozemo reci da je kompajlerski jezik.

var x;
x = 15;

let y;
y = 10;

const z = 5;

w = 20;
console.log(w);

// Hoisting predstavlja izvlacenje deklaracija na vrhu skripte kako bi se one mogle koristiti.

// Kasnije deklarisanje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno.

prom = 5;

var prom;

// let prom;
// const prom
console.log(prom);

// 1. Napraviti funkciju koja uzima neki trocifren broj za argument i vraca zbir cifara tog broja.
// Na primer, za argument 234, rezultat treba biti 9.
// Pretvaranje broja u string se vrsi preko toString() metoda.

const zbirCifara = (broj) => {
  const strBroj = broj.toString();
  let brojac = 0;
  for (let i = 0; i < strBroj.length; i++) {
    brojac += +strBroj[i];
  }
  return brojac;
};

console.log(zbirCifara(234));
console.log(zbirCifara(925));

// 2.	Unosi se string A i znak Z. Kreirati novi string B koji se dobija tako što se iz unetog stringa izbacuje svaka pojava znaka Z. Npr. za unet string "Madagaskar" i znak "a", dobijamo rezultat "Mdgskr"

function second(A, Z) {
  const B = A.replace(Z, "");
  return B;
}
console.log(second("Madagaskar", /a/g));

// Domaci zadaci:
// 1.	Za uneti string A, treba izdvojiti podstring B, koji počinje od unete pozicije N i ima M znakova. Npr. za string 'Pera ima devojku', N=6 i M=7, dobija se B='ima dev'.

// 2.	Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.
