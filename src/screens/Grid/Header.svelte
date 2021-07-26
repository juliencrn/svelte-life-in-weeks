<script>
    export let livedWeeks;
    export let totalWeeks;

    $: weeksLeft = totalWeeks - livedWeeks;
</script>

<h1
    class="text-2xl sm:text-3xl lg:text-4xl leading-none font-extrabold tracking-tight text-gray-900 dark:text-white uppercase italic mt-8 mb-4"
>
    How many weeks have you lived?
</h1>

{#if !!totalWeeks}
    <p class="text">
        The average life span is about <span class="highlight"
            >{totalWeeks}</span
        > weeks.
    </p>
{/if}

{#if !!livedWeeks}
    <p class="text">
        You've lived <span class="highlight">{livedWeeks}</span> weeks.
    </p>
{/if}

{#if !!weeksLeft}
    <p class="text">
        You have <span class="highlight">{weeksLeft}</span> weeks left.
    </p>
{/if}

<style lang="postcss">
    .text {
        @apply text-gray-700 dark:text-gray-300 font-thin;
    }
    .highlight {
        @apply font-bold text-gray-800 dark:text-gray-200;
    }
</style>
