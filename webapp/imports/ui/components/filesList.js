import React from 'react';
import { ReactiveVar } from 'meteor/reactive-var';
import { Roles } from 'meteor/alanning:roles';
import { withTracker } from 'meteor/react-meteor-data';

import { FMCFiles } from '../../collections';
import { deleteFile } from '../../methods/files/files';
import { STAFF_ROLES, MANAGER_ROLES } from '../../constants';

class FilesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUpload: new ReactiveVar(false)
    };
  }

  handleDeleteFile(id, e) {
    deleteFile.call({
      fileId: id,
    }, function(err) {
      if (err) {
        alert(err)
      }
    })
  }

  handleUpload(e) {
    const { currentUpload } = this.state;
    const component = this;
    // taken from MeteorFiles doc
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload = FMCFiles.insert({
        file: e.currentTarget.files[0],
        streams: 'dynamic',
        chunkSize: 'dynamic',
        meta: {
          owner: Meteor.user() ? Meteor.userId() : null,
          dateUploaded: (new Date()).toISOString(),
        }
      }, false);

      upload.on('start', function () {
        currentUpload.set(this);
      });

      upload.on('end', function (error, fileObj) {
        if (error) {
          alert('Error during upload: ' + error);
        } else {
          alert('File "' + fileObj.name + '" successfully uploaded');
        }
        currentUpload.set(false);
      });

      upload.start();
    }
  }

  canDeleteFile(file) {
    const { currentUser } = this.props;
    if (currentUser) {
      // if manager, return true;
      if (Roles.userIsInRole(currentUser._id, 'delete-all-files')) {
        return true;
      } else if (Roles.userIsInRole(currentUser._id, 'delete-own-files')) {
        if (file.userId === currentUser._id) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  render() {
    const { filesList, currentUser } = this.props;
    const { currentUpload } = this.state;
    return (
      <div>
        <input type="file" className="fm-login-buttons" onChange={this.handleUpload.bind(this)}></input>
        { currentUpload.get()?
          <span style={{textAlign: 'center'}}> Uploading: {currentUpload.get()} </span>
        : '' }
      {
        filesList ?
          <div className="files-list">
            {filesList.map(fl => (
              <div className="fm-list-item" key={fl._id}>
                <p>Filename: {fl.name}</p>
                <p>type: {fl.type} </p>
                {this.canDeleteFile(fl) ?
                  <button className="fm-login-buttons" onClick={this.handleDeleteFile.bind(this, fl._id)}>Delete</button>
                : ''}
              </div>
            ))}
          </div>
        : '<p>No Files</p>'
      }
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('files.FMCFiles.all');

  return {
    currentUser: Meteor.user(),
    filesList: Meteor.user() ? FMCFiles.find({}, {
      sort: { 'meta.dateUploaded': -1 }
    }).fetch() : [],
  };
})(FilesList);

