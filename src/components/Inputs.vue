<template>
	<input
		:style="i.style"
		:cl="i.class"
		:title="i.title"
		required
		:class="i.class"
		type="number"
		:name="i.name"
		:placeholder="i.placeholder"
		v-model.number="i.value"
	/>
	<input
		:style="i.style_"
		:title="i.title"
		required
		:class="i.class_"
		type="number"
		:name="i.name_"
		:placeholder="i.placeholder_"
		v-model.number="i.value_"
	/>
</template>

<script>
export default {
	props: ['i'],
};
</script>

<style></style>
