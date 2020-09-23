import { Component, OnInit } from '@angular/core';
import {MediaService} from "../../service/media.service";
import {Router} from "@angular/router";
import {Media} from "../../model/Media";

@Component({
  selector: 'app-audiolist',
  templateUrl: './audiolist.page.html',
  styleUrls: ['./audiolist.page.scss'],
})
export class AudiolistPage implements OnInit {

    ml:Array<Media>
  constructor(private mediaservice:MediaService
      ,private router:Router) {

      this.ml=new Array();
  }

    getMediaList(){

        this.mediaservice.getMediaList("AUDIO")
            .then((data:any)=>{
                this.ml=new Array();
                this.ml=data;

            })

    }

    goToAudioDetail(id:string){

        this.router.navigate(['audioplay',{"id":id}])

    }

    //即将进入页面时触发
    ionViewWillEnter(){
        this.getMediaList();
    }

  ngOnInit() {
  }

}
