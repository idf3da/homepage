<template>
	<v-app id="all">
		<v-app-bar app id="bar" flat> </v-app-bar>

		<v-main id="main" class="">
			<v-responsive min-height="900px" justify="center">
				<v-col cols="11" class="ml-n16">
					<v-row justify="end" class="mb-16">
						<transition appear name="prime">
							<h3
								id="prime"
								class="mb-n16"
							>
								Bulanov Motors
							</h3>
						</transition>
						<transition
							appear
							name="prime-co"
						>
							<h3
								id="prime-co"
								class="text-end"
							>
								and Co.
							</h3>
						</transition>
					</v-row>

					<v-row class="pt-16">
						<v-col cols="2"></v-col>
						<v-col class="ml-n8">
							<transition
								appear
								name="sub"
							>
								<vue-typed-js
									:strings="
										we_are
									"
									:loop="
										true
									"
									:typeSpeed="
										100
									"
									:startDelay="
										delays.typing
									"
									:backSpeed="
										75
									"
									:smartBackspace="
										true
									"
									:backDelay="
										1000
									"
								>
									<h1
										id="sub"
									>
										>
										We
										are
										<span
											id="sub-a"
											class="
												typing
											"
										></span>
									</h1>
								</vue-typed-js>
							</transition>
						</v-col>
					</v-row>
				</v-col>
			</v-responsive>

			<v-container class="mt-10 pt-0 mr-5">
				<v-row no-gutters justify="center">
					<v-col
						v-for="(
							member, index
						) in members"
						:key="member"
						md="4"
					>
						<transition
							appear
							name="profile-cards"
						>
							<Profile
								:style="`--delay: ${
									delays.prime +
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
			delays: {
				prime: 2500,
				typing: 3750,
			},
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
			we_are: [
				"Team",
				"Partners",
				"Сщььгтшен ой"
				"Community",
				"Friends",
				"Team",
				"Partners",
				"Community",
				"Friends",
				"Team",
				"Partners",
				"Community",
				"Friends",
				"Team",
				"Partners",
				"Community",
				"Friends",
				"Team",
				"Partners",
				"Community",
				"Friends",
				"Team",
				"Partners",
				"Community",
				"Friends",
				"Team",
				"Partners",
				"Community",
				"Friends",
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
	font-size: 200px;
	color: white;
}
#prime-co {
	font-family: "Graphie";
	font-size: 100px;
	color: white;
}
#sub {
	font-family: "MavenPro Regular";
	font-size: 65px;
	color: white;
}
#sub-a {
	font-family: "MavenPro Medium";
	font-size: 65px;
	color: #ea0f1e;
}
.Profile {
	color: blue;
}

.prime-enter-active {
	transition: all 1.8s ease;
	transition-delay: 1s;
}
.prime-enter,
.prime-leave-to {
	transform: translateY(40px);
	opacity: 0;
}

.prime-co-enter-active {
	transition: all 1.8s ease;
	transition-delay: 2s;
}
.prime-co-enter,
.prime-co-leave-to {
	opacity: 0;
}

.sub-enter-active {
	transition: all 1s ease;
	transition-delay: 2.5s;
}
.sub-enter,
.sub-leave-to {
	/* transform: translateX(-15px); */
	opacity: 0;
}

.profile-cards-enter-active {
	transition: all 1.2s ease;
	transition-delay: var(--delay);
}

.profile-cards-enter,
.profile-cards-leave-to {
	transform: translateX(-13px);
	opacity: 0;
}
</style>

