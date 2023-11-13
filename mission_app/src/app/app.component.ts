import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  public getAllPosts() {
    this.router.navigate(['read'], {queryParams: {data: new Date()}});
  }
  title = 'mission_app';
}
