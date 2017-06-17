//Slider home
$(document).ready(function(){
    $("#sendTicket").click(
      function() {
      	//Validacion formulario
		  mail = $(".contact_form")[0].children[4].value;
		  name = $(".contact_form")[0].children[1].value;
		  system = $( "#sistemas option:selected" ).text();
		  subject = $( "#asunto > div.active" ).attr('id')
		  var acert_name = false,
		  	  acert_mail = false,
		      acert_subject = false
		  var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
		  if(mail.length > 5 && mail.length < 50 && expresion.test(mail)){
		    $(".error[data-error='mail']").hide();
		    $("#mail_input").removeClass("box-error")
		    acert_mail = true;
		  }else{
		    $(".error[data-error='mail']").show();
		    $("#mail_input").addClass("box-error")
		  }
		  if(name.length > 0 && name.length < 50){
		    $(".error[data-error='name']").hide();
		    $("#name_input").removeClass("box-error")
		    acert_name = true;
		  }else{
		    $(".error[data-error='name']").show();
		    $("#name_input").addClass("box-error")
		  }
		  if (subject != "Partner") {
		  	if(system != "Selecciona un sistema"){
		    $(".error[data-error='system']").hide();
			$(".styledSelect").removeClass("box-error")
		    acert_subject = true;
			  }else{
			    $(".error[data-error='system']").show();
			    $(".styledSelect").addClass("box-error")
			  }
		  } else{
		  	$(".error[data-error='system']").hide();
		  	acert_subject = true;
		  };
		  
		  //Si ya todo está bien:
		  if (acert_mail && acert_name && acert_subject) {
		  	ticket_data = { 
        			"description": $(".contact_form").find("textarea").val(),
        			"subject": $( ".contact_form #asunto > div.active" ).attr('id') + ' ' +
        				$( ".contact_form .styledSelect" ).text(),
        			"email": $(".contact_form #mail_input").val(),
        			"name": $(".contact_form #name_input").val(),
        			"priority": 1,
        			"status": 2
	        	}

		        ticket_data = JSON.stringify(ticket_data);
		        console.log(ticket_data)
		        $.ajax({
		        	url: "https://cmrcio.freshdesk.com/api/v2/tickets",
		        	beforeSend: function(xhr) { 
		        		xhr.setRequestHeader("Authorization", "Basic " + btoa("3dk8M2HoTXZLcvv0TG7k:X")); 
		        	},
				type: 'POST',
				dataType: 'json',
				contentType: 'application/json',
				processData: false,
				data: ticket_data,
				success: function (data) {
					//clean form
					$("input").val("");
					$("#asunto .btn-form").removeClass("active");
					$("#asunto #Soporte").addClass("active");
					$("#sistemas").val("Selecciona un sistema");
					$(".contact_form").find("textarea").val("");
					alert('Mensaje enviado\n¡Gracias por contactarnos, en breve nos pondremos en contacto contigo!');
				},
				error: function(){
					alert('Ups\n¡Tenemos problemas con recibir tu mensaje, por favor intenta nuevamente.!');
				}
			});
		};
        
      	}
    );
});

//Cerrar menu movil
var menuLeft = document.getElementById('cbp-spmenu-s1');
var showLeft = document.getElementById('showLeft');
var body = document.body;
var menuOpen = false;

showLeft.onclick = function() {
	if ($("#cont").hasClass("opacity")) {
		$("#cont").removeClass("opacity");
		$("header").removeClass("opacity");
	} else{
		$("#cont").addClass("opacity");
		$("header").addClass("opacity");
	};
    classie.toggle(menuLeft, 'cbp-spmenu-open');
    setInterval(function() {menuOpen = true;}, 100);
    menuOpen = false;
};

body.onclick = function() {
    if (menuOpen) {
        classie.removeClass(menuLeft, 'cbp-spmenu-open');
        $("#cont").removeClass("opacity");
		$("header").removeClass("opacity");
       menuOpen = false;
    }
};

