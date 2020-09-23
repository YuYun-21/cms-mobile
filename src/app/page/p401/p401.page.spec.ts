import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P401Page } from './p401.page';

describe('P401Page', () => {
  let component: P401Page;
  let fixture: ComponentFixture<P401Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P401Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P401Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
