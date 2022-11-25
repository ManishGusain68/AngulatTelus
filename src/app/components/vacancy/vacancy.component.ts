import { Component, NgModule, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {

  data = {
    studentId: "",
    studentName: "",
    studentMarks: ""
  }

  errorMsg:any

  constructor(private student: StudentService) {

   

  }

  doSubmitForm() {
    console.log("button clicked");
    console.log(this.data);
    this.student.sendData(this.data).subscribe(
      response => {

        console.log(response);
        alert("Data Submitted");
      },
      error => {

        this.errorMsg=error;
        console.log(this.errorMsg.error.message);
       alert(this.errorMsg.error.message);

      }


    )
  }

  // private getServerErrorMessage(error: HttpErrorResponse): string {
  //   switch (error.status) {
  //       case 404: {
  //           return `Not Found: ${error.message}`;
  //       }
  //       case 403: {
  //           return `Access Denied: ${error.message}`;
  //       }
  //       case 500: {
  //           return `Internal Server Error: ${error.message}`;
  //       }
  //       default: {
  //           return `Unknown Server Error: ${error.message}`;
  //       }

    //}
}


