<script>
  import Cheezbit from "../../../components/logos/Cheezbit.svelte";
  import CheezbitIcon from "../../../components/logos/CheezbitIcon.svelte";
  import CheezbitText from "../../../components/logos/CheezbitIcon.svelte";
  import TwoCol from "../../../templates/TwoCol.svelte";
  import Section from "../../../templates/Section.svelte";
  import GridRow from "../../../templates/GridRow.svelte";
</script>

<Section>
  <h2>Cheezbit</h2>
  <GridRow cols="1fr 1fr">
    <span>
      <p>
        I was asked to help develop a name and logo for a group of competitive
        programers I was a part of. When talking with the team, they claimed
        that Cheezits were the best programing snack. This led to my discovery
        of the Cheezbit branding.
      </p>
    </span>
    <span>
      <p>
        We promptly agreed on the concept of a Cheezit combined with a
        microprocessor and after 20 or so iterations, I landed on this design. I
        designed the icon, the typography, and the color palette to create this
        memorable branding.
      </p>
    </span>
  </GridRow>
  <GridRow cols="1fr 1fr">
    <div style="width: 50%; margin: auto">
      <CheezbitIcon />
    </div>
    <Cheezbit />
  </GridRow>
</Section>

<style>
  p {
    /* text-indent: 3em; */
  }
  h2 {
    color: black;
  }
</style>
