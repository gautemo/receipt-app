const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addFirestoreRef = functions.region('europe-west1').storage.object().onFinalize(async object => {
    const uid = object.name.split('/')[0];
    const userCollection = admin.firestore().collection(uid);
    await userCollection.doc().set({
        path: object.name,
        created_at: new Date().getTime()
    });
});