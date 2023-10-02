let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

function clock() {
  setInterval(() => {
    let currentTime = new Date();
    hr.innerHTML =
      currentTime.getHours() < 10
        ? '0' + currentTime.getHours()
        : currentTime.getHours();

    min.innerHTML =
      currentTime.getMinutes() < 10
        ? '0' + currentTime.getMinutes()
        : currentTime.getMinutes();

    sec.innerHTML =
      currentTime.getSeconds() < 10
        ? '0' + currentTime.getSeconds()
        : currentTime.getSeconds();
  });
}
clock();
