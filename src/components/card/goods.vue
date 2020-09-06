<template>
	<base-card
		size="normal"
		class="inline-flex flex-col items-center"
	>
		<div class="figure">
			<img
				class="w-full h-full bg-cover"
				:src="data.src"
				:alt="data.name"
			>
		</div>
		<i-text type="name">{{data.name}}</i-text>
		<i-text type="desc">{{data.desc}}</i-text>
		<div class="flex">
			<i-text type="price">{{data.price}}</i-text>
			<i-text
                class="ml-2"
				type="origin-price"
				v-if="data.originPrice"
			>{{data.originPrice}}</i-text>
		</div>
	</base-card>
</template>

<script>
/**
 * 普通商品的展示
 * data 结构：
 * {
 *    img: '商品图片'
 *    name: '商品名称',
 *    desc: '商品描述',
 *    price: '商品价格',
 *    originPrice: '商品原价'
 * }
 */

import BaseCard from './base.vue';
import iText from 'src/components/text/index.vue';
export default {
	name: 'GoodsCard',
	components: {
		BaseCard,
		iText
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="postcss" scoped>
.figure {
	width: 160px;
	height: 160px;
	margin-bottom: 18px;
}
</style>