<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value: number;
  export let color: string;

  const dispatch = createEventDispatcher();

  const handleClick = () => dispatch("clicked");
</script>

<button
  style="grid-area: box{value}; background-color: {color};"
  on:click={handleClick}
>
  {value}
</button>

<style>
  button {
    border-radius: 2px;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 100ms ease-out;
    will-change: transform;
  }

  button:hover {
    transform: rotate(-2deg);
  }
</style>
