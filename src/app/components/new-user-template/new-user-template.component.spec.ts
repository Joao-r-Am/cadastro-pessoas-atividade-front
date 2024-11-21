import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewUserTemplateComponent } from './new-user-template.component';

describe('NewUserTemplateComponent', () => {
  let component: NewUserTemplateComponent;
  let fixture: ComponentFixture<NewUserTemplateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
