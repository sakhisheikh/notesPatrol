const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { graphqlExpress } = require('apollo-server-express')
const schema = require('./data/schema')
const jwt = require('express-jwt')
var jwks = require('jwks-rsa')
require('dotenv').config()

const PORT = 3000;

const app = express();

// enable CORS
app.use(cors());

// auth middleware
const auth = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256']
})

// graphql endpoint
app.use(
  '/api',
  bodyParser.json(),
  auth,
  graphqlExpress(req => ({
    schema,
    context: {
      user: {
        user: req.user
      }
    }
  }))
)

app.listen(PORT, () => {
  console.log(`The GraphQL is running on http://localhost:${PORT}/api`);
})