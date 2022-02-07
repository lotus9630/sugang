const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log(req.user);
  res.send(`<form action="/auth/login" method="post">
  <section>
    <label for="username">email</label>
    <input
      id="email"
      name="email"
      type="text"
      autocomplete="email"
      required
      autofocus
    />
  </section>
  <section>
    <label for="current-password">Password</label>
    <input
      id="current-password"
      name="password"
      type="password"
      autocomplete="current-password"
      required
    />
  </section>
  <button type="submit">Sign in</button>
</form>
  
`);
});

module.exports = router;
