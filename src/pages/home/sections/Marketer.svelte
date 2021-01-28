<script>
  import TwoCol from "../../../templates/TextGraphic.svelte";
</script>

<TwoCol>
  <span slot="text">
    <h2>A Marketer</h2>
    <p>
      I can help spread your product to a wide audience. I have experience in
      branding, commercial production, and outreach.
    </p>
  </span>
  <svg
    slot="graphic"
    version="1.1"
    viewBox="-15.0 -16.963 30.0 20.365000000000002"
    xmlns="http://www.w3.org/2000/svg">
    <g class="bothBags">
      <g class="bag">
        <g transform="scale(10 -10)">
          <path
            class="handle"
            d="M -0.8608,0.3699 C -0.8328,0.766 -0.6426,1.0 0.0,1.0 C 0.6426,1.0 0.8328,0.766 0.8608,0.3699 C 0.9419,-0.776 1.194,-2.5648 0.0,-2.5648 C -1.194,-2.5648 -0.9419,-0.776 -0.8608,0.3699 Z"
            id="BezierCircle"
            transform="translate(0.0 1.1009) scale(0.5954 0.5954)"
          />
          <path
            class="paper"
            d="M -0.9173,0.998 C -0.9449,0.2853 -0.9724,-0.4274 -1.0,-1.1402 C -0.3333,-1.1402 0.3333,-1.1402 1.0,-1.1402 C 0.9724,-0.4274 0.9449,0.2853 0.9173,0.998 C 0.3058,0.998 -0.3058,0.998 -0.9173,0.998 Z"
          />
        </g>
      </g>
      <g class="bag2">
        <g transform="scale(10 -10)">
          <path
            class="handle2"
            d="M -0.8608,0.3699 C -0.8328,0.766 -0.6426,1.0 0.0,1.0 C 0.6426,1.0 0.8328,0.766 0.8608,0.3699 C 0.9419,-0.776 1.194,-2.5648 0.0,-2.5648 C -1.194,-2.5648 -0.9419,-0.776 -0.8608,0.3699 Z"
            id="BezierCircle"
            transform="translate(0.0 1.1009) scale(0.5954 0.5954)"
          />
          <path
            class="paper2"
            d="M -0.9173,0.998 C -0.9449,0.2853 -0.9724,-0.4274 -1.0,-1.1402 C -0.3333,-1.1402 0.3333,-1.1402 1.0,-1.1402 C 0.9724,-0.4274 0.9449,0.2853 0.9173,0.998 C 0.3058,0.998 -0.3058,0.998 -0.9173,0.998 Z"
          />
        </g>
      </g>
    </g>
  </svg>
</TwoCol>

<style>
  h2 {
    color: black;
  }
  svg {
    width: 100%;
    margin: auto;
  }
  .bag {
    animation: swing 1.2s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    animation-delay: -0.2s;
    transform-origin: 0 -50%;
  }
  .bag2 {
    animation: swing 1.2s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    animation-delay: -0.1s;
    transform-origin: 0 -50%;
  }
  .bothBags {
    animation: swing 1.2s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    transform-origin: 0 -100%;
  }
  .handle {
    fill: none;
    stroke: var(--accent);
    stroke-width: 0.1px;
  }
  .paper {
    fill: var(--color);
  }
  .handle2 {
    fill: none;
    stroke: var(--accent);
    stroke-width: 0.1px;
  }
  .paper2 {
    fill: var(--colorLight);
  }
  @keyframes swing {
    0%,
    100% {
      transform: translateY(2.3px) scale(0.65) rotate(20deg);
    }
    50% {
      transform: translateY(2.3px) scale(0.65) rotate(-20deg);
    }
  }
</style>
