<script>
  import { circleOne, circleTwo, circleThree } from "../assets/circles";
  import { onMount } from "svelte";
  import TwoCol from "../../../templates/TextGraphic.svelte";

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    let i = 0;
    function repeatOften() {
      if (canvas == null) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.arc(
        circleOne[i].locationX * 100 + 500,
        circleOne[i].locationZ * 100 + 300,
        circleOne[i].scaleX * 120,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "rgba(0, 0, 255, 0.75)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(
        circleTwo[i].locationX * -100 + 625,
        circleTwo[i].locationZ * -100 + 300,
        circleTwo[i].scaleX * 120,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "rgba(0, 0, 255, 0.75)";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(
        circleThree[i].locationZ * 100 + 550,
        circleThree[i].locationX * 100 + 200,
        circleThree[i].scaleX * 120,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "rgba(0, 0, 255, 0.75)";
      ctx.fill();

      if (i < circleOne.length - 1) {
        i++;
      } else {
        i = 0;
      }
      requestAnimationFrame(repeatOften);
    }
    requestAnimationFrame(repeatOften);
  });
</script>

<TwoCol>
  <span slot="text">
    <h2>A Researcher</h2>
    <p>
      I can help you find and study existing products, identify market needs,
      and identify common pitfalls.
    </p>
  </span>
  <canvas bind:this={canvas} width={1000} height={600} slot="graphic" />
</TwoCol>

<style>
  h2 {
    color: black;
  }
  canvas {
    width: 100%;
  }
</style>
