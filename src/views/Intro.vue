<template>
		<SectionBaseline />
		<main class="container__main container__main--intro">
			<SectionIllustration />
			<SectionJourney />
		</main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SectionBaseline from '../components/sections/SectionBaseline.vue'
import SectionJourney from '../components/sections/SectionJourney.vue'
import SectionIllustration from '../components/sections/SectionIllustration.vue'

export default {
	name: 'Intro',
		components: {
		SectionBaseline,
		SectionJourney,
		SectionIllustration,

	}

}
</script>

<style lang="scss" scoped>

.container__header--intro{
	&[baseline-phase-1 = "begin"]{
		animation: 2s ease-in both whole-baseline-animation ;
	}
	&[baseline-phase-1 = "ended"]{
		animation: 2s ease-out both reverse whole-baseline-animation;
	}
}

</style>
