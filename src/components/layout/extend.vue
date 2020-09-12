<template>
	<card-layout :mode="mode">
		<template
			v-if="posterSize"
			v-slot:poster
		>
			<poster-card
				v-for="item in data.posters"
				:key="item.src"
				:size="posterSize"
				v-bind="item"
			></poster-card>
		</template>
		<goods-card
			v-for="item in goodsList"
			:key="item.name"
			:data="item"
		></goods-card>
		<more-goods
			v-if="showMore && hasMoreData"
			:data="firstMoreData"
		></more-goods>
	</card-layout>
</template>

<script>
/**
 * 单行卡片容器
 */
import { ref } from 'vue';

import CardLayout from './index.vue';
import GoodsCard from 'src/components/card/goods.vue';
import PosterCard from 'src/components/card/poster.vue';
import MoreGoods from 'src/components/card/more_goods.vue';

import { get } from 'lodash-es';

const MODE = {
	SINGLE: 'single',
	DOUBLE: 'double'
};

export default {
	name: 'DoubleleCard',
	components: {
		CardLayout,
		GoodsCard,
		PosterCard,
		MoreGoods
	},
	props: {
		// 单行还是双行模式
		mode: {
			type: String,
			default: MODE.SINGLE,
			validator(value) {
				return Object.values(MODE).includes(value);
			}
		},

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
	},
	computed: {

		// 可用与显示商品的卡片数量
		availableCardNum() {
			let modeCount = {
				[MODE.SINGLE]: 5,
				[MODE.DOUBLE]: 10
			};
			let posterCount = {
				big: 2,
				normal: 1
			};
			let posterSize = get(this.data, 'posters.length', 0) * posterCount[this.posterSize] ?? 0;
			return modeCount[this.mode] - posterSize;
		},
		posterSize() {
			if (!this.data.posters?.length) {
				return 0;
			}
			return ((this.mode === MODE.SINGLE || this.data.posters.length === 2) ? 'normal' : 'big');
		},
		goodsLen() {
			return this.data.goods.length;
		},
		hasMoreData() {
			return this.goodsLen > this.availableCardNum;
		},
		firstMoreData() {
			let index = this.goodsList.length;
			return this.data.goods[index];
		},
		goodsList() {
			// 1. 仅商品数量大于展位时，才显示查看更多
			let len = this.availableCardNum;
			if (this.hasMoreData) {
				len -= (this.showMore ? 1 : 0);
			}
			return this.data.goods.slice(0, len);
		}
	},
}
</script>

<style lang="postcss" scoped>
</style>