import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import {MyFriend} from "../../model/MyFriend";
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {MyfriendService} from "../../service/myfriend.service";

@Component({
  selector: 'app-editfridend',
  templateUrl: './editfridend.page.html',
  styleUrls: ['./editfridend.page.scss'],
})
export class EditfridendPage implements OnInit {

    imgstr:string;
    myfriend:MyFriend;
    state:string;
    id:string;
    context:string;

  constructor(private myfriendsservice:MyfriendService,
              private navctl:NavController,
              private parm:ActivatedRoute) {

      this.imgstr="data:image/jpeg;base64,"
      this.state=this.parm.snapshot.paramMap.get('state');
      if(this.state=='add'){

          this.myfriend=new MyFriend();
      }
      else if(this.state=='update'){
          this.id=this.parm.snapshot.paramMap.get("id");
          this.getSingleMyFridends();
      }
  }

  ngOnInit() {
  }

    async takePicture() {
        this.imgstr="data:image/jpeg;base64,";

        const image = await Plugins.Camera.getPhoto({
            quality: 100,
            allowEditing: false,
            resultType: CameraResultType.Base64,  //与上周的代码进行比对
            source: CameraSource.Camera
        });

        this.imgstr += image.base64String;
        console.log(this.imgstr);
        this.myfriend.pic=this.imgstr;

    }

    save(){
        this.myfriend.content=this.context;

        this.myfriendsservice.saveMyFriends(this.myfriend)
            .then((data:any)=>{
                if(data.msg=='ok'){
                    this.navctl.pop();
                }
                else{
                    //自行编写错误提示代码
                    console.log("保存错误");
                }
            })
    }

    getSingleMyFridends(){
        this.myfriendsservice.getSingleMyFriends(this.id)
            .then((data:any)=>{
                if(data.msg=='ok'){
                    this.myfriend=new MyFriend();
                    this.myfriend=data.obj;
                    this.myfriend.myfriendid=data.obj.myfriendid;
                    this.myfriend.pic=data.obj.pic;
                    // this.myfriend.content=data.obj.content
                    this.context=data.obj.content;
                    this.imgstr=data.obj.pic;
                    this.myfriend.pbtime=data.obj.pbtime;
                }
            })
    }
}
