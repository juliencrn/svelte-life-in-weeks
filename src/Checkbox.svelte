<script>
    export let checked = false;
</script>

<li>
    <input type="checkbox" {checked} />
</li>

<style>
    li {
        width: calc(100% / 52);
        list-style: none;
    }
</style>
