var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert({
//     "type": "service_account",
//     "project_id": "e-commerce-8b449",
//     "private_key_id": "90f2fd7377e69ba080f95820cf44dcea23e7e45f",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCinEklLwRLS2c8\nAsOqbV+MTHxr8WF4cPFg14U5Kxaly2Ce5IvlxV6RwgD0vLHEbGZ+c+J6mEIAkd0v\n2YBu9lhJ/mRjZpkQ9Lj/A5tmrbY7x0fN+op7l33pIDbGb46o2YvDmlHJPHUOb9Vh\nglVgVz0H/SHN9BHTHn+aPOL7Nr6kpf6mTSj0a7qMwwi9BPRrjSl9eCNrp/JhqFbp\nkN1cl9Duyq6E+zAUlGQ5NInBtqjqdIkfMEe7UP1xvnWnvoxNjYUrdytG3S+RA2jD\nIH9V+gL62lOxtSZDuo12sw8/h++SJbgMNnVRyd8iaOqwcu8dtljQWcsGNLRA7Q56\nw/WOhE4fAgMBAAECggEAQJJwJ2Bew6mLMpTkbyJkjVl4FQMy0fmDmJGs2RFHuomi\n8iXOee0gyx+vcoAV1Wq4XqGU/1rD5ucFXvFvY2DWmXd4FNLSmJ2dcsLTbHgxw9Y0\nKNLDOCXlvXPp3G3DSECvE/sNXCxyTUvSf5iaX5n05d26lUbE50GWqUBhYCGSnd2c\naWena2vp7EMVGwsrpBUgAQsC1EeGIQMRwiQZpHdASKZ4kk0y6/xPxwsz2nLa6Kow\nPYjCMhTm0lcPJLFvlqlK68nUcILpsVdUp/RWvyZyZQTMH8kL3VbDbExmv4uEoXGT\noIRhyGC3YryxBO3FiU0Kt2Dfp3Ae/bNuf7+qy1JH8QKBgQDbAECEW7RhsQovpwqe\nXR6gTEGrd8N47hsJ0PnJNDCOgT97aUssIjmaANFhsdRF04/0wYeoqZ3tZ9jVDB7T\njcpjfEuId78mucz7JtRIgGufZ4KNmvrHGI1GMLUghmoXwMJrVRjzOLw6oQR3etoq\n2c0GBF0kqgfjdVQh1pGDiUUXrwKBgQC+FSgGkPYh7qw6g5es4Q+7aa0kWeC4+QMO\nS5nH9e5s9+5znaKTdwwIgkM1EeEQvqKp3LeAl1PhxLwqQgOXwVUXKHJqP5+LgaVv\n+7w3CTUxTLFF9ScuVGRkU3cbky2SC5c30iHWoOpZpa9Ppdj1JOASWKnO5lOUG7/C\nKLaHnNFckQKBgDbKHVn/x2UZcb7yP4nXKi5YZaWMVO8QQtt12Mgpsmw0kblCYngs\nJ9ULl1alssG1aDKHqHTd2pDmhizm1199/cBd/Fer/bqmiU3cLQfmeQZsUxEyUMM2\ntUF2NhppBmni48EOjStsaksQtZletu45hz2WIedmUorpc57zm3wY/5wpAoGAKhuZ\nsEqwm7e5o4S/Nubsi0HPvzvB0ngnOyV4PZm3ZaBOzIHhH/XBTqk8pib9yq3Qbvyc\nEfpz9JGWdW4GSbnkVar6HZtWhpsDwRjtCuwZQoCQzMSQF21OiAMNYahq8e1rZExC\nfr9K6u0PNv+wXi37DVVi2Jihby/ufN50APq2TmECgYAA0y4i73Fuau2XA8B97Lj8\nS7c1NvBkdSn/Uoe2adIy+ZNcE2M9AGgRFMsPiolwgTwNi7dCnfw+YVV9IQtPNTht\nOMEMUSwECEpUZLdqohgZVxOnAPVJry/AM4j4Wv7w4RfMDC44QcoSWUKn/wxM747C\nSPrcTPMuPxHyMYnQuOIXEQ==\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-tlrqq@e-commerce-8b449.iam.gserviceaccount.com",
//     "client_id": "105976830033158438274",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tlrqq%40e-commerce-8b449.iam.gserviceaccount.com"
//   }),
//   databaseURL: "https://e-commerce-8b449.firebaseio.com"
// });
       
exports.addProduct=(cat,price,disc,name,num)=>{
    return new Promise((resolve,reject)=>{
        const admin = require('firebase-admin');
        const serviceAccount = require('../pkey.json');
        const firestore = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        }).firestore();
        const settings = {
            timestampsInSnapshots: true
        };
        firestore.settings(settings);
        const usersRef = db.firestore.collection('users').doc();
        try {
            const batch = firestore.batch();
           
                batch.set(usersRef,{
                            name:name,
                            category:cat,
                            price:price,
                            count:num,
                            description:disc,
                            product_img:"https://firebasestorage.googleapis.com/v0/b/e-commerce-8b449.appspot.com/o/images%2Fprofile.jpg?alt=media&token=5e2a7d74-5cfc-4624-95e0-28ef177fb88f"
                        })
           
            batch.commit().then(() => {
                res.send('success');
            });
        } catch (error) {
            res.send(error);
        }

    })
}


