import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  public firstName: string = '';
  public lastName: string = '';
  public gender: string = '';
  public email: string = '';

  constructor (private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData() {
    this.apiService.getData().subscribe({
      next: (result: any) => {
        this.firstName = result.results[0].name.first;
        this.lastName = result.results[0].name.last;
        this.gender = result.results[0].gender;
        this.email = result.results[0].email;
        
        },
        error: (error: any) => {
          console.log(error);
        }
    });
  }
}
