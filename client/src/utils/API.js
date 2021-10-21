import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    search: function (query) {
        return axios.get(BASEURL + query);
    },

    save: function (bookData) {
        return axios.post("/api/books", bookData, {timeout:10});

    },

    getBooks: function () {
        return axios.get("/api/books");
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id.id);
    }

}