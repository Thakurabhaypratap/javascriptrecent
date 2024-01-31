class railwayfield {
    submit(){
        console.log(this.name1 + ' submitted with train no ' + this.trainno );
        console.log(`${this.name1} submitted with train no ${this.trainno}` );
    }
    cancle(){
        console.log(`${this.name1} cancled with train no ${this.trainno}`);
    }
    fill(name1 , trainno){
        this.name1 = name1;
        this.trainno = trainno;
        // console.log(name1);
    }

}

let abhay = new railwayfield();
abhay.fill('abhay' , 323232)
abhay.submit()
abhay.cancle()


let Mitisha = new railwayfield();
Mitisha.fill('Mitisha', 323232)
Mitisha.submit()
