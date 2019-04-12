class Person {
    constructor(fullName, favColor){
        this.name = fullName;
    this.favoriteColor = favColor;

    }
    
    greet() {
        console.log("hi there my name is " + this.name + "  and my favorite color is " + this.favoriteColor + ". ")
    
    }
    
    }
    //module.exports = Person; now becomes 
    export default Person;


    