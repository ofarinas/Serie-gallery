<script lang="ts">
	export let content: string | undefined = undefined;
	let toggle = false;
</script>

{toggle}
<div>
	{#if toggle}
		{content} <a href="#" on:click={() => (toggle = !toggle)}>less</a>
	{:else}
		<span class="overflow" title={content}>{content} </span><a
			href="#"
			on:click={() => (toggle = !toggle)}>more</a
		>
	{/if}
</div>

<style>
	.overflow {
		width: 300px;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		vertical-align: top;
	}
</style>
