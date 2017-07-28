// $(function() {
  var $wordCount = 10;
  var $guessCount = 4;
  var $password = '';

  var $start = $('#start');
  $start.on('click', function() {
    $('#start-screen').toggleClass('hide show');
    $('#game-screen').toggleClass('hide show');
    startGame();
  });

  // function toggleClasses(element) {
  //   for (var $i = 1; i < arguments.length; i++) {
  //     element.classList.toggle(arguments[i]);
  //   }
  // }

  function startGame() {
    // get random words and append them to the DOM
    var $wordList = $("#word-list");
    var $randomWords = getRandomValues(words, $wordCount);
    $.each($randomWords,function(i, word) {
      var $li = $("<li>");
      $li.text(word);
      $wordList.append($li);
    });
  
    // set a secret password and the guess count display
    $password = getRandomValues($randomWords, 1)[0];
    setGuessCount($guessCount);

    // add update listener for clicking on a word
    $wordList.on('click', updateGame);
  }

  function getRandomValues(array, numberOfVals) {
    return shuffle(array).slice(0, numberOfVals);
  }

  function shuffle(array) {
    var arrayCopy = array.slice();
    for (var idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      var idx2 = Math.floor(Math.random() * (idx1 + 1));
      
      // swap elements at idx1 and idx2
      var temp = arrayCopy[idx1];
      arrayCopy[idx1] = arrayCopy[idx2];
      arrayCopy[idx2] = temp;
    }
    return arrayCopy;
  }


  function setGuessCount(newCount) {
    $guessCount = newCount;
    $("#guesses-remaining").text("Guesses remaining: " + $guessCount + ".");
  }

  

  function updateGame(e) {
    let $target = $(e.target)
    
    if ($target.is("li") && !$target.hasClass('disabled')) {
      // grab guessed word, check it against password, update view
      var $guess = $target.text();
      var $similarityScore = compareWords($guess, $password);
      $target.addClass("disabled");
      $target.text($target.text() + " --> Matching Letters: " + $similarityScore);
      setGuessCount($guessCount - 1);

      // check whether the game is over
      if ($similarityScore === $password.length) {
        $("#winner").toggleClass('show hide');
        $(this).off();
      } else if ($guessCount === 0) {
        $("#loser").toggleClass('show hide');
        $(this).off();
      }
    }
  }

  function compareWords(word1, word2) {
    if (word1.length !== word2.length) throw "Words must have the same length";
    var count = 0;
    for (var i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) count++;
    }
    return count;
  }
// });