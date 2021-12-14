const marksData =[
    {
      Name :'Habib',
      Roll : 20,
      Marks :{
          Bangla : 90,
          English : 60,
          Math : 58,
          Science : 69,
          S_Science : 70,
          Religion : 90,
      }
    },{
      Name :'Abid',
      Roll : 20,
      Marks :{
          Bangla : 90,
          English : 60,
          Math : 58,
          Science : 69,
          S_Science : 70,
          Religion : 90,
      }
    },{
      Name :'Hasim',
      Roll : 20,
      Marks :{
          Bangla : 90,
          English : 60,
          Math : 58,
          Science : 69,
          S_Science : 70,
          Religion : 90,
      }
    },{
      Name :'Kuddus',
      Roll : 20,
      Marks :{
          Bangla : 90,
          English : 70,
          Math : 58,
          Science : 69,
          S_Science : 70,
          Religion : 90,
      }
    },{
      Name :'Rowshon',
      Roll : 20,
      Marks :{
          Bangla : 90,
          English : 60,
          Math : 58,
          Science : 59,
          S_Science : 70,
          Religion : 90,
      }
    },{
      Name :'Al Amin',
      Roll : 20,
      Marks :{
          Bangla : 90,
          English : 70,
          Math : 28,
          Science : 49,
          S_Science : 70,
          Religion : 90,
      }
    },{
      Name :'Labib',
      Roll : 20,
      Marks :{
          Bangla : 30,
          English : 60,
          Math : 58,
          Science : 69,
          S_Science : 70,
          Religion : 90,
      }
    }
]
const family = [
     {
       Name    : 'Abul',
       Phone_No: '01744518886'  
     }, {
        Name    : 'Farid',
        Phone_No: '01744518886'  
      }, {
        Name    : 'Sumaiya',
        Phone_No: '01744518886'  
      }, {
        Name    : 'Hasan',
        Phone_No: '01744518886'  
      }, {
        Name    : 'Kasem',
        Phone_No: '01744518886'  
      }
]
const devs = [
    {
      Name  : 'Kasem',
      Skill : 'WordPress'
    }, {
        Name  : 'Hasem',
        Skill : 'Django'
      },    {
        Name  : 'Masud',
        Skill : 'Laravel'
      }, {
        Name  : 'Murad',
        Skill : 'MERN'
      },    {
        Name  : 'Hasib',
        Skill : 'GoLAN'
      },    {
        Name  : 'Hasina',
        Skill : 'JAVA'
      },    {
        Name  : 'Kasem',
        Skill : 'WordPress'
      }
]


localStorage.setItem('StudentData', JSON.stringify(marksData))
localStorage.setItem('FamilyData', JSON.stringify(family))
localStorage.setItem('DevsData', JSON.stringify(devs))
