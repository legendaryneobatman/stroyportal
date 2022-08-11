<template>
  <div class="product-preview">
    <div class="product-preview__wrapper">
      <div class="product-preview__labels">
        <div class="product-preview__label product-preview__label--orange">хит продаж</div>
        <div class="product-preview__label product-preview__label--red">акция</div>
      </div>
      <button class="product-preview__button">
        <img svg-inline src="../assets/icons/plus.svg" alt="share"/>В список
      </button>
      <figure
        class="product-preview__zoom"
        @mousemove="zoomOnHover"
        :style="{background: `url(${images[activeImageIndex]})`}"
      >
        <img class="product-preview__image" :src="images[activeImageIndex]" alt=""/>
      </figure>
      <span class="product-preview__hint">Наведите на изображение, чтобы увеличить его</span>
    </div>
    <ui-slider
      :images="images"
      :selected-slide-index="activeImageIndex"
      v-model:activeImageIndex="activeImageIndex"
    />
  </div>

</template>

<script>
import UiSlider from '@/components/ui/UiSlider'

export default {
  name: 'ProductPreview',
  components: { UiSlider },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    activeImageIndex: 0
  }),
  methods: {
    zoomOnHover (e) {
      const zoomer = e.currentTarget
      const offsetX = e.offsetX || e.touches[0]?.pageX
      const x = offsetX / zoomer.offsetWidth * 100
      const y = e.offsetY / zoomer.offsetHeight * 100
      zoomer.style.backgroundPosition = x + '% ' + y + '%'
    }
  }

}
</script>

<style lang="scss" scoped>
.product-preview {
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    height: 289px;
    padding: 16px;
    border: 1px solid #ECEFF1;
    border-radius: 4px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 10px;
  }

  &__labels {
    position: absolute;
    z-index: 99;
    top: 16px;
    left: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__label {
    width: fit-content;
    height: 24px;
    border-radius: 2px;
    padding: 7px 12px;
    font-size: 10px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #FFFFFF;

    &--orange {
      background: #F2994A;
    }

    &--red {
      background: #E92F2F;
    }

  }

  &__button {
    position: absolute;
    z-index: 99;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 2px 8px;
    width: fit-content;
    height: 24px;
    border: 1px solid #1652F0;
    border-radius: 2px;
    background: #FFFFFF;
    color: #1652F0;
    line-height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__hint {
    position: absolute;
    bottom: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #708598;
  }

  &__zoom {
    position: relative;
    z-index: 0;
    background-position: 50% 50%;
    overflow: hidden;
    cursor: zoom-in;
  }

  &__image {
    width: 250px;
    height: 250px;
    transition: opacity .5s;
    display: block;

    &:hover {
      opacity: 0;
    }
  }
}

</style>
