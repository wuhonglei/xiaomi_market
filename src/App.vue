<template>
	<div class="App p-1 h-full">
		<mi-card></mi-card>
	</div>
</template>

<script>
import MiCard from "./components/Card.vue";
export default {
	components: {
		MiCard,
	},
	data() {
		let name;
		return {
			message: "Learn Vue",
		};
	},
};
</script>

<style>
.App {
	text-align: center;
}
.App-header {
	background-color: #f9f6f6;
	color: #32485f;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
}
.App-link {
	color: #00c185;
}
.App-logo {
	height: 40vmin;
	pointer-events: none;
	margin-bottom: 1rem;
	animation: App-logo-spin infinite 1.6s ease-in-out alternate;
}
@keyframes App-logo-spin {
	from {
		transform: scale(1);
	}
	to {
		transform: scale(1.06);
	}
}
</style>
