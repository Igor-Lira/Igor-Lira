<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title>
      OPTIMIZATION OF FUNCTIONALLY GRADED PLATES UNDER THERMO-MECHANICAL LOADING
    </template>

    <template #description>
      <p>
        A scientific scholarship program at the Federal University of Ceará with
        a duration of 1 year. I presented the results at the international
        conference Cilamce. You can check the abstract below or download the
        article at the link.
      </p>
    </template>

    <template #link="{ open }">
      <a
        class="button"
        href="#"
        @click="open('https://repositorio.ufc.br/handle/riufc/68393')"
      >
        Article
      </a>
    </template>
    <template #about>
      <p>
        Efficient designs for a Functionally Graded Plates (FGP) can be defined
        via structural optimization. Usually, bio-inspired algorithms are
        employed in order to carry out the optimization process. However, when
        analyses are very time-demanding, the process may be too costly, since
        hundreds or even thousands of analyses may be required.
      </p>
      <p>
        In this work, Sequential Approximate Optimization is employed to provide
        a more efficient approach. This paper focuses on the maximization of
        buckling temperature of a ceramic-metal FGP. B-Splines are used to
        define a continuous material gradation along the thickness direction.
        Effective material properties are evaluated by the rule of mixtures. The
        Particle Swarm Optimization (PSO) is applied for structural optimization
        and Isogeometric Analysis (IGA) is employed to evaluate the structural
        responses.
      </p>
      <p>
        Then, Sequential Approximate Optimization (SAO) is carried out to reduce
        the computational cost using Kriging to fit an approximate response
        surface. A comparison between conventional optimization and SAO is
        performed, and results show that SAO achieved the optimum design much
        earlier the conventional approach, requiring fewer high-fidelity
        evaluations.
      </p>
    </template>
  </ProjectPage>
</template>

<style scoped>
.button {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 11px 21px;
  border: 1px solid #b3adad;
  border-radius: 8px;
  background: #fff7f7;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fff7f7),
    to(#b3adad)
  );
  background: -moz-linear-gradient(top, #fff7f7, #b3adad);
  background: linear-gradient(to bottom, #fff7f7, #b3adad);
  -webkit-box-shadow: #ffffff 0px 0px 9px 0px;
  -moz-box-shadow: #ffffff 0px 0px 9px 0px;
  box-shadow: #ffffff 0px 0px 9px 0px;
  text-shadow: #ffffff 1px 1px 1px;
  font: normal normal bold 18px courier new;
  color: #111111;
  text-decoration: none;
}
.button:hover,
.button:focus {
  border: 1px solid #fff7f7;
  background: #ffffff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ffffff),
    to(#d7d0d0)
  );
  background: -moz-linear-gradient(top, #ffffff, #d7d0d0);
  background: linear-gradient(to bottom, #ffffff, #d7d0d0);
  color: #111111;
  text-decoration: none;
}
.button:active {
  background: #b3adad;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#b3adad),
    to(#b3adad)
  );
  background: -moz-linear-gradient(top, #b3adad, #b3adad);
  background: linear-gradient(to bottom, #b3adad, #b3adad);
}
.button:before {
  content: "\0000a0";
  display: inline-block;
  height: 24px;
  width: 24px;
  line-height: 24px;
  margin: 0 4px -6px -4px;
  position: relative;
  top: 0px;
  left: 0px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACCElEQVRIibXVPWgUQRjG8d8cpwQRC4mXQsWPxmijjUUOFdFODwsttdCArRYWEhCCCGqphVgKgVhZ+HFBCwUVcppAGrEQbSQcIdmASLCIXzcWt5pNPHMbSV4Y5oV95vm/+87sbEgq5WgFo7CS5lDM5Fcx0ka7Hx9Qb+O7F5cWAkZK1drDf61IKuXb6MU37ChVaxOLaBu/81wtSirlAiq4jrXpyBW5ADEqYk06ZsU4uawAIf7AJ823GN/wZfXMsgK6qq8aGEU3XocXL/L6L+mYPkrnZ0tYsyTA53TeuuyAqSN74SwmcDGp9OxaVkAorNqlucEn8ZwwmBztyXVUi+0EsZ/pMZdRixovg/CeMCKEwfTjmxXjOKFeGqp9WzJgeqx8AMdxPyg8xh6UsAnHMCuEDkwklfJAjC7nAiSVnnWEXlzQbGU3nuIO3qATQ6jiCvahPwSdePBPQHK0XBD04lpqMomdpWrt3d9FlA+nZttxHjfT+Q9g3iZPNc1vpcI6fuBMK3MoVWujmjdnHcNpUQNZzTxACA7hNO6mLen7GeOTVuYZSD3GcAJbiNsaDX3Z5wtbVEIHTqHvu683Ng6NLeYPuoaGyfwjkkq5NSByLzCDt6Vq7WNb5xyRBRwOrI8IHJzKVLEwwlxBLXPsbgU4l12cEbcFLaYvIsnh9d9RbIib22ga5k5bNs8VvwBsPpZKFYfwBAAAAABJRU5ErkJggg==")
    no-repeat left center transparent;
  background-size: 100% 100%;
}
</style>
