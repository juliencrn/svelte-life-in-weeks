<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let value = ""; // Format: YYYY-MM-DD

    function handleSubmit() {
        // Basic form validation
        if (!value) {
            alert(`To see your result, please give your date of birth`);
            return false;
        }

        dispatch("message", value);
    }
</script>

<div class="center">
    <h1>Life in weeks</h1>
    <h5>Please set your date for birth</h5>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="date" bind:value />
        <button type="submit">Submit</button>
    </form>
</div>

<style>
    .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
