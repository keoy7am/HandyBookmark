'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CategorySchema = new Schema({
    cid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    sortWeight: {
      type: Number,
      required: true,
    },
    isPrivate: {
      type: Boolean,
      required: true,
    },
    comment: {
      type: String,
    },
    lastUpdateTime: {
      type: Date,
      default: Date.now,
      required: true,
    },
    // userId: {
    //   type: Schema.ObjectId,
    // },
  });
  return mongoose.model('Category', CategorySchema);
};
