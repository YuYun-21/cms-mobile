import { Component } from '@angular/core';
import {News} from "../model/News";
import {NewsService} from "../service/news.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    newslist:Array<News>

    constructor(private newsservice:NewsService
        ,private router:Router) {
        this.newslist=new Array();
    }


    ionViewWillEnter(){
        this.loadNewsList();

    }

    loadNewsList(){

        this.newsservice.getNewsList()
            .then((data:any)=>{
                this.newslist=new Array();
                this.newslist=data;


            })


    }

    goTonewsDetail(id:string){

        this.router.navigate(['newsdetail',{"id":id}])

    }

}
