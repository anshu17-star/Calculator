let string="";
let button=document.querySelectorAll(".btn");
button.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(btn.innerText=="="){
            try {
                string=eval(string);
                document.querySelector(".input").value=string;
            }
            catch (error) {
                document.querySelector(".input").value="Error";
            }
        }
        else if(btn.innerText=="C"){
            string="";
            document.querySelector(".input").value=string;
        }
        else if(btn.innerText=="⌫"){
            string=string.slice(0,string.length-1);
            document.querySelector(".input").value=string;
        }
        else if(btn.innerText=="%"){
            var i=1;
            let count=0;
            while(i<string.length){
                if(string[string.length-i]=="+"||string[string.length-i]=="-"||string[string.length-i]=="*"||string[string.length-i]=="/"){
                    count+=1;
                    if(count==1){
                        var index=Number(string.length-i);
                    }
                }
                if(count==2){
                    break;
                }
                i+=1;
            }
            let num=string.slice(index,index+1);
            let num3=string.slice(index+1,string.length);
            let num1=string.slice(0,index);
            if(num=="+"||num=="-"){
            let num2=eval(num1)
            let num4=(parseFloat(num2)*parseFloat(num3))/100;
            let num5=num2+num+num4;
            console.log(num5);
            console.log(num);
            console.log(num2);
            console.log(num3);
            string=eval(num5);
            }
            
            else if(num=="*"){
                if(count==2){
                let num6=string.slice(string.length-i+1,index);
                let num7=string.slice(0,string.length-i);
                let num8=eval(num7);
                let num9=(parseFloat(num6)*parseFloat(num3))/100;
                let num10=string.slice(string.length-i,string.length-i+1)
                let num11=num8+num10+num9;
                string=eval(num11);
            }
                else{
                    string=(num1*num3)/100;
                }
            }
            else if(num=="/"){
                if(count==2){
                let num12=string.slice(string.length-i+1,index);
                let num13=string.slice(0,string.length-i);
                let num14=eval(num13);
                let num15=(parseFloat(num12)*100)/parseFloat(num3);
                let num16=string.slice(string.length-i,string.length-i+1)
                let num17=num14+num16+num15;
                string=eval(num17);
                }
                else{
                    string=(num1*100)/num3;
                }
            }
            else{
                string=string/100;
            }
            document.querySelector(".input").value=string;
        }
        else{
            if(btn.innerText=="+"||btn.innerText=="-"||btn.innerText=="*"||btn.innerText=="/"){
                if(string[string.length-1]=="+"||string[string.length-1]=="-"||string[string.length-1]=="*"||string[string.length-1]=="/"){
                    let str1=string.slice(0,string.length-1);
                    string=str1+btn.innerText;
                }
                else{
                    string=string+btn.innerText;
                }
            }
            else{
                string=string+btn.innerText;
            }      
        document.querySelector(".input").value=string;
        }
    });
});
