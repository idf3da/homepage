<template>
	<v-app id="all">
		<v-app-bar
			app
			id="bar"
			flat
		>
			<transition
				appear
				name="bar"
			>
				<v-row class="d-flex justify-end text-center">
					<v-card
						flat
						class="transparent ma-3 mr-4"
						id="bar-text"
					>Contact</v-card>
					<v-card
						flat
						class="transparent ma-3 mr-4"
						id="bar-text"
					>RU | <span class="grey--text">EN</span></v-card>

					<v-card></v-card>
				</v-row>
			</transition>
		</v-app-bar>

		<v-main
			id="main"
			class
		>
			<v-responsive
				min-height="100vh"
				id="prime"
			>
				<v-row
					justify="center"
					class="mt-0"
				>
					<div>

						<transition
							appear
							name="prime"
						>

							<div>Bulanov Motors
								<transition
									appear
									name="prime-co"
								>
									<h3
										id="prime-co"
										class="text-right"
									>
										and Co<span class="redish">.</span>
									</h3>
								</transition>
								<transition
									appear
									name="sub"
								>
									<vue-typed-js
										:strings="we_are"
										:loop="
										true
									"
										:typeSpeed="
										75
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
										<h1 id="sub">
											>
											We
											are
											<span
												id="sub-a"
												class="typing"
											></span>
										</h1>
									</vue-typed-js>
								</transition>
							</div>

						</transition>

					</div>
				</v-row>

			</v-responsive>

			<v-container>
				<v-row
					no-gutters
					justify="center"
				>
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
					pos: "Chief brand officer",
					posC: "CBO",
				},
				{
					name: "Alexandr Bylanoid",
					pic: "sasha2.jpg",
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief executive officer",
					posC: "CEO",
				},
				{
					name: "Dmitry Kosenberg",
					pic: "dima_mono.jpg",
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief administrative officer",
					posC: "CAO",
				},
				{
					name: "Ilia Desyaichenko",
					pic: "ilia_mono.jpg",
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief technology officer",
					posC: "CTO",
				},
				{
					name: "Ilya Shabanenko",
					pic: "ilya2.jpg",
					bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
					pos: "Chief data officer",
					posC: "CDO",
				},
			],
			we_are: [
				"Team",
				"Partners",
				"Сщььгтшен ой",
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
* {
	/* outline: 1px dotted cyan; */
}

#bar {
	background: black;
	color: white;
}
#main {
	background: black;
	text-align: center;
}
#prime {
	font-family: "Graphie";
	line-height: 0.9;
	color: white;
	font-size: 12vw;
}
#sub {
	font-family: "Helvetica-Light Light";
	font-size: 0.23em;
	margin-top: 30vh;
	color: white;
}
#sub-a {
	font-family: "Helvetica";
	font-size: 1em;
	color: #ea0f1e;
}

#prime-co {
	font-family: "Graphie";
	line-height: 1;
	color: white;
	font-size: 0.5em;
}
#bar-text {
	color: white;
	font-size: 1.6vh;
}
.redish {
	color: #ea0f1e;
	background: black;
}
.transparent {
	background-color: transparent !important;
	border-color: transparent !important;
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
.bar-enter-active {
	transition: all 0.65s ease;
	transition-delay: 2.5s;
}
.bar-enter,
.bar-leave-to {
	transform: translateY(-30px);
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

@media screen and (max-width: 1200px) {
	#sub {
		font-size: 0.4em;
		margin-top: 40vh;
	}
}
@media screen and (max-width: 600px) {
	#sub {
		font-size: 0.55em;
		margin-top: 65vh;
	}
}
</style>

