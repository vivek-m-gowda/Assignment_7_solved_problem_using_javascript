function century_from_year(year)
{
    return Math.ceil(year/100);
}

console.log(century_from_year(1706));
console.log(century_from_year(2000));
console.log(century_from_year(2022));