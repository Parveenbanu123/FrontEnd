import { Routes } from '@angular/router';
import { Emplist } from './components/emplist/emplist';
import { Addemp } from './components/addemp/addemp';
import { Home } from './components/home/home';
import { Empinfo } from './components/empinfo/empinfo';
import { EmpUpdate } from './components/empupdate/empupdate';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'employees',
    component: Emplist,
  },
  {
    path: 'employee/add',
    component: Addemp,
  },
  {
    path: 'employee/:eid',
    component: Empinfo,
  },
  { path: 'employee/edit/:id', component: EmpUpdate },
];
