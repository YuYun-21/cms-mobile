import { Component, OnInit } from '@angular/core';
import {BitrateOption} from "videogular2/compiled/src/core/core";
import {VgMedia} from "videogular2/compiled/src/core/vg-media/vg-media";
import {Media} from "../../model/Media";
import {ActivatedRoute} from "@angular/router";
import {MediaService} from "../../service/media.service";

@Component({
  selector: 'app-videoplay',
  templateUrl: './videoplay.page.html',
  styleUrls: ['./videoplay.page.scss'],
})
export class VideoplayPage implements OnInit {

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
    //从服务器端获取单个新闻对象数据
    loadSingelNewsById(){

        this.mediaservice.getSingleMedia(this.id)
            .then((data:any)=>{
                this.media=new Media();
                this.media=data;

            })

    }

    myMedia: VgMedia;
    videoPath:string;
    videoQuality1: BitrateOption = {
        qualityIndex: 720,
        width: 500,
        height: 300,
        bitrate: 1,
        mediaType: "video/mp4",
        label: "高清",
    };
    videoQuality2: BitrateOption = {
        qualityIndex: 960,
        width: 500,
        height: 300,
        bitrate: 1,
        mediaType: "video/mp4",
        label: "超清",
    };
    dashBitrates:Array<BitrateOption> = [];


    ngOnInit() {
        this.videoPath = "http://cms.heyunhui.top/assets/video/dsound.mp4";
        this.dashBitrates.push(this.videoQuality1, this.videoQuality2);
    }



}
