<div class="container">
  <div>
    <div>
      <slot name="left" />
    </div>
  </div>
  <span>
    <slot name="right" />
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
  div {
    width: 100%;
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
