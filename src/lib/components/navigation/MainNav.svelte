<script lang="ts">
	import { ArrowLeft, ArrowRight, House, HouseSimple } from 'phosphor-svelte';
	import { theme } from '$lib/stores/Design';
	import ClickableP from '../placeholders/basic/ClickableP.svelte';
</script>

<div class="px-8 py-2
    flex flex-col
    gap-2
    bg-layer-dp1">
	<!-- page title -->
	<div class="flex
        justify-center items-center
        gap-2">
		<HouseSimple color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'} size="24px" weight="regular" />
		<p>Home Page</p>
	</div>
	<!-- navigation bar -->
	<div class="flex
    items-center
    gap-2">
        <!-- buttons -->
        <div class="flex shrink-none
        gap-2">
            <ArrowLeft color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'} size="24px" weight="regular" />
            <ArrowRight color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'} size="24px" weight="regular" />
            <House color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'} size="24px" weight="regular" />
        </div>
        <!-- dropdown links -->
        <div class="px-2 py-1
        grow
        bg-background">
            <p>/homepage</p>
        </div>
        <!-- theme selector -->
        <ClickableP height="h-8" maxWidth="max-w-28" isPrimary={true}/>
	</div>
</div>
