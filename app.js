const dateOfBirth = document.querySelector("#birth-day");
const luckyNumber = document.querySelector("lucky-number");
const buttonCheck = document.querySelector("#button-check");
const outputBox = document.querySelector("#output-box");


buttonCheck.addEventListener("click", luckyOrNot);

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber == 0){
        outputBox.innerText = "Your birthday is lucky.";
    }else{
        outputBox.innerText = "Your birthday is not lucky, Not Everyday.";
    }
}

function luckyOrNot(){
const dob = dateOfBirth.value;
const sum = calculateSum(dob);
if(sum&&dob){
compareValues(sum,luckyNumber); // putting .value to luckyNumber giving me error why?
}else{
    outputBox.innerText = "Please enter both the fields";
}
};

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
return sum;
}



