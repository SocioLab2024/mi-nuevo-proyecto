<script>
    let {children} = $props()
    import Header from '$lib/components/header.svelte';
    import Footer from '$lib/components/footer.svelte';

</script>

<header/>
{@render children()}


<footer/>