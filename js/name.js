//根据id获取对应的元素
function my$(id) {
    return document.getElementById(id);
}
//getInnerTxt
function getInnerTxt(element) {
    if(typeof element.textContent==="undefined"){
        //IE浏览器
        return element.innerText;
    }else{
        return element.textContent;
    }
}
//li的backGroundColor
function backGroundColor(element){
    for (var i=0;i<element.length;i++){
        element[i].removeAttribute("class");
        if((i>=0&&i<=3)||(i>=8&&i<=11)){
            element[i].className="bc1";
        }else if((i>=16&&i<=19)||(i>=24&&i<=27)){
            element[i].className="bc2";
        }else if((i>=32&&i<=35)||(i>=40&&i<=43)){
            element[i].className="bc3";
        }else if((i>=48&& i<=51)||(i>=56&&i<=59)){
            element[i].className="bc4";
        }else if((i>=64&&i<=67)||(i>=72&&i<=74)){
            element[i].className="bc5";
        }else if((i>=80&&i<=83)||(i>=88&&i<=91)||(i>=96&&i<=99)){
            element[i].className="bc6";
        }else if((i>5&&i<7)||(i>=13&&i<=15)||(i>=21&& i<=23)){
            element[i].className="bc7";
        }else if((i>=29&&i<=31)||(i>=37&&i<=39)||(i>=45&& i<=47)){
            element[i].className="bc8";
        }else if((i>=53&&i<=55)||(i>=61&&i<=63)||(i >=69&&i<=71)){
            element[i].className="bc9";
        }else if((i>=77&&i<=79)||(i>=85&&i<=87)||(i==93)||(i==94)){
            element[i].className="bc10";
        }else if(i==75){
            element[i].className="bc01";
        }else if(i==101||i==102||i==103||i==95||i==5||i==7){
            element[i].className="bc02";
        }else {
            element[i].className="bc";
        };
    }
}
//clearInterval
function clearAllInt(setId1,setId2,setId3,setId4){
    clearInterval(setId1);
    clearInterval(setId2);
    clearInterval(setId3);
    clearInterval(setId4);
}
//setClass
function setClass(element,elementO,txtValue){
    if(txtValue==""){
        txtValue=1;
    }
    var elementLenght=0;
    for(var key in elementO) {
        elementLenght++;
    }
    var numArr=[];
    for(var i=0;i<txtValue;i++) {
        var num = Math.floor((Math.random() * elementLenght));
        while (numArr.indexOf(num) != -1) {
            num = Math.floor((Math.random() * elementLenght));
        }
        numArr.push(num);
    }
    var elementnum=0;
    for(var key in elementO){
        for(var z=0;z<numArr.length;z++){
            if(elementnum==numArr[z]){
                for(var m=0;m<(elementO[key]).length;m++){
                    element[((elementO[key])[m])].className="cls"
                }
            }
        }
        elementnum++;
    }
}
//setbtn
function btnValue(novalue,btnoneArr,btntwoArr){
    for(var i=0;i<btnoneArr.length;i++){
        if(i!=novalue&&(btnoneArr[i].value=="暂停"||btntwoArr[i]!=='')){
            btnoneArr[i].value="点我";
            btntwoArr[i].value="";
        }
    }
}

var btnArrone=[my$("btn1"),my$("btn3"),my$("btn5"),my$("btn7")];
var btnArrtwo=[my$("btn2"),my$("btn4"),my$("btn6"),my$("btn8")];

