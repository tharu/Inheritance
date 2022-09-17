String.prototype.filter = function (...bannedWords) {
    let str = this;
    for(var word of bannedWords)
    {
        const index = str.indexOf(word);
        if (index >= 0) {
            // str = str.replace(word, "");
            const regex = new RegExp(word + "\\s?");
            str = str.replace(regex, "");
        }
    }
    // bannedWords.forEach(word => {
       
    // });
    return str;
}

// let myString="some bad string";
// console.log(myString.filter("bad"));


Array.prototype.bubbleSort=function()
{
    let i=0;
   
        let swapped;
        do
        {
            swapped=false;
            i=0;
            while(i<this.length)
            {
                if(this[i]>this[i+1])
                {
                    let temp=this[i+1];
                    this[i+1]=this[i];
                    this[i]=temp;
                    swapped=true;
                }
                i++;                           
           }
       }while(swapped)
    return this;
 }
    


// let array=[6,4,0, 3,-2,1];
  console.log([6,4,0, 3,-2,1].bubbleSort());

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();


var Teacher=function(){};
Teacher.prototype= new Person();
Teacher.prototype.teach= function(subject)
{
    return this.name + " is now teaching " + subject;
}

var teacher1= new Teacher();
teacher1.initialize("Jen",23);
console.log(teacher1.teach("Maths"));

