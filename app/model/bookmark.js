'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const BookMarkSchema = new Schema({
    bid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    sortWeight: {
      type: Number,
      required: true,
    },
    favicon: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    isPrivate: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    lastUpdateTime: {
      type: Date,
    },
    lastFaviconCacheTime: {
      type: Date,
      default: Date.now,
      required: true,
    },
    uid: {
      type: String,
    },
    // categoryId: {
    //   type: Schema.ObjectId,
    // },
  });
  return mongoose.model('Bookmark', BookMarkSchema);
};
