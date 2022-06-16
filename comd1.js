var l=0;var n=0;var m=0;var flag=0;var a=[0,0,0,0,0,0,0,0,0,0,0]; var b=["","","","","","","","","",""];
var d=[0,0,0,0,0,0,0,0,0,0,0];var v4 = 0;var v5 = "";var getText = document.getElementById("getText");
var all=["","","","","","","","","","",""];
var getData = document.getElementById("getData");

var canvas = document.getElementById('display');
var display = document.getElementById("display").getContext("2d");
ctx=canvas.getContext('2d');
var hoz = 900;var vert = 500;display.canvas.height = vert;display.canvas.width = 1350;
ctx.font = "30px serif";
var v6 = 0;var v7 = 50;var text=1;var v9=100;var tzol=false;

var aa=1, bb=1, cc=1, dd=1; tzol13 = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var solarDay = 0, solarDay20 = 0, solarHouse = 1, solarHouse13 = 1; var seasnAcc=0, seasn13=0, seasn20=0, seasn260=0;
var spot = 0,search=0;var x,y;

var tz1  =  [ 1,  8,  2,  9,  3, 10,  4, 11,  5, 12,  6, 13,  7],   
    tz2  =  [ 2,  9,  3, 10,  4, 11,  5, 12,  6, 13,  7,  1,  8],
    tz3  =  [ 3, 10,  4, 11,  5, 12,  6, 13,  7,  1,  8,  2,  9],  
    tz4  =  [ 4, 11,  5, 12,  6, 13,  7,  1,  8,  2,  9,  3, 10],
    tz5  =  [ 5, 12,  6, 13,  7,  1,  8,  2,  9,  3, 10,  4, 11], 
    tz6  =  [ 6, 13,  7,  1,  8,  2,  9,  3, 10,  4, 11,  5, 12],
    tz7  =  [ 7,  1,  8,  2,  9,  3, 10,  4, 11,  5, 12,  6, 13], 
    tz8  =  [ 8,  2,  9,  3, 10,  4, 11,  5, 12,  6, 13,  7,  1],
    tz9  =  [ 9,  3, 10,  4, 11,  5, 12,  6, 13,  7,  1,  8,  2], 
   tz10  =  [10,  4, 11,  5, 12,  6, 13,  7,  1,  8,  2,  9,  3],
   tz11  =  [11,  5, 12,  6, 13,  7,  1,  8,  2,  9,  3, 10,  4],   
   tz12  =  [12,  6, 13,  7,  1,  8,  2,  9,  3, 10,  4, 11,  5],
   tz13  =  [13,  7,  1,  8,  2,  9,  3, 10,  4, 11,  5, 12,  6], 
   tz14  =  [ 1,  8,  2,  9,  3, 10,  4, 11,  5, 12,  6, 13,  7],
   tz15  =  [ 2,  9,  3, 10,  4, 11,  5, 12,  6, 13,  7,  1,  8], 
   tz16  =  [ 3, 10,  4, 11,  5, 12,  6, 13,  7,  1,  8,  2,  9],
   tz17  =  [ 4,  11, 5, 12,  6, 13,  7,  1,  8,  2,  9,  3, 10], 
   tz18  =  [ 5, 12,  6, 13,  7,  1,  8,  2,  9,  3, 10,  4, 11],
   tz19  =  [ 6,  13, 7,  1,  8,  2,  9,  3, 10,  4, 11,  5, 12], 
   tz20  =  [ 7,  1,  8,  2,  9,  3, 10,  4, 11,  5, 12,  6, 13];

