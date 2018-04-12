import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Display';
  dataList: any;

  constructor(private _DataServiceService: DataServiceService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dataList = this._DataServiceService.getData();
    // .subscribe(data => {
    //   console.log(data);
    // });
  }

}
