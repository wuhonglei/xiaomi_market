<template>
	<div class="grid-container grid grid-flow-row">
		<!-- 左侧海报区域 -->
		<div
			v-if="$slots.poster"
			:class="posterClass"
		>
			<slot name="poster"></slot>
		</div>
		<!-- 卡片内容区域（size=normal） -->
		<slot></slot>
		<!-- 右下角：浏览更多 -->
		<!-- <div
			v-if="$slots.more"
			class="more"
		>
			<slot name="more"></slot>
		</div> -->
	</div>
</template>

<script>
/**
 * 布局组件
 * 分为两种类型：
 * ① 单行：每个卡片大小一致
 * ② 两行
 *    - ②-1：左侧有大卡片
 *    - ②-2：左侧无大卡片
 *    - ②-3：右下角有浏览更多
 */

const MODE = {
	SINGLE: 'single',
	DOUBLE: 'double'
};

export default {
	name: 'CardLayout',
	props: {
		mode: {
			type: String,
			default: MODE.SINGLE,
			validator(value) {
				return Object.values(MODE).includes(value);
			}
		}
	},
	computed: {

		isSingleMode() {
			return this.mode === MODE.SINGLE;
		},
		posterClass() {
			return [
				this.isSingleMode ? 'single-poster' : 'double-poster'
			];
		}
	},
}
</script>

<style lang="postcss" scoped>
.grid-container {
	--width: 234px;
	--small-height: 143px;
	--normal-height: 300px;
	--big-height: 614px;
	--column-gap: 14px;
	--row-gap: 14px;

	grid-template-columns: repeat(5, var(--width));
	grid-template-rows: repeat(1, var(--normal-height));
	grid-auto-rows: var(--normal-height);
	grid-column-gap: var(--column-gap);
	grid-row-gap: var(--row-gap);
}

.single-poster {
	grid-area: 1/1 2/2;
}

.double-poster {
	grid-area: 1/1 3/2;
}
</style>