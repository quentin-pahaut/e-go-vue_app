<template>
	<section class="section section--journey">
		<ul class="journey">
			<li class="journey__el journey__el--counted"><span class="txt--large">I</span> can get&nbsp;on the&nbsp;bike.</li>
			<li class="journey__el journey__el--counted"><span class="txt--large">I</span> can authorise the use of <span class="txt--large">my</span> image.</li>
			<li class="journey__el journey__el--counted"><span class="txt--large">I</span> can do <span class="txt--large">my</span>&nbsp;Selfie.</li>
			<li class="journey__el journey__el--counted"><span class="txt--large">I</span> can pedal to send <span class="txt--large">my</span>&nbsp;selfie.</li>
			<li class="journey__el journey__el--uncounted"><span class="txt--large">I</span> pedal again and again ...</li>
			<li class="journey__el journey__el--counted"><span class="txt--large">I</span> want to get some height</li>
		</ul>
	</section>
</template>

<script>
export default {

	Name: 'SectionJourney',
	//DATA = Variables statiques définies dans le composant
	data(){
		return {
		}
	},

}
</script>

<style lang="scss" scoped>



.journey{


	display:grid;
	grid-template-columns:  1fr 3fr 1fr 3fr 1fr 3fr;
	row-gap: 4.5vw;

		@for $i from 1 through 6 {
			@if $i == 1 or $i == 4 {
				
				& :nth-child(#{$i}){
					grid-column: 2;
				}

			} @else if $i == 2 or $i == 5 {
				
				& :nth-child(#{$i}){
					grid-column: 4;
				}

			} @else {

				& :nth-child(#{$i}){
					grid-column: 6;
				}	
					
			}
				
		}
	overflow: hidden;
	
	&__el{

		transform: translateX(0vw);

		&::marker{
			font-weight: 700;
		}

		&--counted{
			counter-increment: counted-el;
			list-style-type: decimal;
			&:last-child{
				list-style-type: "5. " 
			}
		}

		&--uncounted{
			list-style-type: "... ";
		}
	}
}
</style>