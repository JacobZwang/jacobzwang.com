<script>
  import TwoCol from "../../../templates/TextGraphic.svelte";
</script>

<TwoCol>
  <span slot="text">
    <h2>A Reflector</h2>
    <p>
      I can look you back at where things went well and where things could have
      been better. Then I can help you plan to be better prepared in the future.
    </p>
  </span>
  <svg
    slot="graphic"
    version="1.1"
    viewBox="0 -35.821 50.013 42.393"
    xmlns="http://www.w3.org/2000/svg">
    <g transform="scale(10 -10)">
      <g class="bobOne">
        <path
          d="M -1.0,0.0 C -1.0,0.5521 -0.5521,1.0 0.0,1.0 C 0.5521,1.0 1.0,0.5521 1.0,0.0 C 1.0,-0.5521 0.5521,-1.0 0.0,-1.0 C -0.5521,-1.0 -1.0,-0.5521 -1.0,0.0 Z"
          id="BezierCircle"
          transform="translate(0.5366 -0.4784) scale(0.1788 0.1788)"
        />
      </g>
      <g class="bobTwo">
        <path
          d="M -1.0,0.0 C -1.0,0.5521 -0.5521,1.0 0.0,1.0 C 0.5521,1.0 1.0,0.5521 1.0,0.0 C 1.0,-0.5521 0.5521,-1.0 0.0,-1.0 C -0.5521,-1.0 -1.0,-0.5521 -1.0,0.0 Z"
          id="BezierCircle.001"
          transform="translate(1.3815 0.1741) scale(0.4627 0.4627)"
        />
      </g>
      <g class="bobThree">
        <path
          d="M -1.0,0.0 C -1.0,0.5521 -0.5521,1.0 0.0,1.0 C 0.5521,1.0 1.0,0.5521 1.0,0.0 C 1.0,-0.5521 0.5521,-1.0 0.0,-1.0 C -0.5521,-1.0 -1.0,-0.5521 -1.0,0.0 Z"
          id="BezierCircle.002"
          transform="translate(1.9843 2.0214) scale(1.0775 1.0775)"
        />
      </g>
      <g class="bobFour">
        <path
          d="M -1.0,0.0 C -1.0,0.5521 -0.5521,1.0 0.0,1.0 C 0.5521,1.0 1.0,0.5521 1.0,0.0 C 1.0,-0.5521 0.5521,-1.0 0.0,-1.0 C -0.5521,-1.0 -1.0,-0.5521 -1.0,0.0 Z"
          id="BezierCircle.003"
          transform="translate(3.1278 1.5779) scale(0.9125 0.9125)"
        />
      </g>
      <g class="bobFive">
        <path
          d="M -1.0,0.0 C -1.0,0.5521 -0.5521,1.0 0.0,1.0 C 0.5521,1.0 1.0,0.5521 1.0,0.0 C 1.0,-0.5521 0.5521,-1.0 0.0,-1.0 C -0.5521,-1.0 -1.0,-0.5521 -1.0,0.0 Z"
          id="BezierCircle.004"
          transform="translate(4.205 1.9604) scale(0.7963 0.7963)"
        />
      </g>
      <g class="bobOne">
        <path
          d="M -1.0,0.0 C -1.0,0.5521 -0.5521,1.0 0.0,1.0 C 0.5521,1.0 1.0,0.5521 1.0,0.0 C 1.0,-0.5521 0.5521,-1.0 0.0,-1.0 C -0.5521,-1.0 -1.0,-0.5521 -1.0,0.0 Z"
          id="BezierCircle.005"
          transform="translate(3.2003 2.5082) scale(0.8739 0.8739)"
        />
      </g>
    </g>
  </svg>
</TwoCol>

<style>
  h2 {
    color: black;
  }
  svg {
    width: 50%;
    margin: auto;
  }
  path {
    fill: var(--accent);
  }
  .bobOne {
    animation: bob 1s ease-in-out infinite;
  }
  .bobTwo {
    animation: bob 1s ease-in-out infinite;
    animation-delay: -0.2s;
  }
  .bobThree {
    animation: bob 1s ease-in-out infinite;
    animation-delay: -0.4s;
  }
  .bobFour {
    animation: bob 1s ease-in-out infinite;
    animation-delay: -0.6s;
  }
  .bobFive {
    animation: bob 1s ease-in-out infinite;
    animation-delay: -0.8s;
  }
  @keyframes bob {
    0%,
    100% {
      transform: translateY(0.2px);
    }
    50% {
      transform: translateY(0px);
    }
  }
</style>
