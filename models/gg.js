exports.createUser=(email,phone,un,pass,photo)=>{
        
    console.log(n)
    console.log(e)
    console.log(p)
    admin.auth().createUser({
        email: email,
        emailVerified: false,
        phoneNumber: phone,
        password: pass,
        displayName: un,
        photoURL: photo,
        disabled: false
      })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          resolve('Successfully created new user:'+ userRecord.uid);
        })
        .catch(function(error) {
          reject('Error creating new user:'+ error);
        });
}