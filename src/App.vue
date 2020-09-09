<template>
	<div class="container h-full m-auto flex">
		<div class="mx-auto">
			<category
				v-for="item in dataList"
				:key="item.title"
				:data="item"
			></category>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import Category from './components/layout/category.vue';
import DataList from './data/show.js';

export default {
	name: 'Root',
	components: {
		Category
	},
	setup() {
		return {
			DataList
		}
	},
};
</script>

<style lang="postcss" scoped>
</style>
