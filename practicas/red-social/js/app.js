$(function(){
    const Mobile = {
        MenuMobile: $('#MenuMobile'),
        BackgroundAncle: $('#BackgroundAncle'),
        SidebarLeft: $('#SidebarLeft'),
    }
    // console.log(MenuMobile);
    // console.log(BackgroundAncle);


    Mobile.MenuMobile.on('click', function(e){
        Mobile.BackgroundAncle.toggleClass('active');
        Mobile.SidebarLeft.toggleClass('active');
        e.preventDefault();
    });
    
    Mobile.BackgroundAncle.on('click', function(e){
        Mobile.BackgroundAncle.toggleClass('active');
        Mobile.SidebarLeft.toggleClass('active');
        e.preventDefault();
    });

}());

