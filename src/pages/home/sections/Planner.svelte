<script>
  import TwoCol from "../../../templates/TextGraphic.svelte";
</script>

<TwoCol>
  <div slot="text">
    <h2>A planner</h2>
    <p>
      I can help you create a structured plan to ensure your project stays on
      track with proper margin if things go wrong.
    </p>
  </div>
  <svg
    slot="graphic"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 453.7 198.43">
    <g id="Layer_2" data-name="Layer 2" class="innerSvg">
      <g id="Layer_1-2" data-name="Layer 1">
        <rect
          y="56.69"
          width="226.77"
          height="28.35"
          rx="10.07"
          class="blue bobOne"
        />
        <rect
          x="57.7"
          width="197.41"
          height="28.35"
          rx="8.04"
          class="blue bobTwo"
        />
        <path
          d="M255.12,14.17h7.16a7,7,0,0,1,7,7v99.37a7,7,0,0,0,7,7h7.16"
          class="stroke"
        />
        <path
          d="M226.77,70.87H241a7,7,0,0,1,7,7v42.63a7,7,0,0,1-7,7H155.85a7,7,0,0,0-7,7v42.63a7,7,0,0,0,7,7h14.23"
          class="stroke red"
        />
        <rect
          x="283.46"
          y="113.39"
          width="170.24"
          height="28.35"
          rx="10.07"
          class="blue bobThree"
        />
        <rect
          x="170.08"
          y="170.08"
          width="170.08"
          height="28.35"
          rx="10.07"
          class="blue bobFour"
        />
      </g>
    </g></svg
  >
</TwoCol>

<style>
  .innerSvg {
    transform: scale(0.9, 0.9) translateY(5px);
  }
  .blue {
    fill: rgba(0, 0, 255, 0.85);
  }
  .bobOne {
    animation: bob 1s ease-in-out infinite;
  }
  .bobTwo {
    animation: bob 1s ease-in-out infinite;
    animation-delay: -0.2s;
  }
  .bobOne {
    animation: bob 1s ease-in-out infinite;
  }
  .bobThree {
    animation: bob 1s ease-in-out infinite;
    animation-delay: -0.4s;
  }
  .bobFour {
    animation: bob 1s ease-in-out infinite;
    animation-delay: -0.6s;
  }
  @keyframes bob {
    0%,
    100% {
      transform: translateY(4px);
    }
    50% {
      transform: translateY(-4px);
    }
  }
  .stroke {
    stroke: #000;
    stroke-dasharray: 10;
    animation: dash 1s linear infinite;
    fill: none;
    stroke-width: 5;
  }
  .red {
    stroke: red;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 20;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  h2 {
    color: black;
  }
  svg {
    width: 100%;
    transform: scale(0.8);
    margin: auto;
  }
</style>
