/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
WA.sendChatMessage('Hello world', 'Mr Robot');


let Popup_sport1; 

WA.onEnterZone('sport1', () => {
  WA.openPopup('popup', 'Bienvenu dans la salle de sport!', [{
      label: "Got it!",
      className: "primary",
      callback: (Popup_sport1) => {
          // Close the popup when the "Close" button is pressed.
          Popup_sport1.close();
      }
  }])
})

WA.onLeaveZone('sport1', () => {
    Popup_sport1.close();
});