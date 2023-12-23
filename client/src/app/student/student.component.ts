import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  studentArray: any[] = [];
  Name: string = '';
  Address: string = '';
  Phone: Number = 0;
  currentStudentId: string = '';
  BaseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {
    this.getAllStudents();
  }

  getAllStudents() {
    this.http.get(`${this.BaseUrl}/students`).subscribe((response: any) => {
      console.log(response);
      this.studentArray = response.data;
    });
  }

  save() {
    if (this.currentStudentId == '') {
      this.createStudent();
    } else {
      this.updateStudent();
    }
  }
  createStudent() {
    if (!this.Name || !this.Address || !this.Phone) {
      alert('Plz Fill All Student Details');
    }
    let bodyData = {
      Name: this.Name,
      Address: this.Address,
      Phone: this.Phone,
    };
    this.http
      .post(`${this.BaseUrl}/create-student`, bodyData)
      .subscribe((response: any) => {
        this.getAllStudents();
      });
  }
  updateStudent() {
    const bodyData = {
      Name: this.Name,
      Address: this.Address,
      Phone: this.Phone,
    };
    this.http
      .patch(`${this.BaseUrl}/edit-student/${this.currentStudentId}`, bodyData)
      .subscribe((response) => {
        if (response) {
          this.getAllStudents();
        }
      });
  }
  setUpdate(student: any) {
    const { Name, Address, Phone } = student;
    this.Name = Name;
    this.Address = Address;
    this.Phone = Phone;
    this.currentStudentId = student._id;
  }
  deleteStudent(studentId: string) {
    this.http
      .delete(`${this.BaseUrl}/delete-student/${studentId}`)
      .subscribe((response) => {
        if (response) {
          alert('Deleted Successfully');
          this.getAllStudents();
          this.Name = '';
          this.Address = '';
          this.Phone = 0;
          this.currentStudentId = '';
        }
      });
  }
}
