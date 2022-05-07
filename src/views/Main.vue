<template>
	<sectionHeader :currentPart="part"/>
	<main class="container__main">
			<p>The bike</p>
			<sectionIllustration :currentPart="part"/>
		<sectionNav />
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
			part:"get-on"
		}
	}
}
</script>
 