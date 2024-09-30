import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {GalleryService} from './galleryService';
import { Picture } from './picture';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common"; 


@Component({
    selector: 'my-app', // Определяется селектор-css для HTML-элемента, который будет представлять компонент.
    standalone: true, // указывает, что компонент будет независимым, то есть для него не нужно создавать дополнительных модулей
    imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
    providers: [GalleryService],
    templateUrl: './app.component.html',
    styleUrl: './style.component.css' 
})
   

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
    image : string = "0";
    name : string = "0";
    author : string = "0";
    year: number = 0;
    description : string = "0";
    gallery : string = "0";

    pictures: Picture[] = [];
    constructor(private galleryService:GalleryService){}

    pictureInfo(num:number):string{
        return this.pictures[num].name + ", " +
        this.pictures[num].author + ", " +
        this.pictures[num].year;
    }
    
    ngOnInit(){
        this.pictures = this.galleryService.getData();
    }

    toShow = "";
    myInfo2(num:number):void{
        this.toShow = "show" + num;
    }
}