// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

const recenica = "Mama voli Memu";
let brSl = 0;
for (let i = 0; i <= recenica.length - 1; i++) {
  if (recenica[i] === "m" || recenica[i] === "M") {
    brSl++;
  }
}
console.log(brSl);
