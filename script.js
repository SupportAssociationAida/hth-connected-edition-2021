/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
WA.sendChatMessage("Bienvenue sur WorkAdventures, n'hésitez pas à soliciter le staff pour toutes vos questions. Nous esperons que vous allez passer un super moment en notre compagnie.\n Vous pouvez fermer cette fenêtre.", "L'équipe HTH"); 


let obj_Popup_sport1; 
let obj_Popup_sport2; 


WA.onEnterZone('sport1', () => {
  WA.openPopup('popup_sport1', 'Bienvenue dans la salle de sport !', [{
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


