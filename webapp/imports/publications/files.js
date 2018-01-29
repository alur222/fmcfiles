import { Meteor } from 'meteor/meteor';
import { FMCFiles } from '../collections';

Meteor.publish('files.FMCFiles.all', function () {
  return FMCFiles.find({}, { sort: { 'meta.dateUploaded': -1 } }).cursor;
});