// Domaci zadaci:
// 1. Zamena reči
// Napiši funkciju koja prima dva argumenta: originalni string i reč koju treba zameniti.
// Funkcija treba da zameni sve instance te reči u originalnom stringu sa znakom "#" i vrati rezultujući string.
// Na primer, za ulazne vrednosti "Danas je lep dan." i "lep", funkcija treba da vrati "Danas je # dan.".

function zamenaReci(recenica, rec) {
  return recenica.replace(rec, "#");
}
console.log(
  zamenaReci("Danas je lep dan. Juce je bio takodje lep dan.", /lep/g)
);
// 2. Brojanje karaktera
// Napiši funkciju koja prima jedan string kao argument i vraća broj karaktera u tom stringu. Ignoriši prazne prostore.
// Na primer, za ulazni string "Hello, World!", funkcija treba da vrati broj 12.

function duzinaBezRazmaka(recenica) {
  const recenicaBezRazmaka = recenica.replace(/ /g, "");
  return recenicaBezRazmaka.length;
}
console.log(duzinaBezRazmaka("Nema nam Demira."));
