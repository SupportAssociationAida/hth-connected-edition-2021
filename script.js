/// <reference path="node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully !');
WA.sendChatMessage("Bienvenue sur WorkAdventures, n'hésitez pas à soliciter le staff pour toutes vos questions. Nous esperons que vous allez passer un super moment en notre compagnie.\n Vous pouvez fermer cette fenêtre.", "L'équipe HTH"); 


//  var config = {
//     volume : 0.5,
//     loop : false,
//     rate : 1,
//     detune : 1,
//     delay : 0,
//     seek : 0,
//     mute : false
// }


// var mySound = WA.loadSound("sons/yiruma.mp3"); 

// WA.onEnterZone('piano', () => {
//   mySound.play(config);
// })
  
// WA.onLeaveZone('piano', () => {
//   mySound.stop(); 
// });