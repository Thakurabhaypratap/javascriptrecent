class studentpresent{
    constructor(name){
        this.name = name;
        console.log(`constructor allwaves will be called automatically when we create an object: name is ${this.name}`);
    }
    present(){
        console.log(`${this.name} is present`);
    }
    absent(){
        console.log(`${this.name} is absent`);
    }
}





// we want access all the content and value of class studentpresent of object present and add some more information so we creat new class presentInClub and create  access useing super.present all the content and value of class studentpresent of object present and add some more information 

class presentInClub extends studentpresent {
    present(){
    super.present();
    console.log(`${this.name} is not present in class but he is present in club`);}
}


const student = new studentpresent('abhay');
student.present()


const student2 = new presentInClub('tarun');
student2.present()








