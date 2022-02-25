'use strict';
const bcrypt = require('bcryptjs');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    uid: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    emailConfirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
    create_at: {
      type: Date,
      default: Date.now,
      required: true,
    },
    is_enable: {
      type: Boolean,
      dafault: true,
      required: true,
    },
  });

  UserSchema.pre('save', function(next) {
    const user = this;
    if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function(saltError, salt) {
        if (saltError) {
          return next(saltError);
        }
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });

      });
    } else {
      return next();
    }
  });

  return mongoose.model('User', UserSchema);
};
