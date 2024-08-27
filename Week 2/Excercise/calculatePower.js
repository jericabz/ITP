const promptBase = prompt("Enter the base...");
const promptExponent = prompt("Enter the Exponent...");

function calculatePower(base = 0,exponent = 0){
    let result = base;
    
    for(let i = 1;i<exponent;i++){
        result *= base;
    }

    console.log("The result is : ", result);
}

calculatePower(promptBase,promptExponent)