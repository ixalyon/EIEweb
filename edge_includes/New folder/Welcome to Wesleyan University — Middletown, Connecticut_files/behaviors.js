$(document).ready(function(){
init();
});


function init() {
    showhide();
    toggleFaq();
    setSubMenu();
        tooltip();
        setAltEvent();
        /* Uncomment this before publishing, then recomment it */
        /* breakOut(); */
}

function breakOut() {
    if(self != top) {
        window.open(document.location.href, "_top", "");
    }
}

function setAltEvent() {

var events;

$('#content_altsecondary').siblings().show();

if(events == "no" && dftdisplay == "yes" && withalternate == "yes") {
$('#secondary_info').hide();
}

if(events == "yes" && withalternate == "yes") {
$('#secondary_info').hide();
}

}

function showhide() {

    $( '#landing_page_nav ul li ul' ).hide();
    $( '#landing_page_nav ul li  h3' ).wrapInner('<a href="#" class="navtrigger"></a>');
    $('.navtrigger').toggle( 
      function () {
        $(this).parent().next().slideDown('slow').removeClass('hide').preventDefault;
      },
      function () {
        $(this).parent().next().slideUp('fast').addClass('hide').preventDefault;
      }
    )
  }

function toggleFaq() {
    $('#faq ul li ul').hide();
    
    
    $('#faq ul li b').wrapInner('<a href="#" class="answertrigger"></a>');
    $('#faq ul li strong').wrapInner('<a href="#" class="answertrigger"></a>');

    $('.answertrigger').toggle( 
      function () {
        $(this).parent().next().slideDown('slow').removeClass('hide').preventDefault;
      },
      function () {
        $(this).parent().next().slideUp('fast').addClass('hide').preventDefault;
      }
    )
  }

/*
 * Tooltip script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */

this.tooltip = function(){  
    /* CONFIG */        
        xOffset = 10;
        yOffset = 20;       
        // these 2 variable determine popup's distance from the cursor
        // you might want to adjust to get the right result     
    /* END CONFIG */        
    $("a.tooltip").hover(function(e){                                             
        this.t = this.title;
        this.title = "";

                $("img", this).attr("alt", "");
                                  
        $("body").append("<p id='tooltip'>"+ this.t +"</p>");
        $("#tooltip")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px")
            .fadeIn("fast");        
    },
    function(){
        this.title = this.t;    
        $("#tooltip").remove();
    }); 
    $("a.tooltip").mousemove(function(e){
        $("#tooltip")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px");
    });         
};

// starting the script on page load
function setSubMenu() {

      if($.cookie("Open") == "yes"){
         $('#fullmenu_wrapper').show();
         $('#navbar_toggle').hide();
         $('#navbar_toggle_up').show();
      } else {
         $('#navbar_toggle').show();
         $('#navbar_toggle_up').hide();
      }
}