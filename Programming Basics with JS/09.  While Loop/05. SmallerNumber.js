function solve(input) {

    let n = Number(input.shift());
    let counter = 0;
    let bigNum = Number.MAX_SAFE_INTEGER;

    while (n > counter) {
        let currentNum = Number(input.shift());
        if (currentNum < bigNum) {
            bigNum = currentNum;
        }
        counter++;
    }

    console.log(bigNum)

}

solve([4,
    45,
    -20,
    7,
    99
]);
