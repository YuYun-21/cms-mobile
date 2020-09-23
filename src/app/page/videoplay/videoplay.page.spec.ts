import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoplayPage } from './videoplay.page';

describe('VideoplayPage', () => {
  let component: VideoplayPage;
  let fixture: ComponentFixture<VideoplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
