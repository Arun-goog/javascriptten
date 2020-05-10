function backtohome(){
    firstdisplay.style.display="inline";
    seconddisplay.style.display="inline";
    answerdisplay.style.display="none"
    qns01.style.display= "none";
    qns02.style.display= "none";
    qns03.style.display= "none";
    qns04.style.display= "none";
    qns05.style.display= "none";
    qns06.style.display= "none";
    qns07.style.display= "none";
    qns08.style.display= "none";
    qns09.style.display= "none";
    qns10.style.display= "none";

    cleardata();
    clearanswear();
}

function primenumber(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns01.style.display= "inline";
}

function freqnumber(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns02.style.display= "inline";
}

function swapletter(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns03.style.display= "inline";
}

function findsquare(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns04.style.display= "inline";
}

function oddeven(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns05.style.display= "inline";
}

function truncatestring(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns06.style.display= "inline";
}

function largernum(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns07.style.display= "inline";
}

function arrangealpha(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns08.style.display= "inline";
}

function printjava(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns09.style.display= "inline";
}

function starpattern(){

    firstdisplay.style.display="none";
    seconddisplay.style.display="none";
    answerdisplay.style.display="inline";
    qns10.style.display= "inline";
}



let items=[];

function inputarray01(){
    
    var numdata ='';
    var boxvalue=document.getElementById('box01').value;
    items.push(boxvalue);
    
    for(i=0;i<items.length;i++){
        numdata += '  '+items[i]+' ' ;
    }
    document.getElementById("displaydata01").innerHTML =numdata;
    console.log(items);
    return false
}

function inputarray02(){
    
    var numdata ='';
    var boxvalue=document.getElementById('box02').value;
    items.push(boxvalue);
    
    for(i=0;i<items.length;i++){
        numdata += '  '+items[i]+' ' ;
    }
    document.getElementById("displaydata02").innerHTML =numdata;
    console.log(items);
    return false
}

function inputarray03(){
    
    var numdata ='';
    var boxvalue=document.getElementById('box03').value;
    items.push(boxvalue);
    
    for(i=0;i<items.length;i++){
        numdata += '  '+items[i]+' ' ;
    }
    document.getElementById("displaydata03").innerHTML =numdata;
    console.log(items);
    return false
}

function inputarray04(){
    
    var numdata ='';
    var boxvalue=document.getElementById('box04').value;
    items.push(boxvalue);
    
    for(i=0;i<items.length;i++){
        numdata += '  '+items[i]+' ' ;
    }
    document.getElementById("displaydata04").innerHTML =numdata;
    console.log(items);
    return false
}



function inputarray06(){
    
    var string1 ='';
    var truncString ='';
     string1=document.getElementById('box06a').value;
     length=document.getElementById('box06b').value;
    
   
    
    truncString = string1.substring(0,length);

    
    
    document.getElementById("displaydata06a").innerHTML=truncString;
    
    return false
}

function inputarray07(){
    
    
    var boxvalue01=document.getElementById('box7a').value;
    var boxvalue02=document.getElementById('box7b').value;
    
    console.log(boxvalue01);
    console.log(boxvalue02);

    var largernum = Math.max(boxvalue01,boxvalue02);
    

    console.log(largernum);


    
    
    document.getElementById("displaydata07a").innerHTML =largernum +"is larger";
    
    return false
}

function inputarray08(){
    
    var numdata ='';
    var boxvalue=document.getElementById('box08').value;
    items.push(boxvalue);
    
    for(i=0;i<items.length;i++){
        numdata += '  '+items[i]+' ' ;
    }
    document.getElementById("displaydata08").innerHTML =numdata;
    items.sort();
    console.log(items);
    return false
}





function cleardata(){

    items = [];
    document.getElementById("displaydata01").innerHTML='';
    document.getElementById("displaydata02").innerHTML='';
    document.getElementById("displaydata03").innerHTML='';
    document.getElementById("displaydata04").innerHTML='';
    document.getElementById("displaydata06").innerHTML='';
    document.getElementById("displaydata08").innerHTML='';
    document.getElementById("displaydata01a").innerHTML='';
    document.getElementById("displaydata02a").innerHTML='';
    document.getElementById("displaydata03a").innerHTML='';
    document.getElementById("displaydata04a").innerHTML='';
    document.getElementById("displaydata05a").innerHTML='';
    document.getElementById("displaydata06a").innerHTML='';
    document.getElementById("displaydata07a").innerHTML='';
    document.getElementById("displaydata08a").innerHTML='';
    document.getElementById("displaydata09a").innerHTML='';
    document.getElementById("displaydata10a").innerHTML='';
    
}

