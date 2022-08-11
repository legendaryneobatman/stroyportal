<template>
  <div class="product-description">
    <div class="product-description__feature">
      <div class="product-description__title">
        <img src="../assets/icons/file-text.svg" alt="">
        Коротко о товар
      </div>
      <div class="product-description__point">
        <span class="product-description__label">Вес</span> ·
        <span class="product-description__text product-description__label--grey">25—50 кг</span>
      </div>
      <div class="product-description__point">
        <span class="product-description__label">Основа</span> ·
        <span class="product-description__text product-description__label--grey">Гипсовая супер штукатурка Knauf Sockelpultz</span>
      </div>
      <a class="product-description__link">Все характеристики</a>
    </div>
    <div class="product-description__feature">
      <div class="product-description__title">
        <img src="../assets/icons/thumbs-up.svg" alt="">
        Пользуется спросом
      </div>
      <div class="product-description__point">
        <span class="product-description__point--underline">2 274 просмотров</span>
        602 заказа
      </div>
    </div>
    <div class="product-description__feature">
      <div class="product-description__title">
        <img src="../assets/icons/check-circle.svg" alt="">
        В наличии в Москве на 4 марта 2020
      </div>
      <a class="product-description__link">140 предложений </a>
    </div>
    <img class="product-description__logo" src="../assets/images/product_logo.png">
  </div>
</template>

<script>
export default {
  name: 'ProductDescription'
}
</script>

<style lang="scss" scoped>
.product-description {
  width: 345px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__feature {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    line-height: 24px;
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    color: #050F19;
  }

  &__point {
    margin-left: 30px;
    max-width: 314px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;

    &--underline {
      border-bottom: 1px dashed #050F19;
      width: fit-content;
      margin-right: 16px;
      cursor: pointer;
    }
  }

  &__label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #0A0A0A;

    &--grey {
      color: #708598;
    }
  }

  &__link {
    margin-left: 30px;
    color: #1652F0;
    cursor: pointer;

    &:hover {
      color: #d60000;
    }
  }

  &__logo {
    margin-left: 30px;
    width: 80px;
    height: 80px;
  }
}
</style>
