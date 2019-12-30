import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student.model';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {

  private students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {

    this.studentService.getAllStudents().subscribe(data => this.students = data);
  }

}
