// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var manager = new GameManager(5, KeyboardInputManager, HTMLActuator);
});
