<template>
  <div
    class="search"
    v-click-outside="() => onShow(false)"
  >
    <input
      :value="modelValue"
      @input.stop="$emit('update:modelValue', $event.target.value)"
      class="search__input"
      placeholder="Cтроительные смеси"
    />
    <img class="search__append-icon" svg-inline src="../../assets/icons/search.svg" alt="search" />
    <div
      class="search__list"
      :class="{ 'search__list--show': isShowList }"
    >
      <div
        v-for="item in list"
        :key="item.id"
        class="search__item"
        @click="onSelectElement(item)"
      >
        <div class="search__title">
          {{ item.title }}
        </div>
        <div class="search__price">
          {{ item.price }} {{ item.currency }}.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiSearch',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isShowList: false
  }),
  methods: {
    onShow (value) {
      this.isShowList = value
    },
    onSelectElement (item) {
      this.onShow(false)
      this.$emit('update:modelValue', item.title)
    }
  },
  watch: {
    list: {
      handler () {
        this.onShow(!!this.list.length)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: #FFFFFF;
  border: 1px solid #ECEFF1;
  border-radius: 4px;
  width: 250px;

  &__input {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #708598;
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: #708598;
    }
  }

  &__list {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    top: calc(100% + 5px);
    left: 0;
    z-index: 99;
    box-shadow: 0 0 5px black;
    height: 0;
    overflow-y: scroll;
    transition: all ease-in-out .3s;

    &--show {
      height: 300px;
    }
  }

  &__item {
    padding: 12px 6px;
    transition: all ease-in-out .3s;
    cursor: pointer;

    &:hover {
      background: #e2effb;
    }
  }

  &__title {
    font-size: 12px;
  }

  &__price {
    font-size: 12px;
    color: #708598;
  }
}
</style>
