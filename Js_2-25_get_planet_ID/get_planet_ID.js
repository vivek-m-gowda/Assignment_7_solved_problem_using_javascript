function planet_id(id)
{
    switch(id)
    {
        case 1: name = "Mercury"
        break;
        case 2: name = "Venus"
        break;
        case 3: name = "Earth"        
        break;
        case 4: name = "Mars"
        break;
        case 5: name = "Jupiter"
        break;
        case 6: name = "Saturn"
        break;
        case 7: name = "Uranus"
        break;
        case 8: name = "Neptune"
    }

    return name;
}

console.log(planet_id(3));
console.log(planet_id(5));
console.log(planet_id(7));
console.log(planet_id(1));

