// var nafizScore=85;
// var tomScore=66;
// var janeScore=95;
// var petarScore=56;
// var jhonScore=40;

// if (nafizScore>=80) {
//     console.log("Nafiz got A+");
// }else if(nafizScore>=60){
//     console.log("Nafiz got B+");
// }else if(nafizScore>=50){
//     console.log("Nafiz got C+");
// }else if(nafizScore>=40){
//     console.log("Nafiz got D+");
// }else if(nafizScore<=39){
//     console.log("Nafiz got F");
// }





// if (tomScore>=80) {
//     console.log("Tom got A+");
// }else if(tomScore>=60){
//     console.log("Tom got B+");
// }
// else if(tomScore>=50){
//     console.log("Tom got C+");
// }
// else if(tomScore>=40){
//     console.log("tom got D+");
// }
// else if(tomScore<=39){
//     console.log("tom got F");
// }




// if (janeScore>=80) {
//     console.log("Jane got A+");
// }else if(janeScore>=60){
//     console.log("Jane got B+");
// }
// else if(janeScore>=50){
//     console.log("Jane got C+");
// }
// else if(janeScore>=40){
//     console.log("Jane got D+");
// }
// else if(janeScore<=39){
//     console.log("Jane got F");
// }



// if (petarScore>=80) {
//     console.log("Petar got A+");
// }else if(petarScore>=60){
//     console.log("Petar got B+");
// }
// else if(petarScore>=50){
//     console.log("Petar got C+");
// }
// else if(petarScore>=40){
//     console.log("Petar got D+");
// }
// else if(petarScore<=39){
//     console.log("Petar got F");
// }




// if (jhonScore>=80) {
//     console.log("Jhon got A+");
// }else if(jhonScore>=60){
//     console.log("Jhon got B+");
// }
// else if(jhonScore>=50){
//     console.log("Jhon got C+");
// }
// else if(jhonScore>=40){
//     console.log("Jhon got D+");
// }
// else if(jhonScore<=39){
//     console.log("Jhon got F");
// }

// var a=13;
// var b=79;
// var c=45;
// if (a>b && a>c) {
//     console.log("A is the bigger number")
// }else if (b>a && b>c) {
//     console.log("B is the bigger number")
// }else if (c>a && c>b) {
//     console.log("B is the bigger number")
// }

// var a=9;
// var b=8;
// var c=9;

// if (a==b || b==c || c==a) {
//     console.log("the Triangle is Isoscales")
// }else{
//     console.log("the Triangle is not Isoscales")
// }

// var isIsoscales = a==b || b==c || c==a ? "the Triangle is Isoscales" : "the Triangle is not Isoscales" ;
// console.log(isIsoscales);

// var ammount = 100000;
// if(ammount > 80000){
//     console.log("I will bye Mac");
// }else if(ammount>60000){
//     console.log("i will bye a gaming pc");
// }else if(ammount>40000){
//     console.log("i will bye a lenevo yogo");
// }else if(ammount<20000){
//     console.log("i will work with mobile");
// }

// for (let i = 1; i <=400; i++) {
//     if (i==1) {
//         console.log('1 is not even and odd')
//     }else if(i%2==0){
//         console.log(i+"is even number");
//     }else{
//         console.log(i+"is odd number");
//     }
    
// }
// var myFriends =["sakib","nadim","alvi","x","y","z"];
// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i])
    
// }
// var i=0;
// while (i<myFriends.length) {
//     console.log(myFriends[i]);
//     i++;
// }
// for (let index = 0; index < 40; index++) {
//     console.log(index)
//     if (index==33) {
//         break;
//     }
    
// }
// function inchToFt(inch) {
//     let ft= inch*0.0833333;
//     return ft;
// }
// function milestokm(miles) {
//     let km=miles*1.60934;
//     return km;
// }

// console.log(inchToFt(2));
// console.log(milestokm(2));
// function evenOdd(num){
//     if (num%2==0) {
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(evenOdd(3))

// function leapyear(year) {
//     if (year%4==0) {
//         if (year%100==0) {
//             if (year%400==0) {
//                 console.log("year is leap year");
//             } else {
//                 console.log("not lear year");
//             }
//         } else {
//             console.log("the year is leap year");
//         }
//     } else {
//         console.log("not a leap year");
//     }
// }
// function simp(year) {
//     if (year%4==0 && year%100==0 && year%400==0) {
//         console.log("is leap year")
//     }else if(year%100!=0){
//         console.log("not a leap year");
//     }else {
//         console.log("not a leap year");
//     }
// }
// leapyear(2016);
// leapyear(2000);
// leapyear(1700);
// leapyear(1800);
// leapyear(1600);
// simp(2016);
// simp(2000);
// simp(1700);
// simp(1800);
// simp(1600);

// let arr = [3,4,5,0,6,6,7,7,8,8,8,1,7,7];
// let sum=0;
// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i];
    
// }
// console.log(sum);
// function oddFun(array) {
    

//     for (let i = 0; i < array.length; i++) {
//         let oddarray=array[i]%2!=0?oddarray.push(array[i]):0;
        
