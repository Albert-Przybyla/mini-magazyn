import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWzDocumentComponent } from './add-wz-document.component';

describe('AddWzDocumentComponent', () => {
  let component: AddWzDocumentComponent;
  let fixture: ComponentFixture<AddWzDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWzDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWzDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