var piece1 = new Image();var piece2 = new Image();var piece3 = new Image();var piece4 = new Image();
var piece5 = new Image();var piece6 = new Image();var piece7 = new Image();
var board = new Image();board.src = "images/black.png";
piece1.src = "images/piece1.png";piece2.src = "images/piece2.png";piece3.src = "images/piece3.png";
piece4.src = "images/piece4.png";piece5.src = "images/piece5.png";piece6.src = "images/piece6.png";
piece7.src = "images/piece7.png";
var solarDay = 1, solarDay20 = 0, solarHouse = 1, solarHouse13 = 1;
var seasnAcc=0, seasn13=0, seasn20=0, seasn260=0; var tz13=0;
var tx = 43,ty = 37;ux = 88,uy = 71,vx = 132,vy = 108,wx = 171,wy = 146,xx = 215,xy = 178,yx = 258,yy = 212,zx = 303,zy = 251;

function drawPieces(t1,t2,u1,u2,v1,v2,w1,w2,x1,x2,y1,y2,z1,z2) {
  display.drawImage(piece1, 0, 0, 200, 138, t1, t2, 200, 138);
  display.drawImage(piece2, 0, 0, 200, 138, u1, u2, 200, 138);
  display.drawImage(piece3, 0, 0, 200, 138, v1, v2, 200, 138);
  display.drawImage(piece4, 0, 0, 200, 138, w1, w2, 200, 138);
  display.drawImage(piece5, 0, 0, 200, 138, x1, x2, 200, 138);
  display.drawImage(piece6, 0, 0, 200, 138, y1, y2, 200, 138);
  display.drawImage(piece7, 0, 0, 200, 138, z1, z2, 200, 138);
}

