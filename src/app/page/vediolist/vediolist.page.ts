import { Component, OnInit } from '@angular/core';
import {Media} from "../../model/Media";
import {MediaService} from "../../service/media.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vediolist',
  templateUrl: './vediolist.page.html',
  styleUrls: ['./vediolist.page.scss'],
})
export class VediolistPage implements OnInit {

    ml:Array<Media>
  constructor(private mediaservice:MediaService
      ,private router:Router) {

      this.ml=new Array();
  }

    goTomediaDetail(id:string){

        this.router.navigate(['videoplay',{"id":id}])

    }

  ngOnInit() {
  }

    //即将进入页面时触发
    ionViewWillEnter(){
        this.getMediaList();

    }

    getMediaList(){

        this.mediaservice.getMediaList("VIDEO")
            .then((data:any)=>{
                this.ml=new Array();
                this.ml=data;

            })

    }

}
