<template>
	<div :style="i.style" v-if="i.class === 'input mini_l inline'">
		<input
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
	
export default {
	props: ['i'],

};
</script>

<style></style>
