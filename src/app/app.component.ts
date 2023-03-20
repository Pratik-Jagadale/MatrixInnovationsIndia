import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MatrixInnovationsIndia';

  public show: boolean = true;
  public notToShow: boolean = false;
  public mobile: boolean = false;

  public details = navigator.userAgent;
  public regexpAndroid = new RegExp('android*');
  public regexpIPhone = new RegExp('iphone*');
  public regexpIPad = new RegExp('ipad*');
  public regexpLinux = new RegExp('Linux*');

  public isMobileDevice: boolean = true;
  public isWindowsOrLinuxeDevice: boolean = false;

  constructor() {

    if (this.regexpAndroid.test(this.details) || this.regexpIPhone.test(this.details) || this.regexpIPad.test(this.details)) {
      // returns true if working locally
      this.isMobileDevice = true;
      this.isWindowsOrLinuxeDevice = false;
      console.log('This is Android Device\n');
    }
    else {

      this.isMobileDevice = false;
      this.isWindowsOrLinuxeDevice = true;
    }

  }

  openNav() {
    this.show = !this.show;
    this.notToShow = !this.notToShow;

    if (this.regexpAndroid.test(this.details) || this.regexpIPhone.test(this.details) || this.regexpIPad.test(this.details)) {
      //returns true if working locally
      //this.isMobileDevice = true;

      console.log('This is Android Device\n');

    }
    console.log('this.show =', this.show);
    console.log('this.notToShow', this.notToShow);

  }

  ngOnInit() {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
      console.log(this.mobile);
    }
  }


}
