<script>
  import SplashHacks from "../../../components/logos/SplashHacks.svelte";
  import SplashHacksIcon from "../../../components/logos/SplashHacksIcon.svelte";
  import Section from "../../../templates/Section.svelte";
  import GridRow from "../../../templates/GridRow.svelte";
</script>

<Section>
  <h2>SplashHacks</h2>
  <GridRow cols="1fr 1fr">
    <span>
      <p>
        SplashHacks is a digital hackathon based out of Santa Monica. The
        founder asked for a brand that hinted at its place of origin but was
        dynamic enough to work anywhere. I came up with the SplashHacks name and
        created the logo.
      </p>
    </span>
    <span>
      <!-- <SplashHacksIcon /> -->
    </span>
  </GridRow>
  <SplashHacks />
</Section>

<style>
  p {
    /* text-indent: 3em; */
  }
  h2 {
    color: black;
  }
</style>
