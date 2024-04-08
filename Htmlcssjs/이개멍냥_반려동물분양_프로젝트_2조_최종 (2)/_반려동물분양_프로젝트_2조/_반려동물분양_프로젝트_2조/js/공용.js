let loginCheck = sessionStorage.getItem('loginCheck');

console.log(sessionStorage.getItem('loginCheck'));

if(loginCheck == 'true'){ //로그인이 되어있다면
  document.querySelectorAll('.login li')[1].innerHTML = '로그아웃';
  document.querySelectorAll('.login li')[2].style.display = 'none';
}else{
  
  
}


if(document.querySelectorAll('.login li')[1].innerHTML == '로그아웃'){//로그인을 했을 경우 로그 아웃을 눌렀을 때
  
  document.querySelectorAll('.login li')[1].addEventListener('click',()=>{
    
    if(!confirm('로그아웃을 하시겠습니까?')){
      event.preventDefault();
      return;
    }else{
      sessionStorage.setItem('loginCheck','false');
      location.reload();
    }
  });

}


function openPopup() {
    document.getElementById("loginPopup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    let username = document.getElementById("username").value = '';
    let password = document.getElementById("password").value = '';
    
}

function login() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if(username.length == 0 || password.length == 0){
        alert('아이디 또는 비밀번호를 입력해 주세요.');
        return;
    }
    // console.log("아이디: " + username.value);
    // console.log("비밀번호: " + password.value);


    let userCount = sessionStorage.getItem('count');
    let comparison = false;

    for(let i=0; i<=userCount; i++){ //유저의 아이디랑 비번이 같다면
      if(sessionStorage.getItem(`id${i}`) == username.value && sessionStorage.getItem(`pw${i}`) == password.value){
        alert("로그인에 성공하였습니다.!");
        sessionStorage.setItem('loginCheck','true');
        closePopup();
        event.preventDefault(); //기본 동작 취소
        location.reload();
        return;
      }
    }
    alert("로그인에 실패했습니다.\n아이디 또는 비밀번호를 확인해 주세요.");
    // closePopup();
    username.value = '';
    password.value = '';
    event.preventDefault(); //기본 동작 취소
    return;
    
    // 로그인이 성공하면 알림창.
}

document.querySelector('.mypage').addEventListener('click',()=>{

  if(loginCheck == 'true'){
    alert(`환영합니다~ 마이페이지 기능 구현 안되어있습니다.`);
    return;
  }


    if(!confirm('현재 로그인 되어 있지 않습니다. \n\n로그인 창으로 이동하시겠습니까?')){
        event.preventDefault(); //기본 동작 취소
    }else{
        event.preventDefault(); //기본 동작 취소
        alert('로그인 창으로 이동합니다.');
        openPopup();
    }

});

let idVal = '';
let pwVal = '';

document.addEventListener('input',(e)=>{

    let btn = document.querySelector('.loginBtn');

    // console.log(idVal);
    // console.log(pwVal);

    let target = e.target;

    if(target.id == 'username'){
        idVal = target.value; 
    }

    if(target.id == 'password'){
        pwVal = target.value;
    }


    if(idVal.length >= 1 && pwVal.length >= 1){
        btn.style.backgroundColor = 'skyblue';
        btn.disabled = false;
    }else{
        btn.style.backgroundColor = '';
        btn.disabled = true;
    }


});



