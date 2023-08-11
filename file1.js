// let str="zebraz";
// let count=0;
// for(let i=0;i<str.length;i++){
//    if(str[i]=='z'){
//       count++;
//    }
// }
// console.log(count);


// let str="XYZ";
// let newstr="";
// for(let i=0;i<str.length;i++){
//    newstr+=str[i]+str[i];
// }
// console.log(newstr);

// let str='3f=u5+2*F2*';
// let alpha='';
// let num='';
// let sym='';
// for(i=0;i<str.length;i++){
//    if(str[i]>='a'&&str[i]<='z'){
//       alpha+=str[i];
//    }
//    else if(str[i]>='A'&&str[i]<='Z'){
//       alpha+=str[i];
//    }
//    else if(str[i]>='0'&&str[i]<='9'){
//       num+=str[i];
//    }
//    else{
//       sym+=str[i];
//    }
// }
// console.log(alpha,num,sym);

// let str='Hello';
// let out='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    let prevch=str[i-1];
//    if(ch=='#'){
//       if(prevch=='#'){

//       }
//       else{
//       out+=ch;
//    }
//    }
//     else{
//       out+=ch;
//     }
//    }
// console.log(out);

// let str="my name is XYZ";
// let sep=" ";
// let startpos=0;
// for(;;){
//    let index=str.indexOf(sep,startpos);
//    if(index>=0){
//       let word = str.substring(startpos,index);
//       console.log(word);
//       startpos=index+1;
//    }
//    else{
//       let word=str.substring(startpos);
//       console.log(word);
//       break;
//    }
// }

// let str="Edufect";
// for(i=0;i<str.length;i++){
//    if(str.length>5){
//       console.log("Long");
//    }
//    else{
//       console.log("Short");
//    }
// }

// str="Java";
// for(i=0;i<str.length;i++){
//    if(str.length>5){
//       console.log("Long");
//    }
//    else{
//       console.log("Short");
//    }
// }

// str="123456789";
// for(i=0;i<str.length;i++){
//    if(str.length>5){
//       console.log("Long");
//    }
//    else{
//       console.log("Short");
//    }
// }

// let str="x+y+xy+4x=7";
// let x=0;
// let y=0;
// let index="";
// for(let i=0;i<str.length;i++){
//    if(str.charAt(i)=='x'){
//       x++;
//    }
//    else if(str.charAt(i)=='y'){
//       y++;
//    }
// }
// console.log("x= "+x);
// console.log("y= "+y);

// str="ax+cz+dx=0";
// x=0;
// y=0;
// index="";
// for(let i=0;i<str.length;i++){
//    if(str.charAt(i)=='x'){
//       x++;
//    }
//    else if(str.charAt(i)=='y'){
//       y++;
//    }
// }
// console.log("x= "+x);
// console.log("y= "+y);

// str="12789";
// x=0;
// y=0;
// index="";
// for(let i=0;i<str.length;i++){
//    if(str.charAt(i)=='x'){
//       x++;
//    }
//    else if(str.charAt(i)=='y'){
//       y++;
//    }
// }
// console.log("x= "+x);
// console.log("y= "+y);

// let str="abca";                         //Task 5
// let count=0;
// let startpos=0;
// let index='';
// let index1='';
// for(let i=0;i<str.length;i++){
//    index=str.indexOf('a',startpos);
//    index1=str.indexOf('b',startpos);
//    if(index>=0){
//       count++;
//       startpos=index+1;
//    }
//    else{
//       break;
//    }
//    console.log("a at Index: "+index);
//    console.log("b at Index: "+index1);
// }

// str="123";                         //Task 5
// count=0;
// startpos=0;
// index='';
// index1='';
// for(let i=0;i<str.length;i++){
//    index=str.indexOf('a',startpos);
//    index1=str.indexOf('b',startpos);
//    if(index>=0){
//       count++;
//       startpos=index+1;
//    }
//    else{
//       break;
//    }
//    console.log("a at Index: "+index);
//    console.log("b at Index: "+index1);
// }

// str="cdeghBannb";                         //Task 5
// count=0;
// startpos=0;
// index='';
// index1='';
// for(let i=0;i<str.length;i++){
//    index=str.indexOf('a',startpos);
//    index1=str.indexOf('b',startpos);
//    if(index>=0){
//       count++;
//       startpos=index+1;
//    }
//    else{
//       break;
//    }
//    console.log("a at Index: "+index);
//    console.log("b at Index: "+index1);
// }


// let str="Perfect";          //Task6
// let a=str.substring(1);
// console.log(a);

// str="Java";
// a=str.substring(1);
// console.log(a);

// str="123456789";
// a=str.substring(1);
// console.log(a);

// let str="zoom";
// let a='';
// for(let i=0;i<str.length;i++){
//    if(str[i]=='z'){
//       a+="x";
// }
// else{
//    a+=str[i];
// }
// }
// console.log(a);

// str="sleep=zzz";
// a='';
// for(let i=0;i<str.length;i++){
//    if(str[i]=='z'){
//       a+="x";
// }
// else{
//    a+=str[i];
// }
// }
// console.log(a);

// str="az+bz=4";
// a='';
// for(let i=0;i<str.length;i++){
//    if(str[i]=='z'){
//       a+="x";
// }
// else{
//    a+=str[i];
// }
// }
// console.log(a);

// let str="my#mother";
// let a='';
// for(i=0;i<str.length;i++)
// {
//    if(str[i]=="m"){    
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// str="am:pm:my:time";
// a='';
// for(i=0;i<str.length;i++)
// {
//    if(str[i]=="m"){      
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// str="Hello123";
// a='';
// for(i=0;i<str.length;i++)
// {
//    if(str[i]=="m"){    
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// let str="01234";    //Task9
// let a='';
// for(let i=0;i<str.length;i++){
//    if(i%2==0){
//       a+=str[i];
//    }
// }
// console.log(a);

// str="JavaMasters";
// a='';
// for(let i=0;i<str.length;i++){
//    if(i%2==0){
//       a+=str[i];
//    }
// }
// console.log(a);

// str="x";
// a='';
// for(let i=0;i<str.length;i++){
//    if(i%2==0){
//       a+=str[i];
//    }
// }
// console.log(a);

// let str="qw23BN**45g";    Task10
// let a='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    if(ch>='0'&&ch<='9'){
//       a+=ch;
//    }
// }
// console.log("Digits= "+a);

// str="9810098100";
// a='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    if(ch>='0'&&ch<='9'){
//       a+=ch;
//    }
// }
// console.log("Digits= "+a);

// let str="qw2B**5g";
// let a='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    if(ch>='0'&&ch<='9'){
//       a+=ch+ch+ch;
//    }
//    else if(ch>='a'&&ch<='z'){
//       a+=ch+ch;
//    }
//    else if(ch>='A'&&ch<='Z'){
//       a+=ch+ch;
//    }
//    else{
//    }
// }
// console.log(a);

// str="9#a$M%2eP";
// a='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    if(ch>='0'&&ch<='9'){
//       a+=ch+ch+ch;
//    }
//    else if(ch>='a'&&ch<='z'){
//       a+=ch+ch;
//    }
//    else if(ch>='A'&&ch<='Z'){
//       a+=ch+ch;
//    }
//    else{
//    }
// }
// console.log(a);

// str="qwNN*%bT";
// a='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    if(ch>='0'&&ch<='9'){
//       a+=ch+ch+ch;
//    }
//    else if(ch>='a'&&ch<='z'){
//       a+=ch+ch;
//    }
//    else if(ch>='A'&&ch<='Z'){
//       a+=ch+ch;
//    }
//    else{
//    }
// }
// console.log(a);


// let str="q#w2@B**5g";      task 14
// let a='';
// for(let i=0;i<str.length;i++){
//    if(str[i]>='a'&&str[i]<='z'){
//    }
//    else if(str[i]>='0'&&str[i]<='9'){
//    }
//    else if(str[i]>='A'&&str[i]<='Z'){
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a)

// str="9#a$M%2eP&$";
// a='';
// for(let i=0;i<str.length;i++){
//    if(str[i]>='a'&&str[i]<='z'){
//    }
//    else if(str[i]>='0'&&str[i]<='9'){
//    }
//    else if(str[i]>='A'&&str[i]<='Z'){
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a)

// str="qwNN*%bT";
// a='';
// for(let i=0;i<str.length;i++){
//    if(str[i]>='a'&&str[i]<='z'){
//    }
//    else if(str[i]>='0'&&str[i]<='9'){
//    }
//    else if(str[i]>='A'&&str[i]<='Z'){
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// let str="JAVA";         Task17
// let a="";
// let c='';
// let d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }  
// }
// console.log(a+d+b);

// str="EDUFECT";
// a="";
// c='';
// d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }
   
// }
// console.log(a+d+b);

// str="123456";
// a="";
// c='';
// d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }
   
// }
// console.log(a+d+b);

// str="HELLO";
// a="";
// c='';
// d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }
   
// }
// console.log(a+d+b);

// str="A";
// a="";
// c='';
// d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }
   
// }
// console.log(a+d+b);

// let str="java";       Task18
// let a='';
// for(i=0;i<str.length;i++){
//    a=str.substring(str.length/2);
//    b=str.substring(0,str.length/2);
// }
//    if(a==b){
//       console.log("Yes")
//    }
//    else{
//       console.log("No");
//    }

// str="dada";
// a='';
// for(i=0;i<str.length;i++){
//    a=str.substring(str.length/2);
//    b=str.substring(0,str.length/2);
// }
//    if(a==b){
//       console.log("Yes")
//    }
//    else{
//       console.log("No");
//    }


// str="ABCABD";
// a='';
// for(i=0;i<str.length;i++){
//    a=str.substring(str.length/2);
//    b=str.substring(0,str.length/2);
// }
//    if(a==b){
//       console.log("Yes")
//    }
//    else{
//       console.log("No");
//    }

// str="123123";
// a='';
// for(i=0;i<str.length;i++){
//    a=str.substring(str.length/2);
//    b=str.substring(0,str.length/2);
// }
//    if(a==b){
//       console.log("Yes")
//    }
//    else{
//       console.log("No");
//    }

// str="ABCDEABCDF";
// a='';
// for(i=0;i<str.length;i++){
//    a=str.substring(str.length/2);
//    b=str.substring(0,str.length/2);
// }
//    if(a==b){
//       console.log("Yes")
//    }
//    else{
//       console.log("No");
//    }

// str="ABCDE";           TAsk 19
// a="";
// c='';
// d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }
   
// }
// console.log("Middle Char = "+d);
// console.log("Index = "+str.indexOf(d));

// str="Abc";
// a="";
// c='';
// d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }
   
// }
// console.log("Middle Char = "+d);
// console.log("Index = "+str.indexOf(d));

// str="1";
// a="";
// c='';
// d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }
   
// }
// console.log("Middle Char = "+d);
// console.log("Index = "+str.indexOf(d));

// str="123456789";
// a="";
// c='';
// d='';
// for(i=0;i<str.length/2;i++){
//    if(str.length%2==1){
//       c=(str.length+1)/2
//       d=str.substring(c-1,c)
//       a=str.substring(c)
//       b=str.substring(0,c-1)
//    }
//    else{
//       a=str.substring(str.length/2);
//       b=str.substring(0,str.length/2);
//    }
   
