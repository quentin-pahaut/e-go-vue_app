<template>
	<section class="section section--illustration">
		<ShapesIllustration :shapes-illu-step="shapesIlluStep"/>
	</section>
</template>

<script>
import ShapesIllustration from '@/components/ui/UiShapesIllustration.vue'

export default {

	Name: 'SectionIllustration',
	//DATA = Variables statiques définies dans le composant
	props:{
		shapesIlluStep:Number,
	},
	components: {
		ShapesIllustration,
	},

	data(){
		return {
			
		}
	},


}
</script>

<style lang="scss" scoped>

</style>