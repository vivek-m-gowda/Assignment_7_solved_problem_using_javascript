//check if the number N is divisible by two number X and Y

function divisible (N, x, y)
{
    var val1 = N/x;
    var val2 = N/y;
    if (val1 % 1 === 0 && val2 % 1 === 0)
    {
        return "TRUE";
    }
    else
    {
        return "FALSE";
    }
}

console.log(divisible(12,3,4));
console.log(divisible(9,4,3));
console.log(divisible(9,1,3));