//Productos
$(".menu-products > .item-product").on("click", function (){
	if(this.id == "prod-1"){
		$(".menu-products > .item-product").removeClass('active')
		$(".info-product > .info").addClass('hidden')
		$('#prod-1').addClass('active')
		$('#info-1').removeClass('hidden')
	}else{
		if(this.id == "prod-2"){
			$(".menu-products > .item-product").removeClass('active')
			$(".info-product > .info").addClass('hidden')
			$('#prod-2').addClass('active')
			$('#info-2').removeClass('hidden')
		}else{
			if(this.id == "prod-3"){
				$(".menu-products > .item-product").removeClass('active')
				$(".info-product > .info").addClass('hidden')
				$('#prod-3').addClass('active')
				$('#info-3').removeClass('hidden')
			}else{
				if(this.id == "prod-4"){
					$(".menu-products > .item-product").removeClass('active')
					$(".info-product > .info").addClass('hidden')
					$('#prod-4').addClass('active')
					$('#info-4').removeClass('hidden')
				}else{
					if(this.id == "prod-5"){
						$(".menu-products > .item-product").removeClass('active')
						$(".info-product > .info").addClass('hidden')
						$('#prod-5').addClass('active')
						$('#info-5').removeClass('hidden')
					}else{
						$(".menu-products > .item-product").removeClass('active')
						$(".info-product > .info").addClass('hidden')
						$('#prod-6').addClass('active')
						$('#info-6').removeClass('hidden')
					}
					}
					
			}
		}
	}
});

//Partners
$(".topic > .btn-blue").on("click", function (){
	if(this.id == "topic_1"){
	$(".topic > .btn-blue").removeClass('active')
	$(".cursos > div").addClass('hidden')
	$('#topic_1').addClass('active')
	$('#cursos_1').removeClass('hidden')
	}else{
		if(this.id == "topic_2"){
			$(".topic > .btn-blue").removeClass('active')
			$(".cursos > div").addClass('hidden')
			$('#topic_2').addClass('active')
			$('#cursos_2').removeClass('hidden')
		}else{
			$(".topic > .btn-blue").removeClass('active')
			$(".cursos > div").addClass('hidden')
			$('#topic_3').addClass('active')
			$('#cursos_3').removeClass('hidden')
		}
	}
})
$( "#cursos_1 > a" ).hover(
  function() {
    // $( this ).find( ".blue" ).removeClass('hidden');
    // $( this ).find( ".white" ).addClass('hidden');
    if(this.id == "TB1"){
    	$(".img_partners").addClass("hidden");
    	$("#TB1_img").removeClass("hidden");
    }else{
    	if(this.id == "TB2"){
    		$(".img_partners").addClass("hidden");
    		$("#TB2_img").removeClass("hidden");
    	}else{
    		if(this.id == "TB3"){
    			$(".img_partners").addClass("hidden");
    			$("#TB3_img").removeClass("hidden");
    		}else{
    			$(".img_partners").addClass("hidden");
    			$("#TB4_img").removeClass("hidden");
    		}
    	}
    }
  }, function() {
  		$(".img_partners").addClass("hidden");
    	$("#img_curso").removeClass("hidden");
  }
);

//Landing
//Ponts of Sale

$(".topic-point > .btn-blue").on("click", function (){
	if(this.id == "sell"){
		$(".topic-point > .btn-blue").removeClass('active')
		$(".points > div").addClass('hidden')
		$('#sell').addClass('active')
		$('#sell-points').removeClass('hidden')
	}else{
		if(this.id == "manage"){
			$(".topic-point > .btn-blue").removeClass('active')
			$(".points > div").addClass('hidden')
			$('#manage').addClass('active')
			$('#manage-points').removeClass('hidden')
			}else{
			if(this.id == "report"){
				$(".topic-point > .btn-blue").removeClass('active')
				$(".points > div").addClass('hidden')
				$('#report').addClass('active')
				$('#report-points').removeClass('hidden')
			}else{
				$(".topic-point > .btn-blue").removeClass('active')
				$(".points > div").addClass('hidden')
				$('#grow').addClass('active')
				$('#grow-points').removeClass('hidden')
			}
		}
	}
})

//Map
var width = $( window ).width();
function initMap() {
	var myLatLng = {lat: 19.409581, lng: -99.1717775};
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
      center: myLatLng,
      zoom: 16
    });
    var marker = new google.maps.Marker({
	  position: myLatLng,
	  map: map
	});
	if( width < 768){  
		map.setOptions({
		draggable: false
		});
	}
}

//Videos
//Videos TB
var vidsrc_TB1 = $('iframe#if_TB1').attr('src');
var vidsrc_TB2 = $('iframe#if_TB2').attr('src');
var vidsrc_TB3 = $('iframe#if_TB3').attr('src');

