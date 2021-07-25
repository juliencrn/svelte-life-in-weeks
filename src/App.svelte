<script>
	// TODO: Save the date in LS
	// TODO: Then, add a link/button to set another date
	import { dateOfBirth } from "./store";
	import BdForm from "./BDForm.svelte";
	import Grid from "./Grid.svelte";
</script>

<main class="app">
	{#if $dateOfBirth}
		<Grid />
	{:else}
		<BdForm />
	{/if}
</main>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
</style>
