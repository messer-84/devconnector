let initArray = ["bob", "greet", "abba", "snow", "wow", "what", "dad"];

class PalindromIterator {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }

  [Symbol.iterator]() {
    return {
      next: (function () {
        if (this.index < this.array.length) {
          let tempArr = [];
          let chars = [...this.array[this.index]];
          let charsLen = chars.length;

          for (let i = 0; i < charsLen / 2; i++) {
            let newIndex = i === 0 ? 1 : i + 1;
            tempArr.push(chars[i] === chars[charsLen - newIndex]);
          }
          if (!tempArr.includes(false)) {
            const res = {value: this.array[this.index], done: false};

            this.index += 1;
            return res;

          } else {
            this.index += 1;
            return {value: `${this.array[this.index - 1]} - not palindrom`, done: false}
          }

        } else {
          return {value: undefined, done: true}
        }
      }).bind(this)
    }
  }

}


const iteratorPl = new PalindromIterator(initArray);

for (let word of iteratorPl) {
  console.log(word);
}
