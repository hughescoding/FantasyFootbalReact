import axios from "axios";

export default {
  // Gets all books
  getPlayers: function() {
    return axios.get("/api/players");
  },
  // // Gets the book with the given id
  // getPlayers: function(id) {
    // return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/register", userData);
  }
};
