document.getElementById('file-upload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var progressBar = document.getElementById('progress-bar');
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/upload-endpoint', true);
    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            progressBar.style.width = (e.loaded / e.total) * 100 + '%';
        }
    };

    xhr.onload = function() {
        if (this.status == 200) {
            console.log('Upload complete');
        }
    };

    xhr.send(file);
});