import { CommonModule, NgTemplateOutlet,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [CommonModule,NgTemplateOutlet],
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css'
})
export class ListcategoriesComponent implements OnInit {
ngOnInit(): void {
  
//const service = new CategoriesService();
this.service.getCategories().subscribe((res => {
  this.categories = res;
}));
}


constructor(private service:CategoriesService){}
//service:CategoriesService=null;
title:string="List of Categories";
categories:Category[]=[];   //[{id:111,title:'title',description:'desc'}];



}
