import { Injectable } from '@angular/core';

@Injectable()
export class Employe{
getEmployes(){
    return [{
        firstName:'anvesh',
        lastName:'pallamreddy',
        gender:'male',
        age:27,
        salary:1231.1,
        date:'12/1/1991'
        },
        {
            firstName:'hari',
            lastName:'babu',
            gender:'male',
            age:28,
            salary:4231.741,
    
            date:'1/11/1891'
    
            },
            {
                firstName:'ram',
                lastName:'kumar',
                gender:'male',
                age:40,
                salary:1791.511,
                date:'12/6/2001'
    
                },
                {
                    firstName:'rama',
                    lastName:'kumar',
                    gender:'female',
                    age:7,
                    salary:7431.15,
    
                    date:'1/8/2011'
    
                    },
                    {
                        firstName:'kava',
                        lastName:'kumar',
                        gender:'female',
                        age:7,
                        salary:5431.15,
        
                        date:'11/8/2011'
        
                        }
    ];
    
}
color:string="pink";
}