<script>
  export let cols;
</script>

<div class="container" style={`grid-template-columns: ${cols}`}>
  <slot />
</div>

<style>
  .container {
    display: grid;
    column-gap: 20pt;
  }
  div {
    width: 100%;
  }
  @media (max-width: 1000px) {
    .container {
      display: block;
    }
  }
</style>
