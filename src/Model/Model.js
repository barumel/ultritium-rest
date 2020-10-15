const mongoose = require('mongoose');
const uuid = require('uuid');
const { get } = require('lodash');

const { Schema } = mongoose;
const { v4 } = uuid;

const typeMap = {
  array: Array,
  boolean: Boolean,
  date: Date,
  email: String,
  number: Number,
  object: Schema.Types.Mixed,
  string: String
};

function Model(definition) {
  const fields = definition
    .getFields()
    .reduce((result, field, id) => {
      result[id] = get(typeMap, field.getType(), 'string');

      return result;
    }, {});

  const schema = new Schema({
    ...fields,
    _id: { type: String, default: v4 },
  });

  schema.set('toJSON', {
     transform: function (doc, ret) {
       ret.id = ret._id;
       delete ret._id;
       delete ret.__v;
     }
  });

  return mongoose.model(definition.getCollectionName(), schema);
}

module.exports = Model;
