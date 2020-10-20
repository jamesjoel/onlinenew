import { Component, OnInit } from '@angular/core';
import { FileuploadService } from '../../services/fileupload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  
  constructor(private _fileUploadServ : FileuploadService) { }

  ngOnInit() {
  }
  demo(x){
    console.log(x.innerHTML);
    alert(x.innerHTML);
  } 
  upload(obj){
    // console.log("-----", obj.files[0]); 
    let file = obj.files[0];
    let form = new FormData(); // enctype='multipart/form-data'
    form.append("image", file);
    this._fileUploadServ.doUpload(form).subscribe((data)=>{
      console.log(data); 
    })

  }

}