//     }
// }
// for (let i = 0; i < arr.length; i++) {
//     let oddarray = arr[i]%2!=0 ? arr[i] : 0 ;
//     console.log(oddarray);
// }
// var fun = function name(params) {
//     console.log(params)
    
// }
// fun("he")
// var sum =fun;
// sum('he')
// var obj = {
//     sum:fun
// }
// console.log(obj)
// console.log(obj.sum)
// console.log(obj.sum('her'))
// var cal=function(a,b,call) {
//     c=a+b;
//     d=a+a;
//     e=b+b;
//     return call(c,d,e);
// }
// cal(5,3,function(){
//     console.log(c*d*e)
// })
// const num = -78;
// const a= Math.abs(num);
// console.log(a)
// let arrr=[19,2,55,222,5424524,213123,31231];
// let x =arrr.findIndex(function (value) {
//     return value==19
// });
// console.log(x)
// let namee = ['nafiz','jalal','ahmed','nafu','nafiz','ahmed','naf','jan','jan','fiz','fiz'];
// function rn(names){
//     let newname =[];
//     for (let i = 0; i <= names.length; i++) {
//         if (!newname.includes(names[i])) {
//             newname.push(names[i]);
//         }
        
//     }
//     return newname;
// }
// let x=rn(namee);
// console.log(x)

// var mobiles=[
//     {
//         brand:"sumsang",
//         price:78000
//     },
//     {
//         brand:"iphone",
//         price:198000
//     },
//     {
//         brand:"Mi",
//         price:44000
//     },
//     {
//         brand:"vivo",
//         price:30000
//     },
//     {
//         brand:"techno",
//         price:18000
//     },
//     {
//         brand:"htc",
//         price:180000
//     }
// ]
// function pickMobile(mobile) {
//     let cheapPrice= [mobile[0]];
//     for(let i=0;i<=mobile.length-1;i++){
//         if(mobile[i].price<cheapPrice[0].price){
            
//             cheapPrice.unshift(mobile[i])
//         }else if(mobile[i].price>cheapPrice[0].price){
//             cheapPrice.push(mobile[i])
//         }
//     }
//     console.log(cheapPrice)
// }

// pickMobile(mobiles);
// let sortMobile=Array.from(mobiles)
// sortMobile.sort(function(a,b){
//     if (a.price<b.price) {
//         return -1
//     } 
//     if (a.price>b.price){
//         return 1;
//     }
//     return 0;
// })
// console.log(sortMobile);
// console.log(mobiles);
// let friends=['asif','jaber','fuad','arshad',"shafin",'imran'];
// function bestFriend(friend) {
//     let bestFriend=friend[0];
//     friend.forEach(names => {
//         if (names.length>bestFriend.length) {
//             bestFriend=names;
//         }
//     });
//     return bestFriend;
// }
// console.log(bestFriend(friends))
// let nums=[1,2,4,-2,12,33];
// function positivis(arr) {
//     let positivArr=[]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<0) {
//         break;
//     }else{
//         positivArr.push(arr[i]);
//     }
    
// }
//     console.log(positivArr)
// }
// console.log(positivis(nums))

//................................problems.....................................

//1.

// function helpHarry(givingMoney,totalCost) {
//     return 'the shokepper will give him '+(givingMoney-totalCost) + ' taka';
// }
// console.log(helpHarry(10002,700));

//2.

// let marks=[60,33,70,100,99];
// function avgMarks(marks) {
//     let sum=0;
//     marks.forEach(mark => {
//         sum+=mark;
//     });
//     return sum/marks.length;
// }
// console.log(avgMarks(marks))

//3.

// function concatingString(firstString,secString) {
//     return firstString.concat(" ",secString);
// }
// console.log(concatingString("i gona be","a joss web developer"))

//4

// function reminder(devidend,divisor) {
//     return devidend%divisor;
// }
// console.log(reminder(377,3))

//5

// let fruits = ['Apple', 'Banana', 'Orange'];
// function find_index(arr,element) {
//     let index;
//     arr.forEach(function(value,i){
        
//         if(value==element){
//             index=i;
            
//         }
        
//     })
//     return "the index of "+ element +" is "+ index;
// }
// console.log(find_index(fruits,'Apple'))
// function indexofAndreplace(arr,removingElement,addingElement) {
//     let index=arr.indexOf(removingElement);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==removingElement) {
//             arr[i]=addingElement;
//         }
        
//     }
//     return "The index of "+ removingElement + " is " + index + " and the edited array is " + arr;
// }
// console.log(indexofAndreplace(fruits,"Banana","Mango"))
// function indexofAndreplace2(arr,removingElement,addingElement) {
//     let index=arr.indexOf(removingElement);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==removingElement) {
//             arr.splice(i,1,addingElement)
//         }
        
//     }
//     return "The index of "+ removingElement + " is " + index + " and the edited array is " + arr;
// }
// console.log(indexofAndreplace2(fruits,"Banana","Mango"))
// console.log(indexofAndreplace2(fruits,"Orange","Watermalen"))

//6

