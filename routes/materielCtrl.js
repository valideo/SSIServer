//Imports 

var bcrypt = require('bcrypt');
var jwtUtils  = require('../utils/jwt.utils');
var models    = require('../models');
var asyncLib  = require('async');

// Constants


//Routes

module.exports = {
    create: function(req, res) {

            // Params
        var idSite    = req.body.idSite;
        var ssiRef    = req.body.ssiRef;
        var nbDm    = req.body.nbDm;
        var nbDo    = req.body.nbDo;
        var nbDts    = req.body.nbDts;
        var nbDtv    = req.body.nbDtv;
        var nbDmc    = req.body.nbDmc;
        var nbDf    = req.body.nbDf;
        var nbDpa    = req.body.nbDpa;
        var nbDl    = req.body.nbDl;

        if (idSite == null || ssiRef == null) {
            return res.status(400).json({ 'error': 'missing parameters' });
          }

          asyncLib.waterfall([
            function(done) {
              models.Materiel.findOne({
                attributes: ['idSite'],
                where: { idSite: idSite }
              })
              .then(function(materielFound) {
                done(null, materielFound);
              })
              .catch(function(err) {
                return res.status(500).json({ 'error': 'unable to verify materiel' });
                
              });
            },
            function(materielFound, done) {
              if (!materielFound) {
                done(null, materielFound);
              } else {
                return res.status(409).json({ 'error': 'materiel already exist' });
              }
            },
            function(materielFound, done) {
              var newMateriel = models.Materiel.create({
                idSite: idSite,
                ssiRef: ssiRef,
                nbDm: nbDm,
                nbDo: nbDo,
                nbDts: nbDts,
                nbDtv: nbDtv,
                nbDmc: nbDmc,
                nbDf: nbDf,
                nbDpa: nbDpa,
                nbDl: nbDl
              })
              .then(function(newMateriel) {
                done(newMateriel);
              })
              .catch(function(err) {
                return res.status(500).json({ 'error': err });
              });
            }
          ], function(newMateriel) {
            if (newMateriel) {
              return res.status(201).json({
                'materielId': newMateriel.id
              });
            } else {
              return res.status(500).json({ 'error': 'cannot add materiel' });
            }
          });
      },
      getMateriel: function(req, res) {
        // Getting auth header
        var headerAuth  = req.headers['authorization'];
        var userId      = jwtUtils.getUserId(headerAuth);
  
        var siteId  = req.params.id;
    
        if (userId < 0)
          return res.status(400).json({ 'error': 'wrong token' });
    
        models.Materiel.findOne({
          attributes: ['id', 'ssiRef', 'nbDm', 'nbDo', 'nbDts', 'nbDtv', 'nbDmc', 'nbDf', 'nbDpa', 'nbDl', 'updatedAt'],
          where: { idSite: siteId }
        }).then(function(site) {
          if (site) {
            res.status(201).json(site);
          } else {
            res.status(404).json({ 'error': 'materiel not found' });
          }
        }).catch(function(err) {
          res.status(500).json({ 'error': 'cannot fetch materiel' });
        });
      }
  }