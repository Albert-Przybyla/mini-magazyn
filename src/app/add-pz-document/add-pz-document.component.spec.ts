import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPzDocumentComponent } from './add-pz-document.component';

describe('AddPzDocumentComponent', () => {
  let component: AddPzDocumentComponent;
  let fixture: ComponentFixture<AddPzDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPzDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPzDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
