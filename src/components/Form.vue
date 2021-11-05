<template>
	<div>
		<h1 style="color: rgb(81, 68, 68); ">Calculate Cash Flow ✅</h1>
		<hr class="hr" />
		<button class="btn" @click="add_inputs"><b>+ ДОБАВИТЬ</b></button>
		<form @submit.prevent="onSubmit">
			<div :style="i.style" :key="key" v-for="(i, key) in $store.state.inputs">
				<inputN :i="i"></inputN>
				<inputNL :i="i"></inputNL>
				<inputNR :i="i"></inputNR>
			</div>

			<div>
				<button class="btn" type="submit">✔ ВЫСЧИТАТЬ</button>
			</div>
		</form>

		<div v-if="$store.state.cash">
			<p>
				✓ Зарплата без вычита налога ➟ <b>{{ $store.state.cash }}</b> ₽
			</p>
			<p>
				✓ Количество отработанных смен ➟
				<b>{{ $store.state.all_my_days }}</b> дней
			</p>
		</div>
	</div>
</template>

<script>
import inputN from './Input.vue';
import inputNL from './InputL.vue';
import inputNR from './InputR.vue';

export default {
	components: { inputN, inputNL, inputNR },
	computeds: {},
	methods: {
		onSubmit() {
			this.$store.commit('onSubmit');
		},
		add_inputs() {
			this.$store.commit('add_inputs');
		},
	},
};
</script>
