// Step 1: Create two arrays, people and places
let people = [
    {name: 'Alice'},
    {name: 'Bob'}
  ];
  
  let places = [
    {city: 'Los Angeles'},
    {city: 'Chicago'}
  ];
  
  let mergedArray = people.concat(places);
  
  mergedArray.copyWithin(2, 0, 2);
  
  mergedArray.fill({city: 'New York'}, mergedArray.length - 2, mergedArray.length);
  
  mergedArray.pop();
  
  mergedArray.shift();
  
  mergedArray.unshift({name: 'Charlie'}, {name: 'David'});
  
  console.log(mergedArray);
  