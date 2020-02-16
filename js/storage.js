export let upload = () => {
  document.getElementById("storage-form").addEventListener("submit", uploadFile);
}

let uploadFile = (event) => {
  event.preventDefault();

  let formFileUpload = event.target;

  var file = formFileUpload.file.files[0];

  var ref = firebase.storage().ref().child('algo.jpg'); // use the Blob or File API
  ref.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    
    let refDatabase = firebase.database().ref.child("itemStore/items");
    refDatabase.push({
      type: "whatever",
      stock: 20,
      price: "whatever",
      image_url: imageURL
    })

  });
  
}

let downloadFile = (imageName) => {
  var storageRef = firebase.storage.ref();
  let imageURL = storageRef.child(imageName).getDownloadURL().then(function(url) {
  
  )}