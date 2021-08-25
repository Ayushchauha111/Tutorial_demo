import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-update-tutorial',
  templateUrl: './update-tutorial.component.html',
  styleUrls: ['./update-tutorial.component.scss']
})
export class UpdateTutorialComponent implements OnInit {

  id:Number | undefined;
  tutorial: Tutorial =new Tutorial();
 
  constructor(private tutorialService:TutorialService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id']
    this.tutorialService.getTutorialById(this.id!).subscribe(data=>{
      this.tutorial=data;
    },error=>console.log(error)
    )
    
  }
  onSubmit() 
  {

    this.tutorialService.updateTutorial(this.id!,this.tutorial).subscribe(data=>{console.log(data)
    this.goToTutorialList()},error=>console.log(error));
  
  }
  
  goToTutorialList()
{
  this.router.navigate(['/tutorials'])
}


}
