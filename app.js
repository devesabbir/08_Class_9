 const finalArray = [
      localStorage.getItem('StudentData'),
      localStorage.getItem('FamilyData'),
      localStorage.getItem('DevsData')
 ] 
 
 let stringArry = JSON.stringify(finalArray)

 
 console.log('--------------Final JSON-------------');
 console.log(stringArry);
 console.log('--------------Final Array From JSON-------------');
 console.log(JSON.parse(stringArry));
 console.log('--------------Final Array-------------');
 console.log(JSON.parse(JSON.parse(stringArry)[0]));
 console.log(JSON.parse(JSON.parse(stringArry)[1]));
 console.log(JSON.parse(JSON.parse(stringArry)[2]));



   
  let master = new Main();

  master.final(JSON.parse(localStorage.getItem('StudentData')))
  