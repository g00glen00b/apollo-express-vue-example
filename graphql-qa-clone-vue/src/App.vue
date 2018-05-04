<template>
  <div id="app">
    <div class="container">
      <SiteHeader></SiteHeader>
      <div class="inner-container">
        <h1 class="page-title">Questions</h1>
        <QuestionPage></QuestionPage>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/core/SiteHeader';
import QuestionPage from '@/components/questions/QuestionPage';

export default {
  name: 'app',
  components: {SiteHeader, QuestionPage}
}
</script>

<style>
  .inner-container {
    padding: 1em 0;
  }

  .page-title {
    font-weight: 300;
    font-size: 2em;
  }
</style>
