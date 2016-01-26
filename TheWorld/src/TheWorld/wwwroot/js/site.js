// site.js
(function () {
    //var $el = $("#username");
    //$el.text("Daniel Mackay");
    
    //var $main = $("#main");
    //$main.on("mouseenter", function () {
    //    $main.style = "background-color: #888;";
    //});
    //$main.on("mouseleave", function () {
    //    $main.style = "";
    //});

    //var $menuItems = $("ul.menu li a");
    //$menuItems.on("click", function () {
    //    var me = $(this);
    //    alert('hello ' + me.text() + '!');
    //})

    var $sidebarAndWrapper = $('#sidebar, #wrapper');
    var $icon = $("#sidebar-toggle i.fa");

    var $sidebarToggle = $('#sidebar-toggle').on('click', function () {
        $sidebarAndWrapper.toggleClass('hide-sidebar');

        if ($sidebarAndWrapper.hasClass('hide-sidebar')) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        }
        else {
            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }
    })
})();
