<template>
	<div id="card">
		<v-row no-gutters>
			<div class="name">{{ chel.name }}</div>
		</v-row>
		<v-row no-gutters>
			<v-col>
				<v-img
					id="
			img"
					aspect-ratio="0.75"
					max-width="20vh"
					:src="chel.pic"
				>
				</v-img>
			</v-col>
			<v-col>{{ chel.bio }}</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	name: "Profile",
	props: ["chel"],
	components: {},
};
</script>

<style>
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
	/* text-transform: uppercase; */
	letter-spacing: 0.1em;

	display: inline-block; /* Dangerous */
	padding: 0.4em 0px;
	position: relative;
	outline: none;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
}

.name:before {
	content: "";
	position: absolute;
	width: 100%;
	height: 1px;
	bottom: 0;
	left: 0;
	background-color: white;
	transform: scaleX(0);
	transition: transform 0.25s ease;
}
.name:hover:before,
.name:focus:before {
	visibility: visible;
	transform: scaleX(1);
}
.name:hover:after {
	width: 100%;
	left: 0;
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
</style>
