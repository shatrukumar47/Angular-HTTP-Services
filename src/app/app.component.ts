import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-HTTP-Assignment';

  constructor(){}

  ngOnInit(): void {
    initFlowbite();
  }

  handleGithub(){
    window.open("https://github.com/shatrukumar47/Angular-HTTP-Services", "_blank")
  }
}
