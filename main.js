function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*///////// banner ////////////////// */
$(document).ready(function() {
	        $('#slideshow').cycle({
	        	fx: 'scrollHorz',
	        	speed: 500,
	        	timeout: 2000,
	        	pause: 1
	        });
	    });

/*////////////////// heading animation ///////////// */

$(document).ready(function(){
	$("#home h1").animate( { fontSize: "500%", opacity: 1, left: "+=375" }, 2000 )
		         .animate( { fontSize: "350%", left: "-=200" }, 3000 );

/* ////////////////// about content animation ////////// */
var string = "Visit Our New Collection!";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();

/*/ //////////////// image rollover //////////////// */
	$("#image_rollovers img").each(function() {

		var oldURL = $(this).attr("src");
		var newURL = $(this).attr("id");

		var rolloverImage = new Image();
		rolloverImage.src = newURL;

		$(this).hover(
			function() {
				$(this).attr("src", newURL);
			},
			function() {
				$(this).attr("src", oldURL);
			}
		);
	});
	document.getElementById("button1").onclick=function(){
		window.location.href="list.html";
	}
  });



