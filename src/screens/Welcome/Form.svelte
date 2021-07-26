<script>
    import { dateOfBirth } from "../../store";
    import { isValidDate } from "../../utils/utils";

    let value = ""; // Format: YYYY-MM-DD

    $: disabled = !isValidDate(new Date(value));

    function handleSubmit() {
        // Basic form validation
        if (!value) {
            alert(`To see your result, please give your date of birth`);
            return false;
        }

        dateOfBirth.set(value);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="date" class="text-xs text-grey-700 dark:text-gray-300">
        Enter your birthdate
    </label>
    <input
        type="date"
        name="date"
        bind:value
        class="input my-1"
        placeholder="Enter your birthdate"
    />

    {#if !disabled}
        <button type="submit" class="btn mt-3 w-full sm:w-auto">
            Let's go it
        </button>
    {/if}
</form>
