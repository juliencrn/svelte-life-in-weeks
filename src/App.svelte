<script lang="ts">
	import { dateOfBirth } from "./store";
	import Grid from "./screens/Grid/Grid.svelte";
	import Welcome from "./screens/Welcome/Welcome.svelte";
	import GitCorner from "./components/GitCorner.svelte";
</script>

<main class="flex min-h-full py-4 sm:py-12 px-4 sm:px-8 relative">
	<GitCorner />
	<div class="w-full max-w-3xl m-auto">
		{#if $dateOfBirth}
			<Grid />
		{:else}
			<Welcome />
		{/if}
	</div>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html,
	body {
		@apply font-sans bg-white dark:bg-gray-900;

		margin: 0;
		padding: 0;
	}

	@layer components {
		.link {
			@apply cursor-pointer no-underline;
			@apply font-semibold text-sm;
			@apply cursor-pointer text-green-400 hover:text-green-500;
			@apply cursor-pointer text-green-400 hover:text-green-500;
		}

		.btn {
			@apply py-2 px-4;
			@apply bg-green-400 text-white border-green-400 dark:border-green-400 dark:text-green-400 dark:bg-transparent hover:bg-green-500;
			@apply font-semibold;
			@apply border rounded-md shadow-md;
			@apply text-center;
			@apply focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
		}

		.input {
			@apply focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75;
			@apply block w-full rounded-md border-gray-300 shadow-md;
		}
	}
</style>
