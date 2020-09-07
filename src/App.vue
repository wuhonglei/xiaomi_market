<template>
	<div class="container h-full m-auto flex">
		<div class="mx-auto">
			<!-- <single-card-layout :data="singleData"></single-card-layout> -->
			<double-card-layout :data="doubleData"></double-card-layout>
		</div>
	</div>
</template>

<script>
import SingleCardLayout from './components/layout/single.vue';
import DoubleCardLayout from './components/layout/double.vue';
import { ref } from "vue";
export default {
	name: 'Root',
	components: {
		SingleCardLayout,
		DoubleCardLayout
	},
	setup() {
		const singleData = ref({
			poster: {
				src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2086b7f5e042e5d5ed886ad96f4950b.jpg?thumb=1&w=234&h=300&f=webp&q=90'
			},
			goods: [{
				src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
				name: 'Redmi 红米电视 70英寸',
				desc: '70英寸震撼巨屏，4K画质，细腻如真',
				price: '3299元',
				originPrice: '3799元'
			}, {
				src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90',
				name: '小米全面屏电视E32C',
				desc: '全面屏设计，人工智能系统',
				price: '899元'
			}, {
				src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90',
				name: '小米全面屏电视E55A',
				desc: '全面屏设计，人工智能语音',
				price: '1999元',
			}, {
				src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
				name: '米家空调',
				desc: '出众静音，快速制冷热',
				price: '1499元',
				originPrice: '1799元'
			}]
		});

		const doubleData = ref({
			poster: {
				src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=468&h=1228&f=webp&q=90'
			},
			goods: [{
				src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
				name: 'Redmi 红米电视 70英寸',
				desc: '70英寸震撼巨屏，4K画质，细腻如真',
				price: '3299元',
				originPrice: '3799元'
			}, {
				src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90',
				name: '小米全面屏电视E32C',
				desc: '全面屏设计，人工智能系统',
				price: '899元'
			}, {
				src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90',
				name: '小米全面屏电视E55A',
				desc: '全面屏设计，人工智能语音',
				price: '1999元',
			}, {
				src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
				name: '米家空调',
				desc: '出众静音，快速制冷热',
				price: '1499元',
				originPrice: '1799元'
			}, {
				src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
				name: '米家空调',
				desc: '出众静音，快速制冷热',
				price: '1499元',
				originPrice: '1799元'
			}, {
				src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
				name: '米家空调',
				desc: '出众静音，快速制冷热',
				price: '1499元',
				originPrice: '1799元'
			}, {
				src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200',
				name: '米家空调',
				desc: '出众静音，快速制冷热',
				price: '1499元',
				originPrice: '1799元'
			}]
		});

		return {
			singleData,
			doubleData
		}
	},
};
</script>

<style lang="postcss" scoped>
</style>
