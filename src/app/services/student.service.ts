import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  data = {
    studentId: "",
    studentName: "",
    studentMarks: ""
  }
  

  private baseurl:string="http://localhost:9091";

  constructor(private http:HttpClient) { }

  sendData(data:any){
      return this.http.post(`${this.baseurl}/student`,data)
  }

  getData(id:any){
      return this.http.get(`${this.baseurl}/student/${id}`)
  }
}
