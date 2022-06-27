<script>
	import Router from 'svelte-spa-router';
	import Error from './Error.svelte';
	import Home from './Home.svelte';
	
	const routes = {
		'/':Home,
		'/404':Error
	}
</script>

<Router {routes} ></Router>