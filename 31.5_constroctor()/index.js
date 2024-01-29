class railwayfield {
    constructor(){
        console.log(`constructor allwaves will be called autometicaly  when we we will be crate a object     :  name is ${this.name1} and train no ${this.trainno}` );
        this.name1 = name1;
        this.trainno = trainno;
    }
    submit(){
        console.log(this.name1 + ' submitted with train no ' + this.trainno );
        console.log(`${this.name1} submitted with train no ${this.trainno}` );
    }
    cancle(){
        console.log(`${this.name1} cancled with train no ${this.trainno}`);
    }
}

let abhay = new railwayfield('abhay' , 563557);
abhay.cancle()
abhay.submit()



