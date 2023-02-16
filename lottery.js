let round = prompt("Number of rounds you want to play")

for(let i = 1 ; i <= round ; i++){
let number = prompt("Enter the number you want to buy")
let loottery = Math.floor(Math.random()*999)

if(number == loottery){
    document.getElementById("lottery").innerHTML += "round "+i+" numbre "+loottery+" Congratulations, you won the 1st prize."+"<br>"
}else{
    document.getElementById("lottery").innerHTML += "round "+i+" numbre "+loottery+" Sorry you didn't get the prize."+"<br>"
}
}