// function getGrade(names,num) {
//     if(num>80){
//         return names + " got A+";
//     }else if(num>=60){
//         return names + " got B";
//     }else if(num>=50){
//         return names + " got C";
//     }else if(num>=40){
//         return names + " got D";
//     }else if(num<39){
//         return names + " has Failed";
//     }
// }
// console.log(getGrade("Nafiz",35))

//8

// function largestNum(num1,num2,num3) {
//     if (num1>num2 && num1>num3) {
//         return num1 +" is the largest";
//     }else if(num2>num3 && num2>num1){
//         return num2 +" is the largest";
//     }else if(num3>num1 && num3>num2){
//         return num3 +" is the largest";
//     }
// }
// console.log(largestNum(13,79,45))

//9

// function isIsoscale(l1,l2,l3) {
//     if (l1==l2 || l2==l3 || l3==l1) {
//         return "the triangle is isoscale";
//     }else{
//         return "the triangle is not isoscale";
//     }
// }
// console.log(isIsoscale(4,8,9))

//10


//11

// function whatToDo(signal) {
//     if (signal=="Green") {
//         return "you can cross the road ";
//     }else if(signal=="yeallow"){
//         return "you should stop for crossing the road ";
//     }else if(signal=="red"){
//         return "Stop! dont cross the road ";
//     }
// }
// console.log(whatToDo("red"))

//12
//13
//14
//15
//16
//17
//18
//19
//20
//21
//22
//23
//24
//25
//26

//27

// function make_avg(n1,n2,n3) {
//     return (n1+n2+n3)/3;
// }
// console.log(make_avg(2,5,7))

//28

// function avg(arr) {
//     let sum=0;
//     arr.forEach(function(num){
//         sum+=num;
//     })
//     return sum/arr.length;
// }
// console.log(avg([2,3,4,5]))

//29
//30

//31

// function multi(num) {
//     for (let i =1 ; i <= 10; i++){
//         console.log("num * " + i + " = "+ num * i);
       
//     }
// }
// multi(13)


//32
//33
//34

//35

// function hourToMin(hour){
//     return hour*60+"min"
// }
// console.log(hourToMin(2))

//36

// function leapyearArray(arr) {
//     let leapyear=[];
//     arr.forEach(function(year) {
//         if (year % 400 == 0) {
//             leapyear.push(year)
//          }
//          else if (year % 100 == 0) {
            
//          }
//          else if (year % 4 == 0) {
//             leapyear.push(year)
//          }
//          else {
            
//          }
//     })
//     return leapyear;
// }
// console.log(leapyearArray([2023,2024,2025,2028,2030]))

//37
//38
//39
//40
//41
//42
//43
//44
//45
//46
//47

//48

// function smallElement(arr){
//     arr.sort(function(a,b){
//         if (a<b) {
//             return -1;
//         }else if (a>b){
//             return 1;
//         }else{
//             return 0;
//         }
//     })
//     return "the smalest value is " + arr[0] + ' the sec largtest value is ' + arr[arr.length-2]
// }
// console.log(smallElement([3,1,7,3,5]))
// let firstElement= document.getElementById('two');
// console.log(firstElement);
// let products=[
//     {Brand:'iphone',type:'mobile',price:'110000'},
//     {Brand:'ipad',type:'tab',price:'70000'},
//     {Brand:'iwatch',type:'smart watch',price:'50000'},
//     {Brand:'Macbook',type:'laptop',price:'210000'},
//     {Brand:'itv',type:'smart tv',price:'310000'},
//     {Brand:'hicence',type:'normal tv',price:'100000'},
//     {Brand:'vivo',type:'mobile',price:'20000'}
// ]
// let result=function (list,search) {
//     let filterd=[];
//     for (const item of list) {
//         if (item.type.toLowerCase().includes(search.toLowerCase())) {
//             filterd.push(item);
//         }
//     }
//     return filterd;
// }
// console.log(result(products,'smart'))
// console.log(document)
// let withGet=document.getElementsByClassName('.h');
// let withNode=document.querySelector('.h');
// let parent = withGet.parentElement;
// // console.log(withGet)
// // console.log(withNode)
// console.log(parent)
// preventDefault();
// let list=document.getElementById('x')
// console.log(list.children)
// let listItem=document.getElementById('y')
// console.log(listItem.parentElement)
// console.log(listItem)
// console.log(listItem.previousElementSibling)
// let list=document.getElementById('x');
// setTimeout(function () {
//     list.lastElementChild.innerHTML='nAFIZ'
//     setTimeout(function() {
//         list.firstElementChild.innerHTML='nAFIZ'
//     },3000)
// },5000)
// console.log(list.firstChild)
// let li=list.children;
// console.log(li)
// Array.from(li).forEach(element => {
//     console.log(element.innerHTML)
// });
// let newElement=document.createElement('li');
// newElement.setAttribute('class','hlw')
// newElement.innerText='Jalal Ahmed';
// Array.from(li).forEach(function(elm,i){
//     if(i==2){
//         elm.insertAdjacentElement('afterend','newElement')
//     }
// })
// // console.log(newElement.className)
// list.appendChild(newElement)
// setTimeout(function(){
//     list.lastElementChild.remove();
// },5000)
// console.log(list.getAttribute('id'));
