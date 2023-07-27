import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    if(isDevMode()){
      console.log("Development Mode!");
    }else{
      console.log("Production Mode..")
    }
  }
  title = 'task-management';
}
