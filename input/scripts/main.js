jQuery(function($) {
  //  Au focus
  $('.field-control').focus(function(){
    $(this).parent().addClass('is-focused has-label');
  });

  // à la perte du focus
  $('.field-control').blur(function(){
    $parent = $(this).parent();
    if($(this).val() == ''){
      $parent.removeClass('has-label');
    }
    $parent.removeClass('is-focused');
  });

  // si un champs est rempli on rajoute directement la class has-label
  $('.field-control').each(function(){
    if($(this).val() != ''){
      $(this).parent().addClass('has-label');
    }
  });

})