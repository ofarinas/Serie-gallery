<script lang="ts">
	export let error: boolean;
	export let loading: boolean;
</script>

{#if loading}
	<div class="flex">
		<div class="preloader-wrapper big active">
			<div class="spinner-layer spinner-blue-only">
				<div class="circle-clipper left">
					<div class="circle" />
				</div>
			</div>
		</div>
	</div>
{:else if error}
	<div class="flex">
		<h4>An error has occurred. Please try again later or contact support for assistance.</h4>
	</div>
{:else}
	<slot />
{/if}

<style>
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h4 {
		color: red;
	}
</style>
