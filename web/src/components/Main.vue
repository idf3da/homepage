<template>
	<v-app id="all">
		<v-app-bar app id="bar" flat> </v-app-bar>

		<v-main id="main">
			<transition appear name="slide-fade">
				<h3 id="prime">Bulanov Motors and Co.</h3>
			</transition>
			<v-container class="mt-16 pt-16">
				<v-row no-gutters>
					<v-col
						v-for="member in members"
						:key="member"
					>
						<Profile
							:chel="member"
							class="pr-8"
						></Profile>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Profile from "./Profile.vue";

export default {
	name: "Main",
	components: {
		Profile,
	},
	data() {
		return {
			members: [
				{
					name: "Dmitry Mac Gregory",
					pic: "gregory.jpg",
				},
				{
					name: "Dmitry Kosenberg",
					pic: "dima.jpg",
				},
				{
					name: "Ilia Desyaichenko",
					pic: "ilia2.jpg",
				},
				{
					name: "Ilya Shabanenko",
					pic: "ilya.jpg",
				},
				{
					name: "Alexandr Bylanoid",
					pic: "sasha.jpg",
				},
			],
		};
	},
	props: {},
	methods: {},
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
	font-size: 120px;
	color: white;
}
.slide-fade-enter-active {
	transition: all 2s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateY(30px);
	opacity: 0;
}
</style>