var setId1=null;
my$("btn1").onclick=function(){
    clearAllInt(setId1,setId2,setId3,setId4);
    btnValue(0,btnArrone,btnArrtwo)

    var txtValue=my$("btn2").value;
    var lis=document.getElementsByTagName("li");

    setId1=setInterval(function(){
        backGroundColor(lis);
        var arr=[];
        if(txtValue==""){
            var  num = Math.floor((Math.random() * (lis.length)));
            while(num==4||num==7||num==5||num==12||num==20||num==28||num==36||num==44||num==52||num==60||num==68||num==76||num==84||num==92||num==95||num==100||num==101||num==102||num==103){
                num = Math.floor((Math.random() * (lis.length)));
            }
            arr.push(num);
        }else if(txtValue-parseInt(txtValue)>0||txtValue-parseInt(txtValue)<0||txtValue>85||txtValue<=0){
            my$("btn1").value="点我"
            alert("请填入一个1-85的正整数");
            clearAllInt(setId1,setId2,setId3,setId4);
        }else if(txtValue-txtValue==0){
            while(arr.length<txtValue) {
                var num = Math.floor((Math.random() * (lis.length)));
                while (arr.indexOf(num) !=-1||num==4||num==5||num==7||num==12||num==20||num==28||num==36||num==44||num==52||num==60||num==68||num==76||num==84||num==92||num==95||num==100||num==101||num==102||num==103) {
                    num = Math.floor((Math.random() * (lis.length)));
                }
                arr.push(num);
            }
        }else{
            my$("btn1").value="点我"
            alert("这不是一个数字，请填入一个1-85的正整数");
            clearAllInt(setId1,setId2,setId3,setId4);
        }
        for(var m=0;m<arr.length;m++){
            lis[arr[m]].className="cls";
        }
    },100);

    if(this.value=="暂停"){
        clearAllInt(setId1,setId2,setId3,setId4);
        this.value="点我";
        my$("btn2").value=''

        var clss= document.getElementsByClassName("cls");
        var arr1=[];
        for(var i=0;i<clss.length;i++){
            arr1.push(getInnerTxt(clss[i]));
        }
        var dvO=my$("thenames");
        dvO.innerHTML="总："+"<br />"+arr1;
        return;
    }
    this.value="暂停";
};
//row============================================================================row
var setId2=null;
my$("btn3").onclick=function(){
    clearAllInt(setId1,setId2,setId3,setId4);
    btnValue(1,btnArrone,btnArrtwo)
    var txtValue2=my$("btn4").value;
    var lis=document.getElementsByTagName("li");
    setId2=setInterval(function() {
        backGroundColor(lis);
        var teamrow={
            row0:[0, 1, 2, 3, 6],
            row1:[8, 9, 10, 11, 14, 15, 13],
            row2:[16, 17, 18, 19, 21, 22, 23],
            row3:[24, 25, 26, 27, 29, 30, 31],
            row4:[32, 33, 34, 35, 37, 38, 39],
            row5:[40, 41, 42, 43, 45, 46, 47],
            row6:[48, 49, 50, 51, 53, 54, 55],
            row7:[56, 57, 58, 59, 61, 62, 63],
            row8:[64, 65, 66, 67, 69, 70, 71],
            row9:[72, 73, 74, 75, 77, 78, 79],
            row10:[80, 81, 82, 83, 85, 86, 87],
            row11:[88, 89, 90, 91, 93, 94],
            row12:[96, 97, 98, 99],
        }

        if(txtValue2==""){
            setClass(lis,teamrow,txtValue2)
        }else if(txtValue2>13||txtValue2<=0||txtValue2-parseInt(txtValue2)>0||txtValue2-parseInt(txtValue2)<0){
            my$("btn3").value="点我"
            alert("请填入一个13以内的正整数");
            clearAllInt(setId1,setId2,setId3,setId4);
        }else if(txtValue2-txtValue2==0){
            setClass(lis,teamrow,txtValue2)
        }else{
            my$("btn3").value="点我"
            alert("这不是一个数字，请填入一个13以内的正整数");
            clearAllInt(setId1,setId2,setId3,setId4);
        }
    },100);

    if(this.value=="暂停"){
        clearAllInt(setId1,setId2,setId3,setId4);
        this.value="点我";
        my$("btn4").value=''

        var clss= document.getElementsByClassName("cls");
        var arr1=[];
        for(var i=0;i<clss.length;i++){
            arr1.push(getInnerTxt(clss[i]));
        }
        var dvO=my$("thenames");
        dvO.innerHTML="总："+"<br />"+arr1;
        return;
    }
    this.value="暂停";
}
//col============================================================================col
var setId3=null;
my$("btn5").onclick=function(){
    clearAllInt(setId1,setId2,setId3,setId4);
    btnValue(2,btnArrone,btnArrtwo)
    var txtValue3=my$("btn6").value;
    var lis=document.getElementsByTagName("li");
    setId3=setInterval(function() {
        backGroundColor(lis);
        var teamcol={
            col0:[0,8,16,24,32,40,48,56,64,72,80,88,96],
            col1:[1,9, 17, 25, 33, 41, 49,57,65,73,81,89,97],
            col2:[2,10,18, 26, 34, 42, 50, 58,66,74,82,90,98],
            col3:[11,27,19,35, 43,3,51,59,67,75,83,91,99],
            col4:[13, 21, 29, 37, 45, 53,61,69,77,85,93,],
            col5:[6,14, 22, 30, 38, 46, 54,62,70,78,86,94,],
            col6:[15, 23, 31, 39, 47, 55,63,71,79,87],
        }
        var num = Math.floor((Math.random() * (lis.length)));
        while(num>6){
            num = Math.floor((Math.random() * (lis.length)));
        }
        if(txtValue3==""){
            setClass(lis,teamcol,txtValue3)
        }else if(txtValue3>7||txtValue3<=0||txtValue3-parseInt(txtValue3)>0||txtValue3-parseInt(txtValue3)<0){
            my$("btn5").value="点我"
            alert("请填入一个7以内的正整数");
            clearAllInt(setId1,setId2,setId3,setId4);
        }else if(txtValue3-txtValue3==0) {
            setClass(lis,teamcol,txtValue3)
        }else{
            my$("btn5").value="点我"
            alert("这不是一个数字，请填入一个7以内的正整数");
            clearAllInt(setId1,setId2,setId3,setId4);
        }
    },100);

    if(this.value=="暂停"){
        clearAllInt(setId1,setId2,setId3,setId4);
        this.value="点我";
        my$("btn6").value=''
        var clss= document.getElementsByClassName("cls");
        var arr1=[];
        for(var i=0;i<clss.length;i++){
            arr1.push(getInnerTxt(clss[i]));
        }
        var dvO=my$("thenames");
        dvO.innerHTML="总："+"<br />"+arr1;
        return;
    }
    this.value="暂停";
}
//team===========================================================================team
var setId4=null;
my$("btn7").onclick=function(){
    clearAllInt(setId1,setId2,setId3,setId4);

    btnValue(3,btnArrone,btnArrtwo)

    var txtValue4=my$("btn8").value;
    var lis=document.getElementsByTagName("li");

    setId4=setInterval(function() {
        backGroundColor(lis);
        var teamO={
            team0:[0, 1, 2, 3,8, 9, 10, 11],
            team1:[16, 17, 18, 19,24,25,26,27],
            team2:[32, 33,34,35,40,41,42,43],
            team3:[48,49,50,51,56,57,58,59],
            team4:[64,65,66,67,72,73,74,75],
            team5:[80,81,82,83,88,89,90,91,96,97,98,99],
            team6:[6,13,14,15,21,22,23],
            team7:[29,30,31,37,38,39,45,46,47],
            team8:[53,54,55,61,62,63,69,70,71],
            team9:[77,78,79,85,86,87,93,94],
        }
        if(txtValue4==""){
            setClass(lis,teamO,txtValue4);
        }else if(txtValue4>10||txtValue4<=0||txtValue4-parseInt(txtValue4)>0||txtValue4-parseInt(txtValue4)<0){
            my$("btn7").value="点我"
            alert("请填入一个10以内的正整数");
            clearAllInt(setId1,setId2,setId3,setId4);
        }else if(txtValue4-txtValue4==0){
            setClass(lis,teamO,txtValue4);
        }else{
            my$("btn7").value="点我"
            alert("这不是一个数字，请填入一个10以内的正整数");
            clearAllInt(setId1,setId2,setId3,setId4);
        }
    },100);

    if(this.value=="暂停"){
        clearAllInt(setId1,setId2,setId3,setId4);
        this.value="点我";
        my$("btn8").value=''

        var clss= document.getElementsByClassName("cls");
        var arr1=[];
        for(var i=0;i<clss.length;i++){
            arr1.push(getInnerTxt(clss[i]));
        }
        var dvO=my$("thenames");
        dvO.innerHTML="总："+"<br />"+arr1;
        return;
    }
    this.value="暂停";
}







