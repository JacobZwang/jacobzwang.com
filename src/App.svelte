<script lang="ts">
  import { header, route } from "./store";
  import { fly } from "svelte/transition";

  import Nav from "./components/Nav.svelte";

  import HomeHero from "./pages/home/Hero.svelte";
  import HomeBody from "./pages/home/Body.svelte";

  import BrandingHero from "./pages/branding/Hero.svelte";
  import BrandingBody from "./pages/branding/Body.svelte";

  import ArchitectureHero from "./pages/architecture/Hero.svelte";
  import ArchitectureBody from "./pages/architecture/Body.svelte";

  import ProgrammingHero from "./pages/programming/Hero.svelte";
  import ProgrammingBody from "./pages/programming/Body.svelte";

  import PageFooter from "./components/Footer.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    $route = window.location.pathname;
    $header.preview = window.location.pathname;
    window.scrollTo(0, 0);
  });

  const mainPages = [
    {
      route: "/home",
      name: "Home",
      underConstruction: false,
    },
    {
      route: "/branding",
      name: "Branding",
      underConstruction: true,
    },
    {
      route: "/architecture",
      name: "Architecture",
      underConstruction: true,
    },
    {
      route: "/programming",
      name: "Programming",
      underConstruction: true,
    },
  ];
  let stickyNav;

  onMount(() => {
    document.addEventListener("scroll", function (e) {
      stickyNav = window.scrollY > window.innerHeight * 0.382 + 10;
    });
  });
</script>

<main>
  <div class="hero">
    {#if $header.preview == "/home"}
      <div
        class="heroContent"
        in:fly={{ x: 500, duration: 500 }}
        out:fly={{ x: -500, duration: 500 }}
      >
        <HomeHero />
      </div>
    {/if}
    {#if $header.preview == "/branding"}
      <div
        class="heroContent"
        in:fly={{ x: 500, duration: 500 }}
        out:fly={{ x: -500, duration: 500 }}
      >
        <BrandingHero />
      </div>
    {/if}
    {#if $header.preview == "/architecture"}
      <div
        class="heroContent"
        in:fly={{ x: 500, duration: 500 }}
        out:fly={{ x: -500, duration: 500 }}
      >
        <ArchitectureHero />
      </div>
    {/if}
    {#if $header.preview == "/programming"}
      <div
        class="heroContent"
        in:fly={{ x: 500, duration: 500 }}
        out:fly={{ x: -500, duration: 500 }}
      >
        <ProgrammingHero />
      </div>
    {/if}
  </div>

  <div class={stickyNav ? "stickyNav" : "scrollingNav"}>
    <Nav navItems={mainPages} />
  </div>

  <div class={stickyNav ? "backdrop stickyNavCompensation" : "backdrop"}>
    {#if $route == "/home"}
      <div class="content" in:fly={{ x: 500, duration: 500 }}>
        <HomeBody />
      </div>
    {/if}
    {#if $route == "/branding"}
      <div class="content" in:fly={{ x: 500, duration: 500 }}>
        <BrandingBody />
      </div>
    {/if}
    {#if $route == "/architecture"}
      <div class="content" in:fly={{ x: 500, duration: 500 }}>
        <ArchitectureBody />
      </div>
    {/if}
    {#if $route == "/programming"}
      <div class="content" in:fly={{ x: 500, duration: 500 }}>
        <ProgrammingBody />
      </div>
    {/if}
    <PageFooter pages={mainPages} />
    <div class="footer">
      <span class="finePrint"
        >Copyright © 2020 Jacob Zwang. All rights reserved.</span
      >
    </div>
  </div>
</main>

<style>
  .hero {
    background-color: var(--color);
    height: 38.2vh;
    width: 100%;
    display: block;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .backdrop {
    margin-top: -30pt;
    background-color: white;
    height: 100%;
    width: 100%;
    position: relative;
  }
  .heroContent {
    height: 100%;
    position: absolute;
    width: 100%;
  }
  .content {
    height: 100%;
    position: relative;
    width: 100%;
  }
  main {
    height: 100%;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .footer {
    padding: 10pt;
  }
  .finePrint {
    display: block;
    font-size: 12px;
    text-align: center;
    margin: 10pt;
  }
  .scrollingNav {
    margin-top: calc(38.2vh);
  }
  .stickyNav {
    background-color: white;
    position: fixed;
    top: -10px;
    z-index: 100;
    padding-bottom: 10pt;
    border-bottom: 1pt solid grey;
  }
  .stickyNavCompensation {
    margin-top: calc(38.2vh - 8px);
  }
</style>
