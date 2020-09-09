<template>
	<div>
		<banner :data="data.banner"></banner>
		<div>
			<i-text type="title">{{data.title}}</i-text>
		</div>
		<extend-card-layout v-bind="extendData"></extend-card-layout>
	</div>
</template>

<script>
/**
 * 一个大的商品类别，包含横向 banner、类别描述、商品列表
 */

import Banner from '../card/banner.vue';
import iText from '../text/index.vue';
import ExtendCardLayout from '../layout/extend.vue';

import { pick } from 'lodash-es';

export default {
	name: 'Category',
	components: {
		Banner,
		iText,
		ExtendCardLayout
	},
	props: {
		data: {
			type: Object,
			required: true,
			default() {
				return {
					banner: {},
					title: '',
					mode: '',
					showMore: '',
					poster: {
						size: '',
						src: ''
					},
					goods: [{
						src: '',
						name: '',
						desc: '',
						price: '',
						originPrice: ''
					}]
				}
			}
		}
	},
	computed: {
		extendData() {
			return pick(this.data, ['mode', 'showMore', 'poster', 'goods']);
		}
	},
}
</script>

<style lang="postcss" scoped>
</style>