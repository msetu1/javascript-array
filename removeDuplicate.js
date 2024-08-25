const friends=['satu','nowshin','ria','hawn','s,','a','b','c','d','e','a','b','c','d','e','a','b','c','d','e'];
function removeDuplicate(names){
    const uniq=[]
    for(let i = 0; i<names.length; i++){
        const friend=names[i];
        if(uniq.includes(friend)===false){
           uniq.push(friend);
        }
    }
    return uniq;
}
// const unique =removeDuplicate(friends)
// console.log(unique);

const numbers=[22,77,76,32,55,43,54,65,76,55,77];
function removeDuplicateNumbers(number){
    const unique =[];
    for(let i=0; i<number.length; i++){
        const element=number[i];
        if(unique.includes(element)===false){
unique.push(element);
        }
    }
    return unique;
}
const uniqueNumbers=removeDuplicateNumbers(numbers);
console.log(uniqueNumbers);
