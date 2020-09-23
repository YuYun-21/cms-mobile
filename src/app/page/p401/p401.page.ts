import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../../components/login/login.component";
import {ModalController} from "@ionic/angular";
import {ModalOptions} from '@ionic/core'

@Component({
  selector: 'app-p401',
  templateUrl: './p401.page.html',
  styleUrls: ['./p401.page.scss'],
})
export class P401Page implements OnInit {

    constructor(public modalController: ModalController) { }

    ngOnInit() {
    }


    login(){
        this.presentModal();
    }


    async presentModal() {
        const modal = await this.modalController.create(<ModalOptions>{
            component: LoginComponent

        });
        return await modal.present();
    }

}
