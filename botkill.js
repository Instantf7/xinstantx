(function(){
    function a(b,c,d){
        const e=new Date();
        e.setTime(e.getTime()+(d*60*1000));
        const f="expires="+e.toUTCString();
        document.cookie=b+"="+c+";"+f+";path=/";
    }
    function g(b){
        const c=b+"=";
        const d=document.cookie.split(';');
        for(let e=0;e<d.length;e++){
            let f=d[e];
            while(f.charAt(0)==' ')f=f.substring(1,f.length);
            if(f.indexOf(c)==0)return f.substring(c.length,f.length);
        }
        return null;
    }
    (function(){
        const h=30;
        const i=60;
        const j='pageRefreshCount';
        let k=JSON.parse(localStorage.getItem(j))||{count:0};
        k.count+=1;
        if(k.count>=i)k.count=0;
        localStorage.setItem(j,JSON.stringify(k));
        if(k.count>h){
            a('blocked','true',5);
            window.location.href='/blocked.1';
        }
        if(g('blocked')==='true'){
            window.location.href='/blocked.1';
        }
    })();
    (function(){
        const l=20;
        const m='pageTabCount';
        let n=JSON.parse(localStorage.getItem(m))||{count:0};
        n.count+=1;
        localStorage.setItem(m,JSON.stringify(n));
        if(n.count>l){
            a('blocked','true',5);
            window.location.href='/blocked.1';
        }
        window.addEventListener('beforeunload',function(){
            n.count-=1;
            localStorage.setItem(m,JSON.stringify(n));
        });
        if(g('blocked')==='true'){
            window.location.href='/blocked.1';
        }
    })();
})();
