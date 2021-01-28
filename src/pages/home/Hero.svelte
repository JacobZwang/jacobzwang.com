<script>
  import { onMount } from "svelte";

  let canvas;

  // onMount(() => {
  //     let ctx = canvas.getContext("2d");
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight * 0.382;

  //     const numBuildings = 16;
  //     const gap = 10;

  //     for (let i = 0; i < numBuildings; i++) {
  //         ctx.beginPath();
  //         ctx.fillStyle = "rgba(0,0,0,0.2)";
  //         ctx.rect(
  //             i * (canvas.width / 16) - gap / 2,
  //             0,
  //             canvas.width / numBuildings - gap,
  //             Math.random() * (canvas.height / 1.5) + canvas.height / 2 - 50
  //         );
  //         ctx.fill();
  //     }
  // });
</script>

<svelte:head>
  <title>Jacob Zwang</title>
  <meta name="description" content="" />
</svelte:head>

<div class="container">
  <div class="background"><canvas bind:this={canvas} /></div>

  <div class="container">
    <div class="text">
      <div style="margin: auto;">
        <h1>Jacob Zwang</h1>
        <h2>Tech Aficionado 😎</h2>
      </div>
    </div>
    <img
      class="portrait"
      src="https://storage.googleapis.com/jacob-zwang/vectorportrait3.png"
      alt="Jacob Zwang Vector Portrait"
    />
  </div>
</div>

<style>
  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    transform: scaleY(-1);
    display: none;
  }
  .portrait {
    display: none;
    height: 100%;
  }
  .container {
    width: 100vw;
    height: 100%;
    position: relative;
  }
  .text {
    height: 100%;
    text-align: center;
    display: flex;
  }
  h1,
  h2 {
    color: white;
  }
  @media (min-width: 800px) {
    .background {
      display: none;
    }
    .portrait {
      display: block;
      float: right;
      margin-right: 100pt;
    }
    .text {
      float: left;
      text-align: left;
      margin-left: 100pt;
    }
  }
</style>
