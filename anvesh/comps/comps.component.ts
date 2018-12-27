import {Component,OnInit} from '@angular/core'
import{Employe} from './comps.service'
import {ConfigService} from '../http/http.database'

@Component({
    selector:'my-comps',
    templateUrl:'comps.Component.html',
    styleUrls:['comps.Component.css']
})
export class CompsComponent implements OnInit{
        image:string='https://www.javatpoint.com/images/logo/jtp_logo.png';

    title:string='Employee Details';
    details : any [];
   constructor(private employedetails:Employe,private values:Employe,private http:ConfigService) {}
    ngOnInit(){
              this.details=this.employedetails.getEmployes();
            //  this.http.getcities();
    }

    get color():string{
        return this.values.color;
    }
    set color(value:string){
         this.values.color = value;
    }

    selectRadioButtonValue:string="All";

    onEmployeCountButton(selectRadioButton:string):void{
       
        this.selectRadioButtonValue=selectRadioButton;
    }
    getTotal() : number{
   var t=this.details.length;
        return t;
    }
    getTotalMale():number{

        return this.details.filter(e=>e.gender==='male').length;
    }

    getTotalFemal():number{
        return this.details.filter(e=>e.gender==='female').length;
    }

    // getCities(){
    //     this.http.getcities();
    // }
}
