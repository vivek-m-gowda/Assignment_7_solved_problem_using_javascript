function string_array(number, str)
{
    let start='';
    for(i=0; i<number; i++)
    {
        start = start + str;
    }
    return start;
}

console.log(string_array(1, "*"));
console.log(string_array(2, "*"));
console.log(string_array(3, "*"));
console.log(string_array(4, "*"));
console.log(string_array(5, "*"));
console.log(string_array(6, "*"));
console.log(string_array(7, "*"));
console.log(string_array(8, "v"));

