import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseStorageComponent } from './release-storage.component';

describe('ReleaseStorageComponent', () => {
  let component: ReleaseStorageComponent;
  let fixture: ComponentFixture<ReleaseStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
