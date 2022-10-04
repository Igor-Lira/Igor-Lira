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
    <template #about>
      <p>Graduation Final Project at University Federal of Ceará.</p>
      <p>C++.</p>
    </template>
  </ProjectPage>
</template>
