class animal {
    constructor(name , property){
        this.name = name;
        this.property = property;
        console.log(`constructor allwaves will be called automatically when we create an object: name is ${this.name} and property ${this.property}`);
    }
    prop(){
        console.log(`${this.name} property is ${this.property}`);
    }
}

// we want make a new class and add all the properties to the class animal then we use extends
class monkey extends animal{
    eat(){
        console.log(`${this.name} is eating bananas and jumping `);
    }
}


const cat = new animal( 'cat' , 'Petful');
console.log(cat);
// console.log(cat.prop());
cat.prop();
// cat.eat();  // wecant do thihis with new animal

const monkey1 = new monkey( 'monkey' , 'Jumping')
monkey1.eat(); // we can do thihis with ncreating new obj with monkey


