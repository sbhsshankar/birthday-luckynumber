const dateOfBirth = document.querySelector("#birth-day");
const luckyNumber = document.querySelector("lucky-number");
const buttonCheck = document.querySelector("#button-check");


buttonCheck.addEventListener("click", luckyOrNot);


function luckyOrNot(){
const dob = dateOfBirth.value;
const sum = calculateSum(dob);
console.log(sum);
};

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
return sum;
}



