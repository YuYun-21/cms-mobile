import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioplayPage } from './audioplay.page';

describe('AudioplayPage', () => {
  let component: AudioplayPage;
  let fixture: ComponentFixture<AudioplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
