import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-view-tutorial',
  templateUrl: './view-tutorial.component.html',
  styleUrls: ['./view-tutorial.component.scss']
})
export class ViewTutorialComponent implements OnInit {

  id:Number | undefined;
  tutorial: Tutorial =new Tutorial();
 
  
  constructor(private tutorialService:TutorialService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.tutorialService.getTutorialById(this.id!).subscribe(data=>{
      this.tutorial=data;
    },error=>console.log(error)
    )
  }

}
