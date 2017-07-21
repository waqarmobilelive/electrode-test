"use strict";

const Promise = require("bluebird");
const express = require("express");
const app = express();
const path = require("path");
const _ = require("lodash");
const defaultConfig = require("electrode-confippet").config;
const Confippet = require("electrode-confippet");

var router = express.Router(); 
app.use("/api",router);

const initialState = {
    products: [
      {
        id:'1',title:'product1',description:'description goes here'
      },
      {
        id:'2',title:'product2',description:'description goes here'
      },
      {
        id:'3',title:'product3',description:'description goes here'
      },
      {
        id:'4',title:'product4',description:'description goes here'
      },
      {
        id:'5',title:'product5',description:'description goes here'
      },
      {
        id:'6',title:'product6',description:'description goes here'
      },
      {
        id:'7',title:'product7',description:'description goes here'
      },
      {
        id:'8',title:'product8',description:'description goes here'
      },
      {
        id:'9',title:'product9',description:'description goes here'
      },
      {
        id:'10',title:'product10',description:'description goes here'
      }
    ]
  };

router.get('/products', function(req, res) {
    res.json({ products: initialState.products });   
}); 

router.get('/products/:id', function(req, res) {
  if(req.params.id != null){
    for(var i = 0; initialState.products[i];i++){
      if(initialState.products[i].id == req.params.id){
          res.json({ product: initialState.products[i] });   
      }
    }
  }
  res.json({product:null});
}); 

const loadConfigs = function(userConfig) {
  //use confippet to merge user config and default config
  if (_.get(userConfig, "plugins.electrodeStaticPaths.enable")) {
    userConfig.plugins.electrodeStaticPaths.enable = false;
  }

  return Confippet.util.merge(defaultConfig, userConfig);
};

const setStaticPaths = function() {
  app.use(
    express.static(
      path.join(
        __dirname,
        "../..",
        defaultConfig.$("plugins.electrodeStaticPaths.options.pathPrefix")
      )
    )
  );
};

const setRouteHandler = () =>
  new Promise((resolve, reject) => {
    const webapp = p => (p.startsWith(".") ? path.resolve(p) : p);
    const registerRoutes = require(webapp(defaultConfig.$("plugins.webapp.module"))); //eslint-disable-line

    return registerRoutes(app, defaultConfig.$("plugins.webapp.options"), err => {
      if (err) {
        console.error(err); //eslint-disable-line
        reject(err);
      } else {
        resolve();
      }
    });
  });

const startServer = () =>
  new Promise((resolve, reject) => {
    app.listen(defaultConfig.$("connections.default.port"), err => {
      if (err) {
        reject(err);
      } else {
        //eslint-disable-next-line
        console.log(`App listening on port: ${defaultConfig.$("connections.default.port")}`);
        resolve();
      }
    });

  });

module.exports = function electrodeServer(userConfig, callback) {
  const promise = Promise.resolve(userConfig)
    .then(loadConfigs)
    .then(setStaticPaths)
    .then(setRouteHandler)
    .then(startServer);

  return callback ? promise.nodeify(callback) : promise;
};
