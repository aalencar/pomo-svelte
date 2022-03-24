<script>
  let minutes = 25
  let totalTime = minutes * 60
  let timeLeft = totalTime
  let interval


  function formatTime(seconds) {
    const m = Math.floor(timeLeft / 60)
    const s = Math.floor(timeLeft % 60)
    return `${pad(m)}:${pad(s)}`
  }

  function pad(str) {
    return String(str).padStart(2, '0')
  }

  function start() {
    console.log('[timer] started')
    interval = setInterval(() => {
      timeLeft--
    }, 1000);
  }

  function stop() {
    clearInterval(interval)
    reset()
  }

  function reset() {
    timeLeft = totalTime
  }
</script>

<div class="card">
  {formatTime(timeLeft)}

  <div class="buttons">
    <button on:click={start}>start</button>
    <button on:click={stop}>stop</button>
  </div>
</div>

<style>
  .card {
    border: 1px solid grey;
    padding: 3em;
  }
</style>