console.log('welcome to spotify');
// initialized the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
// console.log(audioElement)
let masterPlay = document.getElementById('masterPlay');
let myprogess = document.getElementById('my-progess');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName')



// console.log(masterSongName)

let songs  = [
  { songname: "ABCD(any-body-can-dance)",filepath: "songs/1.mp3", coverPath:"covers/1.jpg"},
  { songname: "A (any-body-can-dance)",filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songname: "B (any-body-can-dance)",filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songname: "C (any-body-can-dance)",filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songname: "D (any-body-can-dance)",filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songname: "AB (any-body-can-dance)",filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songname: "BC (any-body-can-dance)",filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
  { songname: "CD (any-body-can-dance)",filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songname: "AD (any-body-can-dance)",filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  { songname: "AC (any-body-can-dance)",filepath: "songs/10.mp3", coverPath: "covers/10.jpg" },
 ];
    songItem.forEach((element , i)=>{
      // console.log(element , i)
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("song-name")[0].innerText = songs[i].songname;
    })

//  
// handle play/pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play()
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause()
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity =0;
  }
  
})
//  lissen to event
 audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    // console.log(progress);
    myprogess.value = progress;

  //   myprogess.addEventListener('change',()=>{
  //     audioElement.currentTime = (myprogess.value * audioElement)/100 ;
  //  });

 })

 myprogess.addEventListener('change', ()=>{
    audioElement.currentTime = (myprogess.value * audioElement)/100 ;
 });
const makeallplays = (element)=>{
  
  Array.from( document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause');
    gif.style.opacity = 1;
    // element.classList.add('fa-circle-play')
  });
      

}
// if(audioElement.paused || audioElement.currentTime<=0){
 Array.from( document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
     makeallplays();
    if(audioElement.paused || audioElement.currentTime <= 0){
      songIndex = (e.target.id)
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].songname;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
   }
   else{
    audioElement.pause()
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity =0;
  }
  })
  


 })

// else{
//   audioElement.pause();
//   masterPlay.classList.remove('fa-circle-pause');
//   masterPlay.classList.add('fa-circle-play');
//   gif.style.opacity = 1;

// }

 document.getElementById('next').addEventListener('click', ()=>{
   if(songIndex >= 10){
     songIndex =0;
   }
   else{
     songIndex += 1;
   }
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].songname;

      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
 })
 document.getElementById('previous').addEventListener('click', ()=>{
   if(songIndex <= 1){
     songIndex =0;
   }
   else{
     songIndex -= 1;
   }
      audioElement.src = `songs/${songIndex }.mp3`;
      masterSongName.innerText = songs[songIndex].songname;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
 })
 
   