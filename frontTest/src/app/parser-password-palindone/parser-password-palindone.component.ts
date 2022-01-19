import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-parser-password-palindone',
  templateUrl: './parser-password-palindone.component.html',
  styleUrls: ['./parser-password-palindone.component.css']
})
export class ParserPasswordPalindoneComponent implements OnInit {
  
  password:any = '';
   

  constructor(private route:ActivatedRoute) {
     
  
   }

  ngOnInit(): void {
   this.password = this.route.snapshot.paramMap.get('password'); 
  }

 

}
