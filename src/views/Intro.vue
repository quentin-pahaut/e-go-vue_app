<template>
		<SectionBaseline :baselineAnimStep="animationStep"/>
		<main class="container__main container__main--intro">
			<SectionIllustration :shapesIlluStep="animationStep"/>
			<SectionJourney :journeyStep="animationStep"/>
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
			animationStep:1,
			animationEnd:false,
			test:0
		}
	},

	mounted(){
		this.introAnimation()
	},

	watch: {
		'animationEnd':{
			handler:'endAnimationStatus',
			// deep:true
		}
		
	},

	methods: {

		introAnimation(){
			setTimeout (()=>{

				this.animationStep++

				if (this.animationStep < 5 ){
					this.introAnimation()
				}else {
					setTimeout(()=>{
						this.animationEnd = true
					}, 30000)
				}
			}, 4000)
		},

		endAnimationStatus(){
			console.log(this.animationEnd)
			this.$router.push('/participation')
		}

	}
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
