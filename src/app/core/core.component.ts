import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}
  prevId:string
  enable: boolean = false
  loginForm: FormGroup
  id: string
  pass: string
  pDenied: string
  ngOnInit(){}

  onNotify(event) {
    this.enable=true;
    this.loginForm=event;
    console.log('emitted: '+event.get('email').value+' '+event.get('password').value)
  }

  login() {
    if (this.loginForm.valid) {
      this.id=this.loginForm.get('email').value;
      this.pass=this.loginForm.get('password').value;
      console.log(this.id+' '+this.pass)
    }
    if (this.id && this.pass) {
      this.authService.login(this.id, this.pass).subscribe(res=> {
        //console.log(this.id+" "+this.pass)
        if (!this.authService.isLoggedIn()) {
          this.pDenied='true';
          console.log('incorrect ID/Password')
        }
        else {
          this.router.navigate(['dashboard'])
        }
      })
      this.pDenied='true'
    }
  }

}
