class React {
    constructor(){
        console.log(`About React Project`);
        this.library = 'React';
        this.server = 'http://localhost:8080';
        this.client = 'http://localhost:3000';
        console.log(this.library);

        document.getElementById('btn').addEventListener('click', this.render.bind(this));


        // document.getElementById('btn').addEventListener('click', function(e ){
        //     console.log(`'${e}button is clicked' ${this}`);
        // })
    }

    render(){
        console.log(`Render React Project`);
        console.log(this.library);
        console.log(this.server);
        console.log(this.client);
        

    }

    

}


const react = new React

// react.render()

