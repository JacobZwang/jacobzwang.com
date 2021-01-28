<script>
  import { header, route } from "../store.js";
  import { slide } from "svelte/transition";

  $header.preview = $route;

  export let navItems;

  let menuOpen = false;
  function openMenu() {
    if (menuOpen) {
      menuOpen = false;
    } else {
      menuOpen = true;
    }
  }
</script>

<div class="container">
  <main>
    <div class="nav" on:mouseleave={() => ($header.preview = $route)}>
      {#each navItems as navItem}
        <h3
          class="navItem"
          class:active={$route == navItem.route}
          on:click={() => {
            $route = navItem.route;
            window.history.pushState(null, null, navItem.route);
            window.scrollTo(0, 0);
            ga("set", "page", navItem.route);
            ga("send", "pageview");
          }}
          on:mouseover={() => ($header.preview = navItem.route)}
        >
          {navItem.name}
          {#if navItem.underConstruction}
            <span class="emoji">🚧</span>
          {/if}
        </h3>
      {/each}
      <h3>
        <a href="/resume.pdf" target="_blank">Resume</a>
      </h3>
    </div>
    <svg class="navItem menuButton" viewBox="0 0 8 8" on:click={openMenu}>
      <line x1="0" y1="2" x2="8" y2="2" stroke="black" stroke-width="1" />
      <line x1="0" y1="4" x2="8" y2="4" stroke="black" stroke-width="1" />
      <line x1="0" y1="6" x2="8" y2="6" stroke="black" stroke-width="1" />
    </svg>
  </main>
  {#if menuOpen}
    <div class="mobileNav" transition:slide>
      {#each navItems as navItem}
        <h3
          class="mobileNavItem"
          class:mobileActive={$route == navItem.route}
          on:click={() => {
            $route = navItem.route;
            menuOpen = false;
            window.history.pushState(null, null, navItem.route);
            window.scrollTo(0, 0);
            ga("set", "page", navItem.route);
            ga("send", "pageview");
          }}
        >
          {navItem.name}
          {#if navItem.underConstruction}
            <span class="emoji">🚧</span>
          {/if}
        </h3>
      {/each}
    </div>
  {/if}
</div>

<style>
  main {
    display: block;
    background-color: white;
    height: 40pt;
    position: relative;
    z-index: 10;
    width: 100vw;
  }
  .nav {
    height: 100%;
    display: inline-flex;
    position: sticky;
  }
  .navItem {
    margin: 20pt;
    display: none;
    cursor: pointer;
  }
  h3 {
    text-transform: uppercase;
    font-size: 16pt;
    white-space: nowrap;
  }
  .menuButton {
    display: block;
    height: 18pt;
    float: right;
    cursor: pointer;
  }
  .active {
    display: unset;
  }
  .container {
    display: block;
    background-color: white;
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 10;
    margin-bottom: 0;
    position: sticky;
  }
  .mobileNav {
    position: absolute;
    background-color: var(--offWhite);
    width: 100%;
  }
  .mobileNavItem {
    display: block;
  }
  .mobileActive {
    text-decoration: underline 2pt var(--color);
  }
  @media (min-width: 800px) {
    .navItem:hover {
      text-decoration: underline 2pt var(--accent);
      cursor: pointer;
    }
    .active {
      text-decoration: underline 2pt var(--color);
    }
    .nav {
      height: 100%;
      display: inline-flex;
      position: sticky;
    }
    .navItem {
      display: unset;
    }
    .menuButton {
      display: none;
    }
  }
  .emoji {
    font-size: 0.8em;
    vertical-align: middle;
  }
  a {
    color: blue;
    text-decoration: none;
    padding: 5pt;
    margin: -5pt;
  }
  a:hover {
    background-color: var(--offWhite);
    border-radius: var(--stdRadius);
  }
</style>
