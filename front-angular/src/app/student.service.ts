import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student, StudentDTO} from './model/student.model';
import {Observable} from 'rxjs';
import { map as _map } from 'lodash';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  public getAllStudents(): Observable<Student[]> {
    return this.http.get('http://127.0.0.1:8881/students').pipe(
      map((res: StudentDTO) => _map(new Student(res)))
    );
  }
}
