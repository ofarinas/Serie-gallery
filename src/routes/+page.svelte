<script lang="ts">
	import Load from '$lib/components/Load.svelte';
	import { serieCatalogStore } from '$lib/components/serieCatalog.store';
	import { onMount } from 'svelte';

	onMount(async () => {
		await serieCatalogStore.fetch();
	});

	$: loading = serieCatalogStore.loading;
</script>

<h3>Welcome to The Series Catalog</h3>
{#if $loading}
	<Load />
{:else}
	<div class="flex">
		{#each $serieCatalogStore as serie}
			<div class="card horizontal flex-item">
				<div class="card-image" />
				<div class="card-stacked">
					<div class="card-content">
						<div>
							<strong>id:</strong>
							{serie.id}
						</div>
						<div>
							<strong>SeriesName:</strong>
							{serie.SeriesName}
						</div>
						<div>
							<strong>Actors:</strong>
							<span title={serie.Actors} class="overflow">{serie.Actors}</span>
						</div>
						<div>
							<strong>Overview:</strong>
							<span class="overflow" title={serie.Overview}>{serie.Overview}</span>
						</div>
					</div>
					<div class="card-action">
						<a href={`./serie?serieId=${serie.id}`}>episodes</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}

<style>
	.flex {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 10px;
		justify-content: center; /* Center horizontally */
		align-items: center;
	}
	.flex-item {
		flex-basis: 300px;
		box-sizing: border-box;
	}
	h3 {
		text-align: center;
	}
	.long-text {
		width: 100px;
	}
	.overflow {
		width: 300px;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		vertical-align: top;
	}
</style>
