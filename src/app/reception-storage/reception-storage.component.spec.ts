import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionStorageComponent } from './reception-storage.component';

describe('ReceptionStorageComponent', () => {
  let component: ReceptionStorageComponent;
  let fixture: ComponentFixture<ReceptionStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
