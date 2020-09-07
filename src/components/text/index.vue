<template>
	<p :class="textClass">
		<slot>{{text}}</slot>
	</p>
</template>

<script>

/**
 * 文字组件
 * 1. 文字
 * 2. 字体大小
 * 3. 颜色
 * 
 * 使用
 * <i-text type="title">
		手机
	</i-text>
	<i-text type="name">
		小米真无线蓝牙耳机 Air 2
	</i-text>
	<i-text type="desc">
		120X 变焦/120W秒充/120Hz屏幕
	</i-text>
	<i-text type="price">
		5299元起
	</i-text>
	<i-text type="origin-price">
		5299元起
	</i-text>
 */

const styleMap = {
	title: {
		class: 'base category'
	},
	name: {
		class: 'base name'
	},
	desc: {
		class: 'base desc text-xs'
	},
	price: {
		class: 'base price'
	},
	'origin-price': {
		class: 'base origin-price'
	}
}

export default {
	name: 'Text',
	props: {

		// 文字
		text: {
			type: String,
			default: ''
		},

		// 文字类型：title、name、desc、price、origin-price
		type: {
			type: String,
			default: 'name'
		}
	},

	computed: {
		textClass() {
			let defaulType = 'name';
			let type = (this.type in styleMap) ? this.type : defaulType;
			return styleMap[type].class;
		}
	},
}
</script>

<style lang="postcss" scoped>
.base {
	@apply leading-normal font-normal;
	color: #333;
	font-size: 14px;
}

.category {
	font-size: 22px;
	font-weight: 200;
	line-height: 58px;
}

.desc,
.origin-price {
	color: #b0b0b0;
}

.desc {
	font-size: 12px;
}

.price {
	color: #ff6700;
}

.origin-price {
	/* 删除线 */
	text-decoration: line-through;
}
</style>