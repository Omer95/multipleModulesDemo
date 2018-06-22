import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  states=['Sindh', 'Punjab', 'KPK', 'Balochistan'];
  teamItems=['everest', 'rushmore', 'k2', 'kamet', 'passu'];
  roleItems=['manager', 'admin', 'leader', 'recruit', 'director'];
  roles:string[]=[]
  teams:string[]=[]
  roleNo=0
  teamNo=0

  roleControls: FormControl[]=[]
  teamControls: FormControl[]=[]

  userForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.userForm=this.fb.group({
      address: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      zip: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      aTeam: [null, [Validators.required]],
      aRole: [null, [Validators.required]]
    })
   }

  addTeamAndRoles() {

  }
  ngOnInit() {
  }

  addMore() {
    this.roles.push(''+this.roleNo)
    this.userForm.addControl(this.roles[this.roleNo], new FormControl(null, Validators.required))
    this.roleNo++
    this.teams.push(''+this.teamNo)
    this.userForm.addControl(this.teams[this.teamNo], new FormControl(null, Validators.required))
    this.teamNo++

  }
  submit() {

  }
  cancel() {
    
  }

}
