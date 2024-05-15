import { CommonModule, CurrencyPipe, DatePipe, LowerCasePipe, NgTemplateOutlet, UpperCasePipe,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [CommonModule,NgTemplateOutlet,RouterLink,UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe],
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

onDelete(id: number) {
  if(window.confirm('Are you sure to delete the category? '))
    {
      this.service.deleteCategory(id).subscribe(res => {
        alert('Successfully deleted')
      this.service.getCategories().subscribe((res => {
        this.categories = res;
      }));
    });
    }
  }

}
