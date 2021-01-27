const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const registrySchema = new Schema({
  concern: { type: String, required: [true, 'The concern of registry is required'] },
  amount: { type: Number, required: [true, 'The amount is required'], min: [0, 'The registry needs a non-negative number'] },
  date: { type: Date, default: Date.now() },
  type: { type: String, required: [true, 'the type of registry is required'], enum: ['income', 'debt'] }
});

const Registry = mongoose.model('Registry', registrySchema);

function validateRegistry(registry) {

  const schema = Joi.object({
    concern: Joi.string()             
      .required(),
    amount: Joi.number()      
      .min(0)
      .precision(2)
      .required(),
    date: Joi.date(),
    type: Joi.string()
      .valid('income', 'debt')
      .required()   
  })

  return schema.validate(registry);
}

module.exports = {
  Registry,
  validateRegistry
}