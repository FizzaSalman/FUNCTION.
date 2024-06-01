"use strict";
//************************FUNCTION *****************/
Object.defineProperty(exports, "__esModule", { value: true });
//mostly console use n hota return use hota hai use b easy arrow jab chota code likhna ho.
//simple function method is m return n horha means ye void function hai
//function myName(){
//  console.log("fizza")
//}
//myName()//yani console me jo fizza likha hai bar bar likhna n parega call kerna s ajyag
//myName()
//myName()
//myName()
//function with parameters isi tarha +,_,*,/ means sare arithmetic op use ho sakte hain
//function sum(physics:number,chemistry:number,biology:number){
//console.log(physics+chemistry+biology)
//}
//sum(70,80,50)
//jab hum chahte ho k function ko reuse karain r wo bar bar hame new value deliver kare
//tau hum function me likh lete hain
//function Bio(myName:string){
//  console.log(`My Name Is ${myName}}`)
//}
//console.log("fizza")
//console.log("salman")
//console.log("ahmed")
//some eg of function  call ker k bulana
//function Giaic(){
//console.log("Hello Currently i am exploring Typescript")
//}
//Giaic()//is giaic ko jitni bar likhnge ye bar bar chlega(function ko call kerna ya invoke krna)
//parameters n arguments
//function sum(parameters){
//}
//sum(argument)
//function bio(){
//console.log('I am Fizza Salman')
//}
//bio()
//bio()
//bio()
//function places(karachi:string,Islamabad:string){
//console.log(karachi,Islamabad)
//}
//places("Quaid Tomb","Monal restaurant")
//function student(myName:string,myField:string){
//console.log(`My Name is ${myName} and i m a teacher`)
//}
//student("fizza","teacher")
//student("salman","teacher")
//function bio(myName:string,myName2:string){
//console.log(myName,myName2)
//}
//bio("fizza","salman")
//function marks (Biology:number,chemistry:number){
//let totalMarks = Biology + chemistry
//console.log(totalMarks)
//}
//marks(70,80)
//RETURN FUNCTION  return keyword
//hame console kerne ki need nhi hiti just return k key word s hojyga
//function sum (physics:number, english:number){
// return physics+english
//}
//let res = sum(50,60)
//console.log(res)
//Function Return Type
//function sum (physics:number, english:number):number{
// return physics+english
//}
//let res = sum(50,60)
//console.log(res)
//function default parameter 
//function myName(student:string,lName:string = "Student Of GIAIC"){
//return student + lName
//}
//console.log(myName("fizza Salman "))
//console.log(myName('samiya Ayoub '))
//console.log(myName("Rabiya "))
//rest parameter
//jab hame malom na ho k hame kitne parameter banane hain ya kitni values ane wali hai wo rest para array k through banti hai ... k through else.g money Box,,eidi
function Box(name, ...eidi) {
    return name + eidi;
}
console.log(Box("fiza", 50, 60, 70, 80));
//ARROW FUNCTION
//boht easy n simple chota sa code likhne k liye use hoga
//return r is m differen ye hai k is me return use nhi hog
//na hi function ka key word use hoga let s start hoga
//arrow func 2015 me java n introduce kerwya tha
//ager humne curly lagayetau return ka  keyword use kerna parta h
let myJob = (teaching) => teaching;
console.log(myJob("i am a teacher"));
let myFunc = (myAge) => myAge;
console.log(myFunc(30));
//ANONYMOUS FUNCTION
let myfunction = function (x) {
    return x;
};
console.log(myfunction("i like desi food"));
