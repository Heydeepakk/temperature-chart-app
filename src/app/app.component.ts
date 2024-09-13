import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataList: { datetime: string; temperature: number }[] = [];

onDataAdded(data: { datetime: string; temperature: number }) {
  this.dataList = [...this.dataList, data];
}

}
