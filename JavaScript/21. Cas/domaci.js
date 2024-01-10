// 2. Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima;
// 2. recenicu ispisanu malim slovima;
// 3. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.
// 4. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima;

const drugi = () => {
  const recenica = prompt("Unesite recenicu: ");
  const recenicaV = recenica.toUpperCase();
  const recenicaM = recenica.toLowerCase();
  const recenicaZ = recenica.replace(/skola/gi, "fakultet");
  const srednjiIndex = recenica.length / 2;
  const prvaPolovina = recenica.slice(0, srednjiIndex).toUpperCase();
  const drugaPolovina = recenica.slice(srednjiIndex).toLowerCase();
  const recenicaPP = prvaPolovina.concat(drugaPolovina);
  return `${recenicaV} \n${recenicaM}\n ${recenicaZ}\n${recenicaPP}`;
};

console.log(drugi());
