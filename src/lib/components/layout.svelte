<script lang="ts">
  import { ArrayUtils, StyleUtils } from "../utils";
  import Box from "./box.svelte";

  let themeColors: string[] = [
    "blue",
    "red",
    "gold",
    "brown",
    "violet",
    "teal",
    "green",
    "indigo",
    "gray",
  ];

  const shuffleColors = () => {
    themeColors = ArrayUtils.shuffle(themeColors) as string[];
  };
</script>

<section>
  {#each themeColors as color, i}
    <Box
      value={i + 1}
      color={StyleUtils.getVarValue(color)}
      on:clicked={shuffleColors}
    />
  {/each}
</section>

<style>
  section {
    height: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 1rem;
    grid-template-areas:
      "box1 box1"
      "box3 box4"
      "box2 box2"
      "box7 box7"
      "box5 box8"
      "box6 box9";
  }

  @media (min-width: 600px) {
    section {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(7, 1fr);
      grid-template-areas:
        "box1 box1 box2 box2"
        "box1 box1 box2 box2"
        "box1 box1 box3 box4"
        "box1 box1 box3 box4"
        "box5 box7 box7 box8"
        "box6 box7 box7 box8"
        "box6 box7 box7 box9";
    }
  }
</style>
