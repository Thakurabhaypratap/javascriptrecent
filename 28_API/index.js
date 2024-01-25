
// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.





const api = new XMLHttpRequest();
api.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
api.send();
api.onreadystatechange = function(){
    console.log(api.readyState); // continue track for 1 2 3 4
    if(api.readyState === 4){
        console.log('ajit');  
        const aa = JSON.parse(this.responseText)  // this will give all the data from API
        const str_to_obj = JSON.parse(this.responseText) // str to object JSon.parse()
        console.log(str_to_obj.id);
        console.log(str_to_obj.title);
        console.log(aa);
    }
    
}
console.log(api.readyState); // track only 1 time
console.log('abhay');