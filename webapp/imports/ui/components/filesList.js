import React from 'react';
import { ReactiveVar } from 'meteor/reactive-var';
import { Images } from '../../collections';
import { withTracker } from 'meteor/react-meteor-data';

class FilesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUpload: new ReactiveVar(false)
    };
  }

  handleUpload(e) {
    const { currentUpload } = this.state;
    const component = this;
    // taken from MeteorFiles doc
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // multiple files were selected
      const upload = Images.insert({
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
  Meteor.subscribe('files.images.all');

  return {
    currentUser: Meteor.user(),
    filesList: Meteor.user() ? Images.find().fetch() : [],
  };
})(FilesList);

