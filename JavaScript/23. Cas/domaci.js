// 1.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

const malaSlova = (recenica) => {
  let brMl = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] >= "a" && recenica[i] <= "z") {
      brMl++;
    }
  }
  return brMl;
};
console.log(malaSlova("Koliko ima malih slova?"));

// 3.	Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.

function isPalindrom(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrom("anavolimilovana"));
console.log(isPalindrom("kada"));
