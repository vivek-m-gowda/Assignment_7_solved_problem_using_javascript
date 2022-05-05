function evn_odd(num)
{
    if (num % 2 === 0)      //=== to check
    {
        return "EVEN";
    }
    else
    {
        return "ODD";
    }
}

console.log(evn_odd(10));
console.log(evn_odd(3));
console.log(evn_odd(11));
console.log(evn_odd(100));