<script>
    import { dateOfBirth } from "./store";
    import Checkbox from "./Checkbox.svelte";
    import { weeksBetween, isValidDate } from "./utils";

    // Grid of 90 years splitted in 52 weeks
    const weekCount = 90 * 52;
    const today = new Date();
    const fromDate = new Date($dateOfBirth);
    let weeks = [];
    let pastWeekCount = 0;

    if (isValidDate(fromDate)) {
        pastWeekCount = weeksBetween(fromDate, today);
        weeks = Array.from({ length: weekCount }).map((_, i) => ({
            isPast: i < pastWeekCount,
        }));
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
