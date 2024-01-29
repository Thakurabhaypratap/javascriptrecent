class railwayfield {
    constructor(name1, trainno){


        console.log(`constructor allwaves will be called autometicaly  when we we will be crate a object     :  name is ${name1} and train no ${trainno}` )



        this.trainno = trainno;
        this.name1 = name1;





        console.log(`constructor allwaves will be called autometicaly  when we we will be crate a object     :  name is ${this.name1} and train no ${this.trainno}` )



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



// class railwayfield {
//     constructor(name1, trainno) {
//         this.name1 = name1;
//         this.trainno = trainno;
//         console.log(`constructor allwaves will be called automatically when we create an object: name is ${this.name1} and train no ${this.trainno}`);
//     }
//     submit() {
//         console.log(`${this.name1} submitted with train no ${this.trainno}`);
//     }
//     cancel() {
//         console.log(`${this.name1} canceled with train no ${this.trainno}`);
//     }
// }

// let abhay = new railwayfield('abhay', 563557);
// abhay.cancel();
// abhay.submit();



