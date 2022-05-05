var humanYearCatYearDogYear = function(humanYears)
{
    let catAge;
    let dogAge;
    if (humanYears == 1)
    {
        return[humanYears, 15, 15];
    }
    if (humanYears === 2)
    {
        return [humanYears, 24, 24];
    }
    const excessYears = humanYears -2;
    const excessCatYears = excessYears * 4;
    const excessDogYears = excessYears * 5;

    return[humanYears, 24 + excessCatYears, 24 + excessDogYears];
}

console.log(humanYearCatYearDogYear(1));
console.log(humanYearCatYearDogYear(2));
console.log(humanYearCatYearDogYear(10));