<template>
	<base-card size="small">
		<div class="w-full h-full flex">
			<div class="more-container m-auto grid">
				<div class="title">
					{{title}}
				</div>
				<div class="type font-normal">
					{{type}}
				</div>
				<div class="icon">
					<img
						src="~src/assets/more.jpg"
						alt="查看更多"
					>
				</div>
			</div>
		</div>
	</base-card>
</template>

<script>
/**
 * 查看更多卡片
 */

import BaseCard from './base.vue';
import iText from 'src/components/text/index.vue';
export default {
	name: 'ViewMore',
	components: {
		BaseCard,
		iText
	},
	props: {
		title: {
			type: String,
			default: '浏览更多'
		},
		type: {
			type: String,
			default: '热门'
		}
	}
}
</script>

<style lang="postcss" scoped>
.more-container {
	width: 174px;
	height: 48px;

	grid-template-columns: 1fr 48px;
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas:
		"title icon"
		"type icon";
}

.title {
	font-size: 18px;
	color: #333;
}

.type {
	font-size: 12px;
    color: #757575;
}

.icon {
	grid-area: icon;
}
</style>