<template>
	<base-card :size="size">
		<a :href="href" target="_blank">
			<img
				class="w-full h-full"
				:src="src"
			>
		</a>
	</base-card>
</template>

<script>
/**
 * 图片（海报）组件
 */

import BaseCard from './base.vue';
export default {
	name: 'PosterCard',
	components: {
		BaseCard
	},
	props: {
		size: {
			type: String,
			default: 'normal',
			validator(value) {
				return ['small', 'normal', 'big'].includes(value);
			}
		},
		src: {
			type: String,
			default: ''
		},
		href: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="postcss" scoped>
</style>