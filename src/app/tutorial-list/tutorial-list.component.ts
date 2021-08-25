import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';
import * as XLSX from 'xlsx';
import { ExcelServiceService } from '../excel-service.service';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';




@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent implements OnInit {
  fileName='ExcelSheet.xlsx';
  tutorials:any;
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  tableSize = 3;
  tableSizes = [3, 6, 9, 12];
  tutorial:Tutorial=new Tutorial();
  importedTut:Tutorial[]=[];
  head = [['ID', 'NAME', 'DESIGNATION', 'DEPARTMENT']]

  data = [
    [1, 'ROBERT', 'SOFTWARE DEVELOPER', 'ENGINEERING'],
    [2, 'CRISTINAO','QA', 'TESTING'],
    [3, 'KROOS','MANAGER', 'MANAGEMENT'],
    [4, 'XYZ','DEVELOPER', 'DEVLOPEMENT'],
    [5, 'ABC','CONSULTANT', 'HR'],
    [73, 'QWE','VICE PRESIDENT', 'MANAGEMENT'],
  ]




  constructor(private tutorialService: TutorialService,
    private router:Router,
    private excelSrv:ExcelServiceService) { }

  ngOnInit(): void {
    this.getTutorials();
  }

  onTableDataChange(event:any){
    this.page = event;
    this.getTutorials();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getTutorials();
  }  

  private getTutorials()
  {
    this.tutorialService.getTutorialList().subscribe(data=>{
      console.log(data)
      this.tutorials=data
    })
  }
  updateTutorial(id: Number)
  {
    this.router.navigate(['updateTutorial',id]);

  }
  deleteTutorial(id:Number)
  {
    this.tutorialService.deleteTutorial(id).subscribe(data=>{
      console.log(data)
      this.getTutorials();
    },error=>console.log(error));
   

  }
  refreshList(): void {
    this.getTutorials();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }
  viewTutorial(id:Number)
  {
    this.router.navigate(['viewTutorial',id]);
  }
  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  deleteAllTutorial()
  {
    this.tutorialService.deleteAllTutorial().subscribe(data=>{
      console.log(data)
      this.refreshList();
    },error=>console.log(error))
  }

  searchTitle()
  {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.tutorialService.searchByTitle(this.title).subscribe(data=>{
      this.tutorials=data
      console.log(data)
    },error=>console.log(error))
  }
  exportToExcel()
  {

    // Table id pass kro table rows ko pakdega
    let element=document.getElementById('excel-table');
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);

    //workbook genrate kro worksheet add kro
    const wb:XLSX.WorkBook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'sheet1');


    //file save kro
    XLSX.writeFile(wb,this.fileName);

    //jsonworld.com/demo/how-to-export
    
  }




  createPdf() {
    
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('My Team Detail', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);

    (doc as any).autoTable({
      // head: this.head,
      // body: this.data,
      // theme: 'striped',
      // didDrawCell: (data: { column: { index: any; }; }) => {
      //   console.log(data.column.index)
      // }
       html: '#excel-table' 
    })
  // below line for Open PDF document in new tab
  doc.output('dataurlnewwindow')

  // below line for Download PDF document  
  doc.save('myteamdetail.pdf');
 
  }

  
}

