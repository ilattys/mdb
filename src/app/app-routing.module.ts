import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BootstrapComponent} from './bootstrap/bootstrap.component';
import {SlashesComponent} from './slashes/slashes.component';
import {FullScreenComponent} from './full-screen/full-screen.component';

const routes: Routes = [
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'slash', component: SlashesComponent },
  { path: 'full', component: FullScreenComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