// }
// console.log("Middle Char = "+d);
// console.log("Index = "+str.indexOf(d));

// let str1="James";         Task 20
// let str2="jaMES";
// let a=str1.toLowerCase();
// let b=str2.toLowerCase();
// if(a==b){
//    console.log("Same");
// }
// else{
//    console.log("Different");
// }

// str1="James";
// str2="Jack";
// a=str1.toLowerCase();
// b=str2.toLowerCase();
// if(a==b){
//    console.log("Same");
// }
// else{
//    console.log("Different");
// }

// str1="james";
// str2="JAMES";
// a=str1.toLowerCase();
// b=str2.toLowerCase();
// if(a==b){
//    console.log("Same");
// }
// else{
//    console.log("Different");
// }

// str1="James";
// str2="James Bond";
// a=str1.toLowerCase();
// b=str2.toLowerCase();
// if(a==b){
//    console.log("Same");
// }
// else{
//    console.log("Different");
// }

// let str="A1B2C3";          Task21
// let a='';
// let b='';
// for(i=0;i<str.length;i++){
//    if(i%2==1){
//       a+=str[i];
//    }
//    else{
//       b+=str[i];
//    }
// }
// console.log("Odd:"+a);
// console.log("Even:"+b);

// str="AbCdEf";
// a='';
// b='';
// for(i=0;i<str.length;i++){
//    if(i%2==1){
//       a+=str[i];
//    }
//    else{
//       b+=str[i];
//    }
// }
// console.log("Odd:"+a);
// console.log("Even:"+b);

// str="A1B2C3D4E";
// a='';
// b='';
// for(i=0;i<str.length;i++){
//    if(i%2==1){
//       a+=str[i];
//    }
//    else{
//       b+=str[i];
//    }
// }
// console.log("Odd:"+a);
// console.log("Even:"+b);

// str="Q";
// a='';
// b='';
// for(i=0;i<str.length;i++){
//    if(i%2==1){
//       a+=str[i];
//    }
//    else{
//       b+=str[i];
//    }
// }
// console.log("Odd:"+a);
// console.log("Even:"+b);

// let str="12ab1128d";    task 22
// let a='';
// for(i=0;i<str.length;i++){
//    if(str[i]=='1'){
//       a+='@';
//    }
//    else if(str[i]=='2'){
//       a+='#';
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// str="ab11cd22ef";
// a='';
// for(i=0;i<str.length;i++){
//    if(str[i]=='1'){
//       a+='@';
//    }
//    else if(str[i]=='2'){
//       a+='#';
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// str="abcd";
// a='';
// for(i=0;i<str.length;i++){
//    if(str[i]=='1'){
//       a+='@';
//    }
//    else if(str[i]=='2'){
//       a+='#';
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// str="111";
// a='';
// for(i=0;i<str.length;i++){
//    if(str[i]=='1'){
//       a+='@';
//    }
//    else if(str[i]=='2'){
//       a+='#';
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// str="Hello";     TASK23
// a='';
// for(i=0;i<str.length;i++){
//    if(str[i]=='1'){
//       a+='@';
//    }
//    else if(str[i]=='2'){
//       a+='#';
//    }
//    else if(str[i]=='3'){
//       a+='&';
//    }
//    else if(str[i]>=4&&str[i]<=9){
//       a+='$';
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);


// let str="ABCDEF";     TASK 24
// let a='';
// for(i=0;i<str.length;i++){
//    if(str[i]=='A'){
//       a+='X';
//    }
//    else if(str[i]=='B'){
//       a+='Y';
//    }
//    else if(str[i]=='C'||str[i]=='D'){
//       a+='';
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// str="BAD CAR";
// a='';
// for(i=0;i<str.length;i++){
//    if(str[i]=='A'){
//       a+='X';
//    }
//    else if(str[i]=='B'){
//       a+='Y';
//    }
//    else if(str[i]=='C'||str[i]=='D'){
//       a+='';
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// str="I GOT A BIRTHDAY CARD";
// a='';
// for(i=0;i<str.length;i++){
//    if(str[i]=='A'){
//       a+='X';
//    }
//    else if(str[i]=='B'){
//       a+='Y';
//    }
//    else if(str[i]=='C'||str[i]=='D'){
//       a+='';
//    }
//    else{
//       a+=str[i];
//    }
// }
// console.log(a);

// let str="AAXXXBBYYYCXXDYY";      task26
// let out='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    let prevch=str[i-1];
//    if(ch=="X"){
//       if(prevch=="X"){
//          //do nothing
//       }
//       else{
//          out+=ch;
//       }
//    }
//    else if(ch=="Y"){
//       if(prevch=="Y"){
//          //do nothing
//       }
//       else{
//          out+=ch;
//       }
//    }
//    else{
//       out+=ch;
//    }
// }
// console.log(out);

// str="AXBYCXDY";
// out='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    let prevch=str[i-1];
//    if(ch=="X"){
//       if(prevch=="X"){
//          //do nothing
//       }
//       else{
//          out+=ch;
//       }
//    }
//    else if(ch=="Y"){
//       if(prevch=="Y"){
//          //do nothing
//       }
//       else{
//          out+=ch;
//       }
//    }
//    else{
//       out+=ch;
//    }
// }
// console.log(out);

//  str="XXXXYYYYYABXXYY";
//  out='';
//  for(i=0;i<str.length;i++){
//    let ch=str[i];
//    let prevch=str[i-1];
//    if(ch=="X"){
//       if(prevch=="X"){
//          //do nothing
//       }
//       else{
//          out+=ch;
//       }
//    }
//    else if(ch=="Y"){
//       if(prevch=="Y"){
//          //do nothing
//       }
//       else{
//          out+=ch;
//       }
//    }
//    else{
//       out+=ch;
//    }
// }
// console.log(out);
   

// str="XYXYXYXY";
// out='';
// for(i=0;i<str.length;i++){
//    let ch=str[i];
//    let prevch=str[i-1];
//    if(ch=="X"){
//       if(prevch=="X"){
//          //do nothing
//       }
//       else{
//          out+=ch;
//       }
//    }
//    else if(ch=="Y"){
//       if(prevch=="Y"){
//          //do nothing
//       }
//       else{
//          out+=ch;
//       }
//    }
//    else{
//       out+=ch;
//    }
// }
// console.log(out);

// let myString = "AB CD Java";   
// let searchStr = "ABCD";
// let match = false;
// let count=0;
// for (let i = 0; i < myString.length; i++) {
//   if (myString.indexOf(searchStr) !== -1) {
//     match = true;
//     count++;
//     break;
//   }
// }

// if (match) {
//   console.log("Count of ABCD = "+count);
// }
// else{
//    match=false;
// }
//  else {
//   console.log("Does not start");
// }

// myString = "AB CD Java";
// searchStr = "ABCD";
// match = false;

// for (let i = 0; i < myString.length; i++) {
//   if (myString.indexOf(searchStr) !== -1) {
//     match = true;
//     break;
//   }
// }

// if (match) {
//   console.log("Start with ABCD");
// } else {
//   console.log("Does not start");
// }

// myString = "ABCD";
// searchStr = "ABCD";
// match = false;

// for (let i = 0; i < myString.length; i++) {
//   if (myString.indexOf(searchStr) !== -1) {
//     match = true;
//     break;
//   }
// }

// if (match) {
//   console.log("Start with ABCD");
// } else {
//   console.log("Does not start");
// }

// let string = "ABCD JS";
// let substring = "ABCD";
// let count = 0;
// for (let i = 0; i < string.length; i++) {
//   count += string.substring(i, i + substring.length) === substring ? 1 : 0;
// }
// console.log("Count of ABCD = ", count);

// string = "AB CD Java";
// substring = "ABCD";
// count = 0;
// for (let i = 0; i < string.length; i++) {
//   count += string.substring(i, i + substring.length) === substring ? 1 : 0;
// }
// console.log("Count of ABCD = ", count);

// string = "ABCDABCDABCD";
// substring = "ABCD";
// count = 0;
// for (let i = 0; i < string.length; i++) {
//   count += string.substring(i, i + substring.length) === substring ? 1 : 0;
// }
// console.log("Count of ABCD = ", count);

// string = "AB ABC ABCD ABCD ABC AB";
// substring = "ABCD";
// count = 0;
// for (let i = 0; i < string.length; i++) {
//   count += string.substring(i, i + substring.length) === substring ? 1 : 0;
// }
// console.log("Count of ABCD = ", count);

// let string = "ABCD JS";
// let searchSubstring = "ABCD";
// let replaceSubstring = "XYZ";
// for (let i = 0; i < string.length; i++) {
//   if (string.substring(i, i + searchSubstring.length) === searchSubstring) {
//     string = string.substring(0, i) + replaceSubstring + string.substring(i + searchSubstring.length);
//     i += replaceSubstring.length - 1;
//   }
// }
// console.log(string);

// string = "AB CD Java";
// searchSubstring = "ABCD";
// replaceSubstring = "XYZ";
// for (let i = 0; i < string.length; i++) {
//   if (string.substring(i, i + searchSubstring.length) === searchSubstring) {
//     string = string.substring(0, i) + replaceSubstring + string.substring(i + searchSubstring.length);
//     i += replaceSubstring.length - 1;
//   }
// }
// console.log(string);

// string = "ABCDABCDABCD";
// searchSubstring = "ABCD";
// replaceSubstring = "XYZ";
// for (let i = 0; i < string.length; i++) {
//   if (string.substring(i, i + searchSubstring.length) === searchSubstring) {
//     string = string.substring(0, i) + replaceSubstring + string.substring(i + searchSubstring.length);
//     i += replaceSubstring.length - 1;
//   }
// }
// console.log(string);

// string = "AB ABC ABCD ABCD ABC AB";
// searchSubstring = "ABCD";
// replaceSubstring = "XYZ";
// for (let i = 0; i < string.length; i++) {
//   if (string.substring(i, i + searchSubstring.length) === searchSubstring) {
//     string = string.substring(0, i) + replaceSubstring + string.substring(i + searchSubstring.length);
//     i += replaceSubstring.length - 1;
//   }
// }
// console.log(string);


// function largestOf3(n1,n2,n3){      #6 Task 1
//    let largest;
//    if(n1>=n2&&n1>=n3){
//       largest=n1;
//    }
//    else if(n2>=n1&&n2>=n3){
//       largest=n2;
//    }
//    else{
//       largest=n3;
//    }
//    return largest;
// }
// console.log(largestOf3(29,25,78));

// function replaceChar(str,char1,char2){  task ai
//    let outstr='';
//    for(i=0;i<str.length;i++){
//       if(str[i]==char1){
//          outstr+=char2;
//       }
//       else{
//          outstr+=str[i];
//       }
//    }
//    return outstr;
// }
// console.log(replaceChar('Hallo','a','u'));

// function issquare(num){
//    for(i=1;i<=num;i++){
//       console.log('checking for ',i);
//       let sq=i*i;
//       if(sq==num){
//          console.log("got a match");
//          return true;
//       }
//    }
//    console.log('No match found');
//    return false;
// }
// console.log(issquare(16));

