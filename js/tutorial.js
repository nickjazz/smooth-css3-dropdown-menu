
// Add class to menu

$("#menu li").hoverIntent({    
    interval: 0, // number = milliseconds for onMouseOver polling interval    
    timeout: 100, // number = milliseconds delay before onMouseOut    
    over:function(){
         $('.sub-menu', this).addClass('active');
         $('.sub-menu', this).parent('li').addClass('active-li');
    },
    out: function(){
         $('.sub-menu', this).removeClass('active').delay(2000);
         $('.sub-menu', this).parent('li').removeClass('active-li');
    }
});