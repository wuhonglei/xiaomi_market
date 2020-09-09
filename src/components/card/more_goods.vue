<template>
	<div class="flex flex-col justify-between">
		<goods-card
			:data="data"
			size="small"
		></goods-card>
		<more-card
			:title="title"
			:type="type"
		></more-card>
	</div>
</template>

<script>
/**
 * 商品 + 查看更多卡片
 */

import GoodsCard from 'src/components/card/goods.vue';
import MoreCard from 'src/components/card/more.vue';
export default {
	name: 'MoreGoods',
	components: {
		GoodsCard,
		MoreCard
	},
	props: {

		// 商品信息
		data: {
			type: Object,
			required: true
		},

		title: {
			type: String,
			default: '浏览更多'
		},

		type: {
			type: String,
			default: '热门'
		}
	},
	created() {
		// TODO 查看更多卡片无法显示
		console.info(this.data);
	}
}
</script>

<style lang="postcss" scoped>
</style>