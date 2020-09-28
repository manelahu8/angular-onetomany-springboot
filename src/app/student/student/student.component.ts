import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentForm: FormGroup;
  constructor(private _fb: FormBuilder, private _studentService: StudentService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentForm = this._fb.group({
      name: [''],
      rollNo: [''],
      email: [''],
      college: [''],
      branch: [''],
      books: this._fb.array([this.addBooks()])
    })
  }

  public addBooks() {
    return this._fb.group({
      bookName: [''],
      price: ['']
    });
  }

  get getBook() {
    return <FormArray>this.studentForm.controls['books'];
  }

  addNewBook() {
    const control = <FormArray>this.studentForm.controls['books'];
    control.push(this.addBooks());
  }

  addStudent() {
    const student: Student = new Student(this.studentForm.value);
    console.log(student);
    this._studentService.addStudent(student).subscribe(studentObj=>{
      console.log("added")
    });
  }
}
