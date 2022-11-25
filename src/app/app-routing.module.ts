import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDataComponent } from './components/student-data/student-data.component';
import { TelusComponent } from './components/telus/telus.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';


const routes: Routes = [
{
path:"showVacancy",
component:VacancyComponent,
pathMatch:"full"

},
{
  path:"telus",
  component:TelusComponent,
  pathMatch:"full"
  
  },
  {
    path:"studentData",
    component:StudentDataComponent,
    pathMatch:"full"
    
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
