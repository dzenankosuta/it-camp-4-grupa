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

// 1.3. BigInt - Brojevi koji prelaze granice obicnih brojeva.

console.log(BigInt(28374562987345629837465298736458723465872346));
console.log(typeof BigInt(28374562987345629837465298736458723465872346));

// 1.4. Boolean - Logicki entitet koji ima dve vrednosti: true i false.

console.log(true);
console.log(typeof true);

// 1.5. undefined - Promenljiva koja je definisana, ali joj nije dodeljena vrednost ima vrednost undefined i tip takodje undefined.

var a;
console.log(a);
console.log(typeof a);

// 1.6. null - Predstavlja nekorektnu vrednost ili vrednost koja (za sada) ne postoji.

var a = null;
console.log(a);
console.log(typeof a);

// 1.7. Symbol - Tip podatka za skladistenje anonimnih i unikatnih vrednosti.

b = Symbol("Demir");
console.log(b);
console.log(typeof b);

// Primitivni tipovi podataka mogu skladistiti samo jednu vrednost.

// 2.  Neprimitivni tipovi podataka (referentni)

// Za skladistenje vise vrednosti ili kompleksnih vrednosti se koriste neprimitivni tipovi podataka.
// Svaka promenljiva koja nije primitivnog tipa je tipa Object u JavaScriptu.
// Objekti se koriste za skladistenje neke kolekcije podataka.

// 2.1. Array (niz) - predstavlja strukturu podataka za skladistenje vise vrednosti.
// Elementi niza ne moraju biti istog tipa.

nasBrat = ["Demir", 18, true];
console.log(nasBrat);
console.log(typeof nasBrat);

// 2.2. Object (objekat) - predstavlja strukturu podataka za skladistenje vise vrednosti. Objekti se zapisuju u key:value (name:value) parovima.

obj = {
  ime: "Demir",
  brojGodina: 18,
  punoletan: true,
};
console.log(obj);
console.log(typeof obj);

// 2.3. Set - predstavlja strukturu podataka za skladistenje vise vrednosti. Duplikati nisu dozvoljeni.

set = new Set(["Kanita", 19, true, "Kanita"]); // druga Kanita se ne vidi
console.log(set);
console.log(typeof set);

// 2.4. Map - predstavlja strukturu podataka za skladistenje vise vrednosti. Slicni su objektima.

map = new Map([
  ["ime", "Kanita"],
  ["brojGodina", 19],
  ["punoletnost", true],
]);
