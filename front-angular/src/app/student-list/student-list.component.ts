import { Component, OnInit } from '@angular/core';
import {Student} from '../model/student.model';
import {StudentService} from '../service/student.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students: Student[] = [];
  private studentsSubscription: Subscription;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentsSubscription = this.studentService.getStudents().subscribe(
      (students: Student[]) => this.students = students,
      e => console.error(e)
    );
  }

  public fold() {
    this.students.forEach(student => {
      student.folded = false;
    });
  }

  public unfold() {
    this.students.forEach(student => {
      student.folded = true;
    });
  }

}
