let cameraSection = document.getElementById('camera-section');
cameraSection.style.display = 'none';

let video = document.getElementById('camera-screen');
let canvas = document.getElementById('canvas');

async function openCamera() {
    cameraSection.style.display = 'block';
    let thePix = await navigator.mediaDevices.getUserMedia({audio: false, video:true})
    video.srcObject = thePix;
}