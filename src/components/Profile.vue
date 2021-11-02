<template>
	<div id="card">
		<v-row no-gutters>
			<div
				class="name glitch"
				:data-text="chel.name"
			>{{ chel.name }}</div>
		</v-row>
		<v-row no-gutters>
			<v-col cols="4">
				<v-img
					id="
			img"
					aspect-ratio="0.75"
					max-width="20vh"
					:src="chel.pic"
				>
				</v-img>
			</v-col>
			<v-col
				no-gutters
				class="text-left ml-2"
			>
				<v-row
					no-gutters
					class="text-justify"
				>
					{{ chel.bio }}
				</v-row>
				<v-row
					no-gutters
					align="end"
					justify="end"
				>

				</v-row>

			</v-col>

		</v-row>
		<p
			id="pos"
			class="font-italic text-right"
		>
			—{{ chel.pos }}
			<span class="redish">({{ chel.posC }})</span>
		</p>
	</div>
</template>

<script>
export default {
	name: "Profile",
	props: ["chel"],
	components: {},
};
</script>

<style lang="scss">
* {
	/* outline: 1px solid cyan; */
}
#card {
	color: white;
}
.name {
	color: white;
	font-family: "Space Mono";
	font-size: 20px;
	letter-spacing: 0.05em;
	display: inline-block; /* Dangerous */
	padding: 0.4em 0px;
}

#bio {
	font-family: "Graphik";
	font-size: 14px;
}
#pos {
}

.redish {
	color: #ea0f1e;
	background: black;
}
#v-img {
	margin: 100, 100, 100, 100;
}

.glitch {
	position: relative;
	white-space: nowrap;
}
@keyframes noise-anim {
	$steps: 25;
	@for $i from 0 through $steps {
		#{percentage($i*(1/$steps))} {
			clip: rect(
				random(100) + px,
				9999px,
				random(100) + px,
				0
			);
		}
	}
}
.glitch:hover:after {
	content: attr(data-text);
	position: absolute;
	left: 1px;
	text-shadow: -1px 0 red;
	top: 0;
	padding-top: 10px;
	color: white;
	overflow: visible;
	clip: rect(0, 900px, 0, 0);
	animation: noise-anim 0.85s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
	$steps: 25;
	@for $i from 0 through $steps {
		#{percentage($i*(1/$steps))} {
			clip: rect(
				random(100) + px,
				9999px,
				random(100) + px,
				0
			);
		}
	}
}
.glitch:hover:before {
	content: attr(data-text);
	position: absolute;
	left: -2px;
	text-shadow: 1px 0 blue;
	top: 0;
	color: white;
	background: black;
	overflow: visible;
	clip: rect(0, 900px, 0, 0);
	animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>
