(function($){
 
    $.fn.hee_tooltip = function(options){
     
    //Set the option
    var settings = $.extend({
        backgroundColor : '#0b21ee',
		color: '#fff'
      // anotherOption: "string option",
    },options);
         
    // Start your custom code
    return this.each(function(){
         
        var $this = $(this);

        $('.my_tooltip').each(function(index){

            var tooltip = $(this).attr('data-title');

            $(this).append('<span class="message message' + index + '">'+ tooltip +'</span>');
			
            $(this).hover(function(e){
                
                var url = $(this).attr('href');
                
                $.get(url,function(ajaxResult){
                    
                    var ajaxTitle = $(ajaxResult).filter('meta[property="og:title"]').attr('content');
					var ajaxDesc = $(ajaxResult).filter('meta[property="og:description"]').attr('content');
					var ajaxImg = $(ajaxResult).filter('meta[property="og:image"]').attr('content');
						
					var ajaxHtml = '<img src="'+ajaxImg+'">'
					ajaxHtml += '<h2>'+ajaxTitle+'</h2>'
					ajaxHtml += '<p>'+ajaxDesc+'</p>'

					$('.message' + index).html(ajaxHtml);
							
				});
			

				var x = e.pageX;
				var y = e.pageY;

				$('.message').css({
					'top' : e.pageY + 10,
					'left' : e.pageX + 10,
					backgroundColor: settings.backgroundColor,
					color: settings.color
				});

				$('.message' + index).show();

			},function(){

				$('.message' + index).hide();

			});
		});
             
		// Create callback function when the feed is completely loaded
		if($.isFunction(settings.complete)){
		  settings.complete.apply($this);
		}
 
    });
  }    
 
})(jQuery);
      
// USAGE
/*
$('.someclass').hee_tooltip ({
    anotherOption : 'stringggg',
    complete : function(){
        console.log($(this).text());
        alert('success');
    }
})
*/
