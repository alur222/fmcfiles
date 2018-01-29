import { Meteor } from 'meteor/meteor';
import { FMCFiles } from '../collections';

Meteor.publish('files.FMCFiles.all', function () {
  return FMCFiles.find().cursor;
});