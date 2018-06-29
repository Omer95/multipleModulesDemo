import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent implements OnInit {
  options: any={
    removeOnSpill: true
  }

  constructor(private dragula: DragulaService) { 
    
  }

  ngOnInit() {
  }

}
