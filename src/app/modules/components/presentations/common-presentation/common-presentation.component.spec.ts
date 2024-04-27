import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPresentationComponent } from './common-presentation.component';

describe('CommonPresentationComponent', () => {
  let component: CommonPresentationComponent;
  let fixture: ComponentFixture<CommonPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonPresentationComponent]
    });
    fixture = TestBed.createComponent(CommonPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
