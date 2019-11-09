// function arra(n,t,x){
// for (j=0;j<t;j++){
//     for(i=0;i<n-1;i++){
//     if(x[i]=="B" && x[i+1]=="G"){
//     x[i+1]="B";
//     x[i]="G";
//     i++;
//     }
//     }
// }
    // }
    function arra(){
        var n=prompt("nombre etud");
        var t=prompt('time');
        var s=prompt("ligne");
        s=s.split("");
while (t>0)
       { s.map((x,y)=>{if(x=='B' && y=='G')
    {
       x='G';
       y='B'; 
    }
    }
        );
        t--;
    }

return s.toString();
    }
        arra(5,1,"BGGBG");
       
        var p = '{{}';
        var regex = RegExp('/(({)+({})*(})+)*/');
        regex.test(p);
        var found = paragraph.match(regex);
        
