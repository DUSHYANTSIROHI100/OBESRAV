import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Obserable';

  //myObservable = new Observable((observer)=>{
    //console.log('Obserable starts')
    //setTimeout(()=>{observer.next("1")},1000)
    //setTimeout(()=>{observer.next("2")},1000)
    //setTimeout(()=>{observer.next("3")},1000)
    //setTimeout(()=>{observer.error(new Error('Somethong went wrong!please try again later'))},3000)
   // setTimeout(()=>{observer.next("4")},1000)
   // setTimeout(()=>{observer.complete()},6000)
    //observer.next("1")
    //observer.next("2")
    //observer.next("3")
    //observer.next("4")
   // observer.next("5")
  //});
//2 types
  //myObservable = Observable.create((observer: { next: (arg0: string) => void; })=>{
  //setTimeout(()=>{observer.next("A")},1000)
  //setTimeout(()=>{observer.next("B")},2000)
  ////setTimeout(()=>{observer.next("C")},3000)
 // setTimeout(()=>{observer.next("D")},4000)
 // setTimeout(()=>{observer.next("E")},5000)
//});
//3 types
array1=[1,2,6,7,8];
array2=['A','B','C'];

//myObservable = of(this.array1,this.array2,20 79,'Hello');

myObservable = from(this.array1);
  ngOnInit(){
this.myObservable.subscribe((val: any)=>

{
  console.log(val);
},(error: { message: any; })=>{
  alert(error.message);
},()=>{
  alert('obesrable has complete emitting all values');
});
  }
}
