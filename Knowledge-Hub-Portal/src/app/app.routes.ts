import { Routes } from '@angular/router';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CategoryeditComponent } from './categoryedit/categoryedit.component';
import { CategorydeleteComponent } from './categorydelete/categorydelete.component';


export const routes: Routes = 
[
    {
        path:'',
        redirectTo:'home', pathMatch:'full'
    },
   {
        path:'home',
        component:HomeComponent,
        
        
    },
{
path:'category/list',
component:ListcategoriesComponent,
title:'Knowledge Hub Portal - Category List'
},
{
    path:'category/create',
    component:CreatecategoryComponent,
    title:'Knowledge Hub Portal - Category Create'
},
{
    path:'category/edit', component:CategoryeditComponent
},
{
path:'category/delete',component:CategorydeleteComponent
},
{
    path:'**',
    component:ErrorComponent
}
];