function showChar(e)
{
 getText.innerText = "\n\n"+e.charCode+" "+String.fromCharCode(e.charCode);
 v4=e.charCode;
 return(v4);
function showAnyChar(event) {
if(event.keyCode==37)xx=xx-1;if(event.keyCode==39)xx=xx+1;return(xx)}
}
function both(e)
{
 if(tzol==true){
  var display = document.getElementById("display").getContext("2d");
  var hoz = 900;var vert = 500;display.canvas.height = vert;display.canvas.width = 1300;
  display.drawImage(board, 0, 0, 1300, 500, 30, 30, 1300, 500);

  while(aa!=solarDay)
  {
   aa=aa+1;bb=bb+1;cc=cc+1;dd=dd+1;if(bb==261){bb=1;}if(cc==21){cc=1;}if(dd==14){dd=1;} 
  } 
  if(cc==1)tzol13=tz1;if(cc==2)tzol13=tz2;if(cc==3)tzol13=tz3;if(cc==4)tzol13=tz4;if(cc==5)tzol13=tz5;if(cc==6)tzol13=tz6;
  if(cc==7)tzol13=tz7;if(cc==8)tzol13=tz8;if(cc==9)tzol13=tz9;if(cc==10)tzol13=tz10;if(cc==11)tzol13=tz11;
  if(cc==12)tzol13=tz12;if(cc==13)tzol13=tz13;if(cc==14)tzol13=tz14;if(cc==15)tzol13=tz15;if(cc==16)tzol13=tz16;
  if(cc==17)tzol13=tz17;if(cc==18)tzol13=tz18;if(cc==19)tzol13=tz19;if(cc==20)tzol13=tz20;
  if(dd==tzol13[0])spot=1;if(dd==tzol13[1])spot=2;if(dd==tzol13[2])spot=3;if(dd==tzol13[3])spot=4;if(dd==tzol13[4])spot=5;
  if(dd==tzol13[5])spot=6;if(dd==tzol13[6])spot=7;if(dd==tzol13[7])spot=8;if(dd==tzol13[8])spot=9;if(dd==tzol13[9])spot=10;   
  if(dd==tzol13[10])spot=11;if(dd==tzol13[11])spot=12;if(dd==tzol13[12])spot=13;
  if(aa==solarDay)
  {
   solarDay=solarDay+28; 
   ctx.fillstyle="#202020"; ctx.font = "20px serif";                      //008000...ff9900
   ctx.fillText(aa+" "+bb+" "+cc+" "+dd+" "+spot, 900, 30);               // ctx.fillText(tz13,900,60);
   tx = 45 + cc * 42,86; ty = 35 + spot * 35.71;
  }
  seasnAcc=seasnAcc+73;                                                     // seasnAcc gets larger and larger.
  seasn260=260*((seasnAcc/260)-Math.floor(seasnAcc/260));                   // place on the 260.
  if(seasn260-Math.floor(seasn260)>>0.5)seasn260=Math.floor(1+seasn260)     // but round to the nearest integer.
  seasn20=20*((seasnAcc/20)-Math.floor(seasnAcc/20));                       // place on the 20.
  if(seasn20-Math.floor(seasn20)>>0.5)seasn20=Math.floor(1+seasn20);        // but round 20 to the nearest integer.
  var count13 = 0, count20 = 0, count=0;
  seasn13 = 13 * ((seasnAcc/13)-Math.floor(seasnAcc/13));                   // place on the 13.
  if(seasn13-Math.floor(seasn13)>>0.5)seasn13=Math.floor(1+seasn13);        // but round 13 to the nearest integer.
  var count20 = seasn20; var count13 = seasn13;

  ux = 45 + seasn20 * 42.86; uy = 35 + seasn13 * 35.71;
  drawPieces(tx, ty, ux, uy, vx, vy, wx, wy, xx, xy, yx, yy, zx, zy);   //900... 500 ... 14...21
 }
 showChar(e); a[n] = v4;
 if(!(((a[n]<=58)&&(a[n]>=48))||(a[n]==48))){flag=1;}
 all[m]=String.fromCharCode(a[0],a[1],a[2],a[3],a[4],a[5]);
 if(flag===0){d[m]=parseFloat(all[m]);d[l]=d[m];l=l+1;}
 b[n] = String.fromCharCode(v4);n=n+1;
 if(v4===32){a=[0,0,0,0,0,0,0,0,0,0,0];b=["","","","","","","","","",""];n=0;m=m+1;flag=0;}
 if(v4===13) 
 {
  getData.value="";
  if(text==1){
   getText.innerText = all[0]+" "+all[1]+" "+all[2]+" "+all[3]+" "+all[4]+" "+all[5]+" "+all[6]+" "+all[7]+" "+d[0]+" "+d[1];
   ctx.fillText(getText.innerText, 20, v7);
  }
  a=[0,0,0,0,0,0,0,0,0,0,0];b=["","","","","","","","","",""];n=0;m=0;flag=0;
  d[0]=d[0]+1; 
  v7=v7+30;
 }
 if(b[0]==="a")
 {
  if(b[1]==="a")
  {
   if(b[2]==="a")
   {
    if(b[3]==="a")
    {
     if(text!=1)
     {
      tzol=false;
      text=1;d[0]=0;
      var canvas = document.getElementById('display');
      var display = document.getElementById("display").getContext("2d");
      ctx=canvas.getContext('2d');
      var hoz = 900;var vert = 500;display.canvas.height = vert;display.canvas.width = 1300;
      ctx.font = "30px serif";
      v7=50;
     }
     ctx.fillText("Four letters all a", 20, v7);v7=v7+30;
    }
    else if(b[3]=="b")
    {
     v6=1;
    }
   } 
  }
 }
 else if(b[0]==="b"){}
 else if(b[0]==="t")
 {
  if(b[1]==="z")
  {
   if(b[2]==="o")
   {
    if(b[3]==="l")
    {
      tzol=true;
      text=0;
      var display = document.getElementById("display").getContext("2d");
      var hoz = 900;var vert = 500;display.canvas.height = vert;display.canvas.width = 1300;
      display.drawImage(board, 0, 0, 1300, 500, 30, 30, 1300, 500);
      ctx.fillstyle="ff9900";     //008000...ff9900
      ctx.fillRect(457,314,10,10);
      ctx.fillRect(500,350,10,10);
      ctx.fillRect(30,30,10,10);
      ctx.fillstyle="#202020";     //008000...ff9900
      ctx.font = "20px serif";
//      ctx.fillText("13", 900, 20);
     }
    }
   }
  }
 return(v6);
}
