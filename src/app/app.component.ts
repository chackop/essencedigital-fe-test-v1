import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Display';
  dataList: any[];
  searchTerm$ = new Subject<string>();
  direction: number;
  isDesc: boolean;
  column: any;

  constructor(private _DataServiceService: DataServiceService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._DataServiceService.getData().subscribe((data) => {
      this.dataList = data;
      console.log(this.dataList);
    });
  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

}
