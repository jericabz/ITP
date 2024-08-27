//Grade Calculator
const gradePrompt = prompt("Enter your grade");
if(gradePrompt>=90){
    console.log("Your grade is A");
}else if(gradePrompt>=80){
    console.log("Your grade is B");
}else if(gradePrompt>=70){
    console.log("Your grade is C");
}else if(gradePrompt>=60){
    console.log("Your grade is D");
}else{
    console.log("Your grade is F");
}