<template>
	<base-card size="normal">
		<img
			class="w-full h-full"
			v-bind="$attrs"
		>
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
		}
	}
}
</script>

<style lang="postcss" scoped>
</style>