/**
 * @param { number } fps
 * @param { function } callback
 */
export default function renderLoop(callback, fps = 60) {
  let then = Date.now()
  const fpsTime = 1000 / fps

  function render() {
    requestAnimationFrame(render)
    const now = Date.now()
    const timeDiff = now - then

    if (timeDiff >= fpsTime) {
      callback()
      then = now
    }
  }

  render()
}
