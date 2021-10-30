<template>
	<v-app id="all">
		<v-app-bar app id="bar" flat> </v-app-bar>

		<v-main id="main" class="mt-n11">
			<transition appear name="slide-fade">
				<h3 id="prime" class="mt-n16">
					Bulanov Motors and Co.
				</h3>
			</transition>

			<v-container class="mt-10 pt-0 mr-6">
				<v-row no-gutters justify="center">
					<v-col
						v-for="(
							member, index
						) in members"
						:key="member"
						md="4"
					>
						<transition appear name="fade">
							<Profile
								:style="`--delay: ${
									2500 +
									275 *
										index
								}ms`"
								:chel="member"
								class="
									pr-8
									ml-n3
									mb-12
								"
							></Profile>
						</transition>
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
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief brand officer (CBO)",
				},
				{
					name: "Dmitry Kosenberg",
					pic: "dima.jpg",
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief administrative officer (CAO)",
				},
				{
					name: "Ilia Desyaichenko",
					pic: "ilia2.jpg",
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief technology officer (CTO)",
				},
				{
					name: "Ilya Shabanenko",
					pic: "ilya.jpg",
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief data officer (CDO)",
				},
				{
					name: "Alexandr Bylanoid",
					pic: "sasha.jpg",
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief executive officer (CEO)",
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
.Profile {
	color: blue;
}
.slide-fade-enter-active {
	transition: all 1.8s ease;
	transition-delay: 1s;
}

.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateY(40px);
	opacity: 0;
}
.fade-enter-active {
	transition: all 1.2s ease;
	transition-delay: var(--delay);
}

.fade-enter,
.fade-leave-to {
	transform: translateX(-13px);
	opacity: 0;
}
</style>

