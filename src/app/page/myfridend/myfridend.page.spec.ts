import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyfridendPage } from './myfridend.page';

describe('MyfridendPage', () => {
  let component: MyfridendPage;
  let fixture: ComponentFixture<MyfridendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfridendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyfridendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
