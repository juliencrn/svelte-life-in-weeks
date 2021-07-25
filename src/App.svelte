<script>
	import BdForm from "./BDForm.svelte";
	import Grid from "./Grid.svelte";

	// TODO: Save the date in LS
	// TODO: Then, add a link/button to set another date
	let birthday = null;

	function getBirthday(event) {
		birthday = new Date(event.detail);
	}
</script>

<main class="app">
	{#if birthday}
		<Grid {birthday} />
	{:else}
		<BdForm on:message={getBirthday} />
	{/if}
</main>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
</style>
