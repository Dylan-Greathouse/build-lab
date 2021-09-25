const { Router } = require('express');
// const { fetch } = require('node-fetch');
const smsService = require('../services/smsServices');
// const { fetchURL, URL } = require('../utils/fetchUtils');


module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const quote = await smsService.createRonQ(req.body);
      console.log('ahhhhhhh', quote);
      res.send(quote);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const quote =  await smsService.ronQuotes(req);
      res.send(quote);
    } catch (err) {
      next(err);
    }
  });
  
// .get('/:num', async (req, res, next) => {
//   try {
//     const quote = ;
//     res.send(quote);
//   } catch (err) {
//     next(err);
//   }
// })

// .patch()

// .delete();
