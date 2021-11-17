import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderCompomentComponent } from './loader-compoment.component';

describe('LoaderCompomentComponent', () => {
  let component: LoaderCompomentComponent;
  let fixture: ComponentFixture<LoaderCompomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderCompomentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
