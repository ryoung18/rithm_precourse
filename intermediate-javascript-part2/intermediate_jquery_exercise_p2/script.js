

let $movie = $('#movie');
let $rating = $('#rating');
let $tbody = $('tbody');
let $addBtn = $('#addBtn');
let movieObj = {};

//Rating input - Accept only values from 0 to 10
$rating.keyup(function(e){
	let val = $(e.target);
	let numCheck = val.val() >=0 && val.val() <=10;

	if(!numCheck){
		val.val('');
	}

})

//Add item to table
$addBtn.on("click", function(){
	$title = $movie.val()
								 .trim();

	if(movieObj[$title.toLowerCase()] === undefined && !($rating.val() === '') && !($title === '')){
		movieObj[$title.toLowerCase()] = $title;

		$tbody.append(
			'<tr> <td>' +
					$title +
				'</td><td>' + 
					+$rating.val() +
				'</td><td>' +
					'<button class="btn btn-sm btn-block btn-danger deleteButton">Delete</button>' + 
			'</td></tr>')

		$movie.val('')
		$rating.val('')

	}
})

// Delete Title
$tbody.on('click', 'button', function(e){
	let remove = $(e.target).parent()
													.prev()
													.prev()
													.html()
													.toLowerCase();
	
	delete movieObj[remove];

	$(e.target).parent().parent().remove()
})

