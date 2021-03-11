export function setFullscreen(value: boolean) {
  try {
    if (value === true && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  } catch (error) {
    console.log(error);
  }
}