import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorageService } from '../../services/local-storage.service';
import { GeneralService } from '../../services/general.service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;

  constructor(
    public navCtrl: NavController,
    private lss: LocalStorageService,
  ) {
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.lss.name$.subscribe(x => {
      this.name = x;
    });
  }
  signOut() {
    this.lss.LogoutUser();
    this.navCtrl.setRoot(LoginPage);
  }

}
