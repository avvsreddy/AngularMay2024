import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryeditComponent } from './categoryedit.component';

describe('CategoryeditComponent', () => {
  let component: CategoryeditComponent;
  let fixture: ComponentFixture<CategoryeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
