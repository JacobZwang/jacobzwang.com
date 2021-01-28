<script>
  import Researcher from "./sections/Researcher.svelte";
  import Planner from "./sections/Planner.svelte";
  import Designer from "./sections/Designer.svelte";
  import Developer from "./sections/Developer.svelte";
  import Marketer from "./sections/Marketer.svelte";
  import Reflector from "./sections/Reflector.svelte";
  import Section from "../../templates/Section.svelte";
  import Page from "../../templates/Page.svelte";
</script>

<svelte:head>
  <title
    >Jacob Zwang | Full Stack Web Developer | Designer | Tech Aficionado</title
  >
  <meta property="og:site_name" content="Jacob Zwang" />
  <meta property="og:title" content="Jacob Zwang | Home" />
  <meta
    property="og:description"
    content="Full Stack Web Developer | Designer | Tech Aficionado"
  />
  <meta
    property="og:image"
    content="https://storage.googleapis.com/jacob-zwang/vectorportrait3.png"
  />
  <meta property="og:url" content="https://www.jacobzwang.com/home" />
  <meta property="og:type" content="portfolio" />
</svelte:head>

<!-- <div class="underscoreContainer">
    <Underscore />
</div> -->

<Page>
  <h1>Who am I?</h1>

  <Section>
    <Researcher />
  </Section>

  <Section>
    <Planner />
  </Section>

  <Section>
    <Designer />
  </Section>

  <Section>
    <Developer />
  </Section>

  <Section>
    <Marketer />
  </Section>

  <Section>
    <Reflector />
  </Section>
</Page>

<style>
  /* .underscoreContainer {
        position: absolute;
        width: 100%;
        height: 30vh;
        z-index: 20;
        padding-top: 15pt;
    }
    @media (max-width: 800px) {
        .underscoreContainer {
            display: none;
        }
    } */
</style>
