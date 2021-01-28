<div class="margin">
  <div class="flex">
    <slot />
  </div>
</div>

<style>
  .flex {
    display: grid;
    grid-auto-columns: 1fr;
    align-items: center;
    height: 100%;
  }
  .margin {
    margin-right: 100pt;
  }
</style>
