import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from '@progress/kendo-intl';
import { catchError, count, debounceTime, distinct, elementAt, filter, first, from, fromEvent, interval, last, map, mapTo, max, mergeMap, min, Observable, of, skip, switchMap, take, takeLast, takeWhile } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css'],
  standalone: false
})
export class EditpageComponent implements OnInit {

  searchForm!: FormGroup;
  // categories: string[] = ["mobile", "laptop", "pc", "computer", "phone", "pc", "mobile", "laptop", "watch", "phone"];

  number = [211, 531, 351, 505, 225, 126, 55];
  number$: Observable<number> = from(this.number);

  // categories$: Observable<string> = from(this.categories)
  countVal = 0;
  constructor(private fb: FormBuilder, private http: HttpClient, private loginservice: LoginService) {

  }
  ngOnInit(): void {

    of(Number(localStorage.getItem('id'))).pipe(mergeMap(num => this.loginservice.getOneUserData(num)),catchError((err)=>of(err.status))).subscribe({
      next:(res)=>{
        console.log("success",res); 
      },error:(err)=>{
        console.log("error",err);  
      }
    })
    
    // this.number$.pipe(mergeMap(num=>of(`number is ${num}`))).subscribe(data=>console.log(data))

    // fromEvent(document,'click').pipe(
    //   switchMap(()=>interval(500))
    // ).subscribe(data=>console.log(this.countVal=data)
    // )
    this.searchForm = this.fb.group({
      formName: ['', Validators.required]
    });
    // this.categories$.pipe(distinct(),count()).subscribe(data=>console.log(data));

    // this.number$.pipe(map((data:any)=>data+100)).subscribe(data =>console.log(data))
    // this.number$.pipe(mapTo('requested')).subscribe(data =>console.log(data))

    // this.formName?.valueChanges
    //   .pipe(
    //   debounceTime(1000),
    //   switchMap(()=>interval(500))
    //   )
    //   .subscribe(data=>console.log(this.countVal=data)
    //   )
  }
  // filtervalue(v: number) {
  //   return v > 50 ? true : false;
  // }
  // checkCondition(value: any) {
  //   return value.length < 10 ? true : false;
  // }

  public get formName(): FormControl {
    return this.searchForm.get('formName') as FormControl
  }
}
