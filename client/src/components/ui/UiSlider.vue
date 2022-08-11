<template>
  <div class="slider">
    <div
      :class="{
          'slider__item': true,
          'slider__item--prev': true,
          'slider__item--selected': activeSlideIndex !== 1,
        }"
      @click="prev"
    >
      <img svg-inline src="../../assets/icons/chevron-right.svg">
    </div>
    <div class="slider__wrapper">
      <div
        class="inner"
        :style="{ transform: `translateX(${translateX})` }"
      >
        <div
          ref="items"
          v-for="(slide, slideIndex) in images"
          :class="{
              'slider__item': true,
              'slider__item--selected': isSelected(slideIndex),
            }"
          :key="slide"
          @click="handleClick(slideIndex)"
        >
          <img :src="slide" alt="" class="image">
        </div>
      </div>
    </div>
    <div :class="{
          'slider__item': true,
          'slider__item--next': true,
          'slider__item--selected': activeSlideIndex !== images.length - 2,
        }" @click="next">
      <img svg-inline src="../../assets/icons/chevron-right.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiSlider',
  props: {
    images: {
      type: Array,
      default: () => []
    },
    selectedSlideIndex: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    activeSlideIndex: 1,
    itemWidth: 0
  }),
  computed: {
    translateX () {
      return `-${this.itemWidth * (this.activeSlideIndex - 1)}px`
    }
  },
  mounted () {
    this.getTranslateWidth()
  },
  methods: {
    getTranslateWidth () {
      if (this.itemWidth === 0) this.itemWidth = (this.$refs.items[0])?.offsetWidth + 8
    },
    next () {
      if (this.activeSlideIndex === this.images?.length - 2) {
        this.activeSlideIndex = 1
      } else {
        this.activeSlideIndex += 1
      }
    },
    prev () {
      if (this.activeSlideIndex === 1) {
        this.activeSlideIndex = this.images.length - 2
      } else {
        this.activeSlideIndex -= 1
      }
    },
    isSelected (index) {
      return this.selectedSlideIndex === index
    },
    handleClick (slideIndex) {
      this.$emit('update:activeImageIndex', slideIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;

  &__wrapper {
    max-width: 280px;
    overflow: hidden;

    .inner {
      display: flex;
      align-items: center;
      width: 100%;
      transition: all ease-in-out .3s;
      gap: 8px;
    }
  }

  &_inner {
    display: flex;
    align-items: center;
    width: 100%;
    transition: all ease-in-out .3s;
    gap: 8px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    width: 88px;
    height: 64px;
    padding: 12px;
    color: #708598;

    .image {
      width: 100%;
      height: auto;
    }

    &--selected {
      color: #1652F0;
      border: 1.5px solid #1652F0;
      border-radius: 2px;
    }

    &--prev, &--next {
      z-index: 99;
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      padding: 0;
      margin: 0;
      border: none;

      svg {
        outline: none;
      }
    }

    &--prev {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
