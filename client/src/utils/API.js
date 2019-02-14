import axios from "axios";

export default {
  // Gets all players
  getPlayers: function() {
    return axios.get("/api/players");
  },
  
  saveUser: function(userData) {
    return axios.post("/api/", userData);
  }

};


