function greePerson(name:any){
    let greet;
    if(name === 'Chandler'){
        greet = 'Hello Chandler!';
    }
    else{
        greet = 'hi there';
    }
    console.log(greet);
}
greePerson('Chandler');