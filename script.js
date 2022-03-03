function myFunction(){
    
    let output = "hello"
    let b = foo()
    learningVariables()
    rot13("das ist geheim")
    output = output + b
    
    
    document.getElementById("demo").innerHTML = output;
}

function foo(){
    returnvalue = 4
    return returnvalue
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
    
    for (let i=0; i<=message.length(); i++){
        console.log(message[i])

    }
}