import { Component, OnInit } from '@angular/core';
import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-drop-file',
  templateUrl: './drop-file.component.html',
  styleUrls: ['./drop-file.component.css']
})
export class DropFileComponent implements OnInit {
  public files: UploadFile[] = [];
  
  constructor() { }

  dropped(event: UploadEvent) {
    this.files=event.files;
    for (const droppedFile of event.files) {
      //if it is a file 
      if (droppedFile.fileEntry.isFile) {
        const fileEntry= droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File)=> {
          console.log(droppedFile.relativePath, file);
          /**
           * logic for uploading file to server
           */
        });
      }
      else {
        //if it is a directory
        const fileEntry=droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry)
      }
    }
  }

  fileOver(event) {
    console.log(event);
  }
  fileLeave(event) {
    console.log(event);
  }
  click() {
    console.log('clicked')
  }

  ngOnInit() {
  }

}
