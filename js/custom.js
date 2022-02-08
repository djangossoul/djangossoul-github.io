
    // Click function for show the Modal

    $(".show").on("click", function(){
        $(".mask").addClass("active");
    });

    // Function for close the Modal

    function closeModal(){
        $(".mask").removeClass("active");
    }

    // Call the closeModal function on the clicks/keyboard

    $(".close, .mask").on("click", function(){
        closeModal();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            closeModal();
        }
    });

    // Grid Filter
    $(document).ready(function(){
        $('.grid-nav-item').click(function(){
          // reset active class
          $('.grid-nav-item').removeClass("active");
          // add active class to selected
          $(this).addClass("active");
          // return needed to make function work
          return false;
        });
        
        
        $(function() {
          // create an empty variable
          var selectedClass = "";
          // call function when item is clicked
          $(".grid-nav-item").click(function(){
            // assigns class to selected item
            selectedClass = $(this).attr("data-rel");
            // fades out all portfolio items
            $(".portfolio li").fadeOut(300);
            // fades in selected category
            $(".portfolio li." + selectedClass).delay(300).fadeIn(300);
          });
        });
        
      }); // document ready
