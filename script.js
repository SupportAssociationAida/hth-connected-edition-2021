/// <reference path="node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully !');
WA.sendChatMessage("Bienvenue sur WorkAdventures, n'hésitez pas à soliciter le staff pour toutes vos questions. Nous esperons que vous allez passer un super moment en notre compagnie.\n Vous pouvez fermer cette fenêtre.", "L'équipe HTH"); 





let obj_Popup_sport1 = WA.onEnterZone('sport1', () => {
  WA.openPopup('popup_sport1', 'Bienvenue dans la salle Teddy Riner !', [{
      label: "Merci !",
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


let obj_Popup_sport2 = WA.onEnterZone('sport2', () => {
    WA.openPopup('popup_sport2', 'Bienvenue dans la salle Benjamin Pavard !', [{
        label: "Merci !",
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
  

  let obj_Popup_rose = WA.onEnterZone('solo_rose', () => {
    WA.openPopup('popup_solo_rose', 'Bienvenue dans la salle solo de M.Rose !', [{
        label: "Merci !",
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
  
  let obj_Popup_moutarde = WA.onEnterZone('solo_moutarde', () => {
    WA.openPopup('popup_solo_moutarde', 'Bienvenue dans la salle solo de M.Moutarde !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('solo_moutarde', () => {
    obj_Popup_moutarde.close();
  });

  let obj_Popup_blanc = WA.onEnterZone('solo_blanc', () => {
    WA.openPopup('popup_solo_blanc', 'Bienvenue dans la salle solo de M.LeBlanc !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('solo_blanc', () => {
    obj_Popup_blanc.close();
  });

  
  let obj_Popup_violet = WA.onEnterZone('solo_pervenche', () => {
    WA.openPopup('popup_solo_pervenche', 'Bienvenue dans la salle solo de M.Pervenche !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('solo_pervenche', () => {
    obj_Popup_violet.close();
  });

  let obj_Popup_violet = WA.onEnterZone('solo_violet', () => {
    WA.openPopup('popup_solo_violet', 'Bienvenue dans la salle solo de M.Violet !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('solo_violet', () => {
    obj_Popup_violet.close();
  });


let obj_Popup_vert = WA.onEnterZone('solo_vert', () => {
    WA.openPopup('popup_solo_vert', 'Bienvenue dans la salle solo de M.Olive !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('solo_vert', () => {
    obj_Popup_vert.close();
  });


  let obj_Popup_scene = WA.onEnterZone('scene', () => {
    WA.openPopup('popup_scene', 'Bienvenue dans la salle Molière !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('zone_scene', () => {
    obj_Popup_scene.close();
  });

  let obj_Popup_musique = WA.onEnterZone('musique', () => {
    WA.openPopup('popup_scene', 'Bienvenue dans la salle Beatles !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('zone_musique', () => {
    obj_Popup_musique.close();
  });


  let obj_Popup_art1 = WA.onEnterZone('art1', () => {
    WA.openPopup('popup_art1', 'Bienvenue dans la salle Picasso !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('zone_art1', () => {
    obj_Popup_art1.close();
  });

  let obj_Popup_art2 = WA.onEnterZone('art2', () => {
    WA.openPopup('popup_art2', 'Bienvenue dans la salle Monet !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('zone_art2', () => {
    obj_Popup_art1.close();
  });

  let obj_Popup_jeux = WA.onEnterZone('jeux', () => {
    WA.openPopup('popup_jeux', 'Bienvenue dans la salle Monte Carlo !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('zone_jeux', () => {
    obj_Popup_jeux.close();
  });

  let obj_Popup_discussion = WA.onEnterZone('discussion', () => {
    WA.openPopup('popup_discussion', 'Bienvenue dans la salle Bali !', [{
        label: "Merci !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }])
  })
  
  WA.onLeaveZone('zone_discussion', () => {
    obj_Popup_discussion.close();
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


var mySound = WA.loadSound("sons/yiruma.mp3"); 

WA.onEnterZone('piano', () => {
  mySound.play(config);
})
  
WA.onLeaveZone('piano', () => {
  mySound.stop(); 
});