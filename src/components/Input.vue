<template>
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
</template>

<script>

export default {
	props: ['i'],
};
</script>

<style></style>
