li {
  position: relative;
  animation-name: but;
  animation-duration: 0.8s;
}

/* animation button */
button {

  /*shap animation keyframe but*/
  position: relative;
  animation-name: but;
  animation-duration: 0.8s;
}

input {

  /*shap animation keyframe but*/
  position: relative;
  animation-name: inputs;
  animation-duration: 0.8s;
}
button:hover {
  transform: scale(1.2);
  box-shadow: 1px 1px 10px white;
}

@keyframes but {
  0% {
    box-shadow: 10px 1px 20px rgb(255, 255, 255);
    right: -200%;
  }
  25% {
    box-shadow: -10px 10px 20px white;
    right: 4%;
  }
  50% {
    box-shadow: 10px 10px 20px white;
    right: -4%;
  }
  100% {
    box-shadow: 1px 1px 10px white;
    right: 0%;
  }
}

@keyframes inputs {
  0% {
    top: -80px;
  }
  25% {
    top: 20px;
  }
  50% {
    top: -40px;
  }
  75% {
    top: 10px;
  }
  100% {
    top: 0px;
  }
}
