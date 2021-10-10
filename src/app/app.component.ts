import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ----- Variables ----- //
  newList: string;
  listToDo: any;
  listEmpty = true;

  constructor(){
    this.newList = '';
    this.listToDo = [];
  }

  // ----- Function to add new To Do List ----- //
  addnewText(list:string){
    this.listToDo.push(list);
    this.listEmpty = false;
  };

  // ----- Function to delete existing To Do List ----- //
  deleteList(list: string){
    for(let i=0; i<= this.listToDo.length; i++){
      if(list == this.listToDo[i]){
        this.listToDo.splice(i,1)
      }
    } 
    if (this.listToDo.length == 0){
      this.listEmpty = true;
    }
  };

}
