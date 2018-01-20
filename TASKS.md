The task is as follows:

Build a basic app in meteor to manage files using a meteor package like meteor-files and store them on S3 Object store. (5GB of data is available for free on AWS)

There will be two types of user roles, a manager role and a user role. 

The Manager will be able to view files, upload files, and delete files for all users.

The Staff role will be able to view any files, and be able to upload his own files, but only able to delete his own files, no one else's.

The files will be able to be accessed via a normal meteor App (you decide on the UI - preferably in react)

A second client will be able to download/view/upload/and delete files directly from S3 via a graphQL server queries and mutations utilising  signed URLs. (again you decide on the UI -preferably react)

The same roles apply as above for the access via graphQL.

Accounts can be created either via the Meteor app or the graphQL client.

Only managers can create accounts, for other managers or staff.

Please document the process you go through, and any major hurdles or things you learnt along the way.

At the end of the task, you will present your app to myself, Rommel and Richard, talking through what your learned, how you implemented it, and each of the features.

you should use git hub to store your app, and share it with us.


As I said please let me know if you have any questions.
