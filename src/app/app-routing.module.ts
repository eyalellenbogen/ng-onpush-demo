import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BasicComponent } from './views/basic/basic.component';
import { ComplexComponent } from './views/complex/complex.component';
import { ZoneComponent } from './views/zone/zone.component';
const routes: Route[] = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  { path: 'basic', component: BasicComponent },
  { path: 'advanced', component: ComplexComponent },
  { path: 'zone', component: ZoneComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
