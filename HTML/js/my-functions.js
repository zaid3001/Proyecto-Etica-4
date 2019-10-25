var $element=$('.each-event, .title');
var $window= $(window);
$window.on('scroll resize',check_for_fade);
$window.trigger('scroll');
function check_for_fade(){
    var window_height = $window.height();
    $.each($element,function(event){
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_offset = $element.offset().top;
        space = window_height - (element_height + element_offset - $(window).scrollTop());
        if(space < 60){
            $element.addClass("non-focus");
        }else{
            $element.removeClass("non-focus");
        }
    });
};

/*auto scrolling start */

/*function scrollpage() {		
	function f() 
	{
		window.scrollTo(0,i);
		if(status==0) {
   			i=i+40;
			if(i>=Height){	status=1; } 
		} else {
			i=i-40;
			if(i<=1){	status=0; }  // if you don't want continue scroll then remove this line
		}
	setTimeout( f, 1000 );
	}f();
}
var Height=document.documentElement.scrollHeight;
var i=1,j=Height,status=0;
scrollpage();*/

/*auto scrolling end */