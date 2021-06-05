<script>
  import Samo from "../../../components/logos/Samo.svelte";
  import SplashHacksIcon from "../../../components/logos/SplashHacksIcon.svelte";
  import Section from "../../../templates/Section.svelte";
  import GridRow from "../../../templates/GridRow.svelte";
  import TextGraphic from "../../../templates/TextGraphic.svelte";
</script>

<Section>
  <TextGraphic>
    <span slot="text">
      <h2>Santa Monica High School</h2>
      <p>
        This was a project for my digital design class, "design a new logo for
        our school". I was able to express the near-ocean location of our school
        and a technical, forward-thinking image through only a wordmark.
      </p>
    </span>
    <span slot="graphic">
      <Samo color="blue" />
    </span>
  </TextGraphic>
</Section>

<style>
  p {
    /* text-indent: 3em; */
  }
  h2 {
    color: black;
  }
</style>
