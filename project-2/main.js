
  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

  $(function(){
    $("#btn_login").click(function() {
        $("#myUye").modal();
    });
})

//  emailAdres ,user_phone,user_password
// $(function () {  })
$(function() {
  $("#btnSubmit").click(function(e) {
    e.preventDefault(); // Prevent form submission

    var email = $("#emailAdres").val();
    var phone = $("#user_phone").val();
    var password = $("#user_password").val();

    $(".validation-message").empty(); // Clear previous validation messages

    if (email === "") {
      $("#validation_email").html("Email boş geçilemez.");
    }

    if (phone === "") {
      $("#validation_phone").html("Telefon boş geçilemez.");
    } else if (!$.isNumeric(phone)) {
      $("#validation_phone").html("Sadece sayı girilmelidir.");
    } else if (validation_phone(phone) === false) {
      $("#validation_phone").html("Telefon numarası uygun formatta değil.");
    }

    if (password === "") {
      $("#validation_password").html("Şifre boş geçilemez.");
    }

    function validation_phone(telephoneNumber) {
      var phoneRegex = /^\+90 \d{3} \d{3} \d{2} \d{2}$/;
      return phoneRegex.test(telephoneNumber);
    }
  });
});

$(function(){
    $("#picture_1").tooltip();
    $("#btn_tooltip").tooltip();
})