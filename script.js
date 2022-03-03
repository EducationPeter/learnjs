function myFunction(){
    
    let output = "hello javascript";
   
    looping()

    document.getElementById("demo").innerHTML = "hello javascript";
}




















/*
function myFunction(){
    
    let output = "hello"
    let b = foo()
    learningVariables()
    output = rot13("das ist geheim")
    newLetter = shift("a")
    // output = output + b
    
    
    document.getElementById("demo").innerHTML = output;
}*/

function foo(){
    returnvalue = 4
    return returnvalue
}


function learningVariables(){

    let a = 4;

    if( 3 > 4 ){
        console.log("3 ist größer als a");
    }




}



function looping(){

    for(let c=0; c<10; c++)
    {
        console.log(c)

    }

}








function learningVariables(){
    let a = 2
    let b = "hello"
    let c = 'hello ecma'
    let d = 4
    let e = a + d
    // console.log(a)
    let f = a - d
    let g = a % d
    let h = (a+b)/2
    console.log (h)
}

function rot13(input){
    
    message = input
    let output = ""
    
    for (let i=0; i<message.length; i++){
        
        console.log(message[i])
        
        myChar = message[i]

        newChar = shift(myChar)
        
        output = output + newChar
    }

    return output
}

function shift(c){
    pos = c.charCodeAt()
    pos = pos + 13
    rv = String.fromCharCode(pos)
    return rv
}
