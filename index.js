const userInputString = prompt('Enter number', 12);
const userInputNumber = Number(userInputString);

if(userInputString===null) {
    console.log('error')
}else{
    console.log('thanks for', userInputString)
}