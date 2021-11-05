<template>
	<div :style="i.style">
		<input
			v-if="i.class === 'input'"
			:title="i.title"
			required
			:class="i.class"
			type="number"
			:name="i.name"
			:placeholder="i.placeholder"
			v-model.number="i.value"
		/>
	</div>
</template>

<script>
import inputNL from './InputL.vue';
import inputNR from './InputR.vue';
export default {
	props: ['i'],
	components: { inputNL, inputNR },
};
</script>

<style></style>
