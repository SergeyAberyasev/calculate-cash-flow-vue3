import { createStore } from 'vuex';

export default createStore({
	state: {
		inputs: [
			{
				name: 'oklad',
				placeholder: 'Оклад',
				value: null,
				class: 'input',
				style: 'display: block',
				title: '✅ Фактический оклад. ⚠ Не путать с официальным по договору.',
			},
			{
				name: 'ue',
				placeholder: 'Общее УЕ',
				value: null,
				class: 'input',
				style: 'display: block',
				title: '✅ Общее заработанное УЕ для всех цехов.',
			},
			{
				name: 'ue_ceh',
				placeholder: 'Цена одного УЕ для цеха',
				value: null,
				class: 'input',
				style: 'display: block',
				title: '✅ Цена одного УЕ для цеха.',
			},
			{
				name: 'days',
				placeholder: 'Кол-во смен в месяце',
				value: null,
				class: 'input',
				style: 'display: block',
				title: '✅ Количество смен в расчётном месяце.',
			},
			{
				name: 'work_people',
				placeholder: 'Кол. человек',
				value: null,
				class: 'input mini_l inline',
				style: 'display: inline-block',
				title:
					'✅ В данных двух полях необходимо указать число рабочих данного цеха и количество отработанных смен в данном составе. Если количество менялось то нажмите "ДОБАВИТЬ" и укажите дополнительный состав. ПРИМЕР при количестве смен в месяце = 21: {Кол. человек = 5, Кол. смен = 15} [+ДОБАВИТЬ] {Кол. человек = 3, Кол. смен = 6}',
			},
			{
				name: 'my_days',
				placeholder: 'Кол. смен',
				value: null,
				class: 'input mini_r inline',
				style: 'display: inline-block',
				title:
					'✅ В данных двух полях необходимо указать число рабочих данного цеха и количество отработанных смен в данном составе. Если количество менялось то нажмите "ДОБАВИТЬ" и укажите дополнительный состав. ПРИМЕР при количестве смен в месяце = 21: {Кол. человек = 5, Кол. смен = 15} [+ДОБАВИТЬ] {Кол. человек = 3, Кол. смен = 6}',
			},
		],
		values: {},
		cash: null,
		all_my_days: null,
	},
	mutations: {
		onSubmit(state) {
			let all_my_days = 0;
			let values = state.values;
			let peoples = [];
			let days = [];
			for (let i in state.inputs) {
				let state_input = state.inputs[i];
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
					values.work_people = peoples;
				}
				if (state_input.name === 'my_days') {
					days.push(state_input.value);
					values['my_days'] = days;
				}
			}
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
		},
		add_inputs(state) {
			state.inputs.push({
				name: 'work_people',
				placeholder: 'Кол. человек',
				value: null,
				class: 'input mini_l inline',
				style: 'display: inline-block',
				title:
					'✅ В данных двух полях необходимо указать число рабочих данного цеха и количество отработанных смен в данном составе. Если количество менялось то нажмите "ДОБАВИТЬ" и укажите дополнительный состав. ПРИМЕР при количестве смен в месяце = 21: {Кол. человек = 5, Кол. смен = 15} [+ДОБАВИТЬ] {Кол. человек = 3, Кол. смен = 6}',
			});
			state.inputs.push({
				name: 'my_days',
				placeholder: 'Кол. смен',
				value: null,
				class: 'input mini_r inline',
				style: 'display: inline-block',
				title:
					'✅ В данных двух полях необходимо указать число рабочих данного цеха и количество отработанных смен в данном составе. Если количество менялось то нажмите "ДОБАВИТЬ" и укажите дополнительный состав. ПРИМЕР при количестве смен в месяце = 21: {Кол. человек = 5, Кол. смен = 15} [+ДОБАВИТЬ] {Кол. человек = 3, Кол. смен = 6}',
			});
		},
	},
	actions: {},
	modules: {},
});
