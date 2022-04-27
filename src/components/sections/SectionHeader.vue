<template>
	<header class="section section--header">
		<ul>
			<li>I can Get</li>
			<li>I authorise</li>
			<li>I can Make</li>
			<li>I can Pedal</li>
			<li>I've gone high</li>
		</ul>
		<Logo />
		<ul>
			<li>One</li>
			<li>Two</li>
			<li>Three</li>
			<li>Four</li>
			<li>Five</li>
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

</style>