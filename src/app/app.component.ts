import {Component, OnInit} from '@angular/core'; // Importing OnInit hook
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // Implementing OnInit
  constructor(private http: HttpClient) {}
  title = 'api-angular';
  ngOnInit() {
    // API Call
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key'
    });
    this.http
        .get<any>('https://random-facts2.p.rapidapi.com/getfact', {
          headers: headers
        })
        .subscribe(data => {
          console.log(data);
        });
  }
}

