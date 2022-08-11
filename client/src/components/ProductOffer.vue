<template>
  <div class="product-offer">
    <div class="product-offer__title">
      <img src="../assets/icons/star.svg" alt="">
      <span class="product-offer__text">Популярное предложение</span>
    </div>
    <div class="product-offer__price">
      <span class="product-offer__value">39 900</span>
      <span class="product-offer__currency">РУБ/ ШТ</span>
    </div>
    <span class="product-offer__text product-offer__text--green">В наличии</span>
    <button class="product-offer__button">Перейти в магазин</button>
    <div class="product-offer__seller">
      <img class="product-offer__icon" src="../assets/icons/shield.svg">
      <div class="product-offer__info">
        <span class="product-offer__text product-offer__text--green">Проверенный поставщик</span>
        <span class="product-offer__title">ООО ВсеИнструменты.ру</span>
        <span class="product-offer__mark">Диллер</span>
      </div>
      <img class="product-offer__logo" src="../assets/images/seller_logo.png" alt="">
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductOffer'
}
</script>

<style lang="scss" scoped>
  .product-offer {
    width: 350px;
    height: fit-content;
    padding: 24px;
    border-top: 4px solid #FED83D;
    border-left: 1px solid #ECEFF1;
    border-right: 1px solid #ECEFF1;
    border-bottom: 1px solid #ECEFF1;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
    border-radius: 4px;

    &__title {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #050F19;
      white-space: nowrap;
    }

    &__text {
      font-weight: 600;
      font-size: 10px;
      line-height: 10px;
      letter-spacing: 0.04em;
      text-transform: uppercase;

      &--green {
        color: #05B169;
      }

    }

    &__price {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      color: #050F19;
      margin-top: 32px;
      margin-bottom: 8px;
    }

    &__value {
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
    }

    &__currency {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
    }

    &__button {
      width: 100%;
      margin-top: 32px;
      margin-bottom: 32px;
      padding: 12px;
      background: #FED83D;
      border-radius: 4px;
      border: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: #0A0A0A;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #0A0A0A;
        box-shadow: 2px 2px 8px 0px rgba(34, 60, 80, 0.2);
      }

      &:active {
        background: #05B169;
        box-shadow: inset 0px 0px 5px #c1c1c1;
        outline: none;
      }
    }

    &__seller {
      display: flex;
    }
    &__info {
      margin-right: 20px;
      .product-offer__title {
        margin: 8px 0;
      }
    }

    &__icon {
      border: 1px solid #05B169;
      border-radius: 50%;
      padding: 12px;
      width: 48px;
      height: 48px;
      margin-right: 12px;
    }

    &__title {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #0A0A0A;
    }

    &__mark {
      background: #E5FFF0;
      border-radius: 2px;
      padding: 5px 12px;
      font-weight: 600;
      font-size: 10px;
      line-height: 10px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #05B169;
    }

    &__logo {
      width: 42px;
      height: 20px;
    }
  }
</style>
