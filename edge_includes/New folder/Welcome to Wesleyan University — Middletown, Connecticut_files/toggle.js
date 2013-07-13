function toggle(divID) {
    
   if($.cookie("Open") == null){
       $.cookie('Open', 'yes', { path: '/', domain: 'wesleyan.edu' });

       $('#navbar_toggle').hide();
       $('#navbar_toggle_up').show();
   } else {
       $.cookie('Open', null, { path: '/', domain: 'wesleyan.edu' });

       $('#navbar_toggle').show();
       $('#navbar_toggle_up').hide();
   }
    
   $('#fullmenu_wrapper').slideToggle('slow'); 

}