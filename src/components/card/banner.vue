<template>
	<div class="container w-full">
		<a :href="data.href" target="_blank">
			<img
				class="w-full h-full"
				:src="data.src"
				alt=""
			>
		</a>
	</div>
</template>

<script>
/**
 * 横向 banner 条幅
 */
export default {
	name: 'Banner',
	props: {
		data: {
			type: Object,
			required: true,
			default() {
				return {
					src: '',
					href: ''
				}
			}
		}
	}
}
</script>

<style lang="postcss" scoped>
.container {
	height: 120px;
}
</style>