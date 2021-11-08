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
@font-face {
	font-family: Graphik;
	src: local("Graphik-Semibold"), url("./fonts/Graphik-Regular.ttf");
}
@font-face {
	font-family: MavenPro Regular;
	src: local("MavenPro Regular"), url("./fonts/MavenPro-Regular.ttf");
}
@font-face {
	font-family: MavenPro Medium;
	src: local("MavenPro Medium"), url("./fonts/MavenPro-Medium.ttf");
}
@font-face {
	font-family: Consolas;
	src: local("Consolas"), url("./fonts/Consolas.ttf");
}
@font-face {
	font-family: Helvetica;
	src: local("Helvetica"), url("./fonts/Helvetica.ttf");
}
@font-face {
	font-family: Helvetica Bold;
	src: local("Helvetica Bold"), url("./fonts/Helvetica-Bold.ttf");
}
@font-face {
	font-family: Helvetica-Light Light;
	src: local("Helvetica-Light"), url("./fonts/HelveticaLt.ttf");
}
@font-face {
	font-family: Montserrat Bold;
	src: local("Montserrat-Bold"), url("./fonts/Montserrat-Bold.ttf");
}
@font-face {
	font-family: Ruda Medium;
	src: local("Ruda-Medium"), url("./fonts/Ruda-Medium.ttf");
}
@font-face {
	font-family: Ruda Regular;
	src: local("Ruda-Regular"), url("./fonts/Ruda-Regular.ttf");
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
