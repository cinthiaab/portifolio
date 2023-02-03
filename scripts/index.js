function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);

    showarea1();
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
    
    showprojeto1();
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);

/* funções - projetos */
function showprojeto1(){
    $("#projeto1").css("display","inherit");
    closeprojeto2();
    closeprojeto3();
}
function closeprojeto1(){
    $("#projeto1").css("display","none");
}
function showprojeto2(){
    $("#projeto2").css("display","inherit");
    closeprojeto1();
    closeprojeto3();
}
function closeprojeto2(){
    $("#projeto2").css("display","none");
}
function showprojeto3(){
    $("#projeto3").css("display","inherit");
    closeprojeto1();
    closeprojeto2();
}
function closeprojeto3(){
    $("#projeto3").css("display","none");
}

/* funções - areas de interesses */
function showarea1(){
    closearea2();
    closearea3();
    $("#area1").addClass("animated fadeIn");
    $("#area1").css("display","flex");
}
function closearea1(){
    setTimeout(function(){
        $("#area1").removeClass("animated fadeIn");
    },800);
    $("#area1").css("display","none");
}
function showarea2(){
    closearea1();
    closearea3();
    $("#area2").addClass("animated fadeIn");
    $("#area2").css("display","flex");
}
function closearea2(){
    setTimeout(function(){
        $("#area2").removeClass("animated fadeIn");
    },800);
    $("#area2").css("display","none");
}
function showarea3(){
    closearea2();
    closearea1();
    $("#area3").addClass("animated fadeIn");
    $("#area3").css("display","flex");
}
function closearea3(){
    setTimeout(function(){
        $("#area3").removeClass("animated fadeIn");
    },800);
    $("#area3").css("display","none");
}