import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCodeComponent } from './register-code.component';

describe('RegisterCodeComponent', () => {
  let component: RegisterCodeComponent;
  let fixture: ComponentFixture<RegisterCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
