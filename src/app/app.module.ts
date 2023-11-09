import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { ModerationActionComponent } from './components/moderation-action/moderation-action.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewComentComponent } from './components/reviewcoment/reviewcoment.component';
import { RoleComponent } from './components/role/role.component';
import { UniversityComponent } from './components/university/university.component';
import { UserAppComponent } from './components/user-app/user-app.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule} from '@angular/material/core'
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule} from '@angular/material/dialog';




//Start services
import { ScriptChargeService } from './services/script-charge.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListCourseComponent } from './components/course/list-course/list-course.component';
import { InsertCourseComponent } from './components/course/insert-course/insert-course.component';
import { NawAllInsertCourseComponent } from './components/course/naw-all-insert-course/naw-all-insert-course.component';
import { AddEditUniversityComponent } from './components/university/add-edit-university/add-edit-university.component';
import { ConfirmDeleteUniversityComponent } from './components/university/confirm-delete-university/confirm-delete-university.component';
import { AddEditReviewComentComponent } from './components/reviewcoment/add-edit-review-coment/add-edit-review-coment.component';
import { ConfirmDeleteReviewComentComponent } from './components/reviewcoment/confirm-delete-review-coment/confirm-delete-review-coment.component';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ModerationActionComponent,
    ProfessorComponent,
    ReviewComponent,
    ReviewComentComponent,
    RoleComponent,
    UniversityComponent,
    UserAppComponent,
    LandingComponent,
    DashboardComponent,
    ListCourseComponent,
    InsertCourseComponent,
    NawAllInsertCourseComponent,
    AddEditUniversityComponent,
    ConfirmDeleteUniversityComponent,
    AddEditReviewComentComponent,
    ConfirmDeleteReviewComentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,


    
  ],
  providers: [ScriptChargeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
