<script lang="ts">
	import { Copyright, EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-svelte";
	import { theme } from '$lib/stores/Design';

</script>

<div class="px-8 py-4
    flex flex-col items-center
    gap-2
    bg-layer-dp1">
    <div class="flex gap-2">
        <Copyright color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'} size="24px" weight="regular" />
        <p>2024 - Zarah Floro. All rights reserved. Philippines.</p>
    </div>
    <div class="flex gap-10">
        <div class="flex gap-2">
            <EnvelopeSimple color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'} size="24px" weight="regular" />
            <p>zbnfloro@gmail.com</p>
        </div>
        <p>|</p>
        <div class="flex gap-2">
            <LinkedinLogo color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'} size="24px" weight="regular" />
            <p>linkedin.com/in/zarah-floro/</p>
        </div>
        <p>|</p>
        <div class="flex gap-2">
            <GithubLogo color={$theme.curr == 'light' ? '#121212' : '#FAFAFA'} size="24px" weight="regular" />
            <p>github.com/florobelle</p>
        </div>
    </div>
</div>