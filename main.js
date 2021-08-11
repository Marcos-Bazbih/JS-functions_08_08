// ******************_1_********************
// function myName(){
//     var name = "marcos";
//     for(var i=0; i<5;i++){
//         console.log(name);
//     }
// }
// myName();
// ******************_1_********************



// ******************_2_********************
// var firstName = "marcos";
// function argumentName(myName){
//     for(var i=0; i<5;i++){
//         console.log(myName);
//     }
// }
// argumentName(firstName);
// ******************_2_********************



// ******************_3_********************
// function sumArgument(){
//     var num1 = 5;
//     var num2 = 8;
//     var sum = num1 + num2;
//     console.log(sum);
// }
// sumArgument();
// ******************_3_********************



// ******************_4_********************
// function total(num1, num2){
//     var sum = num1 + num2;
//     console.log(sum);
// }
// total(7,9);
// ******************_4_********************



// ******************_5_********************
// function minimum(num1, num2){
//     if(num1<num2){
//         return num1;
//     }
//     else if(num2<num1){
//         return num2;
//     }
//     else{
//         return "none";
//     }
// }
// var result = minimum(6,4);
// console.log(result);
// ******************_5_********************



// ******************_6_********************
// function module(bigNumber){
//     var sum=0;
//     while(bigNumber>0){
//         var mod = bigNumber%10;
//         sum += mod;
//         bigNumber = (bigNumber/10) - (mod/10);
//     }
//     return sum;
// }
// var result = module(525384);
// console.log(result);
// ******************_6_********************




// ******************_7_********************
// var numArray = [115,17,116,33,22,115];
// function mission1(array){
//     var sum= 1;
//     for(var i=0; i<array.length;i++){
//         sum*=array[i];
//     }
//     return sum;
// }
// var result=mission1(numArray);
// console.log(result);


// function mission3(array){
//     var min=array[0];
//     for(var i=0;i<array.length;i++)  {
//         if(array[i]>min){
//             min = array[i];
//         }     
//     }
//     return min;
// }
// var result = mission3(numArray);
// console.log(result);


// function mission5(array){
//     array.pop();
//     array.pop();
//     return array;
// }
// var result = mission5(numArray);
// console.log(result);
// ******************_7_********************



// ******************_8_********************
// function mission8(text){
//     var long = text.length;
//     return long;
// }
// var result = mission8("");
// console.log(result);
// ******************_8_********************



// ******************_9_********************
// var userInput = prompt("enter something");
// function mission9(array){
//     for(var i=0;i<array.length;i++){
//         if(array[i]==userInput){
//             array.splice(i,1);
//             return i;
//         }
//     }
//     return "not here";    
// }
// var numArray = [115,17,116,33,22,118];
// var result=mission9(numArray);
// console.log(result);
// ******************_9_********************




// ******************_10_********************
// function mission10(array){
//     for(var i=0; i<array.length;i++){
//         array[i] *= 3;
//     }
//     return array;
// }
// var numArray = [2,2,2,2,2,2];
// var result = mission10(numArray);
// console.log(result);
// ******************_10_********************




// ******************_11_********************
// function mission11(array){
//     for(var i=0;i<array.length;i++){
//         for(var j=i+1;j<array.length;j++){
//             if(array[i]==array[j]){
//                 array.splice(i,1);
//             }
//         }
//     }
//     return array;
// }
// var numArray = [15,17,116,15,17,33,22,17,40];
// var result = mission11(numArray);
// console.log(result);
// ******************_11_********************