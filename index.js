String.prototype.filter = function (...bannedWords) {
    let str = this;
    for(var word of bannedWords)
    {
        const index = str.indexOf(word);
        if (index >= 0) {
            // str = str.replace(word, "");
            const regex = new RegExp(word + "\s?");
            str = str.replace(regex, "");
        }
    }
    // bannedWords.forEach(word => {
       
    // });
    return str;
}

let myString="some bad string";
console.log(myString.filter("bad"));