<script>
  import Cheezbit from "./sections/Cheezbit.svelte";
  import Section from "../../templates/Section.svelte";
  import Page from "../../templates/Page.svelte";
  import SplashHacks from "./sections/SplashHacks.svelte";
  import Samo from "./sections/Samo.svelte";
</script>

<svelte:head>
  <title>Branding</title>
  <meta property="og:site_name" content="Jacob Zwang" />
  <meta property="og:title" content="Branding" />
  <meta property="og:description" content="Minimalist and Abstract Branding" />
  <meta
    property="og:image"
    content="https://storage.googleapis.com/jacob-zwang/vectorportrait3.png"
  />
  <meta property="og:url" content="https://www.jacobzwang.com/branding" />
  <meta property="og:type" content="portfolio" />
</svelte:head>

<Page>
  <h1>Brands I designed</h1>
  <p style="color: black; text-align: center">
    This page is under construction 🚧
  </p>
  <Cheezbit />
  <SplashHacks />
  <Samo />
  <p style="color: black; text-align: center">Much more coming soon 🕚</p>
</Page>
