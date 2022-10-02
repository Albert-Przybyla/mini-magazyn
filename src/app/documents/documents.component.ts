import { documentService } from './../document.service';
import { Component, OnInit } from '@angular/core';
import { document } from '../document';
// import { jsPDF } from 'jspdf'

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

  generatePdf(document: document):void{
    // const doc = new jsPDF()
    // doc.html(
    //   "<center><h1>Faktura numer "+document.number+"<h1><center>", {
    //     callback: function(doc) {
    //       doc.save("output.pdf");
    //     },
    //     x: 10,
    //     y: 10
    //   });
    // doc.save(document.number +".pdf");
    // console.log(doc);
  }

}
