import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VediolistPage } from './vediolist.page';

describe('VediolistPage', () => {
  let component: VediolistPage;
  let fixture: ComponentFixture<VediolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VediolistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VediolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
