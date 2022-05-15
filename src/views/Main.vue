<template>
	<sectionHeader />
	<main class="container__main">
		<p>The bike</p>
		<sectionIllustration />
		<sectionNav/>
		<!-- @click.prevent="reRender" -->
	</main>
</template>

<script>

import SectionHeader from '../components/sections/SectionHeader.vue'
import SectionIllustration from '../components/sections/SectionIllustration.vue'
import SectionNav from '../components/sections/SectionNav.vue'

export default {
	name: 'Main',
	
	components: {
		SectionHeader,
		SectionIllustration,
		SectionNav
	},

	data(){
		return {
			
		}
	},

	watch: {
		'currentPart':{
			handler:'reRender',
			deep:true
		}
	},

	methods:{
		reRender(value){
			this.$forceUpdate()
			console.log(value)
		},

	}
}
</script>
 