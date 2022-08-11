<template>
  <div class="breadcrumbs">
    <div
      v-for="item in breadcrumbs"
      :key="item.id"
      class="breadcrumbs__item"
    >
      <div class="breadcrumbs__title">
        {{ item.title }}
      </div>
      <div v-if="item.description" class="breadcrumbs__description">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiBreadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:not(:last-child) {
      margin-right: 50px;

      &::after {
        position: absolute;
        left: calc(100% + 16px);
        width: 18px;
        height: 18px;
        content: "";
        background: url("../../assets/icons/chevron-right.svg");
      }
    }
  }

  &__title {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #050F19;
  }

  &__description {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #708598;
  }
}
</style>
