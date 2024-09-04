<script lang="ts">
	import Footer from '$lib/components/navigation/Footer.svelte';
	import MainNav from '$lib/components/navigation/MainNav.svelte';
	import BannerP from '$lib/components/placeholders/basic/BannerP.svelte';
	import ImgP from '$lib/components/placeholders/basic/ImgP.svelte';
	import TextP from '$lib/components/placeholders/basic/TextP.svelte';
	import BlogCardP from '$lib/components/placeholders/blog/BlogCardP.svelte';

	const pagePadding: string = 'p-20';
	const sectionHeight: string = 'min-h-dvh';
</script>

<!-- notes -->
<!-- sections have px-20 -->

<main class="">
	<!-- hero -->
	<div
		class="
        {sectionHeight}
        flex flex-col"
	>
		<!-- navigation bar -->
		<MainNav />
		<!-- content -->
		<section
			class="{pagePadding}
            grow
            flex justify-around items-center"
		>
			<!-- text -->
			<div class="w-fit">
				<h1>Hi!</h1>
				<h2>Welcome to my portfolio.</h2>
				<!-- subtitle placeholders -->
				<div
					class="
                flex flex-col"
				>
					{#each { length: 3 } as _}
						<TextP tag="p" maxWidth="max-w-[640px]" />
					{/each}
				</div>
			</div>
			<!-- image -->
			<div class="grow max-w-96 min-w-60 aspect-square">
				<ImgP />
			</div>
		</section>
	</div>

	<!-- projects -->
	<section
		class="{pagePadding}
        {sectionHeight}
        bg-layer-dp1
        flex flex-col justify-center items-center gap-10"
	>
		<div>
			<h1>Projects</h1>
		</div>
		<div
			class="w-full
            flex justify-between"
		>
			{#each { length: 3 } as _}
				<BlogCardP />
			{/each}
		</div>
	</section>

	<!-- design system -->
	<section
		class="{pagePadding}
        {sectionHeight}
        flex flex-col justify-center items-center gap-10"
	>
		<div>
			<h1>Design System & Conventions</h1>
		</div>
		<div
			class="w-full
            grid grid-cols-3 gap-20"
		>
			{#each { length: 3 } as _}
				<BannerP />
			{/each}
		</div>
	</section>

	<Footer />
</main>
