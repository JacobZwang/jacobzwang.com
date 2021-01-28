<script>
  import Hero from "../../templates/Hero.svelte";
  import Samo from "../../components/logos/Samo.svelte";
  import Cajun from "../../components/logos/Cajun.svelte";
  import Cheezbit from "../../components/logos/Cheezbit.svelte";
  import SplashHacks from "../../components/logos/SplashHacks.svelte";
</script>

<Hero>
  <div class="main">
    <div class="grid">
      <div style="position: relative">
        <Samo color={"blue"} />
      </div>
      <div style="position: relative">
        <Cajun />
      </div>
      <div style="position: relative">
        <Cheezbit />
      </div>
    </div>
  </div>
</Hero>

<style>
  .main {
    background-color: var(--offWhite);
    height: 38.2vh;
    width: 100vw;
  }
  .grid {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>
