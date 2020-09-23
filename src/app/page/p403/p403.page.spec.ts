import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P403Page } from './p403.page';

describe('P403Page', () => {
  let component: P403Page;
  let fixture: ComponentFixture<P403Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P403Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P403Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