$('.videoSmall').on('click', function(){
	if(this.id == "TB1"){
		$('#v_TB1').addClass('lightboxActive')
		$('#if_TB1').attr('src', vidsrc_TB1);
		$('.close').on('click', function(){
			$('#v_TB1').removeClass('lightboxActive')
			$('#if_TB1').attr('src',''); 
		})
	}else{
		if(this.id == "TB2"){
			$('#v_TB2').addClass('lightboxActive')
			$('#if_TB2').attr('src', vidsrc_TB2);
			$('.close').on('click', function(){
				$('#v_TB2').removeClass('lightboxActive')
				$('#if_TB2').attr('src','');
			})
		}else{
			$('#v_TB3').addClass('lightboxActive')
			$('#if_TB3').attr('src', vidsrc_TB3);
			$('.close').on('click', function(){
				$('#v_TB3').removeClass('lightboxActive')
				$('#if_TB3').attr('src','');
			})
		}
	}
})

//Videos Vend
var vidsrc_V1 = $('iframe#if_V1').attr('src');
var vidsrc_V2 = $('iframe#if_V2').attr('src');
var vidsrc_V3 = $('iframe#if_V3').attr('src');

$('.videoSmall').on('click', function(){
	if(this.id == "V1"){
		$('#v_V1').addClass('lightboxActive')
		$('#if_V1').attr('src', vidsrc_V1);
		console.log(vidsrc_V1)
		$('.close').on('click', function(){
			$('#v_V1').removeClass('lightboxActive')
			$('#if_V1').attr('src',''); 
		})
	}else{
		if(this.id == "V2"){
			$('#v_V2').addClass('lightboxActive')
			$('#if_V2').attr('src', vidsrc_V2);
			$('.close').on('click', function(){
				$('#v_V2').removeClass('lightboxActive')
				$('#if_V2').attr('src','');
			})
		}else{
			$('#v_V3').addClass('lightboxActive')
			$('#if_V3').attr('src', vidsrc_V3);
			$('.close').on('click', function(){
				$('#v_V3').removeClass('lightboxActive')
				$('#if_V3').attr('src','');
			})
		}
	}
})

//Videos LS
var vidsrc_LS1 = $('iframe#if_LS1').attr('src');
var vidsrc_LS2 = $('iframe#if_LS2').attr('src');
var vidsrc_LS3 = $('iframe#if_LS3').attr('src');

$('.videoSmall').on('click', function(){
	if(this.id == "LS1"){
		$('#v_LS1').addClass('lightboxActive')
		$('#if_LS1').attr('src', vidsrc_LS1);
		$('.close').on('click', function(){
			$('#v_LS1').removeClass('lightboxActive')
			$('#if_LS1').attr('src',''); 
		})
	}else{
		if(this.id == "LS2"){
			$('#v_LS2').addClass('lightboxActive')
			$('#if_LS2').attr('src', vidsrc_LS2);
			$('.close').on('click', function(){
				$('#v_LS2').removeClass('lightboxActive')
				$('#if_LS2').attr('src','');
			})
		}else{
			$('#v_LS3').addClass('lightboxActive')
			$('#if_LS3').attr('src', vidsrc_LS3);
			$('.close').on('click', function(){
				$('#v_LS3').removeClass('lightboxActive')
				$('#if_LS3').attr('src','');
			})
		}
	}
})

//Cerrar
$('html').click(function() {
  $(".lightbox").removeClass("lightboxActive");
  $('.lightbox > iframe').attr('src','');
});
$('.lightbox > iframe, .videoSmall').click(function(event){
     event.stopPropagation();
});

//Info en movil
$('.topic_mov').click(function () {
    $(this).next('div').slideToggle();
    if ($( this ).hasClass( "active" )) {
    	$( this ).removeClass( "active" )
    } else{
    	$(this).parent().siblings().children().next().slideUp();
    $('.topic_mov').removeClass("active");
    $(this).addClass("active");
    return false;
    }; 
});
$('.prod_mov').click(function () {
    $(this).next('div').slideToggle();
    if ($( this ).hasClass( "active" )) {
    	$( this ).removeClass( "active" )
    } else{
    	$(this).parent().siblings().children().next().slideUp();
    $('.prod_mov').removeClass("active");
    $(this).addClass("active");
    return false;
    };   
});

//contacto
$('#asunto > div').click(function() {
	var valor = $( this ).attr('id');
	$('#asunto > div').removeClass("active")
	$(this).addClass("active")
	if (valor == 'Partner') {
		$('#wrap_sistem').addClass('hidden')
	} else{
		$('#wrap_sistem').removeClass('hidden')
	};
})
