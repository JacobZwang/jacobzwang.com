<script>
  import Section from "../../templates/Section.svelte";
  import Page from "../../templates/Page.svelte";
  import GridRow from "../../templates/GridRow.svelte";
</script>

<svelte:head>
  <title>Architecture</title>
  <meta property="og:site_name" content="Jacob Zwang" />
  <meta property="og:title" content="Architecture" />
  <meta property="og:description" content="Modern Architeture" />
  <meta
    property="og:image"
    content="https://storage.googleapis.com/jacob-zwang/vectorportrait3.png"
  />
  <meta property="og:url" content="https://www.jacobzwang.com/branding" />
  <meta property="og:type" content="portfolio" />
</svelte:head>

<Page>
  <h1>Architecture I designed</h1>

  <p style="color: black; text-align: center">
    This page is under construction 🚧
  </p>

  <Section>
    <GridRow cols="1fr 1fr">
      <img src="/images/housefront.png" alt="modern house exterior" />
      <img src="/images/houseinterior.png" alt="modern house interior" />
    </GridRow>
  </Section>

  <Section>
    <h2>Hear me out, it's a house, with a qr code on it 🤯</h2>
    <img
      src="/images/qrcode-house.png"
      alt="house with qrcode by jacob zwang"
    />
  </Section>

  <Section>
    <h2>Grass on the house, concrete on the yard</h2>
    <GridRow cols="1fr 1fr">
      <span>
        <img src="/images/grass-entry.png" alt="modern house exterior" />
        <img src="/images/grass-int1.png" alt="modern house interior" />
      </span>
      <span>
        <img src="/images/grass-ext1.png" alt="modern house interior" />
        <img src="/images/grass-ext2.png" alt="modern house interior" />
      </span>
    </GridRow>
  </Section>

  <p style="color: black; text-align: center">
    Much more coming soon. The film is processing. 🎞️
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
</style>
