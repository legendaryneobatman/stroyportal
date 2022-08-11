<template>
  <div class="line-header">
    <div class="container line-header__wrapper">
      <div class="line-header__location">
        <img svg-inline src="../../assets/icons/mark.svg" alt="mark">
        Волгоградская область
      </div>
      <ul class="line-header__nav">
        <li>
          <a href="#">Тендеры</a>
        </li>
        <li>
          <a href="#">База подрядчиков</a>
        </li>
        <li>
          <a href="#">
            Другие сервисы
            <img svg-inline src="../../assets/icons/chevron-down.svg" alt="mark">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiLineHeader'
}
</script>

<style lang="scss" scoped>
.line-header {
  height: 32px;
  background: #FAFBFC;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
  }

  &__location {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #708598;

    svg {
      margin-right: 8px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    li {
      &:not(:last-child) {
        margin-right: 24px;
      }

      a {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #708598;

        text-decoration: none;

        svg {
          margin-left: 8px;
        }
      }
    }

    list-style-type: none;
  }
}
</style>
