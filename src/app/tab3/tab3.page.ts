import { Component,ViewChild} from '@angular/core';
import {CarouselService} from "../service/carousel.service";
import {ConfigService} from "../service/config.service";
import {Carousel} from "../model/Carousel";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {MediaService} from "../service/media.service";
import {Slides} from "@ionic/core/dist/types/components/slides/slides";


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    @ViewChild("topSlide") topSliders: Slides;

    cl:Array<Carousel>;
    isregistuser:boolean;
    hosturl:string;


    // 当进入页面时触发
    ionViewDidEnter() {
        if (this.topSliders) {
            this.topSliders.startAutoplay();
        }
    }



    ionViewCanLeave() {
        if (this.topSliders) {
            this.topSliders.stopAutoplay();
        }
    }

    ionViewWillLeave() {
        if (this.topSliders) {
            this.topSliders.stopAutoplay();
        }
    }

    slideOpts = {
        initialSlide: 1,
        // speed: 400
        speed: 1500,
        autoplay: {
            delay: 2000,
        },
        loop: true
    };


    constructor(private carouselservice:CarouselService,private config:ConfigService,
                private authservice:AuthService,private mediaservice:MediaService
        ,private router:Router) {

        this.cl=new Array();
        this.hosturl=this.config.HOST;
        this.hosturl+="/public/";
        this.isregistuser=false;
    }





    //即将进入页面时触发
    ionViewWillEnter(){
        // this.loadCarouselFormServer();
        this.isRegist();
        // this.loadFriendsList();

    }



    loadCarouselFormServer(){

        this.carouselservice.getCarouselList()
            .then((data:any)=>{
                this.cl=new Array();
                this.cl=data;
            })
    }

    isRegist(){
        this.authservice.isRegistUser()
            .then((data:any)=>{

                if(data.msg==true){
                    this.isregistuser=true
                }
                else{
                    this.isregistuser=false;
                }
            })

        this.carouselservice.getCarouselList()
            .then((data:any)=>{
                this.cl=new Array();
                this.cl=data;


            })

    }

}
