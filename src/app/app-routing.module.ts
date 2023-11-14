import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { UserApp } from './model/UserApp';
import { UserAppComponent } from './components/user-app/user-app.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { ModerationAction } from './model/ModerationAction';
import { ModerationActionComponent } from './components/moderation-action/moderation-action.component';
import { ReviewComentComponent } from './components/reviewcoment/reviewcoment.component';
import { RoleComponent } from './components/role/role.component';
import { UniversityComponent } from './components/university/university.component';
import { CourseComponent } from './components/course/course.component';
import { ReviewComponent } from './components/review/review.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NawAllInsertCourseComponent } from './components/course/naw-all-insert-course/naw-all-insert-course.component';
import { AddEditUniversityComponent } from './components/university/add-edit-university/add-edit-university.component';
import { ReviewComment } from './model/ReviewComment';
import { AddEditReviewComentComponent } from './components/reviewcoment/add-edit-review-coment/add-edit-review-coment.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NawAllInsertProfessorComponent } from './components/professor/naw-all-insert-professor/naw-all-insert-professor.component';
import { ListCardReviewComponent } from './components/review/list-card-review/list-card-review.component';



const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'moderation-action', component: ModerationActionComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'role', component: RoleComponent },

  { path: 'course', component: CourseComponent },
  { path: 'edit/:courseId', component: NawAllInsertCourseComponent},

  { path: 'my-profile', component: MyProfileComponent },


  { path: 'dashboard', component: DashboardComponent },
  { path: 'crear-course', component: NawAllInsertCourseComponent },

  { path: 'university', component: UniversityComponent },
  { path: 'add-edit-university', component: AddEditUniversityComponent },
  { path: 'new', component: AddEditUniversityComponent },
  { path: 'edit/:universityId', component: AddEditUniversityComponent },


  { path: 'reviewcomment', component: ReviewComentComponent },
  { path: 'add-edit-review-coment', component: AddEditReviewComentComponent },
  { path: 'new', component: AddEditReviewComentComponent },
  { path: 'edit/:commentId', component: ReviewComentComponent },

  { path: 'professor', component: ProfessorComponent },
  { path: 'crear-professor', component:NawAllInsertProfessorComponent },
  { path: 'eliminar-professor', component:NawAllInsertProfessorComponent },
  { path: 'editProfessor/:professorId', component: NawAllInsertProfessorComponent},  
  { path: 'update-professor', component:NawAllInsertProfessorComponent },
  { path: 'verReviewProfessor/:professorId', component:ListCardReviewComponent},  






  //falta linkear con una vista de dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
