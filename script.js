/// <reference path="node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully !');
WA.sendChatMessage("Bienvenue sur WorkAdventures, n'hésitez pas à soliciter le staff pour toutes vos questions. Nous esperons que vous allez passer un super moment en notre compagnie.\n Vous pouvez fermer cette fenêtre.", "L'équipe HTH"); 

var SoundPiano = WA.loadSound("sons/yiruma.mp3"); 
var SoundMarche = WA.loadSound("sons/marche.mp3"); 
var SoundForet = WA.loadSound("sons/foret.mp3"); 



 var config = {
    volume : 0.1,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
}



WA.onEnterZone('piano', () => {
  SoundPiano.play(config);
})
  
WA.onLeaveZone('piano', () => {
  SoundPiano.stop(); 
});


WA.onEnterZone('marche', () => {
  SoundMarche.play(config);
})
  
WA.onLeaveZone('marche', () => {
  SoundMarche.stop(); 
});

WA.onEnterZone('foret', () => {
  SoundForet.play(config);
})
  
WA.onLeaveZone('foret', () => {
  SoundForet.stop(); 
});
