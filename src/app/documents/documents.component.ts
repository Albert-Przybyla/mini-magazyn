import { documentService } from './../document.service';
import { Component, OnInit } from '@angular/core';
import { document } from '../document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: document[] = [];

  constructor(
    private documentService: documentService
  ) { }

  ngOnInit(): void {
    this.getdocuments()
  }

  getdocuments(): void{
    this.documentService.getDocuments().subscribe(Documents => this.documents = Documents)
  }

}
