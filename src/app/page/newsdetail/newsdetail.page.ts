import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../service/news.service";
import {News} from "../../model/News";

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.page.html',
  styleUrls: ['./newsdetail.page.scss'],
})
export class NewsdetailPage implements OnInit {

    id:string;
    news:News
    constructor(private parm:ActivatedRoute,
                private newsservice:NewsService) {
        this.news=new News();
        //接收URL参数
        this.id=this.parm.snapshot.paramMap.get("id");

    }

    ngOnInit() {
    }
    //当页面加载时运行
    ionViewWillEnter(){
        this.loadSingelNewsById();

    }
    //从服务器端获取单个新闻对象数据
    loadSingelNewsById(){

        this.newsservice.getSingleNews(this.id)
            .then((data:any)=>{
                this.news=new News();
                this.news=data;


            })

    }

}
