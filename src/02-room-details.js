/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  let dinoFound = false // accumulator 
  let dino = ""
  for (let i = 0; i < dinosaurs.length; i++) {
    if (dinosaurs[i].name === dinosaurName) { //access the dinosaurs inside of the room [i]
      dinoFound = true
      dino = dinosaurs[i].dinosaurId
    }
  }
  if (!dinoFound) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`
  } // outside of the for loop
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].dinosaurs.includes(dino)) {
      return rooms[i].name //returns name of room if the dino is found
    }
  } return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
}

/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */
function getConnectedRoomNamesById(rooms, id) {
  let found = false //declare variable 
  let errorMessage = "" //declare variable
  for (let i = 0; i < rooms.length; i++) // start of for loop
  if (rooms[i].roomID === id){ // looping through the index of rooms to match/see if it's true to ID
    found = true

  } //end of for loop 

  }
  let isConnectedRoom = [] //set isConnectedRoom as an empty array
  for (let i = 0; i < rooms.length; i++) { // for loop begins 
    if (rooms[i].roomId === id) {
      isConnectedRoom = rooms[i].push(connectsTo) //property, has the name of the rooms
    }
  }return isConnectedRoom 
  if (!found) {
}return `Room with ID of '${id}' could not be found.` //end of function

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
