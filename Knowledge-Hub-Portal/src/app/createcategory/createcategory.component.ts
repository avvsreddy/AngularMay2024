import { Component, ElementRef, inject } from '@angular/core';
import { Category } from '../models/category';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-createcategory',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './createcategory.component.html',
  styleUrl: './createcategory.component.css'
})
export class CreatecategoryComponent {

//constructor(private categoryService : CategoriesService){}
private categoryService:CategoriesService = inject(CategoriesService);
category:Category={id:111,title:'',description:''};


submited(categoryForm : any){
  
  //console.log(categoryForm)
  if(categoryForm.valid){
this.categoryService.createCategory(this.category).subscribe(res => {
  alert(res)
});
  }
}


}
