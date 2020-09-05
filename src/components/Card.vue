<template>
	<div class="container">
		<p>卡片</p>
	</div>
</template>

<script>
export default {
	data() {
		let name = "wu";
		return {
			name: name?.startsWith("w"),
		};
	},
};
</script>

<style lang="postcss" scoped>
.container {
	& > p {
		color: red;
	}
}
</style>