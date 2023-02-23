import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  // test
  // private event: Document = document

  constructor(private authService: AuthService){}

  ngOnInit(): void {}

  // test
  // public sair(): void{
  //   this.event.location.href="http://localhost:4200"
  // }

  public logout(){
    this.authService.logout()
  }
}
