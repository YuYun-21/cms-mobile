import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudiolistPage } from './audiolist.page';

describe('AudiolistPage', () => {
  let component: AudiolistPage;
  let fixture: ComponentFixture<AudiolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiolistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
