import axios from "axios";

export default {
  // Gets all players
  getPlayers: function() {
    return axios.get("/api/players");
  },
  
  saveUser: function(userData) {
    return axios.post("/api/register", userData);
  },

  login: function(userData) {
    
    return axios.post("/api/login", userData)
  },

  draftPlayer: function(playerData) {
    return axios.put("/api/update", playerData)
  }
};
