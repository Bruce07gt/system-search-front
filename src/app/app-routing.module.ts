import { SysEditComponent } from './views/components/system/sys-edit/sys-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { CreateSystemComponent } from './views/components/system/create-system/create-system.component';
import { SysReadComponent } from './views/components/system/sys-read/sys-read.component';
import { SysDeleteComponent } from './views/components/system/sys-delete/sys-delete.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'system',
    component: SysReadComponent
  },
  {
    path: 'system/create-system',
    component: CreateSystemComponent
  },
  {
    path: 'system/sys-delete/:id',
    component: SysDeleteComponent
  },
  {
    path: 'system/sys-edit/:id',
    component: SysEditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
