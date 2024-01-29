class employees{
    constructor(name){
        this.name = name;
        console.log(`constructor allwaves will be called automatically when we create an object: name is ${this.name}`);
    }
    login(){
        console.log(`${this.name} login`);
    }
    logout(){
        console.log(`${this.name} logout`);
    }
    requestforleves(y){
        console.log(`${this.name} request for leves for ${y} days`);
    }
}


class Programmers extends employees{
    requestcoffees(x){
    console.log(`${this.name} has reduested ${x} coffee`);
    }
    // we want to give programmer one advance leve for his hard work so wee need to overright employee requestforleves object with the same name
    requestforleves(y){
    console.log(`${this.name} request for leves for ${y} days with ONE MORE EXTRA LEVES`);
    }
}





const employees1 = new employees('MITISHA');
const progeammer1 = new Programmers ('thakur abhay')
progeammer1.login();
progeammer1.requestcoffees(7);

employees1.requestforleves(5);
progeammer1.requestforleves(5);
