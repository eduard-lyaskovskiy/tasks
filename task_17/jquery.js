$('document').ready(function () {
    console.log("LOAD")
    let chooseTur = $('.main_btna.text-center');
    let getConsultation = $('.main_btn.text-center.contact');
    let navScheduleTurs = $('.main_nav ul li:eq(1)');
    let overlay = $('.overlay');
    let modal = $('.modal');
    let close = $('.close');

    chooseTur.on('click', animation);
    getConsultation.on('click', animation);
    navScheduleTurs.on('click', animation);
    close.on('click', animation);
    function animation() {
        overlay.animate({ opacity : "toggle" }, 1500)
        modal.animate({
            opacity: 'toggle',
            height: 'toggle'
          }, 1500);
    }
})