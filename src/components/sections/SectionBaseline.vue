<template>
	<header class="container__header container__header--intro" baseline-phase-1="ended">
		<p class="baseline">
			<span class="baseline__action">
				&nbsp;
				<span class="baseline__el baseline__el--1">I Think</span>
				<span class="baseline__el baseline__el--2">I Measure</span>
				<span class="baseline__el baseline__el--3">I Share</span>
			</span>
			<span class="my-friend-br">
			<span class="txt--large">The Weight</span> of My</span>
		</p>
		<Logo intro/>
	</header>
	<!-- <div class="section section--illu">

	</div> -->
	
</template>

<script>

import Logo from '@/components/ui/UiLogo.vue'

export default {

	Name: 'SectionBaseline',
	//DATA = Variables statiques définies dans le composant

	components: {
		Logo
	},

	data(){
		return {
			intro:true
		}
	},

}
</script>

<style lang="scss" scoped>



.baseline{
	display:block;
	margin: auto 0 4.5vw 0;
	line-height: 1.3;

	&__action{
		overflow: hidden;
		display: block;
		position: relative;
	}
	&__el{
		display: block;
		position:absolute;
		transform: translateY(100%);

		// &--1{

		// }
		// &--2{

		// }
		// &--3{

		// }
	}
}
.logo{
	grid-column: 2;
	height: 24vh;	
}





</style>