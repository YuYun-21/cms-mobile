import {Component, OnInit} from '@angular/core';
import {LoginComponent} from "../components/login/login.component";
import {ModalController} from "@ionic/angular";
import {ModalOptions} from '@ionic/core'
import {AuthService} from "../service/auth.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

    constructor(public modalController: ModalController
        ,private authservice:AuthService
        ,private storage:Storage) {}


    ngOnInit(){


        // this.presentModal();
    }
    ionViewWillEnter(){

        this.storage.get("TOKEN")
            .then((data:any)=>{
                if(data){

                }
                else{
                    this.presentModal();
                }

            })

    }

    async presentModal() {
        const modal = await this.modalController.create(<ModalOptions>{
            component: LoginComponent

        });
        return await modal.present();
    }

}
