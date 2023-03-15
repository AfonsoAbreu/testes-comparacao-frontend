<script>
  let mouseY = 0;
  let mouseX = 0;
  let numberOfClicks = 0;
  
  function handleMouseMove ({ x, y }) {
    mouseX = x;
    mouseY = y;
  }

  function handleClick() {
    numberOfClicks++;
  }
</script>

<svelte:body
  on:mousemove={handleMouseMove}
  on:click={handleClick}
/>

<p>Mouse position (x/y): {mouseX}/{mouseY}</p>
<p>Number of clicks: {numberOfClicks}</p>