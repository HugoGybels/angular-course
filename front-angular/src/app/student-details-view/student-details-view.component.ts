import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../service/student.service';
import {Student} from '../model/student.model';

@Component({
  selector: 'app-student-details-view',
  templateUrl: './student-details-view.component.html',
  styleUrls: ['./student-details-view.component.scss']
})
export class StudentDetailsViewComponent implements OnInit {

  private id: number;
  public student: Student;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe( student => this.student = student);
  }

}
