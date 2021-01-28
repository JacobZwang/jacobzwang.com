<script>
  import Hero from "../../templates/Hero.svelte";
</script>

<Hero>
  <div class="main">
    <img src="/images/grass-wide.png" alt="modern house by Jacob Zwang" />
  </div>
</Hero>

<style>
  .main {
    background-color: var(--offWhite);
    height: 38.2vh;
    width: 100vw;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 90%;
  }
</style>
