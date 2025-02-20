import { Routes } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [

    {
        path:'',
    component: TodoComponent,
    pathMatch:'full'
    },
    {
        path:'home',
    component: TodoComponent,
    pathMatch:'full'
    },
    {
        path:'about',
    component: AboutComponent,
    pathMatch:'full'
    },
];
