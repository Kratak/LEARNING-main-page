// NOTE bracket "TODO, NOTE, FIXME, CHANGES i FUTURE."
// TODO  [2]solve a problem with errors in bracklets
/* TODO: [1] remeka link/href from locals to webs 
    <a href="index.html">Home</a>
    to 
    http://kratak.pl/index.html  */
// alert("Hello! I am an alert box!!");
document.getElementById("p1").innerHTML =
	"Margaryna z jsa która działa, z polskimi znakami :3";
/*sticky*/
$(document).ready(function () {
	var NavY = $('.navbar').offset().top;
	var stickyNav = function () {
		var ScrollY = $(window).scrollTop();
		if (ScrollY > NavY) {
			$('.navbar').addClass('navbar_sticky');
		} else {
			$('.navbar').removeClass('navbar_sticky');
		}
	};
	stickyNav();
	$(window).scroll(function () {
		stickyNav();
	});
});

/*changelog*/
var text1 = "text";
var x2x = document.getElementById('x2x');
x2x.addEventListener("click", function () {
	aler_changelog();
});

function aler_changelog() {
	alert(text1);
}


window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/*//TODO [3] start to make hamburger button
	remeber display none or block*/
/* <div id="demo">
<button type="button" onclick="loadXMLDoc()">Change Content</button>
</div> */
/*function loadXMLDoc() 
	{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{document.getElementById("demo").innerHTML =
		this.responseText;}
	};
	xhttp.open("GET", "change log/text.txt", true);
	xhttp.open("GET", "change log/May 31 2018.txt", true);
	xhttp.send();
	}
*/
/*$.get('/Changelong/May 31 2018.txt',{},function(content){
      let lines=content.split('\n');

       console.log(`"May 31 2018.txt" contains ${lines.length} lines`)
      console.log(`First line : ${lines[0]}`)

});*/
