$(document).ready(function() {

  
  //  add & remove class on click
  $('.menu-icon').click(function(e) {
    
    e.preventDefault();

    $this = $(this);

    if ($this.hasClass('is-opened')) {
      $this.addClass('is-closed').removeClass('is-opened');
    } else {
      $this.addClass('is-opened').removeClass('is-closed');
    };


    
  });

})