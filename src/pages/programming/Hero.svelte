<script>
  import Hero from "../../templates/Hero.svelte";
  import { onMount } from "svelte";

  function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === "undefined") {
      stroke = true;
    }
    if (typeof radius === "undefined") {
      radius = 5;
    }
    if (typeof radius === "number") {
      radius = {
        tl: radius,
        tr: radius,
        br: radius,
        bl: radius,
      };
    } else {
      var defaultRadius = {
        tl: 0,
        tr: 0,
        br: 0,
        bl: 0,
      };
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius.br,
      y + height
    );
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
  }

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    const lines = [
      [
        [200, "orange"],
        [150, "rgb(20, 20, 255)"],
        [300, "rgb(20, 20, 255)"],
        [80, "rgb(20, 20, 255)"],
      ],
      [
        [70, "rgba(0,0,0,0)"],
        [200, "gray"],
        [150, "rgb(20, 20, 255)"],
        [130, "rgb(20, 20, 255)"],
      ],
      [
        [70, "rgba(0,0,0,0)"],
        [130, "orange"],
        [200, "rgb(20, 20, 255)"],
        [180, "rgb(20, 20, 255)"],
      ],
      [
        [140, "rgba(0,0,0,0)"],
        [130, "gray"],
        [70, "rgb(20, 20, 255)"],
        [100, "rgb(20, 20, 255)"],
      ],
      [
        [140, "rgba(0,0,0,0)"],
        [60, "orange"],
        [90, "rgb(20, 20, 255)"],
        [120, "rgb(20, 20, 255)"],
      ],
      [
        [70, "rgba(0,0,0,0)"],
        [120, "orange"],
        [150, "rgb(20, 20, 255)"],
      ],
      [
        [70, "rgba(0,0,0,0)"],
        [90, "orange"],
        [120, "rgb(20, 20, 255)"],
        [150, "rgb(20, 20, 255)"],
      ],
    ];

    const lineWidth = 20;
    const lineSpacing = 40;
    const linesShown = 4;
    const speed = 10;

    canvas.height = lineSpacing * linesShown - lineWidth / 2;

    async function loopLines() {
      if (canvas == null) return;
      await new Promise((resolve) => {
        if (canvas == null) return;
        async function drawLines() {
          if (canvas == null) return;
          for (let count = 0; count < linesShown - 1; count++) {
            drawStaticLine(count);
          }
          for (const j in lines[linesShown - 1]) {
            if (canvas == null) return;
            await drawAnimatedWord(linesShown - 1, j);
          }
          (function shiftLineUp(i) {
            if (canvas == null) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let count = 0; count < linesShown; count++) {
              for (const j in lines[count]) {
                drawStaticWord(count, j, i);
              }
            }
            if (i <= lineSpacing) {
              if (canvas == null) return;
              requestAnimationFrame(() => {
                shiftLineUp(i + 2);
                if (i === lineSpacing) {
                  resolve();
                }
              });
            }
          })(0);
        }
        drawLines();
      }).then(() => {
        lines.push(lines.shift());
        loopLines();
      });
    }

    loopLines();

    function drawStaticLine(lineNumber) {
      for (const j in lines[lineNumber]) {
        drawStaticWord(lineNumber, j, 0);
      }
    }

    function drawStaticWord(i, j, yTransformer) {
      ctx.fillStyle = lines[i][j][1];
      roundRect(
        ctx,
        previousWordsTotal(lines[i], j),
        i * lineSpacing - 1 - yTransformer + 5,
        lines[i][j][0] - 1,
        lineWidth,
        10,
        true,
        false
      );
    }

    function drawAnimatedWord(i, j) {
      return new Promise((resolve) => {
        function animateWord(lineMultiplier) {
          ctx.clearRect(
            previousWordsTotal(lines[i], j),
            i * lineSpacing,
            lines[i][j][0],
            lineSpacing
          );

          ctx.fillStyle = lines[i][j][1];
          roundRect(
            ctx,
            previousWordsTotal(lines[i], j),
            i * lineSpacing +
              lineWidth / 2 -
              (lineWidth * (lineMultiplier / speed)) / 2 +
              5,
            lines[i][j][0] * (lineMultiplier / speed),
            lineWidth * (lineMultiplier / speed),
            10 * (lineMultiplier / speed),
            true,
            false
          );

          if (lineMultiplier < speed) {
            requestAnimationFrame(() => {
              animateWord(lineMultiplier + 1);
              if (lineMultiplier === speed * (1 - 1 / speed)) {
                resolve();
              }
            });
          }
        }
        requestAnimationFrame(() => {
          animateWord(0);
        });
      });
    }
  });

  function previousWordsTotal(line, i) {
    let sum = 0;
    for (const j in line) {
      if (j < i) {
        sum = sum + line[j][0] + 10;
      }
    }
    return sum;
  }
</script>

<Hero>
  <div class="main">
    <canvas bind:this={canvas} width={1000} height={600} />
  </div>
</Hero>

<style>
  .main {
    background-color: rgb(0, 0, 58);
    height: 38.2vh;
    width: 100vw;
    display: inline-flex;
    align-items: center;
    padding-left: 50pt;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 90%;
  }
</style>
