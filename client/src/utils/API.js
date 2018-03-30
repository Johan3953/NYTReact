import axios from "axios";



export default {
  // Gets all books
  getArticles: function(query) {
    return axios.get("/api/articles", {params: { q: query
    }
  });
  },
};
