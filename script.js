const about = document.querySelector("#about");
const social = document.querySelector("#social");
const aboutcontent = document.querySelector("#about-content");
const socialcontent = document.querySelector("#social-content");
const home = document.querySelector("#home");
const homecontent = document.querySelector("#home-content");

about.addEventListener("click" , () => {
    const aboutBox = new WinBox({
        title:"About me",
        width:"400px",
        height:"400px",
        top:50,
        right:50,
        bottom:50,
        left:50,
        mount:aboutcontent,
        onfocus: function(){
            this.setBackground("#00aa00");
        },
        onblur:function(){
            this.setBackground("#100347");
        },
    });  
});


social.addEventListener("click",()=>{
    const socialBox = new WinBox({
        title:"Social Media",
        background:"#0602fc",
        width:"400px",
        height:"400px",
        top:150,
        right:"50",
        bottom:"50",
        left:"250",
        mount: socialcontent,
        onfocus:function(){
            this.setBackground("#00aa00");

        },
        onblur:function(){
            this.setBackground("#777");
        },
    });
});

home.addEventListener("click",()=>{
    const homeBox = new WinBox({
       
        background:"#00aa00",
        width:"400px",
        height:"400px",
        top:150,
        right:"50",
        bottom:"50",
        left:"250",
        mount: homecontent,
        onfocus:function(){
            this.setBackground("#00aa00");
        },
        onblur:function(){
            this.setBackground("#777");
        },
    });
});
