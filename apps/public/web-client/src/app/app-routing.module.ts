import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { StartpageComponent } from './startpage/startpage.component';
import { DefaultLayoutModule } from './layouts/default-layout/default-layout.module';

const routes: Array<Route> = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: StartpageComponent
      }
    ]
  }
];

@NgModule({
  imports: [DefaultLayoutModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

export const routedComponents = [StartpageComponent];
