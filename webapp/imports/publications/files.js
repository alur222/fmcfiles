import { Meteor } from 'meteor/meteor';
import { Images } from '../collections';

Meteor.publish('files.images.all', function () {
  return Images.find().cursor;
});