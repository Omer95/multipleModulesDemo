import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailForm: FormGroup
  showCity
  cities = [
    {id: 1, name: 'Eskisehir'},
    {id: 2, name: 'Sofia'},
    {id: 3, name: 'Islamabad', disabled: true},
    {id: 4, name: 'Lahore'},
    {id: 5, name: 'Karachi'}
  ];
  constructor(private fb: FormBuilder) {
    this.detailForm=this.fb.group({
      selectedCity: [null, Validators.required]
    })
   }

  getCity() {
    this.showCity=this.detailForm.get('selectedCity').value.name
  }
  ngOnInit() {
  }

}
