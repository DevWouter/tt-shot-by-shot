<script lang="ts">
  import { tableDimensions, tableMarkings, netDimensions } from "./table";
  import type { Player, Bounce, Play } from "./types";
  var zoom = 0.6;

  var wouter: Player = { name: "Wouter", side: "home" };
  var rutger: Player = { name: "Rutger", side: "away" };

  var play: Play = {
    players: [wouter, rutger],
    serviceBy: wouter,
    returnBy: rutger,
    ballContacts: [
      { type: "ServiceShot", player: wouter, position: { x: 10, y: -20 } }, // Service shot
      { type: "Bounce", position: { x: 10, y: 10 } }, // Service first bounce
      { type: "Bounce", position: { x: 2700, y: 1500 } }, // Service second bounce
      { type: "Shot", position: { x: 2700, y: 1525 }, player: rutger }, // Return
      { type: "Bounce", position: { x: 2700, y: 0 } }, // return bounce
    ],
  };
</script>

<style>
  svg {
    width: 600px;
    height: 600px;
    box-shadow: 0 0 1px black;
    background-color: chocolate;
  }
  .zoom {
    display: flex;
    gap: 8px;
  }
</style>

<h1>Hello world</h1>
<div class="zoom">
  <span>🔍</span>
  <input type="range" bind:value={zoom} min="0.6" max="2" step="0.01" />
  <span>{zoom}x</span>
</div>
<main>
  <svg
    viewBox="
      {-tableDimensions.width * zoom} 
      {-tableDimensions.depth * zoom} 
      {tableDimensions.width * 2 * zoom} 
      {tableDimensions.depth * 2 * zoom}"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      transform="translate(-{tableDimensions.width /
        2} -{tableDimensions.depth / 2})"
    >
      <rect
        x="0"
        y="0"
        width={tableDimensions.width}
        height={tableDimensions.depth}
        fill="rgb(0, 47, 127)"
      />
      <rect
        x="0"
        y="0"
        width={tableDimensions.width}
        height={tableDimensions.depth}
        stroke="white"
        fill="none"
        stroke-width={tableMarkings.sideline}
      />
      <line
        x1={tableDimensions.width / 2}
        y1={0}
        x2={tableDimensions.width / 2}
        y2={tableDimensions.depth / 2 - 50}
        stroke="white"
        stroke-width={tableMarkings.centerline}
      />
      <line
        x1={tableDimensions.width / 2}
        y1={tableDimensions.depth / 2 + 50}
        x2={tableDimensions.width / 2}
        y2={tableDimensions.depth}
        stroke="white"
        stroke-width={tableMarkings.centerline}
      />
      <line
        x1={-netDimensions.overhang}
        y1={tableDimensions.depth / 2}
        x2={tableDimensions.width + netDimensions.overhang}
        y2={tableDimensions.depth / 2}
        stroke="black"
        stroke-width="20"
      />
      {#each play.ballContacts as contact}
        <circle
          cx={contact.position.y}
          cy={contact.position.x}
          r="40"
          fill="red"
        />
      {/each}
    </g>
  </svg>
</main>
