$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage'], .smooth a").on('click', function(event) {
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


function empresaDropdown() {
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


$(document).ready(function() {

    var bodyWidth = $('body').width(); 

    var nome = $("#nome_nav");
    var nav = $(".navbar");
    var blog = $("#blogpage");
    var dropdown = $(".dropdown-content");
    var begin = nav.position();
    var pos = blog.position();       
      
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if (bodyWidth <= 768) {
            if (windowpos >= begin.top & windowpos <= (pos.top) - 50) {
                nav.removeClass("bg-blue"); 
                dropdown.removeClass("bg-blue");
                nav.addClass("navbar-show");
                nome.addClass("nome-navbar");
            } else {
                nav.addClass("bg-blue");
                dropdown.addClass("bg-blue");
                nav.removeClass("navbar-show");
                nome.removeClass("nome-navbar");
            }
        } else {
            if (windowpos >= begin.top & windowpos <= (pos.top) - 200) {
                nome.addClass("nome-navbar");
                nav.removeClass("bg-blue"); 
                dropdown.removeClass("bg-blue");
            } else {
                nav.addClass("bg-blue");
                dropdown.addClass("bg-blue");
                nome.removeClass("nome-navbar");
            }
        }
    });
});

function blog() {
  window.location = "https://renale.netlify.com/blog.html"
}

function empresa() {
  window.location = "https://renale.netlify.com/empresa.html"
}