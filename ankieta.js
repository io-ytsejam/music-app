class StringClass {
    constructor(string) {
        this.string = string;
    }

    reverse () {
        let newStr = "";
        for (let i = this.string.length - 1; i >= 0; i--)
            newStr += this.string[i];
        return newStr;
    }
}

let str = new StringClass("abc");

console.log(str.reverse());