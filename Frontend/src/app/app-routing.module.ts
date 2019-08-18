import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { CallbackComponent } from './auth/callback/callback.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTodosComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
