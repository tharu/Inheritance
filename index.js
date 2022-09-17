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


Array.prototype.bubblesort=function()
{
    let i=0;
    while(i<this.length-1)
    {
        let swapped;
        do
        {
            swapped=false;
            if(this[i]>this[i+1])
            {
                let temp=this[i+1];
                this[i+1]=this[i];
                this[i]=temp;
                swapped=true;
            }
       }while(swapped)
    }
    return this;
}

let array=[8,9,7];
console.log(array.bubblesort());