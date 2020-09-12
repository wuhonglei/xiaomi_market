<template>
	<div class="container h-full m-auto flex">
		<div class="mx-auto">
			<category
				v-for="item in _dataList"
				:key="item.title"
				:data="item"
			></category>
		</div>
	</div>
</template>

<script>
import { ref, reactive } from "vue";
import Category from './components/layout/category.vue';
import DataList from './data/show.js';

export default {
	name: 'Root',
	components: {
		Category
	},
	setup() {
		let _dataList = reactive(DataList);
		return {
			_dataList
		};
	},
};
</script>

<style lang="postcss" scoped>
.container {
	max-width: 1226px;
}
</style>
