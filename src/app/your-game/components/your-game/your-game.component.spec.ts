import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourGameComponent } from './your-game.component';

describe('YourGameComponent', () => {
  let component: YourGameComponent;
  let fixture: ComponentFixture<YourGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
