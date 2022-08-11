<template>
  <div class="page">
    <header class="page__header">
      <ui-line-header />
      <ui-header />
    </header>
    <article class="container page__content">
      <ui-breadcrumbs class="page__breadcrumbs" :breadcrumbs="breadcrumbs"/>
      <h1 class="page__title">
        Штукатурка цементная цокольная Knauf Sockelpultz 25 кг
        <img svg-inline src="./assets/icons/share.svg" alt="share" />
      </h1>
      <ui-menu :menu="menu" class="page__menu"/>
      <div class="page__product">
        <product-preview
          :images="product.images"
        />
        <product-description/>
        <product-offer/>
      </div>
    </article>
  </div>
</template>

<script>
import UiLineHeader from '@/components/ui/UiLineHeader'
import UiHeader from '@/components/ui/UiHeader'
import UiBreadcrumbs from '@/components/ui/UiBreadcrumbs'
import UiMenu from '@/components/ui/UiMenu'
import ProductPreview from '@/components/ProductPreview'
import ProductDescription from '@/components/ProductDescription'
import ProductOffer from '@/components/ProductOffer'

export default {
  name: 'App',
  components: { ProductOffer, ProductDescription, ProductPreview, UiMenu, UiBreadcrumbs, UiHeader, UiLineHeader },
  data: () => ({
    breadcrumbs: [
      { id: 1, title: 'Каталог', description: '4 442 512' },
      { id: 2, title: 'Строительные материалы', description: '4 442 512 предложения' },
      { id: 3, title: 'Сухие строительные смеси', description: '4 442 512 предложения' },
      { id: 4, title: 'Шпатлевки', description: '4 442 512 предложения' },
      { id: 5, title: 'Шпатлевка Knauf', description: null }
    ],
    menu: [
      { id: 1, label: 'Где купить', link: '#' },
      { id: 2, label: 'Описание', link: '#' },
      { id: 3, label: 'Характеристики', link: '#' },
      { id: 4, label: 'Динамика цен', link: '#' },
      { id: 5, label: 'Календарь низких цен', link: '#' },
      { id: 6, label: 'Сравнение', link: '#' },
      { id: 7, label: 'Отзывы', link: '#' },
      { id: 8, label: 'Тендеры', link: '#' }
    ],
    product: {
      isBestseller: true,
      isPromotional: true,
      images: [
        require('@/assets/images/product1.jpg'),
        require('@/assets/images/product2.png'),
        require('@/assets/images/product1.jpg'),
        require('@/assets/images/product2.png'),
        require('@/assets/images/product1.jpg'),
        require('@/assets/images/product2.png'),
        require('@/assets/images/product1.jpg'),
        require('@/assets/images/product2.png')
      ]
    }
  })
}
</script>

<style lang="scss">
* {
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
}
</style>

<style lang="scss" scoped>
.page {

  &__breadcrumbs {
    margin-top: 16px;
    margin-bottom: 24px;
  }

  &__title {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    color: #050F19;
    margin-top: 0;
    margin-bottom: 24px;

    svg {
      margin-left: 12px;
    }
  }

  &__product {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    gap: 30px;
  }
}
</style>
