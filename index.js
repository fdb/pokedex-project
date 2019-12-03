const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path');
const fs = require('fs');


const functions = require("./functions");

const pokedexSchemaString = fs.readFileSync(path.join(__dirname, './data/pokedex-schema.json'), 'utf8');
const pokedexSchema = JSON.parse(pokedexSchemaString);

const pokedexString = fs.readFileSync(path.join(__dirname, './data/pokedex.json'), 'utf8');
const pokedex = JSON.parse(pokedexString);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("\n", req.method, ": ", req.path);
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'welcome to the pokedex api!',
    routes: app._router.stack // all routes are GET
      .filter(r => r.route && r.route.path)
      .map(r => r.route.path)
  });
});

app.get('/schema', (req, res) => {
  res.json(pokedexSchema);
});

app.get('/pokedex', (req, res) => {
  res.json(pokedex);
});



app.get('/findBy/keyValue/:key/:value', (req, res) => {
  console.log(req.params);
  const key = req.params.key;
  const value = req.params.value;
  const result = functions.findBy.keyValue(pokedex, key, value);
  console.log({ result });
  res.json(result);
});

app.get('/findBy/type/:type', (req, res) => {
  console.log(req.params);
  const type = req.params.type;
  const result = functions.findBy.type(pokedex, type);
  console.log({ result });
  res.json(result);
});


app.get('/findBy/value/:value', (req, res) => {
  console.log(req.params);
  const value = req.params.value;
  const result = functions.findBy.value(pokedex, value);
  console.log({ result });
  res.json(result);
});


app.get('/findBy/weakness/:type', (req, res) => {
  console.log(req.params);
  const type = req.params.type;
  const result = functions.findBy.weakness(pokedex, type);
  console.log({ result });
  res.json(result);
});


app.get('/evolutionsOf/:name', (req, res) => {
  console.log(req.params);
  const name = req.params.name;
  const result = functions.evolutionsOf(pokedex, name);
  console.log({ result });
  res.json(result);
});


app.get('/typeStats/:type', (req, res) => {
  console.log(req.params);
  const type = req.params.type;
  const result = functions.typeStats(pokedex, type);
  console.log({ result });
  res.json(result);
});


app.get('/valuesForKey/:key', (req, res) => {
  console.log(req.params);
  const key = req.params.key;
  const result = functions.valuesForKey(pokedex, key);
  console.log({ result });
  res.json(result);
});



const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`pokeServer running on port ${port}`);
});

