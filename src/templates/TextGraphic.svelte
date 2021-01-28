<div class="container">
  <div class="inline">
    <div>
      <slot name="text" />
    </div>
  </div>
  <span class="center">
    <slot name="graphic" />
  </span>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .center {
    display: contents;
  }
  @media (max-width: 1000px) {
    .container {
      display: block;
    }
    .center {
      display: grid;
      margin-top: 20pt;
      margin-bottom: 20pt;
    }
  }
  .inline {
    display: inline-flex;
    align-items: center;
  }
</style>
