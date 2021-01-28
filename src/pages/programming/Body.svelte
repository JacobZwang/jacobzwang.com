<script>
  import Section from "../../templates/Section.svelte";
  import Page from "../../templates/Page.svelte";
  import GridRow from "../../templates/GridRow.svelte";
</script>

<svelte:head>
  <title>Programming</title>
  <meta property="og:site_name" content="Jacob Zwang" />
  <meta property="og:title" content="Programming" />
  <meta property="og:description" content="My work in Software Development" />
  <meta
    property="og:image"
    content="https://storage.googleapis.com/jacob-zwang/vectorportrait3.png"
  />
  <meta property="og:url" content="https://www.jacobzwang.com/branding" />
  <meta property="og:type" content="portfolio" />
</svelte:head>

<Page>
  <h1>Some Code I wrote</h1>

  <p style="color: black; text-align: center">
    This page is <b>very</b> under construction 🚧
  </p>
  <Section>
    <iframe
      title="student cohort optimizer"
      src="  https://jacobzwang.github.io/abstract-code/demo/index.html"
      frameborder="0"
    />
  </Section>
  <Section>
    <iframe
      title="student cohort optimizer"
      src="https://jacobzwang.github.io/student-cohort-optimizer/"
      frameborder="0"
      style="margin-left: -100pt"
    />
  </Section>

  <p style="color: black; text-align: center">
    Much more coming soon. While my fingers are growing back, check out more on
    my<a target="_blank" href="https://github.com/jacobzwang">github</a>
  </p>
</Page>

<style>
  img {
    width: 100%;
    margin-top: 20pt;
  }
  h2 {
    color: black;
  }
  iframe {
    width: 100%;
    height: 100vh;
  }
  a {
    color: var(--color);
    text-decoration: none;
    margin: 2.5pt;
    padding: 2.5pt;
  }
  a:hover {
    background-color: var(--offWhite);
    border-radius: var(--stdRadius);
  }
</style>
