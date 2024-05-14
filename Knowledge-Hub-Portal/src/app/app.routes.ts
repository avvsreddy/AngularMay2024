import { Routes } from '@angular/router';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = 
[
   {
        path:'',
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
    path:'**',
    component:ErrorComponent
}
];
