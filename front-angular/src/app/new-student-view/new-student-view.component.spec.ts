import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentViewComponent } from './new-student-view.component';
import {StudentService} from '../service/student.service';

describe('NewStudentViewComponent', () => {
  let component: NewStudentViewComponent;
  let fixture: ComponentFixture<NewStudentViewComponent>;
  const studentServiceMock = jasmine.createSpyObj('StudentService', ['getStudents']);
  let studentService: jasmine.SpyObj<StudentService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStudentViewComponent ],
      providers: [studentServiceMock]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    studentService = TestBed.get(StudentService);
    studentService.getStudent.and.returnValue(undefined);
    fixture = TestBed.createComponent(NewStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
