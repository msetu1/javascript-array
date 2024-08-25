// sum of array 
function sumOfArray(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index =i
        const element =arrNum[index]
        sum += element
        console.log(sum);
     }
     return sum;
}
const arrNum=[21,43,58,88,91,100,66]
sumOfArray(arrNum)