// function factorial(n){
//    let out=1;
//    for(let i=1;i<=n;i++){
//       out*=i;
//    }
//    return out;
// }
// function printfactorial(num){
//    for(let i=1;i<=num;i++){
//       let fact=factorial(i);
//       console.log('Factorial of ',i,' is ',fact);
//    }
// }
// printfactorial(5)

// let a=0;                        Task 2
// function sum(n){
//    for(let i=0;i<=n;i++){
//       a+=i;
//    }
//    console.log(a);
// }
// sum(10);

// a=0;
// function sum(n){
//    for(let i=0;i<=n;i++){
//       a+=i;
//    }
//    console.log(a);
// }
// sum(2);

// a=0;
// function sum(n){
//    for(let i=0;i<=n;i++){
//       a+=i;
//    }
//    console.log(a);
// }
// sum(20);

// let a='';                     Task 3
// function removed(str,ch){
//    for(i=0;i<str.length;i++){
//       if(str[i]==ch){

//       }
//       else{
//          a+=str[i];
//       }
//    }
//    console.log(a);
// }
// removed("moozoom","m");

// a='';
// function removed(str,ch){
//    for(i=0;i<str.length;i++){
//       if(str[i]==ch){

//       }
//       else{
//          a+=str[i];
//       }
//    }
//    console.log(a);
// }
// removed("abcaabca","a");

// a='';
// function removed(str,ch){
//    for(i=0;i<str.length;i++){
//       if(str[i]==ch){

//       }
//       else{
//          a+=str[i];
//       }
//    }
//    console.log(a);
// }
// removed("abcd",3);

// let a='';
// function reverse(str1){
//    for(let i=str1.length-1;i>=0;i--){
//       a+=str1[i];
//    }
//    console.log(a);
//    return a='';
// }

// reverse("Perfect");
// reverse("java");
// reverse("123456789");



// function a(str,char1,char2){   TAsk 7
//    let count=0;
//    let count1=0;
//    for(i=0;i<str.length;i++){
//       if(str[i]==char1){
//          count++;
//        }
//       else if(str[i]==char2){
//             count1++;
//          }
//    }
//       if(count>count1){
//          console.log("1");
         
//       }
//       else if(count<count1){
//          console.log("-1");
//       }
//       else{
//          console.log("0");
//       }
    
// }
// a("moozoom","m","o");
// a("abcaabca","b","c");
// a("abcdefgh","3","4");
// a("aaacdef","c","x");

// function bracket(str){     
//    let a=0;
//    let b=0;
//    let count=0;
//    let count1=0;
//    for(i=0;i<str.length;i++){
//       if(str[i]=="("){
//          a=i;
//          count++;
//       }
//       else if(str[i]==")"){
//         b=i; 
//          count1++;
//       }
//    }
//    if(count==count1&&a<b){
//       console.log("True");
//    }
//    else{
//       console.log("False");
//    }  
// }
// bracket("(a+b+(c+d*e)-(d+e*f))+3");
// bracket("5+(((a+b)*c)+d+e)-7");
// bracket("(a+b))+(c");
// bracket("))a+b((");
// bracket("4+5)+6");
// bracket("((a+b)*c))+(5+6");//
// bracket("4+(5+6");



// function countPrimes(n) {          TAsk12
//    let count = 0;
//    for (let i = 2; i <= n; i++) {
//      let isPrime = true;
//      for (let j = 2; j < i; j++) {
//        if (i % j === 0) {
//          isPrime = false;
//          break;
//        }
//      }
//      if (isPrime) {
//        count++;
//      }
//    }
 
//    return count;
//  }
//  console.log(countPrimes(2));
//  console.log(countPrimes(75));
//  console.log(countPrimes(1));
//  console.log(countPrimes(150));

// function max(str) {    Task 13
//    let maxCount = 0;
//    let maxChar = null;
//    for (let i = 0; i < str.length; i++) {
//      let char = str.charAt(i);
//      let count = 0;
//      for (let j = 0; j < str.length; j++) {
//        if (str.charAt(j) === char) {
//          count++;
//        }
//      }
//      if (count > maxCount) {
//        maxCount = count;
//        maxChar = char;
//      }
//    }
//     return maxCount;
//  }
// console.log(max("museum"));
// console.log(max("abracadabra"));
// console.log(max("90045"));
// console.log(max("abcdefg"));
// console.log(max("ddddd"));

// function addNumber(n){
//    let r=0;
//    let a=0;
//    for(;;){
//    r=n%10;
//    n=(n-r)/10;
//    a=a+r;
//  if(n==0){
//    break;
//  }
//    } console.log(a);
// }
//    addNumber(24681);
//    addNumber(1002);
//    addNumber(789);
//    addNumber(15);
//    addNumber(7);


// let num=[2,5,10,87,56,28,32,9];   JS-A2 Task1ai
// let count=0;
// for(let i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         count++;
//     }
// }
// console.log("Number of evens ",count);

// let num=[2,30,5,10,4]  Task 1a ii
// let sum=0;
// for(i=0;i<num.length;i++){
//     if(num[i]%5==0){
//         sum+=num[i];
//     }
// }
// console.log(sum);

// let str=["hello","hi","Bye","GOOD"] iii
// for(i=0;i<str.length;i++){
//     let s=str[i];
//     str[i]=s.toUpperCase();
// }
// console.log(str);

// function hasprime(number){       iv
//     for(i=0;i<number.length;i++){
//         let check=isprime(number[i]);
//         if(check){
//             console.log('Found Prime',number[i]);
//             return true;
//         }
//     }
//     return false;
// }
// function isprime(num){
//     for(let i=2;i<=num-1;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// let numberarray=[25,10,11];
// console.log(hasprime(numberarray));

// function hasb(str){       1 v
//     for(i=0;i<str.length;i++){
//         if(str[i]=='b'|| str[i]=='B'){
//             return true;
//         }
//     }
//     return false;
// }
// let string=["BoB"];
// let count=0;
// for(let i=0;i<string.length;i++){
//     if(hasb(string[i])){
//         count++;
//     }
// }
// console.log(count);

// let num=6;         1vi
// let arr=[];
// for(let i=1;i<=num;i++){
//     arr.push(i);
// }
// console.log(arr);

// let num=[2,4,6,3,9,8,12];      1vii
// let num3=[];
// for(let i=0;i<num.length;i++){
//     if(num[i]%3!=0){
//         num3.push(num[i]);
//     }
// }
// console.log(num3);

// let arr=["Hello","X","Good","Y"];1viii
// for(i=0;i<arr.length;i++){
//     if(arr[i]="Hello"){
//         arr.splice(i,1);
//         break;
//     }
// }
// console.log(arr);

// let tech=['c','c++','python',   'javascript','Java'];          1ix
// console.log(tech);
// for(let i=0;i<tech.length;i++){
//     if(tech[i]=='javascript'){
//         tech.splice(i+1,0,'Angular','React','Node');
//         break;
//     }
// }
// console.log(tech);

// function sum(arr){    Task 5
//     let count=0;
//     let a=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>21){
//             count++;  
//             a[count-1]=arr[i];
//         }    
//     }
//     console.log("Count = "+count);
//     console.log("Values = "+a);
// }
// sum(arr=[5,18,26,30,40,6]);
// sum(arr=[100,200,10,20,50,64]);
// sum(arr=[77]);
// sum(arr=[]);

// function add(arr){     TAsk 6
//     let a=[];
//     for(i=0;i<arr.length;i++){
//         a[i]=arr[i]+10;
//     }
//     console.log(a);
// }
// add(arr=[2,3,5,7]);
// add(arr=[23,25]);
// add(arr=[6]);

// function add(arr){    Task7
//     let a=[];
//     for(i=0;i<arr.length;i++){
//         a[i]="Hello "+arr[i];
//     }
//     console.log(a);
// }
// add(arr=["Jack","Mary"]);
// add(arr=["Jack"]);
// add(arr=[]);

// function convert(arr){   Task 8
//     let a=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2==1){
//             a[i]=arr[i]+1;
//         }
//         else{
//             a[i]=arr[i];
//         }
//     }
//     console.log(a);
// }
// convert(arr=[5,18,23,30]);
// convert(arr=[5,7,9]);
// convert(arr=[72]);

// function a(arr){   Task9
//         let i = arr.length;
//         if(arr[0]>arr[i-1]){
//             console.log("FIRST:"+arr[0]);
//         }
//         else if(arr[0]<arr[i-1]){
//             console.log("LAST:"+arr[i-1]);
//         }
//         else{
//             console.log("EQUAL:"+arr[i-1]);
//         }
// }
// a(arr=[4,8,12,20,6]);
// a(arr=[10,8,6,4,2,0]);
// a(arr=[15,15]);
// a(arr=[40]);
// a(arr=[2,4,8,6,4,2]);


// function big(arr,arr1){   Task 10
//     let a=0;
//     let b=0;
//     for(let i=0;i<arr.length;i++){
//         a+=arr[i];
//     }
//     for(let j=0;j<arr1.length;j++){
//         b+=arr1[j];
//     }
//     if(a>b){
//         console.log("Big1");
//     }
//     else if(a<b){
//         console.log("Big2")
//     }
//     else{
//         console.log("Equal");
//     }
// }
// big(arr=[1,2,3],arr1=[10,20,30]);
// big(arr=[1,2,3,5,7,9],arr1=[2,4,19]);
// big(arr=[50,100],arr1=[1,2,3,4,5,6]);
// big(arr=[2,4,6,8],arr1=[20]);

