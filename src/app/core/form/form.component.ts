import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  @Input() id: string;
  @Input() pass: string;
  @Input() denied: string
  inputColor: string
  @Output() eventOutput: EventEmitter<FormGroup> = new EventEmitter<FormGroup>() 

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
   }

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
  
  ngOnInit() {}

  ngOnChanges() {
    // this.loginForm.reset({
    //   email: [this.id, [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(5)]]
    // })
    this.loginForm.patchValue({
      email: this.id
    });
   
    console.log(this.id)
  }

  notifyParent() {
    console.log('notifying parent')
    this.eventOutput.emit(this.loginForm)
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


}
