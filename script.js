$(function() {
  var profilesource = 'https://lit-taiga-21654.herokuapp.com/nick';

    $.ajax({

      url: profilesource,
      method: "GET",
      dataType: 'json',

    }).done(function(data){
       $(".name").text(data.name);
       $(".age").text(data.age);
       $(".email").text(data.email);
    });

});
