<template>
  <div class="menu">
    <div class="menu__item menu__item--prev" @click="prev">
      <img svg-inline src="../../assets/icons/chevron-right.svg" />
    </div>
    <div ref="menu" class="menu__wrapper" :style="{ transform: `translateX(${menuTranslate}px)` }">
      <div
        v-for="item in menu"
        :key="item.id"
        class="menu__item"
      >
        <a :href="item.link">
          {{item.label}}
        </a>
      </div>
    </div>
    <div class="menu__item  menu__item--next" @click="next">
      <img svg-inline src="../../assets/icons/chevron-right.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiMenu',
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    menuTranslate: 0
  }),
  methods: {
    next () {
      const elMenu = this.$refs.menu
      const menuWidth = elMenu.offsetWidth
      const items = elMenu.querySelectorAll('.menu__item')
      let itemsWidth = 0

      for (const item of items) {
        if (itemsWidth <= menuWidth + Math.abs(this.menuTranslate)) {
          itemsWidth += item.offsetWidth
        }
      }
      this.menuTranslate = itemsWidth - Math.abs(this.menuTranslate) === menuWidth ? 0 : menuWidth - itemsWidth
    },
    prev () {
      const elMenu = this.$refs.menu
      const menuWidth = elMenu.offsetWidth
      const items = elMenu.querySelectorAll('.menu__item')
      let itemsWidth = 0
      let targetEl = null

      for (const item of items) {
        itemsWidth += item.offsetWidth
        if (itemsWidth < menuWidth + Math.abs(this.menuTranslate)) {
          targetEl = item
        }
      }
      if (!this.menuTranslate) {
        this.menuTranslate = -(itemsWidth - menuWidth)
      } else {
        const result = Math.abs(this.menuTranslate) - targetEl.offsetWidth

        this.menuTranslate = result < 0 ? 0 : -result
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  border: 1px solid #ECEFF1;
  border-radius: 4px;
  overflow: hidden;

  &__wrapper {
    display: flex;
    align-items: center;
    width: calc(1100px - 96px);
    transition: all ease-in-out .3s;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 40px;
    white-space: nowrap;
    background: #FAFBFC;
    cursor: pointer;

    a {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #050F19;
      text-decoration: none;
    }

    &:not(:last-child) {
      border-right: 1px solid #ECEFF1;
    }

    &--prev, &--next {
      z-index: 99;
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      padding: 12px;

      svg {
        outline: none;
      }
    }

    &--prev {
      svg {
        transform: rotate(180deg);
      }
    }

    &--next {
      border-left: 1px solid #ECEFF1;
    }
  }
}
</style>
