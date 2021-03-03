
function Image(url, tags, author, link) {
	this.url = url;
	this.tags = tags;
	this.author = author;
	this.link = link;
	this.display = function() {

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.css("background", this.color)
		container.addClass("image")

		var imageHTML = "";
		imageHTML += "<img src=" + this.url + ">";
		imageHTML += "<a href='" + this.link + "'>" + this.author + "</a>"
		container.html(imageHTML)
		$(".images").prepend(container)
	}
}

var images = [
	new Image('imgs/cute-white-dog.jpeg', ["Puppy"], 'PicsbyFran', 'https://pixabay.com/photos/dog-sad-waiting-floor-sad-dog-pet-2785074/'),
]

var tagList = []

images.forEach(function(image){
	image.display();
	image.tags.forEach(function(tag){
		if(!tagList.includes(tag)) {
			tagList.push(tag);
			$(".buttons").prepend("<button class='filter' id='" + tag + "'>" + tag + "</button>")
		}
	})
})

$(".filter").on("click", function() {
	var tag = $(this).attr("id");
	
	$(".image").not("." + tag).hide();
	$("." + tag).fadeIn();

	$(".filter").removeClass("active")
	$(this).addClass("active")

})

