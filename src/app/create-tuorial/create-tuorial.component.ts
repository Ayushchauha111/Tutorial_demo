import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-create-tuorial',
  templateUrl: './create-tuorial.component.html',
  styleUrls: ['./create-tuorial.component.scss']
})
export class CreateTuorialComponent implements OnInit {

  tutorial: Tutorial=new Tutorial();
  constructor(private tutorialService:TutorialService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.tutorial)
    this.saveTutorial();
  }
  saveTutorial()
  {
  this.tutorialService.createTutorial(this.tutorial).subscribe(data=>
    {console.log(data)
  this.goToTutorialList();}
  ,error=>console.log(error));
  }
  goToTutorialList()
{
  this.router.navigate(['/tutorials'])
}


}
