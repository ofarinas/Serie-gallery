<script lang="ts">
	import { loadSerieCatalog } from '$lib/load/loadData.model';
	import * as fastXmlParser from 'fast-xml-parser';
	import { onMount } from 'svelte';

	onMount(async () => {
		loadSerieCatalog();
	});
</script>

<h1>Welcome to SvelteKit</h1>

<!-- eslint-disable-next-line jsx-a11y/anchor-is-valid -->
<a class="waves-effect waves-light btn">button</a>