function clearanswear(){

    
    document.getElementById("displaydata01a").innerHTML='';
    document.getElementById("displaydata02a").innerHTML='';
    document.getElementById("displaydata03a").innerHTML='';
    document.getElementById("displaydata04a").innerHTML='';
    document.getElementById("displaydata05a").innerHTML='';
    document.getElementById("displaydata06a").innerHTML='';
    document.getElementById("displaydata07a").innerHTML='';
    document.getElementById("displaydata08a").innerHTML='';
    document.getElementById("displaydata09a").innerHTML='';
    document.getElementById("displaydata10a").innerHTML='';
    
    
}
// function on primenumber 



function checkprime(){

    var firstelement = 0;
    firstelement = items[0];
    

    if(firstelement===""){
    alert("enter valid num");
    
    }else if(firstelement==="1"){
               
        document.getElementById("displaydata01a").innerHTML=firstelement +' - is not a primenumber';

    }else if(firstelement==="2"){
        
        document.getElementById("displaydata01a").innerHTML=firstelement +' - is a primenumber';
    }else{
         for(var x=2;x<firstelement;x++)
            {
                if(firstelement%x===0)
                 { 
                     
                     document.getElementById("displaydata01a").innerHTML=firstelement +' - is not a primenumber';
                     return ;
                }
            }
        
        document.getElementById("displaydata01a").innerHTML=firstelement +' - is a primenumber';
    }
}



// function on frequent number in an array
function checkfrequent(){
    
    var mostFrequent =1;
    var tempCount=0;
    var item;

    for(var i=0;i<items.length;i++){
        for(var j=0;j<items.length;j++){
            if(items[i]==items[j])
            tempCount++;
            if(mostFrequent<tempCount){
                mostFrequent=tempCount;
                item=items[i];
            }
        }

        tempCount = 0;
    
    }
    
    document.getElementById("displaydata02a").innerHTML='Most frequent element = '+item +'  ['+mostFrequent +'times]';


}


// swapping case

function swapCase(){
    var newLetters='';
    for(var i=0;i<items.length;i++){
        if(items[i]===items[i].toLowerCase()){
            newLetters += items[i].toUpperCase();

        }else {
            newLetters += items[i].toLowerCase();
        }
    }

    document.getElementById("displaydata03a").innerHTML=newLetters;
}




// sum of squares

function sumofSquares(){

    var sumSquare=0 ;
    for(i=0;i<items.length;i++){

        sumSquare += items[i]*items[i];
    }

    document.getElementById("displaydata04a").innerHTML=sumSquare;
}

// 0-15 odd or even

function findoddeven(){

    var dataprint = 0;

    for(i=0;i<=15;i++){

        if(i===0){

        
        dataprint = i +' is neither nor odd <br>'
        
        
        }else if(i%2===0){
            dataprint += i +' is even <br>'
            
            

        }else{

            dataprint += i +' is odd <br>'
            
            
        }
    }
    document.getElementById("displaydata05a").innerHTML=dataprint;
}
// print java triangle

function alphabatical(){

    var alpha ='';

    for(i=0;i<items.length;i++){
        alpha +=items[i]+' ';
    }

    document.getElementById("displaydata08a").innerHTML= alpha;
}

function trianglejava(){

    var javastring ='javascript';
    var javachar='';

    for(i=0;i<javastring.length;i++){
        
        for(j=0;j<=i;j++){
            javachar += javastring.charAt(j);
        }
        javachar +='\n <br>';
    }
        
    document.getElementById("displaydata09a").innerHTML=javachar;
}

// print star pattern
function printPattern(){

    var starpatern='';
    for(i=0;i<8;i++){
        for(j=0;j<=i;j++){
            starpatern += '*';           

        }
        starpatern +='\n <br>';           
    }
    document.getElementById("displaydata10a").innerHTML=starpatern ;
    

    }
