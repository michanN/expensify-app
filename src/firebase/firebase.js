import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').push({
//   description: '1st description',
//   note: 'Very good note',
//   amount: 10,
//   createdAt: 10
// });
//
// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expensesList = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expensesList.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expensesList);
// //   }, (e) => {
// //     console.log('Error: ', e);
// //   });
// //
// //   database.ref('expenses/-KxMdp_S3WTleROST1WS')
// //     .update({
// //       amount: 69
// //     }).then(() => {
// //       console.log('Update OK');
// //     }).catch((e) => {
// //       console.log('Error: ', e);
// //     });
//
// // FETCH ALL EXPENSES
// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expensesList = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expensesList.push({
// //         id:childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expensesList);
// //   });
//
// // GRAB DATA FROM INVIDIDUAL - CAN USE ANY METHOD HERE LIKE REMOVE
// // database.ref('notes/-KxMaSUMxH63pBHiB_cP').update({
// //   title: 'HTML'
// // });
// // database.ref('notes/-KxMaSUMxH63pBHiB_cP').remove();
//
// // ADD ARRAY LIKE DATA - FIREBASE CREATES 'ID' automatic
// // database.ref('notes').push({
// //   title: 'Angular Basic',
// //   body: 'First course in a very long '
// // });
//
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   const value = snapshot.val();
// //   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}.`);
// // });
// //
// // setTimeout(() => {
// //   database.ref().update({
// //     job: {
// //       title: 'BOSS',
// //       company: 'Google'
// //     }
// //   }).then(() => {
// //     console.log('Update went OK');
// //   }).catch((e) => {
// //     console.log('Error UPDATE: ', e);
// //   });
// // }, 3000);
//
// // READ DATA
//
// // database.ref('location')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   }).catch(() => {
// //     console.log('Error: ', e);
// //   });
//
// // // SUBSCRIBE TO CHANGES
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('Error with data fetching: ', e);
// // });
// //
// // setTimeout(() => {
// //   database.ref('age').set(33);
// // }, 3500);
// //
// // setTimeout(() => {
// //   database.ref().off('value', onValueChange);
// // }, 7000);
// //
// // setTimeout(() => {
// //   database.ref('age').set(35);
// // }, 10500);
//
// // // ADDING
// // database.ref().set({
// //   name: 'Michel Näslund',
// //   age: 29,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Gothenburg',
// //     country: 'Sweden'
// //   }
// // }).then(() => {
// //   console.log('Data was saved!');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });
// //
// // database.ref('attribute').set({
// //   height: 178,
// //   size: 'small'
// // }).then(() => {
// //   console.log('adding attributes');
// // }).catch((e) => {
// //   console.log('Error: ', e);
// // });
//
// // REMOVING
// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('removed');
// //   }).catch((e) => {
// //     console.log('Error: ', e);
// //   });
// // // Passing null to set will also delete the data
// // database.ref('isSingle').set(null);
//
// // // UPDATE DATA
// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Stockholm'
// // }).then(() => {
// //   console.log('updated data');
// // }).catch((e) => {
// //   console.log('Error', e);
// // });
// //
// // console.log('I made a request to change some data.');