// function big(arr){   
//     let a='';
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i-1]){
//             a=arr[i];
//         }
//         console.log(a);
//     }
// }
// big(arr=[5,18,26,30,40,6]);
// big(arr=[100,200,10,20,50,64]);
// big(arr=[77]);
// big(arr=[25,20,14,2,7,21]);

// function Largest(arr) {      Task13
//     count=0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i]%2==0||arr[i]%3==0||arr[i]%5==0||arr[i]%7==0) {
//         count++;
//       }
//     }
//     console.log("Count="+count);
//   }
// Largest(arr=[10,12,14]);
// Largest(arr=[210]);
// Largest(arr=[3,4,5,6]);
// Largest(arr=[11,17,8,10,21]);
// Largest(arr=[1,2,3,4,5,6,7,8,9,10,11]);
// Largest(arr=[11,13,17,19,23,121,169]);

// function sequence(arr){
//     let a=0;
//     let b=0;
//     for(i=0;i<arr.length-1;i++){
//        b=arr[i+1];
//        a=arr[i]+1;
//        if(a!=b){
//         console.log("NOT");
//         break;
//        }
//        else{
//         console.log("SEQUENCE");
//         break;
//        }
//     }
    
// }
// sequence(arr=[12,13,14,15,16,17]);
// sequence(arr=[4,3,2,5]);
// sequence(arr=[3,4,5,6]);
// sequence(arr=[12,11,10]);
// sequence(arr=[6]);
// sequence(arr=[34,35]);
// sequence(arr=[1,1,2,3]);




// function sequence(arr) {
//     if (arr.length === 0) {
//       console.log('NOT');
//       return;
//     }
  
//     for (let i = 0; i < arr.length; i++) {
//       if ((i % 2 === 0 && arr[i] % 2 !== 0) || (i % 2 !== 0 && arr[i] % 2 === 0)) {
//         continue;
//       } else {
//         console.log('NOT');
//         return;
//       }
//     }
  
//     console.log('ALTERNATING');
//   }
  
// function findAB(inputString) {
//     for (let i = 0; i < inputString.length - 1; i++) {
//       if (inputString[i] === 'a' && inputString[i + 1] === 'b') {
//         return 'AB FOUND';
//       }
//     }
//     return 'AB NOT FOUND';
//   }
//   console.log(findAB('javascript'));
//   console.log(findAB('TESTabcdef'));
//   console.log(findAB('acbcadbd'));
//   console.log(findAB('bat+ball'));
//   console.log(findAB('nicebaby')); 

// function even(arr){  
//     let a=[];
//     let b=arr.length;
//     for(i=0;i<b;i++){
//            a[i]=arr.shift();      
//     }  console.log("shift="+a);
// }
// even(arr=[40,6,9]);
// even(arr=[6]);
// even(arr=[]);
// even(arr=[20,14,2,7,18]);

// function removeNameFromArray(arr, name) {   
//     for (let i=0;i<arr.length;i++) {
//       if (arr[i]==name) {
//         arr.splice(i,1);
//         break;
//       }
//     }
//     console.log(arr);
//   }
//   removeNameFromArray(arr=["Jack","Bob","Ed","Steve"], "Bob");
//   removeNameFromArray(arr=["Jack","Bob","Ed","Steve"], "Jack");
//   removeNameFromArray(arr=["Jack","Bob","Ed","Steve"], "Steve");
//   removeNameFromArray(arr=["Jack","Bob","Ed","Steve"], "Bill");
//   removeNameFromArray(arr=["Jack"], "Jack");

// function largest(arr){       Task 22
//     let max=arr[0];
//     let index=0;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//             index=i;
//         }
//     }
//     arr.splice(index,1);
//     console.log(arr);
// }
// largest(arr=[5,18,26,30,40,6]);
// largest(arr=[100,10,20,50,64,200]);
// largest(arr=[77]);
// largest(arr=[25,20,14,2,7,21]);

// function ascending(arr, number) {   Task 23
//     let inserted = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (number < arr[i]) {
//         arr.splice(i, 0, number); 
//         inserted = true;
//         break;
//       }
//     }
//     if (!inserted) {
//       arr.push(number);
//     }
//     console.log(arr);
//   }  
//   ascending(arr=[5,18,26,30,40],6);
//   ascending(arr=[10,20,50,64],99);
//   ascending(arr=[5],7);
//   ascending(arr=[5],2);

// function newarr(arr,arr1){
//     let a=[];
//     a=arr.concat(arr1);
//     console.log(a);
// }
// newarr(arr=[5,18,26,30],arr1=[40,6]);
// newarr(arr=[100,10],arr1=[20,50,64,200]);
// newarr(arr=[],arr1=[1,2,3]);
// newarr(arr=[2,7,21],arr1=[])

// function putting(arr,arr1){
//     let a=[];
//     let b=arr.length
//     for(i=0;i<b;i++){
//             // arr[2*i]=arr.push(arr1[i]);
//             a.push(arr[i]);
//             a.push(arr1[i]);
//     }
//     console.log(a);
// }
// putting(arr=[5,18,26,30],arr1=[101,102]);
// putting(arr=[1,2],arr1=[20,50,60,70]);
// putting(arr=[],arr1=[1,2,3]);
// putting(arr=[2,4,6,8],arr1=[]);

// JSON

// let emp1={
//     name:'Sam',
//     dept:'Tech',
//     designation:'Manager',
//     salary:40000,
//     raise:true
// }
// let emp2={
//     name:'Mary',
//     dept:'Finance',
//     designation:'Trainee',
//     salary:20000,
//     raise:true
// }
// let emp3={
//     name:'Kritika',
//     dept:'HR',
//     designation:'Developer',
//     salary:40000,
//     raise:true
// }
// let emps=[emp1,emp2,emp3];
// // console.log(emps);
// let company={
//     companyName:'Wipro',
//     website:'www.wipro.com',
//     employees: emps
// }
// emps[3]={
//     name:'Anna',
//     dept:'Tech',
//     dessignation:'Executive',
//     salary:25000,
//     raise:false
// }
// // console.log(company);
// let wfhemps=['Anna','Sam'];
// function addwfh(compJSON,wfhemps){
//     let emparr=compJSON.employees;
//     for(let i=0;i<emparr.length;i++){
//         let emp=emparr[i];
//         if(checkinarray(emp.name,wfhemps)){
//             emp.wfh=true;
//         }
//         else{
//             emp.wfh=false;
//         }
//     }
// }
// function checkinarray(value,arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==value){
//             return true;
//         }
//     }
//     return false;
// }
// addwfh(company,wfhemps);
// console.log(company);

// function processraise(company){
//     let emparr=company.employees;
//     for(let i=0;i<emparr.length;i++){
//         let emp=emparr[i];
//         if(emp.raise){
//             emp.salary=emp.salary*1.10;
//             emp.raise=false;
//         }
//     }
// }
// processraise(company);
// console.log(company);


// Total salary
// function computesalary(company){
//     let arremp=company.employees;
//     let total=0;
//     for(let i=0;i<arremp.length;i++){
//         let emp=arremp[i];
//         total=total+emp.salary;
//     }
//     return total;
// }
// let totsalary=computesalary(company);
// console.log('Total salary is = ',totsalary);

// let product1={
//     code:"PX101",
//     stock:15,
//     price:30
// }
// let product2={
//     code:"PX102",
//     stock:24,
//     price:20
// }
// let product3={
//     code:"PX103",
//     stock:33,
//     price:10
// }
// let product4={
//     code:"PX104",
//     stock:10,
//     price:40
// }
// let shop={
//     product:[product1,product2,product3]
// }
// shop.product.push(product4);
// console.log(shop.product[1].price);

// function increase( b){
//     let a=b.product.length
//     for(i=0;i<a;i++){
//         b.product[i].price*=1.10;
    // (b.product[i].price);
    // }return shop;
// }
// console.log(increase(shop));

// function computestock(pro){
//     let a=pro.product;
//     let total=0;
//     for(let i=0;i<a.length;i++){
//         let p=a[i];
//         total+=p.stock;
//     }
//     return total;
// }
// let totalStockQty=computestock(shop);
// console.log("Total Stock is : ",totalStockQty);


// let Mark={
//     Maths:80,
//     English:75,
//     Science:63
// }
// let Bob={
//     Maths:90,
//     English:81,
//     Science:88
// }
// let Julia={
//     Maths:88,
//     English:87,
//     Science:89
// }
// let Anthony={
//     Maths:60,
//     English:64,
//     Science:61
// }
// let students=[Mark,Bob,Julia,Anthony];
// // console.log(students);
// Mark[newstr="Computers"]=(newval=90);
// Anthony[newstr="Computers"]=(newval=70);
// Julia[newstr="Computers"]=(newval=88);
// Bob[newstr="Computers"]=(newval=81);
// function totalMarks(arr){
//     len=arr.length;
//     for(let i = 0; i<len; i++)
//     {   a=arr[i].Maths;
//         b=arr[i].English;
//         c=arr[i].Science;
//         d=arr[i].Computers;
//         sum=a+b+c+d;
//         if(a>b&&a>c&&a>d){
//             Max=a;
//         }
//         else if(b>c&&b>d){
//             Max=b;

//         }
//         else if(c>d){
//             Max=c;
//         }
//         else{
//             Max=d;
//         }
//      (arr[i].totalMarks=sum) ;
//      (arr[i].avgMarks=sum/len);
//      (arr[i].maxMarks=Max);
//     }
//     return arr;
// } console.log(totalMarks(students));
//  function remove(arr){
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i]==Bob){
//             arr.splice(i,1);
//         }
//     } return arr;
//  }
//  console.log(remove(students))

// let number=[2,5,30,75,24,10];
// let x=9;
// let num1=number.find(function(n){
//     return isbig(n,x);
// });
// console.log('Find',num1);
// let index=number.findIndex(function(n){
//     return isbig(n,x);
// })
// console.log('Index',index);
// let arr=number.filter(function(n){
//     return isbig(n,x);
// });
// console.log('Filter',arr);
// function isbig(n,comp){
//     return n>comp;
// }

// let names=['Ana','Tim','Somesh','Julie','Sam'];
// let ch='S';
// let name1=names.find(function(name){
//     return isStarting(name,ch);
// });
// console.log('Find',name1);
// function isStarting(name,start){
//     return name[0]==start;
// }
// let index=names.findIndex(function(name){
//     return isStarting(name,ch);
// });
// console.log('Index',index);
// let arr=names.filter(function(name){
//     return isStarting(name,ch);
// });
// console.log(arr);

// let names=['James','Sam','Jack','Jam','Anna','Tim'];
// let ch='J';
// function findName(namesArr,tofind){
//     let name1=namesArr.find(function(name){
//         return isStarting(name,tofind);
//     });
//     return name1;
// }
// console.log('Using fn',findName(names,ch));
// function isStarting(name,start){
//     return name[0]==start;
// }
// function findNameIndex(namesArr,tofind){
//     let index=namesArr.findIndex(function(name){
//         return isStarting(name,tofind);
//     });
//     return index;
// }
// console.log('Index',findNameIndex(names,ch));
// function filterNames(namesArr,tofind){
//     let arr=namesArr.filter(function(name){
//         return isStarting(name,tofind);
//     });
//     return arr;
// }
// console.log('Filter',filterNames(names,ch));

// let emps=[                                                   iv
//     {name:'Jack',city:'Delhi',dept:'Tech'},
//     {name:'Ana',city:'London',dept:'Tech'},
//     {name:'Sam',city:'London',dept:'HR'},
//     {name:'Tim',city:'Delhi',dept:'HR'},
//     {name:'Bon',city:'Delhi',dept:'Tech'},
//     {name:'Mary',city:'London',dept:'Tech'},
// ];
// let city='London';
// let dept='Tech';
// let emp1=emps.find(function(emp){
//     return emp.city==city&&emp.dept==dept;
// });
// console.log(emp1);

// let index=emps.findIndex(function(emp){
//     return emp.city==city&&emp.dept==dept;
// });
// console.log(index);
// let arr=emps.filter(function(emp){
//     return emp.city==city&&emp.dept==dept;
// });
// console.log(arr);

// let names=['Jack','Tim','Anna','Mark'];   acending order
// names.sort(compnamesasc);
// function compnamesasc(name1,name2){
//     return name1.localeCompare(name2);
// }
// console.log(names);

// let names=['Jack','Tim','Anna','Mark'];   descending order
// names.sort(compnamedesc);
// function compnamedesc(name1,name2){
//     return name1.localeCompare(name2);
// }
// function compnamedesc(name1,name2){
//     return -1*name1.localeCompare(name2);
// }
// console.log(names);



// let stdata=[
//     {name:'Jack',marks1:33,marks2:25},
//     {name:'Bob',marks1:40,marks2:32},
//     {name:'Mary',marks1:41,marks2:40},
//     {name:'Tom',marks1:24,marks2:25},
//     {name:'Harry',marks1:30,marks2:35},
//     {name:'Ana',marks1:32,marks2:37},
// ];
// let mincut=59;
// function getstdata(arr,cut){
//     let arr1=arr.filter(function(st){
//         return (st.marks1+st.marks2)>cut;
//     });
//     arr1.sort(comptotaldesc);
//     return arr1;
// }
// let farr=getstdata(stdata,mincut);
// console.log(farr);


// function comptotaldesc(st1,st2){
//     let tot1=st1.marks1+st1.marks2;
//     let tot2=st2.marks1+st2.marks2;
//     if(tot1>tot2)
//     return -1;
//     else if(tot1<tot2)
//     return 1;
//     else
//     return 0
// }


// function removeDuplicate(str, n)
//     {
//         var index = 0;
//         for (var i = 0; i < n; i++)
//         {
//             var j;
//             for (j = 0; j < i; j++)
//             {
//                 if (str[i] == str[j])
//                 {
//                     break;
//                 }
//             }
//             if (j == i)
//             {
//                 str[index++] = str[i];
//             }
//         }        
//         return str.join("").slice(str, index);
//     }
//         console.log(str = "Abc".split(""));
//         console.log(str1 = "heshethemthey".split(""));
//         var n = str.length;
//         console.log(removeDuplicate(str, n));

// const num = [3, 10, 18, 20];
// for(i=0;i<num.length;i++){
//     if(num[i]==10){
//         console.log("Equal to 10");
//     }
//     else if(num[i]>30){
//         console.log("greater than 30");
//     }
//     else if(num[i]==num[i]*3){
//         console.log("multiple of 3")
//     }
// }




// function findNumbers(array) {                                   2.1
//     let results = {
//       startWithP: [],
//       greaterThan5: [],
//       start: []
//     };
//     for (let i = 0; i < array.length; i++) {
//       let string = array[i];
//       if (numbers==10) {
//         results.startWithP.push({ string, index: i });
//       }
//       if (string > 5) {
//         results.greaterThan5.push({ string, index: i });
//       }
//       if (string[0] === 'P') {
//         results.start.push({ string, index: i });
//       }
//     }
//     return results;
//   }
//   let string = [5,10,15,20,25,30,35,75];
//   let foundNumbers = findNumbers(string);
//   console.log("Numbers equal to 10:");
//   console.log(foundNumbers.startWithP);
//   console.log("Numbers greater than 30:");
//   console.log(foundNumbers.greaterThan5);
//   console.log("Numbers multiple of 3:");
//   console.log(foundNumbers.start);




// let numbers = [5,10,15,20,25,30,35,40,45,50];              task2.2
// let equalTo10=numbers.filter(num=>num==10);
// console.log("numbers equal to 10:",equalTo10);
// let greaterThan30=numbers.filter(num=>num>30);
// console.log("numbers greater than 30:",greaterThan30);
// let multipleOf3=numbers.filter(num=>num%3==0);
// console.log("Multiple of 3:",multipleOf3)



// function findNames(namesArray, condition) {               task3.1
//     let result = [];
//     for (let i = 0; i < namesArray.length; i++) {
//       let name = namesArray[i];
//       if (condition === 'length' && name.length > 5) {
//         result.push({ name, index: i });
//       } else if (condition === 'startsP' && name.charAt(0).toUpperCase() === 'P') {
//         result.push({ name, index: i });
//       } else if (condition === 'startsWith' && name.charAt(0).toUpperCase() === condition.charAt(0).toUpperCase()) {
//         result.push({ name, index: i });
//       }
//     }
//     return result;
//   }
//   const names = ['Peter', 'John', 'Paul', 'Sarah', 'Philip'];
//   console.log(findNames(names, 'length'));
//   console.log(findNames(names, 'startsP'));
//   console.log(findNames(names, 'J'));



// function filterNames(names, c, p) {     3.2
//     return names.filter(name => {
//       if (c=='length') {
//         return name.length > 5;
//       } else if (c=='startsP') {
//         return name.charAt(0).toUpperCase()=='P';
//       } else if (c=='startsCharacter') {
//         return name.charAt(0).toUpperCase()==p.toUpperCase();
//       } else {
//         return false;
//       }
//     });
//   }
//   const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Peter', 'Patricia', 'Paul'];
//   const filteredNames = filterNames(names, 'length');
//   console.log('Names length greater than 5:', filteredNames);
//   const StartsP = filterNames(names, 'startsP');
//   console.log('Names starting with P:',StartsP);
//   const StartsCharacter = filterNames(names, 'startsCharacter', 'D');
//   console.log('Names starting with D:',StartsCharacter);



// let emp1={
//     name:'Alice',
//     age:25
// }
// let emp2={
//     name:'Santosh',
//     age:40
// } 
// let emp3={
//     name:'Harshita',
//     age:18
// }
// let employees=[emp1,emp2,emp3]

// function perAge(arr,par){
//     let result = [];
// for(i=0; i<arr.length; i++){
//     if(arr[i].age<35){
//         result.push({ name:arr[i].name, index: i });
//      }
//      if(arr[i].name[0]=='S'){
//         result.push({ name: arr[i].name, index: i });
//      }
//      if(arr[i].name[0]==par){
//         result.push({ name, index: i });
//      }
// } return result;
// }
// console.log(perAge(employees,'A'));
// let str=['Hello','React','java','Python','Hibernate','JavaScript'];
// let result=[];
// for(i=0;i<str.length;i++){
//     if(str[i].endsWith('t')){
//         result=str[i];
//     }
//     console.log(result);
// }


// function findStringEndsWithT(strings) {         5.1
//     for (let i = 0; i < strings.length; i++) {
//       if (strings[i].endsWith('t')) {
//         return { index: i, string: strings[i] };
//       }
//     }
//     return null;
//   }
//   function filterStringsEndsWithT(strings) {
//     return strings.filter((str) => str.endsWith('t'));
//   }
//   let strings=['Hello','React','java','Python','Hibernate','JavaScript'];
//   let firstString = findStringEndsWithT(strings);
//   let filteredStrings = filterStringsEndsWithT(strings);
//   console.log('First string ending with "t":', firstString);
//   console.log('Filtered strings ending with "t":', filteredStrings);


//   function findStringEndsCh(strings,ch,ch2){ 
//     let a="";
//     let b='';
//     let c=[];
//     let d=[];
//     for(i=0;i<strings.length;i++){
//          a=strings[i].length-1;
//         if(strings[i].charAt(a)==ch){
//             c.push({index:i,strings:strings[i]});
//         }
//         if(strings[i].charAt(b)==ch2){
//             d=-1;
//         }
//     }
//     return c;
//   }
//   function filterStringsEndsWithT(strings) {
//     return strings.filter((str) => str.a);
// }
// let strings=["Python","Java"];
// let ch='a';
// let ch2='b'
// let endsWithCh=findStringEndsCh(strings,ch,ch2);
// let filterString=filterStringsEndsWithT(strings,ch);
// console.log(endsWithCh);
// console.log(filterString);

// function findStringCh(strings,ch1){   5.3
//     let result=[];
//     for(i=0;i<strings.length;i++){
//         for(let j=0;j<strings[i].length;j++){
//             if(strings[i].charAt(j)==ch1){
//                 result.push({index:i,strings:strings[i]});
//             }      
//         } 
//     }
//     console.log(result);
// }
// function findStringCh2(strings,ch2){
//     let result1=[];
//     for(i=0; i<strings.length; i++){
//         for(let j=0;j<strings[i].length;j++){
//             if(strings[i].charAt(j)==ch2){
//                 result1.push({index:i,strings:strings[i]});
//                 break;
//             }
//         } 
//     } 
//     console.log(result1);
// }
// let strings=["Python","React","Java","Hibernate","Javascript"]
// let ch1='y';
// let ch2='a';
// let endsWithCh=findStringCh(strings,ch1);
// let endsWithCh2=findStringCh2(strings,ch2);
// console.log(endsWithCh);
// console.log(endsWithCh2);


// let student=[                                               Task6  
//     {"name":"Jack","maths":55,"english":60,"science":62},
//     {"name":"Anita","maths":62,"english":65,"science":56},
//     {"name":"Thomas","maths":68,"english":72,"science":75},
//     {"name":"Steve","maths":51,"english":56,"science":68},
//     {"name":"Julia","maths":47,"english":77,"science":72},
//     {"name":"Mary","maths":72,"english":55,"science":81}
// ]

// let findMathMark=student.find(function(str){             6.1
//     return str.maths<50
// })
// console.log(findMathMark);
// let findMathMarkIndex=student.findIndex(function(str){
//     return str.maths<50  
// })
// console.log(findMathMarkIndex);


// for(i=0;i<student.length;i++){           6.2
//     let sum=0;
//     sum=student[i].maths+student[i].english+student[i].science;
//     student[i].sum=sum;
// }
// let AddMark=student.find(function(str){
//     return str.sum>200;
// })
// console.log(AddMark);
// let findMathMarkIndex=student.findIndex(function(str){
//     return str.sum>200;
// })
// console.log(findMathMarkIndex);


// for(i=0;i<student.length;i++){          6.3
//     let moreThan=0;
//     moreThan=student[i].maths>student[i].english;
//     student[i].moreThan=moreThan;
// }
// let moreThanEnglish=student.find(function(str){     
//     return str.moreThan;
// })
// console.log(moreThanEnglish);
// let findMoreThanEnglishIndex=student.findIndex(function(str){
//     return str.moreThan;
// })
// console.log(findMoreThanEnglishIndex);


    //for(i=0;i<student.length;i++){          6.4  
    //     let sum=0;
    //     sum=student[i].maths+student[i].english+student[i].science;
    //     student[i].sum=sum;
    // }
    // for(i=0;i<student.length;i++){          
    //     let n=200;
    //     n=student[i].sum>n;
    //     student[i].n=n;
    // }
    // let moreThanEnglish=student.find(function(str){     
    //     return str.n;
    // })
    // console.log(moreThanEnglish);
    // let findMoreThanEnglishIndex=student.findIndex(function(str){
    //     return str.n;
    // })
    // console.log(findMoreThanEnglishIndex);


    // let filterMathMark=student.filter(function(str){     6.5
    //     return str.maths<50 
    // })
    // console.log(filterMathMark);


    // for(i=0;i<student.length;i++){          6.6
//     let sum=0;
//     sum=student[i].maths+student[i].english+student[i].science;
//     student[i].sum=sum;
// }
// let moreThan200=student.filter(function(str){
//     return str.sum>200;
// })
// console.log(moreThan200);
// let findMoreThanIndex=student.findIndex(function(str){
//     return str.sum>200;
// })
// console.log(findMoreThanIndex);

// for(i=0;i<student.length;i++){          6.7
    //     let moreThan=0;
    //     moreThan=student[i].maths>student[i].english;
    //     student[i].moreThan=moreThan;
    // }
    // let moreThanEnglish=student.filter(function(str){     
    //     return str.moreThan;
    // })
    // console.log(moreThanEnglish);

    // for(i=0;i<student.length;i++){          6.8
    //     let sum=0;
    //     sum=student[i].maths+student[i].english+student[i].science;
    //     student[i].sum=sum;
    // }
    // for(i=0;i<student.length;i++){          
    //     let n=200;
    //     n=student[i].sum>n;
    //     student[i].n=n;
    // }
    // let moreThanEnglish=student.filter(function(str){     
    //     return str.n;
    // })
    // console.log(moreThanEnglish);

    // let n1=60;                           6.9
//     let n2=60;
//     for(i=0;i<student.length;i++){          
//         student[i].n1=n1;
//     }
//     for(i=0;i<student.length;i++){          
//         student[i].n2=n2;
//     }
//     for(i=0;i<student.length;i++){         
//         let sum=0;
//         sum=student[i].maths>n1&&student[i].science>n2;
//         student[i].sum=sum;
//     }
//     let twoValue=student.filter(function(str){     
//         return str.sum;
//     })
//     console.log(twoValue);


// let person=[                                        
//     {"name":"Jack","country":"USA","age":35},
//     {"name":"Amit","country":"India","age":38},
//     {"name":"Edward","country":"USA","age":41},
//     {"name":"Vishal","country":"India","age":30},
//     {"name":"Annie","country":"USA","age":27},
//     {"name":"Nick","country":"France","age":32},
//     {"name":"Francis","country":"France","age":44},
//     {"name":"Preeti","country":"India","age":25},
//     {"name":"Sophie","country":"France","age":29},
//     {"name":"Harpreet","country":"India","age":48},
//     {"name":"Bob","country":"USA","age":21}
// ]


// let str = "India";
// let filterCountry=person.filter(function(who){
//     return who.country==str;
// })
// console.log(filterCountry);
// let findCountry=person.find(function(who){
//     return who.age>minAge;
// })
// console.log(findCountry);
// let findIndexCountry=person.findIndex(function(who){
//     return who.age>minAge;
// })
// console.log(findIndexCountry);


// let student=[                                     Task 8
//     {"name":"Mary","marks":[72,65,55,71]},
//     {"name":"Edward","marks":[44,54,64,58]},
//     {"name":"Anita","marks":[66,70,75,53]},
//     {"name":"Robin","marks":[41,44,47,49]},
//     {"name":"Thomas","marks":[62,55,65,81]},
//     {"name":"Bruce","marks":[52,57,61,64]},
//     {"name":"Sophia","marks":[71,73,67,77]},
// ]

// avg=65;                                                 8.4
// let averageMarks=student.filter(function(num){
//     AVG=0;
//     sum=0;
//     for(let i=0; i<num.marks.length; i++){
//         sum+=num.marks[i];
//         AVG=sum/4;
//         }return AVG>avg;    
// })
// console.log(averageMarks);





// let employee=[                                   Task9
//     {"name":"Jack","tech":"Android"},
//     {"name":"Mary","tech":"React"},
//     {"name":"Bob","tech":"Angular"},
//     {"name":"Steve","tech":"Spring"},
//     {"name":"James","tech":"Android"},
//     {"name":"Julia","tech":"Android"},
//     {"name":"Michel","tech":"React"},
//     {"name":"Bill","tech":"Angular"},
//     {"name":"Sonny","tech":"Spring"},
//     {"name":"Martins","tech":"React"},
//     {"name":"Bruce","tech":"Angular"},
//     {"name":"Sam","tech":"Spring"}
// ]
// str="Julia";
// tech="React"
// function a(arr,str,bool){
//     if(bool==true){
//         let a=arr.filter(function(who){
//     return who.name==str;
// })
// console.log(a);
// } 
// }
// function b(arr,tech,bool){
//     if(bool==false){
//         let b=arr.filter(function(who){
//     return who.tech==tech;
// })
// console.log(b);
// } 
// }
// a(employee,str,true);
// b(employee,tech,false);



// function m(a,J){                             Task11
//     let b=a.join(J);
//     console.log(b);
// }
// m(a=["Hi","Hello","Bye"],"**");
// m(a=["A","B","C"],'Level:');
// m(a=["AB","12","EF"],'#');



// let num=[12,5,-6,10,-9,4,0,-23,34];                             Task12
// //Task 12 a) Sort the numbers in ascending order
// function asc(a,b){
//     if(a>b)
//     return 1;
//     else if(b>a)
//     return -1;
//     else 
//     return 0;
// }
// num.sort(asc);
// console.log("Ascending Order");
// console.log(num);

// //Task 12 b) sort the numbers in descending order
// function desc(a,b){
//     if(a>b)
//     return -1;
//     else if(b>a)
//     return 1;
//     else 
//     return 0;
// }
// num.sort(desc);
// console.log("Descending Order");
// console.log(num);

// //Task 12 c) sort the numbers based on their absolute valuein ascending order
// function absAsc(a,b){
// if(a<0)
//     a*=-1;
// if(b<0)
//     b*=-1;
//     if(a>b)
//     return 1;
//     else if(b>a)
//     return -1;
//     else 
//     return 0;

// }
// num.sort(absAsc);
// console.log("Absoloute value in ascending Order");
// console.log(num);



// let str=["Javascript","Hello","React","Java","Python","C","Node"];        Task 13
// //Task13 a) Sort the array in ascending orderas in dictionary
// str.sort();
// console.log("After Ascending order");
// console.log(str);

// // Task 13 b) Sort the array in descending orderas in dictionary
// str.sort(function(a, b) {
//     if (a > b) {
//       return -1;
//     } else if (a < b) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   console.log("After Descending order");
//   console.log(str);

// // Task 13 c) Sort the array in ascending orderof their length
//   str.sort((a,b)=>a.length-b.length);
//   console.log("Ascending order of their length")
//   console.log(str);

// // Task 13d) Sort the array in ascending orderof the number of 'a' in them
//   function A(arr) {
//     var len = arr.length;
//     var swapped;
//     do {
//       swapped = false;
//       for (let i=0;i<len-1;i++) {
//         if (arr[i].a > arr[i + 1].a) {
//           var temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = true;
//         }
//       }
//     } while (swapped);
  
//     return arr;
//   }
// console.log("Ascending of the number of 'a' in them")
// console.log(A(str));



// let person=[                                                Task 14
//     {"name":"Jack","maths":55,"english":60,"science":62},
//     {"name":"Thomas","maths":68,"english":58,"science":54},
//     {"name":"Anita","maths":62,"english":65,"science":56},
//     {"name":"Julia","maths":47,"english":77,"science":72},
//     {"name":"Steve","maths":51,"english":56,"science":68},
//     {"name":"Mary","maths":72,"english":55,"science":60}
// ]

// person.sort((a,b)=>a.name.localeCompare(b.name));                14.1

// let sum=0;                                                      14.3
// for(i=0;i<person.length;i++){      
//     sum=person[i].maths+person[i].english+person[i].science;
//     person[i].sum=sum;
// }
// person = person.sort(function(a, b) {
//     return parseInt(a.sum) - parseInt(b.sum);
//   });
//   console.log(person);

// person = person.sort(function(a, b) {                           14.4
//     return parseInt(b.maths) - parseInt(a.maths);
//   });
//   console.log(person);



// let traveller=[                                           Task 15
//     {"name":"Jack","country":"USA","age":35},
//     {"name":"Amit","country":"India","age":38},
//     {"name":"Edward","country":"USA","age":41},
//     {"name":"Vishal","country":"India","age":30},
//     {"name":"Annie","country":"USA","age":27},
//     {"name":"Preeti","country":"India","age":25},
//     {"name":"Sophie","country":"France","age":29},
//     {"name":"Harpreet","country":"India","age":48},
//     {"name":"Bob","country":"USA","age":21}
// ]

// traveller=traveller.sort(function(a,b){                       15.2
//     return parseInt(b.age)-parseInt(a.age);
// })
// console.log(traveller);

// console.log(traveller.sort((a,b)=>a.name.localeCompare(b.name))&&traveller.sort((c,d)=>c.country.localeCompare(d.country)));                    15.3


// console.log(traveller.sort(function(a,b){                         15.4
//     return parseInt(a.age)-parseInt(b.age);
// })&&traveller.sort((c,d)=>c.country.localeCompare(d.country)));

//function getPeopleByCountryAndSortByAge(traveller, country) {            15.5
    //     const filteredPeople = traveller.filter(traveller => traveller.country === country);
    //     const sortedPeople = filteredPeople.sort((a, b) => b.age - a.age);
    //     return sortedPeople;
    //   }
    // const country = "USA";
    // const sortedPeople = getPeopleByCountryAndSortByAge(traveller, country);
    // console.log(sortedPeople);



    // let student=[                                           Task16
    //     {"name":"Mary","marks":[72,65,55,71]}, //263
    //     {"name":"Anita","marks":[66,70,75,53]}, //264
    //     {"name":"Edward","marks":[44,54,64,58]}, //220
    //     {"name":"Thomas","marks":[62,55,65,81]},  //263
    //     {"name":"Robin","marks":[41,44,47,49]},   //181
    //     {"name":"Sophia","marks":[71,73,67,77]},  //288
    //     {"name":"Bruce","marks":[52,57,61,64]}    //234
    // ]

// function ab(num1){                                     16.1
//     let sum1=0;
//  for(i=0; i<num1.marks.length; i++){
//     sum1+=num1.marks[i];
// student.sum1=sum1;
//  }return sum1;
// }
// student.sort((a, b) =>ab(b) - ab(a));
// console.log(student);


//   const maxValues = student.map((student) => Math.max(...student.marks));
//   student.sort((a, b) => maxValues[a.name] - maxValues[b.name]);
//   console.log(student);



// const cutoff = 50;                                        16.3
// const countMarksGreaterThanCutoff = (person) => {
//   const marks = person.marks;
//   const count = marks.filter((m) => m > cutoff).length;
//   return count;
// };

// const sortByCount = (a, b) => {
//   if (countMarksGreaterThanCutoff(a) > countMarksGreaterThanCutoff(b)) {
//     return -1;
//   } else if (countMarksGreaterThanCutoff(a) < countMarksGreaterThanCutoff(b)) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// const sortedPerson = person.sort(sortByCount);

// console.log(sortedPerson);

// function marksGreaterThan(minTotal) {                       16.4
//     let greaterThanMinTotal = [];
//     for (let i=0;i<student.length;i++) {
//       const totalMarks = student[i].marks.reduce((a, b) => a + b);
//       if (totalMarks > minTotal) {
//         greaterThanMinTotal.push(student[i]);
//       }
//     }
//     greaterThanMinTotal.sort((a, b) => b.marks.reduce((a, b) => a + b) - a.marks.reduce((a, b) => a + b));
//     return greaterThanMinTotal;
//   }
//   let minTotal = 200;
//   let MinTotal = marksGreaterThan(minTotal);
//   console.log(MinTotal);
 

// function minScore(minScore) {                                         16.5
//     let withMinScore = student.filter(student => student.marks.every(marks=>marks>minScore));
//     withMinScore.sort((a, b) => a.name.localeCompare(b.name));
//     return withMinScore;
//   }
//   let a = minScore(50);
// console.log(a);


// function countABC(str) {                                Task17
//     let aCount = 0;
//     let bCount = 0;
//     let cCount = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === 'a') {
//         aCount++;
//       } else if (str[i] === 'b') {
//         bCount++;
//       } else if (str[i] === 'c') {
//         cCount++;
//       }
//     }
//     return {
//       aCount,
//       bCount,
//       cCount,
//     };
//   }
//   function sortStrings(strings) {
//     return strings.sort((a, b) => {
//       let aCount = countABC(a).aCount;
//       let bCount = countABC(b).aCount;
//       if (aCount === bCount) {
//         return a.length - b.length;
//       } else {
//         return aCount - bCount;
//       }
//     });
//   }
//    let strings =["aa","car","is","going"];
//    let sortedStrings = sortStrings(strings);
//   console.log(sortedStrings); 
//    strings =["q","w1","c2","cat","abcd","e34","a",];
//   sortedStrings = sortStrings(strings);
//   console.log(sortedStrings); 
//    strings =["bear","bell","cab","hello"];
//    sortedStrings = sortStrings(strings);
//   console.log(sortedStrings); 



    //   function extractNumberFromString(str) {              Task 18
    //     let numberString = str.replace(/\D/g, '');
    //     return parseInt(numberString);
    //   }
    //   function sortStringsByNumber(arr) {
    //     arr.sort(function(a, b) {
    //       let numA = extractNumberFromString(a);
    //       let numB = extractNumberFromString(b);
    //       return numA - numB;
    //     });
    //   }
    //   let stringsArray = ["c101", "mB24x", "a4b6n7", "zzz2Z"];
    //   sortStringsByNumber(stringsArray);
    //   console.log(stringsArray);
    //   stringsArray = ["8", "9", "10", "aX2"];
    //   sortStringsByNumber(stringsArray);
    //   console.log(stringsArray);
    //   stringsArray = ["b1b2b3a", "a125", "a80zz"];
    //   sortStringsByNumber(stringsArray);
    //   console.log(stringsArray);



//     function filterStrings(arr) {                    Task 19
//         var filteredArr = [];
//         for (var i = 0; i < arr.length; i++) {
//           var hasABC = false;
//           for (var j = 0; j < arr[i].length; j++) {
//             var currentChar = arr[i][j];
//             if (currentChar === 'a' || currentChar === 'b' || currentChar === 'c') {
//               hasABC = true;
//               break;
//             }
//           }
//           if (hasABC) {
//             filteredArr.push(arr[i]);
//           }
//         } 
//         return filteredArr;
//       }
//    let strings =["aa","car","is","going"];
//    let sortedStrings = filterStrings(strings);
//   console.log(sortedStrings); 
//    strings =["q","w1","c2","cat","abcd","e34","a",];
//   sortedStrings = filterStrings(strings);
//   console.log(sortedStrings); 
//    strings =["bear","bell","cab","hello"];
//    sortedStrings = filterStrings(strings);
//   console.log(sortedStrings);



// function filterStringsWithUppercase(strings) {                Task 20
//     return strings.filter(string => {
//       return /[A-Z]/.test(string);
//     });
//   }
//   let strings = ["name","Java","Master","tech"];
// let filteredStrings = filterStringsWithUppercase(strings);
// console.log(filteredStrings);

// strings = ["Hello","how","are","you"];
// filteredStrings = filterStringsWithUppercase(strings);
// console.log(filteredStrings);

// strings = ["JS","ANGULAR","REACT","HTML"];
// filteredStrings = filterStringsWithUppercase(strings);
// console.log(filteredStrings);

// strings = ["12","abc","##"];
// filteredStrings = filterStringsWithUppercase(strings);
// console.log(filteredStrings);


// let personArray=[                              Task 21
//     {"name":"Mary","city":"London"},
//     {"name":"Anita","city":"Paris" },
//     {"name":"Edward","city":"New York"},
//     {"name":"Thomas","city":"Rome"},
//     {"name":"Robin","city":"Seattle"},
//     {"name":"Sophia","city":"Los Angeles"},
//     {"name":"Bruce","city":"Delhi"}
// ]
// let continentArray=[
//     {"city":"London","continent":"Europe"},
//     {"city":"Delhi","continent":"Asia"},
//     {"city":"Seattle","continent":"North America"},
//     {"city":"Paris","continent":"Europe"},
//     {"city":"New York","continent":" North America"},
//     {"city":"Rome","continent":"Europe"},
//     {"city":"Bengaluru","continent":"Asia"},
//     {"city":"Los Angeles","continent":"North America"}
// ]


// function getContinent(personArray, continentArray, continent) {        21.1
//     const citiesToContinents = continentArray.reduce((acc, { city, continent }) => {
//       acc[city.toLowerCase()] = continent;
//       return acc;
//     }, {});
//     const personsInContinent = personArray.filter(person => {
//       const cityContinent = citiesToContinents[person.city.toLowerCase()];
//       return cityContinent === continent;
//     });
//     return personsInContinent;
//   }
//   let continent = "Europe";
// let personsInContinent = getContinent(personArray, continentArray, continent);
// console.log(personsInContinent);



// const continents = Object.fromEntries(continentArray.map(({ city,   continent }) => [city, continent]));                                     21.2
// personArray.sort((a, b) => continents[a.city].localeCompare(continents[b.city]));
// console.log(personArray);



                                //  JS-A2#4
                
 
// let arr=[2,4,6,3];                                        Task 1 a i
// let square=arr.map(function(element){
//     return element*element;
// });
// console.log(square);


// let arr=[89,25,-3,0,7,-12,-4];                            Task 1 a ii
// let abs=arr.map(function(element){
//     if(element>=0){
//         return element;
//     }
//     else{
//         return -1*element;
//     }
// })
// console.log(abs);


// let str=["hello","hi","XYZ","bye"];                    Task 1 a iii
// let str1=str.map(function(element){
//     return '<p>'+element+'</p>';
// })
// console.log(str1);


// let str=["bob","steve","hi","good","this"];              Task 1 a iv
// let maxlen=3;
// let arr=str.map(function(element){
//     if(element.length<=maxlen){
//         return element;
//     }
//     else{
//         return element.substring(0,maxlen);
//     }
// })
// console.log(arr);


// let product=[                                          Task 1 a v
//     {name:'Pepsi',qty:20,price:15},
//     {name:'coke',qty:15,price:10},
//     {name:'maggi',qty:10,price:12},
//     {name:'colgate',qty:6,price:60},
//     {name:'perk',qty:20,price:5},
// ]
// let arr=product.map(function(element){
//     let v1=element.qty*element.price;
//     let json={name:element.name,value:v1};
//     return json;
// });
// console.log(arr);


// let names=['James','Bob smith','Ana cook','Tim'];               Task 1 a vi
// let arr=names.map(function(element){  
//     return jsonelement(element);
// });
// function jsonelement(name){
//     let index=name.indexOf(' ');
//     let json={};
//     if(index<0){
//         json.firstName=name;
//         json.lastName='';
//     }
//     else{
//         json.firstName=name.substring(0,index);
//         json.lastName=name.substring(index+1);
//     }
//     return json;
// }
// console.log(arr);


// let num=[1,2,3,4,5];                                       Task 1 b i
// let arr=num.reduce(function(acc,curr){
//     let cube=curr*curr*curr;
//     return acc+cube;
// },0);
// console.log(arr);


// let num=[54,12,95,35,42,74,12,10];                      Task 1 b ii
// let max=num.reduce(function(acc,curr){
//     if(curr>acc){
//         return curr;
//     }
//     else{
//         return acc;
//     }
// },0);
// console.log(max);

// let str=['steve','bob','Ed','smith'];                   Task 1 b iii
// let val='';
// if(str.length>0){
//     val=str[0];
// }
// let smallest=str.reduce(function(acc,curr){
//     if(curr.length<acc.length){
//         return curr;
//     }
//     else{
//         return acc;
//     }
// },val);
// console.log(smallest);


// let product=[                                    Task 1 b iv             
//     {name:'Pepsi',qty:20,price:15},
//     {name:'coke',qty:15,price:10},
//     {name:'maggi',qty:10,price:12},
//     {name:'colgate',qty:6,price:60},
//     {name:'perk',qty:20,price:5},
// ];
// let totalSales=product.reduce(function(acc,curr){
//     let v = curr.qty * curr.price;
//     return v+acc; 
// },0);
// console.log(totalSales);


// let product=[                                   Task 1 b v          
//     {name:'Pepsi',qty:20,price:15},
//     {name:'coke',qty:15,price:10},
//     {name:'maggi',qty:10,price:12},
//     {name:'colgate',qty:6,price:60},
//     {name:'perk',qty:20,price:5},
// ];
// let maxprod=product.reduce(function(acc,curr){
//     let v = curr.qty * curr.price;
//     let accvalue=acc.qty * acc.price;
//     if(v>accvalue){
//         return curr;
//     }
//     else{
//         return acc;
//     } 
// });
// console.log(maxprod);


// function twice(num){                             Task 2
//     let arr1=num.map(function(element){
//         return element*2
//     })
//     console.log(arr1);
// }
// twice(arr=[4,8,12,20,6]);
// twice(arr=[10,8,6,4,2,25]);
// twice(arr=[8,7,9]);
// twice(arr=[5,10,15,5,10,15]);


// function square(num){                               Task 3                  
//     let arr1=num.map(function(element){
//         return element*element;
//     })
//     console.log(arr1);
// }
// square(arr=[4,8,12]);
// square(arr=[10,2,25,20,30]);
// square(arr=[8,7,9]);
// square(arr=[5,10,5,10,5,10]);


// let person=[                                       Task 7
//     {"name" : "Mark", "age" : 23},
//     {"name" : "Steve", "age" : 28},
//     {"name" : "Mary", "age" : 25},
//     {"name" : "Bill", "age" : 34}
// ]
// let arr1=person.map(function(element){
//     let a1=element.name;
//     let a2=element.age;
//     return (a1+" is "+a2+" years old ");
// })
//     console.log(arr1);

// let person=["Mark","James","Martha"];           Task 8
// let arr=person.map(function(element){
//     return "<li>"+element+"</li>"
// })
// console.log('<ul>'+arr+'</ul>');


// let employee=[                                   Task 9
//     {"id":101,"name":"Mark"},
//     {"id":105,"name":"Steve"},
//     {"id":78,"name":"James"}
// ]
// let arr=employee.map(function(element){
//     let v=element.id;
//     let v1=element.name;
//     return "<button onClick=clicked("+v+")>"+v1+"</button>";
// })
// console.log(arr);

// let employee=[                                        Task 10
//     {"id" : 101, "name" : "Mark"},
//     {"id" : 105, "name" : "Steve"},
//     {"id" : 78, "name" : "James"}
// ]
// let arr=employee.map(function(element){
//     let v=element.id;
//     let v1=element.name;
//     return "<p class=\'id"+v+"\'>"+v1+"</p>"
// })
// console.log(arr);


// let student=[                                         Task 11
//     {"name":"Mary","marks":72},
//     {"name":"Anita","marks":75},
//     {"name":"Thomas", "marks":81},
//     {"name":"Bruce", "marks":64}
// ]
// let arr=student.map(function(element){
//     let v=element.marks;
//     let v1=element.name;
//     return "<td>"+v1+"</td><td>"+v+"</td><button onClick=show(\'"+v1+"\')>Show More</button>";
// })
// console.log("<tr>"+arr+"</tr>")


// let person=[                                             Task 12
//     {"fname":"Jack","lname":"Smith","city":"London"},
//     {"fname":"Mary","lname":"Markle","city":"Amsterdam"},
//     {"fname":"Ed","lname":"May","city":"Paris"},
//     {"fname":"Tim","lname":"Gates","city":"Rome"}
// ]
// let arr=person.map(function(element){
//     return element.city;
// })
// console.log(arr);


// let person=[                                                  Task 13
//     {"fname":"Jack","lname":"Smith","city":"London"},
//     {"fname":"Mary","lname":"Markle","city":"Amsterdam"},
//     {"fname":"Ed","lname":"May","city":"Paris"},
//     {"fname":"Tim","lname":"Gates","city":"Rome"}
// ]
// let arr=person.map(function(element){
//     let fullname=element.fname+element.lname;
//     return person.fullname=fullname;
// })
// console.log(arr);

let num=[25,10,2,45,32];                          
// //Task a) compute the sum of the numbers
// let arr=num.reduce(function(acc,curr){
//     return acc+curr;
// },0);
// console.log(arr);

// // Task b) product of numbers
// let product=num.reduce(function(acc,curr){
//     return acc*curr;
// },3);
// console.log(product);

// Task c) max  numbers
// let max=num.reduce(function(acc,curr){
//     if(curr>acc){
//         return curr;
//     }
//     else{
//         return acc;
//     }
// });
// console.log(max);

// // Task d) min  numbers
// let min=num.reduce(function(acc,curr){
//     if(acc<curr){
//         return acc;
//     }
//     else{
//         return curr;
//     }
// });
// console.log(min);

// // Task e) count the numbers greater than 10
// let smallerLargerNumbers = (arr, num) => {
//    return arr.reduce((acc, val) => {
//       let { greater, smaller } = acc;
//       if(val > num){
//          greater++;
//       };
//       if(val < num){
//          smaller++;
//       };
//       return { greater, smaller };
//    }, {
//       greater: 0,
//       smaller: 0
//    });
// };
// console.log(smallerLargerNumbers(num, 3));


// let str=["Jack","Tom","Anna","Bob","Julia"];                   Task 15
// //Task 15 a) concatenate all the strings with :: between them
// let arr=str.reduce(function(acc,curr){
//     return acc+curr+"::";
// },'')
// console.log(arr);

// // Task 15 b) compute the sum of the length of all the strings
// let sumLength=str.reduce(function(acc,curr){
//     return acc+curr.length;
// },0)
// console.log(sumLength);

// // Task 15 c) concatenate the first character of all the strings.
// let firstChar=str.reduce(function(acc,curr){
//     return acc+curr[0];
// },'')
// console.log(firstChar);


// let person=[                                              Task 16
//     {"name" : "Mark", "age" : 23},
//     {"name" : "Steve", "age" : 28},
//     {"name" : "Mary", "age" : 25},
//     {"name" : "Bill", "age" : 34}
// ]
// // a) compute the sum of ages
// let arr=person.reduce(function(acc,curr){
//     return acc+curr.age;
// },0)
// console.log(arr);
// //b) Count the number of persons who are more than 27 years of age
// let count=person.reduce(function(acc,curr){
//     if(curr.age>27){
//         acc++;
//     }
//     return acc;
// },0);
// console.log(count);
// // c) Compute the youngest person
// let young=person.reduce(function(acc,curr){
//     if(acc.age>curr.age){
//         return curr;
//     }
//     else{
//         return acc;
//     }
// });
// console.log(young);
// // d) Compute the oldest person
// let old=person.reduce(function(acc,curr){
//     if(acc.age<curr.age){
//         return curr;
//     }
//     else{
//         return acc;
//     }
// });
// console.log(old);
// //e) Count the number of people whose name starts with 'M
// let start=person.reduce(function(acc,curr){
//     if(curr.name.startsWith('M')){
//         acc++;
//     }
//     return acc;
// },0);
// console.log(start);

// let lang=["Hello", "React", "Java", "Python", "Hibernate", "JavaScript"];
// let arr= lang.reduce(function(prev,curr){                      
//     return prev+"#"+curr;
// })
// console.log(arr);

// const countA = lang.reduce((accumulator, course) => {              Task 17.2
//  return accumulator + course.split('').filter(char => char === 'a').length;
// }, 0);
// console.log(countA);

// const longestString = lang.reduce((acc, curr) => {           Task 17.3
//     return acc.length > curr.length ? acc : curr;
//   }, "");
  
//   console.log(longestString);

// const countStringsWithSpecifiedCharacter = (lang, ch) => {          task 17.4
//     return lang.reduce((count, course) => {
//       return course.startsWith(ch) ? count + 1 : count;
//     }, 0);
//   };
// console.log(countStringsWithSpecifiedCharacter(lang, "A")); 
// console.log(countStringsWithSpecifiedCharacter(lang, "J")); 
// console.log(countStringsWithSpecifiedCharacter(lang, "R"));

// let person=[                                                Task18
//     {"name":"Jack","maths":55,"english":60,"science":62},
//     {"name":"Anita","maths":62,"english":65,"science":56},
//     {"name":"Thomas","maths":68,"english":72,"science":75},
//     {"name":"Steve","maths":51,"english":56,"science":68},
//     {"name":"Julia","maths":47,"english":77,"science":72},
//     {"name":"Mary","maths":72,"english":55,"science":81}
// ]
//  let count=person.reduce(function(acc,curr){
//         let totalMarks=curr.maths+curr.english+curr.science;
//         return acc+totalMarks;
//     },0);
//     console.log(count);


// let person=[                                             Task 19
//     {"fname":"Jack","lname":"Smith","city":"London"},
//     {"fname":"Mary","lname":"Markle","city":"London"},
//     {"fname":"Ed","lname":"May","city":"Paris"},
//     {"fname":"Tim","lname":"Gates","city":"Rome"} 
// ]
// let arr=person.reduce(function(prev,curr){            Task 19.1
//     if(curr.city=="London"){
//         return prev+1;
//     }
//     else{
//         return prev;
//     }
// },0)
// console.log(arr);

// const countPeopleInCity = (person, city) => {                Task 19.2
//     return person.reduce((count, person) => {
//       return person.city === city ? count + 1 : count;
//     }, 0);
//   };
//   const numberOfPeopleInLondon = countPeopleInCity(person, "London");
//   console.log(numberOfPeopleInLondon);

// const findCityByName = (person, firstName) => {               Task 19.3
//     return person.find((person) => person.fname === firstName).city;
//   };
//   const city = findCityByName(person, "Jack");
//   console.log(city);


// let car=[                                     Task 20
//     {model: "Swift Dzire VXi", make: "Maruti", fuel: "Diesel", colors: ["White", "Silver", "Blue", "Red"]},
//     {model: "Etios SMi", make: "Toyota", fuel: "Diesel", colors: ["White", "Grey", "Black"]},
//     {model: "City AXi", make: "Honda", fuel: "Petrol", colors: ["Grey", "Blue", "Black"]},
//     {model: "Swift DXi", make: "Maruti", fuel: "Diesel", colors: ["White", "Red", "Black"]},
//     {model: "Etios VXi", make: "Toyota", fuel: "Diesel", colors: ["White", "Silver", "Black", "Yellow"]},
//     {model: "City ZXi", make: "Honda", fuel: "Petrol", colors: ["Silver", "Blue", "Red"]},
//     {model: "Alto SXi", make: "Maruti", fuel: "Petrol", colors: ["White", "Red","Blue", "Yellow"]},
//     {model: "Alto VXi", make: "Maruti", fuel: "Petrol", colors: ["White", "Silver", "Yellow", "Black"]}
// ]
// const findCarModelsWithColor = function a(color) {
//     return car.filter((car) => car.colors.includes(color)).map((car) => car.model);
//   };
//   let carModelsWithWhiteColor = findCarModelsWithColor("White");
//   console.log(carModelsWithWhiteColor);


// let student=[
//     {"name":"Mary","marks":[72,65,55,71]},
//     {"name":"Anita","marks":[66,70,75,53]},
//     {"name":"Edward","marks":[44,54,64,58]},
//     {"name":"Thomas","marks":[62,55,65,81]},
//     {"name":"Robin","marks":[41,44,47,49]},
//     {"name":"Sophia","marks":[71,73,67,77]},
//     {"name":"Bruce","marks":[52,57,61,64]}
// ]

// const sortByTotalMarks = (a, b) => {                     21.1
//     return a.totalMarks - b.totalMarks;
//   };
//   const getStudentsWithTotalMarks = (student) => {
//     return student.reduce((students, student) => {
//       students.push({
//         name: student.name,
//         totalMarks: student.marks.reduce((total, mark) => total + mark),
//       });
//       return students;
//     }, []);
//   };
//   const studentsWithTotalMarks = getStudentsWithTotalMarks(student); 
//   studentsWithTotalMarks.sort(sortByTotalMarks);
//   console.log(studentsWithTotalMarks);


// const StudentsWithMarksAbove70 = (student) => {                21.2
//     return student.reduce((students, student) => {
//       const maxMarks = student.marks.reduce((max, mark) => Math.max(max, mark), 0);
//       if (maxMarks > 70) {
//         students.push({
//           name: student.name,
//           maxMarks: maxMarks,
//         });
//       }
//       return students;
//     }, []);
//   };
//   const studentsAbove70 = StudentsWithMarksAbove70(student);
//   const MarksAbove70 = studentsAbove70.length;
//   console.log(MarksAbove70);

// const getHighestTotalMarks = (student) => {               21.3
//     return student.reduce((max, student) => {
//       const totalMarks = student.marks.reduce((total, mark) => total + mark);
//       return totalMarks > max ? student : max;
//     },);
//   };
  
//   const studentWithHighestTotalMarks = getHighestTotalMarks(student);
  
//   console.log(studentWithHighestTotalMarks.name);

// const getStudentsWithTotalMarks = (student) => {             21.4
    //     return student.map((student) => {
    //       const totalMarks = student.marks.reduce((a, b) => a + b);
    //       return {
    //         name: student.name,
    //         totalMarks: totalMarks,
    //       };
    //     });
    //   };
      
    //   const studentsWithTotalMarks = getStudentsWithTotalMarks(student);
    //   console.log(studentsWithTotalMarks);

   // let student=[
    //     {"name":"Mary","maxmarks":72}, 
    //     {"name":"Anita","maxmarks":75},
    //     {"name":"Edward","maxmarks ":64},
    //     {"name":"Thomas","maxmarks ":81},
    //     {"name":"Robin","maxmarks ":49},
    //     {"name":"Sophia","maxmarks ":77},
    //     {"name":"Bruce","maxmarks ":64}
    // ]
    // const getMaxMarks = (person) => {
    //     return student.reduce((max, student) => {
    //       return student.maxmarks > max ? student.maxmarks : max;
    //     });
    //   }
    //   const maxMarks = student.map(getMaxMarks);
    //   console.log(maxMarks);





    // str += '<td><button class="editBtn" onclick=\'editProduct("' + ele.name + '")\'>Edit</button></td>';

 // function editProduct(name) {
    //     let existingPerson = Person.find((ele) => ele.name === name);

    //     if (existingPerson) {
    //         document.getElementById('personName').value = existingPerson.name;
    //         document.getElementById('personAge').value = existingPerson.age;
    //         document.getElementById('PersonCity').value = existingPerson.city;
    //         document.getElementById('PersonTech').value = existingPerson.Tech;
    //         document.getElementById('personName').readOnly = true;

    //         let addButton = document.querySelector('button');
    //         addButton.textContent = 'Update';
    //         addButton.onclick = function () {
    //             updateProduct(existingPerson);
    //         };
    //     }
    // }

