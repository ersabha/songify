document.getElementById("demo").innerHTML = new Date().toLocaleDateString("en-EN", {weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  });
/*
$('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name;
			console.log(message);
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
			$('.play-icon').on('click', function() {
  toggleSong();
});
 $('body').on('keypress',function(event) {
	  if (event.keyCode == 32 || event.keyCode == 80 || event.keyCode == 112)
	  {
		toggleSong();
	  }
	}); 
         else {
            $('#name-input').addClass('error');
			 alert ("Please Enter Your Name To Further Access (3 Character atleast required) !!!");
        }
    });
\
*/
function doSomething() {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name;
			console.log(message);
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
			$('.play-icon').on('click', function() {
				toggleSong();
		});
		
		$('body').on('keypress',function(event) {
	  if (event.keyCode == 32 || event.keyCode == 80 || event.keyCode == 112)
	  {
		toggleSong();
	  }
		});
		}
		else {
            $('#name-input').addClass('error');
			 alert ("Please Enter Your Name To Further Access (3 Character atleast required) !!!");
        }
		
	}
        

	$("#name-input").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#btnSearch").click();
    }
});




// Code For Implementing Submit Action By pressing Enter.....
/*
$(document).ready(function() {

  $('#name-input').keypress(function(event) {
    // enter has keyCode = 13, change it if you want to use another button
     if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
        var name = $('#name-input').val();
        if (name.length > 3) {
            var message = "Welcome, " + name;
			console.log(message);
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
			$('.play-icon').on('click', function() {
  toggleSong();
});
	 }}
    
  });

}); 





	 $('body').on('keypress',function(event) {
	  if (event.keyCode == 32 || event.keyCode == 80 || event.keyCode == 112)
	  {
		toggleSong();
	  }
	}); 
        } else {
            $('#name-input').addClass('error');
			 alert ("Please Enter Your Name To Further Access (3 Character atleast required) !!!");
        }
    });
	*/


function toggleSong() {
  var song = document.querySelector('audio');

  if(song.paused == true) {
    console.log('Music is Playing');
    $('.play-icon').removeClass('fa-play').addClass('fa-pause');
    song.play();
   }
   else {
    console.log('Music is Paused');
    $('.play-icon').removeClass('fa-pause').addClass('fa-play');
    song.pause();
   }
}
function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
function updateCurrentTime() {
    //Modify the updateCurrentTime() function like this

    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);

    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
}






 
 
	
 /* $('body').on('keypress',function(event){
    var target = event.target;
                            if (event.keyCode == 32 && target.tagName !='INPUT'){
      toggleSong();
   } 
});
 */
 
var songList = ['Saari Ki Saari','Teri Meri Dosti','Tu Dua Hai','Mere Nishaan','Jeena Jeena','Ishq Chadha Hai' ]; 

var artistList = ['Darshan Raval','Darshan Raval','Darshan Raval','Darshan Raval','Darshan Raval','Darshan Raval' ];

var albumList = ['DR-Album','DR-Album','DR-Album','DR-Album','DR-Album','DR-Album' ]; 

var song_durationList = ['4:08','2:54','3:27','4:10','3:02','2:59' ]; 


var fileNames = ['song1.mp3','song2.mp3', 'song3.mp3','song4.mp3','song5.mp3','song6.mp3'];

window.onload = function() {
  $('#song1 .song-name').text(songList[0]);
  $('#song2 .song-name').text(songList[1]);
  $('#song3 .song-name').text(songList[2]);
  $('#song4 .song-name').text(songList[3]);
  $('#song5 .song-name').text(songList[4]);
  $('#song6 .song-name').text(songList[5]);
  //for Artist list
   $('#song1 .song-artist').text(artistList[0]);
   $('#song2 .song-artist').text(artistList[1]);
   $('#song3 .song-artist').text(artistList[2]);
   $('#song4 .song-artist').text(artistList[3]);
   $('#song5 .song-artist').text(artistList[4]);
   $('#song6 .song-artist').text(artistList[5]);
   //for Album list
   $('#song1 .song-album').text(albumList[0]);
   $('#song2 .song-album').text(albumList[1]);
   $('#song3 .song-album').text(albumList[2]);
   $('#song4 .song-album').text(albumList[3]);
   $('#song5 .song-album').text(albumList[4]);
   $('#song6 .song-album').text(albumList[5]);

//for Sing Duration list
   $('#song1 .song-length').text(song_durationList[0]);
   $('#song2 .song-length').text(song_durationList[1]);
   $('#song3 .song-length').text(song_durationList[2]);
   $('#song4 .song-length').text(song_durationList[3]);
   $('#song5 .song-length').text(song_durationList[4]);
   $('#song6 .song-length').text(song_durationList[5]);




$('#song1').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[0]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[0];
    toggleSong();
  }
});
$('#song2').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[1]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[1];
    toggleSong();
  }
});
$('#song3').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[2]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[2];
    toggleSong();
  }
});
$('#song4').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[3]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[3];
    toggleSong();
  }
});
$('#song5').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[4]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[4];
    toggleSong();
  }
});
$('#song6').click(function() {
  var audio = document.querySelector('audio');
  var currentSong = audio.src;
  if(currentSong.search(fileNames[5]) != -1)
  {
    toggleSong();
  }
  else {
    audio.src = fileNames[5];
    toggleSong();
  }
});
  updateCurrentTime();

  setInterval(function() {
    updateCurrentTime();
  },1000);
  
};

document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
}
