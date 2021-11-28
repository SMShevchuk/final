import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonSnowComponent } from './jon-snow.component';

describe('JonSnowComponent', () => {
  let component: JonSnowComponent;
  let fixture: ComponentFixture<JonSnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JonSnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JonSnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
