import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskLayoutComponent } from './task-layout.component';

describe('TaskLayoutComponent', () => {
  let component: TaskLayoutComponent;
  let fixture: ComponentFixture<TaskLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
