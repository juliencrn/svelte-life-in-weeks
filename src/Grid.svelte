<script>
    import Checkbox from "./Checkbox.svelte";

    export let birthday; //  = new Date(1993, 9, 18);

    // TODO: How throw error is props date is invalid?
    const years = 90;
    const weeksByYear = 52;
    const weekCount = weeksByYear * years;
    const today = new Date();
    const pastWeekCount = weeksBetween(birthday, today);
    const weeks = Array.from({ length: weekCount }).map((_, i) => ({
        isPast: i < pastWeekCount,
    }));

    function weeksBetween(d1, d2) {
        return (d2 - d1) / (7 * 24 * 60 * 60 * 1000);
    }
</script>

<div class="container">
    <ul>
        {#each weeks as week}
            <Checkbox checked={week.isPast} />
        {/each}
    </ul>
</div>

<style>
    .container {
        max-width: 60rem;
        width: 90%;
        margin: auto;
    }
    ul {
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }
</style>
