<script lang="ts">
	import ImgP from './ImgP.svelte';
	import TextP from './TextP.svelte';
	import { ArrowUpRight } from 'phosphor-svelte';
	import { theme } from '$lib/stores/Design';
</script>

<div
	class="p-6
    grow max-w-[480px]
    bg-layer-dp1
    flex gap-6"
>
	<div class="aspect-square">
		<ImgP />
	</div>
	<!-- banner text content -->
	<div class="grow flex flex-col">
		<!-- banner title placeholders and link -->
		<div class="grow flex gap-2">
			<div class="grow">
				{#each { length: 2 } as _}
					<TextP tag="h4" maxWidth="max-w-full" />
				{/each}
			</div>
			<ArrowUpRight
				color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'}
				size="24px"
				weight="regular"
			/>
		</div>
		<!-- banner description placeholders -->
		<!-- <div>
			{#each { length: 2 } as _}
				<TextP tag="p" maxWidth="max-w-full" />
			{/each}
		</div> -->
	</div>
</div>
