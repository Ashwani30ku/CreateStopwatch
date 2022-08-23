var a
var ss=0 //Counter will be start from 0
function startstop(){
    ss=ss+1
    if(ss==1){
        start()
        document.getElementById("start").innerHTML="Stop"
    }else if(ss==2){
        document.getElementById("start").innerHTML="Start"
        ss=0
        stop()
    }
}
    //Start Function
    function start(){
        a=setInterval(timer, 10)
    }
    //Stop Function
    function stop(){
        clearInterval(a)
    }
    //For Start
    var milisec=0
    var sec=0
    var min=0
    var hour=0
    //For Stop
    var milisecout=0
    var secout=0
    var minout=0
    var hourout=0
    //Timer Function
    function timer(){
        //Main Timer
        milisecout=checktime(milisec)
        secout=checktime(sec)
        minout=checktime(min)
        hourout=checktime(hour)
        
        
       /* if(sec==0)
            {
            document.getElementById("seco").style.transform="rotate(0deg)";
            }*/

        milisec= ++milisec
        
        if(milisec==100){
            milisec=0
            sec=++sec
            if(sec==1)
            {
            document.getElementById("seco").style.transform="rotate(6deg)";
            }
            else if(sec==2)
            {
                document.getElementById("seco").style.transform="rotate(12deg)";
            }
            else if(sec==3)
            {
                document.getElementById("seco").style.transform="rotate(18deg)";
            }
            else if(sec==4)
            {
                document.getElementById("seco").style.transform="rotate(24deg)";
            }
            else if(sec==5)
            {
                document.getElementById("seco").style.transform="rotate(30deg)";
            }
            else if(sec==6)
            {
                document.getElementById("seco").style.transform="rotate(36deg)";
            }
            else if(sec==7)
            {
                document.getElementById("seco").style.transform="rotate(42deg)";
            }
            else if(sec==8)
            {
                document.getElementById("seco").style.transform="rotate(48deg)";
            }
            else if(sec==9)
            {
                document.getElementById("seco").style.transform="rotate(54deg)";
            }
            else if(sec==10)
            {
                document.getElementById("seco").style.transform="rotate(60deg)";
            }
            else if(sec==11)
            {
                document.getElementById("seco").style.transform="rotate(66deg)";
            }
            else if(sec==12)
            {
                document.getElementById("seco").style.transform="rotate(72deg)";
            }
            else if(sec==13)
            {
                document.getElementById("seco").style.transform="rotate(78deg)";
            }
            else if(sec==14)
            {
                document.getElementById("seco").style.transform="rotate(84deg)";
            }
            else if(sec==15)
            {
                document.getElementById("seco").style.transform="rotate(90deg)";
            }
            else if(sec==16)
            {
                document.getElementById("seco").style.transform="rotate(96deg)";
            }
            else if(sec==17)
            {
                document.getElementById("seco").style.transform="rotate(102deg)";
            }
            else if(sec==18)
            {
                document.getElementById("seco").style.transform="rotate(108deg)";
            }
            else if(sec==19)
            {
                document.getElementById("seco").style.transform="rotate(114deg)";
            }
            else if(sec==20)
            {
                document.getElementById("seco").style.transform="rotate(120deg)";
            }
            else if(sec==21)
            {
                document.getElementById("seco").style.transform="rotate(126deg)";
            }
            else if(sec==22)
            {
                document.getElementById("seco").style.transform="rotate(132deg)";
            }
            else if(sec==23)
            {
                document.getElementById("seco").style.transform="rotate(138deg)";
            }
            else if(sec==24)
            {
                document.getElementById("seco").style.transform="rotate(144deg)";
            }
            else if(sec==25)
            {
                document.getElementById("seco").style.transform="rotate(150deg)";
            }
            else if(sec==26)
            {
                document.getElementById("seco").style.transform="rotate(156deg)";
            }
            else if(sec==27)
            {
                document.getElementById("seco").style.transform="rotate(162deg)";
            }
            else if(sec==28)
            {
                document.getElementById("seco").style.transform="rotate(168deg)";
            }
            else if(sec==29)
            {
                document.getElementById("seco").style.transform="rotate(174deg)";
            }
            else if(sec==30)
            {
                document.getElementById("seco").style.transform="rotate(180deg)";
            }
            else if(sec==31)
            {
                document.getElementById("seco").style.transform="rotate(186deg)";
            }
            else if(sec==32)
            {
                document.getElementById("seco").style.transform="rotate(192deg)";
            }
            else if(sec==33)
            {
                document.getElementById("seco").style.transform="rotate(198deg)";
            }
            else if(sec==34)
            {
                document.getElementById("seco").style.transform="rotate(204deg)";
            }
            else if(sec==35)
            {
                document.getElementById("seco").style.transform="rotate(210deg)";
            }
            else if(sec==36)
            {
                document.getElementById("seco").style.transform="rotate(216deg)";
            }
            else if(sec==37)
            {
                document.getElementById("seco").style.transform="rotate(222deg)";
            }
            else if(sec==38)
            {
                document.getElementById("seco").style.transform="rotate(228deg)";
            }
            else if(sec==39)
            {
                document.getElementById("seco").style.transform="rotate(234deg)";
            }
            else if(sec==40)
            {
                document.getElementById("seco").style.transform="rotate(240deg)";
            }
            
            else if(sec==41)
            {
                document.getElementById("seco").style.transform="rotate(246deg)";
            }
            else if(sec==42)
            {
                document.getElementById("seco").style.transform="rotate(252deg)";
            }
            else if(sec==43)
            {
                document.getElementById("seco").style.transform="rotate(258deg)";
            }
            else if(sec==44)
            {
                document.getElementById("seco").style.transform="rotate(264deg)";
            }
            else if(sec==45)
            {
                document.getElementById("seco").style.transform="rotate(270deg)";
            }
            else if(sec==46)
            {
                document.getElementById("seco").style.transform="rotate(276deg)";
            }
            else if(sec==47)
            {
                document.getElementById("seco").style.transform="rotate(282deg)";
            }
            else if(sec==48)
            {
                document.getElementById("seco").style.transform="rotate(288deg)";
            }
            else if(sec==49)
            {
                document.getElementById("seco").style.transform="rotate(294deg)";
            }
            else if(sec==50)
            {
                document.getElementById("seco").style.transform="rotate(300deg)";
            }
            else if(sec==51)
            {
                document.getElementById("seco").style.transform="rotate(306deg)";
            }
            else if(sec==52)
            {
                document.getElementById("seco").style.transform="rotate(312deg)";
            }
            else if(sec==53)
            {
                document.getElementById("seco").style.transform="rotate(318deg)";
            }
            else if(sec==54)
            {
                document.getElementById("seco").style.transform="rotate(324deg)";
            }
            else if(sec==55)
            {
                document.getElementById("seco").style.transform="rotate(330deg)";
            }
            else if(sec==56)
            {
                document.getElementById("seco").style.transform="rotate(336deg)";
            }
            else if(sec==57)
            {
                document.getElementById("seco").style.transform="rotate(342deg)";
            }
            else if(sec==58)
            {
                document.getElementById("seco").style.transform="rotate(348deg)";
            }
            else if(sec==59)
            {
                document.getElementById("seco").style.transform="rotate(354deg)";
            }
            else if(sec==60)
            {
                document.getElementById("seco").style.transform="rotate(360deg)";
            }
            
            
        }
        if(sec==60){
            min=++min
            sec=0

            if(min==1)
            {
                document.getElementById("minut").style.transform="rotate(6deg)";
            }
            else if(min==2)
            {
                document.getElementById("minut").style.transform="rotate(12deg)";
            }
            else if(min==3)
            {
                document.getElementById("minut").style.transform="rotate(18deg)";
            }
            else if(min==4)
            {
                document.getElementById("minut").style.transform="rotate(24deg)";
            }
            else if(min==5)
            {
                document.getElementById("minut").style.transform="rotate(30deg)";
            }
            else if(min==6)
            {
                document.getElementById("minut").style.transform="rotate(36deg)";
            }
            else if(min==7)
            {
                document.getElementById("minut").style.transform="rotate(42deg)";
            }
            else if(min==8)
            {
                document.getElementById("minut").style.transform="rotate(48deg)";
            }
            else if(min==9)
            {
                document.getElementById("minut").style.transform="rotate(54deg)";
            }
            else if(min==10)
            {
                document.getElementById("minut").style.transform="rotate(60deg)";
            }
            else if(min==11)
            {
                document.getElementById("minut").style.transform="rotate(66deg)";
            }
            else if(min==12)
            {
                document.getElementById("minut").style.transform="rotate(72deg)";
            }
            else if(min==13)
            {
                document.getElementById("minut").style.transform="rotate(78deg)";
            }
            else if(min==14)
            {
                document.getElementById("minut").style.transform="rotate(84deg)";
            }
            else if(min==15)
            {
                document.getElementById("minut").style.transform="rotate(90deg)";
            }
            else if(min==16)
            {
                document.getElementById("minut").style.transform="rotate(96deg)";
            }
            else if(min==17)
            {
                document.getElementById("minut").style.transform="rotate(102deg)";
            }
            else if(min==18)
            {
                document.getElementById("minut").style.transform="rotate(108deg)";
            }
            else if(min==19)
            {
                document.getElementById("minut").style.transform="rotate(114deg)";
            }
            else if(min==20)
            {
                document.getElementById("minut").style.transform="rotate(120deg)";
            }
            else if(min==21)
            {
                document.getElementById("minut").style.transform="rotate(126deg)";
            }
            else if(min==22)
            {
                document.getElementById("minut").style.transform="rotate(132deg)";
            }
            else if(min==23)
            {
                document.getElementById("minut").style.transform="rotate(138deg)";
            }
            else if(min==24)
            {
                document.getElementById("minut").style.transform="rotate(144deg)";
            }
            else if(min==25)
            {
                document.getElementById("minut").style.transform="rotate(150deg)";
            }
            else if(min==26)
            {
                document.getElementById("minut").style.transform="rotate(156deg)";
            }
            else if(min==27)
            {
                document.getElementById("minut").style.transform="rotate(162deg)";
            }
            else if(min==28)
            {
                document.getElementById("minut").style.transform="rotate(168deg)";
            }
            else if(min==29)
            {
                document.getElementById("minut").style.transform="rotate(174deg)";
            }
            else if(min==30)
            {
                document.getElementById("minut").style.transform="rotate(180deg)";
            }
            else if(min==31)
            {
                document.getElementById("minut").style.transform="rotate(186deg)";
            }
            else if(min==32)
            {
                document.getElementById("minut").style.transform="rotate(192deg)";
            }
            else if(min==33)
            {
                document.getElementById("minut").style.transform="rotate(198deg)";
            }
            else if(min==34)
            {
                document.getElementById("minut").style.transform="rotate(204deg)";
            }
            else if(min==35)
            {
                document.getElementById("minut").style.transform="rotate(210deg)";
            }
            else if(min==36)
            {
                document.getElementById("minut").style.transform="rotate(216deg)";
            }
            else if(min==37)
            {
                document.getElementById("minut").style.transform="rotate(222deg)";
            }
            else if(min==38)
            {
                document.getElementById("minut").style.transform="rotate(228deg)";
            }
            else if(min==39)
            {
                document.getElementById("minut").style.transform="rotate(234deg)";
            }
            else if(min==40)
            {
                document.getElementById("minut").style.transform="rotate(240deg)";
            }
            
            else if(min==41)
            {
                document.getElementById("minut").style.transform="rotate(246deg)";
            }
            else if(min==42)
            {
                document.getElementById("minut").style.transform="rotate(252deg)";
            }
            else if(min==43)
            {
                document.getElementById("minut").style.transform="rotate(258deg)";
            }
            else if(min==44)
            {
                document.getElementById("minut").style.transform="rotate(264deg)";
            }
            else if(min==45)
            {
                document.getElementById("minut").style.transform="rotate(270deg)";
            }
            else if(min==46)
            {
                document.getElementById("minut").style.transform="rotate(276deg)";
            }
            else if(min==47)
            {
                document.getElementById("minut").style.transform="rotate(282deg)";
            }
            else if(min==48)
            {
                document.getElementById("minut").style.transform="rotate(288deg)";
            }
            else if(min==49)
            {
                document.getElementById("minut").style.transform="rotate(294deg)";
            }
            else if(min==50)
            {
                document.getElementById("minut").style.transform="rotate(300deg)";
            }
            else if(min==51)
            {
                document.getElementById("minut").style.transform="rotate(306deg)";
            }
            else if(min==52)
            {
                document.getElementById("minut").style.transform="rotate(312deg)";
            }
            else if(min==53)
            {
                document.getElementById("minut").style.transform="rotate(318deg)";
            }
            else if(min==54)
            {
                document.getElementById("minut").style.transform="rotate(324deg)";
            }
            else if(min==55)
            {
                document.getElementById("minut").style.transform="rotate(330deg)";
            }
            else if(min==56)
            {
                document.getElementById("minut").style.transform="rotate(336deg)";
            }
            else if(min==57)
            {
                document.getElementById("minut").style.transform="rotate(342deg)";
            }
            else if(min==58)
            {
                document.getElementById("minut").style.transform="rotate(348deg)";
            }
            else if(min==59)
            {
                document.getElementById("minut").style.transform="rotate(354deg)";
            }
            else if(min==60)
            {
                document.getElementById("minut").style.transform="rotate(360deg)";
            }
            
        }
        if(min==60){
            min=0
            hour=++hour

            if(hour==1)
            {
                document.getElementById("minut").style.transform="rotate(6deg)";
            }
            else if(hour==2)
            {
                document.getElementById("minut").style.transform="rotate(12deg)";
            }
            else if(hour==3)
            {
                document.getElementById("minut").style.transform="rotate(18deg)";
            }
            else if(hour==4)
            {
                document.getElementById("minut").style.transform="rotate(24deg)";
            }
            else if(hour==5)
            {
                document.getElementById("minut").style.transform="rotate(30deg)";
            }
            else if(hour==6)
            {
                document.getElementById("minut").style.transform="rotate(36deg)";
            }
            else if(hour==7)
            {
                document.getElementById("minut").style.transform="rotate(42deg)";
            }
            else if(hour==8)
            {
                document.getElementById("minut").style.transform="rotate(48deg)";
            }
            else if(hour==9)
            {
                document.getElementById("minut").style.transform="rotate(54deg)";
            }
            else if(hour==10)
            {
                document.getElementById("minut").style.transform="rotate(60deg)";
            }
            else if(hour==11)
            {
                document.getElementById("minut").style.transform="rotate(66deg)";
            }
            else if(hour==12)
            {
                document.getElementById("minut").style.transform="rotate(72deg)";
            }
            else if(hour==13)
            {
                document.getElementById("minut").style.transform="rotate(78deg)";
            }
            else if(hour==14)
            {
                document.getElementById("minut").style.transform="rotate(84deg)";
            }
            else if(hour==15)
            {
                document.getElementById("minut").style.transform="rotate(90deg)";
            }
            else if(hour==16)
            {
                document.getElementById("minut").style.transform="rotate(96deg)";
            }
            else if(hour==17)
            {
                document.getElementById("minut").style.transform="rotate(102deg)";
            }
            else if(hour==18)
            {
                document.getElementById("minut").style.transform="rotate(108deg)";
            }
            else if(hour==19)
            {
                document.getElementById("minut").style.transform="rotate(114deg)";
            }
            else if(hour==20)
            {
                document.getElementById("minut").style.transform="rotate(120deg)";
            }
            else if(hour==21)
            {
                document.getElementById("minut").style.transform="rotate(126deg)";
            }
            else if(hour==22)
            {
                document.getElementById("minut").style.transform="rotate(132deg)";
            }
            else if(hour==23)
            {
                document.getElementById("minut").style.transform="rotate(138deg)";
            }
            else if(hour==24)
            {
                document.getElementById("minut").style.transform="rotate(144deg)";
            }
            else if(hour==25)
            {
                document.getElementById("minut").style.transform="rotate(150deg)";
            }
            else if(hour==26)
            {
                document.getElementById("minut").style.transform="rotate(156deg)";
            }
            else if(hour==27)
            {
                document.getElementById("minut").style.transform="rotate(162deg)";
            }
            else if(hour==28)
            {
                document.getElementById("minut").style.transform="rotate(168deg)";
            }
            else if(hour==29)
            {
                document.getElementById("minut").style.transform="rotate(174deg)";
            }
            else if(hour==30)
            {
                document.getElementById("minut").style.transform="rotate(180deg)";
            }
            else if(hour==31)
            {
                document.getElementById("minut").style.transform="rotate(186deg)";
            }
            else if(hour==32)
            {
                document.getElementById("minut").style.transform="rotate(192deg)";
            }
            else if(hour==33)
            {
                document.getElementById("minut").style.transform="rotate(198deg)";
            }
            else if(hour==34)
            {
                document.getElementById("minut").style.transform="rotate(204deg)";
            }
            else if(hour==35)
            {
                document.getElementById("minut").style.transform="rotate(210deg)";
            }
            else if(hour==36)
            {
                document.getElementById("minut").style.transform="rotate(216deg)";
            }
            else if(hour==37)
            {
                document.getElementById("minut").style.transform="rotate(222deg)";
            }
            else if(hour==38)
            {
                document.getElementById("minut").style.transform="rotate(228deg)";
            }
            else if(hour==39)
            {
                document.getElementById("minut").style.transform="rotate(234deg)";
            }
            else if(hour==40)
            {
                document.getElementById("minut").style.transform="rotate(240deg)";
            }
            
            else if(hour==41)
            {
                document.getElementById("minut").style.transform="rotate(246deg)";
            }
            else if(hour==42)
            {
                document.getElementById("minut").style.transform="rotate(252deg)";
            }
            else if(hour==43)
            {
                document.getElementById("minut").style.transform="rotate(258deg)";
            }
            else if(hour==44)
            {
                document.getElementById("minut").style.transform="rotate(264deg)";
            }
            else if(hour==45)
            {
                document.getElementById("minut").style.transform="rotate(270deg)";
            }
            else if(hour==46)
            {
                document.getElementById("minut").style.transform="rotate(276deg)";
            }
            else if(hour==47)
            {
                document.getElementById("minut").style.transform="rotate(282deg)";
            }
            else if(hour==48)
            {
                document.getElementById("minut").style.transform="rotate(288deg)";
            }
            else if(hour==49)
            {
                document.getElementById("minut").style.transform="rotate(294deg)";
            }
            else if(hour==50)
            {
                document.getElementById("minut").style.transform="rotate(300deg)";
            }
            else if(hour==51)
            {
                document.getElementById("minut").style.transform="rotate(306deg)";
            }
            else if(hour==52)
            {
                document.getElementById("minut").style.transform="rotate(312deg)";
            }
            else if(hour==53)
            {
                document.getElementById("minut").style.transform="rotate(318deg)";
            }
            else if(hour==54)
            {
                document.getElementById("minut").style.transform="rotate(324deg)";
            }
            else if(hour==55)
            {
                document.getElementById("minut").style.transform="rotate(330deg)";
            }
            else if(hour==56)
            {
                document.getElementById("minut").style.transform="rotate(336deg)";
            }
            else if(hour==57)
            {
                document.getElementById("minut").style.transform="rotate(342deg)";
            }
            else if(hour==58)
            {
                document.getElementById("minut").style.transform="rotate(348deg)";
            }
            else if(hour==59)
            {
                document.getElementById("minut").style.transform="rotate(354deg)";
            }
            else if(hour==60)
            {
                document.getElementById("minut").style.transform="rotate(360deg)";
            }
        }
        
        document.getElementById("milisec").innerHTML=milisecout
        document.getElementById("sec").innerHTML=secout
        document.getElementById("min").innerHTML=minout
        document.getElementById("hour").innerHTML=hourout


        
    }
    //Checktime Function
    function checktime(a){
        if(a<10){
            a="0"+a
        }
        return a
    }
    //Reset Function
    function reset(){
        document.getElementById("milisec").innerHTML="00"
        document.getElementById("sec").innerHTML="00"
        document.getElementById("min").innerHTML="00"
        document.getElementById("hour").innerHTML="00"
    }