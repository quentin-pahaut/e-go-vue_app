<template>
	<header class="section section--header">
		<ul class="step-list step-list--name">
			<li class="step-list__el step-list__el--name">I can Get</li>
			<li class="step-list__el step-list__el--name">I authorise</li>
			<li class="step-list__el step-list__el--name">I can Make</li>
			<li class="step-list__el step-list__el--name">I can Pedal</li>
			<li class="step-list__el step-list__el--name">I've gone high</li>
		</ul>
		<Logo />
		<ul class="step-list step-list--number">
			<li class="step-list__el step-list__el--number">One</li>
			<li class="step-list__el step-list__el--number">Two</li>
			<li class="step-list__el step-list__el--number">Three</li>
			<li class="step-list__el step-list__el--number">Four</li>
			<li class="step-list__el step-list__el--number">Five</li>
		</ul>
	</header>
</template>

<script>

import Logo from '@/components/ui/UiLogo.vue'

export default {

	Name: 'SectionHeader',
	//DATA = Variables statiques définies dans le composant

	components:{
		Logo,
	},

	data(){
		return {
		}
	},

}
</script>

<style lang="scss" scoped>
.logo{
	grid-column: 2;
}

.section--header{
	display: grid;
	grid-template-columns: 6fr 3fr 3fr;
	margin : 4.5vw 4.5vw 0 4.5vw;
}

.step-list{
	&--name{
		grid-column: 1;
	}
	&--number{
		grid-column: 3;
	}
	&__el{
		font-size: 4.8vw;
		font-weight: 700;
		color: $color-first--offset;
		&--number{
			text-align: right;		
		}
	}
}


</style>