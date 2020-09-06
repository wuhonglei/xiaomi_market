<template>
	<card-layout mode="single">
		<poster-card v-bind="data.poster"></poster-card>
		<goods-card
			v-for="item in data.goods"
			:key="item.name"
			:data="item"
		></goods-card>
	</card-layout>
</template>

<script>
/**
 * 单行卡片容器
 */
import CardLayout from './index.vue';
import GoodsCard from 'src/components/card/goods.vue'
import PosterCard from 'src/components/card/poster.vue'
export default {
	name: 'SingleCard',
	components: {
		CardLayout,
		GoodsCard,
		PosterCard
	},
	props: {
		data: {
			type: Object,
			default() {
				return {
					poster: {},
					goods: []
				};
			}
		}
	}
}
</script>

<style lang="postcss" scoped>
</style>