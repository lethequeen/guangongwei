'use strict';
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
       obj.setHomePage(url);
   }catch(e){
       if(window.netscape){
          try{
              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
         }catch(e){
              alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
          }
       }else{
        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
       }
  }
}
function AddFavorite(title, url) {
  try {
      window.external.addFavorite(url, title);
  }
catch (e) {
     try {
       window.sidebar.addPanel(title, url, "");
    }
     catch (e) {
         alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
     }
  }
}


var slidint;
    function newTimer() {
      stopit();
      var today;
      today = new Date();
      var str = today.toLocaleDateString();
      str += "     " + week();
      var o = document.getElementById("nowDateTime");
      o.innerHTML = str;
      slidint = setTimeout(newTimer, 1000);
    }
       
    function stopit() {
      clearTimeout(slidint);
    }
       
    function week() {
      var d, day, x, s = " ";
      var x = new Array("周日", "周一", "周二");
      var x = x.concat("周三", "周四", "周五");
      var x = x.concat("周六");
      d = new Date();
      day = d.getDay();
      return (s += x[day]);
    }
       
    window.onload = function() {
      newTimer();
    } 

var slidnt;  
    function newTimer() {
        stopit();
        var today;
        today=new Date();
        var str=today.toLocaleDateString();
        str+=""+week();
        var o=document.getElementById("nowDateTime");
        o.innerHTML=str;
        slidint=setTimeout(newTimer,1000);



        function stopit(){
          clearTimeout(slidint);
        }
         function week(){
          var d,day,x,s="";
          var x=new Array("周日","周一","周二");
          var x=x.concat("周三","周四","周五");
          var x=x.concat("周六");
          d=new Date();
          day=d.getDay();
          return (s+=x[day]);
         }
     
    }


