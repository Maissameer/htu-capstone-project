import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVeiwComponent } from './admin-veiw.component';

describe('AdminVeiwComponent', () => {
  let component: AdminVeiwComponent;
  let fixture: ComponentFixture<AdminVeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVeiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
