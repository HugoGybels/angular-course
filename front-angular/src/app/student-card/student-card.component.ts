import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../model/student.model';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {

  @Input()
  public student: Student;

  constructor() { }

  ngOnInit() {

  }

}
