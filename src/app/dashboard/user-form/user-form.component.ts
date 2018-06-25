import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges {
  states=['Sindh', 'Punjab', 'KPK', 'Balochistan'];
  teamItems=['everest', 'rushmore', 'k2', 'kamet', 'passu'];
  roleItems=['manager', 'admin', 'leader', 'recruit', 'director'];
  roles:string[]=[]
  teams:string[]=[]
  roleNo=0
  teamNo=0
  enabled=false

  roleControls: FormControl[]=[]
  teamControls: FormControl[]=[]

  userForm: FormGroup
  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal) {
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
    if (this.roleNo<4) {
      this.roles.push(''+this.roleNo)
      this.userForm.addControl(this.roles[this.roleNo], new FormControl(null, Validators.required))
      this.roleNo++
      this.teams.push(''+this.teamNo)
      this.userForm.addControl(this.teams[this.teamNo], new FormControl(null, Validators.required))
      this.teamNo++

      this.enabled=false
    }

  }
  submit() {

  }
  cancel() {
    
  }

  teamSelector(index) {
    index=''+index
    let result:string=this.userForm.get(index).value
    console.log(result)
    var location = this.teamItems.indexOf(result);
    if (location !== -1) this.teamItems.splice(location, 1);
    
  }
  log() {
    console.log('roles dropdown opened')
  }
  enableButton() {
    this.enabled=true
    
  }
  enableAddMore() {
    if (this.enabled) {
      //this.enabled=false
      return true
    }
    else {
      return false;
    }
  }
  ngOnChanges() {
    this.enabled=false
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
 
  
}
