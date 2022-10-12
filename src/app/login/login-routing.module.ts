import { ChooseColorComponent } from './choose-color/choose-color.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'choose-color', pathMatch: 'full' },
  { path: "choose-color", component: ChooseColorComponent },
  { path: "choose-color#login", component: ChooseColorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
