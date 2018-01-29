import { Meteor } from 'meteor/meteor';

const UsersProxy = Object.create(Meteor.users);
const transform = function (doc) {
  // return the doc for now
  // typicall we return a new instance of User Model
  return doc;
};

export const Users = Object.assign(UsersProxy, {
  _transform: transform,

  current() {
    return Meteor.users.findOne({ _id: Meteor.userId() }, { transform });
  },

  find(selector, options) {
    return Meteor.users.find(selector || {}, { ...options, transform });
  },

  findOne(selector, options) {
    return Meteor.users.findOne(selector || {}, { ...options, transform });
  },
});
