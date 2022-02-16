     //把計算機抓出操作ＤＯＭ
     let cal = document.getElementById('cal');

     let buttons = Array.prototype.slice.apply(document.getElementsByClassName('buttons'));

     
     //用eval函數處理四則運算
     buttons.forEach(function(button){
        button.addEventListener('click', function(e)
            {     
         switch(e.target.innerText){
         case 'AC':
             cal.innerText = '';
             break;
         case '=':
             try {
                 cal.innerText = eval(cal.innerText);
             } catch {
                 cal.innerText = "Error"
             }
             break;
         case '←':
             if (cal.innerText){
                cal.innerText = cal.innerText.slice(0, -1);
             }
             break;

          default:
             cal.innerText += e.target.innerText;

           }


           
     let result = cal.innerText;
     let first = cal.innerText.slice(0,1);
     let second= cal.innerText.slice(1,2);
     let last  = cal.innerText.slice(-1);
     let last2 = cal.innerText.slice(-2);

     
     
     
     

     if(first=="+" || first=="-" || first=="*" || first=="/" || first=="."){
         cal.innerText= cal.innerText.slice(0,-1);
     }

  
     if(first==0 && result.length>1 && second!="." && result=="0"){
         cal.innerText= cal.innerText.slice(0,-1);
     }

     
     
     //判斷0後面接數字/
     if(first==0 && result.indexOf("01")!==-1 || first==0 && result.indexOf("02")!==-1 || first==0 && result.indexOf("03")!==-1 || first==0 && result.indexOf("04")!==-1|| first==0 && result.indexOf("05")!==-1){
         cal.innerText = cal.innerText.replace(last2, last);

     }

     if(first==0 && result.indexOf("06")!==-1 || first==0 && result.indexOf("07")!==-1 || first==0 && result.indexOf("08")!==-1 || first==0 && result.indexOf("09")!==-1|| first==0 && result.indexOf("00")!==-1){
         cal.innerText = cal.innerText.replace(last2, last);

     }

    
     //判斷小數點   
    
    

    if(result.indexOf("+")!==-1 || result.indexOf("-")!==-1 || result.indexOf("*")!==-1 || result.indexOf("/")!==-1){
        if(result.indexOf(".0.")!==-1 || result.indexOf(".1.")!==-1 ||result.indexOf(".3.")!==-1 || result.indexOf(".4.")!==-1 || result.indexOf(".5.")!==-1){
            cal.innerText= cal.innerText.slice(0,-1);

        }

        if(result.indexOf(".6.")!==-1 || result.indexOf(".7.")!==-1 ||result.indexOf(".8.")!==-1 || result.indexOf(".9.")!==-1 ){
            cal.innerText= cal.innerText.slice(0,-1);

        }
        
    }else{
         if(result.indexOf(".1")!==-1 && last=="." || result.indexOf(".2")!==-1 && last=="."  || result.indexOf(".3")!==-1 && last=="."  ||result.indexOf(".4")!==-1 && last=="."){
            cal.innerText= cal.innerText.slice(0,-1);
         }
        
         if(result.indexOf(".5")!==-1 && last=="."  || result.indexOf(".6")!==-1 && last=="." || result.indexOf(".7")!==-1 && last=="." ||result.indexOf(".8")!==-1 && last=="." ||result.indexOf(".9")!==-1 && last=="." ||result.indexOf(".0")!==-1 && last=="."){
             cal.innerText= cal.innerText.slice(0,-1);
         }
    }
    
    
    if(result.indexOf("+.")!=-1||result.indexOf("-.")!=-1||result.indexOf("*.")!=-1||result.indexOf("/.")!=-1){
     
         
         cal.innerText = cal.innerText.slice(0, -1);
     } 

     if(result.indexOf(".+")!=-1||result.indexOf(".-")!=-1||result.indexOf(".*")!=-1||result.indexOf("./")!=-1){
     
     cal.innerText = cal.innerText.slice(0, -1);
     
     }

     
     if(result.indexOf("++")!=-1||result.indexOf("--")!=-1||result.indexOf("**")!=-1||result.indexOf("//")!=-1){
     
     cal.innerText = cal.innerText.slice(0, -1);
     
     } 

     if(result.indexOf("+-")!=-1||result.indexOf("+*")!=-1||result.indexOf("+/")!=-1){
     
    
     cal.innerText = cal.innerText.replace(last2,last);
     } 

     
     if(result.indexOf("-+")!=-1||result.indexOf("-*")!=-1||result.indexOf("-/")!=-1){
     
     cal.innerText = cal.innerText.replace(last2, last);
     } 

     if(result.indexOf("*+")!=-1||result.indexOf("*-")!=-1||result.indexOf("*/")!=-1){
     
     cal.innerText = cal.innerText.replace(last2, last);
     } 

     if(result.indexOf("/+")!=-1||result.indexOf("/-")!=-1||result.indexOf("/*")!=-1){
     
     cal.innerText = cal.innerText.replace(last2, last);
     } 

     if(result.indexOf("..")!=-1){
         
         cal.innerText = cal.innerText.slice(0, -1);
                 }  
                 

     
 });
});