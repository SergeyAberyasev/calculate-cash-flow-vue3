import { createStore } from 'vuex';

export default createStore({
	state: {
		inputs_st: [
			{
				name: 'oklad',
				placeholder: 'Оклад',
				value: null,
				class: 'input',
				title: '✅ Фактический оклад. ⚠ Не путать с официальным по договору.',
			},
			{
				name: 'ue',
				placeholder: 'Общее УЕ',
				value: null,
				class: 'input',
				title: '✅ Общее заработанное УЕ для всех цехов.',
			},
			{
				name: 'ue_ceh',
				placeholder: 'Цена одного УЕ для цеха',
				value: null,
				class: 'input',
				title: '✅ Цена одного УЕ для цеха.',
			},
			{
				name: 'days',
				placeholder: 'Кол-во смен в месяце',
				value: null,
				class: 'input',
				title: '✅ Количество смен в расчётном месяце.',
			},
		],
		inputs_mini: [
			{
				name: 'work_people',
				placeholder: 'Кол. человек',
				value: null,
				class: 'input mini_l inline',
				name_: 'my_days',
				placeholder_: 'Кол. смен',
				value_: null,
				class_: 'input mini_r inline',
				title:
					'✅ В данных двух полях необходимо указать число рабочих данного цеха и количество отработанных смен в данном составе. Если количество менялось то нажмите "ДОБАВИТЬ" и укажите дополнительный состав. ПРИМЕР при количестве смен в месяце = 21: {Кол. человек = 5, Кол. смен = 15} [ДОБАВИТЬ] {Кол. человек = 3, Кол. смен = 6}',
			},
		],
		values: {},
		cash: null,
		all_my_days: null,
	},
	mutations: {
		onSubmit(state) {
			let inputs = [...state.inputs_st, ...state.inputs_mini];
			console.log(values);
			let all_my_days = 0;
			let values = state.values;
			let peoples = [];
			let days = [];
			for (let i in inputs) {
				let state_input = inputs[i];

				if (state_input.name === 'ue') {
					values['ue'] = state_input.value;
				}
				if (state_input.name === 'ue_ceh') {
					values['ue_ceh'] = state_input.value;
				}

				if (state_input.name === 'oklad') {
					values['oklad'] = state_input.value;
				}
				if (state_input.name === 'days') {
					values['days'] = state_input.value;
				}
				if (state_input.name === 'work_people') {
					peoples.push(state_input.value);
					values['work_people'] = peoples;
				}
				if (state_input.name_ === 'my_days') {
					days.push(state_input.value_);
					console.log('my_days', days);
					values['my_days'] = days;
				}
			}

			console.log(peoples);
			console.log(days);
			console.log(values);
			let my_ue = null;
			let my_oklad = null;
			for (let key in values.my_days) {
				my_ue +=
					((values.ue * (values.ue_ceh / values.work_people[key])) /
						values.days) *
					values.my_days[key];
				my_oklad += (values.oklad / values.days) * values.my_days[key];
				all_my_days += values.my_days[key];
			}
			state.cash = Math.floor(my_ue + my_oklad);
			state.all_my_days = all_my_days;
			console.log(state.cash);
		},
		add_inputs(state) {
			state.inputs_mini.push({
				name: 'work_people',
				placeholder: 'Кол. человек',
				value: null,
				class: 'input mini_l inline',
				name_: 'my_days',
				placeholder_: 'Кол. смен',
				value_: null,
				class_: 'input mini_r inline',
				title:
					'✅ В данных двух полях необходимо указать число рабочих данного цеха и количество отработанных смен в данном составе. Если количество менялось то нажмите "ДОБАВИТЬ" и укажите дополнительный состав. ПРИМЕР при количестве смен в месяце = 21: {Кол. человек = 5, Кол. смен = 15} [ДОБАВИТЬ] {Кол. человек = 3, Кол. смен = 6}',
			});
		},
		del_inputs(state){
			state.inputs_mini.pop()
		},
		clear(state){
			for(let i in state.inputs_st){
				console.log(i);
				state.inputs_st[i].value = null
			}
			for(let i in state.inputs_mini){
				console.log(i);
				state.inputs_mini[i].value_ = null
				state.inputs_mini[i].value = null
			}
			state.all_my_days = null
			state.cash = null
		}
	},
	actions: {},
	modules: {},
});
