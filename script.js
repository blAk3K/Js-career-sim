// Use the API_URL variable to make fetch requests to the API.
// Replace the placeholder with your cohort name (ex: 2109-UNF-HY-WEB-PT)
const cohortName = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players`;

/**
 * Fetches all players from the API.
 * @returns {Object[]} the array of player objects
 */
// TODO
const fetchAllPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    const allPlayers = jsonData.data.players
    renderAllPlayers(allPlayers)

  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
    return [];
  }
};


/**
 * Fetches a single player from the API.
 * @param {number} playerId
 * @returns {Object} the player object
 */
// TODO
const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(API_URL/`playerId`);
    console.log(response)
    const jsonData = await response.json();
    const singlePlayer = jsonData.data.player
    renderSinglePlayer(singlePlayer)
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    return[]
  }
};

/**
 * Adds a new player to the roster via the API.
 * @param {Object} playerObj the player to add
 * @returns {Object} the player returned by the API
 */
const addNewPlayer = async (playerObj) => {
  try {
    // TODO
  } catch (err) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
};

/**
 * Removes a player from the roster via the API.
 * @param {number} playerId the ID of the player to remove
 */
const removePlayer = async (playerId) => {
  try {
    // TODO
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

/**
 * Updates `<main>` to display a list of all players.
 *
 * If there are no players, a corresponding message is displayed instead.
 *
 * Each player is displayed in a card with the following information:
 * - name
 * - id
 * - image (with alt text of the player's name)
 *
 * Additionally, each card has two buttons:
 * - "See details" button that, when clicked, calls `renderSinglePlayer` to
 *    display more information about the player
 * - "Remove from roster" button that, when clicked, will call `removePlayer` to
 *    remove that specific player and then re-render all players
 *
 * Note: this function should replace the current contents of `<main>`, not append to it.
 * @param {Object[]} playerList - an array of player objects
 */
// TODO
const renderAllPlayers = (playerList) => {
  const ul = document.querySelector(`ul`);

  for (let i = 0; i < playerList.length; i++) {
    
    const singularPlayer = playerList[i];
    // create a li 
    const newLi = document.createElement(`li`);
   
    newLi.innerText = singularPlayer.name;
    console.log(newLi)
    newLi.addEventListener(`click`, () => {
      
      fetchSinglePlayer(singularPlayer.id)
    });
    ul.appendChild(newLi);
  }
};


/**
 * Updates `<main>` to display a single player.
 * The player is displayed in a card with the following information:
 * - name
 * - id
 * - breed
 * - image (with alt text of the player's name)
 * - team name, if the player has one, or "Unassigned"
 *
 * The card also contains a "Back to all players" button that, when clicked,
 * will call `renderAllPlayers` to re-render the full list of players.
 * @param {Object} player an object representing a single player
 */
const renderSinglePlayer = (player) => {
  // TODO
};

/**
 * Fills in `<form id="new-player-form">` with the appropriate inputs and a submit button.
 * When the form is submitted, it should call `addNewPlayer`, fetch all players,
 * and then render all players to the DOM.
 */
const renderNewPlayerForm = () => {
  try {
    // TODO
  } catch (err) {
    console.error("Uh oh, trouble rendering the new player form!", err);
  }
};

/**
 * Initializes the app by fetching all players and rendering them to the DOM.
 */
const init = async () => {
  await fetchAllPlayers();


  renderNewPlayerForm();
};

// This script will be run using Node when testing, so here we're doing a quick
// check to see if we're in Node or the browser, and exporting the functions
// we want to test if we're in Node.
if (typeof window === "undefined") {
  module.exports = {
    fetchAllPlayers,
    fetchSinglePlayer,
    addNewPlayer,
    removePlayer,
    renderAllPlayers,
    renderSinglePlayer,
    renderNewPlayerForm,
  };
} else {
  init();
}
