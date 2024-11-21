import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTaskTemplateComponent } from './new-task-template.component';

describe('NewTaskTemplateComponent', () => {
  let component: NewTaskTemplateComponent;
  let fixture: ComponentFixture<NewTaskTemplateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTaskTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTaskTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
