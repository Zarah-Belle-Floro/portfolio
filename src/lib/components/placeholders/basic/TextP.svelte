<script lang="ts">
	export let tag: 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' = 'p';
	export let maxWidth: string = 'max-w-[640px]';

    const tags: {[key: string]: {[key: string]: string}} = {
        h1: {
            height: "h-14",
            padding: 'py-2'
        },
        h2: {
            height: "h-12",
            padding: 'py-2'
        },
        h3: {
            height: "h-9",
            padding: 'py-[0.125rem]'
        },
        h4: {
            height: "h-[1.875rem]",
            padding: 'py-[0.375rem]'
        },
        h5: {
            height: "h-6",
            padding: 'py-1'
        },
        h6: {
            height: "h-5",
            padding: 'py-1'
        },
        p: {
            height: "h-4",
            padding: 'py-1'
        }
    };

    
</script>

<div
	class="{tags[tag].padding}
    {maxWidth}"
>
	<div
		class="
        {tags[tag].height}
        bg-layer-dp3"
	/>
</div>
