import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categoryedit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categoryedit.component.html',
  styleUrl: './categoryedit.component.css'
})
export class CategoryeditComponent implements OnInit {

  
  submited() {
    this.service.editCategory(this.category).subscribe(res => {
      alert("edited successfully");
      this.router.navigateByUrl('category/list'); 
    });
}
  
  constructor(private aRoute:ActivatedRoute, private router:Router, private service:CategoriesService){} 
  categoryIdToEdit!:number;
  category!:Category;
  
  ngOnInit(): void {
    this.categoryIdToEdit = this.aRoute.snapshot.params['id'];
    this.service.getCategoryById(this.categoryIdToEdit).subscribe(res => {
      this.category = res;
    });
  }

  


}
