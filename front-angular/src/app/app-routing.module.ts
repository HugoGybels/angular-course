import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {NewStudentViewComponent} from './new-student-view/new-student-view.component';
import {StudentDetailsViewComponent} from './student-details-view/student-details-view.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './service/auth-guard.service';

const routes: Routes = [
  { path: 'students', component: StudentListComponent, pathMatch: 'prefix' },
  { path: 'add', component: NewStudentViewComponent, pathMatch: 'prefix' },
  { path: 'detail/:id', component: StudentDetailsViewComponent, pathMatch: 'prefix', canActivate: [AuthGuard] },
  { path: '', component: StudentListComponent },
  { path: 'not-found', component: NotFoundComponent, pathMatch: 'prefix' },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
