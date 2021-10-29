<template>
	<v-main>
		<Main />
	</v-main>
</template>

<script>
import Main from "./components/Main.vue";

export default {
	name: "App",
	components: {
		Main,
	},
};
</script>

<style>
@font-face {
	font-family: "Graphie";
	src: local("Graphie"), url("./fonts/Graphie W01 SemiBold.ttf");
}
@font-face {
	font-family: "Space Mono";
	src: local("Space Mono"), url("./fonts/SpaceMono-Regular.ttf");
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
