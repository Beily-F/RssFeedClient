import { Component } from '@angular/core';
import { RssService } from '../service/rss.service';
import Rss from '../model/Rss';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent {
  topics:Rss[]=[];
  visibleArr:boolean[]=[false];

  constructor(public RssService:RssService, public dialog:MatDialog,private router: Router) { 
    this.RssService.GetAllTopics().subscribe((succ) => {
      this.topics=succ;
      console.log("succ",succ);
    }
      , (err) => {
        console.log("err",err);
      });
  }
  visible(i:number){
    if(this.topics[i].body.startsWith('<'))
    {
      this.topics[i].body=this.topics[i].body.split('>')[1];
    }
    this.visibleArr[i]=!this.visibleArr[i];
  }
  navigate(i:number){
    window.open(this.topics[i].url);
  }

}



