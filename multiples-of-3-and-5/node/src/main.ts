const isMultipleOfThreeOrFive = (x: number): boolean => {
    return (x % 3 ? false : true) || (x % 5 ? false : true);
};

let answer = 0;
for(let i = 0; i < 1000; i++) {
    if(isMultipleOfThreeOrFive(i)){
        answer += i;
    }
}
console.log(answer);