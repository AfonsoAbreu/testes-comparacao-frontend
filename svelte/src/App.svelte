<script>
  import { onMount } from "svelte";
  import MouseTracker from "./MouseTracker.svelte";

  let temperature;
  let description;
  let city = 'Generic city';

  onMount(() => {
    setTimeout(() => {
      temperature = 27;
      description = 'Clear';
    }, 1500)
  });
</script>

<div class="App">
  <h1>Weather forecast at {city}</h1>
  {#if temperature}
    <div>
      <p>Temperature: {temperature}°C</p>
      <p>Climate: {description}</p>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<MouseTracker />