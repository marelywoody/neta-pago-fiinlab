import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-qr',
  templateUrl: './code-qr.component.html',
  styleUrls: ['./code-qr.component.css']
})
export class CodeQrComponent implements OnInit {

  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
  
  constructor() { }

  ngOnInit() {
  }

}
