/// <reference path="node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully !');
WA.sendChatMessage("Bienvenue sur WorkAdventures, n'hésitez pas à soliciter le staff pour toutes vos questions. Nous esperons que vous allez passer un super moment en notre compagnie.\n Vous pouvez fermer cette fenêtre.", "L'équipe HTH"); 


let obj_Popup_sport1; 
let obj_Popup_sport2; 
let obj_Popup_rose; 
let obj_son_piano;


obj_Popup_sport1 = WA.onEnterZone('sport1', () => {
  WA.openPopup('popup_sport1', 'Bienvenue dans la salle Teddy Riner !', [{
      label: "Got it!",
      className: "primary",
      callback: (popup) => {
          // Close the popup when the "Close" button is pressed.
          popup.close();
      }
  }])
})

WA.onLeaveZone('sport1', () => {
    obj_Popup_sport1.close();
});


obj_Popup_sport2 = WA.onEnterZone('sport2', () => {
    WA.openPopup('popup_sport2', 'Bienvenue dans la salle Benjamin Pavard !', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('sport2', () => {
    obj_Popup_sport2.close();
  });
  

  obj_Popup_rose = WA.onEnterZone('solo_rose', () => {
    WA.openPopup('popup_solo_rose', 'Bienvenue dans la salle solo de M.Rose !', [{
        label: "Got it!",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('solo_rose', () => {
    obj_Popup_rose.close();
  });
  


 var config = {
    volume : 0.5,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
}


// obj_son_piano = WA.onEnterZone('piano', () => {
    
//     var son_piano = WA.loadSound("sons/yiruma.mp3").play(config);

//   })
  
//   WA.onLeaveZone('sport2', () => {
//     son_piano.stop(); 
//   });