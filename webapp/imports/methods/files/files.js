import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import SimpleSchema from 'simpl-schema';

import { FMCFiles } from '../../collections';

export const deleteFile = new ValidatedMethod({
  name: 'files.deleteFile',
  validate: new SimpleSchema({
    fileId: { type: String },
  }).validator(),
  run({ fileId }) {
    const file = FMCFiles.findOne({ _id: fileId });
    if (!file) {
      throw new Meteor.Error('file-not-found', 'File Not Found');
    }

    const user = this.userId;
    if (file.userId === this.userId || Roles.userIsInRole(user, 'delete-all-files')) {
      FMCFiles.remove({ _id: file._id });
    } else {
      throw new Meteor.Error('file-not-found', 'File Not Found');
    }
    return true;
  }
});