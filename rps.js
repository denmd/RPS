let val1=0;
let val2=0;
let start=0;
let n=0;
function  gstart(){
    document.getElementById("output").value="CLICK YOUR CHOICE !!!";
    document.getElementById("out").value="10 ROUNDS"
    start=1;

}

const handoptions=[
     "Paper.png","Rock.png"
     ,"Scissors.png"]
function buttonclick(val)
{
  
    if(start==0)
    {
        document.getElementById("output").value="CLICK THE START BUTTON !";
    }
    else{
    
        if(n<10){
          
          n++;
          document.getElementById("pick").src  = handoptions[val];
          compter_pick(val);
        }
        else{
          getclear();
       
        }
     
    }
 

}
 function compter_pick(val){
  
    var valu=Math.floor(Math.random()*3);
    document.getElementById("comp_pick").src=handoptions[valu];
    calculation(valu,val);
   

 }
 function calculation( x, y)
 {
    var you=y;
    var comp=x;
  if(comp==0 && you==1)
  { 
 
    document.getElementById("info").value="computer win";
    val2=val2+1;
    document.getElementById("score2").value=val2;
  }
  else if(comp==1 && you==0)
  {
    document.getElementById("info").value="wow you win";
    val1=val1+1;
    document.getElementById("score1").value=val1;
  }
  else if(comp==0 && you==2)
  {
    document.getElementById("info").value="wow you win";
    val1=val1+1;
    document.getElementById("score1").value=val1;
  }
  else if(comp==2 && you==0)
  {
    document.getElementById("info").value="computer win";
    val2=val2+1;
    document.getElementById("score2").value=val2;
  }
  else if(comp==1 && you==2)
  {
    document.getElementById("info").value=" computer win";
    val2=val2+1;
    document.getElementById("score2").value=val2;
  }
  else if(comp==2 && you==1)
  {
    document.getElementById("info").value=" wow you win";
    val1=val1+1;
    document.getElementById("score1").value=val1;
  }
  else{
    document.getElementById("info").value="oops! it's a tie";
  }
 }
function getclear() {
  document.getElementById("pick").src  = ""
  document.getElementById("comp_pick").src=""
  document.getElementById("info").value=""
  if(val1>val2)
  {
   document.getElementById("winner").value="CONGRATULATIONS! YOU WON";
  }
  else if(val1==val2)
  {
    document.getElementById("winner").value="...IT IS A DRAW... TRY AGAIN";
  }
  else{
    document.getElementById("winner").value="OHH! YOU LOST..TRY AGAIN";
  }

}
function againstart()
{
  document.getElementById("comp_pick").src=""
  document.getElementById("pick").src=""

  document.getElementById("score2").value="";
  document.getElementById("score1").value="";
  document.getElementById("output").value="";
  document.getElementById("out").value="";
  document.getElementById("winner").value="";
  document.getElementById("info").value="";
  val1=0;
  val2=0;
  n=0;
  start=0
}
 