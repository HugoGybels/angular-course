import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Student} from '../model/student.model';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-new-student-view',
  templateUrl: './new-student-view.component.html',
  styleUrls: ['./new-student-view.component.scss']
})
export class NewStudentViewComponent implements OnInit {

  public model = new Student({});
  public fileToUpload: File;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.model);
    this.studentService.newStudent(this.model).subscribe();
    this.studentService.saveFile(this.fileToUpload).subscribe();
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.model.filename = this.fileToUpload.name;
  }

}
