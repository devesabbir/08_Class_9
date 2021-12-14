
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


     this.grad = (mark) => {
      if (mark < 0 || mark > 100) {
        return "Invalid";
      } else if (mark < 33) {
        return 0;
      } else if (mark >= 33 && mark <= 39) {
        return 4;
      } else if (mark >= 40 && mark <= 49) {
        return 5;
      } else if (mark >= 50 && mark <= 59) {
        return 6;
      } else if (mark >= 60 && mark <= 69) {
        return 7;
      } else if (mark >= 70 && mark <= 79) {
        return 8;
      } else if (mark >= 80 && mark <= 89) {
        return 9;
      } else if (mark >= 90 && mark <= 100) {
        return 10;
      }
    }


    this.final = (data) => {
       
       data.forEach( (total) => {
             

            console.log(`
   Name : ${total.Name}
   Roll : ${total.Roll}
               
   Bangla: ${total.Marks.Bangla} & GPA: ${this.gpa(total.Marks.Bangla)[0]} & Points: ${this.gpa(total.Marks.Bangla)[1]}

   English: ${total.Marks.English} & GPA: ${this.gpa(total.Marks.English)[0]} & Points: ${this.gpa(total.Marks.English)[1]}

   Math: ${total.Marks.Math} & GPA: ${this.gpa(total.Marks.Math)[0]} & Points: ${this.gpa(total.Marks.Math)[1]}

   Science: ${total.Marks.Science} & GPA: ${this.gpa(total.Marks.Science)[0]} & Points: ${this.gpa(total.Marks.Science)[1]}

   S Science: ${total.Marks.S_Science} & GPA: ${this.gpa(total.Marks.S_Science)[0]} & Points: ${this.gpa(total.Marks.S_Science)[1]}

   Religion: ${total.Marks.Religion} & GPA: ${this.gpa(total.Marks.Religion)[0]} & Points: ${this.gpa(total.Marks.Religion)[1]}


   Total GPA = ${(((this.gpa(total.Marks.Bangla)[1]) + (this.gpa(total.Marks.English)[1]) + (this.gpa(total.Marks.Math)[1]) + (this.gpa(total.Marks.Science)[1]) + (this.gpa(total.Marks.S_Science)[1]) + (this.gpa(total.Marks.Religion)[1])) / 6 ).toFixed(2)}

            
            
            
            
            
            `);

       });


    }



}
