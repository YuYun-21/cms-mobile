import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditfridendPage } from './editfridend.page';

describe('EditfridendPage', () => {
  let component: EditfridendPage;
  let fixture: ComponentFixture<EditfridendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfridendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditfridendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
