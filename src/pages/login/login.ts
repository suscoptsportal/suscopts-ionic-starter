import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { GeneralService } from '../../services/general.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  str: string = "";
  email: string = "";
  password: string = "";

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private gernalService: GeneralService,
    private lss: LocalStorageService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser() {
    let loading = this.loadingCtrl.create({
      content: "Login in ... "
    })
    loading.present();
    this.gernalService.login(this.email.toLowerCase(), this.password).subscribe(x => {
      loading.dismiss().catch(x => console.log(x));
      console.log(x);
      if (x['status'] == "success") {
        this.toastCtrl
          .create({
            message: `Welcome ${x['name']}` , duration: 3000 })
          .present()
        this.navCtrl.setRoot(HomePage);
      } else {
        this.toastCtrl
          .create({ message: x["message"], duration: 3000 })
          .present()
      }
    }, (error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);

      this.toastCtrl.create({
        "message": "Server is inactive",
        "duration": 3000
      }).present();;
    });
  }
}
