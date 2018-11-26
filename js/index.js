$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
});

function blogDropdown() {
    document.getElementById("empresa").classList.remove("show");
    document.getElementById("dialise").classList.remove("show");
    document.getElementById("blog").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function empresaDropdown() {
    document.getElementById("blog").classList.remove("show");
    document.getElementById("dialise").classList.remove("show");
    document.getElementById("empresa").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function dialiseDropdown() {
    document.getElementById("blog").classList.remove("show");
    document.getElementById("empresa").classList.remove("show");
    document.getElementById("dialise").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(document).ready(function() {

    var bodyWidth = $('body').width(); 

    var nav = $(".navbar");
    var blog = $("#blogpage");
    var dropdown = $(".dropdown-content");
    var begin = nav.position();
    var pos = blog.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (bodyWidth <= 768) {
            if (windowpos >= begin.top & windowpos <= pos.top - 50) {
                nav.removeClass("bg-blue"); 
                dropdown.removeClass("bg-blue");
                nav.addClass("hide");
            } else {
                nav.addClass("bg-blue");
                dropdown.addClass("bg-blue");
                nav.removeClass("hide");
            }
        } else {
            if (windowpos >= begin.top & windowpos <= pos.top - 200) {
                nav.removeClass("bg-blue"); 
                dropdown.removeClass("bg-blue");
            } else {
                nav.addClass("bg-blue");
                dropdown.addClass("bg-blue");
            }
        }
    });
});
