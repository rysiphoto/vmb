const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("express-jwt");
const routes = require("./routes");
const jwksRsa = require("jwks-rsa");
const app = express();
const PORT = process.env.PORT || 3001;
// Create a new Express app


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// Accept cross-origin requests from the frontend app
app.use(cors({ origin: 'http://localhost:3000' }));

// // Set up Auth0 configuration
const authConfig = {
  domain: "localhost:3000",
  audience: "https://vehiclemodbook.auth0.com/api/v2/"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/VehicleModBook");
// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

// Start the app
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});