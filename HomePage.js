/*$('img').attr('border','5px solid black');*/
let shopping=[];
shopping=['shoes','socks','phone', 'panties', 'boots', 'brazillian weave'];
console.log(shopping);
console.log(shopping[2]);
console.log(shopping.sort());
shopping.push('jacket');

let mix=[];
mix=['name',5,true];
console.log(mix);
typeof mix[2];

/*Object- is a standalone entity with properties and types*/
let pen={
	/*property:type*/type:'ballpoint',
	                 color:'blue',
					 cost:10
	
};
/*To display*/
console.log(pen.cost);
console.log(pen['cost']);

/*Functions- is a bloc organised, reusable code that is used to perform a single related action*/
function product(a,b)/*a & b are parameters*/{
	return a*b;
}
let prod=product(5,8);/*a & b are arguments*/
console.log(prod)

/*if-else Conditional Statements*/
let numb=[];
numb=[1,5,8,5,7,7,9,2,1]
if(numb[0]==numb[2])
{console.log("Yes");}
	else
		console.log("No, try again");
	
if(numb[0]==numb[2] || numb[0]==numb[8])
{console.log("Yes");}
		else
		console.log("No,try again");
			
/*Loops Conditional Statements-Repeat a specific block util some end condition is met*/

/*While Loop- while the condition is true, the code within the loop is executed*/

let p=0;
/*while(p<5){
  console.log("The number is "+p);
  p++;}*/
  
  do{
	  console.log("The number is "+p);
	  p++;
  }while(p>5);
  
  //For Loop repeatedly executes code while a given condition is true. 
  
 for(let x=0;x<10;x++){
	 console.log(x+"It is my bday--nobody-ish remembered :|");
 }
 
 //Switch Case- is used to perform diffrent actions based on different conditions
 let games='football';
 switch(games){
	 case "throwball":
	 console.log("Love it");
	 break;
	 case "baseball":
	 console.log("Never done it before");
	 break;
	 default:
	 console.log("I'm open to try other games");
	 break;
 }
 let design={
	 color:"blue",
	 background:"green",
	 border:"3px solid black"
 }