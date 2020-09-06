<template>
		<div
			class="card-container bg-white transform"
			:class="cardClass"
		>
			<slot></slot>
		</div>
</template>

<script>

/**
 * 卡片基础容器，自带 hover 后的阴影效果
 * 提供 3 中尺寸：small、normal、big
 */

const sizeMap = {
	small: {
		class: 'small-card'
	},
	normal: {
		class: 'normal-card'
	},
	big: {
		class: 'big-card'
	}
}

export default {
	name: 'BaseCard',
	props: {

		// 卡片尺寸：small、normal、big
		size: {
			type: String,
			default: ''
		},

		// hover 时是否向上移动
		showTranslate: {
			type: Boolean,
			default: true
		},

		// hover 时是否显示阴影
		showShadow: {
			type: Boolean,
			default: true
		},

		// hover 时是否显示
		showCursor: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		cardClass() {
			return [
				sizeMap[this.size]?.class ?? '',
				{
					'cursor-pointer': this.showCursor,
					'hover:shadow-xl': this.showShadow,
					'hover:-translate-y-1': this.showTranslate
				}
			];
		}
	}
}
</script>

<style lang="postcss" scoped>
.card-container {
	--width: 234px;
	--small-height: 143px;
	--normal-height: 300px;
	--big-height: 614px;
}

.card-container {
	transition: transform 0.4s ease;

	&.small-card,
	&.normal-card,
	&.big-card {
		width: var(--width);
	}

	&.small-card {
		height: var(--small-height);
	}

	&.normal-card {
		height: var(--normal-height);
	}

	&.big-card {
		height: var(--big-height);
	}
}
</style>