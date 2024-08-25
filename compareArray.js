const numbers=[22,44,53,61,66,99,39,11,9];
function minNumber(numbers){
    let min =numbers[0]
    for(let i=0; i<numbers.length; i++){
        const number =numbers[i];
        if(number<min){
           min = number;
        }
    }
    return min;
    
}
const minNum =minNumber(numbers);
console.log('small number :',minNum);