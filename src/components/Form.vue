<template>
	<div class="contaner">
		<h1 style="color: rgb(81, 68, 68)">
			Калькулятор Заработной Платы <small style="font-size: 25px">✅</small>
		</h1>
		<hr class="hr" />

		<form @submit.prevent="onSubmit">
			<div>
				<button style="background-color: #16c60c" class="btn" type="submit">
					✔ ВЫСЧИТАТЬ
				</button>
			</div>
			<div :key="key" v-for="(i, key) in $store.state.inputs_st">
				<inputN :i="i"></inputN>
			</div>
			<div :key="key" v-for="(i, key) in $store.state.inputs_mini">
				<div>
					<button class="btn" v-if="key > 0" @click="del_inputs">
						❌ УДАЛИТЬ
					</button>
				</div>
				<inputs :i="i"></inputs>
			</div>
			<div>
				<button class="btn" @click="add_inputs">ДОБАВИТЬ</button>
				<button class="btn" @click="clear">ОЧИСТИТЬ</button>
			</div>
		</form>

		<div v-if="$store.state.cash">
			<p style="font-size: 25px">
				✓ Зарплата без вычита налога ➟
				<b style="color: rgb(255, 68, 68)">{{ $store.state.cash }}</b> ₽
			</p>
			<div
				style="background-color: red; padding: 8px"
				v-if="$store.state.all_my_days > $store.state.values.days"
			>
				<h3
					v-if="$store.state.all_my_days > $store.state.values.days"
					style="color: white"
				>
					ОШИБКА!!! Число "отработанных смен" превышает общее кол-во смен.
				</h3>
				<p style="color: rgb(255, 255, 255)">
					✓ Количество отработанных смен ➟
					<b style="color: rgb(255, 255, 255)">{{
						$store.state.all_my_days
					}}</b>
					д.
				</p>
			</div>

			<div
				style="background-color: rgb(255, 243, 20); padding: 8px"
				v-if="$store.state.all_my_days < $store.state.values.days"
			>
				<h3 v-if="$store.state.all_my_days < $store.state.values.days">
					ВНИМАНИЕ!!! Число "отработанных смен" меньше общего кол-ва смен.
				</h3>
				<p>
					✓ Количество отработанных смен ➟
					<b style="color: rgb(255, 68, 68)">{{ $store.state.all_my_days }}</b>
					д.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import inputN from './Input.vue';
import inputs from './Inputs.vue';

export default {
	components: { inputN, inputs },
	methods: {
		onSubmit() {
			this.$store.commit('onSubmit');
		},
		add_inputs() {
			this.$store.commit('add_inputs');
		},
		del_inputs() {
			this.$store.commit('del_inputs');
		},
		clear() {
			this.$store.commit('clear');
		},
	},
};
</script>
