// import { Meteor } from 'meteor/meteor'
// import { ValidatedMethod } from 'meteor/mdg:validated-method';

// export const loginAsRole = new ValidatedMethod({
//   name: 'accounts.loginAsRole',
//   validate: new SimpleSchema({
//     username: { type: String },
//     password: { type: String }
//   }).validator(),
//   run({ username, password }) {
//     if (this.isSimulation) {
//       console.log('askdjaslkda')
//       Meteor.loginWithPassword(username, password);
//     }
//     return null;
//   }
// });