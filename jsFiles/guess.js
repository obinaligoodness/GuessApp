var submitbutton = document.getElementById("submitbutton")
var output = document.getElementById("output1")
var input = document.getElementById("inputbox")
var output2 = document.getElementById("output2")
var playAgainbtn = document.getElementById("playbutton")
var quitbutton = document.getElementById("quitbutton")

const guessnumber = 6
let counter = 0


let guessfunc = function guessfunction(){

    let inpu = parseInt(document.getElementById("inputbox").value)

    if(inpu===guessnumber){
        output.innerText = "correct!!! you won!!!"
        console.log(output.innerText)
        counter++
    }


    if(inpu<guessnumber){
        output.innerText = "too low"
        console.log(output.innerText)
        counter++}


    if(inpu>guessnumber){
        output.innerText = "too high"
        console.log(output.innerText)
        counter++
    }


    if(counter===5){
        submitbutton.disabled = true;
        input.disabled = true;
        output2.innerText = "Game over!!!"
    } 

    if(output.innerText=== "correct!!! you won!!!"){
        submitbutton.disabled = true;
        input.disabled = true;
    }
    
    console.log(output2.innerText)
}
let playagainfunc = function playagain(){
    location.reload()
}
let quitfunc = function quitfunction(){
    window.close()
}
submitbutton.addEventListener("click", guessfunc);
playAgainbtn.addEventListener('click',playagainfunc);
quitbutton.addEventListener('click',quitfunc);


