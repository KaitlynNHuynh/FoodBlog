import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms'
import {DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  post: FormGroup;

  constructor(private formBuilder: FormBuilder, private domSanitizer: DomSanitizer) {
    this.post = this.formBuilder.group({
      image       : '',
      description : '',
    });
   }

  ngOnInit(): void { }

  readFile(event) {
    if (event) {
        const reader = new FileReader();
        reader.readAsDataURL(event[0]);
        reader.onload = (event:any) => {
            // Dom Sanitzer used to strip out any characters that may be malicious when dispalyign image on front-end
            this.post.controls.image.setValue(this.domSanitizer.bypassSecurityTrustResourceUrl(reader.result as string));
        };
    }
  }
}
 