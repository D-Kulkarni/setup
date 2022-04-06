import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhikariListComponent } from './adhikari-list.component';

describe('AdhikariListComponent', () => {
  let component: AdhikariListComponent;
  let fixture: ComponentFixture<AdhikariListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhikariListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhikariListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
