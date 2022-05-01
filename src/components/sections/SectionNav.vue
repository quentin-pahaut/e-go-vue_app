<template>
	<section class="section section--nav">
		<nav class="nav">
			<ul class="nav__list">
				<li class="nav__el"><backButton :available="buttonStatus"/></li>
				<li class="nav__el"><nextButton :available="buttonStatus"/></li>
			</ul>
			<!-- <button class="nav__el"></button> -->
			
		</nav>
	</section>
</template>

<script>

import backButton from '@/components/ui/UiBackButton.vue'
import nextButton from '@/components/ui/UiNextButton.vue'

export default {

	Name: 'SectionNav',
	//DATA = Variables statiques définies dans le composant
	components:{
		backButton,
		nextButton
	},
	data(){
		return {
			buttonStatus:true,
		}
	},

}
</script>

<style lang="scss" scoped>

.section--nav{
	margin : 4.5vw 4.5vw 4.5vw 4.5vw;
}
.nav{

	&__list{
		display:grid;
		grid-template-columns: repeat(4, 3fr);
		column-gap: 4.5vw;
	}

	&__el{
		position:relative;
		z-index: 10;
		width:100%;
		height: 0;
		padding-bottom:100%;

		box-sizing: border-box;


		border: solid 1px $color-first;

		&:first-child{
			grid-column: 1;
		}

		&:last-child{
		grid-column: 4;
		}
	}
}

</style>