import { Component } from '@angular/core';
declare var liff: any


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
      this.liff_init();
  }
  public localhost = window.location.href.indexOf("192.168.1.8") != -1;
  async liff_init() {
    await liff.init({ liffId: "1656699097-gapE5Z5z" });
    if (this.localhost) {
      var data = {
        'displayName': "TIGERBIG",
        'pictureUrl': "https://profile.line-scdn.net/0hXhpBX8mZB0dNOy-8foZ4EHF-CSo6FQEPNVtIdWs6WnAwX0gXcg9KKG0yUH9kWUgRcllOIW4_XSBh",
        'statusMessage': "โปรแกรมร้านอาหาร",
        // 'userId': "U09c4615c5c5e2c9324ad11332fd5a701"
        'userId': "Ud0d31cb32d8abe558613de6317cbbaf5"

      };
      
      // this.postData("isLoginByLine", data).then(async (login: any) => {
      //   console.log(login);
      //   await this.storage_set('data_sale', login.user)
      //   // await this.setUser()
      //   if (login.user.register == 0) {
      //     //  window.location.href = 'https://sale.deltafood.co/register-sale.php?key=' + login.user.s_id_line
      //   }
      // });
    } else if (liff.isInClient() || liff.isLoggedIn()) {
      this.isLoginByLine();
    } else {
      liff.login({ redirectUri: window.location.href })
    }
  }

  async isLoginByLine() {
    var profile = await liff.getProfile();
    await console.log(profile);
    
    // this.postData("isLoginByLine", profile).then(async (login: any) => {
    //     await this.storage_set('data_sale', login.user)
    //     // await this.setUser()
    //     if (login.user.register == 0) {
    //       window.location.href = 'https://sale.deltafood.co/register-sale.php?key=' + login.user.s_id_line
    //     }
    // });
  }
   
}
