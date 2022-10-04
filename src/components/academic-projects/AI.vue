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
    <template #about>
      <p>Graduation Final Project at University Federal of Ceará.</p>
      <p>
        Python. Sklearn. GoogleColab. Data Analysis. Exploratory Analysis.
        Sensitivity Analysis.
      </p>
    </template>
  </ProjectPage>
</template>