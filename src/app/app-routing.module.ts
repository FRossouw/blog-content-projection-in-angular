import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPaperComponent } from './components/test-paper/test-paper.component';

const routes: Routes = [
  { path: '', component: TestPaperComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
