const axios = require("axios");
const router = require("express").Router();

console.log("Included articles.js");
router.get("/", (req, res) => {
	console.log(req.query);
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", { params: { q: req.query.q, "api-key":"06b83e42c5a74ca3b13baed0b02c2ecc" }})
    .then(results => res.json(results.data.response.docs))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
