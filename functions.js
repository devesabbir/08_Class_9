
function Main() {
     this.gpa = (marks) => {
         const point = [];
         if(marks < 0 || marks > 100){
             point.push('invalid')
         }else if (marks >= 0 && marks <= 32){
             point.push('F');
             point.push(0);
         }else if(marks >= 33 && marks <= 39){
             point.push('D');
             point.push(1);
         }else if(marks >= 40 && marks <= 49){
             point.push('C');
             point.push(2);
         }else if ( marks >= 50 && marks <= 59  ){
             point.push('B');
             point.push(3);
         }else if(marks >= 60 && marks <= 69){
             point.push('A-');
             point.push(3.5);
         }else if(marks >= 70 && marks <= 79){
            point.push('A');
            point.push(4);
         }else if(marks >= 80 && marks <= 100){
             point.push('A+');
             point.push(5);
         }

         return point;
     }


    this.final = (data) => {
       
       data.forEach( (total) => {
             

   console.log(`
   Name : ${total.Name}
   Roll : ${total.Roll}



   ====================================Result========================================           
   Bangla: ${total.Marks.Bangla} & Grade: ${this.gpa(total.Marks.Bangla)[0]} & Points: ${this.gpa(total.Marks.Bangla)[1]}

   English: ${total.Marks.English} & Grade: ${this.gpa(total.Marks.English)[0]} & Points: ${this.gpa(total.Marks.English)[1]}

   Math: ${total.Marks.Math} & Grade: ${this.gpa(total.Marks.Math)[0]} & Points: ${this.gpa(total.Marks.Math)[1]}

   Science: ${total.Marks.Science} & Grade: ${this.gpa(total.Marks.Science)[0]} & Points: ${this.gpa(total.Marks.Science)[1]}

   S Science: ${total.Marks.S_Science} & Grade: ${this.gpa(total.Marks.S_Science)[0]} & Points: ${this.gpa(total.Marks.S_Science)[1]}

   Religion: ${total.Marks.Religion} & Grade: ${this.gpa(total.Marks.Religion)[0]} & Points: ${this.gpa(total.Marks.Religion)[1]}

   ====================================Result========================================  
   Total GPA = ${(((this.gpa(total.Marks.Bangla)[1]) + (this.gpa(total.Marks.English)[1]) + (this.gpa(total.Marks.Math)[1]) + (this.gpa(total.Marks.Science)[1]) + (this.gpa(total.Marks.S_Science)[1]) + (this.gpa(total.Marks.Religion)[1])) / 6 ).toFixed(2)}

            
            
            
            
            
            `);

       });


    }



}
