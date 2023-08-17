<script lang="ts">
	import { page } from '$app/stores';
	import Load from '$lib/components/Load.svelte';
	import type { Serie } from '$lib/components/serie.model';
	import { serieCatalogStore } from '$lib/components/serieCatalog.store';
	import { onMount } from 'svelte';

	let serie: Serie | undefined = undefined;

	onMount(async () => {
		await serieCatalogStore.fetch();
		serie = serieCatalogStore.getSerie(serieId !== null ? serieId : undefined);
	});

	$: serieId = $page.url.searchParams.get('serieId');
	$: loading = serieCatalogStore.loading;
</script>

{#if $loading &&!serie}
	<Load />
{:else}
	<div class="container">
		<h3>Serie: {serie?.SeriesName}</h3>
		<h6>{serie?.Episodes.length} Episodes</h6>
		<div class="back-link">
			<a href={'.'}>Back</a>
		</div>

		<ul class="collapsible">
			{#each serie?.Episodes ?? [] as episode}
				<li>
					<div class="collapsible-header">{episode.EpisodeName}</div>
					<div class="collapsible-body">
						<h6>Overview</h6>
						<div>
							{episode.Overview}
						</div>
						<h6>Director</h6>
						<div>
							{episode.Director ?? '-'}
						</div>
						<h6>Rating</h6>
						<div>
							{episode.Rating}
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	.container {
		padding: 10px 10px;
	}
	.back-link {
		text-align: right;
	}
</style>
