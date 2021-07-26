<script lang="ts">
    export let checked = false;
</script>

<span class={`checkbox ${checked ? "checkbox-checked" : "opacity-30"}`} />

<style lang="postcss">
    .checkbox {
        @apply bg-black dark:bg-green-400;
        @apply relative block;
        @apply rounded-full sm:rounded-sm sm:border-solid;
        @apply border-black dark:border-green-400;

        border-width: 0.25px;
    }

    .checkbox::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .checkbox-checked {
        @apply bg-black dark:bg-green-400;
    }
</style>
