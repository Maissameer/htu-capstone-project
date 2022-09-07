import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrVeiwComponent } from './uesr-veiw.component';

describe('UesrVeiwComponent', () => {
  let component: UesrVeiwComponent;
  let fixture: ComponentFixture<UesrVeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UesrVeiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UesrVeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
