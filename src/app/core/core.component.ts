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
  @Input() id: string;
  @Input() pass: string;
  denied: string
  inputColor: string 

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  loginForm: FormGroup;
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
          this.denied='true';
          console.log('incorrect ID/Password')
        }
        else {
          this.router.navigate(['dashboard'])
        }
      })
      this.denied='true'
    }
  }

  randGet() {
    if (this.id && this.pass) {
      this.authService.randGet();
    }
  }
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


}
