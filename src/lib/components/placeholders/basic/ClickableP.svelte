<script lang="ts">
	export let height: string = 'h-4';
	export let maxWidth: string = 'max-w-[640px]';
	export let isPrimary: boolean = false;

	let fontColor: string = isPrimary ? 'text-primary-text' : 'text-layer-dp6';
	let background: string = isPrimary ? 'bg-layer-dp6' : 'bg-primary-text';
</script>

<button
	class="border border-layer-dp6
    grow
    {height} {maxWidth}
    {background}
    {fontColor}"
>
	<slot />
</button>
