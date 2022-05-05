function return_negative(num)
{
    if (num === 0)
    {
        return num;
    }
    else
    {
        return num * -1;
    }
}

console.log(return_negative(5));
console.log(return_negative(0));
console.log(return_negative(2.15));
console.log(return_negative(-5));
