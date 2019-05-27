import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ErrComponent } from './err/err.component';

const routes: Routes = [
  {path: '', component: PageComponent},
  {path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
