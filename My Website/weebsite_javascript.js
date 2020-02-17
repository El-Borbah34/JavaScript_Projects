// The following function adds a smooth scrolling to all links

$(document).ready(function(){
    $("a").on('click', function(event) {
        
        //Make sure this.Link has a value before overriding default behavior
        if (this.Link !== "")   {
            //Prevent default anchor click behavior
            event.preventDefault();

            //Store Link
            var Link = this.Link;

            //Using jQuery's animate() method to add smooth page scroll
            // the optional number (2000) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 2000, function(){

                // Add link(#) to URL when done scrolling (default click behavior)
                window.location.Link = Link;
            });
        } // END IF
    });
});

    //This function opens and closes the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm()    {
    document.getElementById("myForm").style.display = "none";
    this.Close();
}