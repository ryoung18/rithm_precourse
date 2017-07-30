// $(function() {

	let apiWebsite = 'http://www.omdbapi.com/?apikey=thewdb&t='

	let $hideBtn = $('#removeBtn');
	let $searchBtn = $('#searchBtn');
	let $img = $('.img');
	let $show = $('#search-section');
	let toggleShow = false;

	$show.hide()


	$hideBtn.on('click', function () {
		if(toggleShow){
         	$show.slideToggle(500);
         	toggleShow = false; 
		} 
	})


	$searchBtn.on('click', function () {
		let search = $('#search').val().toLowerCase().trim();
		
		if(!toggleShow){
         	$show.slideToggle(500);
         	toggleShow = true; 
		} 
        



		$.getJSON(apiWebsite+search).then(function(response){
			
			let $movieDetails = $('.search').children().children();

			for(let i = 0; i < $movieDetails.length; i++ ){
				let $id = $movieDetails.eq(i).attr('id');

				if(response[$id]){
					$('#'+$id).text(response[$id])
				} else {
					$('#'+$id).text('N/A')
				}
			}

			if(response.Poster){
				$img.attr('src',response.Poster)
			} else {
				$img.attr('src','https://vignette3.wikia.nocookie.net/canadians-vs-vampires/images/a/a4/Not_available_icon.jpg')
			}
		});


	})

// })