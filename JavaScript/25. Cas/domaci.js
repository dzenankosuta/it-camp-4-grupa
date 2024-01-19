// 2.	Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

const pera = "Pera ima devojku";

function zamena(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 !== 0 && i === str.length - 1) {
      newStr += str[i];
    } else if (i % 2 === 0) {
      newStr += str[i + 1];
    } else if (i % 2 !== 0) {
      newStr += str[i - 1];
    }
  }
  return newStr;
}
console.log(zamena(pera));
