<template>
	<card-layout mode="double">
		<template
			v-if="data.poster"
			v-slot:poster
		>
			<poster-card
				v-bind="data.poster"
				size="big"
			></poster-card>
		</template>
		<goods-card
			v-for="item in data.goods"
			:key="item.name"
			:data="item"
		></goods-card>
		<more-goods :data="data.goods[1]"></more-goods>
	</card-layout>
</template>

<script>
/**
 * 单行卡片容器
 */
import CardLayout from './index.vue';
import GoodsCard from 'src/components/card/goods.vue';
import PosterCard from 'src/components/card/poster.vue';
import MoreGoods from 'src/components/card/more_goods.vue';

export default {
	name: 'DoubleleCard',
	components: {
		CardLayout,
		GoodsCard,
		PosterCard,
		MoreGoods
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
		},

		// 右下角是否显示更多
		showMore: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="postcss" scoped>
</style>