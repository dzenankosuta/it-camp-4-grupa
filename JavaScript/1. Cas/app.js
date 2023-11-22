naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko JavaScripta";
naslov.style = "color: red; font-size: 52px";

// TIPOVI PODATAKA //

// Da bismo znali tip promenljive u JavaScriptu koristimo typeof operator.

// Tipovi podataka u JavaScriptu se dele u dve grupe:
// 1.  Primitivni tipovi podataka (vrednosni)
// 2.  Neprimitivni tipovi podataka (referentni)

// 1.1. string - Niz karaktera koji je zapisan pod navodnicima. Obicnim ili duplim.
console.log("Ovo je nas prvi string.");
console.log(typeof "Ovo je nas prvi string.");

// 1.2. number - Predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza.

console.log(25);
console.log(typeof 25);

// 1.3. BigInt - Brojevi koji prelaze granivce obicnih brojeva.

console.log(BigInt(28374562987345629837465298736458723465872346));
console.log(typeof BigInt(28374562987345629837465298736458723465872346));
