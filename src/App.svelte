<script lang="ts">
	import { dateOfBirth } from "./store";
	import BdForm from "./BDForm.svelte";
	import Grid from "./Grid.svelte";
</script>

<main class="app">
	{#if $dateOfBirth}
		<button on:click={dateOfBirth.reset}>Reset date</button>
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
