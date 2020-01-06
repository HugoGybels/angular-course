import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Student} from '../model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe(data => this.students = data);

  }

  public add() {
    this.studentService.saveStudent(new Student({
      nom: 'ttt',
      prenom: 'rrr',
      email: 'eee',
      filename: 'NRV.PNG',
      age: 10
    })).subscribe();
  }

}
