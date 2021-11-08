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
						class="transparent ma-3 mr-4 underline click"
						id="bar-text"
					>{{ langs[cur_lang].contact }}</v-card>
					<v-card
						flat
						class="transparent ma-3 mr-4"
						id="bar-text"
					><span
							:class="(cur_lang !== `ru`) ? 'underline click' : 'grey--text'"
							@click="setLang('ru')"
						>RU</span> | <span
							:class="(cur_lang !== `en`) ? 'underline click' : 'grey--text'"
							@click="setLang('en')"
						>EN</span></v-card>

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

							<div :style=" (cur_lang !== 'en') ? 'font-family: Montserrat Bold; font-size: 10vw;' : '' ">{{ langs[cur_lang].title }}
								<transition
									appear
									name="prime-co"
								>
									<h3
										id="prime-co"
										class="text-right"
										:style=" (cur_lang !== 'en') ? 'font-family: Montserrat Bold; line-height: 1.6;' : '' "
									>
										{{ langs[cur_lang].sub }}<span class="redish">.</span>
									</h3>
								</transition>
								<transition
									appear
									name="sub"
								>
									<vue-typed-js
										:strings="langs[cur_lang].we_are"
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
										<h1
											id="sub"
											:style=" (cur_lang !== 'en') ? 'font-family: Ruda Regular' : '' "
										>
											>
											{{ langs[cur_lang].we }}
											<span
												id="sub-a"
												class="typing"
												:style=" (cur_lang !== 'en') ? 'font-family: Ruda Medium' : '' "
											></span>
										</h1>
									</vue-typed-js>
								</transition>
							</div>

						</transition>

					</div>
				</v-row>

			</v-responsive>

			<v-responsive class="ml-4 mr-4">
				<v-row
					no-gutters
					justify="center"
				>
					<v-col
						v-for="(
							member, index
						) in langs[cur_lang].members"
						:key="member"
						xs="7"
						sm="6"
						md="4"
						lg="4"
						xl="4"
						cols="10"
					>
						<Profile
							vpshow
							:style="`--delay: ${
									delays.cards +
									275 *
										index
								}ms`"
							class="ml-4 mr-2 mt-4 vpshow"
							:chel="member"
							:russki="(cur_lang === 'ru') ? 'da' : 'net'"
						></Profile>

					</v-col>
				</v-row>
			</v-responsive>

			<!-- <div v-animate-onscroll.repeat="'animated flash'">
				<div class="white--text">LOL</div> me
			</div> -->
		</v-main>
	</v-app>
</template>

<script>
// TODO: On scoll animation
// TODO: Smooth scrolling?
// TODO: Profile cards

import Profile from "./Profile.vue";

export default {
	name: "Main",
	components: {
		Profile,
	},
	created() {
		window.addEventListener("scroll", this.handleScroll);
	},
	destroyed() {
		window.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		print() {
			console.log(this.cur_lang);
		},
		setLang(lang) {
			this.cur_lang = lang;
		},
	},
	data() {
		return {
			cur_lang: "ru",
			langs: {
				en: {
					title: "Bulanov Motors",
					sub: "and Co",
					we: "We are",
					contact: "Contact",
					members: [
						{
							name: "Dmitry Mac Gregory",
							pic: "gregory6.jpg",
							bio: "I am cool guy, yes. The Industrial Revolution and its consequences have been a...",
							pos: "Chief brand officer",
							posC: "CBO",
						},
						{
							name: "Alexandr Bylanoid",
							pic: "sasha3.jpg",
							bio: "BORGAR",
							pos: "Chief executive officer",
							posC: "CEO",
						},
						{
							name: "Dmitry Kosenberg",
							pic: "dima_mono.jpg",
							bio: "I don't really care if you cry. On the real, you shoulda never lied. Shoulda saw the way she looked me in my eyes. She said, Baby, I am not afraid to die. Push me to the edge",
							pos: "Chief administrative officer",
							posC: "CAO",
						},
						{
							name: "Ilia Desyaichenko",
							pic: "ilia_mono.jpg",
							bio: "📈📈📈",
							pos: "Chief technology officer",
							posC: "CTO",
						},
						{
							name: "Ilya Shabanenko",
							pic: "ilya3.jpg",
							bio: "What is GPT-3? GPT-3 (Generative Pre-trained Transformer 3) is a language model that was created by OpenAI, an artificial intelligence research laboratory in San Francisco. The 175-billion parameter deep learning model is capable of producing human-like text and was trained on large text datasets with hundreds of billions of words. I am open to the idea that a worm with 302 neurons is conscious, so I am open to the idea that GPT-3 with 175 billion parameters is conscious too.” — David Chalmers. Since last summer, GPT-3 has made headlines, and entire startups have been created using this tool. However, it’s important to understand the facts behind what GPT-3 really is and how it works rather than getting lost in all of the hype around it and treating it like a black box that can solve any problem. In this article, I will give you a high-level overview of how GPT-3 works, as well as the strengths and limitations of the model and how you can use it yourself. How GPT-3 works  At its core, GPT-3 is basically a transformer model. Transformer models are sequence-to-sequence deep learning models that can produce a sequence of text given an input sequence. These models are designed for text generation tasks such as question-answering, text summarization, and machine translation. The image below demonstrates how a transformer model iteratively generates a translation in French given an input sequence in English. A transformer iteratively predicts the next word in machine translation tasks. Image by the author.  Transformer models operate differently from LSTMs by using multiple units called attention blocks to learn what parts of a text sequence are important to focus on. A single transformer may have several separate attention blocks that each learn separate aspects of language ranging from parts of speech to named entities. For an in-depth overview of how transformers work, you should check out my article below. What are transformers and how can you use them? An introduction to the models that have revolutionized natural language processing in the last few years.  towardsdatascience.com  GPT-3 is the third generation of the GPT language models created by OpenAI. The main difference that sets GPT-3 apart from previous models is its size. GPT-3 contains 175 billion parameters, making it 17 times as large as GPT-2, and about 10 times as Microsoft’s Turing NLG model. Referring to the transformer architecture described in my previous article listed above, GPT-3 has 96 attention blocks that each contain 96 attention heads. In other words, GPT-3 is basically a giant transformer model.  Based on the original paper that introduced this model, GPT-3 was trained using a combination of the following large text datasets:    Common Crawl    WebText2    Books1    Books2    Wikipedia Corpus  The final dataset contained a large portion of web pages from the internet, a giant collection of books, and all of Wikipedia. Researchers used this dataset with hundreds of billions of words to train GPT-3 to generate text in English in several other languages. Why GPT-3 is so powerful  GPT-3 has made headlines since last summer because it can perform a wide variety of natural language tasks and produces human-like text. The tasks that GPT-3 can perform include, but are not limited to:    Text classification (ie. sentiment analysis)    Question answering    Text generation    Text summarization    Named-entity recognition    Language translation  Based on the tasks that GPT-3 can perform, we can think of it as a model that can perform reading comprehension and writing tasks at a near-human level except that it has seen more text than any human will ever read in their lifetime. This is exactly why GPT-3 is so powerful. Entire startups have been created with GPT-3 because we can think of it as a general-purpose swiss army knife for solving a wide variety of problems in natural language processing. Limitations of GPT-3  While at the time of writing this article GPT-3 is the largest and arguably the most powerful language model, it has its own limitations. In fact, every machine learning model, no matter how powerful, has certain limitations. This concept is something that I explored in great detail in my article about the No Free Lunch Theorem below. What “no free lunch” really means in machine learning Demystifying this often misunderstood theorem.  towardsdatascience.com  Consider some of the limitations of GPT-3 listed below:    GPT-3 lacks long-term memory — the model does not learn anything from long-term interactions like humans.    Lack of interpretability — this is a problem that affects extremely large and complex in general. GPT-3 is so large that it is difficult to interpret or explain the output that it produces.    Limited input size — transformers have a fixed maximum input size and this means that prompts that GPT-3 can deal with cannot be longer than a few sentences.    Slow inference time — because GPT-3 is so large, it takes more time for the model to produce predictions.    GPT-3 suffers from bias — all models are only as good as the data that was used to train them and GPT-3 is no exception. This paper, for example, demonstrates that GPT-3 and other large language models contain anti-Muslim bias.  While GPT-3 is powerful, it still has limitations that make it far from being a perfect language model or an example of artificial general intelligence (AGI). How you can use GPT-3  Currently, GPT-3 is not open-source and OpenAI decided to instead make the model available through a commercial API that you can find here. This API is in private beta, which means that you will have to fill out the OpenAI API Waitlist Form to join the waitlist to use the API.  OpenAI also has a special program for academic researchers who want to use GPT-3. If you want to use GPT-3 for academic research, you should fill out the Academic Access Application.  While GPT-3 is not open-source or publicly available, its predecessor, GPT-2 is open-source and accessible through Hugging Face’s transformers library. Feel free to check out the documentation for Hugging Face’s GPT-2 implementation if you want to use this smaller, yet still powerful language model instead. Summary  GPT-3 has received a lot of attention since last summer because it is by far the largest and arguably most powerful language model created at the time of writing this article. However, GPT-3 still suffers from several limitations that make it far from being a perfect language model or an example of AGI. If you would like to use GPT-3 for research or commercial purposes, you can apply to use Open AI’s API which is currently in private beta. Otherwise, you can always work directly with GPT-2 which is publicly available and open-source thanks to HuggingFace’s transformers library. Join My Mailing List  Do you want to get better at data science and machine learning? Do you want to stay up to date with the latest libraries, developments, and research in the data science and machine learning community?  Join my mailing list to get updates on my data science content. You’ll also get my free Step-By-Step Guide to Solving Machine Learning Problems when you sign up!",
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
				},
				ru: {
					title: "Буланов Моторз",
					sub: "ЗАО",
					we: "Мы ",
					contact: "Контакты",
					members: [
						{
							name: "Грегорян Дмитрий",
							pic: "gregory6.jpg",
							bio: "Если бы пленка была бы супер дорогой, то у моего деда не было бы огромной коробки с пленкой, на которую он фоткал каждый свой шаг, особенно когда в походах был.",
							pos: "Главный бренд-директор",
							posC: "CBO",
						},
						{
							name: "Буланов Александр",
							pic: "sasha3.jpg",
							bio: "бургир",
							pos: "Генеральный директор",
							posC: "CEO",
						},
						{
							name: "Косенко Дмитрий",
							pic: "dima_mono.jpg",
							bio: "у у я богатый чел у меня денег так много а кеш лицо коробка у еее",
							pos: "Главный администратор",
							posC: "CAO",
						},
						{
							name: "Десятченко Илья",
							pic: "ilia_mono.jpg",
							bio: "📈📈📈",
							pos: "Главный технический директор",
							posC: "CTO",
						},
						{
							name: "Шабанов Илья",
							pic: "ilya3.jpg",
							bio: "Родился 17 октября 1955 года в Москве. Отец принадлежит к роду архитекторов, наиболее известным из которых был его дед Владимир Николаевич Семёнов (1874—1960). Дед Никиты по материнской линии служил директором во МХАТе. Во время обучения в школах Никита подрабатывал санитаром в научно-исследовательском институте им. Склифосовского. Впоследствии, приняв предложение тогдашнего администратора Театра на Таганке Якова Безродного, с 1972 года работал там в качестве монтировщика сцены[2].  В 1983 году окончил Театральный институт имени Бориса Щукина (курс Юрия Катина-Ярцева); до этого пробовался на режиссёрском факультете, но провалил экзамены. После окончания училища был приглашён режиссёром Юрием Любимовым в Театр на Таганке, где участвовал в различных спектаклях и был председателем профкома. Тогда же стал сниматься в кино. Ушёл из театра после его раскола в 1992 году[2][3], после этого несколько лет состоял в «Содружестве актёров Таганки»[2].  В 1997—2002 годах сотрудничал с театром «Вернисаж» Юрия Непомнящего, в том числе и как постановщик.  С 1994 года занимается дубляжом и закадровым озвучиванием зарубежных фильмов и телесериалов, озвучивает компьютерные игры и рекламные ролики[4].  Среди работ Никиты Прозоровского — дублирование американского актёра Роберта Де Ниро, британского актёра Гэри Олдмена в фильмах «Бэтмен: Начало» и «Тёмный рыцарь», Бена Кингсли, а также дублирование и озвучивание во множестве фильмов и сериалов (в числе известных — Джеймс «Сойер» в телесериале «Остаться в живых», Джо и Росс в телесериале «Друзья», Рустем-паша и Матракчи в сериале «Великолепный век»), мультфильмах и компьютерных играх (озвучил Джо Барбаро в компьютерной игре Mafia 2, доктора Ватсона в нескольких частях игры про Шерлока Холмса, G-Man’а в играх Half-Life 2: Episode One и Half-Life 2: Episode Two, Деклана Леуваардена и Эмгыра вар Эмрейса в разных играх серии «Ведьмак» и многих других).  В разное время являлся «голосом» телеканалов «НТВ», «НТВ-Плюс», «Discovery»[5] и «Восьмого канала». До 2010 года также озвучивал некоторые анонсы телеканала Nickelodeon Россия. ",
							pos: "Главный анализатор данных директор",
							posC: "CDO",
						},
					],
					we_are: [
						"Комманда",
						"Партнёры",
						"Cjj,otcndj oops...",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
						"Комманда",
						"Партнёры",
						"Сообщество",
						"Друзья",
					],
				},
			},
			delays: {
				prime: 2500,
				typing: 3750,
				cards: 1000,
			},
		};
	},
	props: {},
};
</script>



<style scoped lang="scss">
@import url("https://cdn.jsdelivr.net/npm/animate.css@latest/animate.min.css");
* {
	/* outline: 1px dotted yellow; */
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
.noneng {
	font-family: Consolas;
	font-size: 30px;
	color: red;
}
#sub {
	/* font-family: "Helvetica-Light Light"; */
	font-family: MavenPro Regular;
	font-size: 0.23em;
	margin-top: 30vh;
	color: white;
}
#sub-a {
	/* font-family: "Helvetica"; */
	font-family: MavenPro Medium;
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
	will-change: transform;
	transform: translateY(40px);
	opacity: 0;
}

.prime-co-enter-active {
	transition: all 1.8s ease;
	transition-delay: 2s;
}
.prime-co-enter,
.prime-co-leave-to {
	will-change: transform;
	opacity: 0;
}

.sub-enter-active {
	transition: all 1s ease;
	transition-delay: 2.5s;
}
.sub-enter,
.sub-leave-to {
	/* transform: translateX(-15px); */
	will-change: transform;
	opacity: 0;
}
.bar-enter-active {
	transition: all 0.65s ease;
	transition-delay: 2.5s;
}
.bar-enter,
.bar-leave-to {
	will-change: transform;
	transform: translateY(-30px);
	opacity: 0;
}

.profile-cards.enter-active {
	/* 2 */
	will-change: transform;
	transition: all 1.2s ease;
	/* transition-delay: var(--delay); */
	transition-delay: 1s;
}

.profile-cards.enter,
.profile-cards.leave-to {
	/* 1 */
	transform: translateX(-13px);
	opacity: 0;
}

// TODO: OK, scroll thingy works, but!
// TODO: for some reason classes are not applied
// TODO: vpshow works???

// .cards {
// 	/* 2 */
// 	will-change: transform;
// 	transition: all 1.2s ease;
// 	/* transition-delay: var(--delay); */
// 	transition-delay: 1s;

// 	&.active {
// 		/* 1 */
// 		transform: translateX(-13px);
// 		opacity: 0;
// 	}
// }

.before-enter {
	transform: translateX(-13px);
	color: red;
	opacity: 0.25;
}

.enter {
	opacity: 0.7;
	transition: all 1.2s ease;
	/* transition-delay: var(--delay); */
	color: blue;
	transition-delay: 1s;
}

@media screen and (max-width: 1200px) {
	#sub {
		font-size: 0.4em;
		margin-top: 40vh;
	}
}
@media screen and (max-width: 1200px) {
	#sub {
		font-size: 0.45em;
		margin-top: 50vh;
	}
}
@media screen and (max-width: 600px) {
	#sub {
		font-size: 0.55em;
		margin-top: 65vh;
	}
}

.underline {
	color: white;
	/* TODO: separate to class */
	/* TODO: borders around selected card */
	/* text-transform: uppercase; */

	will-change: transform;
	position: relative;
	outline: none;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
}

.underline:before {
	content: "";
	position: absolute;
	width: 100%;
	height: 1px;
	bottom: 0;
	left: 0;
	background-color: white;
	transform: scaleX(0);
	transition: transform 0.2s ease;
}
.underline:hover:before,
.underline:focus:before {
	visibility: visible;
	transform: scaleX(0.9);
}
.underline:hover:after {
	width: 100%;
	left: 0;
	opacity: 0;
}
.click {
	cursor: pointer;
}

.hide {
	visibility: hidden !important;
}
</style>

