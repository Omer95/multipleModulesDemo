import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private modalService: NgbModal, private route: ActivatedRoute) { }

  logout() {
    this.auth.logout();
    if (!(localStorage.getItem('id_token'))) {
      console.log('Logged Out')
      this.router.navigate(['core'])
    }
  }

  ngOnInit() {
  }
  open() {
    const modalRef = this.modalService.open(UserFormComponent);
  
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  openScroll() {
    this.router.navigate(['dashboard/scroll'])
  }

}
