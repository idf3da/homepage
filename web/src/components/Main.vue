<template>
	<v-app>
		<v-app-bar app id="bar" flat> </v-app-bar>

		<v-main id="main">
			<transition
				appear
				@before-enter="beforeEnter"
				@enter="enter"
				:css="false"
			>
				<h3 id="prime">Bulanov Motors and Co.</h3>
			</transition>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "Main",
	methods: {
		beforeEnter(el) {
			el.style.opacity = 0;

			if (this.translate)
				el.style.transform =
					"translate(" +
					this.translate.join(",") +
					")";
		},
		enter(el) {
			let transitions =
				"opacity " +
				this.duration +
				"ms ease-in-out " +
				this.delay +
				"ms";
			if (this.translate)
				transitions +=
					", transform " +
					this.duration +
					"ms ease-in-out " +
					this.delay +
					"ms";
			el.style.transition = transitions;
			getComputedStyle(el);
			setTimeout(() => {
				el.style.opacity = 1;
				if (this.translate)
					el.style.transform = "initial";
			});
		},
	},
};
</script>

<style scoped>
#all {
}
#bar {
	background: black;
}
#main {
	background: black;
	text-align: center;
}
#prime {
	font-family: "Graphie";
	font-size: 100px;
	color: white;
	transition: opacity 0.5s ease-in-out;
}
</style>
