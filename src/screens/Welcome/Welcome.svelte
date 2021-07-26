<script lang="ts">
    import Form from "./Form.svelte";
</script>

<div class="root">
    <h1 class="title">Life in weeks</h1>
    <h2 class="subtitle">
        Discover how many weeks you have lived and how many weeks you have left.
    </h2>
    <Form />
</div>

<style lang="postcss">
    .root {
        @apply flex m-auto flex-col align-middle justify-center container;
    }

    .title {
        @apply text-5xl sm:text-6xl lg:text-7xl  text-gray-900 dark:text-white;
        @apply leading-none font-extrabold tracking-tight;
        @apply text-gray-900 dark:text-white;
    }

    .subtitle {
        @apply text-2xl sm:text-3xl font-thin leading-none;
        @apply text-gray-700 dark:text-gray-200;
        @apply mt-5 mb-4;
    }
</style>
