import{Component,Input,Output,EventEmitter} from '@angular/core';
import{Employe} from './comps.service'

@Component({
    selector:'my-child',
    templateUrl:'comps.Child.html',
})
export class Child{

    constructor(private data:Employe){}
    get color():string{
        return this.data.color;
    }
    set color(value:string){
         this.data.color = value;
    }

    selectRadioButtonValue:string="All";

@Output()
    countRadioButtonChange:EventEmitter<string>=new EventEmitter<string>();

    @Input() all:number;
     
    @Input()
    male:number;

    @Input()
    female:Number;

    onRadioButtonSelectionChange(){
        this.countRadioButtonChange.emit(this.selectRadioButtonValue);
    }
}