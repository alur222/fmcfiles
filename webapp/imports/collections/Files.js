import { FilesCollection } from 'meteor/ostrio:files';
import SimpleSchema from 'simpl-schema'; 

export const FMCFiles = new FilesCollection({
  collectionName: 'FMCFiles',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg|json|xls|txt|pdf|gif|css|html|doc|csv/i.test(file.extension)) {
      return true;
    } else {
      return 'Please upload image, with size equal or less than 10MB';
    }
  }
});
