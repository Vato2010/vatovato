
const university = {
    name: "საქართველოს ტექნიკური უნივერსიტეტი",
    departments: 10,
    website: "https://gtu.ge",
    ratings: {
      student1: 4.5,
      student2: 4.8,
      student3: 4.2
    }
  };
  

  console.log("უნივერსიტეტის მონაცემები:");
  for (let key in university) {
    console.log(`${key}:`, university[key]);
  }
  

  console.log("შეიცავს თუ არა scholarship?:", university.hasOwnProperty("scholarship"));
  
  let updatedUniversity = Object.assign({}, university, { studentsCount: 5000 });
  console.log("განახლებული ობიექტი:", updatedUniversity);
  Object.freeze(updatedUniversity);
  updatedUniversity.name = "თბილისის სახელმწიფო უნივერსიტეტი"; 
  updatedUniversity.studentsCount = 6000; 
  console.log("ცვლილებების შემდეგ:", updatedUniversity);
  console.log("ობიექტი გაყინულია?", Object.isFrozen(updatedUniversity));
  const sportsClub = {
    clubName: "Barcelona",
    sportType: "Football",
    foundedYear: 1899,
    achievements: {
      leagueTitles: 27,
      championsLeague: 5,
      domesticCups: 31
    }
  };
  
  console.log("Club Property Names:", Object.keys(sportsClub));
  

  console.log("Club Property Values:", Object.values(sportsClub));
  

  console.log("Does 'sponsors' exist?", sportsClub.hasOwnProperty("sponsors"));
  

  let updatedSportsClub = Object.assign({}, sportsClub, { stadiumCapacity: 99354 });
  console.log("Updated Sports Club:", updatedSportsClub);
  
 
  Object.freeze(updatedSportsClub);
  

  updatedSportsClub.clubName = "Real Madrid"; 
  updatedSportsClub.stadiumCapacity = 80000; 
  
  console.log("After Attempted Modifications:", updatedSportsClub);
  
  console.log("Is the object frozen?", Object.isFrozen(updatedSportsClub));