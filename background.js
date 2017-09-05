var bgColorArray = ['//i.imgur.com/dPrY8gp.jpg,//i.imgur.com/xoI7bpp.png,//i.imgur.com/AOCLnfM.jpg,//i.imgur.com/zJ73fiT.png,//i.imgur.com/ckGvKW5.png,//i.imgur.com/RbP0rDe.gif,i.imgur.com/ksHsMC8.png'],

selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];
$('#backg').css('background', 'url(' + selectBG + ')')
var vplayer = videojs("ytapiplayer")
vplayer.on('error', function(e){
window.setInterval(function(){

    vplayer.pause();
    vplayer.currentTime = 0;
    vplayer.load(e);

    console.log("reloading player");
}, 10000);

});
var myElement = document.querySelector("#videowrap");
myElement.style.display = "block";
$("body").addClass('fluid');
