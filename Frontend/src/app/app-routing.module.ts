import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTodosComponent } from './view-todos/view-todos.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
