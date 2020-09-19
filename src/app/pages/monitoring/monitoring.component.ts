import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit  {
  workTime: number = 30;

  enableGit: boolean = true;

  started: boolean = false;

  check;

  constructor(private http: HttpClient,
              private notifService: NotificationService) { }

  ngOnInit(): void {
    console.log(this.notifService);
  };


  async onSubmit(): Promise<any> {
    this.started =! this.started;

    if (this.started) {
      this.check = setInterval(this.sendData, 1000);
      console.log("Started");
    } else {
      clearInterval(this.check);
      console.log("Ended");
    }
  }

  sendData(): void {
    console.log('here');
    this.notifService.showSuccess("Sent request");
  }


}
