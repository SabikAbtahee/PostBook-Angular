import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarSideNavLayoutComponent } from './tool-bar-side-nav-layout.component';

describe('ToolBarSideNavLayoutComponent', () => {
  let component: ToolBarSideNavLayoutComponent;
  let fixture: ComponentFixture<ToolBarSideNavLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarSideNavLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarSideNavLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
