import { Component, OnInit } from '@angular/core';
import { Subject, first } from 'rxjs';
import { CollectionData } from 'src/app/models/collection.model';
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
  public collections: Array<CollectionData> = new Array<CollectionData>();
  public apiCallFlag: Subject<boolean> = new Subject<boolean>();

  constructor (private apiService: ApiService) {

  }

  ngOnInit(): void {
    
  }

  public addCollection() {
    this.initializeData();
    this.apiCallFlag.pipe(first()).subscribe(result => {
      if (result) {
        const collectionData = {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          email: this.email
        };
        this.collections.push(collectionData);
      }
    });
  }

  public deleteUser(event: number): void {
    this.collections.splice(event,1);
  }

  private initializeData() {
    this.apiService.getData().pipe(first()).subscribe({
      next: (result: any) => {
        this.firstName = result.results[0].name.first;
        this.lastName = result.results[0].name.last;
        this.gender = result.results[0].gender;
        this.email = result.results[0].email;
        this.apiCallFlag.next(true);        
        },
      error: (error: any) => {
          this.apiCallFlag.next(false);
          console.log(error);
        }
    });
  }
}
