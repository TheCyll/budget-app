const express = require('express');
const router = express.Router();
const { Registry, validateRegistry } = require('../models/registry');

router.post('/', async (req, res) => {  

  const {error} = validateRegistry(req.body);
  if (error) {
    return res.status(400).json({
      ok: false,
      error
    })
  }

  const { concern, amount, date, type } = req.body;

  const registry = new Registry({
    concern,
    amount,
    date,
    type
  });

  try {
    const result = await registry.save();
    if (result) {
      res.status(200).json({
        ok: true,
        data: result
      })
    }
  } catch(err) {
    res.status(500).json({
      ok: false,
      error: err.message
    })
  } 

});

router.get('/', async (req, res) => {
  try {
    const queryResponse = await Registry.find({}).exec();
    res.status(200).json({
      ok: true,
      data: queryResponse
    });    
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.message
    });
  }
});

router.get('/:id', async (req, res) => {  
  try {
    const { id } = req.params;
    const queryResponse = await Registry.findById(id).exec();
    if(!queryResponse) {
      res.status(500).json({
        ok: false,
        error: `The document doesn't exists`
      });
    } else {
      res.status(200).json({
        ok: true,
        data: queryResponse
      });
    }
  } catch(err) {
    res.status(500).json({
      ok: false,
      error: err.message
    })
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { error } = validateRegistry(body);

  if ( error ){
    return res.status(400).json({
      ok: false,
      error
    })
  }

  try {
    const queryResponse = await Registry.findByIdAndUpdate(id, body, {new: true, runValidators: true}).exec();
    if(!queryResponse) {
      res.status(500).json({
        ok: false,
        error: `The document doesn't exists`
      });
    } else {
      res.status(200).json({
        ok: true,
        data: queryResponse
      });
    }
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const queryResponse = await Registry.findByIdAndDelete(id);
    
    if(!queryResponse) {
      res.status(500).json({
        ok: false,
        error: `The document doesn't exists`
      });
    } else {
      res.status(200).json({
        ok: true,
        data: queryResponse
      });
    }
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.message
    });
  } 
});

module.exports = router;