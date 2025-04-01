// let students = ['Alice', 'Bob', 'Charlie'];
// let grades = [85, 92, 78];

// function addStudent(studentName, grade) {
//   students.unshift(studentName);
//   grades.unshift(grade);
//   return { students, grades };
// }

// function removeLastStudent() {
//   students.pop();
//   grades.pop();
//   return { students, grades };
// }

// function replaceGrade(index, newGrade) {
//   grades.splice(index, 1, newGrade);
//   return grades;
// }

// function updateGrades(newGrade) {
//   grades.fill(newGrade);
//   return grades;
// }



// console.log(addStudent("David", 88));  
// console.log(removeLastStudent());  
// console.log(replaceGrade(1, 95));  
// console.log(updateGrades(100));  
let people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  
  let morePeople = [
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
  ];
  
  let combinedPeople = people.concat(morePeople);
  console.log('Combined People:', combinedPeople);
  
  combinedPeople.push({ id: 6, name: 'Frank' });
  console.log('After adding Frank:', combinedPeople);
  
  let personWithId2 = combinedPeople.find(person => person.id === 2);
  console.log('Person with ID 2:', personWithId2);
  
  combinedPeople = combinedPeople.filter(person => person.id !== 3);
  console.log('After removing person with ID 3:', combinedPeople);
  
  combinedPeople = combinedPeople.map(person => {
    if (person.id === 1) {
      person.name = 'Alicia';
    }
    return person;
  });
  console.log('After updating name for ID 1:', combinedPeople);
  
  combinedPeople.sort((a, b) => a.name.localeCompare(b.name));
  console.log('Sorted by name:', combinedPeople);
  
  let names = combinedPeople.map(person => person.name);
  console.log('Names of all people:', names);
  
  let exists = combinedPeople.some(person => person.id === 4);
  console.log('Does person with ID 4 exist?', exists);
  
  combinedPeople.pop();
  console.log('After removing the last person:', combinedPeople);
  
  let firstTwoPeople = combinedPeople.slice(0, 2);
  console.log('First two people:', firstTwoPeople);
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [6, 7, 8, 9, 10];
  let nestedArray = [[11, 12], [13, 14], [15, 16]];
  
  let combinedArray = arr1.concat(arr2);
  console.log('Combined Array:', combinedArray);
  
  combinedArray.copyWithin(5, 0, 3);
  console.log('After copyWithin:', combinedArray);
  
  combinedArray.fill(0, 6);
  console.log('After fill:', combinedArray);
  
  combinedArray.pop();
  console.log('After pop:', combinedArray);
  
  combinedArray.shift();
  console.log('After shift:', combinedArray);
  
  combinedArray.unshift(100, 200);
  console.log('After unshift:', combinedArray);
  
  combinedArray.splice(2, 2, 'x', 'y', 'z');
  console.log('After splice:', combinedArray);
  
  let slicedArray = combinedArray.slice(-5);
  console.log('Sliced Array:', slicedArray);
  
  let joinedString = slicedArray.join(',');
  console.log('Joined String:', joinedString);
  
  let flatArray = nestedArray.flat();
  console.log('Flattened Array:', flatArray);
  
  let includesEight = flatArray.includes(8);
  console.log('Includes 8:', includesEight);
    