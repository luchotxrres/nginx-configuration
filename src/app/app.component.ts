import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public h;
  public m;
  public s;
  public horaActual;

    ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      function renderTime() {
        var currentTime = new Date();
        var diem = "AM";
        this.h = currentTime.getHours();
        this. m = currentTime.getMinutes();
        this. s = currentTime.getSeconds();
        setTimeout(this.renderTime, 500);
          if (this.h == 0) {
          this.h = 12;
      } else if (this.h > 12) { 
        this.h = this.h - 12;
        diem="PM";
      }
      if (this.h < 10) {
        this.h = "0" + this.h;
      }
      if (this.m < 10) {
        this.m = "0" + this.m;
      }
      if (this.s < 10) {
        this.s = "0" + this.s;
      }
      this.myClock.textContent = this.h + ":" + this.m + ":" + this.s + " " + diem;
      this.myClock.innerText = this.h + ":" + this.m + ":" + this.s + " " + diem;
    }
  }
}
