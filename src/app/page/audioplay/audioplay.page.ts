import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MediaService} from "../../service/media.service";
import {Media} from "../../model/Media";

@Component({
  selector: 'app-audioplay',
  templateUrl: './audioplay.page.html',
  styleUrls: ['./audioplay.page.scss'],
})
export class AudioplayPage implements OnInit {

    id:string;
    media:Media;
    url:string;

    constructor(private parm:ActivatedRoute,
                private mediaservice:MediaService) {
        this.media=new Media();
        //接收URL参数
        this.id=this.parm.snapshot.paramMap.get("id");
    }

    //当页面加载时运行
    ionViewWillEnter(){
        this.loadSingelNewsById();

    }
    //从服务器端获取单个对象数据
    loadSingelNewsById(){

        this.mediaservice.getSingleMedia(this.id)
            .then((data:any)=>{
                this.media=new Media();
                this.media=data;

            })

    }
    ngOnInit() {
    }
}
