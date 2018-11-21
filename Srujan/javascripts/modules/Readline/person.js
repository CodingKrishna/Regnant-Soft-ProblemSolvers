/**
 *  basics of readline
 * 
 */
//create a variable and call raedline module
var raedline =require("readline");
//create an instance of readline which help in creating a prompt for using the 
//standardinput and standard otput object
var rl=raedline.createInterface(process.stdin,process.stdout);

//creating a variable for person whic is json object for storing the name and hobbies
var person={
    name:'',
    hobbies:[],
};


//to ask the question fro the user call the question function the call  back function is invoked after the user input has entered
rl.question("what is your name ?",function(answer){

    //assigning the answer as the name 
    person.name=answer; 


    //Asking the hobbies of the person using the set prompt
    rl.setPrompt(`what is the ${person.name} hobbies `)
        //to display the above question we use prompt method
        rl.prompt() 
        
        //the below event fires when the user submit the answer
        rl.on('line',function(hobbie){
           
           
            //checking weather the user entered exit or not
            if(hobbie.toLowerCase().trim()==='exit'){
                //closing the readline
                rl.close();
            }
            else{
                 //for pussing the data to person.hobbies
                 person.hobbies.push(hobbie.trim());
           
                rl.setPrompt(`what are the other hobbies of ${person.name} have ?if dine press exit`)
                rl.prompt();
            }
           
        });

});
//this listeners triggers when the close is called
rl.on('close',function(){
    console.log('%s hobbies are %j',person.name,person.hobbies);
});