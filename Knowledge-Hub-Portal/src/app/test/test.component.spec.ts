// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from "./test.component";

// import { TestComponent } from './test.component';

// describe('TestComponent', () => {
//   let component: TestComponent;
//   let fixture: ComponentFixture<TestComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [TestComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(TestComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

xdescribe('Test Component', ()=>{

  it('find sum method with valid input should return valid result',()=>{
    // AAA approach
    // Arrange
    let fno=10;
    let sno=20;
    let expected=30;
    const target = new TestComponent();
    // Act
    let actual = target.findSum(fno,sno);
    // Assert
    expect(actual).toBe(expected);
  })
  

  xit('find sum method with valid input should return valid result',()=>{
    // AAA approach
    // Arrange
    let fno=10;
    let sno=20;
    let expected=30;
    const target = new TestComponent();
    // Act
    let actual = target.findSum(fno,sno);
    // Assert
    expect(actual).toBe(expected);
  })
  

});
