<template>
	<base-card
		:size="size"
		class="container inline-flex flex-col items-center"
	>
		<div class="figure">
			<img
				class="w-full h-full bg-cover"
				:src="data.src"
				:alt="data.name"
			>
		</div>
		<div class="text-container flex flex-col items-center m-auto">
			<i-text
				class="name"
				type="name"
			>{{data.name}}</i-text>
			<i-text
				type="desc"
				class="desc"
			>{{data.desc}}</i-text>
			<div class="flex">
				<i-text
					class="price"
					type="price"
				>{{data.price}}</i-text>
				<i-text
					class="ml-2"
					type="origin-price"
					v-if="data.originPrice"
				>{{data.originPrice}}</i-text>
			</div>
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

		// 卡片尺寸：small、normal、big
		size: {
			type: String,
			default: 'normal'
		},

		data: {
			type: Object,
			required: true
		}
	},
}
</script>

<style lang="postcss" scoped>
.container {
	padding: 30px;
	padding-top: 0;
}

.figure {
	width: 160px;
	height: 160px;
	margin-bottom: 18px;
}

.small-card.container {
	padding-top: 30px;
}

.small-card .figure {
	width: 80px;
	height: 80px;
}

.small-card .desc {
	display: none;
}

.small-card {
	@apply flex-row-reverse;
}

.small-card .text-container {
	@apply items-start;
	width: 94px;
}

.name {
	margin-bottom: 2px;
}

.price {
	margin-bottom: 14px;
}

.desc {
	margin-bottom: 10px;
}
</style>