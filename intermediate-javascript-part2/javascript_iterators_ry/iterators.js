// var songs = [{
//   name: "Smooth",
//   artist: "Santana featuring Rob Thomas",
//   year: 1999,
//   month: 7,
//   day: 23,
//   weeksAtNumberOne: 12,
//   duration: "4:00"
// }];

// Write a function called listNames which takes in an array of songs and console.logs the name of each one.
function listNames(arr){
	 arr.forEach(song => console.log(song.name))
}

// // Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: 
// //"Smooth, by Santana featuring Rob Thomas (4:00)".
function listSongDetails(arr){
	arr.forEach(song => console.log(song.name + ', by ' + song.artist + ' (' + song.duration + ')' ))
}
// // Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

function summerJamCount(arr){
	let summerMonths = [6, 7, 8];
	let count = 0;

		arr.forEach(song => {
			if(summerMonths.indexOf(song.month) > -1){
				count++
			}
		})

	return count;
}

// // Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.
// function getDurations(arr){
// 	let durationArray = [];

// 	arr.map(song => durationArray.push(song.duration))

// 	return durationArray
// }

function getDurations(songArr) {
    return songArr.map(function(song) {
        return song.duration;
    });
}


// // Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.
// function getDurationsInSeconds(arr){
// 	let durationArray = [];

// 	arr.map(song => {
// 		let splitMin = song.duration.split(":")
// 		durationArray.push( +splitMin[0] * 60 + +splitMin[1])
// 	})
// 	return durationArray
// }

function getDurationsInSeconds(songArr) {
    return songArr.map(function(song) {
        var durationNums = song.duration.split(":");
        var minutes = +durationNums[0];
        var seconds = +durationNums[1];
        return 60 * minutes + seconds;
    });
}



// // Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. 
// If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist 
// to the left of "featuring" is kept.)
function getMainArtists(arr){
	let primaryArtist = [];

	arr.map(song =>{
		artist = song.artist.split(" featuring");
		primaryArtist.push(artist[0])
	})

	return primaryArtist;
}
// // Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.
function getBigHits(arr){

	return arr.filter(song => song.weeksAtNumberOne >= 10)
	
}
// // Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.
// function getShortSongs(arr){
// 	return arr.filter(song => {
// 		let mins = song.duration.split(":");
// 		return +(mins[0]+mins[1]) < 300;
// 	})
// }

function getShortSongs(songArr) {
    return songArr.filter(function(song) {
    	console.log(song.duration[0], typeof song.duration[0], song.duration[0] < 3)
        return song.duration[0] < 3; //assumes all songs are less than 10 mins
    });
}

// // Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.
function getSongsByArtist(arr, artist){
	return arr.filter(song => song.artist === artist)
}
// // Write a function called getOneHitWonders which takes in an array of songs and returns an array of songs for artists who only appe
// function getOneHitWonders(arr){
// 	let uniqueArtist = arr.reduce((acc, song) =>{
// 			let mainArtist = song.artist.split(" featuring")[0]; //main Aritsts only

// 			if(acc[mainArtist){
// 				acc[mainArtist++;
// 			} else {
// 				acc[mainArtist = 1;
// 			}
// 			return acc;
// 		},{})	
		
// 	return arr.filter(song => {
// 		let mainArtist = song.artist.split(" featuring");
// 		return uniqueArtist[mainArtist === 1;
// 	})
// }

function getOneHitWonders(songArr) {
    var artists = songArr.map(function(song) { return song.artist; });
    return songArr.filter(function(song) {
        return artists.indexOf(song.artist) === artists.lastIndexOf(song.artist);
    });
}



// // Refactor summerJamCount to use reduce!
function summerJamCount1(arr){
	let summerMonths = [6, 7, 8];

		return arr.reduce((acc, song) => {
			if(summerMonths.indexOf(song.month) > -1){
				 acc++
			} 
			return acc;
		},0 )
}

// // Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) 
// it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)
function getTotalDurationInSeconds(arr){
	 return getDurationsInSeconds(arr).reduce((acc, seconds) => acc + seconds)
}
// // Write a function called getSongCountByArtist which takes in an array of songs and returns an object. 
// The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.
function getSongCountByArtist(arr){
	return arr.reduce((acc, song) =>{
			let mainArtist = song.artist.split(" featuring")[0]; //main Aritsts only

			if(acc[mainArtist]){
				acc[mainArtist]++;
			} else {
				acc[mainArtist] = 1;
			}
			return acc;
		},{})
}
// // Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average 
// number of weeks that songs on the list were #1.
function averageWeeksAtNumberOne(arr){
	return arr.reduce((acc,song) => {return acc + song.weeksAtNumberOne},0)/arr.length
}































