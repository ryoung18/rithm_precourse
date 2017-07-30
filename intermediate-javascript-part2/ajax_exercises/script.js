$(function() {

	let apiWebsite = 'http://api.giphy.com/v1/gifs/search?q='
	let apiKey = '&api_key=dc6zaTOxFJmzC'

	let $removeBtn = $('#removeBtn');
	let $addBtn = $('#addBtn');
	let $section = $('section');


	$removeBtn.on('click', function () {
		$section.children().remove()
	})


	$addBtn.on('click', function () {
		let searchTerm = $('#searchTerm').val().toLowerCase().trim();

		$.getJSON(apiWebsite+searchTerm+apiKey).then(function(response){
			let randomNum = getRandomNum(0, response.data.length-1)
	    let randomImg = response.data[randomNum].images.downsized_medium.url;

	  	let newImgList = 
			'<div class="col-xs-6 col-md-3"> <span class="thumbnail"><img src="' +
			randomImg + 
			' " alt="'+
			'Image of ' + searchTerm +
			'"></span></div>';

			$section.append(newImgList)
	  
		});


	})

	function getRandomNum (min, max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}
})