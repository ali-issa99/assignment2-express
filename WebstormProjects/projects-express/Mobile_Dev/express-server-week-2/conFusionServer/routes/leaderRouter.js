
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const leader = require('../models/leader');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
    .get((req,res,next) => {
        leader.find({})
            .then((promos) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promos);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        leader.create(req.body)
            .then((dish) => {
                console.log('Leader Created ', dish);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /leader');
    })
    .delete((req, res, next) => {
        leader.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

leaderRouter.route('/:leaderId')
    .get((req,res,next) => {
        leader.findById(req.params.promoId)
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leader/:leaderId'+ req.params.leaderId);
    })
    .put((req, res, next) => {
        leader.findByIdAndUpdate(req.params.promoId, {
            $set: req.body
        }, { new: true }) //biredo lal object men ba3d l update
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        leader.findByIdAndRemove(req.params.leaderID)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = leaderRouter;







































// router.route('/')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })
//
// .get(function(req,res,next){
//         res.end('Will send all the leaders to you!');
// })
//
// .post(function(req, res, next){
//     res.end('Will add the leader: ' + req.body.name + ' with description: ' + req.body.description);
// })
//
// .delete(function(req, res, next){
//         res.end('Deleting all leaders');
// });
//
// router.route('/:leaderId')
// .all(function(req,res,next) {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       next();
// })
//
// .get(function(req,res,next){
//         res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
// })
//
// .put(function(req, res, next){
//     res.write('Updating the leader: ' + req.params.leaderId + '\n');
//     res.end('Will update the leader: ' + req.body.name +
//             ' with description: ' + req.body.description);
// })
//
// .delete(function(req, res, next){
//         res.end('Deleting leader: ' + req.params.leaderId);
// });
//
// module.exports = router;
