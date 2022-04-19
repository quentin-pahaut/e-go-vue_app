<template>
		<SectionBaseline :baselineAnimStep="AnimationStep"/>
		<main class="container__main container__main--intro">
			<SectionIllustration :shapesIlluStep="AnimationStep"/>
			<SectionJourney :journeyStep="AnimationStep"/>
		</main>
</template>

<script>


import SectionBaseline from '../components/sections/SectionBaseline.vue'
import SectionJourney from '../components/sections/SectionJourney.vue'
import SectionIllustration from '../components/sections/SectionIllustration.vue'

export default {
	name: 'Intro',
	
	components: {
		SectionBaseline,
		SectionJourney,
		SectionIllustration,

	},

	data(){
		return {
			AnimationStep:5,
			AnimationEnd:false

		}
	},

}
</script>

<style lang="scss" scoped>

// .container__header--intro{
// 	&[baseline-phase-1 = "begin"]{
// 		animation: 2s ease-in both whole-baseline-animation ;
// 	}
// 	&[baseline-phase-1 = "ended"]{
// 		animation: 2s ease-out both reverse whole-baseline-animation;
// 	}
// }

</style>
