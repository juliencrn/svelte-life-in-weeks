<script>
    import { dateOfBirth } from "../../store";
    import Checkbox from "./Checkbox.svelte";
    import { weeksBetween, isValidDate } from "../../utils/utils";
    import Header from "./Header.svelte";

    // Grid of 88 years splitted in 52 weeks
    const yearsCount = 88;
    const weeksByYears = 52;
    const totalWeeks = yearsCount * weeksByYears;
    const fromDate = new Date($dateOfBirth);

    let livedWeeks = 0;
    let lines = [];

    if (isValidDate(fromDate)) {
        const today = new Date();
        livedWeeks = Math.ceil(weeksBetween(fromDate, today));

        // Create an array of weeks
        const weeks = Array.from({ length: totalWeeks }).map((_, i) => ({
            isPast: i < livedWeeks,
        }));

        // Split weeks array in lines (representing years)
        lines = Array.from({ length: yearsCount }).reduce(
            (prev, _, i) => [
                ...prev,
                weeks.slice(i * weeksByYears, (i + 1) * weeksByYears),
            ],
            []
        );
    } else {
        // There is an error with the date, reset date to redirect.
        dateOfBirth.reset();
    }
</script>

<a href="#" role="button" class="link" on:click={dateOfBirth.reset}>
    « Reset date
</a>

<Header {livedWeeks} {totalWeeks} />

<div class="relative my-4 sm:my-14">
    <small class="label label-weeks hidden sm:block">weeks</small>
    <small class="label label-years hidden sm:block">years</small>
    <ul class="p-0 w-full">
        <!-- x line numbers -->
        <li>
            <ul class="line">
                <small class="label x-line-numbers left-0">0</small>
                {#each Array.from({ length: weeksByYears / 4 }) as _, i}
                    <span class="space" />
                    <li class="cell">
                        <small class="label x-line-numbers right-0"
                            >{i * 4 + 4}</small
                        >
                        <span class="block h-0" />
                    </li>
                {/each}
            </ul>
        </li>

        <!-- Grid -->
        {#each lines as weeks, i}
            <li>
                <ul
                    class={`line ${i !== 0 && (i + 1) % 5 === 0 ? "pb-1" : ""}`}
                >
                    <!-- y line numbers -->
                    {#if i % 5 === 0}
                        <small class={`label y-line-numbers`}>{i}</small>
                    {/if}

                    <!-- Cells -->
                    {#each weeks as week, j}
                        {#if j !== 0 && j % 4 === 0}
                            <span class="space" />
                        {/if}

                        <li class="cell">
                            <Checkbox checked={week.isPast} />
                        </li>
                    {/each}
                </ul>
            </li>
        {/each}
    </ul>
</div>

<style lang="postcss">
    .label {
        @apply text-xs font-sans font-thin tracking-wide top-0 absolute;
        @apply text-gray-700 dark:text-gray-400;
    }

    @media (max-width: 639px) {
        .label {
            display: none;
        }
    }

    .x-line-numbers {
        transform: translateY(-100%);
    }

    .y-line-numbers {
        left: -0.25rem;
        transform: translateX(-100%);
    }

    .label-weeks {
        transform: translateY(-200%);
    }

    .label-years {
        left: 0;
        transform: translateX(-100%) rotate(-90deg);
        transform-origin: 60% 120%;
    }

    .line {
        @apply flex w-full justify-between relative;
    }

    .cell {
        @apply list-none flex-1 block relative;
        padding: 0.667px;
    }

    @media (min-width: 640px) {
        .cell {
            padding: 0.125rem;
        }
    }

    .space {
        width: 1.333px;
        display: inline;
    }

    @media (min-width: 640px) {
        .space {
            width: 2px;
        }
    }
</style>
