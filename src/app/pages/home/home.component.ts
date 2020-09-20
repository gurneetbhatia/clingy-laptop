import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

declare function takePicture(): any
declare function initialise(): any
declare function makeSound(url: string): any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  workTime: number = 30;

  enableGit: boolean = true;

  started: boolean = false;

  check;

  constructor(private http: HttpClient,
              private notifService: NotificationService) { }

  ngOnInit(): void {
    console.log(this.notifService);   
    initialise();
    makeSound("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3")
  };


  async onSubmit(): Promise<any> {
    this.started =! this.started;

    if (this.started) {
      this.checkScreen()
      console.log("Started");
    } else {
      clearInterval(this.check);
      console.log("Ended");
    }
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async checkScreen(): Promise<void> {
    this.sendData();
    if (this.started) {
      await this.timeout(500);
      this.checkScreen();
    }
  }

  sendData(): void {
    console.log('here');
    console.log(this.notifService)
    takePicture();
  }


}
