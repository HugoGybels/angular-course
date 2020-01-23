import {Student, StudentDTO} from '../model/student.model';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StudentService {

  private baseUrl = 'http://127.0.0.1:8881';
  public isAuth = false;

  constructor(private http: HttpClient) {
  }

  public getStudents(): Observable<Student[]> {
    return this.http.get(this.baseUrl + '/students').pipe(
      map((data: any[]) => {
          const students: Student[] = [];
          data.forEach(studentJson => students.push(new Student(studentJson)));
          return students;
        }
      )
    );
  }

  public getStudent(id: number): Observable<Student> {
    return this.http.get(this.baseUrl + '/students/' + id).pipe(
      map((studentJson: StudentDTO) => new Student(studentJson))
    );
  }

  public newStudent(student: Student) {
    return this.http.post(this.baseUrl + '/students', student);
  }

  public saveFile(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.baseUrl + '/images/', formData);
  }



}
