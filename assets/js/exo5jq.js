$(function(){
  $('#lastName, #firstName').focus(function(){
    $(this).css('border', '1px solid green');
  });
  $('#lastName, #firstName').blur(function(){
    $(this).css('border', '1px solid red');
  });
});
