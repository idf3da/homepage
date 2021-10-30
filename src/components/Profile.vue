<template>
	<div id="card">
		<v-col>
			<h4 id="name" class="text-left ml-n3">
				{{ chel.name }}
			</h4>
		</v-col>
		<v-row style="color: white" no-gutters class="mt-2">
			<v-col cols="4" justify="stretch">
				<v-img
					max-height="333px"
					max-width="250px"
					:src="chel.pic"
				></v-img>
			</v-col>
			<v-col cols="7" class="ml-8 mt-2">
				<v-row
					><p id="bio" class="text-justify">
						{{ chel.bio }}
					</p></v-row
				>
				<v-row
					align="end"
					justify="end"
					class="mt-16 pt-6"
				>
					<p id="pos" class="font-italic">
						—{{ chel.pos }}
						<span class="redish"
							>({{ chel.posC }})</span
						>
					</p></v-row
				>
			</v-col>
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
#name {
	color: white;
	font-family: "Space Mono";
	font-size: 20px;
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
</style>
