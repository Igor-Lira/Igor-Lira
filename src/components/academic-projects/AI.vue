<script setup>
import ProjectPage from "../ProjectPage.vue";
</script>

<template>
  <ProjectPage>
    <template #title>
      MACHINE LEARNING ALGORITHMS TO PREDICT CONCRETE PROPERTIES
    </template>
    <template #description>
      <p>
        This is the final project of my graduation at University Federal of
        Ceará. I developed this subject for over 6 months and wrote a full
        report of my analysis. I was evaluated with grade A+ and got my
        certification of engineer after presenting this work.
      </p>
      <p>
        you can read the abstract below, or check the complete report in the
        link (portuguese version only).
      </p>
      <p>
        Keys: Python. Sklearn. GoogleColab. Data Analysis. Exploratory Analysis.
        Sensitivity Analysis.
      </p>
    </template>
    <template #link="{ open }">
      <a
        class="button"
        href="#"
        @click="open('https://repositorio.ufc.br/handle/riufc/68393')"
      >
        Full Report</a
      >
    </template>
    <template #about>
      <p>
        Over the last decades, machine learning techniques have been an
        important subject in concrete research since they achieve an excellent
        performance in predicting concrete properties.
      </p>
      <p>
        In this regard, this study concentrates on the use of machine learning
        methods to forecast the Compressive Strength (CS) and slump of
        conventional concrete.
      </p>
      <p>
        Three distinct ensemble machine learning techniques were used –
        Artificial Neural Network (ANN), Random Forest (RF) and Support Vector
        Machine (SVM) – for regression and classification. These methods were
        evaluated with statistical metrics – Root Mean Squared Error, Mean
        Absolute Error, Accuracy, Precision, Recall and F1-score – using cross
        validation technique for hyperparameters tuning and model training.
      </p>
      <p>
        More than 2750 concrete mix proportions were collected from previously
        published research papers and compiled in two datasets. The inputs are
        the components contents of concrete, including cement, water, fine
        aggregate, coarse aggregate, fly ash, slag and plasticizer. In general,
        the models showed a similar performance in all simulations.
      </p>
      <p>
        ANN performed better in regressions to predict CS (R² = 0.796) and slump
        (R² = 0.692). Moreover, ANN achieved the best accuracy of 52% to predict
        the class of CS, and the SVM obtained the best accuracy of 76% in to
        predict the slump class. The variation in CS and slump were achieved by
        varying the components contents in a sensitivity analysis. The effect of
        each component content in the concrete properties was investigated by
        evaluating the models, and the observed patterns of dosage were in
        accordance with those described in the literature.
      </p>
      <p>
        Therefore, the proposed models, by a high agreement with scientific
        studies and good performance, could be used as efficient tools to
        determine mix proportions that meet requirements of CS and slump.
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
