console.log("Welcome to Spotify");

let songindex = 0;
let a=new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let si=Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Let me Love You",filePath: "songs/1.mp3",coverPath:"cover1.jpg"},
    {songName: "Let me Love You",filePath: "songs/2.mp3",coverPath:"2.jpg"},
    {songName: "Let me Love You",filePath: "songs/3.mp3",coverPath:"3.jpg"},
    {songName: "Let me Love You",filePath: "songs/4.mp3",coverPath:"4.jpg"},
    {songName: "Let me Love You",filePath: "songs/5.mp3",coverPath:"5.jpg"},
    {songName: "Let me Love You",filePath: "songs/6.mp3",coverPath:"6.jpg"},
    {songName: "Let me Love You",filePath: "songs/7.mp3",coverPath:"7.jpg"},
    {songName: "Let me Love You",filePath: "songs/8.mp3",coverPath:"8.jpg"},

]

si.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(a.paused || a.currentTime<=0){
        a.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
   
    }
    else{
        a.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})

a.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    p=parseInt((a.currentTime/a.duration)*100);
    myProgressBar.value=p;

})

myProgressBar.addEventListener('change',()=>{
    a.currentTime=myProgressBar.value*a.duration/100;
})


const makeAllPlays = ()=>{
    e.target.classList.add('fa-play-circle');
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    Array.from(document.getElementsByClassName('songItemplay').forEach((element)=>{
        element.addEventListener('click',(e)=>{
            console.log(e.target);
            makeAllPlays();
            mastersongname.innerText=songs[songindex].songName;
            songindex=parseInt(r.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            a.src='songs/$(songindex+1).mp3';
            a.currentTime=0;
            a.play();
            masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

        })

        })

document.getElementById('next').addEventListener('click',()=>{
    if(songindes>9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    a.src='songs/$(songindex+1).mp3';
    mastersongname.innerText=songs[songindex].songname;
    a.currentTime=0;
    a.play();
    masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})

ocument.getElementById('previous').addEventListener('click',()=>{
    if(songindes<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    a.src='songs/$(songindex+1).mp3';
    mastersongname.innerText=songs[songindex]+songname;
    a.currentTime=0;
    a.play();
    masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
})


