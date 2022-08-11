<template>
  <div class="header">
    <div class="container header__wrapper">
      <div class="header__logo">
        <img src="../../assets/images/logo.png" alt="stroyportal"/>
      </div>
      <button class="header__menu">
        <img svg-inline src="../../assets/icons/burger.svg" alt="menu" /> Каталог
      </button>
      <ui-search
        v-model="searchValue"
        :list="searchResult"
        class="header__search"
      />
      <button class="header__list">
        <img svg-inline src="../../assets/icons/list.svg" alt="list" /> Список
      </button>
      <div class="header__profile">
        A
      </div>
    </div>
  </div>
</template>

<script>
import UiSearch from '@/components/ui/UiSearch'
import throttle from '@/utils/throttle'
import { getSearchFields } from '@/API'

export default {
  name: 'UiHeader',
  components: { UiSearch },
  data: () => ({
    searchValue: '',
    searchResult: [],
    timer: false,
    timerId: null
  }),
  methods: {
    search: throttle(async function (value) {
      if (value) {
        const response = await getSearchFields(new URLSearchParams({ search: value }))
        this.searchResult = await response.json()
      } else {
        this.searchResult = []
      }
    }, 300)
  },
  watch: {
    searchValue (value) {
      this.search(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  border: 1px solid #ECEFF1;
  border-left: none;
  border-right: none;

  &__wrapper {
    display: flex;
    align-items: center;
    padding: 18px 0;
  }

  &__logo {
    margin-right: 24px;
  }

  &__menu {
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding: 8px 16px;

    background: #FED83D;
    color: #050F19;
    border: 1px solid #FED83D;
    border-radius: 4px;

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    svg {
      margin-right: 8px;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background: #FAFBFC;
    border: 1px solid #ECEFF1;
    border-radius: 4px;
    margin-left: auto;
    margin-right: 24px;

    svg {
      margin-right: 8px;
    }
  }

  &__profile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #9B51E0;

    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
  }
}
</style>
