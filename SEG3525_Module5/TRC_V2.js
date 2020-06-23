

function phone_regx(phone_number){

    var regex_one= /^\d{10}$/;
    var regex_two=/^\d{3}\-\d{3}\-\d{4}$/;

    if (regex_two.test(phone_number)){
        return 1
    }else if (regex_one.test(phone_number)){
        return 2
    } else {
        return 0
    }
}

function validate_cc(cc_text) {
    var regex_one = /^\d{16}$/;
    var regex_two = /^(?:[0-9]{4})(?:\s)(?:[0-9]{4})(?:\s)(?:[0-9]{4})(?:\s)(?:[0-9]{4})$/;
    if (regex_two.test(cc_text)){
        return 1
    }else if (regex_one.test(cc_text)){
        return 2
    } else {
        return 0
    }
}

function validate_name(name) {
    var regex_one = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (regex_one.test(name)){
        return 1
    } else {
        return 0
    }
}

function validate_email(email) {
    // from: https://emailregex.com/
    var regex_one = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex_one.test(email)){
        return 1
    } else {
        return 0
    }
}

$(document).ready(function() {
    $("#phone").on("change", function(){
        var phone_no=$("#phone").val();
        var reg_ex_val=phone_regx(phone_no);

        if (reg_ex_val === 1){
            $("#phone").addClass("border border-success  valid");
            $("#phone").removeClass("border border-danger non_valid");
            $("#phone_fb").addClass("feedback_hidden");

        }else if (reg_ex_val === 2){
            console.log(phone_no);

            var phone_reformat=''.concat(phone_no.slice(0,3),'-',phone_no.slice(3,6),'-',phone_no.slice(6,10));
            $("#phone").val(phone_reformat);
            console.log(phone_reformat);
            $("#phone").addClass("border border-success  valid");
            $("#phone").removeClass("border border-danger non_valid");
            $("#phone_fb").addClass("feedback_hidden");
        }else{
            $("#phone").addClass("border border-danger non_valid");
            $("#phone_fb").removeClass("feedback_hidden");
        }
    });

    $("#credit_card").on("change", function(){
        var cc_no=$("#credit_card").val();
        var reg_ex_val=validate_cc(cc_no);

        if (reg_ex_val === 1){
            $("#credit_card").addClass("border border-success  valid");
            $("#credit_card").removeClass("border border-danger non_valid");
            $("#cc_fb").addClass("feedback_hidden");

        }else if (reg_ex_val === 2){

            console.log(cc_no);

            var cc_reformat=''.concat(cc_no.slice(0,4),' ',cc_no.slice(4,8),' ',cc_no.slice(8,12),' ',cc_no.slice(12,17));
            $("#credit_card").val(cc_reformat);
            console.log(cc_reformat);
            $("#credit_card").addClass("border border-success  valid");
            $("#cc_fb").addClass("feedback_hidden");
            $("#credit_card").removeClass("border border-danger non_valid");
        }else{
            $("#credit_card").addClass("border border-danger non_valid");
            $("#cc_fb").removeClass("feedback_hidden");
        }
    });

    $('#name').on("change", function(){
        var name_text =$('#name').val();
        var reg_ex_val=validate_name(name_text);
        if (reg_ex_val === 1){
            $("#name").addClass("border border-success  valid");
            $("#name_fb").addClass("feedback_hidden");
            $("#name").removeClass("border border-danger non_valid");
        }else{
            $("#name").addClass("border border-danger non_valid");
            $("#name_fb").removeClass("feedback_hidden");
        }});

    $('#email').on("change", function(){
        var email_text =$('#email').val();
        var reg_ex_val=validate_email(email_text);
        if (reg_ex_val === 1){
            $("#email").addClass("border border-success  valid");
            $("#email_fb").addClass("feedback_hidden");
            $("#email").removeClass("border border-danger non_valid");

        }else{
            $("#email").addClass("border border-danger non_valid");
            $("#email_fb").removeClass("feedback_hidden");
        }});


    $("#form_submit_btn").click(function(event) {
        $('#failed_alert').addClass("feedback_hidden");
        $('#success_alert').addClass("feedback_hidden");
        $('#incomplete_alert').addClass("feedback_hidden");



        if ($("#name").hasClass("non_valid")){
            $('#failed_alert').removeClass("feedback_hidden");

        }else if($("#email").hasClass("non_valid")){
            $('#failed_alert').removeClass("feedback_hidden");

        }else if($("#credit_card").hasClass("non_valid")){
            $('#failed_alert').removeClass("feedback_hidden");

        }else if($("#phone").hasClass("non_valid")){
            $('#failed_alert').removeClass("feedback_hidden");

        }

        if ($("#name").hasClass("valid")) {

            if ($("#email").hasClass("valid")) {


                if ($("#credit_card").hasClass("valid")) {


                    if ($("#phone").hasClass("valid")) {
                        $('#success_alert').removeClass("feedback_hidden");

                    }else{
                        $('#incomplete_alert').removeClass("feedback_hidden");
                    }
                }else{
                    $('#incomplete_alert').removeClass("feedback_hidden");
                }
            }else{
                $('#incomplete_alert').removeClass("feedback_hidden");
            }
        }else{
            $('#incomplete_alert').removeClass("feedback_hidden");
        }
    });

    $("#modal_close_btn").click(function(event) {
        $('#failed_alert').addClass("feedback_hidden");
        $('#success_alert').addClass("feedback_hidden");
        $('#incomplete_alert').addClass("feedback_hidden");
        // $("#email").removeClass("border border-danger border-success valid non_valid");
        // $("#phone").removeClass("border border-danger border-success valid non_valid");
        // $("#credit_card").removeClass("border border-danger border-success valid non_valid");
        // $("#name").removeClass("border border-danger border-success valid non_valid");
        // $("#name_fb").addClass("feedback_hidden");
        // $("#email_fb").addClass("feedback_hidden");
        // $("#cc_fb").addClass("feedback_hidden");
        // $("#phone_fb").addClass("feedback_hidden");
    });

    $('#failed_alert_btn').click(function(event) {
        $('#failed_alert').addClass("feedback_hidden");
    });
    $('#success_alert_btn').click(function(event) {
        $('#success_alert').addClass("feedback_hidden");
    });
    $('#incomplete_alert_btn').click(function(event) {
        $('#incomplete_alert').addClass("feedback_hidden");
    });


    $('#datepicker').datepicker(
        {

            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            // beforeShowDay: disableDates
        }
    );

    $('#datepicker').datepicker("setDate", new Date());



});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

});
$(document).on("click", ".modal-body", function () {
    $( "#datepicker" ).datepicker(
        {
            viewMode: 'years',
            format: 'MM/YYYY'
            // // no calendar before June 1rst 2020
            // minDate: new Date('06/01/2020'),
            // maxDate: '+4M',
            // // used to disable some dates
            // beforeShowDay: $.datepicker.noWeekends,
            // // beforeShowDay: disableDates
        }

    );
    console.log('test 4');
    $('#datepicker').datepicker("setDate", new Date());

});

$("body").delegate("#datepicker", "focusin", function () {

    $("#datepicker").datepicker();
    console.log('test 5');
});
//<!--   Map code adapted from https://www.w3schools.com/graphics/google_maps_intro.asp-->

function myMap() {
    var myLatlng = new google.maps.LatLng(49.152320, -125.905643);
    var mapProp = {
        center: myLatlng,
        zoom: 14,
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myLatlng, title:
            "Tofino Riding Company"
    });
    marker.setMap(map);
}

