$(document).ready(function() {
    {/* <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase.js"></script> */}

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCcKEpVTKofG1GLRR-FGgV8XZHS_GIC7Ec",
        authDomain: "project2-7f279.firebaseapp.com",
        databaseURL: "https://project2-7f279.firebaseio.com",
        storageBucket: "project2-7f279.appspot.com"
    };

    firebase.initializeApp(config);

    var storageService = firebase.storage();
    var storageRef = storageService.ref();

    var FBURL;

    // $(document).on("click", ".file-select", handleFileUploadChange);
    // $(document).on("click", "button.file-submit", handleFileUploadSubmit);

    document.querySelector('.file-select').addEventListener('change', handleFileUploadChange);
    document.querySelector('button.submit').addEventListener('click', handleFileUploadSubmit);

    //The handleFileUploadChange function gets triggered any time someone selects a new file via the upload via the Choose File upload button. So let’s add that function:
    var selectedFile;

    function handleFileUploadChange(e) {
        selectedFile = e.target.files[0];
    };


    function handleFileUploadSubmit(e) {
        event.preventDefault();

        var uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
        uploadTask.on('state_changed', function (snapshot){
            console.log(selectedFile);
            console.log(snapshot);
            console.log(snapshot.downloadURL);

            FBURL = snapshot.downloadURL;
        });
    };

});