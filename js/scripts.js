
function Image(url, title, tags, author, link) {
	this.url = url;
	this.title = title;
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
		imageHTML += "<p class='title'>" + title + "</p>" 
		imageHTML += "<a href='" + this.link + "' class='authors'>" + this.author + "</a>"
		container.html(imageHTML)
		$(".images").prepend(container)
	}
}

var images = [
	new Image('imgs/dog1.jpg', "Bored Sunday", ["Puppy", "Cute"], 'PicsbyFran', 'https://pixabay.com/photos/dog-sad-waiting-floor-sad-dog-pet-2785074/'),
	new Image('imgs/dog2.jpg', "Throw That Ball", ["Adult", "Short-Hair"], 'Vizslafotozas', 'https://pixabay.com/photos/dog-animal-portrait-pet-brown-3277416/'),
	new Image('imgs/dog3.jpg', "Im Here too", ["Adult", "Short-Hair"], 'LUM3N', 'https://pixabay.com/photos/dog-view-sweet-animal-portrait-838281/'),
	new Image('imgs/dog4.jpg', "New Puppy", ["Puppy", "Short-Hair", "Cute"], 'congerdesign', 'https://pixabay.com/photos/dachshund-puppy-young-animal-1519374/'),
	new Image('imgs/dog5.jpg', "Sleepy", ["Puppy", "Short-Hair", "Sleepy"], 'Free-Photos', 'https://pixabay.com/photos/pug-dog-blanket-bed-face-animal-1210025/'),
	new Image('imgs/dog6.jpg', "Why Am I Out Here?", ["Adult", "Outdoor-Lover", "Medium-Hair"], 'ClaudiaWollesen', 'https://pixabay.com/photos/dog-snow-st-bernard-dog-winter-pet-1168663/'),
	new Image('imgs/dog7.jpg', "Tired", ["Adult", "Lab"], 'Chiemsee2016', 'https://pixabay.com/photos/dog-pet-hovawart-black-dog-head-1194087/'),
	new Image('imgs/dog8.jpg', "Beach Day", ["Adult", "Husky"], 'pixel2013', 'https://pixabay.com/photos/husky-dog-dog-breed-animal-3380550/'),
	new Image('imgs/dog9.jpg', "Photogenic", ["Puppy", "Medium-Hair", "Cute"], 'Couleur', 'https://pixabay.com/photos/australian-shepherd-dog-animal-3237735/'),
	new Image('imgs/dog10.jpg', "I See a Squirel", ["Adult", "Short-Hair", "Lab"], 'Chiemsee2016', 'https://pixabay.com/photos/dog-labrador-pet-dog-head-profile-1194083/'),

]

var tagList = ["clear"]
$(".buttons").prepend("<button class='filter' id='" + "clear" + "'>" + "Clear-Tags" + "</button>")

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
	if(tag == "clear") {
		$(".filter").removeClass("active")
		$(".image").not("." + tag).show()
	} else {
		$(".image").not("." + tag).hide();
		$("." + tag).fadeIn();
		$(".filter").removeClass("active")
		$(this).addClass("active")
	}
})

