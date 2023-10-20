import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ModerationActionComponent } from './moderation-action/moderation-action.component';
import { ProfessorComponent } from './professor/professor.component';
import { ReviewComponent } from './review/review.component';
import { ReviewComentComponent } from './review-coment/review-coment.component';
import { RoleComponent } from './role/role.component';
import { UniversityComponent } from './university/university.component';
import { UserAppComponent } from './user-app/user-app.component';

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
    UserAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
