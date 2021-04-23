import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { CreateListComponent } from './Components/create-list/create-list.component';
import { ReadListComponent } from './Components/read-list/read-list.component';

const routes: Routes = [
  {
    component: ReadListComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
