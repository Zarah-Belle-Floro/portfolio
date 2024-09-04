<script lang="ts">
	import { ArrowUpRight } from 'phosphor-svelte';
	import ImgP from '../basic/ImgP.svelte';
	import TextP from '../basic/TextP.svelte';
	import { theme } from '$lib/stores/Design';
	import ClickableP from '../basic/ClickableP.svelte';
</script>

<div class="grow max-w-96">
    <div class="aspect-square">
        <ImgP />
    </div>
	<!-- blog title placeholders and link -->
	<div
		class="pt-4
        flex gap-2"
	>
		<div class="grow">
			{#each { length: 2 } as _}
				<TextP tag="h4" maxWidth="max-w-[400px]" />
			{/each}
		</div>
		<ArrowUpRight
			color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'}
			size="24px"
			weight="regular"
		/>
	</div>
	<!-- blog description placeholders -->
	<div
		class="
        flex flex-col"
	>
		{#each { length: 3 } as _}
			<TextP tag="p" maxWidth="max-w-[400px]" />
		{/each}
	</div>
	<!-- tags -->
	<div class="pt-4
        flex gap-2">
        {#each { length: 3 } as _}
            <ClickableP height="h-4" maxWidth="max-w-16" isPrimary={true}/>
		{/each}
    </div>
</div>
