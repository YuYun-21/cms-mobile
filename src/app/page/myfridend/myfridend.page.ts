import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MyfriendService} from "../../service/myfriend.service";
import {MyFriend} from "../../model/MyFriend";

@Component({
  selector: 'app-myfridend',
  templateUrl: './myfridend.page.html',
  styleUrls: ['./myfridend.page.scss'],
})
export class MyfridendPage implements OnInit {

    fl:Array<MyFriend>;
  constructor(private router:Router
      ,private myfriendservice:MyfriendService) {

      this.fl=new Array();
  }

    //即将进入页面时触发
    ionViewWillEnter(){
        this.loadFriendsList();
    }


  ngOnInit() {
  }

    goToEditPage(){

        this.router.navigate(['editfridend',{"state":'add'}]);
    }

    loadFriendsList(){

        this.myfriendservice.getMyFriendsList()
            .then((data:any)=>{
                this.fl=new Array();
                this.fl=data.list;

            })
    }


    deleteMyfriends(id:string){

        this.myfriendservice.deleteMyFriends(id)
            .then((data:any)=>{

                if(data.msg=='ok'){
                    this.loadFriendsList();
                }
            })
    }


    toUpdate(id:string){
        this.router.navigate(['editfridend',{"state":'update',"id":id}]);
    }

}
