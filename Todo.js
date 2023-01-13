//                                                                                    npm input taking shortest and importing promptSync from common to ES to use it

import promptSync from 'prompt-sync'; // e6 version js
const prompt = promptSync({sigint: true}); 
import chalk from 'chalk'

//                                                                                         Making code clean

//                                                                                      const m = 'Enter To Do List Of The Day: ';
const mb = 'Enter ToDo Of The Day: ';
const a = 'You Have Pending ToDo Today!!, Complete It ASAP ' ;
const owo = 'Umm you sure u want to reach the end of the word? Ow<';
const OwO = '....'
const lord = 'Enter the keyword to access feature my liege: ';
const lorda = 'Enter the keyword to add task or tasks my liege: ';

//                                                                                                 Trying to make clean again 2
 
const lordt = 'Enter the time keyword my liege: ';
const lordDu = 'Enter the time from now you want to be reminded '; 
const inputA = 'Enter 1 to add muntiple tasks you want to do ';
const inputB = 'Enter 2 to add only one task of the day ';
const inputD = 'Enter 1 to remind you from now ' + '\n'+'Enter 2 to remind you from specific time from now ';
const inputTime = 'Now enter the time it will be your duration in which you want to be reminded ';
const cleaner = 'Do you want to clear the reminding feature? Enter Clean: ';


//                                                                                                             Clean 3
const K = 'Enter what you want to do: ';
const Kb = 'Enter more details about it or skip: ';
const Kc = 'Enter time when you want to do the task ';

//                                                                                                        Interface  

//                                                                                          Design of function inputting 

console.log(chalk.red(inputA) + '\n' + chalk.green(inputB));


let Controller = prompt(chalk.magenta(lorda))

//                                                                                      Design of time inputting
console.log(inputTime)

//                                                                                    Storing of time (FN = From Now)
let TimeDN = prompt(chalk.magenta(lordt))



//                                                                                   Empty array where 'task' will pe pushed

let Tasks = []
//                                                                 Object Class (used to make constructor and methods) to store detailed "Tasks"
class Task{

    constructor (todo, details, time){
    this.todo = todo;
    this.details = details;
    this.time = time;

}
//                                    methods
 todi() {
    return(`First Property: ${this.todo}\nSecond Property: ${this.details}\nThird Property: ${this.time}`) 
    
 }
 print(){
     console.log(`${this.todo}\n${this.details}\n${this.time}`)
 }
 }



 class SingleTask{
     constructor(tocomplete, info, clock){

        this.tocomplete = tocomplete;
        this.info = info;
        this.clock = clock;   

        }
    print(){
        console.log(`${this.tocomplete}\n${this.info}\n${this.clock}`)
    }
 }


if(Controller == 1){


for(let i = 0; i < 2; i++){

    const a = prompt(K);
    const b = prompt(Kb);
    const c = prompt(Kc);
    let inst = new Task(a, b, c) 

    Tasks.push(inst)
}
}

else if(Controller == 2){
    //console.log('it works')

    const j = prompt(K);
    const i = prompt(Kb);
    const l = prompt(Kc);
    let instav = new SingleTask(j, i, l)

    Tasks.push(instav)
  
}

else
{
    console.log(owo)
}
//                                                                                             Making Alert Function

let Alert = () => {

//      console.log(Task)
    Tasks.forEach(task => task.print())
}

//                                                                                                          Storing Function execution

let ExecuteController = prompt(inputD);

if(ExecuteController == 1) {
const id = setInterval(() => {
    Alert()
                // console.log(global.inst.todo())
  
}, TimeDN) 
}

else if(ExecuteController == 2){
    //when to excute start and decide after that

const TimingAlert = () => {
  
    Alert()
    //console.log(inst.todo()) 
    
    setTimeout(TimingAlert, TimeDN)//after start it will keep on excuting
  }


  //                   Storing time from now


  const DurationT = prompt(chalk.magenta(lordDu))
  
  setTimeout(TimingAlert, DurationT)// time take to excute at start
}

else{
    console.log(chalk.magentaBright(OwO))
}
