/* For the nav bar */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}   
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* script for rotating text bar */
/* Taken and Adapted from Rachel Smith's Rotating Text */
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

//iterate through all of the words in the document, with each word call split letter
words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    //start at the current word (initially 0)
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }
    //basically increment the current word until end then loop around
    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
    setTimeout(function() {cw[i].className = 'letter out';}, i*80);
}

function animateLetterIn(nw, i) {
    setTimeout(function() {nw[i].className = 'letter in';}, 340+(i*80));
}
//passed word 
function splitLetters(word) {
    //content is the thing inside the word tag 
    var content = word.innerHTML;
    //set the word = to nothing so that the words dont superimpose
    word.innerHTML = '';
    var letters = [];
    //iterate through each of the letters in the array content
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        //add the letter to word 
        word.appendChild(letter);
        //check if the letter is a space; needs to be dealt with different
        if(letter.innerHTML == " "){
            //space representation
            letter.innerHTML = "&nbsp;"
        }
        //push the letter to the letters array
        letters.push(letter);
    }
    //push to the word array, the array of letters
    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);
