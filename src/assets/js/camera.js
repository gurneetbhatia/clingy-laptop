  function takePicture() {
    var canvas = document.getElementById('canvas');     
    var video = document.getElementById('video');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.hidden = true;
    canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);  
    canvas.toBlob(blob => {
      const img = new Image();
      console.log(blob);
      img.src = window.URL.createObjectUrl(blob);
      console.log(img);
    });
  }

  function initialise() {
    var video = document.getElementById('video');

    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
      });
    }
  }

  function makeSound(url) {
    const audio = new Audio(url);
    audio.play();
  }