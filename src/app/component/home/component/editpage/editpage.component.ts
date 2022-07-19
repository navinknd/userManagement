import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { format } from '@progress/kendo-intl';
import { bufferTime, catchError, concatMap, count, debounceTime, distinct, elementAt, filter, first, from, fromEvent, interval, last, map, max, mergeMap, min, Observable, of, skip, switchMap, take, takeLast, takeWhile, tap, timer, combineLatest, Subject, scan, startWith, distinctUntilChanged, EMPTY, defer, merge } from 'rxjs';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css'],
  standalone: false
})
export class EditpageComponent implements OnInit {
  id!: number;
  searchForm!: FormGroup;
  // categories: string[] = ["mobile", "laptop", "pc", "computer", "phone", "pc", "mobile", "laptop", "watch", "phone"];

  // bowlerSubjectOne = new Subject<number>();
  // bowlerSubjectTwo = new Subject<number>();
  // bowlerSubjectThree = new Subject<number>();

  // one: number = 0;
  // two: number = 0;
  // three: number = 0;
  // total: number = 0

  // number = [211, 531, 351, 505, 225, 126, 55];
  // number$: Observable<number> = from(this.number);

  // categories$: Observable<string> = from(this.categories)
  // countVal = 0;

  // dataSubject: Subject<any> = new Subject<any>();

  constructor(private fb: FormBuilder, private http: HttpClient, private loginservice: LoginService) {

  }
  ngOnInit(): void {
    // this.loginservice.behaOb$.subscribe(val => { this.id = val });
    // console.log(this.id,"id");
  }
  // user = [{
  //   name: "navin",
  //   age: 20
  // }, {
  //   name: "vikash",
  //   age: 21
  // },
  // {
  //   name: "navmacklinin",
  //   age: 20
  // }, {
  //   name: "navin",
  //   age: 20
  // }, {
  //   name: "vikash",
  //   age: 21
  // },
  // {
  //   name: "navmacklinin",
  //   age: 20
  // },]

  saveData() {


    // EMPTY.subscribe({
    //   next: () => console.log('Next'),
    //   complete: () => console.log('Complete!')
    // });

    // const result = EMPTY.pipe(startWith(7));
    // result.subscribe(x => console.log(x));

    //   let data= this.loginservice.sampleTestingAPiForErorHandling().subscribe({
    //   next:(response)=>{
    //     console.log(response)
    //   },error:(err)=>{
    //     console.log({err});
    //   },complete(){
    //     data.unsubscribe();
    //   }
    // })
  }
  // this.dataSubject.next(this.user);
  // this.dataSubject.pipe(distinctUntilChanged((pre, crr) => JSON.stringify(pre) === JSON.stringify(crr))).subscribe({
  //   next: (res) => console.log(res), error: (err => {
  //     console.log(err)
  //   })
  // })


  // let posts = { "id": 1, "title": "json-server", "author": "typicode" }
  // let posts2 = { "id": 1, "title": "json-server", "author": "typicode" }
  //distinctUntilChanged return true means it will not emit value
  // of(posts, posts, posts2).pipe(distinctUntilChanged((prr, crr) => JSON.stringify(prr) === JSON.stringify(crr))).subscribe(val => console.log(val)
  // )
  // of(posts, posts2,posts).pipe(distinct()).subscribe(val => console.log(val)
  // )
  // of(posts, posts2,posts).pipe(distinctUntilChanged()).subscribe(val => console.log(val)
  // )
  // addEventListener('keydown', (e) => {
  //   if (e.keyCode == 65) this.bowlerSubjectOne.next(1);
  //   if (e.keyCode == 66) this.bowlerSubjectTwo.next(1);
  //   if (e.keyCode == 67) this.bowlerSubjectThree.next(1);
  // })

  // combineLatest(this.getScore(this.bowlerSubjectOne), this.getScore(this.bowlerSubjectTwo), this.getScore(this.bowlerSubjectThree))
  //   .subscribe(([one, two, three]) => {
  //     // console.log({ one }, { two }, { three },{total:one+two+three});
  //     this.one = one;
  //     this.three = three;
  //       this.two = two;
  //     this.total = one + two + three;
  //   })

  // fromEvent(document,'click').pipe(bufferTime(3000)).subscribe(data=>console.log(data));

  // of(20,24).pipe(concatMap((num => this.loginservice.getOneUserData(num)))).pipe(tap(e=>console.log("api data")
  // )).subscribe({
  //   next:(res)=>{
  //     console.log("success",res); 
  //   },error:(err)=>{
  //     console.log("error",err);  
  //   }
  // })

  // this.number$.pipe(mergeMap(num=>of(`number is ${num}`))).subscribe(data=>console.log(data))

  // fromEvent(document,'click').pipe(
  //   switchMap(()=>interval(500))
  // ).subscribe(data=>console.log(this.countVal=data)
  // )
  // this.searchForm = this.fb.group({
  //   formName: ['', Validators.required]
  // });
  // // this.categories$.pipe(distinct(),count()).subscribe(data=>console.log(data));

  // this.number$.pipe(map((data:any)=>data+100)).subscribe(data =>console.log(data))
  // this.number$.pipe(mapTo('requested')).subscribe(data =>console.log(data))

  // this.formName?.valueChanges
  //   .pipe(
  //   debounceTime(1000),
  //   switchMap(()=>interval(500))
  //   )
  //   .subscribe(data=>console.log(this.countVal=data)
  //   )



  // getScore(sub: Subject<number>) {
  //   return sub.pipe(
  //     scan((acc, crr) => acc + crr, 0),
  //     startWith(0)
  //   )

  // }
  // filtervalue(v: number) {
  //   return v > 50 ? true : false;
  // }
  // checkCondition(value: any) {
  //   return value.length < 10 ? true : false;
  // }
  // const obj1$ = timer(2000, 3000);
  // const obj2$ = timer(5000, 4000);
  // combineLatest(obj1$, obj2$).subscribe(([one, two]) => {
  //   console.log({ one }, { two });
  // })
  // public get formName(): FormControl {
  //   return this.searchForm.get('formName') as FormControl
  // }
}