// 별가루
// <![CDATA[
    var colour="random"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
    var sparkles=50;
    
    /****************************
    *  Tinkerbell Magic Sparkle *
    *(c)2005-13 mf2fm web-design*
    *  http://www.mf2fm.com/rv  *
    * DON'T EDIT BELOW THIS BOX *
    ****************************/
    var x=ox=400;
    var y=oy=300;
    var swide=800;
    var shigh=600;
    var sleft=sdown=0;
    var tiny=new Array();
    var star=new Array();
    var starv=new Array();
    var starx=new Array();
    var stary=new Array();
    var tinyx=new Array();
    var tinyy=new Array();
    var tinyv=new Array();
    
    window.onload=function() { if (document.getElementById) {
      var i, rats, rlef, rdow;
      for (var i=0; i<sparkles; i++) {
        var rats=createDiv(3, 3);
        rats.style.visibility="hidden";
        rats.style.zIndex="999";
        document.body.appendChild(tiny[i]=rats);
        starv[i]=0;
        tinyv[i]=0;
        var rats=createDiv(5, 5);
        rats.style.backgroundColor="transparent";
        rats.style.visibility="hidden";
        rats.style.zIndex="999";
        var rlef=createDiv(1, 5);
        var rdow=createDiv(5, 1);
        rats.appendChild(rlef);
        rats.appendChild(rdow);
        rlef.style.top="2px";
        rlef.style.left="0px";
        rdow.style.top="0px";
        rdow.style.left="2px";
        document.body.appendChild(star[i]=rats);
      }
      set_width();
      sparkle();
    }}
    
    function sparkle() {
      var c;
      if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
        ox=x;
        oy=y;
        for (c=0; c<sparkles; c++) if (!starv[c]) {
          star[c].style.left=(starx[c]=x)+"px";
          star[c].style.top=(stary[c]=y+1)+"px";
          star[c].style.clip="rect(0px, 5px, 5px, 0px)";
          star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
          star[c].style.visibility="visible";
          starv[c]=50;
          break;
        }
      }
      for (c=0; c<sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
      }
      setTimeout("sparkle()", 40);
    }
    
    function update_star(i) {
      if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
        stary[i]+=1+Math.random()*3;
        starx[i]+=(i%5-2)/5;
        if (stary[i]<shigh+sdown) {
          star[i].style.top=stary[i]+"px";
          star[i].style.left=starx[i]+"px";
        }
        else {
          star[i].style.visibility="hidden";
          starv[i]=0;
          return;
        }
      }
      else {
        tinyv[i]=50;
        tiny[i].style.top=(tinyy[i]=stary[i])+"px";
        tiny[i].style.left=(tinyx[i]=starx[i])+"px";
        tiny[i].style.width="2px";
        tiny[i].style.height="2px";
        tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility="hidden";
        tiny[i].style.visibility="visible"
      }
    }
    
    function update_tiny(i) {
      if (--tinyv[i]==25) {
        tiny[i].style.width="1px";
        tiny[i].style.height="1px";
      }
      if (tinyv[i]) {
        tinyy[i]+=1+Math.random()*3;
        tinyx[i]+=(i%5-2)/5;
        if (tinyy[i]<shigh+sdown) {
          tiny[i].style.top=tinyy[i]+"px";
          tiny[i].style.left=tinyx[i]+"px";
        }
        else {
          tiny[i].style.visibility="hidden";
          tinyv[i]=0;
          return;
        }
      }
      else tiny[i].style.visibility="hidden";
    }
    
    document.onmousemove=mouse;
    function mouse(e) {
      if (e) {
        y=e.pageY;
        x=e.pageX;
      }
      else {
        set_scroll();
        y=event.y+sdown;
        x=event.x+sleft;
      }
    }
    
    window.onscroll=set_scroll;
    function set_scroll() {
      if (typeof(self.pageYOffset)=='number') {
        sdown=self.pageYOffset;
        sleft=self.pageXOffset;
      }
      else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        sdown=document.body.scrollTop;
        sleft=document.body.scrollLeft;
      }
      else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft=document.documentElement.scrollLeft;
        sdown=document.documentElement.scrollTop;
      }
      else {
        sdown=0;
        sleft=0;
      }
    }
    
    window.onresize=set_width;
    function set_width() {
      var sw_min=999999;
      var sh_min=999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
        if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
      }
      if (typeof(self.innerWidth)=='number' && self.innerWidth) {
        if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
        if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
        if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
      }
      if (sw_min==999999 || sh_min==999999) {
        sw_min=800;
        sh_min=600;
      }
      swide=sw_min;
      shigh=sh_min;
    }
    
    function createDiv(height, width) {
      var div=document.createElement("div");
      div.style.position="absolute";
      div.style.height=height+"px";
      div.style.width=width+"px";
      div.style.overflow="hidden";
      return (div);
    }
    
    function newColour() {
      var c=new Array();
      c[0]=255;
      c[1]=Math.floor(Math.random()*256);
      c[2]=Math.floor(Math.random()*(256-c[1]/2));
      c.sort(function(){return (0.5 - Math.random());});
      return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
    }
    // ]]>
    /* 꽃 */
    (function(d,b,w){
 
      if(!location.href.match(/^http:\/\/actyway\.com\//)){
        var j = d.getElementsByTagName('script');
        for(var x=0;x<j.length;x++){
          if(j[x].src.match(/^http:\/\/actyway\.com\//)){
            return false;
          }
        }
      }
      var q = d.createElement('contents');
      q.id = 'snowparticle';
      b.appendChild(q);
      q = d.getElementById('snowparticle');
      b.style.overflowX = 'none';
     
     
      var h = w.innerHeight;
      var u = d.documentElement.scrollTop || b.scrollTop;
      var e = u+h+10;
      var z = 9999;
      var t = new Array();
      var l = new Array();
      var y = new Array();
      var s = new Array();
      var g = new Array();
      var c = new Array();
      d.addEventListener('scroll',function(){u = d.documentElement.scrollTop || b.scrollTop;e = u+h+10;},false);
      for(var i=0;i<50;i++){
        var m = d.createElement('contents');
        m.id = 'yuki'+i;
        t[i] = Math.random()*-h+Math.random()*(h/2)+u;
        l[i] = Math.random()*w.innerWidth;
        var p = Math.random()*3+6;
        m.setAttribute('style','position:absolute;z-index:'+(z+i)+';top:-'+t[i]+'px;width:'+p+'px;height:'+p+'px;background:pink;border-radius:8px;box-shadow: 0 0 2px 2px pink;left:'+l[i]+'px;');
        m.setAttribute('class','snow');
        q.appendChild(m);
        y[i] = Math.random()*20+0.1;
        s[i] = Math.random()*5+0.5;
        g[i] = d.getElementById('yuki'+i);
        c[i] = 0;
      }
      setInterval(function(){
        for(var i=0;i<50;i++){
          if(e>t[i]){
            if(y[i]>=c[i]){
              l[i] = l[i]+0.5+Math.random()*0.5;
            }else{
              l[i] = l[i]-0.5-Math.random()*0.5;
            }
            if((y[i]*2)<=c[i]){
              c[i] = 0;
            }
          }else{
            t[i] = u-10;
            l[i] = Math.random()*w.innerWidth;
          }
          t[i] = t[i]+s[i];
          g[i].style.top = t[i]+'px';
          g[i].style.left = l[i]+'px';
          c[i]++;
        }
      },50);
    })(document,document.body,window);





