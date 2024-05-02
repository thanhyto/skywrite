// Chart dimensions
const marginTop = 50;
const marginBottom = 50;
const marginLeft = 40;
const marginRight = 20;

const width = 1000;
const height = 750;

// Dataset
let noise = [
  { Index: 56, "2d": [1.1564289331, 3.9473571777] },
  { Index: 103, "2d": [0.3408281505, 2.8767299652] },
  { Index: 104, "2d": [0.2277360409, 3.0729014874] },
  { Index: 105, "2d": [0.5028944016, 4.9031953812] },
  { Index: 106, "2d": [3.4272880554, 7.8673567772] },
  { Index: 83, "2d": [0.3654969931, 4.6220097542] },
  { Index: 107, "2d": [1.3270442486, 3.054923296] },
  { Index: 108, "2d": [-0.2463615537, 5.0003738403] },
  { Index: 109, "2d": [-1.0138273239, 5.4754428864] },
  { Index: 110, "2d": [-1.5164740086, 7.5685501099] },
  { Index: 9, "2d": [-0.7347941399, 6.1391057968] },
  { Index: 111, "2d": [-0.2213277221, 6.298974514] },
  { Index: 112, "2d": [-0.2884388268, 6.9644780159] },
  { Index: 113, "2d": [-0.2552507818, 6.3410153389] },
  { Index: 114, "2d": [-1.6356812716, 7.1338319778] },
  { Index: 69, "2d": [-0.6038991809, 6.381316185] },
  { Index: 115, "2d": [0.8066408038, 3.0363414288] },
  { Index: 116, "2d": [-1.3778136969, 7.850110054] },
  { Index: 117, "2d": [-1.0691313744, 7.7489390373] },
  { Index: 118, "2d": [-1.3399378061, 7.6829714775] },
  { Index: 17, "2d": [-1.1921800375, 7.7880439758] },
  { Index: 119, "2d": [3.0479447842, 8.3348169327] },
  { Index: 120, "2d": [1.1644617319, 6.7705459595] },
  { Index: 121, "2d": [-0.9541316628, 7.9699749947] },
  { Index: 122, "2d": [3.3061280251, 7.796775341] },
  { Index: 37, "2d": [-0.6463442445, 8.120721817] },
  { Index: 123, "2d": [-0.3201387525, 8.3179674149] },
  { Index: 124, "2d": [-0.378675431, 8.4694423676] },
  { Index: 125, "2d": [-0.1480948627, 8.5169277191] },
  { Index: 126, "2d": [3.1018898487, 7.9286870956] },
  { Index: 84, "2d": [0.242925182, 9.072265625] },
  { Index: 127, "2d": [3.8617942333, 7.4516277313] },
  { Index: 128, "2d": [2.8937950134, 7.6332783699] },
  { Index: 129, "2d": [-0.0769695938, 8.8126087189] },
  { Index: 130, "2d": [1.4289392233, 9.2054338455] },
  { Index: 8, "2d": [0.9760932326, 8.1429328918] },
  { Index: 131, "2d": [-0.1769347489, 8.4301595688] },
  { Index: 132, "2d": [1.1818886995, 9.1100511551] },
  { Index: 133, "2d": [1.2096633911, 8.4495038986] },
  { Index: 134, "2d": [-0.1429388523, 8.7690267563] },
  { Index: 94, "2d": [1.7330358028, 9.0753545761] },
  { Index: 135, "2d": [1.1910170317, 8.9136257172] },
  { Index: 136, "2d": [1.3113452196, 8.6117353439] },
  { Index: 137, "2d": [1.5641798973, 9.0080223083] },
  { Index: 138, "2d": [1.7345494032, 9.1001682281] },
  { Index: 21, "2d": [2.6323876381, 8.886305809] },
  { Index: 139, "2d": [3.3252112865, 8.0904750824] },
  { Index: 140, "2d": [2.3618984222, 9.2077970505] },
  { Index: 141, "2d": [3.0362803936, 7.8646636009] },
  { Index: 142, "2d": [0.6885052323, 5.2593774796] },
  { Index: 5, "2d": [3.1945421696, 8.1107673645] },
  { Index: 143, "2d": [3.3481910229, 8.0565633774] },
  { Index: 144, "2d": [3.3435771465, 7.8929004669] },
  { Index: 145, "2d": [3.873718977, 7.0158410072] },
  { Index: 146, "2d": [3.7673664093, 7.5356454849] },
  { Index: 55, "2d": [3.4778985977, 7.5250849724] },
  { Index: 147, "2d": [3.5348260403, 7.8417358398] },
  { Index: 148, "2d": [2.738881588, 6.3164520264] },
  { Index: 149, "2d": [3.8413379192, 7.5341119766] },
  { Index: 150, "2d": [1.6879025698, 3.3515706062] },
  { Index: 19, "2d": [1.7011258602, 4.1184844971] },
  { Index: 151, "2d": [1.9475425482, 4.7103505135] },
  { Index: 152, "2d": [3.12272048, 7.8014745712] },
  { Index: 153, "2d": [1.0302779675, 3.1154475212] },
  { Index: 154, "2d": [1.0370776653, 3.2160513401] },
];
let anchor = [
  [1.1564289331, 3.9473571777],
  [0.3654969931, 4.6220097542],
  [-0.7347941399, 6.1391057968],
  [-0.6038991809, 6.381316185],
  [-1.1921800375, 7.7880439758],
  [-0.6463442445, 8.120721817],
  [0.242925182, 9.072265625],
  [0.9760932326, 8.1429328918],
  [1.7330358028, 9.0753545761],
  [2.6323876381, 8.886305809],
  [3.1945421696, 8.1107673645],
  [3.4778985977, 7.5250849724],
  [1.7011258602, 4.1184844971],
];
let quotes = [
  {
      "x": 0.529114902,
      "y": 0.3868478239,
      "quote": "\u201cBe yourself; everyone else is already taken.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4847980738,
      "y": 0.692477107,
      "quote": "\u201cI'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.7518697381,
      "y": 0.1911457777,
      "quote": "\u201cTwo things are infinite: the universe and human stupidity; and I'm not sure about the universe.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.9566046596,
      "y": 0.4747218192,
      "quote": "\u201cSo many books, so little time.\u201d",
      "author": "Frank Zappa"
  },
  {
      "x": 0.9382975698,
      "y": 0.6036627293,
      "quote": "\u201cA room without books is like a body without a soul.\u201d",
      "author": "Marcus Tullius Cicero"
  },
  {
      "x": 0.51274544,
      "y": 0.2885712087,
      "quote": "\u201cBe who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\u201d",
      "author": "Bernard M. Baruch"
  },
  {
      "x": 0.3382278681,
      "y": 0.3458889127,
      "quote": "\u201cYou've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.\u201d",
      "author": "William W. Purkey"
  },
  {
      "x": 0.3767158985,
      "y": 0.6110160351,
      "quote": "\u201cYou know you're in love when you can't fall asleep because reality is finally better than your dreams.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.5754247308,
      "y": 0.3017259836,
      "quote": "\u201cYou only live once, but if you do it right, once is enough.\u201d",
      "author": "Mae West"
  },
  {
      "x": 0.5647426248,
      "y": 0.2688045502,
      "quote": "\u201cBe the change that you wish to see in the world.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.6245836616,
      "y": 0.4120999277,
      "quote": "\u201cIn three words I can sum up everything I've learned about life: it goes on.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.5150125623,
      "y": 0.2064966559,
      "quote": "\u201cIf you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.7372973561,
      "y": 0.6505668163,
      "quote": "\u201cDon\u00e2\u20ac\u2122t walk in front of me\u00e2\u20ac\u00a6 I may not followDon\u00e2\u20ac\u2122t walk behind me\u00e2\u20ac\u00a6 I may not leadWalk beside me\u00e2\u20ac\u00a6 just be my friend\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.2683814764,
      "y": 0.2498889565,
      "quote": "\u201cIf you tell the truth, you don't have to remember anything.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.7190535665,
      "y": 0.7057237625,
      "quote": "\u201cFriendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.6659445763,
      "y": 0.7360973358,
      "quote": "\u201cA friend is someone who knows all about you and still loves you.\u201d",
      "author": "Elbert Hubbard"
  },
  {
      "x": 0.0662252903,
      "y": 0.3157684803,
      "quote": "\u201cAlways forgive your enemies; nothing annoys them so much.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.2091984153,
      "y": 0.5587899685,
      "quote": "\u201cTo live is the rarest thing in the world. Most people exist, that is all.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.6062936187,
      "y": 0.1692450941,
      "quote": "\u201cLive as if you were to die tomorrow. Learn as if you were to live forever.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.2061399221,
      "y": 0.3970257938,
      "quote": "\u201cDarkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.\u201d",
      "author": "Martin Luther King Jr.,"
  },
  {
      "x": 0.4250876307,
      "y": 0.4783526957,
      "quote": "\u201cWithout music, life would be a mistake.\u201d",
      "author": "Friedrich Nietzsche,"
  },
  {
      "x": 0.3593835831,
      "y": 0.2728571892,
      "quote": "\u201cWe accept the love we think we deserve.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.6461275816,
      "y": 0.2446355522,
      "quote": "\u201cI am so clever that sometimes I don't understand a single word of what I am saying.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.5794441104,
      "y": 0.4290951192,
      "quote": "\u201cTo be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.5850999355,
      "y": 0.6639243364,
      "quote": "\u201cHere's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.\u201d",
      "author": "Rob Siltanen"
  },
  {
      "x": 0.722938478,
      "y": 0.4431701601,
      "quote": "\u201cInsanity is doing the same thing, over and over again, but expecting different results.\u201d",
      "author": "Narcotics Anonymous"
  },
  {
      "x": 0.4786292315,
      "y": 0.5150763988,
      "quote": "\u201cI believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.4527225494,
      "y": 0.5628607273,
      "quote": "\u201cTwenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.\u201d",
      "author": "H. Jackson Brown Jr.,"
  },
  {
      "x": 0.2232023478,
      "y": 0.3732933104,
      "quote": "\u201cIt is better to be hated for what you are than to be loved for what you are not.\u201d",
      "author": "Andre Gide,"
  },
  {
      "x": 0.5208926201,
      "y": 0.7555700541,
      "quote": "\u201cOnly once in your life, I truly believe, you find someone who can completely turn your world around. You tell them things that you\u00e2\u20ac\u2122ve never shared with another soul and they absorb everything you say and actually want to hear more. You share hopes for the future, dreams that will never come true, goals that were never achieved and the many disappointments life has thrown at you. When something wonderful happens, you can\u00e2\u20ac\u2122t wait to tell them about it, knowing they will share in your excitement. They are not embarrassed to cry with you when you are hurting or laugh with you when you make a fool of yourself. Never do they hurt your feelings or make you feel like you are not good enough, but rather they build you up and show you the things about yourself that make you special and even beautiful. There is never any pressure, jealousy or competition but only a quiet calmness when they are around. You can be yourself and not worry about what they will think of you because they love you for who you are. The things that seem insignificant to most people such as a note, song or walk become invaluable treasures kept safe in your heart to cherish forever. Memories of your childhood come back and are so clear and vivid it\u00e2\u20ac\u2122s like being young again. Colours seem brighter and more brilliant. Laughter seems part of daily life where before it was infrequent or didn\u00e2\u20ac\u2122t exist at all. A phone call or two during the day helps to get you through a long day\u00e2\u20ac\u2122s work and always brings a smile to your face. In their presence, there\u00e2\u20ac\u2122s no need for continuous conversation, but you find you\u00e2\u20ac\u2122re quite content in just having them nearby. Things that never interested you before become fascinating because you know they are important to this person who is so special to you. You think of this person on every occasion and in everything you do. Simple things bring them to mind like a pale blue sky, gentle wind or even a storm cloud on the horizon. You open your heart knowing that there\u00e2\u20ac\u2122s a chance it may be broken one day and in opening your heart, you experience a love and joy that you never dreamed possible. You find that being vulnerable is the only way to allow your heart to feel true pleasure that\u00e2\u20ac\u2122s so real it scares you. You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.4618824124,
      "y": 0.7324237823,
      "quote": "\u201cAll that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.From the ashes a fire shall be woken,A light from the shadows shall spring;Renewed shall be blade that was broken,The crownless again shall be king.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.568628788,
      "y": 0.3909654915,
      "quote": "\u201cIt is our choices, Harry, that show what we truly are, far more than our abilities.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.9707211852,
      "y": 0.5059525967,
      "quote": "\u201cThe person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.7173207402,
      "y": 0.4229853451,
      "quote": "\u201cImperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.3635363579,
      "y": 0.5444225073,
      "quote": "\u201cThere are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.5708552599,
      "y": 0.1220185906,
      "quote": "\u201cIt does not do to dwell on dreams and forget to live.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8454765677,
      "y": 0.6425962448,
      "quote": "\u201cGood friends, good books, and a sleepy conscience: this is the ideal life.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.304951787,
      "y": 0.7441250086,
      "quote": "\u201cAs he read, I fell in love the way you fall asleep: slowly, and then all at once.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.1074483097,
      "y": 0.6932358742,
      "quote": "\u201cWe are all in the gutter, but some of us are looking at the stars.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.587508142,
      "y": 0.5144674778,
      "quote": "\u201cFairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.1526944637,
      "y": 0.3192414045,
      "quote": "\u201cIt is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.\u201d",
      "author": "Maurice Switzer,"
  },
  {
      "x": 0.7808888555,
      "y": 0.315348357,
      "quote": "\u201cThe fool doth think he is wise, but the wise man knows himself to be a fool.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.622990489,
      "y": 0.2800642252,
      "quote": "\u201cWhenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.4095823169,
      "y": 0.4787786305,
      "quote": "\u201cLife is what happens to us while we are making other plans.\u201d",
      "author": "Allen Saunders"
  },
  {
      "x": 0.6592873335,
      "y": 0.0888951868,
      "quote": "\u201cYesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.\u201d",
      "author": "Bill Keane"
  },
  {
      "x": 0.4609687924,
      "y": 0.1911925673,
      "quote": "\u201cI have not failed. I've just found 10,000 ways that won't work.\u201d",
      "author": "Thomas A. Edison"
  },
  {
      "x": 0.7061871886,
      "y": 0.6947984695,
      "quote": "\u201cIt is not a lack of love, but a lack of friendship that makes unhappy marriages.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.1836670339,
      "y": 0.4010825753,
      "quote": "\u201cThe opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.\u201d",
      "author": "Elie Wiesel"
  },
  {
      "x": 0.5269856453,
      "y": 0.4825622141,
      "quote": "\u201cA woman is like a tea bag; you never know how strong it is until it's in hot water.\u201d",
      "author": "Eleanor Roosevelt"
  },
  {
      "x": 0.9187671542,
      "y": 0.387039423,
      "quote": "\u201cThe man who does not read has no advantage over the man who cannot read.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.0007641912,
      "y": 0.3138712347,
      "quote": "\u201cIf you don't stand for something you will fall for anything.\u201d",
      "author": "Gordon A. Eadie"
  },
  {
      "x": 0.5300565958,
      "y": 0.4749342501,
      "quote": "\u201cI may not have gone where I intended to go, but I think I have ended up where I needed to be.\u201d",
      "author": "douglas adams,"
  },
  {
      "x": 0.3139664531,
      "y": 0.8064286709,
      "quote": "\u201cI love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.\u201d",
      "author": "Pablo Neruda,"
  },
  {
      "x": 0.6497950554,
      "y": 0.9079302549,
      "quote": "\u201cI solemnly swear that I am up to no good.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8476005197,
      "y": 0.6699937582,
      "quote": "\u201cOutside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.\u201d",
      "author": "Groucho Marx,"
  },
  {
      "x": 0.3299273252,
      "y": 0.2133024633,
      "quote": "\u201cI am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.3410086632,
      "y": 0.3643622398,
      "quote": "\u201cLove all, trust a few, do wrong to none.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.6315803528,
      "y": 0.4585573375,
      "quote": "\u201cI like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.414575696,
      "y": 0.7681440115,
      "quote": "\u201cHave you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.0991799235,
      "y": 0.6280316114,
      "quote": "\u201cA day without sunshine is like, you know, night.\u201d",
      "author": "Steve Martin"
  },
  {
      "x": 0.8533447385,
      "y": 0.5104666948,
      "quote": "\u201cA reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.639574945,
      "y": 0.1415925026,
      "quote": "\u201cNever put off till tomorrow what may be done day after tomorrow just as well.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5987157226,
      "y": 0.4930720627,
      "quote": null,
      "author": null
  },
  {
      "x": 0.312332809,
      "y": 0.4387251437,
      "quote": "\u201cYou have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.2679107785,
      "y": 0.4508825839,
      "quote": "\u201cThat which does not kill us makes us stronger.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.5752214789,
      "y": 0.5470808744,
      "quote": "\u201cBeing deeply loved by someone gives you strength, while loving someone deeply gives you courage.\u201d",
      "author": "Lao Tzu"
  },
  {
      "x": 0.5533483624,
      "y": 0.1004657745,
      "quote": "\u201cIt is never too late to be what you might have been.\u201d",
      "author": "George Eliot"
  },
  {
      "x": 0.037037164,
      "y": 0.3445156813,
      "quote": "\u201cFor every minute you are angry you lose sixty seconds of happiness.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.6104599237,
      "y": 0.7521224022,
      "quote": "\u201cIt takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6922675967,
      "y": 0.545789361,
      "quote": "\u201cThis life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up. Girls will be your friends - they'll act like it anyway. But just remember, some come, some go. The ones that stay with you through everything - they're your true best friends. Don't let go of them. Also remember, sisters make the best friends in the world. As for lovers, well, they'll come and go too. And baby, I hate to say it, most of them - actually pretty much all of them are going to break your heart, but you can't give up because if you give up, you'll never find your soulmate. You'll never find that half who makes you whole and that goes for everything. Just because you fail once, doesn't mean you're gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don't, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life's a beautiful thing and there's so much to smile about.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.2898652554,
      "y": 0.3618797958,
      "quote": "\u201cI love deadlines. I love the whooshing noise they make as they go by.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.096452862,
      "y": 0.5762895346,
      "quote": "\u201cIf you judge people, you have no time to love them.\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.8627595305,
      "y": 0.2188788652,
      "quote": "\u201cThere is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.3028210998,
      "y": 0.15967682,
      "quote": "\u201cIf you can't explain it to a six year old, you don't understand it yourself.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.6608185768,
      "y": 0.5301933289,
      "quote": "\u201cI'm not upset that you lied to me, I'm upset that from now on I can't believe you.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.2314817905,
      "y": 0.6239453554,
      "quote": "\u201cThere is no greater agony than bearing an untold story inside you.\u201d",
      "author": "Maya Angelou,"
  },
  {
      "x": 0.7346497178,
      "y": 0.5611634254,
      "quote": "\u201cLove is that condition in which the happiness of another person is essential to your own.\u201d",
      "author": "Robert A. Heinlein,"
  },
  {
      "x": 0.7292571664,
      "y": 0.4480533898,
      "quote": "\u201cAnyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.\u201d",
      "author": "Garrison Keillor"
  },
  {
      "x": 0.9920921922,
      "y": 0.5905190706,
      "quote": "\u201cIf you only read the books that everyone else is reading, you can only think what everyone else is thinking.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.3528078198,
      "y": 0.1672712266,
      "quote": "\u201cI have always imagined that Paradise will be a kind of library.\u201d",
      "author": "Jorge Luis Borges"
  },
  {
      "x": 0.7470920682,
      "y": 0.7401725054,
      "quote": "\u201cEverything you can imagine is real.\u201d",
      "author": "Pablo Picasso"
  },
  {
      "x": 0.7187966704,
      "y": 0.2756636143,
      "quote": "\u201cWomen and cats will do as they please, and men and dogs should relax and get used to the idea.\u201d",
      "author": "Robert A. Heinlein"
  },
  {
      "x": 0.4738630056,
      "y": 0.7723802328,
      "quote": "\u201cSometimes the questions are complicated and the answers are simple.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.891985476,
      "y": 0.6257380247,
      "quote": "\u201cYou may not be her first, her last, or her only. She loved before she may love again. But if she loves you now, what else matters? She's not perfect\u00e2\u20ac\u201dyou aren't either, and the two of you may never be perfect together but if she can make you laugh, cause you to think twice, and admit to being human and making mistakes, hold onto her and give her the most you can. She may not be thinking about you every second of the day, but she will give you a part of her that she knows you can break\u00e2\u20ac\u201dher heart. So don't hurt her, don't change her, don't analyze and don't expect more than she can give. Smile when she makes you happy, let her know when she makes you mad, and miss her when she's not there.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.532245934,
      "y": 0.8343605995,
      "quote": "\u201cNever trust anyone who has not brought a book with them.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.9394239783,
      "y": 0.4997239411,
      "quote": "\u201cYou love me. Real or not real?\"I tell him, \"Real.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.8525583148,
      "y": 0.4804575741,
      "quote": "\u201cYou can never get a cup of tea large enough or a book long enough to suit me.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.7777430415,
      "y": 0.5932078362,
      "quote": "\u201cWe read to know we're not alone.\u201d",
      "author": "William Nicholson,"
  },
  {
      "x": 0.79543823,
      "y": 0.751793623,
      "quote": "\u201cSometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.3733428121,
      "y": 0.1619721353,
      "quote": "\u201cAll you need is love. But a little chocolate now and then doesn't hurt.\u201d",
      "author": "Charles M. Schulz"
  },
  {
      "x": 0.1488490105,
      "y": 0.4250142872,
      "quote": "\u201cOf course it is happening inside your head, Harry, but why on earth should that mean that it is not real?\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.512460649,
      "y": 0.3813074231,
      "quote": "\u201cBeauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.\u201d",
      "author": "Jim Henson"
  },
  {
      "x": 0.4621983171,
      "y": 0.268927604,
      "quote": "\u201cLife isn't about finding yourself. Life is about creating yourself.\u201d",
      "author": "George Bernard Shaw"
  },
  {
      "x": 0.3665748239,
      "y": 0.3845026195,
      "quote": "\u201cToday you are You, that is truer than true. There is no one alive who is Youer than You.\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.4149652123,
      "y": 0.41638574,
      "quote": "\u201cTo the well-organized mind, death is but the next great adventure.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.928702414,
      "y": 0.4969389141,
      "quote": "\u201cI'm not afraid of death; I just don't want to be there when it happens.\u201d",
      "author": "Woody Allen"
  },
  {
      "x": 0.8442861438,
      "y": 0.4141214192,
      "quote": "\u201cIf one cannot enjoy reading a book over and over again, there is no use in reading it at all.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.5713918805,
      "y": 0.8478924036,
      "quote": "\u201cIf you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.3078885674,
      "y": 0.1793754995,
      "quote": "\u201cHave you fallen in love with the wrong person yet?'Jace said, \"Unfortunately, Lady of the Haven, my one true love remains myself.\"...\"At least,\" she said, \"you don't have to worry about rejection, Jace Wayland.\"\"Not necessarily. I turn myself down occasionally, just to keep it interesting.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3760836124,
      "y": 0.8458739519,
      "quote": "\u201cLogic will get you from A to Z; imagination will get you everywhere.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.6474581361,
      "y": 0.9769071341,
      "quote": "\u201cI'm in love with you,\" he said quietly.\"Augustus,\" I said.\"I am,\" he said. He was staring at me, and I could see the corners of his eyes crinkling. \"I'm in love with you, and I'm not in the business of denying myself the simple pleasure of saying true things. I'm in love with you, and I know that love is just a shout into the void, and that oblivion is inevitable, and that we're all doomed and that there will come a day when all our labor has been returned to dust, and I know the sun will swallow the only earth we'll ever have, and I am in love with you.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.3810529113,
      "y": 0.7084891796,
      "quote": "\u201cWhenever I feel the need to exercise, I lie down until it goes away.\u201d",
      "author": "Paul   Terry"
  },
  {
      "x": 0.1533424258,
      "y": 0.4496839941,
      "quote": "\u201cI am nothing special, of this I am sure. I am a common man with common thoughts and I've led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I've loved another with all my heart and soul, and to me, this has always been enough..\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.5598402619,
      "y": 0.4272418916,
      "quote": "\u201cSometimes people are beautiful.Not in looks.Not in what they say.Just in what they are.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.3173611164,
      "y": 0.3090833127,
      "quote": "\u201cYou don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.886066258,
      "y": 0.3878790438,
      "quote": "\u201cThe truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.2675506473,
      "y": 0.7432589531,
      "quote": "\u201cThe more that you read, the more things you will know. The more that you learn, the more places you'll go.\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.5470232964,
      "y": 0.0445320755,
      "quote": "\u201cLove looks not with the eyes, but with the mind,And therefore is winged Cupid painted blind.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.4351718426,
      "y": 0.1049149483,
      "quote": "\u201cFolks are usually about as happy as they make their minds up to be.\u201d",
      "author": "Abraham Lincoln"
  },
  {
      "x": 0.8594861627,
      "y": 0.6734149456,
      "quote": "\u201cDo what you can, with what you have, where you are.\u201d",
      "author": "Theodore Roosevelt"
  },
  {
      "x": 0.2459384799,
      "y": 0.440400809,
      "quote": "\u201cThere is no friend as loyal as a book.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.9664635062,
      "y": 0.5400468111,
      "quote": "\u201cOne good thing about music, when it hits you, you feel no pain.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.7289296985,
      "y": 0.1707804203,
      "quote": "\u201cI find television very educating. Every time somebody turns on the set, I go into the other room and read a book.\u201d",
      "author": "Groucho Marx"
  },
  {
      "x": 0.2917054296,
      "y": 0.3893092275,
      "quote": "\u201cThe story so far:In the beginning the Universe was created.This has made a lot of people very angry and been widely regarded as a bad move.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.4132624269,
      "y": 0.3215344846,
      "quote": "\u201cNot all of us can do great things. But we can do small things with great love.\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.2162643671,
      "y": 0.6617401838,
      "quote": "\u201cSuccess is not final, failure is not fatal: it is the courage to continue that counts.\u201d",
      "author": "Winston S. Churchill"
  },
  {
      "x": 0.5662077069,
      "y": 0.3817504346,
      "quote": "\u201cLove is like the wind, you can't see it but you can feel it.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.5062795281,
      "y": 0.063603729,
      "quote": "\u201cListen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.\u201d",
      "author": "Shel Silverstein"
  },
  {
      "x": 0.3997702599,
      "y": 0.5573056936,
      "quote": "\u201cWhen one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.\u201d",
      "author": "Helen Keller"
  },
  {
      "x": 0.5591634512,
      "y": 0.6009656191,
      "quote": "\u201cIf you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.\u201d",
      "author": "Joan Powers,"
  },
  {
      "x": 0.4848594069,
      "y": 0.7439193726,
      "quote": "\u201cSo, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.5358796716,
      "y": 0.7689064741,
      "quote": "\u201cSaying 'I notice you're a nerd' is like saying, 'Hey, I notice that you'd rather be intelligent than be stupid, that you'd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why is that?' In fact, it seems to me that most contemporary insults are pretty lame. Even 'lame' is kind of lame. Saying 'You're lame' is like saying 'You walk with a limp.' Yeah, whatever, so does 50 Cent, and he's done all right for himself.\u201d",
      "author": "John Green"
  },
  {
      "x": 0.5375689268,
      "y": 0.2888721526,
      "quote": "\u201cPeople think a soul mate is your perfect fit, and that's what everyone wants. But a true soul mate is a mirror, the person who shows you everything that is holding you back, the person who brings you to your own attention so you can change your life. A true soul mate is probably the most important person you'll ever meet, because they tear down your walls and smack you awake. But to live with a soul mate forever? Nah. Too painful. Soul mates, they come into your life just to reveal another layer of yourself to you, and then leave. A soul mates purpose is to shake you up, tear apart your ego a little bit, show you your obstacles and addictions, break your heart open so new light can get in, make you so desperate and out of control that you have to transform your life, then introduce you to your spiritual master...\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.486045599,
      "y": 0.499409765,
      "quote": "\u201cIt matters not what someone is born, but what they grow to be.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6507833004,
      "y": 0.5433881283,
      "quote": "\u201cLife is like riding a bicycle. To keep your balance, you must keep moving.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.3636338711,
      "y": 0.2981183529,
      "quote": "\u201cThere is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.6523542404,
      "y": 0.3891765475,
      "quote": "\u201cYou don't love someone because they're perfect, you love them in spite of the fact that they're not.\u201d",
      "author": "Jodi Picoult,"
  },
  {
      "x": 0.7700278163,
      "y": 0.3690848649,
      "quote": "\u201cSome people never go crazy. What truly horrible lives they must lead.\u201d",
      "author": "Charles Bukowski"
  },
  {
      "x": 0.2794904709,
      "y": 0.6202346087,
      "quote": "\u201cThe difference between genius and stupidity is: genius has its limits.\u201d",
      "author": "Alexandre Dumas-fils"
  },
  {
      "x": 0.745514214,
      "y": 0.6226394176,
      "quote": "\u201cLove never dies a natural death. It dies because we don't know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.7319021821,
      "y": 0.5659621954,
      "quote": "\u201cWhat really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.\u201d",
      "author": "J.D. Salinger,"
  },
  {
      "x": 0.1783382893,
      "y": 0.5833588839,
      "quote": "\u201cIf you can make a woman laugh, you can make her do anything.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.2252730727,
      "y": 0.8450679779,
      "quote": "\u201cWe\u00e2\u20ac\u2122re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness\u00e2\u20ac\u201dand call it love\u00e2\u20ac\u201dtrue love.\u201d",
      "author": "Robert Fulghum,"
  },
  {
      "x": 0.7785782218,
      "y": 0.5463863611,
      "quote": "\u201cYou don\u00e2\u20ac\u2122t have a soul, Doctor. You are a soul. You have a body, temporarily.\u201d",
      "author": "Walter M. Miller Jr.,"
  },
  {
      "x": 0.6950414777,
      "y": 0.1765972078,
      "quote": "\u201cI would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.\u201d",
      "author": "Virginia Woolf,"
  },
  {
      "x": 0.5459595919,
      "y": 0.3039264977,
      "quote": "\u201cSome infinities are bigger than other infinities.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.896459043,
      "y": 0.3863980174,
      "quote": "\u201cDo one thing every day that scares you.\u201d",
      "author": "Eleanor Roosevelt"
  },
  {
      "x": 0.70826298,
      "y": 0.4074268937,
      "quote": "\u201cIt is what you read when you don't have to that determines what you will be when you can't help it.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4081231356,
      "y": 0.613432169,
      "quote": "\u201cThe trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.9141926169,
      "y": 0.6048893929,
      "quote": "\u201cIf I had a flower for every time I thought of you...I could walk through my garden forever.\u201d",
      "author": "Alfred Tennyson"
  },
  {
      "x": 0.6502859592,
      "y": 0.4336332381,
      "quote": "\u201cOne must always be careful of books,\" said Tessa, \"and what is inside them, for words have the power to change us.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.6182458997,
      "y": 0.3258605003,
      "quote": "\u201cNot all those who wander are lost.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.663434267,
      "y": 0.510748744,
      "quote": "\u201cTime you enjoy wasting is not wasted time.\u201d",
      "author": "Marthe Troly-Curtin,"
  },
  {
      "x": 0.5273149014,
      "y": 0.4271941483,
      "quote": "\u201cReality continues to ruin my life.\u201d",
      "author": "Bill Watterson,"
  },
  {
      "x": 0.5627439022,
      "y": 0.8699551821,
      "quote": "\u201cThings change. And friends leave. Life doesn't stop for anybody.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.6176946163,
      "y": 0.3046451211,
      "quote": "\u201cThere is no pretending,\" Jace said with absolute clarity. \"I love you, and I will love you until I die, and if there is life after that, I'll love you then.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2295823693,
      "y": 0.6130442619,
      "quote": "\u201cWho are you to judge the life I live?I know I'm not perfect-and I don't live to be-but before you start pointing fingers...make sure you hands are clean!\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.9387622476,
      "y": 0.352646023,
      "quote": "\u201cThe real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.6746001244,
      "y": 0.934163928,
      "quote": "\u201cIf there's a book that you want to read, but it hasn't been written yet, then you must write it.\u201d",
      "author": "Toni Morrison"
  },
  {
      "x": 0.3516126871,
      "y": 0.6378844976,
      "quote": "\u201cPiglet sidled up to Pooh from behind. \"Pooh!\" he whispered.\"Yes, Piglet?\"\"Nothing,\" said Piglet, taking Pooh's paw. \"I just wanted to be sure of you.\u201d",
      "author": "A.A. Milne,"
  },
  {
      "x": 0.0901199281,
      "y": 0.2840967774,
      "quote": "\u201cTo love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.318095386,
      "y": 0.7723945379,
      "quote": "\u201cThe only way out of the labyrinth of suffering is to forgive.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.2612139583,
      "y": 0.5011689663,
      "quote": "\u201cHe's like a drug for you, Bella.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.6516689062,
      "y": 0.2098795772,
      "quote": "\u201cDo not pity the dead, Harry. Pity the living, and, above all those who live without love.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.7025991082,
      "y": 0.2034131587,
      "quote": "\u201cThe reason I talk to myself is because I\u00e2\u20ac\u2122m the only one whose answers I accept.\u201d",
      "author": "George Carlin"
  },
  {
      "x": 0.4918410182,
      "y": 0.4523474276,
      "quote": "\u201cA wise girl kisses but doesn't love, listens but doesn't believe, and leaves before she is left.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.5466825962,
      "y": 0.4859751165,
      "quote": "\u201cGo to heaven for the climate and hell for the company.\u201d",
      "author": "Benjamin Franklin Wade"
  },
  {
      "x": 0.3808300495,
      "y": 0.8343217373,
      "quote": "\u201cI wish it need not have happened in my time,\" said Frodo.\"So do I,\" said Gandalf, \"and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.8144711852,
      "y": 0.8700373173,
      "quote": "\u201cWhen someone loves you, the way they talk about you is different. You feel safe and comfortable.\u201d",
      "author": "Jess C. Scott,"
  },
  {
      "x": 0.9609003663,
      "y": 0.3043552637,
      "quote": "\u201cDumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears.\"After all this time?\"\"Always,\" said Snape.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.9749910235,
      "y": 0.5296167135,
      "quote": "\u201cThere is nothing to writing. All you do is sit down at a typewriter and bleed.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.7705132365,
      "y": 0.1301562041,
      "quote": "\u201cI declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.4995830059,
      "y": 0.5308427811,
      "quote": "\u201cAnd, when you want something, all the universe conspires in helping you to achieve it.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.5231389999,
      "y": 0.7272703648,
      "quote": "\u201cI am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.5046236515,
      "y": 0.5426539183,
      "quote": "\u201cHe has achieved success who has lived well, laughed often, and loved much;Who has enjoyed the trust of pure women, the respect of intelligent men and the love of little children;Who has filled his niche and accomplished his task;Who has never lacked appreciation of Earth's beauty or failed to express it;Who has left the world better than he found it,Whether an improved poppy, a perfect poem, or a rescued soul;Who has always looked for the best in others and given them the best he had;Whose life was an inspiration;Whose memory a benediction.\u201d",
      "author": "Bessie Anderson Stanley,"
  },
  {
      "x": 0.5144160986,
      "y": 0.690943718,
      "quote": "\u201cYou may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.8792212605,
      "y": 0.5520175695,
      "quote": "\u201cI've been making a list of the things they don't teach you at school. They don't teach you how to love somebody. They don't teach you how to be famous. They don't teach you how to be rich or how to be poor. They don't teach you how to walk away from someone you don't love any longer. They don't teach you how to know what's going on in someone else's mind. They don't teach you what to say to someone who's dying. They don't teach you anything worth knowing.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.2126621008,
      "y": 0.3794483244,
      "quote": "\u201c\u00e2\u20ac\u00b2Classic\u00e2\u20ac\u00b2 - a book which people praise and don't read.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.2759653926,
      "y": 0.1877582073,
      "quote": "\u201cI love mankind ... it's people I can't stand!!\u201d",
      "author": "Charles M. Schulz"
  },
  {
      "x": 0.2223047018,
      "y": 0.3346098065,
      "quote": "\u201cYou don\u00e2\u20ac\u2122t forget the face of the person who was your last hope.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.684781611,
      "y": 0.1263993382,
      "quote": "\u201cI am free of all prejudice. I hate everyone equally. \u201d",
      "author": "W.C. Fields"
  },
  {
      "x": 0.8521770835,
      "y": 0.3619326353,
      "quote": "\u201cFinish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.9067803025,
      "y": 0.6073952913,
      "quote": "\u201cI have never let my schooling interfere with my education.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.6131951213,
      "y": 0.1035068631,
      "quote": "\u201cThe books that the world calls immoral are books that show the world its own shame.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.1807421744,
      "y": 0.5582917929,
      "quote": "\u201cThe marks humans leave are too often scars.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.3126663566,
      "y": 0.6049993038,
      "quote": "\u201cYou never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.0991193056,
      "y": 0.5792937279,
      "quote": "\u201cRemember, we're madly in love, so it's all right to kiss me anytime you feel like it.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.3636820912,
      "y": 0.3883576393,
      "quote": "\u201cA lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.5453394651,
      "y": 0.5752298832,
      "quote": "\u201cTo die will be an awfully big adventure.\u201d",
      "author": "J.M. Barrie,"
  },
  {
      "x": 0.7233408093,
      "y": 0.3109061122,
      "quote": "\u201cOur deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us. We ask ourselves, 'Who am I to be brilliant, gorgeous, talented, fabulous?' Actually, who are you not to be? You are a child of God. Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people won't feel insecure around you. We are all meant to shine, as children do. We were born to make manifest the glory of God that is within us. It's not just in some of us; it's in everyone. And as we let our own light shine, we unconsciously give other people permission to do the same. As we are liberated from our own fear, our presence automatically liberates others.\u201d",
      "author": "Marianne Williamson,"
  },
  {
      "x": 0.8490653634,
      "y": 0.4523608387,
      "quote": "\u201cAnyone who has never made a mistake has never tried anything new.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.56992203,
      "y": 0.4035123289,
      "quote": "\u201cSome day you will be old enough to start reading fairy tales again.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.4507181644,
      "y": 0.3654893041,
      "quote": "\u201cWe are what we pretend to be, so we must be careful about what we pretend to be.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.5609879494,
      "y": 0.1678230762,
      "quote": "\u201cIt takes courage to grow up and become who you really are.\u201d",
      "author": "E.E. Cummings"
  },
  {
      "x": 0.7082731128,
      "y": 0.1783994138,
      "quote": "\u201cIt\u00e2\u20ac\u2122s no use going back to yesterday, because I was a different person then.\u201d",
      "author": "Lewis Carroll"
  },
  {
      "x": 0.9412999749,
      "y": 0.6021033525,
      "quote": "\u201cAnd in that moment, I swear we were infinite.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.9479463696,
      "y": 0.3257900774,
      "quote": "\u201cBooks are a uniquely portable magic.\u201d",
      "author": "Stephen King,"
  },
  {
      "x": 0.3854344487,
      "y": 0.4297887981,
      "quote": "\u201cYou have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.\u201d",
      "author": "Madeleine L'Engle"
  },
  {
      "x": 0.6233708858,
      "y": 0.5160536766,
      "quote": "\u201cI'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.\u201d",
      "author": "Jimi Hendrix,"
  },
  {
      "x": 0.1887683272,
      "y": 0.2037515044,
      "quote": "\u201cI can never read all the books I want; I can never be all the people I want and live all the lives I want. I can never train myself in all the skills I want. And why do I want? I want to live and feel all the shades, tones and variations of mental and physical experience possible in my life. And I am horribly limited.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.8874917626,
      "y": 0.6158040762,
      "quote": "\u201cBut better to get hurt by the truth than comforted with a lie.\u201d",
      "author": "Khaled Hosseini"
  },
  {
      "x": 0.0369595885,
      "y": 0.3287681639,
      "quote": "\u201cBooks are the ultimate Dumpees: put them down and they\u00e2\u20ac\u2122ll wait for you forever; pay attention to them and they always love you back.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.7943324447,
      "y": 0.7461624146,
      "quote": "\u201cWe believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.4115331173,
      "y": 0.6098552942,
      "quote": "\u201cThere is nothing better than a friend, unless it is a friend with chocolate.\u201d",
      "author": "Linda Grayson"
  },
  {
      "x": 0.189421773,
      "y": 0.2423613071,
      "quote": "\u201cSo it's not gonna be easy. It's going to be really hard; we're gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.7254373431,
      "y": 0.1778511107,
      "quote": "\u201cThe truth is rarely pure and never simple.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.9355316758,
      "y": 0.6343748569,
      "quote": "\u201cThere are infinite numbers between 0 and 1. There's .1 and .12 and .112 and an infinite collection of others. Of course, there is a bigger infinite set of numbers between 0 and 2, or between 0 and a million. Some infinities are bigger than other infinities. A writer we used to like taught us that. There are days, many of them, when I resent the size of my unbounded set. I want more numbers than I'm likely to get, and God, I want more numbers for Augustus Waters than he got. But, Gus, my love, I cannot tell you how thankful I am for our little infinity. I wouldn't trade it for the world. You gave me a forever within the numbered days, and I'm grateful.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.8279572129,
      "y": 0.8910365105,
      "quote": "\u201c... a mind needs books as a sword needs a whetstone, if it is to keep its edge.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.6943864226,
      "y": 0.5538043976,
      "quote": "\u201cThe truth.\" Dumbledore sighed. \"It is a beautiful and terrible thing, and should therefore be treated with great caution.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4020527005,
      "y": 0.4078591764,
      "quote": "\u201cI believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.7863761783,
      "y": 0.8645088673,
      "quote": "\u201cThe fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.2996585369,
      "y": 0.3145453036,
      "quote": "\u201cRemember, if the time should come when you have to make a choice between what is right and what is easy, remember what happened to a boy who was good, and kind, and brave, because he strayed across the path of Lord Voldemort. Remember Cedric Diggory.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.1970356703,
      "y": 0.2265650034,
      "quote": "\u201cMemories warm you up from the inside. But they also tear you apart.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.2131745219,
      "y": 0.2314645648,
      "quote": "\u201cA lie can travel half way around the world while the truth is putting on its shoes.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.443038702,
      "y": 0.265681386,
      "quote": "\u201cNever tell the truth to people who are not worthy of it.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.6102339625,
      "y": 0.3573856652,
      "quote": "\u201cBe nice to nerds. You may end up working for them. We all could.\u201d",
      "author": "Charles J. Sykes,"
  },
  {
      "x": 0.249445796,
      "y": 0.4081499875,
      "quote": "\u201cJust when you think it can't get any worse, it can. And just when you think it can't get any better, it can.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.7951324582,
      "y": 0.2676131725,
      "quote": "\u201cTis better to have loved and lostThan never to have loved at all.\u201d",
      "author": "Alfred Lord Tennyson,"
  },
  {
      "x": 0.2060036659,
      "y": 0.4034903646,
      "quote": "\u201cKnowing yourself is the beginning of all wisdom.\u201d",
      "author": "Aristotle"
  },
  {
      "x": 0.2954466939,
      "y": 0.8264958858,
      "quote": "\u201cIt's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.8255890012,
      "y": 0.9185192585,
      "quote": "\u201cI love you as certain dark things are to be loved, in secret, between the shadow and the soul.\u201d",
      "author": "Pablo Neruda,"
  },
  {
      "x": 0.8973382115,
      "y": 0.3949525654,
      "quote": "\u201cDo you remember me telling you we are practicing non-verbal spells, Potter?\"\"Yes,\" said Harry stiffly.\"Yes, sir.\"\"There's no need to call me \"sir\" Professor.\"The words had escaped him before he knew what he was saying.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.440761447,
      "y": 0.1379300803,
      "quote": "\u201cOnly the very weak-minded refuse to be influenced by literature and poetry.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4681779742,
      "y": 0.2714694738,
      "quote": "\u201cIt's the possibility of having a dream come true that makes life interesting.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.5583827496,
      "y": 0.2505047619,
      "quote": "\u201cBe not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.501439631,
      "y": 0.0046580434,
      "quote": "\u201cWhat you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain.\u201d",
      "author": "Maya Angelou,"
  },
  {
      "x": 0.7688644528,
      "y": 0.4341897666,
      "quote": "\u201cHappiness in intelligent people is the rarest thing I know.\u201d",
      "author": "Ernest Hemingway,"
  },
  {
      "x": 0.4580776691,
      "y": 0.7848151922,
      "quote": "\u201cA day without laughter is a day wasted.\u201d",
      "author": "Nicolas Chamfort"
  },
  {
      "x": 0.5174481273,
      "y": 0.2564668059,
      "quote": "\u201cHe\u00e2\u20ac\u2122s not perfect. You aren\u00e2\u20ac\u2122t either, and the two of you will never be perfect. But if he can make you laugh at least once, causes you to think twice, and if he admits to being human and making mistakes, hold onto him and give him the most you can. He isn\u00e2\u20ac\u2122t going to quote poetry, he\u00e2\u20ac\u2122s not thinking about you every moment, but he will give you a part of him that he knows you could break. Don\u00e2\u20ac\u2122t hurt him, don\u00e2\u20ac\u2122t change him, and don\u00e2\u20ac\u2122t expect for more than he can give. Don\u00e2\u20ac\u2122t analyze. Smile when he makes you happy, yell when he makes you mad, and miss him when he\u00e2\u20ac\u2122s not there. Love hard when there is love to be had. Because perfect guys don\u00e2\u20ac\u2122t exist, but there\u00e2\u20ac\u2122s always one guy that is perfect for you.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.8123080134,
      "y": 0.2583247125,
      "quote": "\u201cA person's a person, no matter how small.\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.2811074257,
      "y": 0.3944730461,
      "quote": "\u201cThe only true wisdom is in knowing you know nothing.\u201d",
      "author": "Socrates"
  },
  {
      "x": 0.5239285231,
      "y": 0.5414392948,
      "quote": "\u201cPerhaps one did not want to be loved so much as to be understood.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.5655700564,
      "y": 0.6300537586,
      "quote": "\u201cYes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.7422164083,
      "y": 0.4658753574,
      "quote": "\u201cWhen adults say, \"Teenagers think they are invincible\" with that sly, stupid smile on their faces, they don't know how right they are. We need never be hopeless, because we can never be irreparably broken. We think that we are invincible because we are. We cannot be born, and we cannot die. Like all energy, we can only change shapes and sizes and manifestations. They forget that when they get old. They get scared of losing and failing. But that part of us greater than the sum of our parts cannot begin and cannot end, and so it cannot fail.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.100793004,
      "y": 0.4642861187,
      "quote": "\u201cI became insane, with long intervals of horrible sanity.\u201d",
      "author": "Edgar Allan Poe"
  },
  {
      "x": 0.5902299285,
      "y": 0.9690718651,
      "quote": "\u201cOh, I wouldn't mind, Hazel Grace. It would be a privilege to have my heart broken by you.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.5994548202,
      "y": 0.7143418789,
      "quote": "\u201cJesus!\" Luke exclaimed.\"Actually, it's just me,\" said Simon. \"Although I've been told the resemblance is startling.\u201d",
      "author": "Cassandra Clare"
  },
  {
      "x": 0.249165833,
      "y": 0.3908364773,
      "quote": "\u201cWhen we honestly ask ourselves which person in our lives mean the most to us, we often find that it is those who, instead of giving advice, solutions, or cures, have chosen rather to share our pain and touch our wounds with a warm and tender hand. The friend who can be silent with us in a moment of despair or confusion, who can stay with us in an hour of grief and bereavement, who can tolerate not knowing, not curing, not healing and face with us the reality of our powerlessness, that is a friend who cares.\u201d",
      "author": "Henri Nouwen,"
  },
  {
      "x": 0.2153182626,
      "y": 0.6280106306,
      "quote": "\u201cNumbing the pain for a while will make it worse when you finally feel it.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8577577472,
      "y": 0.3529938161,
      "quote": "\u201cI finally understood what true love meant...love meant that you care for another person's happiness more than your own, no matter how painful the choices you face might be.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.5403252244,
      "y": 0.6541643143,
      "quote": "\u201cYou can never be overdressed or overeducated.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.7344349027,
      "y": 0.4254537523,
      "quote": "\u201cJust because you have the emotional range of a teaspoon doesn't mean we all have.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.291443646,
      "y": 0.46490255,
      "quote": "\u201cIt is one of the blessings of old friends that you can afford to be stupid with them.\u201d",
      "author": "Ralph Waldo Emerson,"
  },
  {
      "x": 0.9173691869,
      "y": 0.5789425373,
      "quote": "\u201cThe one you love and the one who loves you are never, ever the same person.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.451392293,
      "y": 0.5224579573,
      "quote": "\u201cBe careful about reading health books. Some fine day you'll die of a misprint.\u201d",
      "author": "Markus Herz"
  },
  {
      "x": 0.8803674579,
      "y": 0.6376994848,
      "quote": "\u201cHave you ever noticed how \u00e2\u20ac\u02dcWhat the hell\u00e2\u20ac\u2122 is always the right decision to make?\u201d",
      "author": "Terry Johnson,"
  },
  {
      "x": 0.3465812206,
      "y": 0.3184289932,
      "quote": "\u201cBooks are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.\u201d",
      "author": "Charles W. Eliot"
  },
  {
      "x": 0.2929874063,
      "y": 0.3417081833,
      "quote": "\u201cYou can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.2663952112,
      "y": 0.4602848589,
      "quote": "\u201cAn eye for an eye will only make the whole world blind.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.9471431375,
      "y": 0.5011351109,
      "quote": "\u201cIf you're gonna be two-faced at least make one of them pretty.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.8908250928,
      "y": 0.7073295116,
      "quote": "\u201cUntil I feared I would lose it, I never loved to read. One does not love breathing.\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.7553078532,
      "y": 0.6576070786,
      "quote": "\u201cThe saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.\u201d",
      "author": "Isaac Asimov"
  },
  {
      "x": 0.5493722558,
      "y": 0.8071957827,
      "quote": "\u201cI would rather walk with a friend in the dark, than alone in the light.\u201d",
      "author": "Helen Keller"
  },
  {
      "x": 0.3701533079,
      "y": 0.4820844829,
      "quote": "\u201cSo I walked back to my room and collapsed on the bottom bunk, thinking that if people were rain, I was drizzle and she was a hurricane.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.6399577856,
      "y": 0.5917958021,
      "quote": "\u201cMusic expresses that which cannot be put into words and that which cannot remain silent\u201d",
      "author": "Victor hugo"
  },
  {
      "x": 0.8710500598,
      "y": 0.6033349037,
      "quote": "\u201cI speak to everyone in the same way, whether he is the garbage man or the president of the university.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.2229984403,
      "y": 0.1886792779,
      "quote": "\u201cA great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.\u201d",
      "author": "William Styron,"
  },
  {
      "x": 0.2139605284,
      "y": 0.3323932588,
      "quote": "\u201cThe truth will set you free, but first it will piss you off.\u201d",
      "author": "Joe Klaas,"
  },
  {
      "x": 0.2880039811,
      "y": 0.2477544546,
      "quote": "\u201cDo you hate people?\u00e2\u20ac\ufffd\u00e2\u20ac\u0153I don't hate them...I just feel better when they're not around.\u201d",
      "author": "Charles Bukowski,"
  },
  {
      "x": 0.5765393972,
      "y": 0.3144970834,
      "quote": "\u201cCreativity is knowing how to hide your sources\u201d",
      "author": "C.E.M. Joad"
  },
  {
      "x": 0.5540790558,
      "y": 0.7939677238,
      "quote": "\u201cHow wonderful it is that nobody need wait a single moment before starting to improve the world.\u201d",
      "author": "Anne Frank,"
  },
  {
      "x": 0.3847281337,
      "y": 0.4515015781,
      "quote": "\u201cI am no bird; and no net ensnares me: I am a free human being with an independent will.\u201d",
      "author": "Charlotte Bront\u00c3\u00ab,"
  },
  {
      "x": 0.4133041501,
      "y": 0.7056708336,
      "quote": "\u201cFate is like a strange, unpopular restaurant filled with odd little waiters who bring you things you never asked for and don't always like.\u201d",
      "author": "Lemony Snicket"
  },
  {
      "x": 0.9546753764,
      "y": 0.4644087851,
      "quote": "\u201cIs this the part where you start tearing off strips of your shirt to bind my wounds?\"\"If you wanted me to rip my clothes off, you should have just asked.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2257643342,
      "y": 0.2433559597,
      "quote": "\u201cA children's story that can only be enjoyed by children is not a good children's story in the slightest.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.5831537843,
      "y": 0.1937078238,
      "quote": "\u201cThe Seven Social Sins are: Wealth without work. Pleasure without conscience. Knowledge without character. Commerce without morality. Science without humanity. Worship without sacrifice. Politics without principle.From a sermon given by Frederick Lewis Donaldson in Westminster Abbey, London, on March 20, 1925.\u201d",
      "author": "Frederick Lewis Donaldson"
  },
  {
      "x": 0.9412025809,
      "y": 0.3691512644,
      "quote": "\u201cYou will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.2483131886,
      "y": 0.4767065942,
      "quote": "\u201cIf you don't have time to read, you don't have the time (or the tools) to write. Simple as that.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.6171140075,
      "y": 0.1082264036,
      "quote": "\u201cWhen we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.7312389016,
      "y": 0.5288742781,
      "quote": "\u201cI wish I could freeze this moment, right here, right now and live in it forever.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.7516422868,
      "y": 0.6936150789,
      "quote": "\u201cThe statistics on sanity are that one out of every four people is suffering from a mental illness. Look at your 3 best friends. If they're ok, then it's you.\u201d",
      "author": "Rita Mae Brown"
  },
  {
      "x": 0.5031272769,
      "y": 0.0214799717,
      "quote": "\u201cLife is an awful, ugly place to not have a best friend.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.4921597242,
      "y": 0.2471471131,
      "quote": "\u201cHappiness is when what you think, what you say, and what you do are in harmony.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.4471463561,
      "y": 0.3737528622,
      "quote": "\u201cKeep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5754678249,
      "y": 0.8449646235,
      "quote": "\u201cNever forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.4112615585,
      "y": 0.4044446349,
      "quote": "\u201cI don't want to be a man,\" said Jace. \"I want to be an angst-ridden teenager who can't confront his own inner demons and takes it out verbally on other people instead.\"\"Well,\" said Luke, \"you're doing a fantastic job.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4916641712,
      "y": 0.7761958838,
      "quote": "\u201cI must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.\u201d",
      "author": "Frank Herbert,"
  },
  {
      "x": 0.539886713,
      "y": 0.1473345309,
      "quote": "\u201cI no longer believed in the idea of soul mates, or love at first sight. But I was beginning to believe that a very few times in your life, if you were lucky, you might meet someone who was exactly right for you. Not because he was perfect, or because you were, but because your combined flaws were arranged in a way that allowed two separate beings to hinge together.\u201d",
      "author": "Lisa Kleypas,"
  },
  {
      "x": 0.7129759192,
      "y": 0.576533556,
      "quote": "\u201cWell-behaved women seldom make history.\u201d",
      "author": "Laurel Thatcher Ulrich,"
  },
  {
      "x": 0.396821022,
      "y": 0.6181633472,
      "quote": "\u201cGive a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.3870557547,
      "y": 0.5971615314,
      "quote": "\u201cWe're all human, aren't we? Every human life is worth the same, and worth saving.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6772382855,
      "y": 0.5946948528,
      "quote": "\u201cWith great power... comes great need to take a nap. Wake me up later.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.2715078592,
      "y": 0.4997465909,
      "quote": "\u201cBeing a woman is a terribly difficult trade since it consists principally of dealings with men.\u201d",
      "author": "Joseph Conrad,"
  },
  {
      "x": 0.6034997702,
      "y": 0.2608668208,
      "quote": "\u201cOne is loved because one is loved. No reason is needed for loving.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.7712941766,
      "y": 0.1593336761,
      "quote": "\u201cEveryone thinks of changing the world, but no one thinks of changing himself.\u201d",
      "author": "Leo Tolstoy"
  },
  {
      "x": 0.7642224431,
      "y": 0.7747504711,
      "quote": "\u201cIf we find ourselves with a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.4416591525,
      "y": 0.3480984867,
      "quote": "\u201cIt's the friends you can call up at 4 a.m. that matter.\u201d",
      "author": "Marlene Dietrich"
  },
  {
      "x": 0.4960039854,
      "y": 0.5904833078,
      "quote": "\u201cBecoming fearless isn't the point. That's impossible. It's learning how to control your fear, and how to be free from it.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.5470873117,
      "y": 0.5550972223,
      "quote": "\u201cThe Road Not TakenTwo roads diverged in a yellow wood,And sorry I could not travel both\tAnd be one traveler, long I stood\tAnd looked down one as far as I could\tTo where it bent in the undergrowth;\t  Then took the other, as just as fair,\tAnd having perhaps the better claim,\tBecause it was grassy and wanted wear;\tThough as for that the passing there\tHad worn them really about the same,\t  And both that morning equally lay\tIn leaves no step had trodden black.\tOh, I kept the first for another day!\tYet knowing how way leads on to way,\tI doubted if I should ever come back.\t  I shall be telling this with a sigh\tSomewhere ages and ages hence:\tTwo roads diverged in a wood, and I\u00e2\u20ac\u201d\tI took the one less traveled by,\tAnd that has made all the difference.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.7318881154,
      "y": 0.7809379101,
      "quote": "\u201cAnd above all, watch with glittering eyes the whole world around you because the greatest secrets are always hidden in the most unlikely places. Those who don't believe in magic will never find it.\u201d",
      "author": "Roald Dahl"
  },
  {
      "x": 0.8204512,
      "y": 0.284942776,
      "quote": "\u201cSo we beat on, boats against the current, borne back ceaselessly into the past.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.9959604144,
      "y": 0.5847131014,
      "quote": "\u201cI don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.3110211492,
      "y": 0.5425614119,
      "quote": "\u201cLock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.\u201d",
      "author": "Virginia Woolf,"
  },
  {
      "x": 0.5614830852,
      "y": 0.0863960236,
      "quote": "\u201cWhen I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.6954726577,
      "y": 0.5942238569,
      "quote": "\u201cIt's far better to be unhappy alone than unhappy with someone \u00e2\u20ac\u201d so far.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.1703245044,
      "y": 0.6092526913,
      "quote": "\u201cThere's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.5720056295,
      "y": 0.5953053236,
      "quote": "\u201cI am not pretty. I am not beautiful. I am as radiant as the sun.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.5513197184,
      "y": 0.4888847768,
      "quote": "\u201cEvery man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.\u201d",
      "author": "Henry Wadsworth Longfellow"
  },
  {
      "x": 0.5731737614,
      "y": 0.6463329792,
      "quote": "\u201cIf you don't know where you're going, any road'll take you there\u201d",
      "author": "George Harrison"
  },
  {
      "x": 0.2865533233,
      "y": 0.5090764761,
      "quote": "\u201cLet me tell you this: if you meet a loner, no matter what they tell you, it's not because they enjoy solitude. It's because they have tried to blend into the world before, and people continue to disappoint them.\u201d",
      "author": "Jodi Picoult,"
  },
  {
      "x": 0.3197969794,
      "y": 0.7989594936,
      "quote": "\u201cYou can love someone so much...But you can never love people as much as you can miss them.\u201d",
      "author": "John Green"
  },
  {
      "x": 0.3693031073,
      "y": 0.0802769065,
      "quote": "\u201cIn vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.2771916986,
      "y": 0.5256024599,
      "quote": "\u201cNothing is impossible, the word itself says 'I'm possible'!\u201d",
      "author": "Audrey Hepburn"
  },
  {
      "x": 0.820585072,
      "y": 0.4789468348,
      "quote": "\u201cAll God does is watch us and kill us when we get boring. We must never, ever be boring.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.4347809553,
      "y": 0.244258821,
      "quote": "\u201cYou don't have to burn books to destroy a culture. Just get people to stop reading them.\u201d",
      "author": "Ray Bradbury"
  },
  {
      "x": 0.2581831217,
      "y": 0.4596638381,
      "quote": "\u201cThere is only one thing that makes a dream impossible to achieve: the fear of failure.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.2419688106,
      "y": 0.6394406557,
      "quote": "\u201cWe love the things we love for what they are.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.5599751472,
      "y": 0.587184906,
      "quote": "\u201cLove is needing someone. Love is putting up with someone's bad qualities because they somehow complete you.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.3561573625,
      "y": 0.6773623228,
      "quote": "\u201cPerhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage. Perhaps everything that frightens us is, in its deepest essence, something helpless that wants our love.\u201d",
      "author": "Rainer Maria Rilke,"
  },
  {
      "x": 0.3746334314,
      "y": 0.3799394369,
      "quote": "\u201cIt takes ten times as long to put yourself back together as it does to fall apart.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.118676126,
      "y": 0.4889946878,
      "quote": "\u201cI would die for you. But I won't live for you.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.2632704973,
      "y": 0.6284390688,
      "quote": "\u201cDo what you feel in your heart to be right \u00e2\u20ac\u201c for you\u00e2\u20ac\u2122ll be criticized anyway.\u201d",
      "author": "Eleanor Roosevelt"
  },
  {
      "x": 0.4501107931,
      "y": 0.2148729861,
      "quote": "\u201cLove is patient, love is kind. It does not envy, it does not boast, it is not proud. It is not rude, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.\u201d",
      "author": "Anonymous,"
  },
  {
      "x": 0.6506553292,
      "y": 0.7189182043,
      "quote": "\u201cI can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.\u201d",
      "author": "Herbert Bayard Swope"
  },
  {
      "x": 0.7062777877,
      "y": 0.419228822,
      "quote": "\u201c[...]the only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars and in the middle you see the blue centerlight pop and everybody goes \u00e2\u20ac\u0153Awww!\u201d",
      "author": "Jack Kerouac,"
  },
  {
      "x": 0.7764080167,
      "y": 0.2293686569,
      "quote": "\u201cThis life\u00e2\u20ac\u2122s hard, but it\u00e2\u20ac\u2122s harder if you\u00e2\u20ac\u2122re stupid.\u201d",
      "author": "George V. Higgins,"
  },
  {
      "x": 0.5544694662,
      "y": 0.4823897779,
      "quote": "\u201cI refuse to answer that question on the grounds that I don't know the answer\u201d",
      "author": "Douglas Adams"
  },
  {
      "x": 0.2418392897,
      "y": 0.4774447978,
      "quote": "\u201cSometimes I can hear my bones straining under the weight of all the lives I'm not living.\u201d",
      "author": "Jonathan Safran Foer,"
  },
  {
      "x": 0.3023239374,
      "y": 0.4033664763,
      "quote": "\u201cWhat a treacherous thing to believe that a person is more than a person.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.6248969436,
      "y": 0.6133100986,
      "quote": "\u201cNever love anyone who treats you like you're ordinary.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.7506687045,
      "y": 0.1350705475,
      "quote": "\u201cMaybe our favorite quotations say more about us than about the stories and people we're quoting.\u201d",
      "author": "John Green"
  },
  {
      "x": 0.1223345399,
      "y": 0.5171425343,
      "quote": "\u201cSo, I love you because the entire universe conspired to help me find you.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.3938447237,
      "y": 0.5076698065,
      "quote": "\u201cWit beyond measure is man\u00e2\u20ac\u2122s greatest treasure.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5449957252,
      "y": 0.2481695712,
      "quote": "\u201cSometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.656408906,
      "y": 0.4058096707,
      "quote": "\u201cNever doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.\u201d",
      "author": "Margaret Mead"
  },
  {
      "x": 0.3450664282,
      "y": 0.4027766585,
      "quote": "\u201cMost people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.5071983933,
      "y": 0.0320850387,
      "quote": "\u201cDeath ends a life, not a relationship.\u201d",
      "author": "Mitch Albom,"
  },
  {
      "x": 0.305947423,
      "y": 0.2333619297,
      "quote": "\u201cHappiness is not something ready made. It comes from your own actions.\u201d",
      "author": "Dalai Lama XIV"
  },
  {
      "x": 0.3147416115,
      "y": 0.4434252679,
      "quote": "\u201cCount your age by friends, not years. Count your life by smiles, not tears.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.8102461696,
      "y": 0.2653152347,
      "quote": "\u201cWe are only as strong as we are united, as weak as we are divided.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.424405694,
      "y": 0.752084136,
      "quote": "\u201cIf you were half as funny as you think you are, you'd be twice as funny as you really are.\u201d",
      "author": "H.N. Turteltaub,"
  },
  {
      "x": 0.5222569704,
      "y": 0.1605778635,
      "quote": "\u201cI carry your heart with me (I carry it in my heart)I am never without it (anywhereI go you go,my dear; and whatever is done by only me is your doing,my darling)I fear no fate (for you are my fate,my sweet)I want no world (for beautiful you are my world,my true)and it's you are whatever a moon has always meant and whatever a sun will always sing is youhere is the deepest secret nobody knows(here is the root of the root and the bud of the bud and the sky of the sky of a tree called life; which growshigher than the soul can hope or mind can hide)and this is the wonder that's keeping the stars apartI carry your heart (I carry it in my heart)\u201d",
      "author": "E.E. Cummings"
  },
  {
      "x": 0.2849128842,
      "y": 0.2336764038,
      "quote": "\u201cHold fast to dreams,For if dreams dieLife is a broken-winged bird,That cannot fly.\u201d",
      "author": "Langston Hughes"
  },
  {
      "x": 0.2433685064,
      "y": 0.3601768017,
      "quote": "\u201cNever memorize something that you can look up.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.0664207637,
      "y": 0.2909206748,
      "quote": "\u201cIndifference and neglect often do much more damage than outright dislike.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4828865528,
      "y": 0.531572938,
      "quote": "\u201cThe weak can never forgive. Forgiveness is the attribute of the strong.\u201d",
      "author": "Mahatma Gandhi,"
  },
  {
      "x": 0.3341792226,
      "y": 0.2170206308,
      "quote": "\u201cAll that we see or seem is but a dream within a dream.\u201d",
      "author": "Edgar Allan Poe"
  },
  {
      "x": 0.5914151669,
      "y": 0.4014096558,
      "quote": "\u201cPeace begins with a smile..\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.7170869708,
      "y": 0.5531855822,
      "quote": "\u201cAll we have to decide is what to do with the time that is given us.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.866191566,
      "y": 0.474142164,
      "quote": "\u201cThe Christian does not think God will love us because we are good, but that God will make us good because He loves us.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.1010073721,
      "y": 0.6583125591,
      "quote": "\u201cDo not read, as children do, to amuse yourself, or like the ambitious, for the purpose of instruction. No, read in order to live.\u201d",
      "author": "Gustave Flaubert"
  },
  {
      "x": 0.6128274202,
      "y": 0.9949823618,
      "quote": "\u201cI like the night. Without the dark, we'd never see the stars.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.2360078692,
      "y": 0.3525297046,
      "quote": "\u201cWe came to see Jace. Is he alright?\"\"I don't know,\" Magnus said. \"Does he normally just lie on the floor like that without moving?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.6927003264,
      "y": 0.1177226603,
      "quote": "\u201cThe only thing worse than a boy who hates you: a boy that loves you.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.811637938,
      "y": 0.9122328758,
      "quote": "\u201cImagining the future is a kind of nostalgia. (...) You spend your whole life stuck in the labyrinth, thinking about how you'll escape it one day, and how awesome it will be, and imagining that future keeps you going, but you never do it. You just use the future to escape the present.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.8175807595,
      "y": 0.9284037352,
      "quote": "\u201cIs it true that you shouted at Professor Umbridge?\"\"Yes.\"\"You called her a liar?\"\"Yes.\"\"You told her He Who Must Not Be Named is back?\"\"Yes.\"\"Have a biscuit, Potter.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.1742345393,
      "y": 0.3210882246,
      "quote": "\u201cMr. Moony presents his compliments to Professor Snape, and begs him to keep his abnormally large nose out of other people's business.Mr. Prongs agrees with Mr. Moony, and would like to add that Professor Snape is an ugly git.Mr. Padfoot would like to register his astonishment that an idiot like that ever became a professor.Mr. Wormtail bids Professor Snape good day, and advises him to wash his hair, the slimeball.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5277195573,
      "y": 0.6559597254,
      "quote": "\u201cYou talk when you cease to be at peace with your thoughts.\u201d",
      "author": "Kahlil Gibran,"
  },
  {
      "x": 0.5839818716,
      "y": 0.3290857077,
      "quote": "\u201cSo, I guess we are who we are for alot of reasons. And maybe we'll never know most of them. But even if we don't have the power to choose where we come from, we can still choose where we go from there. We can still do things. And we can try to feel okay about them.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.3093076944,
      "y": 0.813570857,
      "quote": "\u201cYou're going to come across people in your life who will say all the right words at all the right times. But in the end, it's always their actions you should judge them by. It's actions, not words, that matter.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.3485707045,
      "y": 0.5496990681,
      "quote": "\u201cYou are my best friend as well as my lover, and I do not know which side of you I enjoy the most. I treasure each side, just as I have treasured our life together.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.2212091684,
      "y": 0.7935574055,
      "quote": "\u201cYou are, and always have been, my dream.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.7823655009,
      "y": 0.8446336985,
      "quote": "\u201cHe's more myself than I am. Whatever our souls are made of, his and mine are the same.\u201d",
      "author": "Emily Bront\u00c3\u00ab,"
  },
  {
      "x": 0.7180076241,
      "y": 0.3142722845,
      "quote": "\u201cHe can run faster than Severus Snape confronted with shampoo.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4703464508,
      "y": 0.7501070499,
      "quote": "\u201cDon't think or judge, just listen.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.3675348163,
      "y": 0.7933255434,
      "quote": "\u201cFor attractive lips, speak words of kindness.For lovely eyes, seek out the good in people.For a slim figure, share your food with the hungry.For beautiful hair, let a child run his fingers through it once a day.For poise, walk with the knowledge you\u00e2\u20ac\u2122ll never walk alone....We leave you a tradition with a future.The tender loving care of human beings will never become obsolete.People even more than things have to be restored, renewed, revived, reclaimed and redeemed and redeemed and redeemed.Never throw out anybody.Remember, if you ever need a helping hand, you\u00e2\u20ac\u2122ll find one at the end of your arm.As you grow older, you will discover that you have two hands: one for helping yourself, the other for helping others.Your \u00e2\u20ac\u0153good old days\u00e2\u20ac\ufffd are still ahead of you, may you have many of them.\u201d",
      "author": "Sam Levenson,"
  },
  {
      "x": 0.5870500803,
      "y": 0.1598761082,
      "quote": "\u201cIn the depth of winter, I finally learned that within me there lay an invincible summer.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.9375184178,
      "y": 0.585765481,
      "quote": "\u201cYou cannot find peace by avoiding life.\u201d",
      "author": "Michael Cunningham,"
  },
  {
      "x": 0.7351719737,
      "y": 0.7105506659,
      "quote": "\u201cIn a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books through your skin, without even opening them.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5332276821,
      "y": 0.0867352337,
      "quote": "\u201cFriendship is unnecessary, like philosophy, like art.... It has no survival value; rather it is one of those things which give value to survival.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.4356057048,
      "y": 0.823366046,
      "quote": "\u201cI would always rather be happy than dignified.\u201d",
      "author": "Charlotte Bront\u00c3\u00ab,"
  },
  {
      "x": 0.145247072,
      "y": 0.4314312637,
      "quote": "\u201cAnd now I\u00e2\u20ac\u2122m looking at you,\u00e2\u20ac\ufffd he said, \u00e2\u20ac\u0153and you\u00e2\u20ac\u2122re asking me if I still want you, as if I could stop loving you. As if I would want to give up the thing that makes me stronger than anything else ever has. I never dared give much of myself to anyone before \u00e2\u20ac\u201c bits of myself to the Lightwoods, to Isabelle and Alec, but it took years to do it \u00e2\u20ac\u201c but, Clary, since the first time I saw you, I have belonged to you completely. I still do. If you want me.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4710795283,
      "y": 0.5946052074,
      "quote": "\u201cGrief does not change you, Hazel. It reveals you.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.271160841,
      "y": 0.2870596349,
      "quote": "\u201cPromise YourselfTo be so strong that nothingcan disturb your peace of mind.To talk health, happiness, and prosperityto every person you meet.To make all your friends feelthat there is something in themTo look at the sunny side of everythingand make your optimism come true.To think only the best, to work only for the best,and to expect only the best.To be just as enthusiastic about the success of othersas you are about your own.To forget the mistakes of the pastand press on to the greater achievements of the future.To wear a cheerful countenance at all timesand give every living creature you meet a smile.To give so much time to the improvement of yourselfthat you have no time to criticize others.To be too large for worry, too noble for anger, too strong for fear,and too happy to permit the presence of trouble.To think well of yourself and to proclaim this fact to the world,not in loud words but great deeds.To live in faith that the whole world is on your sideso long as you are true to the best that is in you.\u201d",
      "author": "Christian D. Larson,"
  },
  {
      "x": 0.0712721944,
      "y": 0.623791337,
      "quote": "\u201cFacts do not cease to exist because they are ignored.\u201d",
      "author": "Aldous Huxley,"
  },
  {
      "x": 0.7278130651,
      "y": 0.262722224,
      "quote": "\u201cHappy Hunger Games! And may the odds be ever in your favor.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.5482313633,
      "y": 0.5000631809,
      "quote": "\u201cThose who believe in telekinetics, raise my hand.\u201d",
      "author": "Kurt Vonnegut"
  },
  {
      "x": 0.704202354,
      "y": 0.8090596199,
      "quote": "\u201cI hope she'll be a fool -- that's the best thing a girl can be in this world, a beautiful little fool.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.5504658818,
      "y": 0.9400626421,
      "quote": "\u201cWhen you're in jail, a good friend will be trying to bail you out. A best friend will be in the cell next to you saying, 'Damn, that was fun'.\u201d",
      "author": "Groucho Marx"
  },
  {
      "x": 0.5540751219,
      "y": 0.513204813,
      "quote": "\u201cDon't touch any of my weapons without my permission.\"\"Well, there goes my plan for selling them all on eBay,\" Clary muttered.\"Selling them on what?\"Clary smiled blandly at him. \"A mythical place of great magical power.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5217814445,
      "y": 0.3451245129,
      "quote": "\u201cSome humans would do anything to see if it was possible to do it. If you put a large switch in some cave somewhere, with a sign on it saying 'End-of-the-World Switch. PLEASE DO NOT TOUCH', the paint wouldn't even have time to dry.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.8366294503,
      "y": 0.3284235001,
      "quote": "\u201cWhatever you are, be a good one.\u201d",
      "author": "Abraham Lincoln"
  },
  {
      "x": 0.4617500901,
      "y": 0.4989827573,
      "quote": "\u201cIf more of us valued food and cheer and song above hoarded gold, it would be a merrier world.\u201d",
      "author": "J.R.R. Tolkien"
  },
  {
      "x": 0.7384263873,
      "y": 0.6608880758,
      "quote": "\u201cI wanted a perfect ending. Now I've learned, the hard way, that some poems don't rhyme, and some stories don't have a clear beginning, middle, and end. Life is about not knowing, having to change, taking the moment and making the best of it, without knowing what's going to happen next.Delicious Ambiguity.\u201d",
      "author": "Gilda Radner"
  },
  {
      "x": 0.4391387105,
      "y": 0.3012574613,
      "quote": "\u201cA good friend will always stab you in the front.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.8260759711,
      "y": 0.3666955829,
      "quote": "\u201cPromise me you'll always remember: You're braver than you believe, and stronger than you seem, and smarter than you think.\u201d",
      "author": "Carter Crocker"
  },
  {
      "x": 0.4626827836,
      "y": 0.5862320662,
      "quote": "\u201cFor instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much\u00e2\u20ac\u201dthe wheel, New York, wars and so on\u00e2\u20ac\u201dwhilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man\u00e2\u20ac\u201dfor precisely the same reasons.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.7653377652,
      "y": 0.3987280428,
      "quote": "\u201cWhen you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.4197388291,
      "y": 0.56315732,
      "quote": "\u201cThere's a fine line between genius and insanity. I have erased this line.\u201d",
      "author": "Oscar Levant"
  },
  {
      "x": 0.4205245972,
      "y": 0.2806963325,
      "quote": "\u201cIf ever there is tomorrow when we're not together... there is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we're apart... I'll always be with you.\u201d",
      "author": "Carter Crocker"
  },
  {
      "x": 0.9509209991,
      "y": 0.543622613,
      "quote": "\u201cBe kind, for everyone you meet is fighting a harder battle.\u201d",
      "author": "Plato"
  },
  {
      "x": 0.2894560695,
      "y": 0.5810633898,
      "quote": "\u201cSleep is good, he said, and books are better.\u201d",
      "author": "George R. R. Martin"
  },
  {
      "x": 0.3604595065,
      "y": 0.4674257338,
      "quote": "\u201cWhere there is love there is life.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.0829633772,
      "y": 0.6204770803,
      "quote": "\u201cYou can't force love, I realized. It's there or it isn't. If it's not there, you've got to be able to admit it. If it is there, you've got to do whatever it takes to protect the ones you love.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.6175874472,
      "y": 0.2308613062,
      "quote": "\u201cMay you live every day of your life.\u201d",
      "author": "Jonathan Swift"
  },
  {
      "x": 0.9078196883,
      "y": 0.4107239544,
      "quote": "\u201cTwo wrongs don't make a right, but they make a good excuse.\u201d",
      "author": "Thomas Szasz"
  },
  {
      "x": 0.260347724,
      "y": 0.4022205174,
      "quote": "\u201cWicked people never have time for reading. It's one of the reasons for their wickedness.\u201d",
      "author": "Lemony Snicket"
  },
  {
      "x": 0.666402638,
      "y": 0.2158575058,
      "quote": "\u201cWomen are meant to be loved, not to be understood.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.7851032615,
      "y": 0.4610550702,
      "quote": "\u201cAbove all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.\u201d",
      "author": "Fyodor Dostoevsky,"
  },
  {
      "x": 0.587548852,
      "y": 0.3102585971,
      "quote": "\u201cAnd those who were seen dancing were thought to be insane by those who could not hear the music.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.62190485,
      "y": 0.0617324412,
      "quote": "\u201cWhen it comes down to it, I let them think what they want. If they care enough to bother with what I do, then I'm already better than them.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.8543781638,
      "y": 0.9393819571,
      "quote": "\u201cWho controls the past controls the future. Who controls the present controls the past.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.3053787947,
      "y": 0.7856538296,
      "quote": "\u201cDeath's got an Invisibility Cloak?\" Harry interrupted again.\"So he can sneak up on people,\" said Ron. \"Sometimes he gets bored of running at them, flapping his arms and shrieking...\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8135152459,
      "y": 0.7198486328,
      "quote": "\u201cYou will always be fond of me. I represent to you all the sins you never had the courage to commit.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.4267439842,
      "y": 0.796303153,
      "quote": "\u201cMan is the only creature who refuses to be what he is.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.8029652238,
      "y": 0.5951094627,
      "quote": "\u201cI think you still love me, but we can\u00e2\u20ac\u2122t escape the fact that I\u00e2\u20ac\u2122m not enough for you. I knew this was going to happen. So I\u00e2\u20ac\u2122m not blaming you for falling in love with another woman. I\u00e2\u20ac\u2122m not angry, either. I should be, but I\u00e2\u20ac\u2122m not. I just feel pain. A lot of pain. I thought I could imagine how much this would hurt, but I was wrong.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.6485132575,
      "y": 0.4872605503,
      "quote": "\u201cSubstitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.4360918403,
      "y": 0.3219890296,
      "quote": "\u201cI've never fooled anyone. I've let people fool themselves. They didn't bother to find out who and what I was. Instead they would invent a character for me. I wouldn't argue with them. They were obviously loving somebody I wasn't.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.437725246,
      "y": 0.401267916,
      "quote": "\u201cFirst they ignore you. Then they ridicule you. And then they attack you and want to burn you. And then they build monuments to you.\u201d",
      "author": "Nicholas Klein"
  },
  {
      "x": 0.5494727492,
      "y": 0.7005550861,
      "quote": "\u201cWe write to taste life twice, in the moment and in retrospect.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.5001425743,
      "y": 0.8810271025,
      "quote": "\u201cYou know the world is going crazy when the best rapper is a white guy, the best golfer is a black guy, the tallest guy in the NBA is Chinese, the Swiss hold the America's Cup, France is accusing the U.S. of arrogance, Germany doesn't want to go to war, and the three most powerful men in America are named \"Bush\", \"Dick\", and \"Colin.\" Need I say more?\u201d",
      "author": "Chris Rock"
  },
  {
      "x": 0.762064755,
      "y": 0.7082645893,
      "quote": "\u201cIt means 'Shadowhunters: Looking Better in Black Than the Widows of our Enemies Since 1234'.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.274040699,
      "y": 0.5992420912,
      "quote": "\u201cI don't want to go to heaven. None of my friends are there.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.5604115725,
      "y": 0.4863301814,
      "quote": "\u201cI have hated words and I have loved them, and I hope I have made them right.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.1359956563,
      "y": 0.5569278002,
      "quote": "\u201cSome women choose to follow men, and some women choose to follow their dreams. If you're wondering which way to go, remember that your career will never wake up and tell you that it doesn't love you anymore.\u201d",
      "author": "Lady Gaga"
  },
  {
      "x": 0.3977390528,
      "y": 0.6055290699,
      "quote": "\u201cEvery heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet.\u201d",
      "author": "Plato"
  },
  {
      "x": 0.3521069288,
      "y": 0.7723745108,
      "quote": "\u201cI love sleep. My life has the tendency to fall apart when I'm awake, you know?\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.6637834907,
      "y": 0.2067119479,
      "quote": "\u201cI, with a deeper instinct, choose a man who compels my strength, who makes enormous demands on me, who does not doubt my courage or my toughness, who does not believe me na\u00c3\u00afve or innocent, who has the courage to treat me like a woman.\u201d",
      "author": "Ana\u00c3\u00afs Nin"
  },
  {
      "x": 0.631714642,
      "y": 0.4619217217,
      "quote": "\u201cA clever person solves a problem. A wise person avoids it.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.0629051328,
      "y": 0.5238265991,
      "quote": "\u201cIt's really a wonder that I haven't dropped all my ideals, because they seem so absurd and impossible to carry out. Yet I keep them, because in spite of everything, I still believe that people are really good at heart.\u201d",
      "author": "Anne Frank,"
  },
  {
      "x": 0.1740777791,
      "y": 0.6424481869,
      "quote": "\u201cNobody has ever measured, not even poets, how much the heart can hold.\u201d",
      "author": "Zelda Fitzgerald"
  },
  {
      "x": 0.247431457,
      "y": 0.6487340927,
      "quote": "\u201cDoubt thou the stars are fire;Doubt that the sun doth move;Doubt truth to be a liar;But never doubt I love.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.6475554705,
      "y": 0.8709968328,
      "quote": "\u201cThe best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds. And that's what you've given me. That's what I'd hoped to give you forever\u201d",
      "author": "Nicholas Sparks"
  },
  {
      "x": 0.4889414907,
      "y": 0.3629496098,
      "quote": "\u201cLet us find the dam snack bar,\" Zoe said. \"We should eat while we can.\"Grover cracked a smile. \"The dam snack bar?\"Zoe blinked. \"Yes. What is funny?\"\"Nothing,\" Grover said, trying to keep a straight face. \"I could use some dam french fries.\"Even Thalia smiled at that. \"And I need to use the dam restroom.\"...I started cracking up, and Thalia and Grover joined in, while Zoe just looked at me. \"I do not understand.\"\"I want to use the dam water fountain,\" Grover said.\"And...\" Thalia tried to catch her breath. \"I want to buy a dam t-shirt.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.6369604468,
      "y": 0.5571120977,
      "quote": "\u201cWe all die. The goal isn't to live forever, the goal is to create something that will.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.673134625,
      "y": 0.8886581659,
      "quote": "\u201cOnce upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.\u201d",
      "author": "Nicole Krauss,"
  },
  {
      "x": 0.3119556308,
      "y": 0.5237629414,
      "quote": "\u201cWell, don't expect us to be too impressed. We just saw Finnick Odair in his underwear.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.3866083026,
      "y": 0.8353737593,
      "quote": "\u201cThere are two basic motivating forces: fear and love. When we are afraid, we pull back from life. When we are in love, we open to all that life has to offer with passion, excitement, and acceptance. We need to learn to love ourselves first, in all our glory and our imperfections. If we cannot love ourselves, we cannot fully open to our ability to love others or our potential to create. Evolution and all hopes for a better world rest in the fearlessness and open-hearted vision of people who embrace life.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.3559821248,
      "y": 0.1223778427,
      "quote": "\u201cThe meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.\u201d",
      "author": "Carl Gustav Jung"
  },
  {
      "x": 0.4017704129,
      "y": 0.3811364174,
      "quote": "\u201cIt's only after we've lost everything that we're free to do anything.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.700068891,
      "y": 0.6025032997,
      "quote": "\u201cGet busy living or get busy dying.\u201d",
      "author": "Stephen King,"
  },
  {
      "x": 0.5768948793,
      "y": 0.2635110021,
      "quote": "\u201cI can believe things that are true and things that aren't true and I can believe things where nobody knows if they're true or not. I can believe in Santa Claus and the Easter Bunny and the Beatles and Marilyn Monroe and Elvis and Mister Ed. Listen - I believe that people are perfectable, that knowledge is infinite, that the world is run by secret banking cartels and is visited by aliens on a regular basis, nice ones that look like wrinkled lemurs and bad ones who mutilate cattle and want our water and our women. I believe that the future sucks and I believe that the future rocks and I believe that one day White Buffalo Woman is going to come back and kick everyone's ass. I believe that all men are just overgrown boys with deep problems communicating and that the decline in good sex in America is coincident with the decline in drive-in movie theaters from state to state. I believe that all politicians are unprincipled crooks and I still believe that they are better than the alternative. I believe that California is going to sink into the sea when the big one comes, while Florida is going to dissolve into madness and alligators and toxic waste. I believe that antibacterial soap is destroying our resistance to dirt and disease so that one day we'll all be wiped out by the common cold like martians in War of the Worlds. I believe that the greatest poets of the last century were Edith Sitwell and Don Marquis, that jade is dried dragon sperm, and that thousands of years ago in a former life I was a one-armed Siberian shaman. I believe that mankind's destiny lies in the stars. I believe that candy really did taste better when I was a kid, that it's aerodynamically impossible for a bumble bee to fly, that light is a wave and a particle, that there's a cat in a box somewhere who's alive and dead at the same time (although if they don't ever open the box to feed it it'll eventually just be two different kinds of dead), and that there are stars in the universe billions of years older than the universe itself. I believe in a personal god who cares about me and worries and oversees everything I do. I believe in an impersonal god who set the universe in motion and went off to hang with her girlfriends and doesn't even know that I'm alive. I believe in an empty and godless universe of causal chaos, background noise, and sheer blind luck. I believe that anyone who says sex is overrated just hasn't done it properly. I believe that anyone who claims to know what's going on will lie about the little things too. I believe in absolute honesty and sensible social lies. I believe in a woman's right to choose, a baby's right to live, that while all human life is sacred there's nothing wrong with the death penalty if you can trust the legal system implicitly, and that no one but a moron would ever trust the legal system. I believe that life is a game, that life is a cruel joke, and that life is what happens when you're alive and that you might as well lie back and enjoy it.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.9433549047,
      "y": 0.5367014408,
      "quote": "\u201cIf my life is going to mean anything, I have to live it myself.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.7198111415,
      "y": 0.5612604618,
      "quote": "\u201cLibraries were full of ideas\u00e2\u20ac\u201dperhaps the most dangerous and powerful of all weapons.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.4626148343,
      "y": 0.2763655186,
      "quote": "\u201cYou educate a man; you educate a man. You educate a woman; you educate a generation.\u201d",
      "author": "Brigham Young"
  },
  {
      "x": 0.5175305605,
      "y": 0.6733430624,
      "quote": "\u201cWhen someone shows you who they are believe them the first time.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.2487347126,
      "y": 0.1897021234,
      "quote": "\u201cAnd once the storm is over, you won\u00e2\u20ac\u2122t remember how you made it through, how you managed to survive. You won\u00e2\u20ac\u2122t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won\u00e2\u20ac\u2122t be the same person who walked in. That\u00e2\u20ac\u2122s what this storm\u00e2\u20ac\u2122s all about.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.4928813577,
      "y": 0.6201630831,
      "quote": "\u201cI believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.\u201d",
      "author": "Robert Fulghum,"
  },
  {
      "x": 0.1675252318,
      "y": 0.3806568682,
      "quote": "\u201cIf the world were merely seductive, that would be easy. If it were merely challenging, that would be no problem. But I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.\u201d",
      "author": "E.B. White"
  },
  {
      "x": 0.8136871457,
      "y": 0.9244354963,
      "quote": "\u201cChance is perhaps the pseudonym of God when he does not want to sign.\u201d",
      "author": "Th\u00c3\u00a9ophile Gautier"
  },
  {
      "x": 0.4025024772,
      "y": 0.713496089,
      "quote": "\u201cYou're a prefect? Oh Ronnie! That's everyone in the family!\"\"What are Fred and I? Next door neighbors?\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.3411297202,
      "y": 0.7276903391,
      "quote": "\u201cThese woods are lovely, dark and deep,But I have promises to keep,And miles to go before I sleep,And miles to go before I sleep.\u201d",
      "author": "Robert Frost,"
  },
  {
      "x": 0.2445191741,
      "y": 0.4887593687,
      "quote": "\u201cWe fell in love, despite our differences, and once we did, something rare and beautiful was created. For me, love like that has only happened once, and that's why every minute we spent together has been seared in my memory. I'll never forget a single moment of it.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.7480434775,
      "y": 0.5572645664,
      "quote": "\u201cWe loved with a love that was more than love.\u201d",
      "author": "Edgar Allen Poe"
  },
  {
      "x": 0.8267040849,
      "y": 0.4999881685,
      "quote": "\u201cGoing to church doesn\u00e2\u20ac\u2122t make you a Christian any more than going to a garage makes you an automobile.\u201d",
      "author": "Billy Sunday,"
  },
  {
      "x": 0.2624896169,
      "y": 0.604870677,
      "quote": "\u201cReader, suppose you were an idiot. And suppose you were a member of Congress. But I repeat myself.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5720152259,
      "y": 0.5285917521,
      "quote": "\u201cTo love. To be loved. To never forget your own insignificance. To never get used to the unspeakable violence and the vulgar disparity of life around you. To seek joy in the saddest places. To pursue beauty to its lair. To never simplify what is complicated or complicate what is simple. To respect strength, never power. Above all, to watch. To try and understand. To never look away. And never, never to forget.\u201d",
      "author": "Arundhati Roy,"
  },
  {
      "x": 0.3484395742,
      "y": 0.2142845392,
      "quote": "\u201cAll the world is made of faith, and trust, and pixie dust.\u201d",
      "author": "J.M. Barrie,"
  },
  {
      "x": 0.7267008424,
      "y": 0.4669936001,
      "quote": "\u201cYour task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.0448026359,
      "y": 0.5337077379,
      "quote": "\u201cIt is sometimes an appropriate response to reality to go insane.\u201d",
      "author": "Philip K. Dick,"
  },
  {
      "x": 0.8735528588,
      "y": 0.6223365068,
      "quote": "\u201cAnd now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry,"
  },
  {
      "x": 0.4081500769,
      "y": 0.2568598986,
      "quote": "\u201cBooks are the perfect entertainment: no commercials, no batteries, hours of enjoyment for each dollar spent. What I wonder is why everybody doesn't carry a book around for those inevitable dead spots in life.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.7060832381,
      "y": 0.6513125896,
      "quote": "\u201cAttitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.0924012065,
      "y": 0.7029567957,
      "quote": "\u201cYou can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes.\u201d",
      "author": "A.A. Milne,"
  },
  {
      "x": 0.4776165485,
      "y": 0.5931982994,
      "quote": "\u201cThe fault, dear Brutus, is not in our stars, but in ourselves.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.553573072,
      "y": 0.3381991088,
      "quote": "\u201cOut beyond ideas of wrongdoing and rightdoing there is a field.I'll meet you there.When the soul lies down in that grassthe world is too full to talk about.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.0936034024,
      "y": 0.4937929213,
      "quote": "\u201cWe have to dare to be ourselves, however frightening or strange that self may prove to be.\u201d",
      "author": "May Sarton"
  },
  {
      "x": 0.1637017727,
      "y": 0.5027581453,
      "quote": "\u201cThis is a good sign, having a broken heart. It means we have tried for something.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.669973135,
      "y": 0.1322785914,
      "quote": "\u201cEleanor was right. She never looked nice. She looked like art, and art wasn't supposed to look nice; it was supposed to make you feel something.\u201d",
      "author": "Rainbow Rowell,"
  },
  {
      "x": 0.8081164956,
      "y": 0.8831223249,
      "quote": "\u201cIsn't it nice to think that tomorrow is a new day with no mistakes in it yet?\u201d",
      "author": "L.M. Montgomery"
  },
  {
      "x": 0.3277415037,
      "y": 0.157124266,
      "quote": "\u201cI DON'T CARE!\" Harry yelled at them, snatching up a lunascope and throwing it into the fireplace. \"I'VE HAD ENOUGH, I'VE SEEN ENOUGH, I WANT OUT, I WANT IT TO END, I DON'T CARE ANYMORE!\"\"You do care,\" said Dumbledore. He had not flinched or made a single move to stop Harry demolishing his office. His expression was calm, almost detached. \"You care so much you feel as though you will bleed to death with the pain of it.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6838214993,
      "y": 0.4388349354,
      "quote": "\u201cAnyone who lives within their means suffers from a lack of imagination.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4886080623,
      "y": 0.8866307735,
      "quote": "\u201cI do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.3499668837,
      "y": 0.8220649958,
      "quote": "\u201cAnd I'm suppose to sit by while you date boys and fall in love with someone else, get married...?\" His voice tightened. \"And meanwhile, I'll die a little bit more every day, watching.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.8621619344,
      "y": 0.4560988843,
      "quote": "\u201cAnd so the lion fell in love with the lamb\u00e2\u20ac\u00a6\" he murmured. I looked away, hiding my eyes as I thrilled to the word.\"What a stupid lamb,\" I sighed.\"What a sick, masochistic lion.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.3484771252,
      "y": 0.310584873,
      "quote": "\u201cLet us read, and let us dance; these two amusements will never do any harm to the world.\u201d",
      "author": "Voltaire"
  },
  {
      "x": 0.838254869,
      "y": 0.5094997883,
      "quote": "\u201cUnless someone like you cares a whole awful lot,Nothing is going to get better. It's not.\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.5070075989,
      "y": 0.6734149456,
      "quote": "\u201cLife is a book and there are a thousand pages I have not yet read.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3970885277,
      "y": 0.7354540825,
      "quote": "\u201cThere will come a time when all of us are dead. All of us. There will come a time when there are no human beings remaining to remember that anyone ever existed or that our species ever did anything. There will be no one left to remember Aristotle or Cleopatra, let alone you. Everything that we did and built and wrote and thought and discovered will be forgotten and all of this will have been for naught. Maybe that time is coming soon and maybe it is millions of years away, but even if we survive the collapse of our sun, we will not survive forever. There was time before organisms experienced consciousness, and there will be time after. And if the inevitability of human oblivion worries you, I encourage you to ignore it. God knows that\u00e2\u20ac\u2122s what everyone else does.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.9510526061,
      "y": 0.51256001,
      "quote": "\u201cDeep in the meadow, hidden far awayA cloak of leaves, a moonbeam rayForget your woes and let your troubles layAnd when it's morning again, they'll wash awayHere it's safe, here it's warmHere the daisies guard you from every harmHere your dreams are sweet and tomorrow brings them trueHere is the place where I love you.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.3965334892,
      "y": 0.4616934955,
      "quote": "\u201cSome books should be tasted, some devoured, but only a few should be chewed and digested thoroughly.\u201d",
      "author": "Sir Francis Bacon"
  },
  {
      "x": 0.1296111345,
      "y": 0.6562820673,
      "quote": "\u201cTell me, what is it you plan to do with your one wild and precious life?\u201d",
      "author": "Mary Oliver"
  },
  {
      "x": 0.5796906948,
      "y": 0.6858870983,
      "quote": "\u201cTo the people who look at the stars and wish, Rhys.\"Rhys clinked his glass against mine. \u00e2\u20ac\u0153To the stars who listen\u00e2\u20ac\u201d and the dreams that are answered.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.5166214705,
      "y": 0.4429025948,
      "quote": "\u201cFor those who believe in God, most of the big questions are answered. But for those of us who can't readily accept the God formula, the big answers don't remain stone-written. We adjust to new conditions and discoveries. We are pliable. Love need not be a command nor faith a dictum. I am my own god. We are here to unlearn the teachings of the church, state, and our educational system. We are here to drink beer. We are here to kill war. We are here to laugh at the odds and live our lives so well that Death will tremble to take us.\u201d",
      "author": "Charles Bukowski"
  },
  {
      "x": 0.7633638978,
      "y": 0.4868446887,
      "quote": "\u201cThe planet is fine. The people are fucked.\u201d",
      "author": "George Carlin"
  },
  {
      "x": 0.6757134795,
      "y": 0.3137049377,
      "quote": "\u201cNever laugh at live dragons.\u201d",
      "author": "J.R.R. Tolkien"
  },
  {
      "x": 0.8544065356,
      "y": 0.3876974583,
      "quote": "\u201cIt is the unknown we fear when we look upon death and darkness, nothing more.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5446584821,
      "y": 0.8370196819,
      "quote": "\u201cIt is the mark of an educated mind to be able to entertain a thought without accepting it.\u201d",
      "author": "Aristotle,"
  },
  {
      "x": 0.9290605187,
      "y": 0.4939111173,
      "quote": "\u201cI wanted so badly to lie down next to her on the couch, to wrap my arms around her and sleep. Not fuck, like in those movies. Not even have sex. Just sleep together in the most innocent sense of the phrase. But I lacked the courage and she had a boyfriend and I was gawky and she was gorgeous and I was hopelessly boring and she was endlessly fascinating. So I walked back to my room and collapsed on the bottom bunk, thinking that if people were rain, I was drizzle and she was hurricane.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.9691044688,
      "y": 0.5914419889,
      "quote": "\u201cWhen I have a little money, I buy books; and if I have any left, I buy food and clothes.\u201d",
      "author": "Desiderius Erasmus Roterodamus"
  },
  {
      "x": 0.9118000865,
      "y": 0.4663428962,
      "quote": "\u201cHere\u00e2\u20ac\u2122s to books, the cheapest vacation you can buy.\u201d",
      "author": "Charlaine Harris"
  },
  {
      "x": 0.4071478844,
      "y": 0.7057493925,
      "quote": "\u201cEating and reading are two pleasures that combine admirably.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.375895977,
      "y": 0.1885634065,
      "quote": "\u201cI heard what you said. I\u00e2\u20ac\u2122m not the silly romantic you think. I don\u00e2\u20ac\u2122t want the heavens or the shooting stars. I don\u00e2\u20ac\u2122t want gemstones or gold. I have those things already. I want\u00e2\u20ac\u00a6a steady hand. A kind soul. I want to fall asleep, and wake, knowing my heart is safe. I want to love, and be loved.\u201d",
      "author": "Shana Abe"
  },
  {
      "x": 0.6148682833,
      "y": 0.5119848251,
      "quote": "\u201cIf you expect nothing from somebody you are never disappointed.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.9356692433,
      "y": 0.4260335267,
      "quote": "\u201cI believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.3651819229,
      "y": 0.4349395335,
      "quote": "\u201cReading is one form of escape. Running for your life is another.\u201d",
      "author": "Lemony Snicket"
  },
  {
      "x": 0.6239400506,
      "y": 0.0655870438,
      "quote": "\u201cHow lucky I am to have known somebody and something that saying goodbye to is so damned awful.\u201d",
      "author": "Evans G. Valens,"
  },
  {
      "x": 0.360445559,
      "y": 0.6660743952,
      "quote": "\u201cEvery saint has a past, and every sinner has a future.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4305206537,
      "y": 0.8689432144,
      "quote": "\u201cThe secret of life, though, is to fall seven times and to get up eight times.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.5810513496,
      "y": 0.7780631781,
      "quote": "\u201cI might be in love with you.\" He smiles a little. \"I'm waiting until I'm sure to tell you, though.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.781835258,
      "y": 0.3135706484,
      "quote": "\u201cA guy and a girl can be just friends, but at one point or another, they will fall for each other...Maybe temporarily, maybe at the wrong time, maybe too late, or maybe forever\u201d",
      "author": "Dave Matthews Band"
  },
  {
      "x": 0.2452247739,
      "y": 0.1349591464,
      "quote": "\u201cThe more I know of the world, the more I am convinced that I shall never see a man whom I can really love. I require so much!\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.7301641107,
      "y": 0.3227249384,
      "quote": "\u201cHope is the thing with feathers That perches in the soul And sings the tune without the words And never stops at all.\u201d",
      "author": "Emily Dickinson"
  },
  {
      "x": 0.6677172184,
      "y": 0.5122275352,
      "quote": "\u201cAny fool can know. The point is to understand.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.6099811792,
      "y": 0.9506322145,
      "quote": "\u201cReality is merely an illusion, albeit a very persistent one.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.3915907145,
      "y": 0.8373051882,
      "quote": "\u201cDo you remember back at the hotel when you promised that if we lived, you\u00e2\u20ac\u2122d get dressed up in a nurse\u00e2\u20ac\u2122s outfit and give me a sponge bath?\" asked Jace.\"It was Simon who promised you the sponge bath.\"\"As soon as I\u00e2\u20ac\u2122m back on my feet, handsome,\" said Simon.\"I knew we should have left you a rat.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4892762899,
      "y": 0.5270587206,
      "quote": "\u201cYou can talk with someone for years, everyday, and still, it won't mean as much as what you can have when you sit in front of someone, not saying a word, yet you feel that person with your heart, you feel like you have known the person for forever.... connections are made with the heart, not the tongue.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.6170861721,
      "y": 0.1612113714,
      "quote": "\u201cThose who dream by day are cognizant of many things which escape those who dream only by night.\u201d",
      "author": "Edgar Allan Poe,"
  },
  {
      "x": 0.2358410358,
      "y": 0.5891549587,
      "quote": "\u201cI took a deep breath and listened to the old brag of my heart. I am, I am, I am.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.5687781572,
      "y": 0.1447797865,
      "quote": "\u201cOne, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away.\u201d",
      "author": "Stephen Hawking"
  },
  {
      "x": 0.8560237288,
      "y": 0.5421293974,
      "quote": "\u201cSometimes you climb out of bed in the morning and you think, I'm not going to make it, but you laugh inside \u00e2\u20ac\u201d remembering all the times you've felt that way.\u201d",
      "author": "Charles Bukowski"
  },
  {
      "x": 0.4243197441,
      "y": 0.24910447,
      "quote": "\u201cThe world is a book and those who do not travel read only one page.\u201d",
      "author": "St. Augustine"
  },
  {
      "x": 0.8316060901,
      "y": 0.5149071217,
      "quote": "\u201cThere are no good girls gone wrong - just bad girls found out.\u201d",
      "author": "Mae West"
  },
  {
      "x": 0.6930299997,
      "y": 0.6563392878,
      "quote": "\u201cYou get a little moody sometimes but I think that's because you like to read. People that like to read are always a little fucked up.\u201d",
      "author": "Pat Conroy,"
  },
  {
      "x": 0.4071577787,
      "y": 0.1914078295,
      "quote": "\u201cNever go to bed mad. Stay up and fight.\u201d",
      "author": "Phyllis Diller"
  },
  {
      "x": 0.7896569371,
      "y": 0.221270144,
      "quote": "\u201cDon\u00e2\u20ac\u2122t go around saying the world owes you a living. The world owes you nothing. It was here first.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.6959838271,
      "y": 0.3827542961,
      "quote": "\u201cIf we knew what it was we were doing, it would not be called research, would it?\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.6814083457,
      "y": 0.3470976353,
      "quote": "\u201cOne day I will find the right words, and they will be simple.\u201d",
      "author": "Jack Kerouac,"
  },
  {
      "x": 0.5056509972,
      "y": 0.4811901748,
      "quote": "\u201cLife can only be understood backwards; but it must be lived forwards.\u201d",
      "author": "S\u00c3\u00b8ren Kierkegaard"
  },
  {
      "x": 0.3028331399,
      "y": 0.4773112833,
      "quote": "\u201cFaithless is he that says farewell when the road darkens.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.5581384897,
      "y": 0.5380743742,
      "quote": "\u201cPain is inevitable. Suffering is optional.\u201d",
      "author": "haruki murakami,"
  },
  {
      "x": 0.7939578891,
      "y": 0.2120431066,
      "quote": "\u201cIf a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?\u201d",
      "author": "Laurence J. Peter"
  },
  {
      "x": 0.5567110777,
      "y": 0.7109434605,
      "quote": "\u201cI am not young enough to know everything.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.3875063062,
      "y": 0.8816965818,
      "quote": "\u201cWe live and breathe words. .... It was books that made me feel that perhaps I was not completely alone. They could be honest with me, and I with them. Reading your words, what you wrote, how you were lonely sometimes and afraid, but always brave; the way you saw the world, its colors and textures and sounds, I felt--I felt the way you thought, hoped, felt, dreamt. I felt I was dreaming and thinking and feeling with you. I dreamed what you dreamed, wanted what you wanted--and then I realized that truly I just wanted you.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3959237933,
      "y": 0.8901993036,
      "quote": "\u201cI have no special talents. I am only passionately curious.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.1287316382,
      "y": 0.5033288002,
      "quote": "\u201cI like work: it fascinates me. I can sit and look at it for hours.\u201d",
      "author": "Jerome K. Jerome"
  },
  {
      "x": 0.5121641159,
      "y": 0.098436743,
      "quote": "\u201cDon't be pushed around by the fears in your mind. Be led by the dreams in your heart.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.3801881671,
      "y": 0.3238995671,
      "quote": "\u201cWhen I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down \u00e2\u20ac\u02dchappy\u00e2\u20ac\u2122. They told me I didn\u00e2\u20ac\u2122t understand the assignment, and I told them they didn\u00e2\u20ac\u2122t understand life.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.5439642072,
      "y": 0.7298437357,
      "quote": "\u201cIf you're reading this...Congratulations, you're alive.If that's not something to smile about,then I don't know what is.\u201d",
      "author": "Chad Sugg,"
  },
  {
      "x": 0.3465105295,
      "y": 0.1705927849,
      "quote": "\u201cThat's always seemed so ridiculous to me, that people want to be around someone because they're pretty. It's like picking your breakfeast cereals based on color instead of taste.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.6193545461,
      "y": 0.9820511341,
      "quote": "\u201cSarcasm is the last refuge of the imaginatively bankrupt.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2199159861,
      "y": 0.4176904261,
      "quote": "\u201cMalachi scowled. \"I don't remember the Clave inviting you into the Glass City, Magnus Bane.\"\"They didn't,\" Magnus said. \"Your wards are down.\"\"Really?\" the Consul's voice dripped sarcasm. \"I hadn't noticed.\"Magnus looked concerned. \"That's terrible. Someone should have told you.\" He glanced at Luke. \"Tell him the wards are down.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.454112649,
      "y": 0.3401575089,
      "quote": "\u201cI have decided to stick to love...Hate is too great a burden to bear.\u201d",
      "author": "Martin Luther King Jr.,"
  },
  {
      "x": 0.5415098667,
      "y": 0.3229778409,
      "quote": "\u201cI wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin, but you begin anyway and see it through no matter what.- Atticus Finch\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.7391696572,
      "y": 0.3117108643,
      "quote": "\u201cAlways do what you are afraid to do.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.3129619956,
      "y": 0.0963564664,
      "quote": "\u201cA life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.\u201d",
      "author": "George Bernard Shaw"
  },
  {
      "x": 0.566814363,
      "y": 0.6987999678,
      "quote": "\u201cThey say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.\u201d",
      "author": "Tom Bodett"
  },
  {
      "x": 0.3059030771,
      "y": 0.1349257827,
      "quote": "\u201cI've never been lonely. I've been in a room -- I've felt suicidal. I've been depressed. I've felt awful -- awful beyond all -- but I never felt that one other person could enter that room and cure what was bothering me...or that any number of people could enter that room. In other words, loneliness is something I've never been bothered with because I've always had this terrible itch for solitude. It's being at a party, or at a stadium full of people cheering for something, that I might feel loneliness. I'll quote Ibsen, \"The strongest men are the most alone.\" I've never thought, \"Well, some beautiful blonde will come in here and give me a fuck-job, rub my balls, and I'll feel good.\" No, that won't help. You know the typical crowd, \"Wow, it's Friday night, what are you going to do? Just sit there?\" Well, yeah. Because there's nothing out there. It's stupidity. Stupid people mingling with stupid people. Let them stupidify themselves. I've never been bothered with the need to rush out into the night. I hid in bars, because I didn't want to hide in factories. That's all. Sorry for all the millions, but I've never been lonely. I like myself. I'm the best form of entertainment I have. Let's drink more wine!\u201d",
      "author": "Charles Bukowski"
  },
  {
      "x": 0.5980674028,
      "y": 0.4943471253,
      "quote": "\u201cThere is neither happiness nor misery in the world; there is only the comparison of one state with another, nothing more. He who has felt the deepest grief is best able to experience supreme happiness. We must have felt what it is to die, Morrel, that we may appreciate the enjoyments of life. \" Live, then, and be happy, beloved children of my heart, and never forget, that until the day God will deign to reveal the future to man, all human wisdom is contained in these two words, 'Wait and Hope.\u201d",
      "author": "Alexandre Dumas"
  },
  {
      "x": 0.6076960564,
      "y": 0.4282107055,
      "quote": "\u201cMonsters are real, and ghosts are real too. They live inside us, and sometimes, they win.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.9063344598,
      "y": 0.5281865597,
      "quote": "\u201cWhat's meant to be will always find a way\u201d",
      "author": "Trisha Yearwood"
  },
  {
      "x": 0.1630091369,
      "y": 0.2089526653,
      "quote": "\u201cMake it a rule never to give a child a book you would not read yourself.\u201d",
      "author": "George Bernard Shaw"
  },
  {
      "x": 0.3547455072,
      "y": 0.3980950713,
      "quote": "\u201cIn a time of deceit telling the truth is a revolutionary act.\u201d",
      "author": "George Orwell"
  },
  {
      "x": 0.5113752484,
      "y": 0.4088614583,
      "quote": "\u201cOur lives begin to end the day we become silent about things that matter.\u201d",
      "author": "Martin Luther King Jr.,"
  },
  {
      "x": 0.1255699396,
      "y": 0.413243264,
      "quote": "\u201cThe mind is its own place, and in itself can make a heaven of hell, a hell of heaven..\u201d",
      "author": "John Milton,"
  },
  {
      "x": 0.5734341145,
      "y": 0.6723444462,
      "quote": "\u201cWe delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.7834337354,
      "y": 0.3880028427,
      "quote": "\u201cI think that if I ever have kids, and they are upset, I won't tell them that people are starving in China or anything like that because it wouldn't change the fact that they were upset. And even if somebody else has it much worse, that doesn't really change the fact that you have what you have.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.6207042933,
      "y": 0.7284332514,
      "quote": "\u201cTalent hits a target no one else can hit. Genius hits a target no one else can see.\u201d",
      "author": "Arthur Schopenhauer"
  },
  {
      "x": 0.9180451035,
      "y": 0.4902849495,
      "quote": "\u201cWhen his life was ruined, his family killed, his farm destroyed, Job knelt down on the ground and yelled up to the heavens, \"Why god? Why me?\" and the thundering voice of God answered, There's just something about you that pisses me off.\u201d",
      "author": "Stephen King,"
  },
  {
      "x": 0.4486570954,
      "y": 0.6751981974,
      "quote": "\u201cThere are two motives for reading a book; one, that you enjoy it; the other, that you can boast about it.\u201d",
      "author": "Bertrand Russell"
  },
  {
      "x": 0.5561591983,
      "y": 0.589943409,
      "quote": "\u201cIt is a curious thing, the death of a loved one. We all know that our time in this world is limited, and that eventually all of us will end up underneath some sheet, never to wake up. And yet it is always a surprise when it happens to someone we know. It is like walking up the stairs to your bedroom in the dark, and thinking there is one more stair than there is. Your foot falls down, through the air, and there is a sickly moment of dark surprise as you try and readjust the way you thought of things.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.55354321,
      "y": 0.9170184135,
      "quote": "\u201cOf all sad words of tongue or pen, the saddest are these, 'It might have been.\u201d",
      "author": "John Greenleaf Whittier,"
  },
  {
      "x": 0.2372309566,
      "y": 0.5896862745,
      "quote": "\u201cI'm coming back into focus when Caesar asks him if he has a girlfriend back home. Peeta hesitates, then gives an unconvincing shake of his head.Handsome lad like you. There must be some special girl. Come on, what\u00e2\u20ac\u2122s her name?\" says Caesar.Peeta sighs. \"Well, there is this one girl. I\u00e2\u20ac\u2122ve had a crush on her ever since I can remember. But I\u00e2\u20ac\u2122m pretty sure she didn\u00e2\u20ac\u2122t know I was alive until the reaping.\"Sounds of sympathy from the crowd. Unrequited love they can relate to.She have another fellow?\" asks Caesar.I don\u00e2\u20ac\u2122t know, but a lot of boys like her,\" says Peeta.So, here\u00e2\u20ac\u2122s what you do. You win, you go home. She can\u00e2\u20ac\u2122t turn you down then, eh?\" says Caesar encouragingly.I don\u00e2\u20ac\u2122t think it\u00e2\u20ac\u2122s going to work out. Winning...won\u00e2\u20ac\u2122t help in my case,\" says Peeta.Why ever not?\" says Caesar, mystified.Peeta blushes beet red and stammers out. \"Because...because...she came here with me.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.7542158961,
      "y": 0.2996206582,
      "quote": "\u201cThe boy never cried again, and he never forgot what he'd learned: that to love is to destroy, and that to be loved is to be the one destroyed.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.1062413454,
      "y": 0.32250157,
      "quote": "\u201cExperience is merely the name men gave to their mistakes.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.1509764791,
      "y": 0.4385588467,
      "quote": "\u201cIn the end, we will remember not the words of our enemies, but the silence of our friends.\u201d",
      "author": "Martin Luther King Jr."
  },
  {
      "x": 0.541855216,
      "y": 0.665941596,
      "quote": "\u201cThe flower that blooms in adversity is the rarest and most beautiful of all.\u201d",
      "author": "Walt Disney Company,"
  },
  {
      "x": 0.5829210877,
      "y": 0.7317963839,
      "quote": "\u201cDo not let your fire go out, spark by irreplaceable spark in the hopeless swamps of the not-quite, the not-yet, and the not-at-all. Do not let the hero in your soul perish in lonely frustration for the life you deserved and have never been able to reach. The world you desire can be won. It exists.. it is real.. it is possible.. it's yours.\u201d",
      "author": "Ayn Rand,"
  },
  {
      "x": 0.467887044,
      "y": 0.4494281709,
      "quote": "\u201cTHE FIRST TEN LIES THEY TELL YOU IN HIGH SCHOOL 1. We are here to help you. 2. You will have time to get to your class before the bell rings. 3. The dress code will be enforced. 4. No smoking is allowed on school grounds. 5. Our football team will win the championship this year. 6. We expect more of you here. 7. Guidance counselors are always available to listen. 8. Your schedule was created with you in mind. 9. Your locker combination is private. 10. These will be the years you look back on fondly. TEN MORE LIES THEY TELL YOU IN HIGH SCHOOL 1. You will use algebra in your adult lives. 2. Driving to school is a privilege that can be taken away. 3. Students must stay on campus during lunch. 4. The new text books will arrive any day now. 5. Colleges care more about you than your SAT scores. 6. We are enforcing the dress code. 7. We will figure out how to turn off the heat soon. 8. Our bus drivers are highly trained professionals. 9. There is nothing wrong with summer school. 10. We want to hear what you have to say.\u201d",
      "author": "Laurie Halse Anderson,"
  },
  {
      "x": 0.7784206271,
      "y": 0.1636108458,
      "quote": "\u201cAnd the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.2000741959,
      "y": 0.2642223537,
      "quote": "\u201cThere is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.7404409051,
      "y": 0.8600841761,
      "quote": "\u201cGive a girl the right shoes, and she can conquer the world.\u201d",
      "author": "Bette Midler"
  },
  {
      "x": 0.3719260097,
      "y": 0.3460522592,
      "quote": "\u201cAugustus Waters was a self-aggrandizing bastard. But we forgive him. We forgive him not because he had a heart as figuratively good as his literal one sucked, or because he knew more about how to hold a cigarette than any nonsmoker in history, or because he got eighteen years when he should've gotten more.''Seventeen,' Gus corrected.'I'm assuming you've got some time, you interupting bastard.'I'm telling you,' Isaac continued, 'Augustus Waters talked so much that he'd interupt you at his own funeral. And he was pretentious: Sweet Jesus Christ, that kid never took a piss without pondering the abundant metaphorical resonances of human waste production. And he was vain: I do not believe I have ever met a more physically attractive person who was more acutely aware of his own physical attractiveness.'But I will say this: When the scientists of the future show up at my house with robot eyes and they tell me to try them on, I will tell the scientists to screw off, because I do not want to see a world without him.'I was kind of crying by then.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.5748742223,
      "y": 0.3303350806,
      "quote": "\u201cA thing is not necessarily true because a man dies for it.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4392700791,
      "y": 0.6452217102,
      "quote": "\u201cSomewhere, something incredible is waiting to be known.\u201d",
      "author": "Carl Sagan"
  },
  {
      "x": 0.0297457874,
      "y": 0.3618712425,
      "quote": "\u201cIt is so hard to leave\u00e2\u20ac\u201duntil you leave. And then it is the easiest goddamned thing in the world.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.0755370855,
      "y": 0.4823732078,
      "quote": "\u201cYou have enemies? Good. That means you've stood up for something, sometime in your life.\u201d",
      "author": "Winston Churchill"
  },
  {
      "x": 0.9045709968,
      "y": 0.3845566809,
      "quote": "\u201cHearts are made to be broken.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.7532164454,
      "y": 0.6133182049,
      "quote": "\u201cOnce you learn to read, you will be forever free.\u201d",
      "author": "Frederick Douglass"
  },
  {
      "x": 0.7405108809,
      "y": 0.3624435663,
      "quote": "\u201cYou think your pain and your heartbreak are unprecedented in the history of the world, but then you read. It was books that taught me that the things that tormented me most were the very things that connected me with all the people who were alive, who had ever been alive.\u201d",
      "author": "James Baldwin"
  },
  {
      "x": 0.369456172,
      "y": 0.3037213087,
      "quote": "\u201cFaith is taking the first step even when you can't see the whole staircase.\u201d",
      "author": "Martin Luther King Jr."
  },
  {
      "x": 0.5297483206,
      "y": 0.2875674069,
      "quote": "\u201cThink of all the beauty still left around you and be happy.\u201d",
      "author": "Anne Frank"
  },
  {
      "x": 0.5840985179,
      "y": 0.3353848755,
      "quote": "\u201cInstead of worrying about what you cannot control, shift your energy to what you can create.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.5706011057,
      "y": 0.6456016302,
      "quote": "\u201cWhether you think you can, or you think you can't--you're right.\u201d",
      "author": "Henry Ford"
  },
  {
      "x": 0.254799664,
      "y": 0.2922018766,
      "quote": "\u201cThe loneliest moment in someone\u00e2\u20ac\u2122s life is when they are watching their whole world fall apart, and all they can do is stare blankly.\u201d",
      "author": "F. Scott Fitzgerald"
  },
  {
      "x": 0.6223527193,
      "y": 0.828214407,
      "quote": "\u201cIt is hard enough to remember my opinions, without also remembering my reasons for them!\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.42950809,
      "y": 0.8115922213,
      "quote": "\u201cI saw my life branching out before me like the green fig tree in the story. From the tip of every branch, like a fat purple fig, a wonderful future beckoned and winked. One fig was a husband and a happy home and children, and another fig was a famous poet and another fig was a brilliant professor, and another fig was Ee Gee, the amazing editor, and another fig was Europe and Africa and South America, and another fig was Constantin and Socrates and Attila and a pack of other lovers with queer names and offbeat professions, and another fig was an Olympic lady crew champion, and beyond and above these figs were many more figs I couldn't quite make out. I saw myself sitting in the crotch of this fig tree, starving to death, just because I couldn't make up my mind which of the figs I would choose. I wanted each and every one of them, but choosing one meant losing all the rest, and, as I sat there, unable to decide, the figs began to wrinkle and go black, and, one by one, they plopped to the ground at my feet.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.7136504054,
      "y": 0.3615947068,
      "quote": "\u201cWhy did you do all this for me?' he asked. 'I don't deserve it. I've never done anything for you.' 'You have been my friend,' replied Charlotte. 'That in itself is a tremendous thing.\u201d",
      "author": "E.B. White,"
  },
  {
      "x": 0.6395075321,
      "y": 0.4971010983,
      "quote": "\u201cThere is nothing either good or bad, but thinking makes it so.\u201d",
      "author": "William Shakespear,"
  },
  {
      "x": 0.4360632896,
      "y": 0.5628138781,
      "quote": "\u201cFantasy is hardly an escape from reality. It's a way of understanding it.\u201d",
      "author": "Lloyd Alexander"
  },
  {
      "x": 0.5378518701,
      "y": 0.5997391939,
      "quote": "\u201cThe world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.6955907941,
      "y": 0.7248680592,
      "quote": "\u201cTwo people in love, alone, isolated from the world, that's beautiful.\u201d",
      "author": "Milan Kundera"
  },
  {
      "x": 0.8928547502,
      "y": 0.5794292688,
      "quote": "\u201cI want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.6617100239,
      "y": 0.670167923,
      "quote": "\u201cBooks so special and rare and yours that advertising your affection feels like a betrayal.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.6976792216,
      "y": 0.5780204535,
      "quote": "\u201cI did not attend his funeral, but I sent a nice letter saying I approved of it.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.318695128,
      "y": 0.3362694383,
      "quote": "\u201cHere's all you have to know about men and women: women are crazy, men are stupid. And the main reason women are crazy is that men are stupid.\u201d",
      "author": "George Carlin,"
  },
  {
      "x": 0.9625993371,
      "y": 0.5675631762,
      "quote": "\u201cYou don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.\u201d",
      "author": "oscar wilde"
  },
  {
      "x": 0.6002899408,
      "y": 0.9496902227,
      "quote": "\u201cWhere is human nature so weak as in the bookstore?\u201d",
      "author": "Henry Ward Beecherr"
  },
  {
      "x": 0.5078537464,
      "y": 0.2442860901,
      "quote": "\u201cWell, I\u00e2\u20ac\u2122m not kissing the mundane,\" said Jace. \"I\u00e2\u20ac\u2122d rather stay down here and rot.\"\"Forever?\" said Simon. \"Forever\u00e2\u20ac\u2122s an awfully long time.\"Jace raised his eyebrows. \"I knew it,\" he said. \"You want to kiss me, don\u00e2\u20ac\u2122t you?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5373675227,
      "y": 0.0310314,
      "quote": "\u201cThe best index to a person's character is how he treats people who can't do him any good, and how he treats people who can't fight back.\u201d",
      "author": "Abigail Van Buren"
  },
  {
      "x": 0.7175053954,
      "y": 0.327747792,
      "quote": "\u201cAll happy families are alike; each unhappy family is unhappy in its own way.\u201d",
      "author": "Leo Tolstoy  ,"
  },
  {
      "x": 0.9540829062,
      "y": 0.5600728989,
      "quote": "\u201cThink before you speak. Read before you think.\u201d",
      "author": "Fran Lebowitz,"
  },
  {
      "x": 0.5019943118,
      "y": 0.3400653899,
      "quote": "\u201cI cannot live without books.\u201d",
      "author": "Thomas Jefferson"
  },
  {
      "x": 0.623793304,
      "y": 0.6244971752,
      "quote": "\u201cAnd by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.4296007156,
      "y": 0.7826858759,
      "quote": "\u201cIt is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.448331058,
      "y": 0.207976371,
      "quote": "\u201cI have a history of making decisions very quickly about men. I have always fallen in love fast and without measuring risks. I have a tendency not only to see the best in everyone, but to assume that everyone is emotionally capable of reaching his highest potential. I have fallen in love more times than I care to count with the highest potential of a man, rather than with the man himself, and I have hung on to the relationship for a long time (sometimes far too long) waiting for the man to ascend to his own greatness. Many times in romance I have been a victim of my own optimism.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.6896347404,
      "y": 0.2254113555,
      "quote": "\u201cIf at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.\u201d",
      "author": "W.C. Fields"
  },
  {
      "x": 0.1307402849,
      "y": 0.6691536903,
      "quote": "\u201cThis above all: to thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.2125931382,
      "y": 0.5484209061,
      "quote": "\u201cI have loved the stars too fondly to be fearful of the night.\u201d",
      "author": "Sarah   Williams"
  },
  {
      "x": 0.5190299153,
      "y": 0.4856599271,
      "quote": "\u201cGod created war so that Americans would learn geography.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5147875547,
      "y": 0.6540884972,
      "quote": "\u201cHell is empty and all the devils are here.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.2656943798,
      "y": 0.4840304554,
      "quote": "\u201cIt is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.\u201d",
      "author": "Theodore Roosevelt"
  },
  {
      "x": 0.2335249186,
      "y": 0.3781440556,
      "quote": "\u201cWaiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.4348968863,
      "y": 0.3207934797,
      "quote": "\u201cThe wound is the place where the Light enters you.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.5601953268,
      "y": 0.9470223188,
      "quote": "\u201cCourage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.9010087848,
      "y": 0.5054121017,
      "quote": "\u201cNot everything is about you,\" Clary said furiously.\"Possibly,\" Jace said, \"but you do have to admit that the majority of things are.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5225173235,
      "y": 0.7725121975,
      "quote": "\u201cI can't imagine a man really enjoying a book and reading it only once.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.7435745597,
      "y": 0.3120291531,
      "quote": "\u201cNo relationship is perfect, ever. There are always some ways you have to bend, to compromise, to give something up in order to gain something greater...The love we have for each other is bigger than these small differences. And that's the key. It's like a big pie chart, and the love in a relationship has to be the biggest piece. Love can make up for a lot.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.2313576937,
      "y": 0.8409130573,
      "quote": "\u201cThere are few people whom I really love, and still fewer of whom I think well. The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of merit or sense.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.6899603605,
      "y": 0.5958914757,
      "quote": "\u201cWhat is a friend? A single soul dwelling in two bodies.\u201d",
      "author": "Aristotle"
  },
  {
      "x": 0.5081233978,
      "y": 0.0824068487,
      "quote": "\u201cI am a man\" he told her, \"and men do not consume pink beverages. Get thee gone woman, and bring me something brown.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2848594785,
      "y": 0.9004122019,
      "quote": "\u201cThe most important thing is to enjoy your life\u00e2\u20ac\u201dto be happy\u00e2\u20ac\u201dit's all that matters.\u201d",
      "author": "Audrey Hepburn"
  },
  {
      "x": 0.5288183093,
      "y": 0.7162935734,
      "quote": "\u201cFor the two of us, home isn't a place. It is a person. And we are finally home.\u201d",
      "author": "Stephanie Perkins,"
  },
  {
      "x": 0.6270960569,
      "y": 0.4545872509,
      "quote": "\u201cIf you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.\u201d",
      "author": "Charles Bukowski,"
  },
  {
      "x": 0.2805554271,
      "y": 0.6380851269,
      "quote": "\u201cDo not go where the path may lead, go instead where there is no path and leave a trail.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.5278810263,
      "y": 0.3629076183,
      "quote": "\u201cFor you, a thousand times over\u201d",
      "author": "Khaled Hosseini,"
  },
  {
      "x": 0.2622901201,
      "y": 0.6307593584,
      "quote": "\u201cAccept who you are. Unless you're a serial killer.\u201d",
      "author": "Ellen DeGeneres,"
  },
  {
      "x": 0.3572509885,
      "y": 0.3464080691,
      "quote": "\u201cLove is always patient and kind. It is never jealous. Love is never boastful or conceited. It is never rude or selfish. It does not take offense and is not resentful. Love takes no pleasure in other people\u00e2\u20ac\u2122s sins, but delights in the truth. It is always ready to excuse, to trust, to hope, and to endure whatever comes.\u201d",
      "author": "Anonymous,"
  },
  {
      "x": 0.6739958525,
      "y": 0.2498857379,
      "quote": "\u201cThe most courageous act is still to think for yourself. Aloud.\u201d",
      "author": "Coco Chanel"
  },
  {
      "x": 0.7132844329,
      "y": 0.882134676,
      "quote": "\u201cNever let your sense of morals prevent you from doing what is right.\u201d",
      "author": "Isaac Asimov,"
  },
  {
      "x": 0.6702158451,
      "y": 0.3686874807,
      "quote": "\u201cWhat the hell is that?\" I laughed.\"It's my fox hat.\"\"Your fox hat?\"\"Yeah, Pudge. My fox hat.\"\"Why are you wearing your fox hat?\" I asked.\"Because no one can catch the motherfucking fox.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.4077888131,
      "y": 0.6593300104,
      "quote": "\u201cPeople aren't either wicked or noble. They're like chef's salads, with good things and bad things chopped and mixed together in a vinaigrette of confusion and conflict.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.5202309489,
      "y": 0.9316455126,
      "quote": "\u201cA human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.5109943151,
      "y": 0.3305441141,
      "quote": "\u201cIs this the part where you say if I hurt her, you'll kill me?\"\"No\" Simon said, \"If you hurt Clary she's quite capable of killing you herself. Possibly with a variety of weapons.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5682994127,
      "y": 0.494831115,
      "quote": "\u201cI can be changed by what happens to me. But I refuse to be reduced by it.(Popular misquote of \"You may not control all the events that happen to you, but you can decide not to be reduced by them.\")\u201d",
      "author": "Maya Angelou,"
  },
  {
      "x": 0.4235129952,
      "y": 0.0540549159,
      "quote": "\u201cWhoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.4673396349,
      "y": 0.759557128,
      "quote": "\u201cI generally avoid temptation unless I can't resist it.\u201d",
      "author": "Mae West"
  },
  {
      "x": 0.7902107835,
      "y": 0.6033805609,
      "quote": "\u201cHave you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up. You build up all these defenses, you build up a whole suit of armor, so that nothing can hurt you, then one stupid person, no different from any other stupid person, wanders into your stupid life...You give them a piece of you. They didn't ask for it. They did something dumb one day, like kiss you or smile at you, and then your life isn't your own anymore. Love takes hostages. It gets inside you. It eats you out and leaves you crying in the darkness, so simple a phrase like 'maybe we should be just friends' turns into a glass splinter working its way into your heart. It hurts. Not just in the imagination. Not just in the mind. It's a soul-hurt, a real gets-inside-you-and-rips-you-apart pain. I hate love.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.3750010133,
      "y": 0.7249065638,
      "quote": "\u201cRead, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it.Then write. If it's good, you'll find out. If it's not, throw it out of the window.\u201d",
      "author": "William Faulkner"
  },
  {
      "x": 0.187358737,
      "y": 0.4018559158,
      "quote": "\u201cThey didn\u00e2\u20ac\u2122t agree on much. In fact, they didn\u00e2\u20ac\u2122t agree on anything. They fought all the time and challenged each other ever day. But despite their differences, they had one important thing in common. They were crazy about each other.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.9155912995,
      "y": 0.6088808775,
      "quote": "\u201cLove is so short, forgetting is so long.\u201d",
      "author": "Pablo Neruda,"
  },
  {
      "x": 0.4503203034,
      "y": 0.7249844074,
      "quote": "\u201cBooks are mirrors: you only see in them what you already have inside you.\u201d",
      "author": "Carlos Ruiz Zaf\u00c3\u00b3n,"
  },
  {
      "x": 0.646104157,
      "y": 0.6186186075,
      "quote": "\u201cIf all else perished, and he remained, I should still continue to be; and if all else remained, and he were annihilated, the universe would turn to a mighty stranger.\u201d",
      "author": "Emily Jane Bront\u00c3\u00ab ,"
  },
  {
      "x": 0.4483835697,
      "y": 0.3272931278,
      "quote": "\u201cNot my daughter, you bitch!\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5086486936,
      "y": 0.034589313,
      "quote": "\u201cBran thought about it. 'Can a man still be brave if he's afraid?''That is the only time a man can be brave,' his father told him.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.9333255887,
      "y": 0.3423525393,
      "quote": "\u201cTake responsibility of your own happiness, never put it in other people\u00e2\u20ac\u2122s hands.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.7165301442,
      "y": 0.7118481398,
      "quote": "\u201cYou never have to change anything you got up in the middle of the night to write.\u201d",
      "author": "Saul Bellow"
  },
  {
      "x": 0.3557403684,
      "y": 0.4721587002,
      "quote": "\u201cI think if I've learned anything about friendship, it's to hang in, stay connected, fight for them, and let them fight for you. Don't walk away, don't be distracted, don't be too busy or tired, don't take them for granted. Friends are part of the glue that holds life and faith together. Powerful stuff.\u201d",
      "author": "Jon Katz"
  },
  {
      "x": 0.9253160357,
      "y": 0.5636205673,
      "quote": "\u201cAll little girls should be told they are pretty, even if they aren't.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.4392049313,
      "y": 0.5217695236,
      "quote": "\u201cGood books don't give up all their secrets at once.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.3092191219,
      "y": 0.3244882822,
      "quote": "\u201cIf you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.\u201d",
      "author": "Martin Luther King Jr."
  },
  {
      "x": 0.1903423965,
      "y": 0.575201869,
      "quote": "\u201cIt's not true that I had nothing on. I had the radio on.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.4329879284,
      "y": 0.7999187708,
      "quote": "\u201cThe very essence of romance is uncertainty.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.5664066672,
      "y": 0.3002482653,
      "quote": "\u201cYou could have had anything else in the world, and you asked for me.\"She smiled up at him. Filthy as he was, covered in blood and dirt, he was the most beautiful thing she'd ever seen.\"But I don't want anything else in the world.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.9810641408,
      "y": 0.5252605677,
      "quote": "\u201cThe unexamined life is not worth living.\u201d",
      "author": "Socrates"
  },
  {
      "x": 0.7790121436,
      "y": 0.6140075922,
      "quote": "\u201cSo please, oh please, we beg, we pray,Go throw your TV set away,And in its place you can installA lovely bookshelf on the wall.Then fill the shelves with lots of books.\u201d",
      "author": "Roald Dahl,"
  },
  {
      "x": 0.1139111221,
      "y": 0.6973282099,
      "quote": "\u201cMy experience of life is that it is not divided up into genres; it\u00e2\u20ac\u2122s a horrifying, romantic, tragic, comical, science-fiction cowboy detective novel. You know, with a bit of pornography if you're lucky.\u201d",
      "author": "Alan Moore"
  },
  {
      "x": 0.2378700376,
      "y": 0.4791485369,
      "quote": "\u201cIt is not in the stars to hold our destiny but in ourselves.\u201d",
      "author": "William Shakespeare"
  },
  {
      "x": 0.7465859056,
      "y": 0.6036891937,
      "quote": "\u201cEverything in the world is about sex except sex. Sex is about power.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.9628950953,
      "y": 0.3345589638,
      "quote": "\u201cI spent my life folded between the pages of books.In the absence of human relationships I formed bonds with paper characters. I lived love and loss through stories threaded in history; I experienced adolescence by association. My world is one interwoven web of words, stringing limb to limb, bone to sinew, thoughts and images all together. I am a being comprised of letters, a character created by sentences, a figment of imagination formed through fiction.\u201d",
      "author": "Tahereh Mafi,"
  },
  {
      "x": 0.3298960328,
      "y": 0.2693966031,
      "quote": "\u201cEither write something worth reading or do something worth writing.\u201d",
      "author": "Benjamin Franklin"
  },
  {
      "x": 0.6789680123,
      "y": 0.8083158731,
      "quote": "\u201cIf you remember me, then I don't care if everyone else forgets.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.4949045777,
      "y": 0.1676878929,
      "quote": "\u201cYou said you were going for a walk!? What kind of walk takes six hours?\"\"A long one?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3627454638,
      "y": 0.2542561293,
      "quote": "\u201cTry not to become a man of success. Rather become a man of value.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.2702803612,
      "y": 0.5775504112,
      "quote": "\u201cBe the reason someone smiles. Be the reason someone feels loved and believes in the goodness in people.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4972547293,
      "y": 0.0,
      "quote": "\u201cThere is always some madness in love. But there is also always some reason in madness.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.494014442,
      "y": 0.7209914923,
      "quote": "\u201cHappiness is a warm puppy.\u201d",
      "author": "Charles M. Schulz"
  },
  {
      "x": 0.6581787467,
      "y": 0.2144309282,
      "quote": "\u201cI didn't want to wake up. I was having a much better time asleep. And that's really sad. It was almost like a reverse nightmare, like when you wake up from a nightmare you're so relieved. I woke up into a nightmare.\u201d",
      "author": "Ned Vizzini,"
  },
  {
      "x": 0.928486526,
      "y": 0.6209362745,
      "quote": "\u201cMan is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.940446198,
      "y": 0.4500231445,
      "quote": "\u201cBooks may well be the only true magic.\u201d",
      "author": "Alice Hoffman"
  },
  {
      "x": 0.5666387677,
      "y": 0.5954530239,
      "quote": "\u201cReader's Bill of Rights1. The right to not read 2. The right to skip pages 3. The right to not finish 4. The right to reread 5. The right to read anything 6. The right to escapism 7. The right to read anywhere 8. The right to browse 9. The right to read out loud 10. The right to not defend your tastes\u201d",
      "author": "Daniel Pennac"
  },
  {
      "x": 0.7520778775,
      "y": 0.2317419648,
      "quote": "\u201cI love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass.\u201d",
      "author": "maya angelou"
  },
  {
      "x": 0.3344172239,
      "y": 0.4332810342,
      "quote": "\u201cI was gratified to be able to answer promptly, and I did. I said I didn\u00e2\u20ac\u2122t know.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.2673016787,
      "y": 0.3669896722,
      "quote": "\u201cNever allow someone to be your priority while allowing yourself to be their option.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.9506850839,
      "y": 0.3522681594,
      "quote": "\u201cTurn your wounds into wisdom.\u201d",
      "author": "Oprah Winfrey"
  },
  {
      "x": 0.6368455291,
      "y": 0.3389041722,
      "quote": "\u201cNo tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.1060599387,
      "y": 0.4551285207,
      "quote": "\u201cNobody realizes that some people expend tremendous energy merely to be normal.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.8071056008,
      "y": 0.7373970747,
      "quote": "\u201cThose who find ugly meanings in beautiful things are corrupt without being charming. This is a fault. Those who find beautiful meanings in beautiful things are the cultivated. For these there is hope. They are the elect to whom beautiful things mean only Beauty. There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.2141077518,
      "y": 0.2769213319,
      "quote": "\u201cWithout pain, how could we know joy?' This is an old argument in the field of thinking about suffering and its stupidity and lack of sophistication could be plumbed for centuries but suffice it to say that the existence of broccoli does not, in any way, affect the taste of chocolate.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.6622128487,
      "y": 0.7960852385,
      "quote": "\u201cDon't ever tell anybody anything. If you do, you start missing everybody.\u201d",
      "author": "J. D. Salinger"
  },
  {
      "x": 0.3985352516,
      "y": 0.2572950721,
      "quote": "\u201cOnce on a yellow piece of paper with green lines\the wrote a poemAnd he called it \"Chops\"\tbecause that was the name of his dogAnd that's what it was all aboutAnd his teacher gave him an A\tand a gold starAnd his mother hung it on the kitchen door\tand read it to his auntsThat was the year Father Tracy\ttook all the kids to the zooAnd he let them sing on the busAnd his little sister was born\twith tiny toenails and no hairAnd his mother and father kissed a lotAnd the girl around the corner sent him aValentine signed with a row of X's\tand he had to ask his father what the X's meantAnd his father always tucked him in bed at nightAnd was always there to do itOnce on a piece of white paper with blue lines\the wrote a poemAnd he called it \"Autumn\"\tbecause that was the name of the seasonAnd that's what it was all aboutAnd his teacher gave him an A\tand asked him to write more clearlyAnd his mother never hung it on the kitchen door\tbecause of its new paintAnd the kids told him\tthat Father Tracy smoked cigarsAnd left butts on the pewsAnd sometimes they would burn holesThat was the year his sister got glasses\twith thick lenses and black framesAnd the girl around the corner laughed\twhen he asked her to go see Santa ClausAnd the kids told him why\this mother and father kissed a lotAnd his father never tucked him in bed at nightAnd his father got mad\twhen he cried for him to do it.Once on a paper torn from his notebook\the wrote a poemAnd he called it \"Innocence: A Question\"\tbecause that was the question about his girlAnd that's what it was all aboutAnd his professor gave him an A\tand a strange steady lookAnd his mother never hung it on the kitchen door\tbecause he never showed herThat was the year that Father Tracy diedAnd he forgot how the end\tof the Apostle's Creed wentAnd he caught his sister\tmaking out on the back porchAnd his mother and father never kissed\tor even talkedAnd the girl around the corner\twore too much makeupThat made him cough when he kissed her\tbut he kissed her anyway\tbecause that was the thing to doAnd at three a.m. he tucked himself into bed\this father snoring soundlyThat's why on the back of a brown paper bag\the tried another poemAnd he called it \"Absolutely Nothing\"Because that's what it was really all aboutAnd he gave himself an A\tand a slash on each damned wristAnd he hung it on the bathroom door\tbecause this time he didn't think\the could reach the kitchen.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.6422293782,
      "y": 0.8722013235,
      "quote": "\u201cRespect other people's feelings. It might mean nothing to you, but it could mean everything to them.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.6776169538,
      "y": 0.3165611923,
      "quote": "\u201cRemember when you tried to convince me to feed a poultry pie to the mallards in the park to see if you could breed a race of cannibal ducks?\" \"They ate it too,\" Will reminisced. \"Bloodthirsty little beasts. Never trust a duck.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.7701628804,
      "y": 0.17446509,
      "quote": "\u201cWe are all different. Don\u00e2\u20ac\u2122t judge, understand instead.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.329762876,
      "y": 0.091533646,
      "quote": "\u201cTwo possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying.\u201d",
      "author": "Arthur C. Clarke"
  },
  {
      "x": 0.1657461226,
      "y": 0.2286975384,
      "quote": "\u201cWhen you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth.\u201d",
      "author": "Arthur Conan Doyle,"
  },
  {
      "x": 0.4499399662,
      "y": 0.3643818796,
      "quote": "\u201cMen occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing had happened.\u201d",
      "author": "Winston S. Churchill"
  },
  {
      "x": 0.5605739355,
      "y": 0.3930208683,
      "quote": "\u201cYou gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I have lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.\u201d",
      "author": "Eleanor Roosevelt,"
  },
  {
      "x": 0.8714861274,
      "y": 0.5891928673,
      "quote": "\u201cThe important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.\u00e2\u20ac\u201d\"Old Man's Advice to Youth: 'Never Lose a Holy Curiosity.'\" LIFE Magazine (2 May 1955) p. 64\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.3598428369,
      "y": 0.4966082871,
      "quote": "\u201cMany people, myself among them, feel better at the mere sight of a book.\u201d",
      "author": "Jane Smiley,"
  },
  {
      "x": 0.7145053744,
      "y": 0.2595897913,
      "quote": "\u201cDeserves it! I daresay he does. Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement. For even the very wise cannot see all ends.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.5440294147,
      "y": 0.0365898907,
      "quote": "\u201cI don't know the question, but sex is definitely the answer.\u201d",
      "author": "Woody Allen"
  },
  {
      "x": 0.3745399714,
      "y": 0.2594119906,
      "quote": "\u201cYou cannot protect yourself from sadness without protecting yourself from happiness.\u201d",
      "author": "Jonathan Safran Foer"
  },
  {
      "x": 0.6170959473,
      "y": 0.4766003191,
      "quote": "\u201cBe mindful. Be grateful. Be positive. Be true. Be kind.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4702194333,
      "y": 0.2954471707,
      "quote": "\u201cFantasy is a necessary ingredient in living, it's a way of looking at life through the wrong end of a telescope.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.0895006359,
      "y": 0.517580986,
      "quote": "\u201cAbove all, be the heroine of your life, not the victim.\u201d",
      "author": "Nora Ephron"
  },
  {
      "x": 0.5805909634,
      "y": 0.188970834,
      "quote": "\u201cThere comes a time when the world gets quiet and the only thing left is your own heart. So you'd better learn the sound of it. Otherwise you'll never understand what it's saying.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.4664518237,
      "y": 0.5753928423,
      "quote": "\u201cAll animals are equal, but some animals are more equal than others.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.3594551086,
      "y": 0.5836924314,
      "quote": "\u201cWhy fit in when you were born to stand out?\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.1728776395,
      "y": 0.3833057582,
      "quote": "\u201cKiss me, and you will see how important I am.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.6287766099,
      "y": 0.7136713266,
      "quote": "\u201cWar is peace. Freedom is slavery. Ignorance is strength.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.5285900235,
      "y": 0.8336502314,
      "quote": "\u201cReligion has actually convinced people that there's an invisible man living in the sky who watches everything you do, every minute of every day. And the invisible man has a special list of ten things he does not want you to do. And if you do any of these ten things, he has a special place, full of fire and smoke and burning and torture and anguish, where he will send you to live and suffer and burn and choke and scream and cry forever and ever 'til the end of time! But He loves you. He loves you, and He needs money! He always needs money! He's all-powerful, all-perfect, all-knowing, and all-wise, somehow just can't handle money!\u201d",
      "author": "George Carlin"
  },
  {
      "x": 0.8363600373,
      "y": 0.4694808424,
      "quote": "\u201cYou're still trying to protect me. Real or not real,\" he whispers.\"Real,\" I answer. \"Because that's what you and I do, protect each other.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.9628383517,
      "y": 0.6004543304,
      "quote": "\u201cThere are worse crimes than burning books. One of them is not reading them.\u201d",
      "author": "Joseph Brodsky"
  },
  {
      "x": 0.4155973196,
      "y": 0.5202093124,
      "quote": "\u201cThat's the thing about books. They let you travel without moving your feet.\u201d",
      "author": "Jhumpa Lahiri,"
  },
  {
      "x": 0.4020783305,
      "y": 0.1793103516,
      "quote": "\u201cAccept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.3532508016,
      "y": 0.2711359262,
      "quote": "\u201cWhatever it is you're seeking won't come in the form you're expecting.\u201d",
      "author": "Haruki Marukami"
  },
  {
      "x": 0.4562618136,
      "y": 0.4896484315,
      "quote": "\u201cWhat matters in life is not what happens to you but what you remember and how you remember it.\u201d",
      "author": "Gabriel Garcia Marquez"
  },
  {
      "x": 0.4997345209,
      "y": 0.7901483774,
      "quote": "\u201cIt is said that your life flashes before your eyes just before you die. That is true, it's called Life.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.3868028522,
      "y": 0.8845111132,
      "quote": "\u201cTo douchebags!\" he said, gesturing to Brad. \"And to girls that break your heart,\" he bowed his head to me. His eyes lost focus. \"And to the absolute fucking horror of losing your best friend because you were stupid enough to fall in love with her.\u201d",
      "author": "Jamie McGuire,"
  },
  {
      "x": 0.8458376527,
      "y": 0.4773876369,
      "quote": "\u201cI am very interested and fascinated how everyone loves each other, but no one really likes each other.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.5514643788,
      "y": 0.6274297237,
      "quote": "\u201cEveryone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.7758968472,
      "y": 0.4199785888,
      "quote": "\u201cRemember: the time you feel lonely is the time you most need to be by yourself. Life's cruelest irony.\u201d",
      "author": "Douglas Coupland,"
  },
  {
      "x": 0.792046845,
      "y": 0.5504001379,
      "quote": "\u201cYou must stay drunk on writing so reality cannot destroy you.\u201d",
      "author": "Ray Bradbury,"
  },
  {
      "x": 0.6064178348,
      "y": 0.3443655074,
      "quote": "\u201cIt may be unfair, but what happens in a few days, sometimes even a single day, can change the course of a whole lifetime...\u201d",
      "author": "Khaled Hosseini,"
  },
  {
      "x": 0.1961396337,
      "y": 0.3097420931,
      "quote": "\u201cThe simple things are also the most extraordinary things, and only the wise can see them.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.5879278779,
      "y": 0.9679917097,
      "quote": "\u201cPainting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.\u201d",
      "author": "Leonardo da Vinci"
  },
  {
      "x": 0.6106752157,
      "y": 0.2618640959,
      "quote": "\u201cIf you're looking for sympathy you'll find it between shit and syphilis in the dictionary.\u201d",
      "author": "David Sedaris,"
  },
  {
      "x": 0.7665157914,
      "y": 0.3454165161,
      "quote": "\u201cLife is too short to waste your time on people who don\u00e2\u20ac\u2122t respect, appreciate, and value you.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.3896183968,
      "y": 0.5951961279,
      "quote": "\u201cI have great faith in fools - self-confidence my friends will call it.\u201d",
      "author": "Edgar Allan Poe,"
  },
  {
      "x": 0.2661078572,
      "y": 0.4439804256,
      "quote": "\u201cPeople are afraid of themselves, of their own reality; their feelings most of all. People talk about how great love is, but that\u00e2\u20ac\u2122s bullshit. Love hurts. Feelings are disturbing. People are taught that pain is evil and dangerous. How can they deal with love if they\u00e2\u20ac\u2122re afraid to feel? Pain is meant to wake us up. People try to hide their pain. But they\u00e2\u20ac\u2122re wrong. Pain is something to carry, like a radio. You feel your strength in the experience of pain. It\u00e2\u20ac\u2122s all in how you carry it. That\u00e2\u20ac\u2122s what matters. Pain is a feeling. Your feelings are a part of you. Your own reality. If you feel ashamed of them, and hide them, you\u00e2\u20ac\u2122re letting society destroy your reality. You should stand up for your right to feel your pain.\u201d",
      "author": "Jim Morrison"
  },
  {
      "x": 0.5778045058,
      "y": 0.9806369543,
      "quote": "\u201cI have found the paradox, that if you love until it hurts, there can be no more hurt, only more love.\u201d",
      "author": "Daphne Rae,"
  },
  {
      "x": 0.1079282165,
      "y": 0.682849288,
      "quote": "\u201cThat does it,\" said Jace. \"I'm going to get you a dictionary for Christmas this year.\"\"Why?\" Isabelle said.\"So you can look up 'fun.' I'm not sure you know what it means.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4564803839,
      "y": 0.0846631974,
      "quote": "\u201cYou must have chaos within you to give birth to a dancing star.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.5823892355,
      "y": 0.4322122633,
      "quote": "\u201cI don't go looking for trouble. Trouble usually finds me.\u201d",
      "author": "Katie McGarry,"
  },
  {
      "x": 0.632984817,
      "y": 0.6662335396,
      "quote": "\u201cTo be nobody but yourself in a world which is doing its best day and night to make you like everybody else means to fight the hardest battle which any human being can fight and never stop fighting.\u201d",
      "author": "E.E. Cummings"
  },
  {
      "x": 0.5733744502,
      "y": 0.7060514688,
      "quote": "\u201cThat is part of the beauty of all literature. You discover that your longings are universal longings, that you're not lonely and isolated from anyone. You belong.\u201d",
      "author": "F. Scott Fitzgerald"
  },
  {
      "x": 0.5355445147,
      "y": 0.5114016533,
      "quote": "\u201cThey love their hair because they're not smart enough to love something more interesting.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.4510273337,
      "y": 0.4331323206,
      "quote": "\u201cBeneath the makeup and behind the smile I am just a girl who wishes for the world.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.6027417183,
      "y": 0.3949773312,
      "quote": "\u201cSome tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.7124068141,
      "y": 0.4288390577,
      "quote": "\u201cYou have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.\u201d",
      "author": "Friedrich Wilhelm Nietzsche"
  },
  {
      "x": 0.0843190253,
      "y": 0.4984841645,
      "quote": "\u201cAs usual, there is a great woman behind every idiot.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.62994349,
      "y": 0.741625309,
      "quote": "\u201cWhat happens when people open their hearts?\"\"They get better.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.5892772079,
      "y": 0.4654546082,
      "quote": "\u201cImagine yourself as a living house. God comes in to rebuild that house. At first, perhaps, you can understand what He is doing. He is getting the drains right and stopping the leaks in the roof and so on; you knew that those jobs needed doing and so you are not surprised. But presently He starts knocking the house about in a way that hurts abominably and does not seem to make any sense. What on earth is He up to? The explanation is that He is building quite a different house from the one you thought of - throwing out a new wing here, putting on an extra floor there, running up towers, making courtyards. You thought you were being made into a decent little cottage: but He is building a palace. He intends to come and live in it Himself.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.1872942746,
      "y": 0.5120079517,
      "quote": "\u201cI have never listened to anyone who criticized my taste in space travel, sideshows or gorillas. When this occurs, I pack up my dinosaurs and leave the room.\u201d",
      "author": "Ray Bradbury,"
  },
  {
      "x": 0.8626386523,
      "y": 0.6303014755,
      "quote": "\u201cPrayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.6994553208,
      "y": 0.587754488,
      "quote": "\u201cBooks are my friends, my companions. They make me laugh and cry and find meaning in life.\u201d",
      "author": "Christopher Paolini,"
  },
  {
      "x": 0.4167085886,
      "y": 0.7934917212,
      "quote": "\u201cMan may have discovered fire, but women discovered how to play with it.\u201d",
      "author": "Candace Bushnell,"
  },
  {
      "x": 0.8494076133,
      "y": 0.3785559833,
      "quote": "\u201cI cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.2625816464,
      "y": 0.5632437468,
      "quote": "\u201cEducation is the most powerful weapon which you can use to change the world.\u201d",
      "author": "Nelson Mandela"
  },
  {
      "x": 0.1299372017,
      "y": 0.4447187483,
      "quote": "\u201cBeing crazy isn't enough.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.9927759767,
      "y": 0.5779777765,
      "quote": "\u201cOne day, in retrospect, the years of struggle will strike you as the most beautiful.\u201d",
      "author": "Sigmund Freud"
  },
  {
      "x": 0.1961147189,
      "y": 0.4307402074,
      "quote": "\u201cIf you have a garden and a library, you have everything you need.\u201d",
      "author": "Cicero"
  },
  {
      "x": 0.4832945466,
      "y": 0.4505593479,
      "quote": "\u201cLife is pain, highness. Anyone who says differently is selling something.\u201d",
      "author": "William Goldman,"
  },
  {
      "x": 0.3620224595,
      "y": 0.3865875006,
      "quote": "\u201cIf you are going through hell, keep going.\u201d",
      "author": "Winston S. Churchill"
  },
  {
      "x": 0.3456136584,
      "y": 0.7034034729,
      "quote": "\u201cShould I kill myself, or have a cup of coffee?\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.4153915644,
      "y": 0.5699057579,
      "quote": "\u201cLove doesn't just sit there, like a stone, it has to be made, like bread; remade all the time, made new.\u201d",
      "author": "Ursula K. Le Guin,"
  },
  {
      "x": 0.6401467919,
      "y": 0.218990773,
      "quote": "\u201cI would have come for you. And if I couldn't walk, I'd crawl to you, and no matter how broken we were, we'd fight our way out together-knives drawn, pistols blazing. Because that's what we do. We never stop fighting.\u201d",
      "author": "Leigh Bardugo,"
  },
  {
      "x": 0.6787401438,
      "y": 0.6096189022,
      "quote": "\u201cI lie to myself all the time. But I never believe me.\u201d",
      "author": "S.E. Hinton,"
  },
  {
      "x": 0.4327766895,
      "y": 0.6331247091,
      "quote": "\u201cBut who prays for Satan? Who, in eighteen centuries, has had the common humanity to pray for the one sinner that needed it most?\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.7443273664,
      "y": 0.8916482925,
      "quote": "\u201cTime flies like an arrow; fruit flies like a banana.\u201d",
      "author": "Anthony G. Oettinger"
  },
  {
      "x": 0.5123407245,
      "y": 0.2595755756,
      "quote": "\u201cPercy wouldn't notice a joke if it danced naked in front of him wearing one of Dobby's hats.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.897724092,
      "y": 0.5999079943,
      "quote": "\u201cNever be afraid to raise your voice for honesty and truth and compassion against injustice and lying and greed. If people all over the world...would do this, it would change the earth.\u201d",
      "author": "William Faulkner"
  },
  {
      "x": 0.668051362,
      "y": 0.740508914,
      "quote": "\u201cBooks are like mirrors: if a fool looks in, you cannot expect a genius to look out.\u201d",
      "author": "J.K. Rowling"
  },
  {
      "x": 0.5958598852,
      "y": 0.5187776089,
      "quote": "\u201cBut I don\u00e2\u20ac\u2122t want to go among mad people,\" Alice remarked.\"Oh, you can\u00e2\u20ac\u2122t help that,\" said the Cat: \"we\u00e2\u20ac\u2122re all mad here. I\u00e2\u20ac\u2122m mad. You\u00e2\u20ac\u2122re mad.\"\"How do you know I\u00e2\u20ac\u2122m mad?\" said Alice.\"You must be,\" said the Cat, \"or you wouldn\u00e2\u20ac\u2122t have come here.\u201d",
      "author": "Lewis Carroll,"
  },
  {
      "x": 0.5569896698,
      "y": 0.3386543989,
      "quote": "\u201cNothing of me is original. I am the combined effort of everyone I've ever known.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.2242975831,
      "y": 0.3530746698,
      "quote": "\u201cThe difference between the almost right word and the right word is really a large matter. \u00e2\u20ac\u2122tis the difference between the lightning bug and the lightning.\u201d",
      "author": "Mark Twain,"
  },
  {
      "x": 0.7578924298,
      "y": 0.3648203015,
      "quote": "\u201cI like your Christ, I do not like your Christians. Your Christians are so unlike your Christ.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.2765545845,
      "y": 0.6322778463,
      "quote": "\u201cI think God, in creating man, somewhat overestimated his ability.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.9320909381,
      "y": 0.430994302,
      "quote": "\u201cWhat I want is to be needed. What I need is to be indispensable to somebody. Who I need is somebody that will eat up all my free time, my ego, my attention. Somebody addicted to me. A mutual addiction.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.3422674537,
      "y": 0.1224446148,
      "quote": "\u201cReading was my escape and my comfort, my consolation, my stimulant of choice: reading for the pure pleasure of it, for the beautiful stillness that surrounds you when you hear an author's words reverberating in your head.\u201d",
      "author": "Paul Auster,"
  },
  {
      "x": 0.5208658576,
      "y": 0.0761028826,
      "quote": "\u201cStories of imagination tend to upset those without one.\u201d",
      "author": "Terry Pratchett"
  },
  {
      "x": 0.3853365779,
      "y": 0.4500243366,
      "quote": "\u201cIt isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.\u201d",
      "author": "Dale Carnegie,"
  },
  {
      "x": 0.3874590993,
      "y": 0.6789710522,
      "quote": "\u201cA girl should be two things: classy and fabulous.\u201d",
      "author": "Coco Chanel"
  },
  {
      "x": 0.6805980206,
      "y": 0.5840216875,
      "quote": "\u201cWhat I need is the dandelion in the spring. The bright yellow that means rebirth instead of destruction. The promise that life can go on, no matter how bad our losses. That it can be good again.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.6904258132,
      "y": 0.578648448,
      "quote": "\u201cI love people who make me laugh. I honestly think it's the thing I like most, to laugh. It cures a multitude of ills. It's probably the most important thing in a person.\u201d",
      "author": "Audrey Hepburn"
  },
  {
      "x": 0.2844187617,
      "y": 0.7340502739,
      "quote": "\u201cWhen a man gives his opinion, he's a man. When a woman gives her opinion, she's a bitch.\u201d",
      "author": "Bette Davis"
  },
  {
      "x": 0.3480979204,
      "y": 0.4792433679,
      "quote": "\u201cMy daddy said, that the first time you fall in love, it changes you forever and no matter how hard you try, that feeling just never goes away.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.8549289107,
      "y": 0.1911260188,
      "quote": "\u201cI don't trust people who don't love themselves and tell me, 'I love you.' ... There is an African saying which is: Be careful when a naked person offers you a shirt.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.2420199513,
      "y": 0.7339330912,
      "quote": "\u201cEvery child is an artist. The problem is how to remain an artist once he grows up.\u201d",
      "author": "Pablo Picasso"
  },
  {
      "x": 0.2633571029,
      "y": 0.7305597067,
      "quote": "\u201cDeadlines just aren't real to me until I'm staring one in the face.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.4522611499,
      "y": 0.7863748074,
      "quote": "\u201cLove does not consist of gazing at each other, but in looking outward together in the same direction.\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry,"
  },
  {
      "x": 0.8896160722,
      "y": 0.6465488672,
      "quote": "\u201cIt hurts to let go. Sometimes it seems the harder you try to hold on to something or someone the more it wants to get away. You feel like some kind of criminal for having felt, for having wanted. For having wanted to be wanted. It confuses you, because you think that your feelings were wrong and it makes you feel so small because it's so hard to keep it inside when you let it out and it doesn't coma back. You're left so alone that you can't explain. Damn, there's nothing like that, is there? I've been there and you have too. You're nodding your head.\u201d",
      "author": "Henry Rollins,"
  },
  {
      "x": 0.626673162,
      "y": 0.1106732339,
      "quote": "\u201cI never travel without my diary. One should always have something sensational to read in the train.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.4461547732,
      "y": 0.5281462669,
      "quote": "\u201cThe future belongs to those who believe in the beauty of their dreams.\u201d",
      "author": "Eleanor Roosevelt"
  },
  {
      "x": 0.2899845243,
      "y": 0.4578463733,
      "quote": "\u201cYou cannot swim for new horizons until you have courage to lose sight of the shore.\u201d",
      "author": "William Faulkner"
  },
  {
      "x": 0.4394390583,
      "y": 0.1904686987,
      "quote": "\u201cAnd, in the endThe love you takeis equal to the love you make.\u201d",
      "author": "Paul McCartney,"
  },
  {
      "x": 0.6866999269,
      "y": 0.7042206526,
      "quote": "\u201cLive the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.8766712546,
      "y": 0.505166769,
      "quote": "\u201cThere are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.\u201d",
      "author": "Patrick Rothfuss,"
  },
  {
      "x": 0.4810025096,
      "y": 0.7591055632,
      "quote": "\u201cNo book is really worth reading at the age of ten which is not equally \u00e2\u20ac\u201c and often far more \u00e2\u20ac\u201c worth reading at the age of fifty and beyond.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.4294074774,
      "y": 0.6948926449,
      "quote": "\u201cIf he\u00e2\u20ac\u2122s not calling you, it\u00e2\u20ac\u2122s because you are not on his mind. If he creates expectations for you, and then doesn\u00e2\u20ac\u2122t follow through on little things, he will do same for big things. Be aware of this and realize that he\u00e2\u20ac\u2122s okay with disappointing you. Don\u00e2\u20ac\u2122t be with someone who doesn\u00e2\u20ac\u2122t do what they say they\u00e2\u20ac\u2122re going to do. If he\u00e2\u20ac\u2122s choosing not to make a simple effort that would put you at ease and bring harmony to a recurring fight, then he doesn\u00e2\u20ac\u2122t respect your feelings and needs. \u00e2\u20ac\u0153Busy\u00e2\u20ac\ufffd is another word for \u00e2\u20ac\u0153asshole.\u00e2\u20ac\ufffd \u00e2\u20ac\u0153Asshole\u00e2\u20ac\ufffd is another word for the guy you\u00e2\u20ac\u2122re dating. You deserve a fcking phone call.\u201d",
      "author": "Greg Behrendt"
  },
  {
      "x": 0.2914718986,
      "y": 0.7404031754,
      "quote": "\u201cWhy do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.4134503603,
      "y": 0.059839204,
      "quote": "\u201cIt was love at first sight, at last sight, at ever and ever sight.\u201d",
      "author": "Vladimir Nabokov,"
  },
  {
      "x": 0.3690393567,
      "y": 0.2889758945,
      "quote": "\u201cResist much, obey little.\u201d",
      "author": "Walt Whitman,"
  },
  {
      "x": 0.5965530872,
      "y": 0.679407239,
      "quote": "\u201cLoyalty to country ALWAYS. Loyalty to government, when it deserves it.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.3212152123,
      "y": 0.4435123503,
      "quote": "\u201cI like living. I have sometimes been wildly, despairingly, acutely miserable, racked with sorrow; but through it all I still know quite certainly that just to be alive is a grand thing.\u201d",
      "author": "Agatha Christie"
  },
  {
      "x": 0.6963360906,
      "y": 0.3478718996,
      "quote": "\u201cIf you love somebody, let them go, for if they return, they were always yours. If they don't, they never were.\u201d",
      "author": "Kahlil Gibran"
  },
  {
      "x": 0.4305750132,
      "y": 0.4073271751,
      "quote": "\u201cMy tastes are simple: I am easily satisfied with the best.\u201d",
      "author": "Winston S. Churchill"
  },
  {
      "x": 0.4946001768,
      "y": 0.3154705763,
      "quote": "\u201cI don't want to die without any scars.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.1685106158,
      "y": 0.2235438228,
      "quote": "\u201cBelieve in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.3458227515,
      "y": 0.4822883308,
      "quote": "\u201cTruth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.\u201d",
      "author": "Mark Twain,"
  },
  {
      "x": 0.729827106,
      "y": 0.5355793238,
      "quote": "\u201cIf music be the food of love, play on,Give me excess of it; that surfeiting,The appetite may sicken, and so die.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.5491985679,
      "y": 0.5093699694,
      "quote": "\u201cShow me a hero, and I'll write you a tragedy.\u201d",
      "author": "F. Scott Fitzgerald"
  },
  {
      "x": 0.410299778,
      "y": 0.4182423651,
      "quote": "\u201cIt's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.6786087155,
      "y": 0.2184862494,
      "quote": "\u201cI do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.7964372039,
      "y": 0.3041763604,
      "quote": "\u201cAngry people are not always wise.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.483105123,
      "y": 0.5913031101,
      "quote": "\u201cBy three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.\u201d",
      "author": "Confucious"
  },
  {
      "x": 0.6669730544,
      "y": 0.6617716551,
      "quote": "\u201cWhat is an \"instant\" death anyway? How long is an instant? Is it one second? Ten? The pain of those seconds must have been awful as her heart burst and her lungs collapsed and there was no air and no blood to her brain and only raw panic. What the hell is instant? Nothing is instant. Instant rice takes five minutes, instant pudding an hour. I doubt that an instant of blinding pain feels particularly instantaneous.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.7306935191,
      "y": 0.5511618853,
      "quote": "\u201cI am not sure exactly what heaven will be like, but I know that when we die and it comes time for God to judge us, he will not ask, 'How many good things have you done in your life?' rather he will ask, 'How much love did you put into what you did?\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.9124751687,
      "y": 0.4974980652,
      "quote": "\u201cTo be a Christian means to forgive the inexcusable because God has forgiven the inexcusable in you.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.9165247083,
      "y": 0.4613937438,
      "quote": "\u201cIn the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to you.\u201d",
      "author": "Mortimer J. Adler"
  },
  {
      "x": 0.7969523072,
      "y": 0.8972650766,
      "quote": "\u201cShe is too fond of books, and it has turned her brain.\u201d",
      "author": "Louisa May Alcott,"
  },
  {
      "x": 0.7994591594,
      "y": 0.8066319227,
      "quote": "\u201cYou haven't got a letter on yours,\" George observed. \"I suppose she thinks you don't forget your name. But we're not stupid-we know we're called Gred and Forge.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5408035517,
      "y": 0.0476298779,
      "quote": "\u201cWill looked horrified. \"What kind of monster could possibly hate chocolate?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3226416111,
      "y": 0.6108520031,
      "quote": "\u201cNo medicine cures what happiness cannot.\u201d",
      "author": "Gabriel Garc\u00c3\u00ada M\u00c3\u00a1rquez"
  },
  {
      "x": 0.4177848697,
      "y": 0.6402933598,
      "quote": "\u201cIt's a metaphor, see: You put the killing thing right between your teeth, but you don't give it the power to do its killing.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.4802428484,
      "y": 0.7203094959,
      "quote": "\u201cI am a badass, and I recognize that you, too, are a badass.\u201d",
      "author": "Cassandra Clare"
  },
  {
      "x": 0.607581377,
      "y": 0.2169029415,
      "quote": "\u201cbecause nerds like us are allowed to be unironically enthusiastic about stuff. Nerds are allowed to love stuff, like jump-up-and-down-in-the-chair-can\u00e2\u20ac\u2122t-control-yourself love it. Hank, when people call people nerds, mostly what they\u00e2\u20ac\u2122re saying is \u00e2\u20ac\u02dcyou like stuff.\u00e2\u20ac\u2122 Which is just not a good insult at all. Like, \u00e2\u20ac\u02dcyou are too enthusiastic about the miracle of human consciousness\u00e2\u20ac\u2122.\u201d",
      "author": "John Green"
  },
  {
      "x": 0.1428019404,
      "y": 0.2353811562,
      "quote": "\u201cDon\u00e2\u20ac\u2122t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.2925088406,
      "y": 0.3048406839,
      "quote": "\u201cFiction is the truth inside the lie.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.4157215357,
      "y": 0.6605657339,
      "quote": "\u201cThe town was paper, but the memories were not.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.5027265549,
      "y": 0.7770867348,
      "quote": "\u201cThe fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.331325233,
      "y": 0.0819305032,
      "quote": "\u201cMy nightmares are usually about losing you. I'm okay once I realize you're here.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.1320380569,
      "y": 0.6369205713,
      "quote": "\u201cAnd now these three remain: faith, hope and love. But the greatest of these is love.\u201d",
      "author": "Anonymous,"
  },
  {
      "x": 0.5322156549,
      "y": 0.7691351175,
      "quote": "\u201cDon't tell me the moon is shining; show me the glint of light on broken glass.\u201d",
      "author": "Anton Chekhov"
  },
  {
      "x": 0.5088874698,
      "y": 0.4819605649,
      "quote": "\u201cWe\u00e2\u20ac\u2122re all seeking that special person who is right for us. But if you\u00e2\u20ac\u2122ve been through enough relationships, you begin to suspect there\u00e2\u20ac\u2122s no right person, just different flavors of wrong. Why is this? Because you yourself are wrong in some way, and you seek out partners who are wrong in some complementary way. But it takes a lot of living to grow fully into your own wrongness. And it isn\u00e2\u20ac\u2122t until you finally run up against your deepest demons, your unsolvable problems\u00e2\u20ac\u201dthe ones that make you truly who you are\u00e2\u20ac\u201dthat we\u00e2\u20ac\u2122re ready to find a lifelong mate. Only then do you finally know what you\u00e2\u20ac\u2122re looking for. You\u00e2\u20ac\u2122re looking for the wrong person. But not just any wrong person: it's got to be the right wrong person\u00e2\u20ac\u201dsomeone you lovingly gaze upon and think, \u00e2\u20ac\u0153This is the problem I want to have.\u00e2\u20ac\ufffdI will find that special person who is wrong for me in just the right way.\u201d",
      "author": "Andrew  Boyd,"
  },
  {
      "x": 0.5215412378,
      "y": 0.4107507765,
      "quote": "\u201cThe road to hell is paved with adverbs.\u201d",
      "author": "Stephen King,"
  },
  {
      "x": 0.5918858051,
      "y": 0.9063262939,
      "quote": "\u201cIt\u00e2\u20ac\u2122s only after you\u00e2\u20ac\u2122ve stepped outside your comfort zone that you begin to change, grow, and transform.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.3252168298,
      "y": 0.5746803284,
      "quote": "\u201cWow,\" Thalia muttered. \"Apollo is hot.\" \"He's the sun god,\" I said.\"That's not what I meant.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.2129065394,
      "y": 0.640000701,
      "quote": "\u201cWhen he shall die,Take him and cut him out in little stars,And he will make the face of heaven so fineThat all the world will be in love with nightAnd pay no worship to the garish sun.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.4500906467,
      "y": 0.3344656229,
      "quote": "\u201cLove is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.\u201d",
      "author": "Joan Crawford"
  },
  {
      "x": 0.5912617445,
      "y": 0.6672445536,
      "quote": "\u201cFear doesn't shut you down; it wakes you up\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.5669594407,
      "y": 0.6265501976,
      "quote": "\u201cWhy do people have to be this lonely? What's the point of it all? Millions of people in this world, all of them yearning, looking to others to satisfy them, yet isolating themselves. Why? Was the earth put here just to nourish human loneliness?\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.3617940545,
      "y": 0.797639966,
      "quote": "\u201cThe most important things are the hardest to say. They are the things you get ashamed of, because words diminish them -- words shrink things that seemed limitless when they were in your head to no more than living size when they're brought out. But it's more than that, isn't it? The most important things lie too close to wherever your secret heart is buried, like landmarks to a treasure your enemies would love to steal away. And you may make revelations that cost you dearly only to have people look at you in a funny way, not understanding what you've said at all, or why you thought it was so important that you almost cried while you were saying it. That's the worst, I think. When the secret stays locked within not for want of a teller but for want of an understanding ear.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.5447752476,
      "y": 0.2907621861,
      "quote": "\u201cLove conquers all,\" Aphrodite promised. \"Look at Helen and Paris. Did they let anything come between them?\"\"Didn't they start the Trojan War and get thousands of people killed?\"\"Pfft. That's not the point. Follow your heart.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.5929703116,
      "y": 0.1598439217,
      "quote": "\u201cYou do not write your life with words...You write it with actions. What you think is not important. It is only important what you do.\u201d",
      "author": "Patrick Ness,"
  },
  {
      "x": 0.7288572192,
      "y": 0.322406739,
      "quote": "\u201cMaybe 'okay' will be our 'always\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.5465224981,
      "y": 0.3283617198,
      "quote": "\u201cFreedom is not worth having if it does not include the freedom to make mistakes.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.3605908155,
      "y": 0.1715784669,
      "quote": "\u201cDon't let the expectations and opinions of other people affect your decisions. It's your life, not theirs. Do what matters most to you; do what makes you feel alive and happy. Don't let the expectations and ideas of others limit who you are. If you let others tell you who you are, you are living their reality \u00e2\u20ac\u201d not yours. There is more to life than pleasing people. There is much more to life than following others' prescribed path. There is so much more to life than what you experience right now. You need to decide who you are for yourself. Become a whole being. Adventure.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.7929366231,
      "y": 0.5492260456,
      "quote": "\u201cLife's under no obligation to give us what we expect.\u201d",
      "author": "Margaret Mitchell"
  },
  {
      "x": 0.315446198,
      "y": 0.6099646091,
      "quote": "\u201cIt's strange because sometimes, I read a book, and I think I am the people in the book.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.5166758895,
      "y": 0.0080229267,
      "quote": "\u201cMy dear,Find what you love and let it kill you.Let it drain you of your all. Let it cling onto your back and weigh you down into eventual nothingness.Let it kill you and let it devour your remains.For all things will kill you, both slowly and fastly, but it\u00e2\u20ac\u2122s much better to be killed by a lover.~ Falsely yours\u201d",
      "author": "Kinky Friedman"
  },
  {
      "x": 0.619128108,
      "y": 0.8936052322,
      "quote": "\u201cHappiness is having a large, loving, caring, close-knit family in another city.\u201d",
      "author": "George Burns"
  },
  {
      "x": 0.3028028607,
      "y": 0.3270686865,
      "quote": "\u201cDon't order any of the faerie food,\" said Jace, looking at her over the top of his menu. \"It tends to make humans a little crazy. One minute you're munching a faerie plum, the next minute you're running naked down Madison Avenue with antlers on your head. Not,\" he added hastily, \"that this has ever happened to me.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3317498565,
      "y": 0.3114752173,
      "quote": "\u201cMore smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.5708627701,
      "y": 0.1416647881,
      "quote": "\u201cNobody can hurt me without my permission.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.195700109,
      "y": 0.6413849592,
      "quote": "\u201cDon't judge each day by the harvest you reap but by the seeds that you plant.\u201d",
      "author": "Robert Louis Stevenson"
  },
  {
      "x": 0.1053542793,
      "y": 0.6823805571,
      "quote": "\u201cFire is catching! And if we burn, you burn with us!\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.3307780027,
      "y": 0.5592335463,
      "quote": "\u201cBut I know, somehow, that only when it is dark enough can you see the stars.\u201d",
      "author": "Martin Luther King, Jr."
  },
  {
      "x": 0.7024728656,
      "y": 0.4515329301,
      "quote": "\u201cYou are the answer to every prayer I've offered. You are a song, a dream, a whisper, and I don't know how I could have lived without you for as long as I have.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.7024697661,
      "y": 0.567677021,
      "quote": "\u201cI was never really insane except upon occasions when my heart was touched.\u201d",
      "author": "Edgar Allan Poe"
  },
  {
      "x": 0.3859574795,
      "y": 0.1781480908,
      "quote": "\u201cSometimes crying or laughing are the only options left, and laughing feels better right now.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.1541525424,
      "y": 0.237564832,
      "quote": "\u201cWhat you seek is seeking you.\u201d",
      "author": "Mawlana Jalal-al-Din Rumi"
  },
  {
      "x": 0.0767634213,
      "y": 0.519919157,
      "quote": "\u201cIt's not denial. I'm just selective about the reality I accept.\u201d",
      "author": "Bill Watterson"
  },
  {
      "x": 0.5461120009,
      "y": 0.2891898155,
      "quote": "\u201cThe best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart\u201d",
      "author": "Helen Keller"
  },
  {
      "x": 0.4605310559,
      "y": 0.8793597221,
      "quote": "\u201cYou probably wouldn\u00e2\u20ac\u2122t worry about what people think of you if you could know how seldom they do.\u201d",
      "author": "Olin Miller"
  },
  {
      "x": 0.3403440118,
      "y": 0.2126974761,
      "quote": "\u201cI have something I need to tell you,\" he says. I run my fingers along the tendons in his hands and look back at him. \"I might be in love with you.\" He smiles a little. \"I'm waiting until I'm sure to tell you, though.\"\"That's sensible of you,\" I say, smiling too. \"We should find some paper so you can make a list or a chart or something.\"I feel his laughter against my side, his nose sliding along my jaw, his lips pressing my ear.\"Maybe I'm already sure,\" he says, \"and I just don't want to frighten you.\"I laugh a little. \"Then you should know better.\"\"Fine,\" he says. \"Then I love you.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.3070290685,
      "y": 0.6301715374,
      "quote": "\u201cWrinkles should merely indicate where the smiles have been.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5536285639,
      "y": 0.7113220692,
      "quote": "\u201cSimplicity, patience, compassion.These three are your greatest treasures.Simple in actions and thoughts, you return to the source of being.Patient with both friends and enemies,you accord with the way things are.Compassionate toward yourself,you reconcile all beings in the world.\u201d",
      "author": "Lao Tzu,"
  },
  {
      "x": 0.3397841454,
      "y": 0.6873736382,
      "quote": "\u201cThe so-called \u00e2\u20ac\u02dcpsychotically depressed\u00e2\u20ac\u2122 person who tries to kill herself doesn\u00e2\u20ac\u2122t do so out of quote \u00e2\u20ac\u02dchopelessness\u00e2\u20ac\u2122 or any abstract conviction that life\u00e2\u20ac\u2122s assets and debits do not square. And surely not because death seems suddenly appealing. The person in whom Its invisible agony reaches a certain unendurable level will kill herself the same way a trapped person will eventually jump from the window of a burning high-rise. Make no mistake about people who leap from burning windows. Their terror of falling from a great height is still just as great as it would be for you or me standing speculatively at the same window just checking out the view; i.e. the fear of falling remains a constant. The variable here is the other terror, the fire\u00e2\u20ac\u2122s flames: when the flames get close enough, falling to death becomes the slightly less terrible of two terrors. It\u00e2\u20ac\u2122s not desiring the fall; it\u00e2\u20ac\u2122s terror of the flames. And yet nobody down on the sidewalk, looking up and yelling \u00e2\u20ac\u02dcDon\u00e2\u20ac\u2122t!\u00e2\u20ac\u2122 and \u00e2\u20ac\u02dcHang on!\u00e2\u20ac\u2122, can understand the jump. Not really. You\u00e2\u20ac\u2122d have to have personally been trapped and felt flames to really understand a terror way beyond falling.\u201d",
      "author": "David Foster Wallace"
  },
  {
      "x": 0.622525394,
      "y": 0.2314870656,
      "quote": "\u201cIf pain must come, may it come quickly. Because I have a life to live, and I need to live it in the best way possible. If he has to make a choice, may he make it now. Then I will either wait for him or forget him.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.3389029503,
      "y": 0.6105906963,
      "quote": "\u201cYesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.1656756699,
      "y": 0.2181997895,
      "quote": "\u201cWords are, of course, the most powerful drug used by mankind.\u201d",
      "author": "Rudyard Kipling"
  },
  {
      "x": 0.2851569653,
      "y": 0.4591993988,
      "quote": "\u201cThe truth does not change according to our ability to stomach it.\u201d",
      "author": "Flannery O'Connor"
  },
  {
      "x": 0.6435909271,
      "y": 0.0543504804,
      "quote": "\u201cThe worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared.\u201d",
      "author": "Lois Lowry,"
  },
  {
      "x": 0.9223149419,
      "y": 0.6028590202,
      "quote": "\u201cThe past is a place of reference, not a place of residence; the past is a place of learning, not a place of living.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.5381140113,
      "y": 0.6511409283,
      "quote": "\u201cWhat I say is, a town isn\u00e2\u20ac\u2122t a town without a bookstore. It may call itself a town, but unless it\u00e2\u20ac\u2122s got a bookstore, it knows it\u00e2\u20ac\u2122s not foolin\u00e2\u20ac\u2122 a soul.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.4856159091,
      "y": 0.7285385132,
      "quote": "\u201cDon't JustDon't just learn, experience.Don't just read, absorb.Don't just change, transform.Don't just relate, advocate.Don't just promise, prove.Don't just criticize, encourage.Don't just think, ponder.Don't just take, give.Don't just see, feel.Don\u00e2\u20ac\u2122t just dream, do. Don't just hear, listen.Don't just talk, act.Don't just tell, show.Don't just exist, live.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.9214094281,
      "y": 0.6261149645,
      "quote": "\u201cLet there be spaces in your togetherness, And let the winds of the heavens dance between you. Love one another but make not a bond of love: Let it rather be a moving sea between the shores of your souls. Fill each other's cup but drink not from one cup. Give one another of your bread but eat not from the same loaf. Sing and dance together and be joyous, but let each one of you be alone, Even as the strings of a lute are alone though they quiver with the same music. Give your hearts, but not into each other's keeping. For only the hand of Life can contain your hearts. And stand together, yet not too near together: For the pillars of the temple stand apart, And the oak tree and the cypress grow not in each other's shadow.\u201d",
      "author": "Khalil Gibran,"
  },
  {
      "x": 0.4652634859,
      "y": 0.6719379425,
      "quote": "\u201cBooks are the mirrors of the soul.\u201d",
      "author": "Virginia Woolf,"
  },
  {
      "x": 0.7125789523,
      "y": 0.3584580123,
      "quote": "\u201cI don\u00e2\u20ac\u2122t know if you\u00e2\u20ac\u2122ve ever felt like that. That you wanted to sleep for a thousand years. Or just not exist. Or just not be aware that you do exist. Or something like that. I think wanting that is very morbid, but I want it when I get like this. That\u00e2\u20ac\u2122s why I\u00e2\u20ac\u2122m trying not to think. I just want it all to stop spinning.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.459096849,
      "y": 0.2346464694,
      "quote": "\u201cBe careful of love. It'll twist your brain around and leave you thinking up is down and right is wrong.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.5177059174,
      "y": 0.8620820045,
      "quote": "\u201cIf you look for perfection, you'll never be content.\u201d",
      "author": "Leo Tolstoy,"
  },
  {
      "x": 0.6261627078,
      "y": 0.9766834974,
      "quote": "\u201cI can feel Peeta press his forehead into my temple and he asks, 'So now that you've got me, what are you going to do with me?' I turn into him. 'Put you somewhere you can't get hurt.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.3549405932,
      "y": 0.5152837038,
      "quote": "\u201cI've got a stele we can use. Who wants to do me?\"\"A regrettable choice of words,\" muttered Magnus.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3819496632,
      "y": 0.1829707623,
      "quote": "\u201cIt kills me sometimes, how people die.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.7252752185,
      "y": 0.5809671879,
      "quote": "\u201cBlessed is he who expects nothing, for he shall never be disappointed.\u201d",
      "author": "Alexander Pope"
  },
  {
      "x": 0.3624438643,
      "y": 0.1304647774,
      "quote": "\u201cThere is nothing in the world so irresistibly contagious as laughter and good humor.\u201d",
      "author": "Charles Dickens,"
  },
  {
      "x": 0.6184412241,
      "y": 0.3433064818,
      "quote": "\u201cNone but ourselves can free our minds.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.4274744987,
      "y": 0.3636181355,
      "quote": "\u201cI did then what I knew how to do. Now that I know better, I do better.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.5719002485,
      "y": 0.6285173893,
      "quote": "\u201cUnbeing dead isn't being alive.\u201d",
      "author": "E. E. Cummings"
  },
  {
      "x": 0.3531237245,
      "y": 0.4082290232,
      "quote": "\u201cNobody likes being alone that much. I don't go out of my way to make friends, that's all. It just leads to disappointment. \u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.7242762446,
      "y": 0.7008661032,
      "quote": "\u201cNever say goodbye because goodbye means going away and going away means forgetting.\u201d",
      "author": "J.M. Barrie,"
  },
  {
      "x": 0.6378142238,
      "y": 0.6600124836,
      "quote": "\u201cFriendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything.\u201d",
      "author": "Muhammad Ali"
  },
  {
      "x": 0.5307049155,
      "y": 0.8080105782,
      "quote": "\u201cMusic was my refuge. I could crawl into the space between the notes and curl my back to loneliness.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.3121209741,
      "y": 0.3586803079,
      "quote": "\u201cDon't talk to me.\"\"Why not?\"\"Because I want to fix that in my memory for ever. Draco Malfoy, the amazing bouncing ferret...\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.3823950291,
      "y": 0.5149979591,
      "quote": "\u201cFear cuts deeper than swords.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.5981950164,
      "y": 0.2585403919,
      "quote": "\u201cDeath must be so beautiful. To lie in the soft brown earth, with the grasses waving above one's head, and listen to silence. To have no yesterday, and no tomorrow. To forget time, to forgive life, to be at peace.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.3577688336,
      "y": 0.0780737698,
      "quote": "\u201cEven if you cannot change all the people around you, you can change the people you choose to be around. Life is too short to waste your time on people who don\u00e2\u20ac\u2122t respect, appreciate, and value you. Spend your life with people who make you smile, laugh, and feel loved.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4470746517,
      "y": 0.5019103289,
      "quote": "\u201cWhy, sometimes I've believed as many as six impossible things before breakfast.\u201d",
      "author": "Lewis Carroll,"
  },
  {
      "x": 0.495772779,
      "y": 0.4344670475,
      "quote": "\u201cPeople haven't always been there for me but music always has.\u201d",
      "author": "Taylor Swift"
  },
  {
      "x": 0.315435946,
      "y": 0.7209920883,
      "quote": "\u201cLife should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming \"Wow! What a Ride!\u201d",
      "author": "Hunter S. Thompson,"
  },
  {
      "x": 0.5189413428,
      "y": 0.3389398456,
      "quote": "\u201cMany boys will bring you flowers. But someday you'll meet a boy who will learn your favorite flower, your favorite song, your favorite sweet. And even if he is too poor to give you any of them, it won't matter because he will have taken the time to know you as no one else does. Only that boy earns your heart.\u201d",
      "author": "Leigh Bardugo,"
  },
  {
      "x": 0.6026152968,
      "y": 0.2085686326,
      "quote": "\u201cYou cannot control the behavior of others, but you can always choose how you respond to it.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4708162546,
      "y": 0.6180950403,
      "quote": "\u201cWar is what happens when language fails.\u201d",
      "author": "Margaret Atwood"
  },
  {
      "x": 0.2705578804,
      "y": 0.376668483,
      "quote": "\u201cI will not say: do not weep; for not all tears are an evil.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.8154560924,
      "y": 0.8751081228,
      "quote": "\u201cLet no man pull you so low as to hate him.\u201d",
      "author": "Martin Luther King Jr.,"
  },
  {
      "x": 0.374341011,
      "y": 0.267149657,
      "quote": "\u201cYou know, Minister, I disagree with Dumbledore on many counts...but you cannot deny he's got style...\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.2331083417,
      "y": 0.4925378859,
      "quote": "\u201cTo go wrong in one's own way is better than to go right in someone else's.\u201d",
      "author": "Fyodor Dostoevsky,"
  },
  {
      "x": 0.5532209277,
      "y": 0.2409456074,
      "quote": "\u201cIt is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.\u201d",
      "author": "Vincent Van Gogh"
  },
  {
      "x": 0.3211138844,
      "y": 0.580637455,
      "quote": "\u201cThe world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.335491538,
      "y": 0.4595061839,
      "quote": "\u201cHe must have known I'd want to leave you.\"\"No, he must have known you would always want to come back.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4356533289,
      "y": 0.5689326525,
      "quote": "\u201cYou can spend minutes, hours, days, weeks, or even months over-analyzing a situation; trying to put the pieces together, justifying what could've, would've happened... or you can just leave the pieces on the floor and move the fuck on.\u201d",
      "author": "Tupac Shakur"
  },
  {
      "x": 0.4168115258,
      "y": 0.3147702515,
      "quote": "\u201cLet us step into the night and pursue that flighty temptress, adventure.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.877159059,
      "y": 0.1948460639,
      "quote": "\u201cLet us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.\u201d",
      "author": "Marcel Proust"
  },
  {
      "x": 0.4914541245,
      "y": 0.8871635199,
      "quote": "\u201cAll grown-ups were once children... but only few of them remember it.\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry,"
  },
  {
      "x": 0.3585618138,
      "y": 0.296423614,
      "quote": "\u201cOne of the Silent Brothers is here to see you. Hodge sent me to wake you up. Actually he offered to wake you himself, but since it's 5 a.m., I figured you'd be less cranky if you had something nice to look at.\"\"Meaning you?\"\"What else?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5954834819,
      "y": 0.1532266736,
      "quote": "\u201cIt's all right to love someone who doesn't love you back, as long as they're worth you loving them. As long as they deserve it.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4277265072,
      "y": 0.7457505465,
      "quote": "\u201cGod has no religion.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.222690165,
      "y": 0.6270617247,
      "quote": "\u201cI don't want to repeat my innocence. I want the pleasure of losing it again.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.5476875901,
      "y": 0.9174460173,
      "quote": "\u201cLove does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.\u201d",
      "author": "James A. Baldwin"
  },
  {
      "x": 0.3263585567,
      "y": 0.4615965188,
      "quote": "\u201cYou guessed? You must have been pretty sure, considering you could have killed me.\"\"I was ninety percent sure.\"\"I see,\" Clary said. There must have been something in her voice, because he turned to look at her. Her hand cracked across his face, a slap that rocked him back on his heels. He put his hands on his cheek, more in surprise than pain.\"What the hell was that for?\"\"The other ten percent.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5009483099,
      "y": 0.2780090868,
      "quote": "\u201cThe truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.\u201d",
      "author": "Steve Maraboli,"
  },
  {
      "x": 0.1190806329,
      "y": 0.4092110991,
      "quote": "\u201cTrust yourself. You know more than you think you do.\u201d",
      "author": "Benjamin Spock"
  },
  {
      "x": 0.69689399,
      "y": 0.2657573819,
      "quote": "\u201cIt is amazing how complete is the delusion that beauty is goodness.\u201d",
      "author": "Leo Tolstoy,"
  },
  {
      "x": 0.7426864505,
      "y": 0.7052242756,
      "quote": "\u201cDo what is right, not what is easy nor what is popular.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4721512794,
      "y": 0.2218549252,
      "quote": "\u201cEach friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.\u201d",
      "author": "Anais Nin,"
  },
  {
      "x": 0.219666183,
      "y": 0.7184234858,
      "quote": "\u201cWithout deviation from the norm, progress is not possible.\u201d",
      "author": "Frank Zappa"
  },
  {
      "x": 0.9042366147,
      "y": 0.6380826235,
      "quote": "\u201cClouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.\u201d",
      "author": "Rabindranath Tagore,"
  },
  {
      "x": 0.137957871,
      "y": 0.64579916,
      "quote": "\u201cBooks are the plane, and the train, and the road. They are the destination, and the journey. They are home.\u201d",
      "author": "Anna Quindlen,"
  },
  {
      "x": 0.6190727949,
      "y": 0.1874953508,
      "quote": "\u201cSometimes our light goes out, but is blown again into instant flame by an encounter with another human being.\u201d",
      "author": "Albert Schweitzer"
  },
  {
      "x": 0.3911774755,
      "y": 0.328166306,
      "quote": "\u201cLife has no meaning. Each of us has meaning and we bring it to life. It is a waste to be asking the question when you are the answer.\u201d",
      "author": "Joseph Campbell"
  },
  {
      "x": 0.72254318,
      "y": 0.6218476295,
      "quote": "\u201cFear of a name increases fear of the thing itself.\u201d",
      "author": "J.K. rowling,"
  },
  {
      "x": 0.4843584895,
      "y": 0.1940147281,
      "quote": "\u201cHow many slams in an old screen door? Depends how loud you shut it. How many slices in a bread? Depends how thin you cut it. How much good inside a day? Depends how good you live 'em. How much love inside a friend? Depends how much you give 'em.\u201d",
      "author": "Shel Silverstein"
  },
  {
      "x": 0.3259308934,
      "y": 0.290651232,
      "quote": "\u201cIt is better to fail in originality than to succeed in imitation.\u201d",
      "author": "Herman Melville"
  },
  {
      "x": 0.6668661833,
      "y": 0.3840078712,
      "quote": "\u201cWhen life gives you lemons, squirt someone in the eye.\u201d",
      "author": "Cathy Guiswite"
  },
  {
      "x": 0.6021441817,
      "y": 0.0795745552,
      "quote": "\u201cThat's the problem with drinking, I thought, as I poured myself a drink. If something bad happens you drink in an attempt to forget; if something good happens you drink in order to celebrate; and if nothing happens you drink to make something happen.\u201d",
      "author": "Charles Bukowski,"
  },
  {
      "x": 0.2375355959,
      "y": 0.5771528482,
      "quote": "\u201cIf you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.2273808122,
      "y": 0.5637347698,
      "quote": "\u201cWhen love is not madness it is not love.\u201d",
      "author": "Pedro Calderon de la Barca"
  },
  {
      "x": 0.4026350975,
      "y": 0.7367337942,
      "quote": "\u201cI think... if it is true that there are as many minds as there are heads, then there are as many kinds of love as there are hearts.\u201d",
      "author": "Leo Tolstoy,"
  },
  {
      "x": 0.7782260776,
      "y": 0.1507694423,
      "quote": "\u201cI\u00e2\u20ac\u2122m here. I love you. I don\u00e2\u20ac\u2122t care if you need to stay up crying all night long, I will stay with you. If you need the medication again, go ahead and take it\u00e2\u20ac\u201dI will love you through that, as well. If you don\u00e2\u20ac\u2122t need the medication, I will love you, too. There\u00e2\u20ac\u2122s nothing you can ever do to lose my love. I will protect you until you die, and after your death I will still protect you. I am stronger than Depression and I am braver than Loneliness and nothing will ever exhaust me.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.8604323268,
      "y": 0.9460500479,
      "quote": "\u201cOnce you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy.\u201d",
      "author": "Einstein"
  },
  {
      "x": 0.9333050847,
      "y": 0.5139219761,
      "quote": "\u201cWhy are they all staring?\" demanded Albus as he and Rose craned around to look at the other students.\"Don\u00e2\u20ac\u2122t let it worry you,\" said Ron. \"It\u00e2\u20ac\u2122s me. I\u00e2\u20ac\u2122m extremely famous.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.3784442544,
      "y": 0.1611913741,
      "quote": "\u201cI cannot remember the books I've read any more than the meals I have eaten; even so, they have made me.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.5086219907,
      "y": 0.7555824518,
      "quote": "\u201cPeople say nothing is impossible, but I do nothing every day.\u201d",
      "author": "A.A. Milne,"
  },
  {
      "x": 0.4520967007,
      "y": 0.1751698554,
      "quote": "\u201cI hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.6510108113,
      "y": 0.5244882107,
      "quote": "\u201cIt is more fun to talk with someone who doesn't use long, difficult words but rather short, easy words like \"What about lunch?\u201d",
      "author": "A. A. Milne,"
  },
  {
      "x": 0.2678242922,
      "y": 0.3750528693,
      "quote": "\u201cIt's like everyone tells a story about themselves inside their own head. Always. All the time. That story makes you what you are. We build ourselves out of that story.\u201d",
      "author": "Patrick Rothfuss,"
  },
  {
      "x": 0.5756156445,
      "y": 0.1083768904,
      "quote": "\u201cThere are wounds that never show on the body that are deeper and more hurtful than anything that bleeds.\u201d",
      "author": "Laurell K. Hamilton,"
  },
  {
      "x": 0.0401411951,
      "y": 0.3275229335,
      "quote": "\u201cVanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.4985054731,
      "y": 0.2032228708,
      "quote": "\u201cA brave man acknowledges the strength of others.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.357178092,
      "y": 0.6139153242,
      "quote": "\u201cWomen who seek to be equal with men lack ambition.\u201d",
      "author": "Timothy Leary"
  },
  {
      "x": 0.546628356,
      "y": 0.7164899111,
      "quote": "\u201cWords can be like X-rays if you use them properly -- they\u00e2\u20ac\u2122ll go through anything. You read and you\u00e2\u20ac\u2122re pierced.\u201d",
      "author": "Aldous Huxley,"
  },
  {
      "x": 0.5479926467,
      "y": 0.4169134796,
      "quote": "\u201cDo you think I am an automaton? \u00e2\u20ac\u201d a machine without feelings? and can bear to have my morsel of bread snatched from my lips, and my drop of living water dashed from my cup? Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong! \u00e2\u20ac\u201d I have as much soul as you \u00e2\u20ac\u201d and full as much heart! And if God had gifted me with some beauty and much wealth, I should have made it as hard for you to leave me, as it is now for me to leave you. I am not talking to you now through the medium of custom, conventionalities, nor even of mortal flesh: it is my spirit that addresses your spirit; just as if both had passed through the grave, and we stood at God's feet, equal \u00e2\u20ac\u201d as we are!\u201d",
      "author": "Charlotte Bront\u00c3\u00ab,"
  },
  {
      "x": 0.524189651,
      "y": 0.5700562,
      "quote": "\u201cBegin at the beginning,\" the King said, very gravely, \"and go on till you come to the end: then stop.\u201d",
      "author": "Lewis Carroll,"
  },
  {
      "x": 0.542488277,
      "y": 0.9245584011,
      "quote": "\u201cIt always shocked me when I realized that I wasn\u00e2\u20ac\u2122t the only person in the world who thought and felt such strange and awful things.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.9006678462,
      "y": 0.5945765972,
      "quote": "\u201cCan I help you with something?\"Clary turned instant traitor against her gender. \"Those girls on the other side of the car are staring at you.\"Jace assumed an air of mellow gratification. \"Of course they are,\" he said, \"I am stunningly attractive.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4266662002,
      "y": 0.4883356392,
      "quote": "\u201cIf you go home with somebody, and they don't have books, don't fuck 'em!\u201d",
      "author": "John Waters"
  },
  {
      "x": 0.6381055117,
      "y": 0.9019556046,
      "quote": "\u201cSome people have lives; some people have music.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.7761791348,
      "y": 0.4365878999,
      "quote": "\u201cFinnick?\" I say, \"Maybe some pants?\"He looks down at his legs as if noticing his outfit for the first time. Then he whips off his hospital gown leaving him in just his underwear. \"Why? Do you find this\" -- he strikes a ridiculously provocative pose -- \"distracting?\"I laugh. Boggs looks embarrassed and Finnick looks more like the guy I met at the Quarter Quell\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.6224418283,
      "y": 0.5052560568,
      "quote": "\u201cThe journey of a thousand miles begins with a single step.\u201d",
      "author": "Lao Tzu"
  },
  {
      "x": 0.2494898438,
      "y": 0.5101978779,
      "quote": "\u201cBe patient toward all that is unsolved in your heart and try to love the questions themselves, like locked rooms and like books that are now written in a very foreign tongue. Do not now seek the answers, which cannot be given you because you would not be able to live them. And the point is, to live everything. Live the questions now. Perhaps you will then gradually, without noticing it, live along some distant day into the answer.\u201d",
      "author": "Rainer Maria Rilke"
  },
  {
      "x": 0.5443469286,
      "y": 0.066655919,
      "quote": "\u201cWe are not necessarily doubting that God will do the best for us; we are wondering how painful the best will turn out to be.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.2380235791,
      "y": 0.2703568637,
      "quote": "\u201cWhat you must understand about me is that I\u00e2\u20ac\u2122m a deeply unhappy person.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.2396537662,
      "y": 0.2168064415,
      "quote": "\u201cPeople think dreams aren't real just because they aren't made of matter, of particles. Dreams are real. But they are made of viewpoints, of images, of memories and puns and lost hopes.\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.3139531016,
      "y": 0.4453580081,
      "quote": "\u201cTell the truth, or someone will tell it for you.\u201d",
      "author": "Stephanie Klein,"
  },
  {
      "x": 0.2014696598,
      "y": 0.2004480958,
      "quote": "\u201cIf you like her, if she makes you happy, and if you feel like you know her---then don't let her go.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.1450228393,
      "y": 0.2973248959,
      "quote": "\u201cRather than love, than money, than fame, give me truth.\u201d",
      "author": "Henry David Thoreau,"
  },
  {
      "x": 0.9541259408,
      "y": 0.556073308,
      "quote": "\u201cNo person is your friend who demands your silence, or denies your right to grow.\u201d",
      "author": "Alice Walker"
  },
  {
      "x": 0.6012198329,
      "y": 0.4775609672,
      "quote": "\u201cWe live for books.\u201d",
      "author": "Umberto Eco"
  },
  {
      "x": 0.3890299201,
      "y": 0.278385967,
      "quote": "\u201cFantasy is escapist, and that is its glory. If a soldier is imprisioned by the enemy, don't we consider it his duty to escape?. . .If we value the freedom of mind and soul, if we're partisans of liberty, then it's our plain duty to escape, and to take as many people with us as we can!\u201d",
      "author": "J.R.R. Tolkien"
  },
  {
      "x": 0.1212179959,
      "y": 0.4541724026,
      "quote": "\u201cThe things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.\u201d",
      "author": "Kalu Ndukwe Kalu"
  },
  {
      "x": 0.4356403947,
      "y": 0.5948954821,
      "quote": "\u201cThe most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen.\u201d",
      "author": "Elisabeth K\u00c3\u00bcbler-Ross"
  },
  {
      "x": 0.3823567033,
      "y": 0.2986605763,
      "quote": "\u201cDare to BeWhen a new day begins, dare to smile gratefully.When there is darkness, dare to be the first to shine a light.When there is injustice, dare to be the first to condemn it.When something seems difficult, dare to do it anyway.When life seems to beat you down, dare to fight back.When there seems to be no hope, dare to find some.When you\u00e2\u20ac\u2122re feeling tired, dare to keep going.When times are tough, dare to be tougher.When love hurts you, dare to love again.When someone is hurting, dare to help them heal.When another is lost, dare to help them find the way.When a friend falls, dare to be the first to extend a hand.When you cross paths with another, dare to make them smile.When you feel great, dare to help someone else feel great too.When the day has ended, dare to feel as you\u00e2\u20ac\u2122ve done your best.Dare to be the best you can \u00e2\u20ac\u201cAt all times, Dare to be!\u201d",
      "author": "Steve Maraboli,"
  },
  {
      "x": 0.3409289122,
      "y": 0.6036013365,
      "quote": "\u201cLife becomes easier and more beautiful when we can see the good in other people.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.4343453646,
      "y": 0.3805580437,
      "quote": "\u201cI\u00e2\u20ac\u2122d said it before and meant it: Alive or undead, the love of my life was a badass.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.3296900392,
      "y": 0.5249791145,
      "quote": "\u201cGod will not look you over for medals, degrees or diplomas but for scars.\u201d",
      "author": "Elbert Hubbard"
  },
  {
      "x": 0.5530008674,
      "y": 0.7831382751,
      "quote": "\u201cThe most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too.\u201d",
      "author": "Ernest Hemingway,"
  },
  {
      "x": 0.4942387342,
      "y": 0.6295982599,
      "quote": "\u201cWell, it seems to me that the best relationships - the ones that last - are frequently the ones that are rooted in friendship. You know, one day you look at the person and you see something more than you did the night before. Like a switch has been flicked somewhere. And the person who was just a friend is... suddenly the only person you can ever imagine yourself with.\u201d",
      "author": "Gillian Anderson"
  },
  {
      "x": 0.1688504517,
      "y": 0.2250142694,
      "quote": "\u201cSome things don't last forever, but some things do. Like a good song, or a good book, or a good memory you can take out and unfold in your darkest times, pressing down on the corners and peering in close, hoping you still recognize the person you see there.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.4848017693,
      "y": 0.7490180731,
      "quote": "\u201cArt is the lie that enables us to realize the truth.\u201d",
      "author": "Pablo Picasso"
  },
  {
      "x": 0.6420164704,
      "y": 0.2717668116,
      "quote": "\u201cMen always say that as the defining compliment, don\u00e2\u20ac\u2122t they? She\u00e2\u20ac\u2122s a cool girl. Being the Cool Girl means I am a hot, brilliant, funny woman who adores football, poker, dirty jokes, and burping, who plays video games, drinks cheap beer, loves threesomes and anal sex, and jams hot dogs and hamburgers into her mouth like she\u00e2\u20ac\u2122s hosting the world\u00e2\u20ac\u2122s biggest culinary gang bang while somehow maintaining a size 2, because Cool Girls are above all hot. Hot and understanding. Cool Girls never get angry; they only smile in a chagrined, loving manner and let their men do whatever they want. Go ahead, shit on me, I don\u00e2\u20ac\u2122t mind, I\u00e2\u20ac\u2122m the Cool Girl.Men actually think this girl exists. Maybe they\u00e2\u20ac\u2122re fooled because so many women are willing to pretend to be this girl. For a long time Cool Girl offended me. I used to see men \u00e2\u20ac\u201c friends, coworkers, strangers \u00e2\u20ac\u201c giddy over these awful pretender women, and I\u00e2\u20ac\u2122d want to sit these men down and calmly say: You are not dating a woman, you are dating a woman who has watched too many movies written by socially awkward men who\u00e2\u20ac\u2122d like to believe that this kind of woman exists and might kiss them. I\u00e2\u20ac\u2122d want to grab the poor guy by his lapels or messenger bag and say: The bitch doesn\u00e2\u20ac\u2122t really love chili dogs that much \u00e2\u20ac\u201c no one loves chili dogs that much! And the Cool Girls are even more pathetic: They\u00e2\u20ac\u2122re not even pretending to be the woman they want to be, they\u00e2\u20ac\u2122re pretending to be the woman a man wants them to be. Oh, and if you\u00e2\u20ac\u2122re not a Cool Girl, I beg you not to believe that your man doesn\u00e2\u20ac\u2122t want the Cool Girl. It may be a slightly different version \u00e2\u20ac\u201c maybe he\u00e2\u20ac\u2122s a vegetarian, so Cool Girl loves seitan and is great with dogs; or maybe he\u00e2\u20ac\u2122s a hipster artist, so Cool Girl is a tattooed, bespectacled nerd who loves comics. There are variations to the window dressing, but believe me, he wants Cool Girl, who is basically the girl who likes every fucking thing he likes and doesn\u00e2\u20ac\u2122t ever complain. (How do you know you\u00e2\u20ac\u2122re not Cool Girl? Because he says things like: \u00e2\u20ac\u0153I like strong women.\u00e2\u20ac\ufffd If he says that to you, he will at some point fuck someone else. Because \u00e2\u20ac\u0153I like strong women\u00e2\u20ac\ufffd is code for \u00e2\u20ac\u0153I hate strong women.\u00e2\u20ac\ufffd)\u201d",
      "author": "Gillian Flynn,"
  },
  {
      "x": 0.5724615455,
      "y": 0.3488985598,
      "quote": "\u201cThink left and think right and think low and think high. Oh, the thinks you can think up if only you try!\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.6107563376,
      "y": 0.7373894453,
      "quote": "\u201cDo not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.\u201d",
      "author": "Bertrand Russell"
  },
  {
      "x": 0.039837122,
      "y": 0.354606539,
      "quote": "\u201cMom says it's because she has PMS.Do you even know what that means?\"I'm not a little kid anymore. It means pissed-at- men syndrome\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.3592121005,
      "y": 0.4528382123,
      "quote": "\u201cI suppose I'll have to add the force of gravity to my list of enemies.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.0410884321,
      "y": 0.3510258794,
      "quote": "\u201cLife is for the living.Death is for the dead.Let life be like music. And death a note unsaid.\u201d",
      "author": "Langston Hughes,"
  },
  {
      "x": 0.4858458042,
      "y": 0.0679151118,
      "quote": "\u201cOnly a true best friend can protect you from your immortal enemies.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.5131490231,
      "y": 0.326202035,
      "quote": "\u201cThe only way to find true happiness is to risk being completely cut open.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.4795739651,
      "y": 0.5121412277,
      "quote": "\u201cYou may not control all the events that happen to you, but you can decide not to be reduced by them.\u201d",
      "author": "Maya Angelou,"
  },
  {
      "x": 0.7221688628,
      "y": 0.755237937,
      "quote": "\u201cIf I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.4294230938,
      "y": 0.293042928,
      "quote": "\u201cIf cats looked like frogs we'd realize what nasty, cruel little bastards they are. Style. That's what people remember.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.8272991776,
      "y": 0.7096534967,
      "quote": "\u201cThe best way to find out if you can trust somebody is to trust them.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.5593566895,
      "y": 0.0670800805,
      "quote": "\u201cThere is no surer foundation for a beautiful friendship than a mutual taste in literature.\u201d",
      "author": "P.G. Wodehouse"
  },
  {
      "x": 0.4690995812,
      "y": 0.2693070769,
      "quote": "\u201cSome cause happiness wherever they go; others whenever they go.\u201d",
      "author": "Oscar Wilde (attributed to)"
  },
  {
      "x": 0.1473318338,
      "y": 0.5072875023,
      "quote": "\u201cThere may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.\u201d",
      "author": "Elie Wiesel"
  },
  {
      "x": 0.2549163699,
      "y": 0.4966994822,
      "quote": "\u201cThe most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.\u201d",
      "author": "Albert Einstein,"
  },
  {
      "x": 0.2559015751,
      "y": 0.3815961778,
      "quote": "\u201cA painter should begin every canvas with a wash of black, because all things in nature are dark except where exposed by the light.\u201d",
      "author": "Leonardo da Vinci"
  },
  {
      "x": 0.2518389225,
      "y": 0.6499265432,
      "quote": "\u201cSome old wounds never truly heal, and bleed again at the slightest word.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.6430927515,
      "y": 0.3457728326,
      "quote": "\u201cDeclarations of love amuse me. Especially when unrequited.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4684314132,
      "y": 0.5961709023,
      "quote": "\u201cPeople aren't born good or bad. Maybe they're born with tendencies either way, but its the way you live your life that matters.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2164171934,
      "y": 0.3567244709,
      "quote": "\u201cMusic is a total constant. That's why we have such a strong visceral connection to it, you know? Because a song can take you back instantly to a moment, or a place, or even a person. No matter what else has changed in your or the world, that one song says the same, just like that moment.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.5686043501,
      "y": 0.9813061953,
      "quote": "\u201cDon\u00e2\u20ac\u2122t grieve. Anything you lose comes round in another form.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.2092426419,
      "y": 0.6024231911,
      "quote": "\u201cInvestigation?\" Isabelle laughed. \"Now we're detectives? Maybe we should all have code names.\"\"Good idea,\" said Jace. \"I shall be Baron Hotschaft Von Hugenstein.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2918157578,
      "y": 0.7658293247,
      "quote": "\u201cTrue love is rare, and it's the only thing that gives life real meaning.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.3345303535,
      "y": 0.712916255,
      "quote": "\u201cThe minute I heard my first love story,I started looking for you, not knowinghow blind that was.Lovers don't finally meet somewhere.They're in each other all along.\u201d",
      "author": "Mawlana Jalal-al-Din Rumi,"
  },
  {
      "x": 0.037453711,
      "y": 0.536872983,
      "quote": "\u201cI love you more than there are stars in the sky and fish in the sea.\u201d",
      "author": "Nicholas Sparks"
  },
  {
      "x": 0.4354248047,
      "y": 0.5549237728,
      "quote": "\u201cA woman's heart should be so hidden in God that a man has to seek Him just to find her.\u201d",
      "author": "Max Lucado"
  },
  {
      "x": 0.6259842515,
      "y": 0.9304596186,
      "quote": "\u201cThe Guide says there is an art to flying\", said Ford, \"or rather a knack. The knack lies in learning how to throw yourself at the ground and miss.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.087608546,
      "y": 0.290673703,
      "quote": "\u201cYou smell good, too,\u00e2\u20ac\ufffd said PatchIt\u00e2\u20ac\u2122s called a shower.\u00e2\u20ac\ufffd I was staring straight ahead. When he didn\u00e2\u20ac\u2122t answer, I turned sideways. \u00e2\u20ac\u0153Soap. Shampoo. Hot water.\u00e2\u20ac\ufffdNaked. I know the drill.\u201d",
      "author": "Becca Fitzpatrick,"
  },
  {
      "x": 0.7573186755,
      "y": 0.6834064722,
      "quote": "\u201cDumbledore says people find it far easier to forgive others for being wrong than being right.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.1941994429,
      "y": 0.4851374328,
      "quote": "\u201cIn heaven, all the interesting people are missing.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.5839414597,
      "y": 0.3212242723,
      "quote": "\u201cI know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.3777996898,
      "y": 0.0752662271,
      "quote": "\u201cThe scariest moment is always just before you start.\u201d",
      "author": "Stephen King,"
  },
  {
      "x": 0.2047423124,
      "y": 0.4873833954,
      "quote": "\u201cIt's kind of fun to do the impossible.\u201d",
      "author": "Walt Disney"
  },
  {
      "x": 0.5724912286,
      "y": 0.9789509773,
      "quote": "\u201cDo you think I'm pretty?I think you're beautifulBeautiful?You are so beautiful, it hurts sometimes.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.5970000625,
      "y": 0.4039617181,
      "quote": "\u201cWhat's this?\" he demanded, looking from Clary to his companions, as if they might know what she was doing there.\"It's a girl,\" Jace said,recovering his composure. \"Surely you've seen girls before, Alec. Your sister Isabelle is one.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5172256827,
      "y": 0.5518348217,
      "quote": "\u201cWe know what we are, but not what we may be.\u201d",
      "author": "William Shakespeare"
  },
  {
      "x": 0.168964386,
      "y": 0.57129848,
      "quote": "\u201cWould you tell me, please, which way I ought to go from here?\"\"That depends a good deal on where you want to get to.\"\"I don't much care where \u00e2\u20ac\u201c\"\"Then it doesn't matter which way you go.\u201d",
      "author": "Lewis Carroll,"
  },
  {
      "x": 0.4429197907,
      "y": 0.44421193,
      "quote": "\u201cFollow your inner moonlight; don't hide the madness.\u201d",
      "author": "Allen Ginsberg"
  },
  {
      "x": 0.4879932404,
      "y": 0.801702261,
      "quote": "\u201cPain is temporary. Quitting lasts forever.\u201d",
      "author": "Lance Armstrong Sally Jenkins,"
  },
  {
      "x": 0.6577967405,
      "y": 0.2863473594,
      "quote": "\u201cYou know,\" Gabriel said, \"there was a time I thought we could be friends, Will.\"\"There was a time I thought I was a ferret,\" Will said, \"but that turned out to be the opium haze. Did you know it had that effect? Because I didn't.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2725803852,
      "y": 0.6175482273,
      "quote": "\u201cTo define is to limit.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.5168031454,
      "y": 0.3510668874,
      "quote": "\u201cI loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.\u201d",
      "author": "Charles Dickens,"
  },
  {
      "x": 0.7295410037,
      "y": 0.2228779197,
      "quote": "\u201cYou have power over your mind - not outside events. Realize this, and you will find strength.\u201d",
      "author": "Marcus Aurelius,"
  },
  {
      "x": 0.7860736251,
      "y": 0.2533398569,
      "quote": "\u201cThere is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.6505461335,
      "y": 0.1056362092,
      "quote": "\u201cKnowing others is intelligence;knowing yourself is true wisdom.Mastering others is strength; mastering yourself is true power.\u201d",
      "author": "Lao Tzu,"
  },
  {
      "x": 0.2330230474,
      "y": 0.3961577415,
      "quote": "\u201cWorry does not empty tomorrow of its sorrow, it empties today of its strength.\u201d",
      "author": "Corrie Ten Boom,"
  },
  {
      "x": 0.4913429022,
      "y": 0.3141697347,
      "quote": "\u201cIt has been said, 'time heals all wounds.' I do not agree. The wounds remain. In time, the mind, protecting its sanity, covers them with scar tissue and the pain lessens. But it is never gone.\u201d",
      "author": "Rose Fitzgerald Kennedy"
  },
  {
      "x": 0.6786538363,
      "y": 0.2693964243,
      "quote": "\u201cDon't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.4172962308,
      "y": 0.8420639038,
      "quote": "\u201cThere comes a time when one must take a position that is neither safe, nor politic, nor popular, but he must take it because conscience tells him it is right.\u201d",
      "author": "Martin Luther King Jr.,"
  },
  {
      "x": 0.2813506722,
      "y": 0.4640767872,
      "quote": "\u201cWhy is it,\" he said, one time, at the subway entrance, \"I feel I've known you so many years?\"\"Because I like you,\" she said, \"and I don't want anything from you.\u201d",
      "author": "Ray Bradbury,"
  },
  {
      "x": 0.1917023063,
      "y": 0.6035778522,
      "quote": "\u201cI love you. Remember. They cannot take it\u201d",
      "author": "Lauren Oliver,"
  },
  {
      "x": 0.5415999889,
      "y": 0.5067260265,
      "quote": "\u201cA poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.2618729472,
      "y": 0.820700407,
      "quote": "\u201cThe most important kind of freedom is to be what you really are. You trade in your reality for a role. You trade in your sense for an act. You give up your ability to feel, and in exchange, put on a mask. There can't be any large-scale revolution until there's a personal revolution, on an individual level. It's got to happen inside first.\u201d",
      "author": "Jim MORRISON"
  },
  {
      "x": 0.3988186717,
      "y": 0.2761160433,
      "quote": "\u201cYou pierce my soul. I am half agony, half hope...I have loved none but you.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.4098941684,
      "y": 0.4727086127,
      "quote": "\u201cThree things in human life are important: the first is to be kind; the second is to be kind; and the third is to be kind.\u201d",
      "author": "Henry James"
  },
  {
      "x": 0.3928924203,
      "y": 0.622913003,
      "quote": "\u201cIt's not the load that breaks you down, it's the way you carry it.\u201d",
      "author": "Lou Holtz"
  },
  {
      "x": 0.2393380404,
      "y": 0.5623865128,
      "quote": "\u201cI think we dream so we don\u00e2\u20ac\u2122t have to be apart for so long. If we\u00e2\u20ac\u2122re in each other\u00e2\u20ac\u2122s dreams, we can be together all the time.\u201d",
      "author": "A.A. Milne,"
  },
  {
      "x": 0.5959584117,
      "y": 0.2858256698,
      "quote": "\u201cThe true soldier fights not because he hates what is in front of him, but because he loves what is behind him.\u201d",
      "author": "G.K. Chesterton"
  },
  {
      "x": 0.4907258749,
      "y": 0.3672974706,
      "quote": "\u201cI mean, if the relationship can't survive the long term, why on earth would it be worth my time and energy for the short term?\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.8776564002,
      "y": 0.487041384,
      "quote": "\u201cNothing is so painful to the human mind as a great and sudden change.\u201d",
      "author": "Mary Wollstonecraft Shelley,"
  },
  {
      "x": 0.791197598,
      "y": 0.4861898124,
      "quote": "\u201cHe who has a why to live for can bear almost any how.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.9494165778,
      "y": 0.480499357,
      "quote": "\u201cI have heard there are troubles of more than one kind. Some come from ahead and some come from behind. But I've bought a big bat. I'm all ready you see. Now my troubles are going to have troubles with me!\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.5921977162,
      "y": 0.4612247646,
      "quote": "\u201cReading one book is like eating one potato chip.\u201d",
      "author": "Diane Duane,"
  },
  {
      "x": 0.7126970887,
      "y": 0.4995159209,
      "quote": "\u201cA woman has to live her life, or live to repent not having lived it.\u201d",
      "author": "D.H. Lawrence,"
  },
  {
      "x": 0.5434771776,
      "y": 0.7628712654,
      "quote": "\u201cCinderella? Snow White? What's that? An illness?\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6594849229,
      "y": 0.3652403951,
      "quote": "\u201cWhen I was a little girl I used to read fairy tales. In fairy tales you meet Prince Charming and he's everything you ever wanted. In fairy tales the bad guy is very easy to spot. The bad guy is always wearing a black cape so you always know who he is. Then you grow up and you realize that Prince Charming is not as easy to find as you thought. You realize the bad guy is not wearing a black cape and he's not easy to spot; he's really funny, and he makes you laugh, and he has perfect hair.\u201d",
      "author": "Taylor Swift"
  },
  {
      "x": 0.0480785966,
      "y": 0.346543014,
      "quote": "\u201cThere's plenty of sense in nonsense sometimes, if you wish to look for it.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.494099915,
      "y": 0.1599177867,
      "quote": "\u201cDo I not destroy my enemies when I make them my friends?\u201d",
      "author": "Abraham Lincoln"
  },
  {
      "x": 0.1248215437,
      "y": 0.6514335871,
      "quote": "\u201cSuccess is not how high you have climbed, but how you make a positive difference to the world.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.9023408294,
      "y": 0.3290772438,
      "quote": "\u201cEven the darkest night will end and the sun will rise.\u201d",
      "author": "Victor Hugo,"
  },
  {
      "x": 0.4555881023,
      "y": 0.2154526412,
      "quote": "\u201cIf writers wrote as carelessly as some people talk, then adhasdh asdglaseuyt[bn[ pasdlgkhasdfasdf.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.4121377468,
      "y": 0.196613282,
      "quote": "\u201cYou never fail until you stop trying.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.4884725213,
      "y": 0.4082786739,
      "quote": "\u201cI was smiling yesterday,I am smiling today and I will smile tomorrow.Simply because life is too short to cry for anything.\u201d",
      "author": "Santosh Kalwar,"
  },
  {
      "x": 0.8802523017,
      "y": 0.6314740181,
      "quote": "\u201cYou'll stay with me?'Until the very end,' said James.\u201d",
      "author": "J. K. Rowling,"
  },
  {
      "x": 0.8436298966,
      "y": 0.5519603491,
      "quote": "\u201cThat\u00e2\u20ac\u2122s part of what I like about the book in some ways. It portrays death truthfully. You die in the middle of your life, in the middle of a sentence\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.429861486,
      "y": 0.5711013079,
      "quote": "\u201cI read a book one day and my whole life was changed.\u201d",
      "author": "Orhan Pamuk,"
  },
  {
      "x": 0.9333545566,
      "y": 0.4790073335,
      "quote": "\u201cEverything tells me that I am about to make a wrong decision, but making mistakes is just part of life. What does the world want of me? Does it want me to take no risks, to go back to where I came from because I didn't have the courage to say \"yes\" to life?\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.7845667005,
      "y": 0.4492270052,
      "quote": "\u201cbut for my own part, if a book is well written, I always find it too short.\u201d",
      "author": "Jane Austen"
  },
  {
      "x": 0.9541923404,
      "y": 0.5773975849,
      "quote": "\u201cThe most wasted of all days is one without laughter.\u201d",
      "author": "Nicolas Chamfort"
  },
  {
      "x": 0.557330668,
      "y": 0.722409606,
      "quote": "\u201cBooks are for people who wish they were somewhere else.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.6829351783,
      "y": 0.1753345728,
      "quote": "\u201cAmong other things, you'll find that you're not the first person who was ever confused and frightened and even sickened by human behavior. You're by no means alone on that score, you'll be excited and stimulated to know. Many, many men have been just as troubled morally and spiritually as you are right now. Happily, some of them kept records of their troubles. You'll learn from them\u00e2\u20ac\u201dif you want to. Just as someday, if you have something to offer, someone will learn something from you. It's a beautiful reciprocal arrangement. And it isn't education. It's history. It's poetry.\u201d",
      "author": "J.D. Salinger,"
  },
  {
      "x": 0.1880822778,
      "y": 0.4636040628,
      "quote": "\u201cThe paradox of our time in history is that we have taller buildings but shorter tempers, wider Freeways, but narrower viewpoints. We spend more, but have less, we buy more, but enjoy less. We have bigger houses and smaller families, more conveniences, but less time. We have more degrees but less sense, more knowledge, but less judgment, more experts, yet more problems, more medicine, but less wellness.We drink too much, smoke too much, spend too recklessly, laugh too little, drive too fast, get too angry, stay up too late, get up too tired, read too little, watch TV too much, and pray too seldom. We have multiplied our possessions, but reduced our values. We talk too much, love too seldom, and hate too often.We've learned how to make a living, but not a life. We've added years to life not life to years. We've been all the way to the moon and back, but have trouble crossing the street to meet a new neighbor. We conquered outer space but not inner space. We've done larger things, but not better things.We've cleaned up the air, but polluted the soul. We've conquered the atom, but not our prejudice. We write more, but learn less. We plan more, but accomplish less. We've learned to rush, but not to wait. We build more computers to hold more information, to produce more copies than ever, but we communicate less and less.These are the times of fast foods and slow digestion, big men and small character, steep profits and shallow relationships.These are the days of two incomes but more divorce, fancier houses, but broken homes. These are days of quick trips, disposable diapers, throwaway morality, one night stands, overweight bodies, and pills that do everything from cheer, to quiet, to kill. It is a time when there is much in the showroom window and nothing in the stockroom. A time when technology can bring this letter to you, and a time when you can choose either to share this insight, or to just hit delete...Remember, to spend some time with your loved ones, because they are not going to be around forever. Remember, say a kind word to someone who looks up to you in awe, because that little person soon will grow up and leave your side.Remember, to give a warm hug to the one next to you, because that is the only treasure you can give with your heart and it doesn't cost a cent.Remember, to say, \"I love you\" to your partner and your loved ones, but most of all mean it. A kiss and an embrace will mend hurt when it comes from deep inside of you.Remember to hold hands and cherish the moment for someday that person might not be there again. Give time to love, give time to speak! And give time to share the precious thoughts in your mind.\u201d",
      "author": "Bob Moorehead,"
  },
  {
      "x": 0.7855201364,
      "y": 0.1467633545,
      "quote": "\u201cAll the darkness in the world cannot extinguish the light of a single candle.\u201d",
      "author": "St. Francis Of Assisi,"
  },
  {
      "x": 0.4278188944,
      "y": 0.1703631878,
      "quote": "\u201cI believe the universe wants to be noticed. I think the universe is inprobably biased toward the consciousness, that it rewards intelligence in part because the universe enjoys its elegance being observed. And who am I, living in the middle of history, to tell the universe that it-or my observation of it-is temporary?\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.5475994945,
      "y": 0.6184365749,
      "quote": "\u201cPerhaps when we find ourselves wanting everything, it is because we are dangerously close to wanting nothing.\u201d",
      "author": "sylvia plath"
  },
  {
      "x": 0.970647037,
      "y": 0.3167380393,
      "quote": "\u201cShe wasn't bitter. She was sad, though. But it was a hopeful kind of sad. The kind of sad that just takes time. \u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.1508897245,
      "y": 0.303893894,
      "quote": "\u201cWriting is a socially acceptable form of schizophrenia.\u201d",
      "author": "E.L. Doctorow"
  },
  {
      "x": 0.56590873,
      "y": 0.417142719,
      "quote": "\u201cPoets have been mysteriously silent on the subject of cheese.\u201d",
      "author": "G.K. Chesterton,"
  },
  {
      "x": 0.238096714,
      "y": 0.6469936371,
      "quote": "\u201cLaters, baby.\u201d",
      "author": "E.L. James,"
  },
  {
      "x": 0.257247448,
      "y": 0.4076684713,
      "quote": "\u201cLove is an irresistible desire to be irresistibly desired.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.7988544106,
      "y": 0.9238046408,
      "quote": "\u201cIf you want to forget something or someone, never hate it, or never hate him/her. Everything and everyone that you hate is engraved upon your heart; if you want to let go of something, if you want to forget, you cannot hate.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.4734205008,
      "y": 0.2480430305,
      "quote": "\u201cHow do you feel, Georgie?\" whispered Mrs. Weasley.George's fingers groped for the side of his head.\"Saintlike,\" he murmured.\"What's wrong with him?\" croaked Fred, looking terrified. \"Is his mind affected?\"\"Saintlike,\" repeated George, opening his eyes and looking up at his brother. \"You see...I'm HOLEY, Fred, geddit?\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4049395323,
      "y": 0.3449699879,
      "quote": "\u201cEveryone has talent. What's rare is the courage to follow it to the dark places where it leads.\u201d",
      "author": "Erica Jong"
  },
  {
      "x": 0.3604894876,
      "y": 0.7380386591,
      "quote": "\u201cKeep GoingYour hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.8636206985,
      "y": 0.9403297901,
      "quote": "\u201cRight now I\u00e2\u20ac\u2122m having amnesia and d\u00c3\u00a9j\u00c3\u00a0 vu at the same time. I think I\u00e2\u20ac\u2122ve forgotten this before.\u201d",
      "author": "Steven Wright"
  },
  {
      "x": 0.8858166337,
      "y": 0.5874751806,
      "quote": "\u201cAlbus Severus,\" Harry said quietly, so that nobody but Ginny could hear, and she was tactful enough to pretend to be waving to Rose, who was now on the train, \"you were named for two headmasters of Hogwarts. One of them was a Slytherin and he was probably the bravest man I ever knew.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8025123477,
      "y": 0.3035309613,
      "quote": "\u201cI don't believe in the kind of magic in my books. But I do believe something very magical can happen when you read a good book.\u201d",
      "author": "J.K. Rowling"
  },
  {
      "x": 0.5398837924,
      "y": 0.4295522869,
      "quote": "\u201cThe more I see, the less I know for sure.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.2404848933,
      "y": 0.306938082,
      "quote": "\u201cThere is no real ending. It\u00e2\u20ac\u2122s just the place where you stop the story.\u201d",
      "author": "Frank Herbert"
  },
  {
      "x": 0.8290663362,
      "y": 0.2985695601,
      "quote": "\u201cThere are no facts, only interpretations.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.225929141,
      "y": 0.4524585307,
      "quote": "\u201cNo thief, however skillful, can rob one of knowledge, and that is why knowledge is the best and safest treasure to acquire.\u201d",
      "author": "L. Frank Baum,"
  },
  {
      "x": 0.5819459558,
      "y": 0.5976849794,
      "quote": "\u201cWhat is hell? I maintain that it is the suffering of being unable to love.\u201d",
      "author": "Fyodor Dostoevsky,"
  },
  {
      "x": 0.4894649386,
      "y": 0.0176208615,
      "quote": "\u201cI have the choice of being constantly active and happy or introspectively passive and sad. Or I can go mad by ricocheting in between.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.5242058635,
      "y": 0.5306974649,
      "quote": "\u201cHopeSmiles from the threshold of the year to come, Whispering 'it will be happier'...\u201d",
      "author": "Alfred Lord Tennyson"
  },
  {
      "x": 0.0643648207,
      "y": 0.4688521326,
      "quote": "\u201cSome say the world will end in fire,Some say in ice.From what I've tasted of desire,I hold with those who favor fire. But if it had to perish twiceI think I know enough of hateTo say that for destruction iceIs also greatAnd would suffice.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.4770520926,
      "y": 0.7048462629,
      "quote": "\u201cIf I can stop one heart from breaking, I shall not live in vain.\u201d",
      "author": "Emily Dickinson"
  },
  {
      "x": 0.6003546119,
      "y": 0.5568991899,
      "quote": "\u201cYou do not have to be good.You do not have to walk on your kneesfor a hundred miles through the desert, repenting.You only have to let the soft animal of your body love what it loves.Tell me about despair, yours, and I will tell you mine.Meanwhile the world goes on.Meanwhile the sun and the clear pebbles of the rainare moving across the landscapes,over the prairies and the deep trees,the mountains and the rivers.Meanwhile the wild geese, high in the clean blue air,are heading home again.Whoever you are, no matter how lonely,the world offers itself to your imagination,calls to you like the wild geese, harsh and exciting \u00e2\u20ac\u201cover and over announcing your placein the family of things.\u201d",
      "author": "Mary Oliver"
  },
  {
      "x": 0.375186801,
      "y": 0.5792748928,
      "quote": "\u201cWhat would men be without women? Scarce, sir...mighty scarce.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.3524220586,
      "y": 0.1692835689,
      "quote": "\u201cYou\u00e2\u20ac\u2122ve got about as much charm as a dead slug.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.4149339795,
      "y": 0.1350217462,
      "quote": "\u201cFrancois Rabelais. He was a poet. And his last words were \"I go to seek a Great Perhaps.\" That's why I'm going. So I don't have to wait until I die to start seeking a Great Perhaps.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.516276896,
      "y": 0.038550511,
      "quote": "\u201cYou\u00e2\u20ac\u2122re wishin\u00e2\u20ac\u2122 too much, baby. You gotta stop wearing your wishbone where your backbone oughtta be.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.5890053511,
      "y": 0.9156376123,
      "quote": "\u201cI felt my lungs inflate with the onrush of scenery\u00e2\u20ac\u201dair, mountains, trees, people. I thought, \"This is what it is to be happy.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.3943684101,
      "y": 0.5726737976,
      "quote": "\u201cDon't.\" Clary raised a warning hand. \"I'm not really in the mood right now.\"\"That's got to be the first time a girl's ever said that to me,\" Jace mused.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.9518828988,
      "y": 0.3279371858,
      "quote": "\u201cIt's enough for me to be sure that you and I exist at this moment.\u201d",
      "author": "Gabriel Garc\u00c3\u00ada M\u00c3\u00a1rquez,"
  },
  {
      "x": 0.1173881888,
      "y": 0.5766171217,
      "quote": "\u201cStart writing, no matter what. The water does not flow until the faucet is turned on.\u201d",
      "author": "Louis L'Amour"
  },
  {
      "x": 0.2426532507,
      "y": 0.6617797613,
      "quote": "\u201cAll I ever wanted was to reach out and touch another human being not just with my hands but with my heart.\u201d",
      "author": "Tahereh Mafi,"
  },
  {
      "x": 0.3141402006,
      "y": 0.7534855604,
      "quote": "\u201cWalk as if you are kissing the Earth with your feet.\u201d",
      "author": "Thich Nhat Hanh,"
  },
  {
      "x": 0.0609022975,
      "y": 0.5145432949,
      "quote": "\u201cI fell in love with her courage, her sincerity, and her flaming self respect. And it's these things I'd believe in, even if the whole world indulged in wild suspicions that she wasn't all she should be. I love her and it is the beginning of everything.\u201d",
      "author": "F. Scott Fitzgerald"
  },
  {
      "x": 0.19532758,
      "y": 0.5575681925,
      "quote": "\u201cPursue what catches your heart, not what catches your eyes.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.5457353592,
      "y": 0.6848338842,
      "quote": "\u201cOf all forms of caution, caution in love is perhaps the most fatal to true happiness.\u201d",
      "author": "Bertrand Russell,"
  },
  {
      "x": 0.5559016466,
      "y": 0.7515627146,
      "quote": "\u201cLook again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every \"superstar,\" every \"supreme leader,\" every saint and sinner in the history of our species lived there-on a mote of dust suspended in a sunbeam.The Earth is a very small stage in a vast cosmic arena. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot.Our posturings, our imagined self-importance, the delusion that we have some privileged position in the Universe, are challenged by this point of pale light. Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves.The Earth is the only world known so far to harbor life. There is nowhere else, at least in the near future, to which our species could migrate. Visit, yes. Settle, not yet. Like it or not, for the moment the Earth is where we make our stand.It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we've ever known.\u201d",
      "author": "Carl Sagan,"
  },
  {
      "x": 0.66499722,
      "y": 0.4498381317,
      "quote": "\u201cIt is a curious thought, but it is only when you see people looking ridiculous that you realize just how much you love them. \u201d",
      "author": "Agatha Christie,"
  },
  {
      "x": 0.4941779971,
      "y": 0.2705445588,
      "quote": null,
      "author": null
  },
  {
      "x": 0.9350087047,
      "y": 0.5476154089,
      "quote": "\u201cBasically, I have two speeds.... Hostile or smart-aleck. Your choice.\u201d",
      "author": "James Patterson,"
  },
  {
      "x": 0.5015758276,
      "y": 0.4411967695,
      "quote": "\u201cMake improvements, not excuses. Seek respect, not attention.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.5303135514,
      "y": 0.2915866971,
      "quote": "\u201cNo. I can survive well enough on my own\u00e2\u20ac\u201d if given the proper reading material.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.5190739036,
      "y": 0.3100826144,
      "quote": "\u201cAll endings are also beginnings. We just don't know it at the time.\u201d",
      "author": "Mitch Albom,"
  },
  {
      "x": 0.6061148047,
      "y": 0.7323328257,
      "quote": "\u201cThe Chinese use two brush strokes to write the word 'crisis.' One brush stroke stands for danger; the other for opportunity. In a crisis, be aware of the danger--but recognize the opportunity.\u201d",
      "author": "John F. Kennedy"
  },
  {
      "x": 0.6040745378,
      "y": 0.1537504941,
      "quote": "\u201cDon't Panic.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.9999999404,
      "y": 0.5643724203,
      "quote": "\u201cFor me, trees have always been the most penetrating preachers. I revere them when they live in tribes and families, in forests and groves. And even more I revere them when they stand alone. They are like lonely persons. Not like hermits who have stolen away out of some weakness, but like great, solitary men, like Beethoven and Nietzsche. In their highest boughs the world rustles, their roots rest in infinity; but they do not lose themselves there, they struggle with all the force of their lives for one thing only: to fulfil themselves according to their own laws, to build up their own form, to represent themselves. Nothing is holier, nothing is more exemplary than a beautiful, strong tree. When a tree is cut down and reveals its naked death-wound to the sun, one can read its whole history in the luminous, inscribed disk of its trunk: in the rings of its years, its scars, all the struggle, all the suffering, all the sickness, all the happiness and prosperity stand truly written, the narrow years and the luxurious years, the attacks withstood, the storms endured. And every young farmboy knows that the hardest and noblest wood has the narrowest rings, that high on the mountains and in continuing danger the most indestructible, the strongest, the ideal trees grow. Trees are sanctuaries. Whoever knows how to speak to them, whoever knows how to listen to them, can learn the truth. They do not preach learning and precepts, they preach, undeterred by particulars, the ancient law of life. A tree says: A kernel is hidden in me, a spark, a thought, I am life from eternal life. The attempt and the risk that the eternal mother took with me is unique, unique the form and veins of my skin, unique the smallest play of leaves in my branches and the smallest scar on my bark. I was made to form and reveal the eternal in my smallest special detail. A tree says: My strength is trust. I know nothing about my fathers, I know nothing about the thousand children that every year spring out of me. I live out the secret of my seed to the very end, and I care for nothing else. I trust that God is in me. I trust that my labor is holy. Out of this trust I live. When we are stricken and cannot bear our lives any longer, then a tree has something to say to us: Be still! Be still! Look at me! Life is not easy, life is not difficult. Those are childish thoughts. Let God speak within you, and your thoughts will grow silent. You are anxious because your path leads away from mother and home. But every step and every day lead you back again to the mother. Home is neither here nor there. Home is within you, or home is nowhere at all. A longing to wander tears my heart when I hear trees rustling in the wind at evening. If one listens to them silently for a long time, this longing reveals its kernel, its meaning. It is not so much a matter of escaping from one's suffering, though it may seem to be so. It is a longing for home, for a memory of the mother, for new metaphors for life. It leads home. Every path leads homeward, every step is birth, every step is death, every grave is mother. So the tree rustles in the evening, when we stand uneasy before our own childish thoughts: Trees have long thoughts, long-breathing and restful, just as they have longer lives than ours. They are wiser than we are, as long as we do not listen to them. But when we have learned how to listen to trees, then the brevity and the quickness and the childlike hastiness of our thoughts achieve an incomparable joy. Whoever has learned how to listen to trees no longer wants to be a tree. He wants to be nothing except what he is. That is home. That is happiness.\u201d",
      "author": "Herman Hesse,"
  },
  {
      "x": 0.3966465592,
      "y": 0.2482795119,
      "quote": "\u201cLive to the point of tears.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.5893447399,
      "y": 0.4524880946,
      "quote": "\u201cA good library will never be too neat, or too dusty, because somebody will always be in it, taking books off the shelves and staying up late reading them.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.658911407,
      "y": 0.1380232573,
      "quote": "\u201cWhen you stop expecting people to be perfect, you can like them for who they are.\u201d",
      "author": "Donald Miller,"
  },
  {
      "x": 0.5231122375,
      "y": 0.5882977247,
      "quote": "\u201cStories never really end...even if the books like to pretend they do. Stories always go on. They don't end on the last page, any more than they begin on the first page.\u201d",
      "author": "Cornelia Funke,"
  },
  {
      "x": 0.2058182359,
      "y": 0.4444281161,
      "quote": "\u201cWhy didn't I learn to treat everything like it was the last time. My greatest regret was how much I believed in the future.\u201d",
      "author": "Jonathan Safran Foer,"
  },
  {
      "x": 0.1027299762,
      "y": 0.5391936302,
      "quote": "\u201cTo see a World in a Grain of Sand And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand And Eternity in an hour.\u201d",
      "author": "William Blake,"
  },
  {
      "x": 0.6830508709,
      "y": 0.5306504965,
      "quote": "\u201cWhen the power of love overcomes the love of power, the world will know peace.\u201d",
      "author": "Jimi Hendrix"
  },
  {
      "x": 0.3035972118,
      "y": 0.5478733778,
      "quote": "\u201cRemember that wherever your heart is, there you will find your treasure.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.8342937827,
      "y": 0.583493948,
      "quote": "\u201cAfter nourishment, shelter and companionship, stories are the thing we need most in the world.\u201d",
      "author": "Philip Pullman"
  },
  {
      "x": 0.6374894381,
      "y": 0.9011209011,
      "quote": "\u201cFind what you love and let it kill you.\u201d",
      "author": "Charles Bukowski"
  },
  {
      "x": 0.7702495456,
      "y": 0.482858628,
      "quote": "\u201cIt was books that made me feel that perhaps I was not completely alone. They could be honest with me, and I with them.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4488171935,
      "y": 0.4011872411,
      "quote": "\u201cJust because you call an electric eel a rubber duck doesn't make it a rubber duck, does it? And God help the poor bastard who decides they want to take a bath with the duckie. (Jace Wayland)\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3789927363,
      "y": 0.3244215846,
      "quote": "\u201cLife is to be enjoyed, not endured\u201d",
      "author": "Gordon B. Hinckley"
  },
  {
      "x": 0.7608342767,
      "y": 0.4909043014,
      "quote": "\u201cThere is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.615388751,
      "y": 0.2937987745,
      "quote": "\u201cLet everything happen to youBeauty and terrorJust keep goingNo feeling is final\u201d",
      "author": "Rainer Maria Rilke"
  },
  {
      "x": 0.8848237395,
      "y": 0.5589925051,
      "quote": "\u201cLearn what is to be taken seriously and laugh at the rest.\u201d",
      "author": "Herman Hesse"
  },
  {
      "x": 0.8436362147,
      "y": 0.5694736242,
      "quote": "\u201cIt is the time you have wasted for your rose that makes your rose so important.\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry,"
  },
  {
      "x": 0.645301342,
      "y": 0.8013932705,
      "quote": "\u201cA classic is a book that has never finished saying what it has to say.\u201d",
      "author": "Italo Calvino,"
  },
  {
      "x": 0.356854558,
      "y": 0.1763791144,
      "quote": "\u201cA book, too, can be a star, a living fire to lighten the darkness, leading out into the expanding universe.\u201d",
      "author": "Madeleine L'Engle"
  },
  {
      "x": 0.718160212,
      "y": 0.1540876478,
      "quote": "\u201cNow, you two \u00e2\u20ac\u201c this year, you behave yourselves. If I get one more owl telling me you've \u00e2\u20ac\u201c you've blown up a toilet or \u00e2\u20ac\u201c\"\"Blown up a toilet? We've never blown up a toilet.\"\"Great idea though, thanks, Mum.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5508127213,
      "y": 0.0623029768,
      "quote": "\u201cI go to seek a Great Perhaps.\u201d",
      "author": "Fran\u00c3\u00a7ois Rabelais"
  },
  {
      "x": 0.0866889954,
      "y": 0.3486304879,
      "quote": "\u201cWhat are men to rocks and mountains?\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.3913292885,
      "y": 0.0655214041,
      "quote": "\u201cYou can't be happy unless you're unhappy sometimes\".\u201d",
      "author": "Lauren Oliver,"
  },
  {
      "x": 0.1550603509,
      "y": 0.6581679583,
      "quote": "\u201cThe man of knowledge must be able not only to love his enemies but also to hate his friends.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.6186751127,
      "y": 0.5070172548,
      "quote": "\u201cIf you obey all of the rules, you miss all of the fun.\u201d",
      "author": "Katharine Hepburn"
  },
  {
      "x": 0.6019122601,
      "y": 0.8815646172,
      "quote": "\u201cDwell on the beauty of life. Watch the stars, and see yourself running with them.\u201d",
      "author": "Marcus Aurelius,"
  },
  {
      "x": 0.3367521763,
      "y": 0.3096304238,
      "quote": "\u201cI am not sure that I exist, actually. I am all the writers that I have read, all the people that I have met, all the women that I have loved; all the cities I have visited.\u201d",
      "author": "Jorge Luis Borges"
  },
  {
      "x": 0.6854351759,
      "y": 0.6742763519,
      "quote": "\u201cAh,\u00e2\u20ac\ufffd said a voice from the doorway, \u00e2\u20ac\u0153having your annual \u00e2\u20ac\u02dceveryone thinks Will is a lunatic\u00e2\u20ac\u2122 meeting, are you? \u00e2\u20ac\u0153It\u00e2\u20ac\u2122s biannual,\u00e2\u20ac\ufffd said Jem. \u00e2\u20ac\u0153And no, this is not that meeting.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.03429389,
      "y": 0.4075560868,
      "quote": "\u201cIf no one in the entire world cared about you, did you really exist at all?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.7036576867,
      "y": 0.1349835396,
      "quote": "\u201cMom. I have something to tell you. I\u00e2\u20ac\u2122m undead. Now, I know you may have some preconceived notions about the undead. I know you may not be comfortable with the idea of me being undead. But I\u00e2\u20ac\u2122m here to tell you that undead are just like you and me \u00e2\u20ac\u00a6 well, okay. Possibly more like me than you.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.7785199285,
      "y": 0.5254619122,
      "quote": "\u201cHow vain it is to sit down to write when you have not stood up to live.\u201d",
      "author": "Henry David Thoreau"
  },
  {
      "x": 0.2083956003,
      "y": 0.3689476848,
      "quote": "\u201cYou're off to Great Places!Today is your day!Your mountain is waiting,So... get on your way!\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.5738104582,
      "y": 0.1917329729,
      "quote": "\u201cHistory will be kind to me for I intend to write it.\u201d",
      "author": "Winston S. Churchill"
  },
  {
      "x": 0.7572048306,
      "y": 0.2398155034,
      "quote": "\u201cHate the sin, love the sinner.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.9490602612,
      "y": 0.5424053669,
      "quote": "\u201cI care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself.\u201d",
      "author": "Charlotte Bront\u00c3\u00ab,"
  },
  {
      "x": 0.397264421,
      "y": 0.6191861629,
      "quote": "\u201cJudge a man by his questions rather than by his answers.\u201d",
      "author": "Voltaire"
  },
  {
      "x": 0.4584228992,
      "y": 0.4558625519,
      "quote": "\u201cI lived in books more than I lived anywhere else.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.2399463058,
      "y": 0.6469964981,
      "quote": "\u201cHoley? You have the the whole world of ear-related humor before you, you go for holey?\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.539113462,
      "y": 0.7700592279,
      "quote": "\u201cI don't want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.6397904158,
      "y": 0.5048347712,
      "quote": "\u201cWhat Is Love? I have met in the streets a very poor young man who was in love. His hat was old, his coat worn, the water passed through his shoes and the stars through his soul\u201d",
      "author": "Victor Hugo ,"
  },
  {
      "x": 0.5467225313,
      "y": 0.7947381735,
      "quote": "\u201cSome birds are not meant to be caged, that's all. Their feathers are too bright, their songs too sweet and wild. So you let them go, or when you open the cage to feed them they somehow fly out past you. And the part of you that knows it was wrong to imprison them in the first place rejoices, but still, the place where you live is that much more drab and empty for their departure.\u201d",
      "author": "Stephen King,"
  },
  {
      "x": 0.1945495605,
      "y": 0.4690639079,
      "quote": "\u201cAnd that's the thing about people who mean everything they say. They think everyone else does too.\u201d",
      "author": "Khaled Hosseini,"
  },
  {
      "x": 0.415928483,
      "y": 0.761611104,
      "quote": "\u201cYou see, cuckoos are parasites. They lay their eggs in other birds' nests. When the egg hatches, the baby cuckoo pushes the other baby birds out of the nest. The poor parent birds work themselves to death trying to find enough food to feed the enormous cuckoo child who has murdered their babies and taken their places.\"\"Enormous?\" said Jace. \"Did you just call me fat?\"\"It was an analogy.\"\"I am not fat.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4861019254,
      "y": 0.0423541665,
      "quote": "\u201cLearn to light a candle in the darkest moments of someone\u00e2\u20ac\u2122s life. Be the light that helps others see; it is what gives life its deepest significance.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.6055135727,
      "y": 0.2815351784,
      "quote": "\u201cWell, nowIf little by little you stop loving meI shall stop loving youLittle by littleIf suddenly you forget meDo not look for meFor I shall already have forgotten youIf you think it long and mad the wind of banners that passes through my lifeAnd you decide to leave me at the shore of the heart where I have rootsRememberThat on that day, at that hour, I shall lift my armsAnd my roots will set off to seek another land\u201d",
      "author": "Pablo Neruda,"
  },
  {
      "x": 0.7004832625,
      "y": 0.3598310649,
      "quote": "\u201cSanity and happiness are an impossible combination.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.232113421,
      "y": 0.7578799725,
      "quote": "\u201cWe have to allow ourselves to be loved by the people who really love us, the people who really matter. Too much of the time, we are blinded by our own pursuits of people to love us, people that don't even matter, while all that time we waste and the people who do love us have to stand on the sidewalk and watch us beg in the streets! It's time to put an end to this. It's time for us to let ourselves be loved.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.2512660027,
      "y": 0.5515646935,
      "quote": "\u201cPeople who claim that they're evil are usually no worse than the rest of us... It's people who claim that they're good, or any way better than the rest of us, that you have to be wary of.\u201d",
      "author": "Gregory Maguire,"
  },
  {
      "x": 0.5418487191,
      "y": 0.2283219397,
      "quote": "\u201cThe reason it hurts so much to separate is because our souls are connected.\u201d",
      "author": "Nicholas Sparks"
  },
  {
      "x": 0.1270668805,
      "y": 0.5348647833,
      "quote": "\u201cYou are imperfect, permanently and inevitably flawed. And you are beautiful.\u201d",
      "author": "Amy Bloom"
  },
  {
      "x": 0.1295204759,
      "y": 0.3241570294,
      "quote": "\u201cGreat spirits have always encountered violent opposition from mediocre minds.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.5917328596,
      "y": 0.9380104542,
      "quote": "\u201cHe's a wallflower. You see things. You keep quiet about them. And you understand.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.679417491,
      "y": 0.574863553,
      "quote": "\u201cThe silence depressed me. It wasn't the silence of silence. It was my own silence.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.2961781621,
      "y": 0.4146362245,
      "quote": "\u201cOut of the corner of her eye she thought she saw Jace shoot her a look of white rage - but when she glanced at him, he looked as he always did: easy, confident, slightly bored.\"In future, Clarissa,\" he said, \"it might be wise to mention that you already have a man in your bed, to avoid such tedious situations.\"\"You invited him into bed?\" Simon demanded, looking shaken.\"Ridiculous, isn't it?\" said Jace. \"We would never have all fit.\"\"I didn't invite him into bed,\" Clary snapped. \"We were just kissing.\"\"Just kissing?\" Jace's tone mocked her with its false hurt. \"How swiftly you dismiss our love.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4132385254,
      "y": 0.0673376918,
      "quote": "\u201cWe are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further.\u201d",
      "author": "Richard Dawkins,"
  },
  {
      "x": 0.7420806289,
      "y": 0.8078486919,
      "quote": "\u201cNo matter how much suffering you went through, you never wanted to let go of those memories.\u201d",
      "author": "haruki murakami"
  },
  {
      "x": 0.1649072468,
      "y": 0.6074177027,
      "quote": "\u201cMany people lose the small joys in the hope for the big happiness.\u201d",
      "author": "Pearl S. Buck"
  },
  {
      "x": 0.6051308513,
      "y": 0.3430991173,
      "quote": "\u201cAll the world's a stage, And all the men and women merely players; They have their exits and their entrances; And one man in his time plays many parts, His acts being seven ages.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.0986497402,
      "y": 0.6210113764,
      "quote": "\u201cTo burn with desire and keep quiet about it is the greatest punishment we can bring on ourselves.\u201d",
      "author": "Federico Garc\u00c3\u00ada Lorca,"
  },
  {
      "x": 0.6055969596,
      "y": 0.4128496945,
      "quote": "\u201cUsually I'm remarkably good natured. Try me on a day that doesn't end in y.\u201d",
      "author": "Cassandra Clare"
  },
  {
      "x": 0.615611136,
      "y": 0.3655692041,
      "quote": "\u201cAnd I like large parties. They\u00e2\u20ac\u2122re so intimate. At small parties there isn\u00e2\u20ac\u2122t any privacy.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.8589044213,
      "y": 0.9449696541,
      "quote": "\u201cAnd so it goes...\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.8272969127,
      "y": 0.2420433462,
      "quote": "\u201cDon't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.\u201d",
      "author": "H. Jackson Brown Jr."
  },
  {
      "x": 0.1684750021,
      "y": 0.4985823929,
      "quote": "\u201cThere was a clatter as the basilisk fangs cascaded out of Hermione's arms. Running at Ron, she flung them around his neck and kissed him full on the mouth. Ron threw away the fangs and broomstick he was holding and responded with such enthusiasm that he lifted Hermione off her feet. \"Is this the moment?\" Harry asked weakly, and when nothing happened except that Ron and Hermione gripped each other still more firmly and swayed on the spot, he raised his voice. \"OI! There's a war going on here!\" Ron and Hermione broke apart, their arms still around each other. \"I know, mate,\" said Ron, who looked as though he had recently been hit on the back of the head with a Bludger, \"so it's now or never, isn't it?\" \"Never mind that, what about the Horcrux?\" Harry shouted. \"D'you think you could just --- just hold it in, until we've got the diadem?\" \"Yeah --- right --- sorry ---\" said Ron, and he and Hermione set about gathering up fangs, both pink in the face.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4529613853,
      "y": 0.1189653128,
      "quote": "\u201cNowadays people know the price of everything and the value of nothing.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.4493064284,
      "y": 0.5428296328,
      "quote": "\u201cTell your heart that the fear of suffering is worse than the suffering itself. And that no heart has ever suffered when it goes in search of its dreams, because every second of the search is a second's encounter with God and with eternity.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.6407879591,
      "y": 0.0992839485,
      "quote": "\u201cBe grateful for what you already have while you pursue your goals. If you aren\u00e2\u20ac\u2122t grateful for what you already have, what makes you think you would be happy with more.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4428088665,
      "y": 0.5725650787,
      "quote": "\u201cI dream my painting and I paint my dream.\u201d",
      "author": "Vincent Willem van Gogh"
  },
  {
      "x": 0.8439611793,
      "y": 0.3487536013,
      "quote": "\u201cForever is composed of nows.\u201d",
      "author": "Emily Dickinson"
  },
  {
      "x": 0.3970769048,
      "y": 0.3941291273,
      "quote": "\u201cOnce you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.\u201d",
      "author": "Leonardo da Vinci"
  },
  {
      "x": 0.7070128322,
      "y": 0.746213913,
      "quote": "\u201cEducation is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4684233069,
      "y": 0.6664851904,
      "quote": "\u201cThis is your life and its ending one moment at a time.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.8114523292,
      "y": 0.9161194563,
      "quote": "\u201cIf you are allergic to a thing, it is best not to put that thing in your mouth, particularly if the thing is cats.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.4106628895,
      "y": 0.2450587451,
      "quote": "\u201cPeople are more difficult to work with than machines. And when you break a person, he can't be fixed.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.2250989676,
      "y": 0.1828773618,
      "quote": "\u201cThe thing about growing up with Fred and George,\" said Ginny thoughtfully, \"is that you sort of start thinking anything's possible if you've got enough nerve.\u201d",
      "author": "J. K. Rowling,"
  },
  {
      "x": 0.9244226813,
      "y": 0.5731493235,
      "quote": "\u201cTreat everyone with politeness and kindness, not because they are nice, but because you are.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.362863481,
      "y": 0.2574548423,
      "quote": "\u201cThings we lose have a way of coming back to us in the end, if not always in the way we expect.\u201d",
      "author": "JK Rowling,"
  },
  {
      "x": 0.1760878563,
      "y": 0.550432086,
      "quote": "\u201cBooks have a unique way of stopping time in a particular moment and saying: Let\u00e2\u20ac\u2122s not forget this.\u201d",
      "author": "Dave Eggers"
  },
  {
      "x": 0.4740882516,
      "y": 0.6401771307,
      "quote": "\u201cStart each day with a positive thought and a grateful heart.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.983695209,
      "y": 0.3207769394,
      "quote": "\u201cBelieve in Your HeartBelieve in your heart that you're meant to live a life full of passion, purpose, magic and miracles.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.941149652,
      "y": 0.4186340868,
      "quote": "\u201cThat was the thing. You never got used to it, the idea of someone being gone. Just when you think it's reconciled, accepted, someone points it out to you, and it just hits you all over again, that shocking.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.3877458572,
      "y": 0.3975290358,
      "quote": "\u201cBoth Rowling and Meyer, they\u00e2\u20ac\u2122re speaking directly to young people. \u00e2\u20ac\u00a6 The real difference is that Jo Rowling is a terrific writer and Stephenie Meyer can\u00e2\u20ac\u2122t write worth a darn. She\u00e2\u20ac\u2122s not very good.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.0936872363,
      "y": 0.520093441,
      "quote": "\u201cReading is escape, and the opposite of escape; it's a way to make contact with reality after a day of making things up, and it's a way of making contact with someone else's imagination after a day that's all too real.\u201d",
      "author": "Nora Ephron"
  },
  {
      "x": 0.7425784469,
      "y": 0.5919110775,
      "quote": "\u201cA man can no more diminish God's glory by refusing to worship Him than a lunatic can put out the sun by scribbling the word 'darkness' on the walls of his cell.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.183565408,
      "y": 0.5262407064,
      "quote": "\u201cNever close your lips to those whom you have already opened your heart.\u201d",
      "author": "Charles Dickens"
  },
  {
      "x": 0.1709562242,
      "y": 0.2452175915,
      "quote": "\u201cIf you have two friends in your lifetime, you're lucky. If you have one good friend, you're more than lucky.\u201d",
      "author": "S.E. Hinton"
  },
  {
      "x": 0.4938724041,
      "y": 0.7307953835,
      "quote": "\u201cOne love, one heart, one destiny.\u201d",
      "author": "Robert Marley"
  },
  {
      "x": 0.5124697685,
      "y": 0.7070733309,
      "quote": "\u201cStories may well be lies, but they are good lies that say true things, and which can sometimes pay the rent.\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.6277141571,
      "y": 0.0831458271,
      "quote": "\u201cIf you gave someone your heart and they died, did they take it with them? Did you spend the rest of forever with a hole inside you that couldn't be filled?\u201d",
      "author": "Jodi Picoult,"
  },
  {
      "x": 0.4290172458,
      "y": 0.6617792845,
      "quote": "\u201cI was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life.\u201d",
      "author": "Fitzgerald F. Scott,"
  },
  {
      "x": 0.349799037,
      "y": 0.3315123618,
      "quote": "\u201cThe secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly.\u201d",
      "author": "Bukkyo Dendo Kyokai,"
  },
  {
      "x": 0.1990081072,
      "y": 0.439522177,
      "quote": "\u201cDance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting. Dance in your blood. Dance when you're perfectly free.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.3158551455,
      "y": 0.6234763861,
      "quote": "\u201cIf she's amazing, she won't be easy. If she's easy, she won't be amazing. If she's worth it, you wont give up. If you give up, you're not worthy. ... Truth is, everybody is going to hurt you; you just gotta find the ones worth suffering for.\u201d",
      "author": "Bob Marley,"
  },
  {
      "x": 0.1168607175,
      "y": 0.6157312393,
      "quote": "\u201cThe greater the love, the greater the tragedy when it's over.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.2395023704,
      "y": 0.3393478096,
      "quote": "\u201cIt isn't possible to love and part. You will wish that it was. You can transmute love, ignore it, muddle it, but you can never pull it out of you. I know by experience that the poets are right: love is eternal.\u201d",
      "author": "E.M. Forster,"
  },
  {
      "x": 0.4111996293,
      "y": 0.6648827791,
      "quote": "\u201cThe darker the night, the brighter the stars,  The deeper the grief, the closer is God!\u201d",
      "author": "Fyodor Dostoevsky,"
  },
  {
      "x": 0.9040827155,
      "y": 0.4512247145,
      "quote": "\u201cI will not let anyone walk through my mind with their dirty feet.\u201d",
      "author": "mahatma gandhi"
  },
  {
      "x": 0.7849676013,
      "y": 0.6674554348,
      "quote": "\u201cDo you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on?\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.850081861,
      "y": 0.685221076,
      "quote": "\u201cFinally, from so little sleeping and so much reading, his brain dried up and he went completely out of his mind.\u201d",
      "author": "Miguel de Cervantes Saavedra,"
  },
  {
      "x": 0.7385907769,
      "y": 0.5009440184,
      "quote": "\u201cAnd on the subject of burning books: I want to congratulate librarians, not famous for their physical strength or their powerful political connections or their great wealth, who, all over this country, have staunchly resisted anti-democratic bullies who have tried to remove certain books from their shelves, and have refused to reveal to thought police the names of persons who have checked out those titles.So the America I loved still exists, if not in the White House or the Supreme Court or the Senate or the House of Representatives or the media. The America I love still exists at the front desks of our public libraries.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.1749405265,
      "y": 0.4588849247,
      "quote": "\u201cThere are no faster or firmer friendships than those formed between people who love the same books.\u201d",
      "author": "Irving Stone,"
  },
  {
      "x": 0.6580690742,
      "y": 0.6200544834,
      "quote": "\u201cDon't take life too seriously. Punch it in the face when it needs a good hit. Laugh at it.\u201d",
      "author": "Colleen Hoover,"
  },
  {
      "x": 0.5026847124,
      "y": 0.6639777422,
      "quote": "\u201cWhat you do, the way you think, makes you beautiful.\u201d",
      "author": "Scott Westerfeld,"
  },
  {
      "x": 0.6326881647,
      "y": 0.0970490724,
      "quote": "\u201cWhen someone is crying, of course, the noble thing to do is to comfort them. But if someone is trying to hide their tears, it may also be noble to pretend you do not notice them.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.5321182013,
      "y": 0.5349689722,
      "quote": "\u201cI, myself, am made entirely of flaws, stitched together with good intentions.\u201d",
      "author": "Augusten Burroughs"
  },
  {
      "x": 0.4161401987,
      "y": 0.1691178083,
      "quote": "\u201cNo amount of regretting can change the past, and no amount of worrying can change the future.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.6498242021,
      "y": 0.4875515997,
      "quote": "\u201cThe Road goes ever on and onDown from the door where it began.Now far ahead the Road has gone,And I must follow, if I can,Pursuing it with eager feet,Until it joins some larger wayWhere many paths and errands meet.And whither then? I cannot say\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.5674282312,
      "y": 0.5124934912,
      "quote": "\u201cThe individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.4209727645,
      "y": 0.5335769653,
      "quote": "\u201cReality is that which, when you stop believing in it, doesn't go away.\u201d",
      "author": "Philip K. Dick,"
  },
  {
      "x": 0.4949073195,
      "y": 0.3537921309,
      "quote": "\u201cWhen a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.\u201d",
      "author": "Nelson Mandela"
  },
  {
      "x": 0.5506421924,
      "y": 0.5232737064,
      "quote": "\u201cWe have to continually be jumping off cliffs and developing our wings on the way down.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.7591465116,
      "y": 0.414260596,
      "quote": "\u201cConfront the dark parts of yourself, and work to banish them with illumination and forgiveness. Your willingness to wrestle with your demons will cause your angels to sing.\u201d",
      "author": "August Wilson"
  },
  {
      "x": 0.5425304174,
      "y": 0.2581166625,
      "quote": "\u201cAny fool can be happy. It takes a man with real heart to make beauty out of the stuff that makes us weep.\u201d",
      "author": "Clive Barker,"
  },
  {
      "x": 0.3216998577,
      "y": 0.250721693,
      "quote": "\u201cAlways do sober what you said you'd do drunk. That will teach you to keep your mouth shut.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.507240653,
      "y": 0.529327035,
      "quote": "\u201cDo your thing and don't care if they like it.\u201d",
      "author": "Tina Fey,"
  },
  {
      "x": 0.424176693,
      "y": 0.4491624534,
      "quote": "\u201cActs of Kindness:A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.6919766068,
      "y": 0.5959744453,
      "quote": "\u201cSo be sure when you step, Step with care and great tact. And remember that life's A Great Balancing Act. And will you succeed? Yes! You will, indeed! (98 and \u00c2\u00be percent guaranteed) Kid, you'll move mountains.\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.9943324924,
      "y": 0.582439065,
      "quote": "\u201cIf I should ever die, God forbid, let this be my epitaph:THE ONLY PROOF HE NEEDEDFOR THE EXISTENCE OF GODWAS MUSIC\u201d",
      "author": "kurt vonnegut"
  },
  {
      "x": 0.4627268314,
      "y": 0.8490358591,
      "quote": "\u201cWhy are women... so much more interesting to men than men are to women?\u201d",
      "author": "Virginia Woolf"
  },
  {
      "x": 0.3582752943,
      "y": 0.7682580948,
      "quote": "\u201cI do things like get in a taxi and say, \"The library, and step on it.\u201d",
      "author": "David Foster Wallace,"
  },
  {
      "x": 0.9360954165,
      "y": 0.6331226826,
      "quote": "\u201cI was thinking about the first time I ever saw you,\" he said, \"and how after that I couldn't forget you. I wanted to, but I couldn't stop myself. I forced Hodge to let me be the one who came to find you and bring you back to the Institue. And even back then, in that stupid coffee shop, when I saw you sitting on that couch with Simon, even then that felt wrong to me-- I should have been the one sitting with you. The one who made you laugh like that. I couldn't get rid of that feeling. That it should have been me. And the more I knew you, the more I felt it--it had never been like that for me before. I'd always wanted a girl and then gotten to know her and not wanted her anymore, but with you the feeling just got stronger and stronger until that night when you showed up at Renwick's and I knew.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5512898564,
      "y": 0.6081626415,
      "quote": "\u201cAnd so with the sunshine and the great bursts of leaves growing on the trees, just as things grow in fast movies, I had that familiar conviction that life was beginning over again with the summer.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.5620673895,
      "y": 0.6187058687,
      "quote": "\u201cA book must be the axe for the frozen sea within us.\u201d",
      "author": "Franz Kafka"
  },
  {
      "x": 0.6691449285,
      "y": 0.1436249018,
      "quote": "\u201cSolitude is fine but you need someone to tell that solitude is fine.\u201d",
      "author": "Honor\u00c3\u00a9 de Balzac"
  },
  {
      "x": 0.2750019431,
      "y": 0.4702534974,
      "quote": "\u201cIf you're lonely when you're alone, you're in bad company.\u201d",
      "author": "Jean-Paul Sartre"
  },
  {
      "x": 0.047188431,
      "y": 0.5350493193,
      "quote": "\u201cToday a reader, tomorrow a leader.\u201d",
      "author": "Margaret Fuller"
  },
  {
      "x": 0.5805462003,
      "y": 0.5542373657,
      "quote": "\u201cOne cannot think well, love well, sleep well, if one has not dined well.\u201d",
      "author": "Virginia Woolf,"
  },
  {
      "x": 0.5989211202,
      "y": 0.9744716883,
      "quote": "\u201cGoodbye,\" said the fox. \"And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry"
  },
  {
      "x": 0.9463818669,
      "y": 0.5036275387,
      "quote": "\u201cBut a mermaid has no tears, and therefore she suffers so much more.\u201d",
      "author": "Hans Christian Andersen,"
  },
  {
      "x": 0.1899891198,
      "y": 0.5110250711,
      "quote": "\u201cIs standing by the window muttering about blood something he does all the time?\" asked Simon.\"No,\" Jace said. \"Sometimes he sits on the couch and does it.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.1216395199,
      "y": 0.5305944681,
      "quote": "\u201cIt is a great thing to start life with a small number of really good books which are your very own.\u201d",
      "author": "Arthur Conan Doyle"
  },
  {
      "x": 0.3216489553,
      "y": 0.118516162,
      "quote": "\u201cIt's not the face, but the expressions on it. It's not the voice, but what you say. It's not how you look in that body, but the thing you do with it. You are beautiful.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.1986506581,
      "y": 0.4421724379,
      "quote": "\u201cFollow your heart, listen to your inner voice, stop caring about what others think.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.5591190457,
      "y": 0.9187053442,
      "quote": "\u201cTop 15 Things Money Can\u00e2\u20ac\u2122t BuyTime. Happiness. Inner Peace. Integrity. Love. Character. Manners. Health. Respect. Morals. Trust. Patience. Class. Common sense. Dignity.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4945607781,
      "y": 0.4243501127,
      "quote": "\u201cFighting for peace is like screwing for virginity.\u201d",
      "author": "George Carlin"
  },
  {
      "x": 0.3127627969,
      "y": 0.4775758684,
      "quote": "\u201cIt's not because I want to make out with her.\"Hold on.\" He grabbed a pencil and scrawled excitedly at the paper as if he'd just made a mathematical breakthrough and then looked back up at me. \"I just did some calculations, and I've been able to determine that you're full of shit\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.3288785815,
      "y": 0.8703476191,
      "quote": null,
      "author": null
  },
  {
      "x": 0.4136071205,
      "y": 0.3099552989,
      "quote": "\u201cLife is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.2435036898,
      "y": 0.5790311098,
      "quote": "\u201cHave enough courage to trust love one more time and always one more time.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.4770485163,
      "y": 0.6571139097,
      "quote": "\u201cI wantTo do with you what spring does with the cherry trees.\u201d",
      "author": "Pablo Neruda,"
  },
  {
      "x": 0.6023088694,
      "y": 0.306627512,
      "quote": "\u201cYou is kind. You is smart. You is important.\u201d",
      "author": "Kathryn Stockett,"
  },
  {
      "x": 0.4969751239,
      "y": 0.1104653925,
      "quote": "\u201cWar must be, while we defend our lives against a destroyer who would devour all; but I do not love the bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only that which they defend.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.8280264735,
      "y": 0.3743124604,
      "quote": "\u201cIf you want to really hurt you parents, and you don't have the nerve to be gay, the least you can do is go into the arts. I'm not kidding. The arts are not a way to make a living. They are a very human way of making life more bearable. Practicing an art, no matter how well or badly, is a way to make your soul grow, for heaven's sake. Sing in the shower. Dance to the radio. Tell stories. Write a poem to a friend, even a lousy poem. Do it as well as you possible can. You will get an enormous reward. You will have created something.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.7535535693,
      "y": 0.5846016407,
      "quote": "\u201cSometimes it seems safer to hold it all in, where the only person who can judge is yourself.\u201d",
      "author": "Sarah Dessen"
  },
  {
      "x": 0.5976564288,
      "y": 0.7120317221,
      "quote": "\u201cIf you are irritated by every rub, how will your mirror be polished?\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.3358847499,
      "y": 0.4010786414,
      "quote": "\u201cEvery generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it.\u201d",
      "author": "George Orwell"
  },
  {
      "x": 0.3692135215,
      "y": 0.479498595,
      "quote": "\u201cHow wrong is it for a woman to expect the man to build the world she wants, rather than to create it herself?\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.6997357011,
      "y": 0.3036895692,
      "quote": "\u201cTrees are poems the earth writes upon the sky, We fell them down and turn them into paper,That we may record our emptiness.\u201d",
      "author": "Kahlil Gibran"
  },
  {
      "x": 0.5752029419,
      "y": 0.9664856195,
      "quote": "\u201cFor last year's words belong to last year's language And next year's words await another voice.\u201d",
      "author": "T.S. Eliot,"
  },
  {
      "x": 0.4017331004,
      "y": 0.7089117765,
      "quote": "\u201cAfter silence, that which comes nearest to expressing the inexpressible is music.\u201d",
      "author": "Aldous Huxley,"
  },
  {
      "x": 0.2081293464,
      "y": 0.6840250492,
      "quote": "\u201cUnderstanding is the first step to acceptance, and only with acceptance can there be recovery.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6439068317,
      "y": 0.5006906986,
      "quote": "\u201cIsabelle drifted over, Jace a pace behind her. She was wearing a long black dress with boots and an even longer cutaway coat of soft green velvet, the color of moss. \"I can't believe you did it!\" she exclaimed. \"How did you get Magnus to let Jace leave?\"\"Traded him for Alec,\" Clary said.Isabelle looked mildly alarmed. \"Not permanently?\"\"No,\" said Jace. \"Just for a few hours. Unless I don't come back,\" he added thoughtfully. \"In which case, maybe he does get to keep Alec. Think of it as a lease with an option to buy.\"Isabelle looked dubious. \"Mom and Dad won't be pleased if they find out.\"\"That you freed a possible criminal by trading away your brother to a warlock who looks like a gay Sonic the Hedgehog and dresses like the Child Catcher from Chitty Chitty Bang Bang?\" Simon inquired. \"No, probably not.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.6363559365,
      "y": 0.6979097128,
      "quote": "\u201cAt some point, you just pull off the Band-Aid, and it hurts, but then it's over and you're relieved.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.3041437268,
      "y": 0.6780790091,
      "quote": "\u201cAnd still, after all this time,The sun never says to the earth,\"You owe Me.\"Look what happens withA love like that,It lights the Whole Sky.\u201d",
      "author": "Hafiz"
  },
  {
      "x": 0.3154782057,
      "y": 0.260112673,
      "quote": "\u201cDon't be satisfied with stories, how things have gone with others. Unfold your own myth.\u201d",
      "author": "Rumi,"
  },
  {
      "x": 0.2524800301,
      "y": 0.2767056525,
      "quote": "\u201cIsn't it odd how much fatter a book gets when you've read it several times?\" Mo had said...\"As if something were left between the pages every time you read it. Feelings, thoughts, sounds, smells...and then, when you look at the book again many years later, you find yourself there, too, a slightly younger self, slightly different, as if the book had preserved you like a pressed flower...both strange and familiar.\u201d",
      "author": "Cornelia Funke,"
  },
  {
      "x": 0.5922768116,
      "y": 0.6663001776,
      "quote": "\u201cDespite my ghoulish reputation, I really have the heart of a small boy. I keep it in a jar on my desk.\u201d",
      "author": "Robert Bloch"
  },
  {
      "x": 0.3327620625,
      "y": 0.5298845768,
      "quote": "\u201cYou don't remember what happened. What you remember becomes what happened.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.9249967933,
      "y": 0.4344595373,
      "quote": "\u201cYou're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it.\u201d",
      "author": "Malcolm X,"
  },
  {
      "x": 0.2467184663,
      "y": 0.6228029728,
      "quote": "\u201cWe are all alone, born alone, die alone, and\u00e2\u20ac\u201din spite of True Romance magazines\u00e2\u20ac\u201dwe shall all someday look back on our lives and see that, in spite of our company, we were alone the whole way. I do not say lonely\u00e2\u20ac\u201dat least, not all the time\u00e2\u20ac\u201dbut essentially, and finally, alone. This is what makes your self-respect so important, and I don't see how you can respect yourself if you must look in the hearts and minds of others for your happiness.\u201d",
      "author": "Hunter S. Thompson,"
  },
  {
      "x": 0.9378065467,
      "y": 0.3373636305,
      "quote": "\u201cThey say when you are missing someone that they are probably feeling the same, but I don't think it's possible for you to miss me as much as I'm missing you right now\u201d",
      "author": "Edna St. Vincent Millay"
  },
  {
      "x": 0.5099747181,
      "y": 0.1668398976,
      "quote": "\u201cThe world was hers for the reading.\u201d",
      "author": "Betty Smith,"
  },
  {
      "x": 0.1606774032,
      "y": 0.5873479843,
      "quote": "\u201cLove is not affectionate feeling, but a steady wish for the loved person's ultimate good as far as it can be obtained.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.5983418822,
      "y": 0.2528213859,
      "quote": "\u201cThe first draft of anything is shit.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.5410468578,
      "y": 0.4987448156,
      "quote": "\u201cHappiness is the consequence of personal effort. You fight for it, strive for it, insist upon it, and sometimes even travel around the world looking for it. You have to participate relentlessly in the manifestations of your own blessings. And once you have achieved a state of happiness, you must never become lax about maintaining it. You must make a mighty effort to keep swimming upward into that happiness forever, to stay afloat on top of it.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.7319180369,
      "y": 0.8297947645,
      "quote": "\u201cAs if you were on fire from within.The moon lives in the lining of your skin.\u201d",
      "author": "Pablo Neruda"
  },
  {
      "x": 0.5685249567,
      "y": 0.4287323654,
      "quote": "\u201cThe measure of intelligence is the ability to change.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.6240099072,
      "y": 0.7918916941,
      "quote": "\u201cWhat makes the desert beautiful,' said the little prince, 'is that somewhere it hides a well...\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry,"
  },
  {
      "x": 0.4710221291,
      "y": 0.6004478931,
      "quote": "\u201cWhen I was a boy of 14, my father was so ignorant I could hardly stand to have the old man around. But when I got to be 21, I was astonished at how much the old man had learned in seven years.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.9052631259,
      "y": 0.4729875624,
      "quote": "\u201cPerhaps it's impossible to wear an identity without becoming what you pretend to be.\u201d",
      "author": "Orson Scott Card,"
  },
  {
      "x": 0.4345878959,
      "y": 0.2976436317,
      "quote": "\u201cOh well... I'd just been thinking, if you had died, you'd have been welcome to share my toilet.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.3307216763,
      "y": 0.7381385565,
      "quote": "\u201cIt happens to everyone as they grow up. You find out who you are and what you want, and then you realize that people you've known forever don't see things the way you do. So you keep the wonderful memories, but find yourself moving on.\u201d",
      "author": "Nicholas Sparks"
  },
  {
      "x": 0.503955543,
      "y": 0.3450641632,
      "quote": "\u201cI'm quite illiterate, but I read a lot. \u201d",
      "author": "J.D. Salinger,"
  },
  {
      "x": 0.4952587485,
      "y": 0.7116833925,
      "quote": "\u201cWe waste time looking for the perfect lover, instead of creating the perfect love.\u201d",
      "author": "Tom Robbins"
  },
  {
      "x": 0.4785943031,
      "y": 0.1708950996,
      "quote": "\u201cTime is a drug. Too much of it kills you.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.714643538,
      "y": 0.495742172,
      "quote": "\u201cMaybe ever\u00e2\u20ac\u2122body in the whole damn world is scared of each other.\u201d",
      "author": "John Steinbeck,"
  },
  {
      "x": 0.4307996631,
      "y": 0.5466411114,
      "quote": "\u201cIs 'fat' really the worst thing a human being can be? Is 'fat' worse than 'vindictive', 'jealous', 'shallow', 'vain', 'boring' or 'cruel'? Not to me.\u201d",
      "author": "J.K. Rowling"
  },
  {
      "x": 0.5765625238,
      "y": 0.0888262242,
      "quote": "\u201cIf a book about failures doesn't sell, is it a success?\u201d",
      "author": "Jerry Seinfeld"
  },
  {
      "x": 0.2346983552,
      "y": 0.5211052895,
      "quote": "\u201cImagine smiling after a slap in the face. Then think of doing it twenty-four hours a day.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.6643747687,
      "y": 0.6306811571,
      "quote": "\u201cYou were born with wings, why prefer to crawl through life?\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.6156696677,
      "y": 0.4418720901,
      "quote": "\u201cWherever you go becomes a part of you somehow.\u201d",
      "author": "Anita Desai"
  },
  {
      "x": 0.5982167125,
      "y": 0.6731454134,
      "quote": "\u201cThe function of prayer is not to influence God, but rather to change the nature of the one who prays.\u201d",
      "author": "Soren Kierkegaard"
  },
  {
      "x": 0.4208090901,
      "y": 0.0449705869,
      "quote": "\u201cWhen you do things from your soul, you feel a river moving in you, a joy.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.8069429994,
      "y": 0.5989360809,
      "quote": "\u201cHow did it get so late so soon?\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.4201976657,
      "y": 0.3665599823,
      "quote": "\u201cI am an excitable person who only understands life lyrically, musically, in whom feelings are much stronger as reason. I am so thirsty for the marvelous that only the marvelous has power over me. Anything I can not transform into something marvelous, I let go. Reality doesn't impress me. I only believe in intoxication, in ecstasy, and when ordinary life shackles me, I escape, one way or another. No more walls.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.7159997821,
      "y": 0.6496785879,
      "quote": "\u201cI can resist anything except temptation.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.3576577306,
      "y": 0.5889911652,
      "quote": "\u201cAtticus told me to delete the adjectives and I'd have the facts.\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.6677396297,
      "y": 0.1828833818,
      "quote": "\u201cLife shrinks or expands in proportion to one's courage.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.709356606,
      "y": 0.6349269152,
      "quote": "\u201cWe can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.\u201d",
      "author": "Plato"
  },
  {
      "x": 0.1351762712,
      "y": 0.5017337799,
      "quote": "\u201cI would like to be the air that inhabits you for a moment only. I would like to be that unnoticed and that necessary.\u201d",
      "author": "Margaret Atwood"
  },
  {
      "x": 0.7772641778,
      "y": 0.429654628,
      "quote": "\u201cMaybe you can afford to wait. Maybe for you there's a tomorrow. Maybe for you there's one thousand tomorrows, or three thousand, or ten, so much time you can bathe in it, roll around it, let it slide like coins through you fingers. So much time you can waste it.But for some of us there's only today. And the truth is, you never really know.\u201d",
      "author": "Lauren Oliver,"
  },
  {
      "x": 0.691249311,
      "y": 0.2025349736,
      "quote": "\u201cDon't stop there. I suppose there are also, what, vampires and werewolves and zombies?\"\"Of course there are. Although you mostly find zombies farther south, where the voudun priests are.\"\"What about mummies? Do they only hang around Egypt?\"\"Don't be ridiculous. No one believes in mummies.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4648965001,
      "y": 0.7263457775,
      "quote": "\u201cEven death has a heart.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.2781291008,
      "y": 0.2231363356,
      "quote": "\u201cOne ought, every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words.\u201d",
      "author": "Johann Wolfgang von Goethe,"
  },
  {
      "x": 0.7745983005,
      "y": 0.6341311932,
      "quote": "\u201cYou speak an infinite deal of nothing.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.8225226998,
      "y": 0.2511574924,
      "quote": "\u201cIt doesn't interest me what you do for a living. I want to know what you ache for, and if you dare to dream of meeting your heart's longing.It doesn't interest me how old you are. I want to know if you will risk looking like a fool for love, for your dream, for the adventure of being alive. It doesn't interest me what planets are squaring your moon. I want to know if you have touched the center of your own sorrow, if you have been opened by life's betrayals or have become shriveled and closed from fear of further pain!I want to know if you can sit with pain, mine or your own, without moving to hide it or fade it, or fix it. I want to know if you can be with joy, mine or your own, if you can dance with wildness and let the ecstasy fill you to the tips of your fingers and toes without cautioning us to be careful, to be realistic, to remember the limitations of being human. It doesn't interest me if the story you are telling me is true. I want to know if you can disappoint another to be true to yourself; if you can bear the accusation of betrayal and not betray your own soul; if you can be faithlessand therefore trustworthy. I want to know if you can see beauty even when it's not pretty, every day,and if you can source your own life from its presence. I want to know if you can live with failure, yours and mine, and still stand on the edge of the lake and shout to the silver of the full moon, \u00e2\u20ac\u0153Yes!\u00e2\u20ac\ufffdIt doesn't interest me to know where you live or how much money you have. I want to know if you can get up, after the night of grief and despair, weary and bruised to the bone, and do what needs to be done to feed the children. It doesn't interest me who you know or how you came to be here. I want to know if you will stand in the center of the fire with me and not shrink back. It doesn't interest me where or what or with whom you have studied. I want to know what sustains you, from the inside, when all else falls away. I want to know if you can be alone with yourself and if you truly like the company you keep in the empty moments.\u201d",
      "author": "Oriah Mountain Dreamer"
  },
  {
      "x": 0.3002716303,
      "y": 0.6849435568,
      "quote": "\u201cAll you have to do is write one true sentence. Write the truest sentence that you know.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.3078027368,
      "y": 0.6826063395,
      "quote": "\u201cSometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book. And then there are books like An Imperial Affliction, which you can't tell people about, books so special and rare and yours that advertising your affection feels like betrayal\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.2706546783,
      "y": 0.5141147375,
      "quote": "\u201cA cynic is a man who knows the price of everything, and the value of nothing.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4249022007,
      "y": 0.3443952203,
      "quote": "\u201cHe does something to me, that boy. Every time. It\u00e2\u20ac\u2122s his only detriment. He steps on my heart. He makes me cry.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.3937978745,
      "y": 0.3605172038,
      "quote": "\u201cGravitation is not responsible for people falling in love.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.5795505047,
      "y": 0.3963358998,
      "quote": "\u201cYou know, when it works, love is pretty amazing. It's not overrated. There's a reason for all those songs.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.3566688299,
      "y": 0.0916414857,
      "quote": "\u201cTo me, Fearless is not the absense of fear. It's not being completely unafraid. To me, Fearless is having fears. Fearless is having doubts. Lots of them. To me, Fearless is living in spite of those things that scare you to death.\u201d",
      "author": "Taylor Swift"
  },
  {
      "x": 0.184640646,
      "y": 0.2276488543,
      "quote": "\u201cBut in the end one needs more courage to live than to kill himself.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.219725728,
      "y": 0.6812032461,
      "quote": "\u201cThe moment you doubt whether you can fly, you cease for ever to be able to do it.\u201d",
      "author": "J. M. Barrie,"
  },
  {
      "x": 0.4330233932,
      "y": 0.567679882,
      "quote": "\u201cSay 'provoking' again. Your mouth looks provocative when you do.\u201d",
      "author": "Becca Fitzpatrick,"
  },
  {
      "x": 0.4267759323,
      "y": 0.3968198895,
      "quote": "\u201cThere are three types of lies -- lies, damn lies, and statistics.\u201d",
      "author": "Benjamin Disraeli"
  },
  {
      "x": 0.2649281621,
      "y": 0.1279851049,
      "quote": "\u201cWords are easy, like the wind; Faithful friends are hard to find.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.0529849827,
      "y": 0.2922931015,
      "quote": "\u201cI dream. Sometimes I think that's the only right thing to do.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.5054755807,
      "y": 0.0843303204,
      "quote": "\u201cDon't be afraid of death; be afraid of an unlived life. You don't have to live forever, you just have to live.\u201d",
      "author": "Natalie Babbitt,"
  },
  {
      "x": 0.3873795867,
      "y": 0.7911297083,
      "quote": "\u201cThe very least you can do in your life is figure out what you hope for. And the most you can do is live inside that hope. Not admire it from a distance but live right in it, under its roof.\u201d",
      "author": "Barbara Kingsolver,"
  },
  {
      "x": 0.3083539605,
      "y": 0.8468872309,
      "quote": "\u201cI could easily forgive his pride, if he had not mortified mine.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.5139327645,
      "y": 0.3263843656,
      "quote": "\u201cDon't you think it's better to be extremely happy for a short while, even if you lose it, than to be just okay for your whole life?\u201d",
      "author": "Audrey Niffenegger,"
  },
  {
      "x": 0.7707001567,
      "y": 0.3165700734,
      "quote": "\u201cI can listen no longer in silence. I must speak to you by such means as are within my reach. You pierce my soul. I am half agony, half hope. Tell me not that I am too late, that such precious feelings are gone for ever. I offer myself to you again with a heart even more your own than when you almost broke it, eight years and a half ago. Dare not say that man forgets sooner than woman, that his love has an earlier death. I have loved none but you. Unjust I may have been, weak and resentful I have been, but never inconstant. You alone have brought me to Bath. For you alone, I think and plan. Have you not seen this? Can you fail to have understood my wishes? I had not waited even these ten days, could I have read your feelings, as I think you must have penetrated mine. I can hardly write. I am every instant hearing something which overpowers me. You sink your voice, but I can distinguish the tones of that voice when they would be lost on others. Too good, too excellent creature! You do us justice, indeed. You do believe that there is true attachment and constancy among men. Believe it to be most fervent, most undeviating, in F. W.I must go, uncertain of my fate; but I shall return hither, or follow your party, as soon as possible. A word, a look, will be enough to decide whether I enter your father's house this evening or never.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.6051849723,
      "y": 0.2354446054,
      "quote": "\u201cSomeone I loved once gave me a box full of darkness. It took me years to understand that this too, was a gift.\u201d",
      "author": "Mary Oliver"
  },
  {
      "x": 0.5386663675,
      "y": 0.4236612618,
      "quote": "\u201cYou need to learn how to select your thoughts just the same way you select your clothes every day. This is a power you can cultivate. If you want to control things in your life so bad, work on the mind. That's the only thing you should be trying to control.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.415371418,
      "y": 0.5523689985,
      "quote": "\u201cYou will do foolish things, but do them with enthusiasm.\u201d",
      "author": "Colette"
  },
  {
      "x": 0.6998621821,
      "y": 0.3116054535,
      "quote": "\u201cLife appears to me too short to be spent in nursing animosity or registering wrongs.\u201d",
      "author": "Charlotte Bronte,"
  },
  {
      "x": 0.9195466638,
      "y": 0.4666958749,
      "quote": "\u201cDon't part with your illusions. When they are gone you may still exist, but you have ceased to live.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.4998582602,
      "y": 0.4028173387,
      "quote": "\u201cYou know what charm is: a way of getting the answer yes without having asked any clear question.\u201d",
      "author": "Albert Camus,"
  },
  {
      "x": 0.8287989497,
      "y": 0.925064683,
      "quote": "\u201cYou see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?\u201d",
      "author": "George Bernard Shaw,"
  },
  {
      "x": 0.6813570857,
      "y": 0.2639590204,
      "quote": "\u201cPeople say that life is the thing, but I prefer reading.\u201d",
      "author": "Logan Pearsall Smith"
  },
  {
      "x": 0.639903307,
      "y": 0.8568508625,
      "quote": "\u201c\u00e2\u20ac\u017dThough nobody can go back and make a new beginning... Anyone can start over and make a new ending.\u201d",
      "author": "Chico Xavier"
  },
  {
      "x": 0.3190457821,
      "y": 0.7065281868,
      "quote": "\u201cYeah, Quirrell was a great teacher. There was just that minor drawback of him having Lord Voldemort sticking out of the back of his head!\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.3366378546,
      "y": 0.7189188004,
      "quote": "\u201cNever be afraid to trust an unknown future to a known God.\u201d",
      "author": "Corrie ten Boom"
  },
  {
      "x": 0.2059596181,
      "y": 0.474974364,
      "quote": "\u201cGrover was sniffing the wind, looking nervous. He fished out his acorns and threw them into the sand, then played his pipes. They rearranged themselves in a pattern that made no sense to me, but Grover looked concerned. \"That's us,\" he said. \"Those five nuts right there.\" \"Which one is me?\" I asked. \"The little deformed one,\" Zoe suggested. \"Oh, shut up.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.7821716666,
      "y": 0.4379533827,
      "quote": "\u201cI love you like a fat kid loves cake!\u201d",
      "author": "Scott Adams"
  },
  {
      "x": 0.7479012609,
      "y": 0.3309608102,
      "quote": "\u201cTonight I can write the saddest linesI loved her, and sometimes she loved me too.\u201d",
      "author": "Pablo Neruda,"
  },
  {
      "x": 0.1474717855,
      "y": 0.4713589251,
      "quote": "\u201cThere are darknesses in life and there are lights, and you are one of the lights, the light of all lights.\u201d",
      "author": "Bram Stoker,"
  },
  {
      "x": 0.1533068419,
      "y": 0.3603030145,
      "quote": "\u201cWe should consider every day lost on which we have not danced at least once.\u201d",
      "author": "Friedrich Wilhelm Nietzsche"
  },
  {
      "x": 0.535987556,
      "y": 0.6621551514,
      "quote": "\u201cAn expert is a person who has made all the mistakes that can be made in a very narrow field.\u201d",
      "author": "Niels Bohr"
  },
  {
      "x": 0.5199586749,
      "y": 0.597746253,
      "quote": "\u201cI will have you without armor, Kaz Brekker. Or I will not have you at all.\u201d",
      "author": "Leigh Bardugo,"
  },
  {
      "x": 0.6317167878,
      "y": 0.085981071,
      "quote": "\u201cYou might be poor, your shoes might be broken, but your mind is a palace.\u201d",
      "author": "Frank McCourt,"
  },
  {
      "x": 0.742618382,
      "y": 0.2425234318,
      "quote": "\u201cIt\u00e2\u20ac\u2122s probably not just by chance that I\u00e2\u20ac\u2122m alone. It would be very hard for a man to live with me, unless he\u00e2\u20ac\u2122s terribly strong. And if he\u00e2\u20ac\u2122s stronger than I, I\u00e2\u20ac\u2122m the one who can\u00e2\u20ac\u2122t live with him. \u00e2\u20ac\u00a6 I\u00e2\u20ac\u2122m neither smart nor stupid, but I don\u00e2\u20ac\u2122t think I\u00e2\u20ac\u2122m a run-of-the-mill person. I\u00e2\u20ac\u2122ve been in business without being a businesswoman, I\u00e2\u20ac\u2122ve loved without being a woman made only for love. The two men I\u00e2\u20ac\u2122ve loved, I think, will remember me, on earth or in heaven, because men always remember a woman who caused them concern and uneasiness. I\u00e2\u20ac\u2122ve done my best, in regard to people and to life, without precepts, but with a taste for justice.\u201d",
      "author": "Coco Chanel"
  },
  {
      "x": 0.5379264355,
      "y": 0.7839133739,
      "quote": "\u201cIt was not the feeling of completeness I so needed, but the feeling of not being empty.\u201d",
      "author": "Jonathan Safran Foer,"
  },
  {
      "x": 0.3235785365,
      "y": 0.7087253332,
      "quote": "\u201cLive in the present, remember the past, and fear not the future, for it doesn't exist and never shall. There is only now.\u201d",
      "author": "Christopher Paolini,"
  },
  {
      "x": 0.3549791574,
      "y": 0.4217353165,
      "quote": "\u201cIt is not that I'm so smart. But I stay with the questions much longer.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.5209801793,
      "y": 0.8661365509,
      "quote": "\u201cI am a cage, in search of a bird.\u201d",
      "author": "Franz Kafka"
  },
  {
      "x": 0.9871943593,
      "y": 0.5849829912,
      "quote": "\u201cAnd when her lips met mine, I knew that I could live to be a hundred and visit every country in the world, but nothing would ever compare to that single moment when I first kissed the girl of my dreams and knew that my love would last forever.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.4126726985,
      "y": 0.4038861096,
      "quote": "\u201cTo say goodbye is to die a little.\u201d",
      "author": "Raymond Chandler,"
  },
  {
      "x": 0.7775992751,
      "y": 0.1649712622,
      "quote": "\u201cWelcome to the wonderful world of jealousy, he thought. For the price of admission, you get a splitting headache, a nearly irresistable urge to commit murder, and an inferiority complex. Yippee.\u201d",
      "author": "J.R. Ward,"
  },
  {
      "x": 0.91425246,
      "y": 0.5638309717,
      "quote": "\u201cWhatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.\u201d",
      "author": "Walter Cronkite"
  },
  {
      "x": 0.3251460791,
      "y": 0.4515239894,
      "quote": "\u201cDon't feel bad, I'm usually about to die.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.7358096242,
      "y": 0.2537355721,
      "quote": "\u201cI'm sure the universe is full of intelligent life. It's just been too intelligent to come here.\u201d",
      "author": "Arthur C. Clarke"
  },
  {
      "x": 0.3373841643,
      "y": 0.1388818622,
      "quote": "\u201cThe best books... are those that tell you what you know already.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.3545864224,
      "y": 0.7004973888,
      "quote": "\u201cLetting go means to come to the realization that some people are a part of your history, but not a part of your destiny.\u201d",
      "author": "Steve Maraboli"
  },
  {
      "x": 0.399746418,
      "y": 0.4038070738,
      "quote": "\u201cThere are years that ask questions and years that answer.\u201d",
      "author": "Zora Neale Hurston,"
  },
  {
      "x": 0.1513779461,
      "y": 0.5342838764,
      "quote": "\u201cWhen I discover who I am, I\u00e2\u20ac\u2122ll be free.\u201d",
      "author": "Ralph Ellison,"
  },
  {
      "x": 0.2577713132,
      "y": 0.7345716953,
      "quote": "\u201cWe are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.\u201d",
      "author": "Stephen Hawking"
  },
  {
      "x": 0.6736829281,
      "y": 0.5252236128,
      "quote": "\u201cYou here to finish me off, Sweetheart?\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.469245255,
      "y": 0.3124468625,
      "quote": "\u201cLook after my heart - I've left it with you.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.2700914145,
      "y": 0.6586917639,
      "quote": "\u201cGrowing apart doesn't change the fact that for a long time we grew side by side; our roots will always be tangled. I'm glad for that.\u201d",
      "author": "Ally Condie,"
  },
  {
      "x": 0.9623321891,
      "y": 0.3402568996,
      "quote": "\u201cIf you ever find yourself in the wrong story, leave.\u201d",
      "author": "Mo Willems,"
  },
  {
      "x": 0.4436292052,
      "y": 0.5164519548,
      "quote": "\u201cThe purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.4846989512,
      "y": 0.1186359525,
      "quote": "\u201cThe beginning of love is the will to let those we love be perfectly themselves, the resolution not to twist them to fit our own image. If in loving them we do not love what they are, but only their potential likeness to ourselves, then we do not love them: we only love the reflection of ourselves we find in them\u201d",
      "author": "Thomas Merton,"
  },
  {
      "x": 0.9483266473,
      "y": 0.5814394951,
      "quote": "\u201cIf you want to be a writer, you must do two things above all others: read a lot and write a lot.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.1076016128,
      "y": 0.4802918136,
      "quote": "\u201cI can shake off everything as I write; my sorrows disappear, my courage is reborn.\u201d",
      "author": "Anne Frank"
  },
  {
      "x": 0.0980707407,
      "y": 0.5167207718,
      "quote": "\u201cSuccess is getting what you want, happiness is wanting what you get\u201d",
      "author": "W. P. Kinsella"
  },
  {
      "x": 0.070771426,
      "y": 0.508300662,
      "quote": "\u201cMany a book is like a key to unknown chambers within the castle of one\u00e2\u20ac\u2122s own self.\u201d",
      "author": "Franz Kafka"
  },
  {
      "x": 0.4861624241,
      "y": 0.8414770365,
      "quote": "\u201cDon't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.\u201d",
      "author": "Franz Kafka"
  },
  {
      "x": 0.7038820386,
      "y": 0.2904763222,
      "quote": "\u201cSuffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but - I hope - into a better shape.\u201d",
      "author": "Charles Dickens,"
  },
  {
      "x": 0.233486414,
      "y": 0.2469912767,
      "quote": "\u201cThe most beautiful things in the world cannot be seen or touched, they are felt with the heart.\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry,"
  },
  {
      "x": 0.9477867484,
      "y": 0.5209670067,
      "quote": "\u201cSo you're always honest,\" I said.\"Aren't you?\"\"No,\" I told him. \"I'm not.\"\"Well, that's good to know, I guess.\"\"I'm not saying I'm a liar,\" I told him. He raised his eyebrows. \"That's not how I meant it, anyways.\"\"How'd you mean it, then?\"\"I just...I don't always say what I feel.\"\"Why not?\"\"Because the truth sometimes hurts,\" I said.\"Yeah,\" he said. \"So do lies, though.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.2593440413,
      "y": 0.6248533726,
      "quote": "\u201cThe meek may inherit the earth, but at the moment it belongs to the conceited. Like me.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4269139767,
      "y": 0.2858323753,
      "quote": "\u201cIf you do not tell the truth about yourself you cannot tell it about other people.\u201d",
      "author": "Virginia Woolf"
  },
  {
      "x": 0.463543117,
      "y": 0.4500954449,
      "quote": "\u201cBooks should go where they will be most appreciated, and not sit unread, gathering dust on a forgotten shelf, don't you agree?\u201d",
      "author": "Christopher Paolini"
  },
  {
      "x": 0.4634140134,
      "y": 0.6142156124,
      "quote": "\u201cLove is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.\u201d",
      "author": "Paulo Coelho"
  },
  {
      "x": 0.3376897573,
      "y": 0.6243971586,
      "quote": "\u201cWhen we are tired, we are attacked by ideas we conquered long ago.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.0269840956,
      "y": 0.3302672505,
      "quote": "\u201cSo it's you and a syringe against the Capitol? See, this is why no one lets you make the plans.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.7922170758,
      "y": 0.6022669077,
      "quote": "\u201cYou must make a decision that you are going to move on. It wont happen automatically. You will have to rise up and say, \u00e2\u20ac\u02dcI don\u00e2\u20ac\u2122t care how hard this is, I don\u00e2\u20ac\u2122t care how disappointed I am, I\u00e2\u20ac\u2122m not going to let this get the best of me. I\u00e2\u20ac\u2122m moving on with my life.\u201d",
      "author": "Joel Osteen,"
  },
  {
      "x": 0.5482309461,
      "y": 0.7434417009,
      "quote": "\u201cWords are pale shadows of forgotten names. As names have power, words have power. Words can light fires in the minds of men. Words can wring tears from the hardest hearts.\u201d",
      "author": "Patrick Rothfuss,"
  },
  {
      "x": 0.7384312749,
      "y": 0.5434806347,
      "quote": "\u201cBe brave to stand for what you believe in even if you stand alone.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4248312712,
      "y": 0.7710888386,
      "quote": "\u201cThe best moments in reading are when you come across something \u00e2\u20ac\u201c a thought, a feeling, a way of looking at things \u00e2\u20ac\u201c which you had thought special and particular to you. Now here it is, set down by someone else, a person you have never met, someone even who is long dead. And it is as if a hand has come out and taken yours.\u201d",
      "author": "Alan Bennett,"
  },
  {
      "x": 0.6889078617,
      "y": 0.4323810041,
      "quote": "\u201cI crave your mouth, your voice, your hair.Silent and starving, I prowl through the streets. Bread does not nourish me, dawn disrupts me, all day I hunt for the liquid measure of your steps. I hunger for your sleek laugh, your hands the color of a savage harvest, hunger for the pale stones of your fingernails, I want to eat your skin like a whole almond. I want to eat the sunbeam flaring in your lovely body, the sovereign nose of your arrogant face, I want to eat the fleeting shade of your lashes, and I pace around hungry, sniffing the twilight, hunting for you, for your hot heart, Like a puma in the barrens of Quitratue.\u201d",
      "author": "Pablo Neruda"
  },
  {
      "x": 0.6298585534,
      "y": 0.7961078882,
      "quote": "\u201cIf you want to tell people the truth, make them laugh, otherwise they'll kill you.\u201d",
      "author": "George Bernard Shaw"
  },
  {
      "x": 0.5775482655,
      "y": 0.2640280426,
      "quote": "\u201cClary, Despite everything, I can't bear the thought of this ring being lost forever, any more then I can bear the thought of leaving you forever. And though I have no choice about the one, at least I can choose about the other. I'm leaving you our family ring because you have as much right to it as I do.I'm writing this watching the sun come up. You're asleep, dreams moving behind your restless eyelids. I wish I knew what you were thinking. I wish I could slip into your head and see the world the way you do. I wish I could see myself the way you do. But maybe I dont want to see that. Maybe it would make me feel even more than I already do that I'm perpetuating some kind of Great Lie on you, and I couldn't stand that. I belong to you. You could do anything you wanted with me and I would let you. You could ask anything of me and I'd break myself trying to make you happy. My heart tells me this is the best and greatest feeling I have ever had. But my mind knows the difference between wanting what you can't have and wanting what you shouldn't want. And I shouldn't want you.All night I've watched you sleeping, watched the moonlight come and go, casting its shadows across your face in black and white. I've never seen anything more beautiful. I think of the life we could have had if things were different, a life where this night is not a singular event, separate from everything else that's real, but every night. But things aren't different, and I can't look at you without feeling like I've tricked you into loving me.The truth no one is willing to say out loud is that no one has a shot against Valentine but me. I can get close to him like no one else can. I can pretend I want to join him and he'll believe me, up until that last moment where I end it all, one way or another. I have something of Sebastian's; I can track him to where my father's hiding, and that's what I'm going to do. So I lied to you last night. I said I just wanted one night with you. But I want every night with you. And that's why I have to slip out of your window now, like a coward. Because if I had to tell you this to your face, I couldn't make myself go. I don't blame you if you hate me, I wish you would. As long as I can still dream, I will dream of you. _Jace\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4820430279,
      "y": 0.7555866241,
      "quote": "\u201cHave you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?\u201d",
      "author": "George Carlin"
  },
  {
      "x": 0.719024837,
      "y": 0.5316634178,
      "quote": "\u201cIf I got rid of my demons, I\u00e2\u20ac\u2122d lose my angels.\u201d",
      "author": "Tennessee Williams,"
  },
  {
      "x": 0.690746963,
      "y": 0.9357566833,
      "quote": "\u201cDon't feel sorry for yourself. Only assholes do that.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.5574563742,
      "y": 0.9240255356,
      "quote": "\u201cHe smiled understandingly-much more than understandingly. It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life. It faced--or seemed to face--the whole eternal world for an instant, and then concentrated on you with an irresistible prejudice in your favor. It understood you just as far as you wanted to be understood, believed in you as you would like to believe in yourself, and assured you that it had precisely the impression of you that, at your best, you hoped to convey.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.4851046801,
      "y": 0.5176854134,
      "quote": "\u201cThe only way to get through life is to laugh your way through it. You either have to laugh or cry. I prefer to laugh. Crying gives me a headache.\u201d",
      "author": "Marjorie Pay Hinckley"
  },
  {
      "x": 0.3831231594,
      "y": 0.8686152697,
      "quote": "\u201cHow do you spell 'love'?\" - Piglet\"You don't spell it...you feel it.\" - Pooh\u201d",
      "author": "A.A. Milne"
  },
  {
      "x": 0.6044734716,
      "y": 0.5727236271,
      "quote": "\u201cIt's just that most really good-looking people are stupid, so I exceed expectations.''Right, it's primarily his hotness,' I said.'It can be sort of blinding,' he said.'It actually did blind our friend Isaac,' I said.'Terrible tragedy, that. But can I help my own deadly beauty?''You cannot.''It is my burden, this beautiful face.''Not to mention your body.''Seriously, don't even get me started on my hot bod. You don't want to see me naked, Dave. Seeing me naked actually took Hazel Grace's breath away,' he said, nodding toward the oxygen tank.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.8490085006,
      "y": 0.3516843319,
      "quote": "\u201cLife, he realize, was much like a song. In the beginning there is mystery, in the end there is confirmation, but it's in the middle where all the emotion resides to make the whole thing worthwhile.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.3229058385,
      "y": 0.5903887749,
      "quote": "\u201cI wasn't actually in love, but I felt a sort of tender curiosity.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.3740105629,
      "y": 0.606572628,
      "quote": "\u201cEverything can be taken from a man but one thing: the last of the human freedoms\u00e2\u20ac\u201dto choose one\u00e2\u20ac\u2122s attitude in any given set of circumstances, to choose one\u00e2\u20ac\u2122s own way.\u201d",
      "author": "Viktor E. Frankl,"
  },
  {
      "x": 0.7215120196,
      "y": 0.7745605707,
      "quote": "\u201cEducation is the ability to listen to almost anything without losing your temper or your self-confidence.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.500729382,
      "y": 0.0201550499,
      "quote": "\u201cYou can't measure the mutual affection of two human beings by the number of words they exchange.\u201d",
      "author": "Milan Kundera"
  },
  {
      "x": 0.9457835555,
      "y": 0.344402194,
      "quote": "\u201cYou couldn't relive your life, skipping the awful parts, without losing what made it worthwhile. You had to accept it as a whole--like the world, or the person you loved.\u201d",
      "author": "Stewart O'Nan,"
  },
  {
      "x": 0.571420908,
      "y": 0.4973847568,
      "quote": "\u201c\u00e2\u20ac\u017dLife is a shipwreck, but we must not forget to sing in the lifeboats.\u201d",
      "author": "Voltaire"
  },
  {
      "x": 0.2781202793,
      "y": 0.6323099136,
      "quote": "\u201cHappiness [is] only real when shared\u201d",
      "author": "Jon Krakauer,"
  },
  {
      "x": 0.249776721,
      "y": 0.4067069888,
      "quote": "\u201cThere are three rules for writing a novel. Unfortunately, no one knows what they are.\u201d",
      "author": "W. Somerset Maugham"
  },
  {
      "x": 0.1928964853,
      "y": 0.2586062551,
      "quote": "\u201cTravel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one's lifetime.\u201d",
      "author": "Mark Twain,"
  },
  {
      "x": 0.6712887287,
      "y": 0.3826544285,
      "quote": "\u201cLove is a temporary madness, it erupts like volcanoes and then subsides. And when it subsides, you have to make a decision. You have to work out whether your roots have so entwined together that it is inconceivable that you should ever part. Because this is what love is. Love is not breathlessness, it is not excitement, it is not the promulgation of promises of eternal passion, it is not the desire to mate every second minute of the day, it is not lying awake at night imagining that he is kissing every cranny of your body. No, don't blush, I am telling you some truths. That is just being \"in love\", which any fool can do. Love itself is what is left over when being in love has burned away, and this is both an art and a fortunate accident.\u201d",
      "author": "Shawn Slovo,"
  },
  {
      "x": 0.7248159051,
      "y": 0.5872360468,
      "quote": "\u201cThat it will never come again is what makes life so sweet.\u201d",
      "author": "Emily Dickinson"
  },
  {
      "x": 0.2920386791,
      "y": 0.6787762642,
      "quote": "\u201cPeople demand freedom of speech as a compensation for the freedom of thought which they seldom use.\u201d",
      "author": "S\u00c3\u00b8ren Kierkegaard"
  },
  {
      "x": 0.444342196,
      "y": 0.5485138893,
      "quote": "\u201cIt's been my experience that you can nearly always enjoy things if you make up your mind firmly that you will.\u201d",
      "author": "Lucy Maud Montgomery,"
  },
  {
      "x": 0.3141775727,
      "y": 0.7482452393,
      "quote": "\u201cNo woman really wants a man to carry her off; she only wants him to want to do it.\u201d",
      "author": "Elizabeth Peters"
  },
  {
      "x": 0.36174649,
      "y": 0.741694212,
      "quote": "\u201cEvery great love starts with a great story...\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.3842985034,
      "y": 0.7267420292,
      "quote": "\u201cBut I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.\u201d",
      "author": "Aldous Huxley,"
  },
  {
      "x": 0.3421840072,
      "y": 0.67307055,
      "quote": "\u201cTime is an illusion. Lunchtime doubly so.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.5977776647,
      "y": 0.2841079235,
      "quote": "\u201cHello babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. On the outside, babies, you've got a hundred years here. There's only one rule that I know of, babies-\"God damn it, you've got to be kind.\u201d",
      "author": "Kurt Vonnegut"
  },
  {
      "x": 0.6350177526,
      "y": 0.0736882389,
      "quote": "\u201cHe thinks he'll be remembered as the villain in the story. But I forgot to tell him that the villain is usually the person who locks up the maiden and throws away the key. He was the one who let me out.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.5468963385,
      "y": 0.8451023102,
      "quote": "\u201cThere is no mistaking a real book when one meets it. It is like falling in love.\u201d",
      "author": "Christopher Morley,"
  },
  {
      "x": 0.7015587687,
      "y": 0.5827029943,
      "quote": "\u201cWhen we are no longer able to change a situation, we are challenged to change ourselves.\u201d",
      "author": "Viktor E. Frankl,"
  },
  {
      "x": 0.3426504731,
      "y": 0.4450921118,
      "quote": "\u201cThe past has no power over the present moment.\u201d",
      "author": "Eckhart Tolle"
  },
  {
      "x": 0.8805176616,
      "y": 0.4079689682,
      "quote": "\u201cEvery man I meet wants to protect me. I can't figure out what from.\u201d",
      "author": "Mae West"
  },
  {
      "x": 0.4093084931,
      "y": 0.7653356791,
      "quote": "\u201cIn politics, If you want anything said, ask a man. If you want anything done, ask a woman.\u201d",
      "author": "Margaret Thatcher"
  },
  {
      "x": 0.8121288419,
      "y": 0.9162533283,
      "quote": "\u201cIt's a lot easier to be lost than found. It's the reason we're always searching and rarely discovered--so many locks not enough keys.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.6431876421,
      "y": 0.3366330862,
      "quote": "\u201cReading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.\u201d",
      "author": "John Locke"
  },
  {
      "x": 0.2084889412,
      "y": 0.7104525566,
      "quote": "\u201cMaybe...you'll fall in love with me all over again.\"\"Hell,\" I said, \"I love you enough now. What do you want to do? Ruin me?\"\"Yes. I want to ruin you.\"\"Good,\" I said. \"That's what I want too.\u201d",
      "author": "Ernest Hemingway,"
  },
  {
      "x": 0.4789198041,
      "y": 0.713773489,
      "quote": "\u201cWhy were you lurking under our window?\"\"Yes - yes, good point, Petunia! What were you doing under our windows, boy?\"\"Listening to the news,\" said Harry in a resigned voice.His aunt and uncle exchanged looks of outrage.\"Listening to the news! Again?\"\"Well, it changes every day, you see,\" said Harry.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6910196543,
      "y": 0.307661593,
      "quote": "\u201cYou never know what worse luck your bad luck has saved you from.\u201d",
      "author": "Cormac McCarthy,"
  },
  {
      "x": 0.798019588,
      "y": 0.2118678689,
      "quote": "\u201cKnock, And He'll open the doorVanish, And He'll make you shine like the sunFall, And He'll raise you to the heavensBecome nothing, And He'll turn you into everything.\u201d",
      "author": "Jalal Ad-Din Rumi"
  },
  {
      "x": 0.9544172883,
      "y": 0.4866630733,
      "quote": "\u201cYou will lose someone you can\u00e2\u20ac\u2122t live without,and your heart will be badly broken, and the bad news is that you never completely get over the loss of your beloved. But this is also the good news. They live forever in your broken heart that doesn\u00e2\u20ac\u2122t seal back up. And you come through. It\u00e2\u20ac\u2122s like having a broken leg that never heals perfectly\u00e2\u20ac\u201dthat still hurts when the weather gets cold, but you learn to dance with the limp.\u201d",
      "author": "Anne Lamott"
  },
  {
      "x": 0.6659963131,
      "y": 0.7381445169,
      "quote": "\u201cDon't waste your time with explanations: people only hear what they want to hear.\u201d",
      "author": "Paulo Coelho"
  },
  {
      "x": 0.8138144612,
      "y": 0.8502049446,
      "quote": "\u201cI'm not young enough to know everything.\u201d",
      "author": "J.M. Barrie,"
  },
  {
      "x": 0.5380282998,
      "y": 0.9221947193,
      "quote": "\u201cIt is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets.\u201d",
      "author": "Voltaire"
  },
  {
      "x": 0.5244711637,
      "y": 0.320115,
      "quote": "\u201cAnd I thought about how many people have loved those songs. And how many people got through a lot of bad times because of those songs. And how many people enjoyed good times with those songs. And how much those songs really mean. I think it would be great to have written one of those songs. I bet if I wrote one of them, I would be very proud. I hope the people who wrote those songs are happy. I hope they feel it's enough. I really do because they've made me happy. And I'm only one person.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.7777751088,
      "y": 0.5333893299,
      "quote": "\u201cOne can never have enough socks,\" said Dumbledore. \"Another Christmas has come and gone and I didn't get a single pair. People will insist on giving me books.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6699329019,
      "y": 0.6401561499,
      "quote": "\u201cI nodded, looking at Rachel with respect. \"You hit the Lord of the Titans in the eye with a blue plastic hairbrush.\u201d",
      "author": "Rick Riordan"
  },
  {
      "x": 0.7151537538,
      "y": 0.3531913161,
      "quote": "\u201cyou can, you should, and if you\u00e2\u20ac\u2122re brave enough to start, you will.\u201d",
      "author": "Stephen King,"
  },
  {
      "x": 0.1189712584,
      "y": 0.5578593016,
      "quote": "\u201cI came from a real tough neighborhood. Once a guy pulled a knife on me. I knew he wasn't a professional, the knife had butter on it.\u201d",
      "author": "Rodney Dangerfield"
  },
  {
      "x": 0.4598964453,
      "y": 0.2088553309,
      "quote": "\u201cSome people say, \u00e2\u20ac\u0153Never let them see you cry.\u00e2\u20ac\ufffd I say, if you\u00e2\u20ac\u2122re so mad you could just cry, then cry. It terrifies everyone.\u201d",
      "author": "Tina Fey,"
  },
  {
      "x": 0.0788786411,
      "y": 0.3849761486,
      "quote": "\u201cBiology gives you a brain. Life turns it into a mind.\u201d",
      "author": "Jeffrey Eugenides,"
  },
  {
      "x": 0.3131183386,
      "y": 0.2103200853,
      "quote": "\u201cThe heart is an arrow. It demands aim to land true.\u201d",
      "author": "Leigh Bardugo,"
  },
  {
      "x": 0.4189325571,
      "y": 0.0982040614,
      "quote": "\u201cIf you treat an individual as he is, he will remain how he is. But if you treat him as if he were what he ought to be and could be, he will become what he ought to be and could be.\u201d",
      "author": "Johann Wolfgang von Goethe"
  },
  {
      "x": 0.5388246775,
      "y": 0.3724533319,
      "quote": "\u201cLiterature is the most agreeable way of ignoring life.\u201d",
      "author": "Fernando Pessoa,"
  },
  {
      "x": 0.3551238775,
      "y": 0.7368625402,
      "quote": "\u201cIf you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud.\u201d",
      "author": "\u00c3\u2030mile Zola"
  },
  {
      "x": 0.099395752,
      "y": 0.6767941713,
      "quote": "\u201cThough she be but little, she is fierce!\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.8799253106,
      "y": 0.5323045254,
      "quote": "\u201cRemember to always be yourself. Unless you suck.\u201d",
      "author": "Joss Whedon"
  },
  {
      "x": 0.6330997348,
      "y": 0.4301026762,
      "quote": "\u201cI could not tell you if I loved you the first moment I saw you, or if it was the second or third or fourth. But I remember the first moment I looked at you walking toward me and realized that somehow the rest of the world seemed to vanish when I was with you.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5655354261,
      "y": 0.6455683708,
      "quote": "\u201cWhen it is dark enough, you can see the stars.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.6975391507,
      "y": 0.5657669306,
      "quote": "\u201cBooks say: She did this because. Life says: She did this. Books are where things are explained to you; life is where things aren't. I'm not surprised some people prefer books.\u201d",
      "author": "Julian Barnes,"
  },
  {
      "x": 0.364597261,
      "y": 0.2085591853,
      "quote": "\u201cI regret that it takes a life to learn how to live.\u201d",
      "author": "Jonathan Safran Foer,"
  },
  {
      "x": 0.7334490418,
      "y": 0.7765301466,
      "quote": "\u201cAll great and precious things are lonely.\u201d",
      "author": "John Steinbeck,"
  },
  {
      "x": 0.54676193,
      "y": 0.5476458073,
      "quote": "\u201cI cannot believe in a God who wants to be praised all the time.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.3860676885,
      "y": 0.7651721239,
      "quote": "\u201cI've got nothing to do today but smile.\u201d",
      "author": "Simon and Garfunkel"
  },
  {
      "x": 0.4083778262,
      "y": 0.5966191292,
      "quote": "\u201cA ship is safe in harbor, but that's not what ships are for.\u201d",
      "author": "John A. Shedd"
  },
  {
      "x": 0.6049116254,
      "y": 0.3290308118,
      "quote": "\u201cIf you are a dreamer come inIf you are a dreamer a wisher a liarA hoper a pray-er a magic-bean-buyerIf youre a pretender com sit by my fireFor we have some flax golden tales to spinCome in! Come in!\u201d",
      "author": "Shel Silverstein"
  },
  {
      "x": 0.5315089226,
      "y": 0.2302868962,
      "quote": "\u201cAnd then he gives me a smile that just seems so genuinely sweet with just the right touch of shyness that unexpected warmth rushes through me.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.6114875078,
      "y": 0.8386269808,
      "quote": "\u201cIt's often just enough to be with someone. I don't need to touch them. Not even talk. A feeling passes between you both. You're not alone.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.6426119804,
      "y": 0.5713229179,
      "quote": "\u201cIf you don't know, the thing to do is not to get scared, but to learn.\u201d",
      "author": "Ayn Rand,"
  },
  {
      "x": 0.5745236874,
      "y": 0.8891266584,
      "quote": "\u201cThe pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.\u201d",
      "author": "William Arthur Ward"
  },
  {
      "x": 0.383533299,
      "y": 0.5395159721,
      "quote": "\u201cThe real story of the Fleece: there were these two children of Zeus, Cadmus and Europa, okay? They were about to get offered up as human sacrifices, when they prayed to Zeus to save them. So Zeus sent this magical flying ram with golden wool, which picked them up in Greece and carried them all the way to Colchis in Asia Minor. Well, actually it carried Cadmus. Europa fell off and died along the way, but that's not important.\"\"It was probably important to her.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.2031371593,
      "y": 0.6966966391,
      "quote": "\u201cCrying is all right in its way while it lasts. But you have to stop sooner or later, and then you still have to decide what to do.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.9609311223,
      "y": 0.5385522842,
      "quote": "\u201cI'm not going to wear a red dress,\" she said.\"It would look stunning, My Lady,\" she called.She spoke to the bubbles gathered on the surface of the water. \"If there's anyone I wish to stun at dinner, I'll hit him in the face.\u201d",
      "author": "Kristin Cashore,"
  },
  {
      "x": 0.4822459221,
      "y": 0.1604394615,
      "quote": "\u201cThese violent delights have violent endsAnd in their triump die, like fire and powderWhich, as they kiss, consume\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.4054713845,
      "y": 0.8061482906,
      "quote": "\u201cWhat is that you express in your eyes? It seems to me more than all the print I have read in my life.\u201d",
      "author": "Walt Whitman"
  },
  {
      "x": 0.8137610555,
      "y": 0.8880000114,
      "quote": "\u201cShe read books as one would breathe air, to fill up and live.\u201d",
      "author": "Annie Dillard,"
  },
  {
      "x": 0.3231549263,
      "y": 0.4423148334,
      "quote": "\u201cFailure is the condiment that gives success its flavor.\u201d",
      "author": "Truman Capote"
  },
  {
      "x": 0.079949975,
      "y": 0.5533014536,
      "quote": "\u201cWhat if it lines up like it did in the Trojan War ... Athena versus Poseidon?\"\"I don't know. But I just know that I'll be fighting next to you.\"\"Why?\"\"Because you're my friend, Seaweed Brain. Any more stupid questions?\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.8612540364,
      "y": 0.5066587925,
      "quote": "\u201cIt was, he thought, the difference between being dragged into the arena to face a battle to the death and walking into the arena with your head held high. Some people, perhaps, would say that there was little to choose between the two ways, but Dumbledore knew - and so do I, thought Harry, with a rush of fierce pride, and so did my parents - that there was all the difference in the world.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.3583171964,
      "y": 0.4679206312,
      "quote": "\u201cLetting go doesn't mean that you don't care about someone anymore. It's just realizing that the only person you really have control over is yourself.\u201d",
      "author": "Deborah Reber,"
  },
  {
      "x": 0.3280269504,
      "y": 0.7487813234,
      "quote": "\u201cI stood still, vision blurring, and in that moment, I heard my heart break. It was a small, clean sound, like the snapping of a flower's stem.\u201d",
      "author": "Diana Gabaldon,"
  },
  {
      "x": 0.175129652,
      "y": 0.1901412606,
      "quote": "\u201cClothes make the man. Naked people have little or no influence on society.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.113799572,
      "y": 0.3057400584,
      "quote": "\u201cWe must be willing to let go of the life we planned so as to have the life that is waiting for us.\u201d",
      "author": "Joseph Campbell"
  },
  {
      "x": 0.9735664725,
      "y": 0.5611844063,
      "quote": "\u201cBefore you, Bella, my life was like a moonless night. Very dark, but there were stars, points of light and reason. ...And then you shot across my sky like a meteor. Suddenly everything was on fire; there was brilliancy, there was beauty. When you were gone, when the meteor had fallen over the horizon, everything went black. Nothing had changed, but my eyes were blinded by the light. I couldn\u00e2\u20ac\u2122t see the stars anymore. And there was no more reason, for anything.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.5954185128,
      "y": 0.6312009096,
      "quote": "\u201cIt is my belief... that the truth is generally preferable to lies.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.7757018209,
      "y": 0.7288938761,
      "quote": "\u201cAny fool knows men and women think differently at times, but the biggest difference is this. Men forget, but never forgive; women forgive, but never forget.\u201d",
      "author": "Robert Jordan"
  },
  {
      "x": 0.4800810218,
      "y": 0.4180668294,
      "quote": "\u201cI cannot sleep unless I am surrounded by books.\u201d",
      "author": "Jorge Luis Borges"
  },
  {
      "x": 0.6760787964,
      "y": 0.166452229,
      "quote": "\u201cThe unreal is more powerful than the real. Because nothing is as perfect as you can imagine it. Because its only intangible ideas, concepts, beliefs, fantasies that last. Stone crumbles. Wood rots. People, well, they die. But things as fragile as a thought, a dream, a legend, they can go on and on. If you can change the way people think. The way they see themselves. The way they see the world. You can change the way people live their lives. That's the only lasting thing you can create.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.5276556015,
      "y": 0.4267608225,
      "quote": "\u201cDogs never bite me. Just humans.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.4369114637,
      "y": 0.3825190067,
      "quote": "\u201cLife is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.\u201d",
      "author": "Lao Tzu"
  },
  {
      "x": 0.9359757304,
      "y": 0.5746114254,
      "quote": "\u201cRivers know this: there is no hurry. We shall get there some day.\u201d",
      "author": "A.A. Milne,"
  },
  {
      "x": 0.2632151842,
      "y": 0.4307328761,
      "quote": "\u201cI'm so glad I live in a world where there are Octobers.\u201d",
      "author": "L. M. Montgomery,"
  },
  {
      "x": 0.5112699866,
      "y": 0.8185063601,
      "quote": "\u201cThe most common way people give up their power is by thinking they don't have any.\u201d",
      "author": "Alice Walker"
  },
  {
      "x": 0.3731622696,
      "y": 0.4533453286,
      "quote": "\u201cAll the secrets of the world are contained in books. Read at your own risk.\u201d",
      "author": "Lemony Snicket"
  },
  {
      "x": 0.3850150108,
      "y": 0.6403784752,
      "quote": "\u201cBetter to be strong than pretty and useless.\u201d",
      "author": "Lilith Saintcrow,"
  },
  {
      "x": 0.4368702173,
      "y": 0.7472500801,
      "quote": "\u201cI realize only one person will be damaged beyond repair if Peeta dies. Me.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.3072536588,
      "y": 0.185578078,
      "quote": "\u201cCowards die many times before their deaths; The valiant never taste of death but once. Of all the wonders that I yet have heard, It seems to me most strange that men should fear; Seeing that death, a necessary end, Will come when it will come.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.4710339308,
      "y": 0.6851400137,
      "quote": "\u201cWhen I am with you, we stay up all night.When you're not here, I can't go to sleep.Praise God for those two insomnias!And the difference between them.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.9890668988,
      "y": 0.3102145493,
      "quote": "\u201cBe with me always - take any form - drive me mad! only do not leave me in this abyss, where I cannot find you! Oh, God! it is unutterable! I can not live without my life! I can not live without my soul!\u201d",
      "author": "Emily Bront\u00c3\u00ab,"
  },
  {
      "x": 0.6787173748,
      "y": 0.2690223157,
      "quote": "\u201cYou can't depend on your eyes when your imagination is out of focus.\u201d",
      "author": "Mark Twain,"
  },
  {
      "x": 0.3401646614,
      "y": 0.4329129755,
      "quote": "\u201cA DEFINITION NOT FOUNDIN THE DICTIONARYNot leaving: an act of trust and love,often deciphered by children\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.9706808925,
      "y": 0.5775247812,
      "quote": "\u201cA writer is someone for whom writing is more difficult than it is for other people.\u201d",
      "author": "Thomas Mann,"
  },
  {
      "x": 0.4191106558,
      "y": 0.1876134276,
      "quote": "\u201cSometimes when I'm talking, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Probably so we can think twice.\u201d",
      "author": "Bill Watterson"
  },
  {
      "x": 0.5012762547,
      "y": 0.212855041,
      "quote": "\u201cWas it hard?\" I ask.Letting go?\"Not as hard as holding on to something that wasn't real.\u201d",
      "author": "Lisa Schroeder"
  },
  {
      "x": 0.3394038081,
      "y": 0.4365518987,
      "quote": "\u201cPeople can lose their lives in libraries. They ought to be warned.\u201d",
      "author": "Saul Bellow"
  },
  {
      "x": 0.8221889138,
      "y": 0.5633134842,
      "quote": "\u201cGreat things happen to those who don't stop believing, trying, learning, and being grateful.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.4585779905,
      "y": 0.5654429197,
      "quote": "\u201cThe reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.\u201d",
      "author": "George Bernard Shaw,"
  },
  {
      "x": 0.738032639,
      "y": 0.3329954743,
      "quote": "\u201cYou will find that it is necessary to let things go; simply for the reason that they are heavy. So let them go, let go of them. I tie no weights to my ankles.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.1570951045,
      "y": 0.4037956595,
      "quote": "\u201cFrom the moment I picked up your book until I put it down, I was convulsed with laughter. Some day I intend reading it.\u201d",
      "author": "Groucho Marx"
  },
  {
      "x": 0.8064162135,
      "y": 0.4677291811,
      "quote": "\u201cTears shed for another person are not a sign of weakness. They are a sign of a pure heart.\u201d",
      "author": "Jos\u00c3\u00a9 N. Harris,"
  },
  {
      "x": 0.202147305,
      "y": 0.4613983333,
      "quote": "\u201cChildren must be taught how to think, not what to think.\u201d",
      "author": "Margaret Mead"
  },
  {
      "x": 0.7895899415,
      "y": 0.5131247044,
      "quote": "\u201cThere is no exquisite beauty\u00e2\u20ac\u00a6 without some strangeness in the proportion.\u201d",
      "author": "Edgar Allan Poe"
  },
  {
      "x": 0.2939330935,
      "y": 0.5011281967,
      "quote": "\u201cOf all the trees we could've hit, we had to get one that hits back.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6275634766,
      "y": 0.285669744,
      "quote": "\u201cEveryone is a moon, and has a dark side which he never shows to anybody.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.4473331571,
      "y": 0.2346733212,
      "quote": "\u201cI think there's just one kind of folks. Folks.\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.7471794486,
      "y": 0.3727531433,
      "quote": "\u201cThe one thing we can never get enough of is love. And the one thing we never give enough of is love.\u201d",
      "author": "Henry Miller"
  },
  {
      "x": 0.6894544959,
      "y": 0.2880497277,
      "quote": "\u201cMaybe everyone can live beyond what they're capable of.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.592022121,
      "y": 0.9709988832,
      "quote": "\u201cDo not fear failure but rather fear not trying.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.3490747809,
      "y": 0.5148371458,
      "quote": "\u201cA common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.2567654252,
      "y": 0.1577033997,
      "quote": "\u201cA learning experience is one of those things that says, 'You know that thing you just did? Don't do that.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.4213249683,
      "y": 0.5033967495,
      "quote": "\u201cDon't tell me,\" Jace said, \"Simon's turned himself into an ocelot and you want me to do something about it before Isabelle makes him into a stole. Well, you'll have have to wait till tomorrow. I'm out of commission.\" He pointed at himself - he was wearing blue pajamas with a hole in the sleeve. \"Look. Jammies.\"\"Jace,\" Clary said, \"this is important.\"\"Don't tell me,\" he said. \"You've got a drawing emergency. You need a nude model. Well, I'm not in the mood. You could always ask Hodge,\" he said as an afterthought. \"I hear he'll do anything for a -\"\"JACE!\" she interrupted him, her voice rising to a scream. \"JUST SHUT UP FOR A SECOND AND LISTEN, WILL YOU?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.7191391587,
      "y": 0.7166030407,
      "quote": "\u201cStay gold, Ponyboy. Stay gold . . .\u00e2\u20ac\ufffd The pillow seemed to sink a little, and Johnny died.\u201d",
      "author": "S.E. Hinton,"
  },
  {
      "x": 0.4810774922,
      "y": 0.6617816687,
      "quote": "\u201cNever lose hope. Storms make people stronger and never last forever.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.7790438533,
      "y": 0.7240087986,
      "quote": "\u201cI shut my eyes and all the world drops dead; I lift my eyes and all is born again.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.6023003459,
      "y": 0.6211010218,
      "quote": "\u201cThe capacity for friendship is God's way of apologizing for our families.\u201d",
      "author": "Jay McInerney,"
  },
  {
      "x": 0.6612359285,
      "y": 0.1428515613,
      "quote": "\u201cThe best thing for being sad,\" replied Merlin, beginning to puff and blow, \"is to learn something. That's the only thing that never fails. You may grow old and trembling in your anatomies, you may lie awake at night listening to the disorder of your veins, you may miss your only love, you may see the world about you devastated by evil lunatics, or know your honour trampled in the sewers of baser minds. There is only one thing for it then \u00e2\u20ac\u201d to learn. Learn why the world wags and what wags it. That is the only thing which the mind can never exhaust, never alienate, never be tortured by, never fear or distrust, and never dream of regretting. Learning is the only thing for you. Look what a lot of things there are to learn.\u201d",
      "author": "T.H. White,"
  },
  {
      "x": 0.7080438733,
      "y": 0.5219897032,
      "quote": "\u201cIf you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.4488166571,
      "y": 0.2455108166,
      "quote": "\u201cI'm tough, I'm ambitious, and I know exactly what I want. If that makes me a bitch, okay.\u201d",
      "author": "Madonna"
  },
  {
      "x": 0.1721203625,
      "y": 0.6597082615,
      "quote": "\u201cYou realize that our mistrust of the future makes it hard to give up the past.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.412516892,
      "y": 0.4974149764,
      "quote": "\u201cThe clearest way into the Universe is through a forest wilderness.\u201d",
      "author": "John Muir"
  },
  {
      "x": 0.5823056698,
      "y": 0.4186004698,
      "quote": "\u201cHave no fear of perfection - you'll never reach it.\u201d",
      "author": "Salvador Dali"
  },
  {
      "x": 0.8284372687,
      "y": 0.3357678652,
      "quote": "\u201cHe stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.\u201d",
      "author": "Leo Tolstoy,"
  },
  {
      "x": 0.3650699258,
      "y": 0.436113745,
      "quote": "\u201cYou wanna fly, you got to give up the shit that weighs you down.\u201d",
      "author": "Toni Morrison,"
  },
  {
      "x": 0.5010387897,
      "y": 0.5068714619,
      "quote": "\u201cEven if you are on the right track, you\u00e2\u20ac\u2122ll get run over if you just sit there.\u201d",
      "author": "Will Rogers"
  },
  {
      "x": 0.6545787454,
      "y": 0.1489923745,
      "quote": "\u201cDon't Gain The World & Lose Your Soul, Wisdom Is Better Than Silver Or Gold.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.542041719,
      "y": 0.2384651601,
      "quote": "\u201cWhen people don't express themselves, they die one piece at a time.\u201d",
      "author": "Laurie Halse Anderson,"
  },
  {
      "x": 0.4068647027,
      "y": 0.5877838135,
      "quote": "\u201cA good traveler has no fixed plans and is not intent on arriving.\u201d",
      "author": "Lao Tzu"
  },
  {
      "x": 0.3137981892,
      "y": 0.7287538052,
      "quote": "\u201cIt's amazing how a little tomorrow can make up for a whole lot of yesterday.\u201d",
      "author": "John Guare,"
  },
  {
      "x": 0.3910737038,
      "y": 0.6669909954,
      "quote": "\u201cGreat minds are always feared by lesser minds.\u201d",
      "author": "Dan Brown,"
  },
  {
      "x": 0.89825207,
      "y": 0.5098410845,
      "quote": "\u201cTo be, or not to be: that is the question:Whether 'tis nobler in the mind to sufferThe slings and arrows of outrageous fortune,Or to take arms against a sea of troubles,And by opposing end them? To die: to sleep;No more; and by a sleep to say we endThe heart-ache and the thousand natural shocksThat flesh is heir to, 'tis a consummationDevoutly to be wish'd. To die, to sleep;To sleep: perchance to dream: ay, there's the rub;For in that sleep of death what dreams may comeWhen we have shuffled off this mortal coil,Must give us pause: there's the respectThat makes calamity of so long life;For who would bear the whips and scorns of time,The oppressor's wrong, the proud man's contumely,The pangs of despised love, the law's delay,The insolence of office and the spurnsThat patient merit of the unworthy takes,When he himself might his quietus makeWith a bare bodkin? who would fardels bear,To grunt and sweat under a weary life,But that the dread of something after death,The undiscover'd country from whose bournNo traveller returns, puzzles the willAnd makes us rather bear those ills we haveThan fly to others that we know not of?Thus conscience does make cowards of us all;And thus the native hue of resolutionIs sicklied o'er with the pale cast of thought,And enterprises of great pith and momentWith this regard their currents turn awry,And lose the name of action.--Soft you now!The fair Ophelia! Nymph, in thy orisonsBe all my sins remember'd!\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.4518512487,
      "y": 0.7396185398,
      "quote": "\u201cI loved you like a man loves a woman he never touches, only writes to, keeps little photographs of.\u201d",
      "author": "Charles Bukowski,"
  },
  {
      "x": 0.297840178,
      "y": 0.5669029951,
      "quote": "\u201cEvery one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.\u201d",
      "author": "Carl Sagan,"
  },
  {
      "x": 0.3852502108,
      "y": 0.8605512381,
      "quote": "\u201cThree may keep a secret, if two of them are dead.\u201d",
      "author": "Benjamin Franklin,"
  },
  {
      "x": 0.3897679448,
      "y": 0.4803969562,
      "quote": "\u201cAnd when at last you find someone to whom you feel you can pour out your soul, you stop in shock at the words you utter\u00e2\u20ac\u201d they are so rusty, so ugly, so meaningless and feeble from being kept in the small cramped dark inside you so long.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.185798049,
      "y": 0.2171221673,
      "quote": "\u201clove the life you live.live the life you love.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.6816520095,
      "y": 0.4866214097,
      "quote": "\u201cSometimes it's a form of love just to talk to somebody that you have nothing in common with and still be fascinated by their presence.\u201d",
      "author": "David Byrne"
  },
  {
      "x": 0.7742521167,
      "y": 0.2434695363,
      "quote": "\u201cMusic expresses that which cannot be said and on which it is impossible to be silent.\u201d",
      "author": "Victor Hugo,"
  },
  {
      "x": 0.6792770028,
      "y": 0.4545398653,
      "quote": "\u201cIt's discouraging to think how many people are shocked by honesty and how few by deceit.\u201d",
      "author": "No\u00c3\u00abl Coward,"
  },
  {
      "x": 0.6002377868,
      "y": 0.7054436207,
      "quote": "\u201cIt's funny how humans can wrap their mind around things and fit them into their version of reality.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.843306005,
      "y": 0.4899258912,
      "quote": "\u201cKnowledge speaks, but wisdom listens\u201d",
      "author": "Jimi Hendrix"
  },
  {
      "x": 0.3073542714,
      "y": 0.2777510285,
      "quote": "\u201cEvery now and then I like to do as I'm told, just to confuse people.\u201d",
      "author": "Tamora Pierce,"
  },
  {
      "x": 0.5073407888,
      "y": 0.2880701423,
      "quote": "\u201cI have absolutely no pleasure in the stimulants in which I sometimes so madly indulge. It has not been in the pursuit of pleasure that I have periled life and reputation and reason. It has been the desperate attempt to escape from torturing memories, from a sense of insupportable loneliness and a dread of some strange impending doom.\u201d",
      "author": "Edgar Allan Poe"
  },
  {
      "x": 0.319235146,
      "y": 0.873670578,
      "quote": "\u201cYou endure what is unbearable, and you bear it. That is all.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5610002279,
      "y": 0.7223361731,
      "quote": "\u201cThe best portion of a good man's life: his little, nameless unremembered acts of kindness and love.\u201d",
      "author": "William Wordsworth,"
  },
  {
      "x": 0.6892398596,
      "y": 0.6513696909,
      "quote": "\u201cDo you want to know who you are? Don't ask. Act! Action will delineate and define you.\u201d",
      "author": "Thomas Jefferson"
  },
  {
      "x": 0.609413743,
      "y": 0.5911589861,
      "quote": "\u201cYou can cut all the flowers but you cannot keep Spring from coming.\u201d",
      "author": "Pablo Neruda"
  },
  {
      "x": 0.3450135589,
      "y": 0.243658483,
      "quote": "\u201cI am trying here to prevent anyone saying the really foolish thing that people often say about Him: I\u00e2\u20ac\u2122m ready to accept Jesus as a great moral teacher, but I don\u00e2\u20ac\u2122t accept his claim to be God. That is the one thing we must not say. A man who was merely a man and said the sort of things Jesus said would not be a great moral teacher. He would either be a lunatic \u00e2\u20ac\u201d on the level with the man who says he is a poached egg \u00e2\u20ac\u201d or else he would be the Devil of Hell. You must make your choice. Either this man was, and is, the Son of God, or else a madman or something worse. You can shut him up for a fool, you can spit at him and kill him as a demon or you can fall at his feet and call him Lord and God, but let us not come with any patronizing nonsense about his being a great human teacher. He has not left that open to us. He did not intend to.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.66862005,
      "y": 0.1117909849,
      "quote": "\u201cAll women become like their mothers. That is their tragedy. No man does, and that is his.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.9176786542,
      "y": 0.7096732855,
      "quote": "\u201cLet's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.877181232,
      "y": 0.662052989,
      "quote": "\u201cAlways find opportunities to make someone smile, and to offer random acts of kindness in everyday life.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.6774833202,
      "y": 0.8677961826,
      "quote": "\u201cYesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.\u201d",
      "author": "Mother Theresa"
  },
  {
      "x": 0.1815946996,
      "y": 0.5929042101,
      "quote": "\u201cScience and religion are not at odds. Science is simply too young to understand.\u201d",
      "author": "Dan Brown,"
  },
  {
      "x": 0.4761111736,
      "y": 0.1669766307,
      "quote": "\u201cMy Best Friend is a person who will give me a book I have not read.\u201d",
      "author": "Abraham Lincoln"
  },
  {
      "x": 0.4324216843,
      "y": 0.2917046845,
      "quote": "\u201cHe was my mum and dad's best friend. He's a convicted murderer, but he's broken out of wizard prison and he's on the run. He likes to keep in touch with me, though...keep up with my news...check if I'm happy...\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.1462745667,
      "y": 0.415501684,
      "quote": "\u201cOut of suffering have emerged the strongest souls; the most massive characters are seared with scars.\u201d",
      "author": "Kahlil Gibran"
  },
  {
      "x": 0.2093514204,
      "y": 0.6860140562,
      "quote": "\u201cSuccess is stumbling from failure to failure with no loss of enthusiasm.\u201d",
      "author": "Winston S. Churchill"
  },
  {
      "x": 0.3690186143,
      "y": 0.6780266762,
      "quote": "\u201cAnyone whose goal is 'something higher' must expect someday to suffer vertigo. What is vertigo? Fear of falling? No, Vertigo is something other than fear of falling. It is the voice of the emptiness below us which tempts and lures us, it is the desire to fall, against which, terrified, we defend ourselves.\u201d",
      "author": "Milan Kundera,"
  },
  {
      "x": 0.2748965025,
      "y": 0.746735692,
      "quote": "\u201cBeauty is only skin deep, but ugly goes clean to the bone.\u201d",
      "author": "Dorothy Parker"
  },
  {
      "x": 0.6344676018,
      "y": 0.3390143216,
      "quote": "\u201cAnd he took her in his arms and kissed her under the sunlit sky, and he cared not that they stood high upon the walls in the sight of many.\u201d",
      "author": "J.R.R. Tolkien"
  },
  {
      "x": 0.1679072976,
      "y": 0.2570132911,
      "quote": "\u201cAnyone who falls in love is searching for the missing pieces of themselves. So anyone who's in love gets sad when they think of their lover. It's like stepping back inside a room you have fond memories of, one you haven't seen in a long time.\u201d",
      "author": "Murakami, Haruki"
  },
  {
      "x": 0.3988550305,
      "y": 0.4848455489,
      "quote": "\u201cSometimes when I look at you, I feel I'm gazing at a distant star. It's dazzling, but the light is from tens of thousands of years ago.Maybe the star doesn't even exist any more. Yet sometimes that light seems more real to me than anything.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.2364847064,
      "y": 0.408075273,
      "quote": "\u201cIs it so bad, then, to be misunderstood? Pythagoras was misunderstood, and Socrates, and Jesus, and Luther, and Copernicus, and Galileo, and Newton, and every pure and wise spirit that ever took flesh. To be great is to be misunderstood.\u201d",
      "author": "Ralph Waldo Emerson,"
  },
  {
      "x": 0.2253546119,
      "y": 0.7321546078,
      "quote": "\u201cArt and love are the same thing: It\u00e2\u20ac\u2122s the process of seeing yourself in things that are not you.\u201d",
      "author": "Chuck Klosterman,"
  },
  {
      "x": 0.3804571033,
      "y": 0.5978447199,
      "quote": "\u201cThe only way that we can live, is if we grow. The only way that we can grow is if we change. The only way that we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we can become exposed is if we throw ourselves out into the open. Do it. Throw yourself.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.2917245626,
      "y": 0.899549365,
      "quote": "\u201cAnd perhaps it is the greater grief, after all, to be left on earth when another is gone.\u201d",
      "author": "Madeline Miller,"
  },
  {
      "x": 0.6462774277,
      "y": 0.7231456041,
      "quote": "\u201cWe do not grow absolutely, chronologically. We grow sometimes in one dimension, and not in another; unevenly. We grow partially. We are relative. We are mature in one realm, childish in another. The past, present, and future mingle and pull us backward, forward, or fix us in the present. We are made up of layers, cells, constellations.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.5028276443,
      "y": 0.2708534598,
      "quote": "\u201cPerhaps the greatest faculty our minds possess is the ability to cope with pain. Classic thinking teaches us of the four doors of the mind, which everyone moves through according to their need.First is the door of sleep. Sleep offers us a retreat from the world and all its pain. Sleep marks passing time, giving us distance from the things that have hurt us. When a person is wounded they will often fall unconscious. Similarly, someone who hears traumatic news will often swoon or faint. This is the mind's way of protecting itself from pain by stepping through the first door.Second is the door of forgetting. Some wounds are too deep to heal, or too deep to heal quickly. In addition, many memories are simply painful, and there is no healing to be done. The saying 'time heals all wounds' is false. Time heals most wounds. The rest are hidden behind this door.Third is the door of madness. There are times when the mind is dealt such a blow it hides itself in insanity. While this may not seem beneficial, it is. There are times when reality is nothing but pain, and to escape that pain the mind must leave reality behind. Last is the door of death. The final resort. Nothing can hurt us after we are dead, or so we have been told.\u201d",
      "author": "Patrick Rothfuss,"
  },
  {
      "x": 0.5463853478,
      "y": 0.5387203693,
      "quote": "\u201cAh! There is nothing like staying at home, for real comfort.\u201d",
      "author": "Jane Austen"
  },
  {
      "x": 0.8165223002,
      "y": 0.614594698,
      "quote": "\u201cWould it save you a lot of time if I just gave up and went mad now?\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.2839633822,
      "y": 0.1996413469,
      "quote": "\u201cDon't be so humble - you are not that great.\u201d",
      "author": "Golda Meir"
  },
  {
      "x": 0.3114229441,
      "y": 0.8780528307,
      "quote": "\u201cA woman without a man is like a fish without a bicycle.\u201d",
      "author": "Irina Dunn"
  },
  {
      "x": 0.5116922855,
      "y": 0.704158783,
      "quote": "\u201cI had already found that it was not good to be alone, and so made companionship with what there was around me, sometimes with the universe and sometimes with my own insignificant self; but my books were always my friends, let fail all else.\u201d",
      "author": "Joshua Slocum,"
  },
  {
      "x": 0.4967416525,
      "y": 0.5770474672,
      "quote": "\u201cMy imagination functions much better when I don't have to speak to people.\u201d",
      "author": "Patricia Highsmith"
  },
  {
      "x": 0.9123135209,
      "y": 0.5823334455,
      "quote": "\u201cWinter is coming.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.1907988489,
      "y": 0.2162510753,
      "quote": "\u201cI have come to accept the feeling of not knowing where I am going. And I have trained myself to love it. Because it is only when we are suspended in mid-air with no landing in sight, that we force our wings to unravel and alas begin our flight. And as we fly, we still may not know where we are going to. But the miracle is in the unfolding of the wings. You may not know where you're going, but you know that so long as you spread your wings, the winds will carry you.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.5830560923,
      "y": 0.9337991476,
      "quote": "\u201cStuff your eyes with wonder, he said, live as if you'd drop dead in ten seconds. See the world. It's more fantastic than any dream made or paid for in factories.\u201d",
      "author": "Ray Bradbury,"
  },
  {
      "x": 0.6926152706,
      "y": 0.764316082,
      "quote": "\u201cThere are books of which the backs and covers are by far the best parts.\u201d",
      "author": "Charles Dickens,"
  },
  {
      "x": 0.5596116781,
      "y": 0.3951888084,
      "quote": "\u201cA truth that's told with bad intentBeats all the lies you can invent.\u201d",
      "author": "William Blake,"
  },
  {
      "x": 0.9679551721,
      "y": 0.5121228695,
      "quote": "\u201cWhat are all these?\" Clary asked.\"Vials of holy water, blessed knives, steel and silver blades,\" Jace said, piling the weapons on the floor beside him, \"electrum wire - not much use at the moment but it's always good to have spares - silver bullets, charms of protetion, crucifixes, stars of David-\"\"Jesus,\" said Clary\"I doubt he'd fit.\"\"Jace.\" Clary was appalled.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.6639541388,
      "y": 0.1317844391,
      "quote": "\u201cAnyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be.\u201d",
      "author": "J. D. Salinger,"
  },
  {
      "x": 0.3585630655,
      "y": 0.3533928096,
      "quote": "\u201cWhat you do makes a difference, and you have to decide what kind of difference you want to make.\u201d",
      "author": "Jane Goodall"
  },
  {
      "x": 0.6265844107,
      "y": 0.2429398596,
      "quote": "\u201cOne day you will kiss a man you can't breathe without, and find that breath is of little consequence.\u201d",
      "author": "Karen Marie Moning,"
  },
  {
      "x": 0.5705569983,
      "y": 0.3915732503,
      "quote": "\u201cToday was good. Today was fun. Tomorrow is another one.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.4176046252,
      "y": 0.0451287925,
      "quote": "\u201cI am constantly torn between killing myself and killing everyone around me.\u201d",
      "author": "David Levithan,"
  },
  {
      "x": 0.7024078965,
      "y": 0.1751239002,
      "quote": "\u201cDo I contradict myself?Very well then I contradict myself,(I am large, I contain multitudes.)\u201d",
      "author": "Walt Whitman,"
  },
  {
      "x": 0.5067201853,
      "y": 0.6502982378,
      "quote": "\u201cIf things start happening, don't worry, don't stew, just go right along and you'll start happening too.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.8944736123,
      "y": 0.3910264373,
      "quote": "\u201cThe only way to get rid of temptation is to yield to it.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.4606381059,
      "y": 0.4141580164,
      "quote": "\u201cDid you know that for pretty much the entire history of the human species, the average life span was less than thirty years? You could count on ten years or so of real adulthood, right? There was no planning for retirement, There was no planning for a career. There was no planning. No time for plannning. No time for a future. But then the life spans started getting longer, and people started having more and more future. And now life has become the future. Every moment of your life is lived for the future--you go to high school so you can go to college so you can get a good job so you can get a nice house so you can afford to send your kids to college so they can get a good job so they can get a nice house so they can afford to send their kids to college.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.6085546613,
      "y": 0.3475013673,
      "quote": "\u201cThis is what you shall do; Love the earth and sun and the animals, despise riches, give alms to every one that asks, stand up for the stupid and crazy, devote your income and labor to others, hate tyrants, argue not concerning God, have patience and indulgence toward the people, take off your hat to nothing known or unknown or to any man or number of men, go freely with powerful uneducated persons and with the young and with the mothers of families, read these leaves in the open air every season of every year of your life, re-examine all you have been told at school or church or in any book, dismiss whatever insults your own soul, and your very flesh shall be a great poem and have the richest fluency not only in its words but in the silent lines of its lips and face and between the lashes of your eyes and in every motion and joint of your body.\u201d",
      "author": "Walt Whitman"
  },
  {
      "x": 0.0914020836,
      "y": 0.6256130934,
      "quote": "\u201cIf you don't read the newspaper, you're uninformed. If you read the newspaper, you're mis-informed.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.3546873927,
      "y": 0.2879538238,
      "quote": "\u201cYes, frosting. The final defense of the dying.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.5030047894,
      "y": 0.0949307978,
      "quote": "\u201cNo one knows for certain how much impact they have on the lives of other people. Oftentimes, we have no clue. Yet we push it just the same.\u201d",
      "author": "Jay Asher,"
  },
  {
      "x": 0.5214712024,
      "y": 0.4585721791,
      "quote": "\u201cMay the forces of evil become confused on the way to your house.\u201d",
      "author": "George Carlin"
  },
  {
      "x": 0.4624739289,
      "y": 0.8541902304,
      "quote": "\u201cPromise me you'll never forget me because if I thought you would, I'd never leave.\u201d",
      "author": "A.A. Milne"
  },
  {
      "x": 0.4926970601,
      "y": 0.5870335102,
      "quote": "\u201cThe worst part of success is trying to find someone who is happy for you.\u201d",
      "author": "Bette Midler"
  },
  {
      "x": 0.8722341657,
      "y": 0.5597336292,
      "quote": "\u201cYouth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.\u201d",
      "author": "Franz Kafka"
  },
  {
      "x": 0.3618870974,
      "y": 0.6660399437,
      "quote": "\u201cYou possess other people's...bodies.\"He accepted that statement with a nod.\"Do you want to possess my body?\"\"I want to do a lot of things to your body, but that's not one of them.\u201d",
      "author": "Becca Fitzpatrick,"
  },
  {
      "x": 0.4925184846,
      "y": 0.6129754782,
      "quote": "\u201cStill round the corner there may wait A new road or a secret gateAnd though I oft have passed them by A day will come at last when IShall take the hidden paths that run West of the Moon, East of the Sun.\u201d",
      "author": "J.R.R. Tolkien"
  },
  {
      "x": 0.4455969334,
      "y": 0.7557501793,
      "quote": "\u201cA good book is an event in my life.\u201d",
      "author": "Stendhal,"
  },
  {
      "x": 0.4905229807,
      "y": 0.8666599989,
      "quote": "\u201cOnce you had put the pieces back together, even though you may look intact, you were never quite the same as you'd been before the fall.\u201d",
      "author": "Jodi Picoult"
  },
  {
      "x": 0.4510436654,
      "y": 0.3519640863,
      "quote": "\u201cbeing alone never felt right. sometimes it felt good, but it never felt right.\u201d",
      "author": "Charles Bukowski,"
  },
  {
      "x": 0.6367096901,
      "y": 0.4169791043,
      "quote": "\u201cShe seems so cool, so focused, so quiet, yet her eyes remain fixed upon the horizon. You think you know all there is to know about her immediately upon meeting her, but everything you think you know is wrong. Passion flows through her like a river of blood. She only looked away for a moment, and the mask slipped, and you fell. All your tomorrows start here.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.0655798316,
      "y": 0.3223639727,
      "quote": "\u201cYou think my first instinct is to protect you. Because you're small, or a girl, or a Stiff. But you're wrong.\"He leans his face close to mine and wraps his fingers around my chin. His hand smells like metal. When was the last time he held a gun, or a knife? My skin tingles at the point of contact, like he's transmitting electricity through his skin. \"My first instinct is to push you until you break, just to see how hard I have to press.\" he says, his fingers squeezing at the word break. My body tenses at the edge in his voice, so I am coiled as tight as a spring, and I forget to breathe.His dark eyes lifting to mine, he adds, \"But I resist it.\" \"Why...\" I swallow hard. \"Why is that your first instinct?\"\"Fear doesn't shut you down; it wakes you up. I've seen it. It's fascinating.\" He releases me but doesn't pull away, his hand grazing my jaw, my neck. \"Sometimes I just want to see it again. Want to see you awake.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.7617890239,
      "y": 0.3215625882,
      "quote": "\u201cA purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.4901896119,
      "y": 0.0184512883,
      "quote": "\u201cIf I had a world of my own, everything would be nonsense. Nothing would be what it is, because everything would be what it isn't. And contrary wise, what is, it wouldn't be. And what it wouldn't be, it would. You see?\u201d",
      "author": "Lewis Carroll,"
  },
  {
      "x": 0.4517478943,
      "y": 0.6172684431,
      "quote": "\u201cIt is easier to forgive an enemy than to forgive a friend.\u201d",
      "author": "William Blake"
  },
  {
      "x": 0.2943316698,
      "y": 0.4212352931,
      "quote": "\u201cI cannot teach anybody anything. I can only make them think\u201d",
      "author": "Socrates"
  },
  {
      "x": 0.4782842398,
      "y": 0.5386638641,
      "quote": "\u201cIt's like Tolstoy said. Happiness is an allegory, unhappiness a story.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.3762412071,
      "y": 0.2983641028,
      "quote": "\u201cPeople worry about kids playing with guns, and teenagers watching violent videos; we are scared that some sort of culture of violence will take them over. Nobody worries about kids listening to thousands - literally thousands - of songs about broken hearts and rejection and pain and misery and loss.\u201d",
      "author": "Nick Hornby,"
  },
  {
      "x": 0.5096415281,
      "y": 0.7058949471,
      "quote": "\u201cAppear weak when you are strong, and strong when you are weak.\u201d",
      "author": "Sun Tzu,"
  },
  {
      "x": 0.9927412868,
      "y": 0.5788524151,
      "quote": "\u201cA dream you dream alone is only a dream. A dream you dream together is reality.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.4533501267,
      "y": 0.8315844536,
      "quote": "\u201cThere are some things you can't share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.\u201d",
      "author": "J. K. Rowling,"
  },
  {
      "x": 0.3551983833,
      "y": 0.2898472846,
      "quote": "\u201cSo when the moon's only partly full, you only feel a little wolfy?\" \"You could say that.\"\"Well, you can go ahead and hang your head out the car window if you feel like it.\"\"I'm a werewolf, not a golden retriever.\u201d",
      "author": "Cassandra Clare"
  },
  {
      "x": 0.5797556043,
      "y": 0.7850774527,
      "quote": "\u201cThe library is inhabited by spirits that come out of the pages at night.\u201d",
      "author": "Isabel Allende"
  },
  {
      "x": 0.2125643492,
      "y": 0.1893919408,
      "quote": "\u201cI knew, in the silence that followed, that anything could happen here. It might be too late: again, I might have missed my chance. But I would at least know I tried, that I took my heart and extended my hand, whatever the outcome.\"Okay,\" he said. He took a breath. \"What would you do, if you could do anything?\"I took a step toward him, closing the space between us. \"This,\" I said. And then I kissed him.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.8260472417,
      "y": 0.5326403379,
      "quote": "\u201cYou yourself, as much as anybody in the entire universe, deserve your love and affection\u201d",
      "author": "Sharon Salzberg"
  },
  {
      "x": 0.7264891267,
      "y": 0.344909668,
      "quote": "\u201cIn a way, it's nice to know that there are Greek gods out there, because you have somebody to blame when things go wrong. For instance, when you're walking away from a bus that's just been attacked by monster hags and blown up by lightning, and it's raining on top of everything else, most people might think that's just really bad luck; when you're a half-blood, you understand that some devine force is really trying to mess up your day.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.250975728,
      "y": 0.366445452,
      "quote": "\u201cFor whatever we lose (like a you or a me),It's always our self we find in the sea.\u201d",
      "author": "e.e. cummings,"
  },
  {
      "x": 0.2723485827,
      "y": 0.5074084997,
      "quote": "\u201cMost books on witchcraft will tell you that witches work naked. This is because most books on witchcraft were written by men.\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.3007780313,
      "y": 0.3682084978,
      "quote": "\u201cThe world is a dangerous place to live, not because of the people who are evil, but because of the people who don't do anything about it.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.4828861356,
      "y": 0.6722470522,
      "quote": "\u201cLove is the absence of judgment.\u201d",
      "author": "Dalai Lama XIV"
  },
  {
      "x": 0.5346684456,
      "y": 0.319419831,
      "quote": "\u201cPain insists upon being attended to. God whispers to us in our pleasures, speaks in our consciences, but shouts in our pains. It is his megaphone to rouse a deaf world.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.7746824622,
      "y": 0.2680063546,
      "quote": "\u201cOne thing you can't hide - is when you're crippled inside.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.2839838266,
      "y": 0.3405306935,
      "quote": "\u201cI'm not sentimental--I'm as romantic as you are. The idea, you know,is that the sentimental person thinks things will last--the romanticperson has a desperate confidence that they won't.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.6170884967,
      "y": 0.349638015,
      "quote": "\u201cYour beliefs become your thoughts, Your thoughts become your words, Your words become your actions, Your actions become your habits, Your habits become your values, Your values become your destiny.\u201d",
      "author": "Gandhi"
  },
  {
      "x": 0.5966897607,
      "y": 0.34126544,
      "quote": "\u201cWisdom comes from experience. Experience is often a result of lack of wisdom.\u201d",
      "author": "Terry Pratchett"
  },
  {
      "x": 0.5747641325,
      "y": 0.1218017638,
      "quote": "\u201cThere is greatness in doing something you hate for the sake of someone you love.\u201d",
      "author": "Shmuley Boteach"
  },
  {
      "x": 0.2865397334,
      "y": 0.6144553423,
      "quote": "\u201cNo matter what he does, every person on earth plays a central role in the history of the world. And normally he doesn't know it.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.3353292346,
      "y": 0.7783629894,
      "quote": "\u201cWe can never judge the lives of others, because each person knows only their own pain and renunciation. It's one thing to feel that you are on the right path, but it's another to think that yours is the only path.\u201d",
      "author": "Paulo Coelho"
  },
  {
      "x": 0.1661548316,
      "y": 0.642723918,
      "quote": "\u201cKeep in mind that people change, but the past doesn't.\u201d",
      "author": "Becca Fitzpatrick,"
  },
  {
      "x": 0.5516231656,
      "y": 0.4869682491,
      "quote": "\u201clet me live, love, and say it well in good sentences\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.6029193401,
      "y": 0.7672795057,
      "quote": "\u201cThen I realize what it is. It's him. Something about him makes me feel like I am about to fall. Or turn to liquid. Or burst into flames.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.5272763371,
      "y": 0.6481181383,
      "quote": "\u201cI suppose a fire that burns that bright is not meant to last.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.1411380172,
      "y": 0.3164118826,
      "quote": "\u201cYouth can not know how age thinks and feels. But old men are guilty if they forget what it was to be young.\u201d",
      "author": "J.K. Rowling ,"
  },
  {
      "x": 0.6531674862,
      "y": 0.0893213302,
      "quote": "\u201cShe leaned down and looked at his lifeless face and Leisel kissed her best friend, Rudy Steiner, soft and true on his lips. He tasted dusty and sweet. He tasted like regret in the shadows of trees and in the glow of the anarchist's suit collection. She kissed him long and soft, and when she pulled herself away, she touched his mouth with her fingers...She did not say goodbye. She was incapable, and after a few more minutes at his side, she was able to tear herself from the ground. It amazes me what humans can do, even when streams are flowing down their faces and they stagger on...\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.4357232451,
      "y": 0.7099466324,
      "quote": "\u201cFor what it\u00e2\u20ac\u2122s worth: it\u00e2\u20ac\u2122s never too late or, in my case, too early to be whoever you want to be. There\u00e2\u20ac\u2122s no time limit, stop whenever you want. You can change or stay the same, there are no rules to this thing. We can make the best or the worst of it. I hope you make the best of it. And I hope you see things that startle you. I hope you feel things you never felt before. I hope you meet people with a different point of view. I hope you live a life you\u00e2\u20ac\u2122re proud of. If you find that you\u00e2\u20ac\u2122re not, I hope you have the courage to start all over again.\u201d",
      "author": "Eric Roth,"
  },
  {
      "x": 0.7347564101,
      "y": 0.2578034699,
      "quote": "\u201cSilence make the real conversations between friends. Not the saying, but the never needing to say that counts.\u201d",
      "author": "Margaret Lee Runbeck"
  },
  {
      "x": 0.0012501776,
      "y": 0.3154247403,
      "quote": "\u201cOur memory is a more perfect world than the universe: it gives back life to those who no longer exist.\u201d",
      "author": "Guy de Maupassant"
  },
  {
      "x": 0.5937516689,
      "y": 0.6853319407,
      "quote": "\u201cI'm saying that I'm a moody, insecure, narrow-minded, jealous, borderline homicidal bitch, and I want you to promise me that you're okay with that, because it's who I am, and you're what I need.\u201d",
      "author": "Jeaniene Frost,"
  },
  {
      "x": 0.6895602942,
      "y": 0.4523039162,
      "quote": "\u201cAlways do what is right. It will gratify half of mankind and astound the other.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5435575843,
      "y": 0.2527091205,
      "quote": "\u201cYou have to know what you stand for, not just what you stand against.\u201d",
      "author": "Laurie Halse Anderson,"
  },
  {
      "x": 0.5475117564,
      "y": 0.943246603,
      "quote": "\u201cThe best fantasy is written in the language of dreams. It is alive as dreams are alive, more real than real ... for a moment at least ... that long magic moment before we wake. Fantasy is silver and scarlet, indigo and azure, obsidian veined with gold and lapis lazuli. Reality is plywood and plastic, done up in mud brown and olive drab. Fantasy tastes of habaneros and honey, cinnamon and cloves, rare red meat and wines as sweet as summer. Reality is beans and tofu, and ashes at the end. Reality is the strip malls of Burbank, the smokestacks of Cleveland, a parking garage in Newark. Fantasy is the towers of Minas Tirith, the ancient stones of Gormenghast, the halls of Camelot. Fantasy flies on the wings of Icarus, reality on Southwest Airlines. Why do our dreams become so much smaller when they finally come true? We read fantasy to find the colors again, I think. To taste strong spices and hear the songs the sirens sang. There is something old and true in fantasy that speaks to something deep within us, to the child who dreamt that one day he would hunt the forests of the night, and feast beneath the hollow hills, and find a love to last forever somewhere south of Oz and north of Shangri-La. They can keep their heaven. When I die, I'd sooner go to middle Earth.\u201d",
      "author": "George R.R. Martin"
  },
  {
      "x": 0.7142316699,
      "y": 0.7393550873,
      "quote": "\u201cWho in the world am I? Ah, that's the great puzzle.\u201d",
      "author": "Lewis Carroll ,"
  },
  {
      "x": 0.6041733623,
      "y": 0.5164005756,
      "quote": "\u201cThe snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.5150962472,
      "y": 0.4505368769,
      "quote": "\u201cYour friend's poetry is terrible,\" he said.Clary blinked, caught momentarily off guard. \"What?\"\"I said his poetry was terrible. It sounds like he ate a dictionary and started vomiting up words at random.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.296756506,
      "y": 0.3610334098,
      "quote": "\u201cI meant,\" said Ipslore bitterly, \"what is there in this world that truly makes living worthwhile?\"Death thought about it.CATS, he said eventually. CATS ARE NICE.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.5538745522,
      "y": 0.9489336014,
      "quote": "\u201cIsn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.1798600852,
      "y": 0.2156815529,
      "quote": "\u201cThere was another life that I might have had, but I am having this one.\u201d",
      "author": "Kazuo Ishiguro"
  },
  {
      "x": 0.3969707489,
      "y": 0.2165589631,
      "quote": "\u201cBut he who dares not grasp the thorn Should never crave the rose.\u201d",
      "author": "Anne Bronte"
  },
  {
      "x": 0.2691189051,
      "y": 0.647598505,
      "quote": "\u201cI'll just have them change the entry in the demonology textbook from 'almost extinct' to 'not extinct enough for Alec. He prefers his monsters really, really extinct.' Will that make you happy?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.429273665,
      "y": 0.263862133,
      "quote": "\u201cArt enables us to find ourselves and lose ourselves at the same time.\u201d",
      "author": "Thomas Merton ,"
  },
  {
      "x": 0.2239504457,
      "y": 0.5824017525,
      "quote": "\u201cYou should never be surprised when someone treats you with respect, you should expect it.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.3243354559,
      "y": 0.2372065485,
      "quote": "\u201cTo love oneself is the beginning of a lifelong romance.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.4612432718,
      "y": 0.2995713055,
      "quote": "\u201cRespect was invented to cover the empty place where love should be.\u201d",
      "author": "Leo Tolstoy,"
  },
  {
      "x": 0.6608123779,
      "y": 0.3743054867,
      "quote": "\u201cIn a time of destruction, create something.\u201d",
      "author": "Maxine Hong Kingston"
  },
  {
      "x": 0.4861398935,
      "y": 0.600394845,
      "quote": "\u201cEvery time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.9557368159,
      "y": 0.504822731,
      "quote": "\u201cPeople shouldn't be afraid of their government. Governments should be afraid of their people.\u201d",
      "author": "Alan Moore,"
  },
  {
      "x": 0.458457768,
      "y": 0.4149656594,
      "quote": "\u201cIt is absurd to divide people into good and bad. People are either charming or tedious.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.6276361942,
      "y": 0.8802454472,
      "quote": "\u201cIt's all in the view. That's what I mean about forever, too. For any one of us our forever could end in an hour, or a hundred years from now. You never know for sure, so you'd better make every second count.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.6876601577,
      "y": 0.1645692289,
      "quote": "\u201cMake your own Bible. Select and collect all the words and sentences that in all your readings have been to you like the blast of a trumpet.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.6387181282,
      "y": 0.1562146544,
      "quote": "\u201cThey who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.\u201d",
      "author": "Benjamin Franklin,"
  },
  {
      "x": 0.4259451628,
      "y": 0.591586113,
      "quote": "\u201cName one hero who was happy.\"I considered. Heracles went mad and killed his family; Theseus lost his bride and father; Jason's children and new wife were murdered by his old; Bellerophon killed the Chimera but was crippled by the fall from Pegasus' back.\"You can't.\" He was sitting up now, leaning forward.\"I can't.\"\"I know. They never let you be famous AND happy.\" He lifted an eyebrow. \"I'll tell you a secret.\"\"Tell me.\" I loved it when he was like this.\"I'm going to be the first.\" He took my palm and held it to his. \"Swear it.\"\"Why me?\"\"Because you're the reason. Swear it.\"\"I swear it,\" I said, lost in the high color of his cheeks, the flame in his eyes.\"I swear it,\" he echoed.We sat like that a moment, hands touching. He grinned.\"I feel like I could eat the world raw.\u201d",
      "author": "Madeline Miller,"
  },
  {
      "x": 0.6107812524,
      "y": 0.7459897995,
      "quote": "\u201cIn the beginning there was nothing, which exploded.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.6104697585,
      "y": 0.8931058645,
      "quote": "\u201cAnd I asked myself about the present: how wide it was, how deep it was, how much was mine to keep.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.5475790501,
      "y": 0.4073438942,
      "quote": "\u201cThat's why when major badasses greet each other in movies, they don't say anything, they just nod. The nod means, 'I' am a badass, and I recognize that you, too, are a badass,' but they don't say anything because they're Wolverine and Magneto and it would mess up their vibe to explain.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.6369826794,
      "y": 0.3749757409,
      "quote": "\u201cTess, Tess, Tessa. Was there ever a more beautiful sound than your name? To speak it aloud makes my heart ring like a bell. Strange to imagine that, isn\u00e2\u20ac\u2122t it \u00e2\u20ac\u201c a heart ringing \u00e2\u20ac\u201c but when you touch me that is what it is like: as if my heart is ringing in my chest and the sound shivers down my veins and splinters my bones with joy.Why have I written these words in this book? Because of you. You taught me to love this book where I had scorned it. When I read it for the second time, with an open mind and heart, I felt the most complete despair and envy of Sydney Carton. Yes, Sydney, for even if he had no hope that the woman he loved would love him, at least he could tell her of his love. At least he could do something to prove his passion, even if that thing was to die.I would have chosen death for a chance to tell you the truth, Tessa, if I could have been assured that death would be my own. And that is why I envied Sydney, for he was free.And now at last I am free, and I can finally tell you, without fear of danger to you, all that I feel in my heart.You are not the last dream of my soul.You are the first dream, the only dream I ever was unable to stop myself from dreaming. You are the first dream of my soul, and from that dream I hope will come all other dreams, a lifetime\u00e2\u20ac\u2122s worth.With hope at least,Will Herondale\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4908816814,
      "y": 0.1131618768,
      "quote": "\u201cMust you go? I was rather hoping you'd stay and be a ministering angel, but if you must go, you must.\"\"I'll stay,\" Will said a bit crossly, and threw himself down in the armchair Tessa had just vacated. \"I can minister angelically.\"\"None too convincingly. And you're not as pretty to look at as Tessa is,\" Jem said, closing his eyes as he leaned back against the pillow.\"How rude. Many who have gazed upon me have compared the experience to gazing at the radiance of the sun.\"Jem still had his eyes closed. \"If they mean it gives you a headache, they aren't wrong.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4091238379,
      "y": 0.4453143179,
      "quote": "\u201cIt does not matter how slowly you go as long as you do not stop.\u201d",
      "author": "Confucius"
  },
  {
      "x": 0.6452826858,
      "y": 0.2557561994,
      "quote": "\u201cLight thinks it travels faster than anything but it is wrong. No matter how fast light travels, it finds the darkness has always got there first, and is waiting for it.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.7563697696,
      "y": 0.3963508606,
      "quote": "\u201cEverything that irritates us about others can lead us to an understanding of ourselves.\u201d",
      "author": "Carl Gustav Jung"
  },
  {
      "x": 0.1918388903,
      "y": 0.407458365,
      "quote": "\u201cA girl should be two things: who and what she wants.\u201d",
      "author": "Coco Chanel,"
  },
  {
      "x": 0.9400090575,
      "y": 0.4554918706,
      "quote": "\u201cCompassion is the basis of morality.\u201d",
      "author": "Arthur Schopenhauer"
  },
  {
      "x": 0.8658890128,
      "y": 0.3164385855,
      "quote": "\u201cThere is only one thing in the world worse than being talked about, and that is not being talked about.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.3274354935,
      "y": 0.2647243738,
      "quote": "\u201cEverything has beauty, but not everyone sees it.\u201d",
      "author": "Confucious"
  },
  {
      "x": 0.1586760581,
      "y": 0.6738340855,
      "quote": "\u201cI am too fond of reading books to care to write them.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.6570013762,
      "y": 0.0806452781,
      "quote": "\u201cA half-read book is a half-finished love affair.\u201d",
      "author": "David Mitchell,"
  },
  {
      "x": 0.6058339477,
      "y": 0.9083337784,
      "quote": "\u201cTell me and I forget, teach me and I may remember, involve me and I learn.\u201d",
      "author": "Benjamin Franklin"
  },
  {
      "x": 0.4309199452,
      "y": 0.0989221781,
      "quote": "\u201cTrust is like a mirror, you can fix it if it's broken, but you can still see the crack in that mother fucker's reflection.\u201d",
      "author": "Lady Gaga"
  },
  {
      "x": 0.3881804943,
      "y": 0.7294870615,
      "quote": "\u201cYou can't stop the futureYou can't rewind the pastThe only way to learn the secret...is to press play.\u201d",
      "author": "Jay Asher,"
  },
  {
      "x": 0.5550801158,
      "y": 0.9175380468,
      "quote": "\u201cIt wouldn't be my move,\" Jace agreed. \"First the candy and flowers, then the apology letters, then the ravenous demon hordes. In that order.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.1018425822,
      "y": 0.703009963,
      "quote": "\u201cYou can have it all. Just not all at once.\u201d",
      "author": "Oprah Winfrey"
  },
  {
      "x": 0.0682210028,
      "y": 0.5189621449,
      "quote": "\u201cPeople have forgotten this truth,\" the fox said. \"But you mustn\u00e2\u20ac\u2122t forget it. You become responsible forever for what you\u00e2\u20ac\u2122ve tamed. You\u00e2\u20ac\u2122re responsible for your rose.\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry,"
  },
  {
      "x": 0.7471327186,
      "y": 0.2804483473,
      "quote": "\u201cBeautiful face. Beautiful body. Horrible attitude. It was the holy trinity of hot boys.\u201d",
      "author": "Jennifer L. Armentrout,"
  },
  {
      "x": 0.1358602941,
      "y": 0.4980171621,
      "quote": "\u201cBut it is the nature of stars to cross, and never was Shakespeare more wrong than when he has Cassius note, \u00e2\u20ac\u02dcThe fault, dear Brutus, is not in our stars / But in ourselves.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.9368979335,
      "y": 0.5125858784,
      "quote": "\u201cWhen the heart speaks, the mind finds it indecent to object.\u201d",
      "author": "Milan Kundera,"
  },
  {
      "x": 0.4622719288,
      "y": 0.3550997078,
      "quote": "\u201cConfidence is ignorance. If you're feeling cocky, it's because there's something you don't know.\u201d",
      "author": "Eoin Colfer,"
  },
  {
      "x": 0.4345112443,
      "y": 0.1350147575,
      "quote": "\u201cI like good strong words that mean something\u00e2\u20ac\u00a6\u201d",
      "author": "Louisa May Alcott,"
  },
  {
      "x": 0.4958674908,
      "y": 0.2541342676,
      "quote": "\u201cA book lying idle on a shelf is wasted ammunition.\u201d",
      "author": "Henry Miller,"
  },
  {
      "x": 0.6628980041,
      "y": 0.2643123865,
      "quote": "\u201cThe purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.\u201d",
      "author": "Eleanor Roosevelt"
  },
  {
      "x": 0.3125606775,
      "y": 0.5205159187,
      "quote": "\u201cDreams do come true, if only we wish hard enough. You can have anything in life if you will sacrifice everything else for it.\u201d",
      "author": "J.M. Barrie,"
  },
  {
      "x": 0.5087512732,
      "y": 0.0408175141,
      "quote": "\u201cNothing in the world is ever completely wrong. Even a stopped clock is right twice a day.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.5778459311,
      "y": 0.6362655163,
      "quote": "\u201cWhat's the good of living if you don't try a few things?\u201d",
      "author": "Charles M. Schulz"
  },
  {
      "x": 0.4113904238,
      "y": 0.7828495502,
      "quote": "\u201cWhen you find your path, you must not be afraid. You need to have sufficient courage to make mistakes. Disappointment, defeat, and despair are the tools God uses to show us the way.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.3643932343,
      "y": 0.8133333921,
      "quote": "\u201cThe happiness of your life depends upon the quality of your thoughts.\u201d",
      "author": "Marcus Aurelius,"
  },
  {
      "x": 0.5031659603,
      "y": 0.6516993046,
      "quote": "\u201cAll alone! Whether you like it or not, alone is something you'll be quite a lot!\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.4133148789,
      "y": 0.7203512192,
      "quote": "\u201cDo not fall in love with people like me. I will take you to museums, and parks, and monuments, and kiss you in every beautiful place, so that you can never go back to them without tasting me like blood in your mouth.I will destroy you in the most beautiful way possible. And when I leave you will finally understand, why storms are named after people.\u201d",
      "author": "Caitlyn Siehl,"
  },
  {
      "x": 0.5036040545,
      "y": 0.1360549331,
      "quote": "\u201cYes, I was infatuated with you: I am still. No one has ever heightened such a keen capacity of physical sensation in me. I cut you out because I couldn't stand being a passing fancy. Before I give my body, I must give my thoughts, my mind, my dreams. And you weren't having any of those.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.1900698543,
      "y": 0.7086763382,
      "quote": "\u201cThere is more to sex appeal than just measurements. I don't need a bedroom to prove my womanliness. I can convey just as much sex appeal, picking apples off a tree or standing in the rain.\u201d",
      "author": "Audrey Hepburn"
  },
  {
      "x": 0.737755239,
      "y": 0.7852096558,
      "quote": "\u201cI wonder if the snow loves the trees and fields, that it kisses them so gently? And then it covers them up snug, you know, with a white quilt; and perhaps it says, \"Go to sleep, darlings, till the summer comes again.\u201d",
      "author": "Lewis Carroll,"
  },
  {
      "x": 0.735722363,
      "y": 0.3776182234,
      "quote": "\u201cLearn to value yourself, which means: fight for your happiness.\u201d",
      "author": "Ayn Rand"
  },
  {
      "x": 0.601421833,
      "y": 0.6452268362,
      "quote": "\u201cIn the darkness, two shadows, reaching through the hopeless, heavy dusk. Their hands meet, and light spills in a flood like a hundred golden urns pouring out of the sun.\u201d",
      "author": "Madeline Miller,"
  },
  {
      "x": 0.6027960777,
      "y": 0.343839556,
      "quote": "\u201cThe ships hung in the sky in much the same way that bricks don't.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.1585009396,
      "y": 0.3338640928,
      "quote": "\u201cNever underestimate the power of stupid people in large groups.\u201d",
      "author": "George Carlin"
  },
  {
      "x": 0.4514654279,
      "y": 0.3429979384,
      "quote": "\u201cEveryone must leave something behind when he dies, my grandfather said. A child or a book or a painting or a house or a wall built or a pair of shoes made. Or a garden planted. Something your hand touched some way so your soul has somewhere to go when you die, and when people look at that tree or that flower you planted, you're there. It doesn't matter what you do, he said, so long as you change something from the way it was before you touched it into something that's like you after you take your hands away. The difference between the man who just cuts lawns and a real gardener is in the touching, he said. The lawn-cutter might just as well not have been there at all; the gardener will be there a lifetime.\u201d",
      "author": "Ray Bradbury,"
  },
  {
      "x": 0.4363740683,
      "y": 0.4520627558,
      "quote": "\u201cLack of direction, not lack of time, is the problem. We all have twenty-four hour days.\u201d",
      "author": "Zig Ziglar"
  },
  {
      "x": 0.4780216217,
      "y": 0.4787238538,
      "quote": "\u201cI have learned now that while those who speak about one's miseries usually hurt, those who keep silence hurt more.\u201d",
      "author": "C. S. Lewis"
  },
  {
      "x": 0.6445943117,
      "y": 0.4313987792,
      "quote": "\u201cCourage is resistance to fear, mastery of fear - not absence of fear.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5723750591,
      "y": 0.6420288086,
      "quote": "\u201cI want to grow old without facelifts. I want to have the courage to be loyal to the face I have made.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.7412145734,
      "y": 0.3830544949,
      "quote": "\u201cChange will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek.\u201d",
      "author": "Barack Obama"
  },
  {
      "x": 0.3814385533,
      "y": 0.4820553362,
      "quote": "\u201cHonestly, if you were any slower, you\u00e2\u20ac\u2122d be going backward.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8133999705,
      "y": 0.2589239776,
      "quote": "\u201cThe saddest people I've ever met in life are the ones who don't care deeply about anything at all. Passion and satisfaction go hand in hand, and without them, any happiness is only temporary, because there's nothing to make it last.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.3258134723,
      "y": 0.5424866676,
      "quote": "\u201cQuotation is a serviceable substitute for wit.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.6124479175,
      "y": 0.885463953,
      "quote": "\u201cIf people refuse to look at you in a new light and they can only see you for what you were, only see you for the mistakes you've made, if they don't realize that you are not your mistakes, then they have to go.\u201d",
      "author": "Steve Maraboli,"
  },
  {
      "x": 0.4091042876,
      "y": 0.7668014765,
      "quote": "\u201cBelieve nothing you hear, and only one half that you see.\u201d",
      "author": "Edgar Allan Poe"
  },
  {
      "x": 0.73646456,
      "y": 0.1612425745,
      "quote": "\u201cIf you want to find out what a man is to the bottom, give him power. Any man can stand adversity \u00e2\u20ac\u201d only a great man can stand prosperity. It is the glory of Abraham Lincoln that he never abused power only on the side of mercy\u201d",
      "author": "Robert Ingersoll"
  },
  {
      "x": 0.3291103244,
      "y": 0.5111825466,
      "quote": "\u201cDreams like a podcast,Downloading truth in my ears.They tell me cool stuff.\"\"Apollo?\" I guess, because I figured nobody else could make a haiku that bad.He put his finger to his lips. \"I'm incognito. Call me Fred.\"\"A god named Fred?\u201d",
      "author": "Rick Riordan"
  },
  {
      "x": 0.6284034848,
      "y": 0.5877639055,
      "quote": "\u201cSonnet XVIII do not love you as if you were salt-rose, or topaz,or the arrow of carnations the fire shoots off.I love you as certain dark things are to be loved,in secret, between the shadow and the soul.I love you as the plant that never bloomsbut carries in itself the light of hidden flowers;thanks to your love a certain solid fragrance,risen from the earth, lives darkly in my body.I love you without knowing how, or when, or from where.I love you straightforwardly, without complexities or pride;so I love you because I know no other way than this: where I does not exist, nor you,so close that your hand on my chest is my hand,so close that your eyes close as I fall asleep. \u201d",
      "author": "Pablo Neruda"
  },
  {
      "x": 0.5932241082,
      "y": 0.679256916,
      "quote": "\u201cAtheism turns out to be too simple. If the whole universe has no meaning, we should never have found out that it has no meaning...\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.5820676684,
      "y": 0.8831596375,
      "quote": "\u201cIf you end up with a boring miserable life because you listened to your mom, your dad, your teacher, your priest, or some guy on television telling you how to do your shit, then you deserve it.\u201d",
      "author": "Frank Zappa"
  },
  {
      "x": 0.3094371557,
      "y": 0.4085690081,
      "quote": "\u201cIf conversation was the lyrics, laughter was the music, making time spent together a melody that could be replayed over and over without getting stale.\u201d",
      "author": "Nicholas Sparks"
  },
  {
      "x": 0.6340596676,
      "y": 0.9240335226,
      "quote": "\u201cWhen I get lonely these days, I think: So BE lonely, Liz. Learn your way around loneliness. Make a map of it. Sit with it, for once in your life. Welcome to the human experience. But never again use another person's body or emotions as a scratching post for your own unfulfilled yearnings.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.9478852153,
      "y": 0.3288661242,
      "quote": "\u201cJesper knocked his head against the hull and cast his eyes heavenward. \u00e2\u20ac\u0153Fine. But if Pekka Rollins kills us all, I\u00e2\u20ac\u2122m going to get Wylan\u00e2\u20ac\u2122s ghost to teach my ghost how to play the flute just so that I can annoy the hell out of your ghost.\u00e2\u20ac\ufffdBrekker\u00e2\u20ac\u2122s lips quirked. \u00e2\u20ac\u0153I\u00e2\u20ac\u2122ll just hire Matthias\u00e2\u20ac\u2122 ghost to kick your ghost\u00e2\u20ac\u2122s ass.\u00e2\u20ac\ufffd\u00e2\u20ac\u0153My ghost won\u00e2\u20ac\u2122t associate with your ghost,\u00e2\u20ac\ufffd Matthias said primly, and then wondered if the sea air was rotting his brain.\u201d",
      "author": "Leigh Bardugo,"
  },
  {
      "x": 0.1329969168,
      "y": 0.2629116178,
      "quote": "\u201cHave a heart that never hardens, and a temper that never tires, and a touch that never hurts.\u201d",
      "author": "Charles Dickens"
  },
  {
      "x": 0.2092790604,
      "y": 0.4864724576,
      "quote": "\u201cAre you implying that shreds of my reputation remain intact?\" Will demanded with mock horror. \"Clearly I have been doing something wrong. Or not something wrong, as the case may be.\" He banged on the side of the carriage. \"Thomas! We must away at once to the nearest brothel. I seek scandal and low companionship.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.823115766,
      "y": 0.7244974375,
      "quote": "\u201cHere is a lesson in creative writing. First rule: Do not use semicolons. They are transvestite hermaphrodites representing absolutely nothing. All they do is show you've been to college.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.5855938792,
      "y": 0.6010837555,
      "quote": "\u201cNo persons are more frequently wrong, than those who will not admit they are wrong.\u201d",
      "author": "Fran\u00c3\u00a7ois de La Rochefoucauld"
  },
  {
      "x": 0.4022634625,
      "y": 0.4128930271,
      "quote": "\u201cOnly the dead have seen the end of war.\u201d",
      "author": "Plato"
  },
  {
      "x": 0.5734068155,
      "y": 0.3715906739,
      "quote": "\u201cA snowball in the face is surely the perfect beginning to a lasting friendship.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.0563735664,
      "y": 0.3270772398,
      "quote": "\u201cIf neurotic is wanting two mutually exclusive things at one and the same time, then I'm neurotic as hell. I'll be flying back and forth between one mutually exclusive thing and another for the rest of my days.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.352651,
      "y": 0.7759068012,
      "quote": "\u201cI'm oxygen and he's dying to breathe.\u201d",
      "author": "Tahereh Mafi,"
  },
  {
      "x": 0.5523642302,
      "y": 0.0932637304,
      "quote": "\u201cThe world is full of magic things, patiently waiting for our senses to grow sharper.\u201d",
      "author": "W.B. Yeats"
  },
  {
      "x": 0.7074769139,
      "y": 0.5662889481,
      "quote": "\u201cNever interrupt your enemy when he is making a mistake.\u201d",
      "author": "Napoleon Bonaparte"
  },
  {
      "x": 0.1195348203,
      "y": 0.5219000578,
      "quote": "\u201cI fell in love with him. But I don't just stay with him by default as if there's no one else available to me. I stay with him because I choose to, every day that I wake up, every day that we fight or lie to each other or disappoint each other. I choose him over and over again, and he chooses me.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.6195722222,
      "y": 0.4174661338,
      "quote": "\u201cGod can't give us peace and happiness apart from Himself because there is no such thing.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.3066101074,
      "y": 0.7024432421,
      "quote": "\u201cMen are afraid that women will laugh at them. Women are afraid that men will kill them.\u201d",
      "author": "Margaret Atwood"
  },
  {
      "x": 0.8742073178,
      "y": 0.4896046221,
      "quote": "\u201cGo on with what your heart tells you, or you will lose all.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.4515380859,
      "y": 0.3875897229,
      "quote": "\u201cNitwit! Blubber! Oddment! Tweak!\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4152030945,
      "y": 0.1248762012,
      "quote": "\u201cLet our scars fall in love.\u201d",
      "author": "Galway Kinnell"
  },
  {
      "x": 0.3170059323,
      "y": 0.31898579,
      "quote": "\u201cIf you would tell me the heart of a man, tell me not what he reads, but what he rereads.\u201d",
      "author": "Francois Mauriac"
  },
  {
      "x": 0.6483037472,
      "y": 0.3550052047,
      "quote": "\u201cExpose yourself to your deepest fear; after that, fear has no power, and the fear of freedom shrinks and vanishes. You are free.\u201d",
      "author": "Jim Morrison"
  },
  {
      "x": 0.2204574347,
      "y": 0.540246129,
      "quote": "\u201cIf there's a single lesson that life teaches us, it's that wishing doesn't make it so.\u201d",
      "author": "Lev Grossman,"
  },
  {
      "x": 0.7172524333,
      "y": 0.7685629129,
      "quote": "\u201cA lot of you cared, just not enough.\u201d",
      "author": "Jay Asher,"
  },
  {
      "x": 0.589758873,
      "y": 0.3089657724,
      "quote": "\u201cDon\u00e2\u20ac\u2122t try to make life a mathematics problem with yourself in the center and everything coming out equal. When you\u00e2\u20ac\u2122re good, bad things can still happen. And if you\u00e2\u20ac\u2122re bad, you can still be lucky.\u201d",
      "author": "Barbara Kingsolver,"
  },
  {
      "x": 0.1488903463,
      "y": 0.5413081646,
      "quote": "\u201cIf you want to know what God thinks of money, just look at the people he gave it to.\u201d",
      "author": "Dorothy Parker"
  },
  {
      "x": 0.0879908204,
      "y": 0.5221993923,
      "quote": "\u201cI am not afraid of storms, for I am learning how to sail my ship.\u201d",
      "author": "Louisa May Alcott,"
  },
  {
      "x": 0.683288455,
      "y": 0.6597567797,
      "quote": "\u201cOnly those who will risk going too far can possibly find out how far one can go.\u201d",
      "author": "T.S. Eliot"
  },
  {
      "x": 0.7991452813,
      "y": 0.1747116148,
      "quote": "\u201cFill your paper with the breathings of your heart.\u201d",
      "author": "William Wordsworth"
  },
  {
      "x": 0.6489192843,
      "y": 0.1488781273,
      "quote": "\u201cOpen your heart. Someone will come. Someone will come for you. But first you must open your heart.\u201d",
      "author": "Kate DiCamillo,"
  },
  {
      "x": 0.7185809016,
      "y": 0.718860507,
      "quote": "\u201cOur mothers always remain the strangest, craziest people we've ever met.\u201d",
      "author": "Marguerite Duras"
  },
  {
      "x": 0.8687449098,
      "y": 0.5208353996,
      "quote": "\u201cIllegal aliens have always been a problem in the United States. Ask any Indian.\u201d",
      "author": "Robert Orben"
  },
  {
      "x": 0.3120595813,
      "y": 0.515693903,
      "quote": "\u201cFrom there to here, from here to there, funny things are everywhere!\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.1499465108,
      "y": 0.3813280761,
      "quote": "\u201cThe glory of friendship is not the outstretched hand, not the kindly smile, nor the joy of companionship; it is the spiritual inspiration that comes to one when you discover that someone else believes in you and is willing to trust you with a friendship.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.6934391856,
      "y": 0.7327501774,
      "quote": "\u201cBooks are not made to be believed, but to be subjected to inquiry. When we consider a book, we mustn't ask ourselves what it says but what it means...\u201d",
      "author": "Umberto Eco,"
  },
  {
      "x": 0.9105303884,
      "y": 0.5107277632,
      "quote": "\u201cShe refused to be bored chiefly because she wasn't boring.\u201d",
      "author": "Zelda Fitzgerald,"
  },
  {
      "x": 0.9878359437,
      "y": 0.5975077152,
      "quote": "\u201cKindness is a language which the deaf can hear and the blind can see.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5283274651,
      "y": 0.4735188186,
      "quote": "\u201cDid you ever think that in a past life Alec was an old woman with ninety cats who was always yelling at the neighborhood kids to get off her lawn? Because I do,\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5919292569,
      "y": 0.3012262583,
      "quote": "\u201cIt is a good rule after reading a new book, never to allow yourself another new one till you have read an old one in between.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.4753865004,
      "y": 0.428275913,
      "quote": "\u201cMy library is an archive of longings.\u201d",
      "author": "Susan Sontag,"
  },
  {
      "x": 0.5389413238,
      "y": 0.03329207,
      "quote": "\u201cOlder men declare war. But it is youth that must fight and die.\u201d",
      "author": "Herbert Hoover"
  },
  {
      "x": 0.6989756227,
      "y": 0.442459017,
      "quote": "\u201cJust because you're paranoid doesn't mean they aren't after you.\u201d",
      "author": "Joseph Heller,"
  },
  {
      "x": 0.5655344129,
      "y": 0.7506917715,
      "quote": "\u201cI am glad you are here with me. Here at the end of all things, Sam.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.5022041798,
      "y": 0.0102673769,
      "quote": "\u201cFamilies are messy. Immortal families are eternally messy. Sometimes the best we can do is to remind each other that we're related for better or for worse...and try to keep the maiming and killing to a minimum.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.1557814777,
      "y": 0.4113410413,
      "quote": "\u201cBecause you can't argue with all the fools in the world. It's easier to let them have their way, then trick them when they're not paying attention.\u201d",
      "author": "Christopher Paolini"
  },
  {
      "x": 0.4382783771,
      "y": 0.1116885245,
      "quote": "\u201cLolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth. Lo. Lee. Ta. She was Lo, plain Lo, in the morning, standing four feet ten in one sock. She was Lola in slacks. She was Dolly at school. She was Dolores on the dotted line. But in my arms she was always Lolita. Did she have a precursor? She did, indeed she did. In point of fact, there might have been no Lolita at all had I not loved, one summer, an initial girl-child. In a princedom by the sea. Oh when? About as many years before Lolita was born as my age was that summer. You can always count on a murderer for a fancy prose style. Ladies and gentlemen of the jury, exhibit number one is what the seraphs, the misinformed, simple, noble-winged seraphs, envied. Look at this tangle of thorns.\u201d",
      "author": "Vladimir Nabokov,"
  },
  {
      "x": 0.3495776057,
      "y": 0.8084341288,
      "quote": "\u201cHappiness is holding someone in your arms and knowing you hold the whole world.\u201d",
      "author": "Orhan Pamuk,"
  },
  {
      "x": 0.4338925481,
      "y": 0.4171017706,
      "quote": "\u201cBehind every exquisite thing that existed, there was something tragic.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.1326015592,
      "y": 0.3445687294,
      "quote": "\u201cDon't compromise yourself - you're all you have.\u201d",
      "author": "John Grisham,"
  },
  {
      "x": 0.5237304568,
      "y": 0.2474551499,
      "quote": "\u201cI know I am but summer to your heart, and not the full four seasons of the year.\u201d",
      "author": "Edna St. Vincent Millay"
  },
  {
      "x": 0.4320141077,
      "y": 0.8785926104,
      "quote": "\u201cDON'T THINK OF IT AS DYING, said Death. JUST THINK OF IT AS LEAVING EARLY TO AVOID THE RUSH.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.4787522554,
      "y": 0.3296753466,
      "quote": "\u201csilence is the language of god, all else is poor translation.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.217975378,
      "y": 0.2292998433,
      "quote": "\u201cIf you think you are too small to make a difference, try sleeping with a mosquito.\u201d",
      "author": "Dalai Lama XIV"
  },
  {
      "x": 0.4092872739,
      "y": 0.6172777414,
      "quote": "\u201cI drink to make other people more interesting.\u201d",
      "author": "Hemingway, Ernest"
  },
  {
      "x": 0.4857289791,
      "y": 0.8865082264,
      "quote": "\u201cScared is what you're feeling. Brave is what you're doing.\u201d",
      "author": "Emma Donoghue,"
  },
  {
      "x": 0.5525721312,
      "y": 0.8929954767,
      "quote": "\u201cThere is only one sin. and that is theft... when you tell a lie, you steal someones right to the truth.\u201d",
      "author": "Khaled Hosseini,"
  },
  {
      "x": 0.8563376069,
      "y": 0.5665181875,
      "quote": "\u201cIt was a mistake,\" you said. But the cruel thing was, it felt like the mistake was mine, for trusting you.\u201d",
      "author": "David Levithan,"
  },
  {
      "x": 0.3617604375,
      "y": 0.4049611688,
      "quote": "\u201cI thought I'd lie on the floor and writhe in pain for a while,\" he grunted, \"It relaxes me.\"\"It does? Oh - you're being sarcastic. That's a good sign probably.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.9496430755,
      "y": 0.582498312,
      "quote": "\u201cAh, my daughter,\u00ca\u00ba he said. \u00ca\u00baEighteen, and already you\u00ca\u00b9ve been accused of murder, aided felons, and acquired a death count higher than most guardians will ever see.\u00ca\u00ba He paused. \u00ca\u00baI couldn\u00ca\u00b9t be prouder.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.606708169,
      "y": 0.1140923649,
      "quote": "\u201cWhat she was finding also was how one book led to another, doors kept opening wherever she turned and the days weren't long enough for the reading she wanted to do.\u201d",
      "author": "Alan Bennett,"
  },
  {
      "x": 0.4833291173,
      "y": 0.0992723256,
      "quote": "\u201cOne of the advantages of being disorganized is that one is always having surprising discoveries.\u201d",
      "author": "A.A. Milne"
  },
  {
      "x": 0.8298811316,
      "y": 0.2758330107,
      "quote": "\u201cA house without books is like a room without windows.\u201d",
      "author": "Horace Mann"
  },
  {
      "x": 0.3338741064,
      "y": 0.3544310033,
      "quote": "\u201cRemember, remember, this is now, and now, and now. Live it, feel it, cling to it. I want to become acutely aware of all I\u00e2\u20ac\u2122ve taken for granted.\u201d",
      "author": "Sylvia Plath"
  },
  {
      "x": 0.7646276355,
      "y": 0.7417657375,
      "quote": "\u201cThe more you know who you are, and what you want, the less you let things upset you.\u201d",
      "author": "Stephanie Perkins,"
  },
  {
      "x": 0.7188701034,
      "y": 0.2331317067,
      "quote": "\u201cWe can know only that we know nothing. And that is the highest degree of human wisdom.\u201d",
      "author": "Leo Tolstoy,"
  },
  {
      "x": 0.5746645331,
      "y": 0.3604818583,
      "quote": "\u201cDo your little bit of good where you are; it's those little bits of good put together that overwhelm the world.\u201d",
      "author": "Desmond Tutu"
  },
  {
      "x": 0.7793210149,
      "y": 0.3250370324,
      "quote": "\u201cOwners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are god. Whereas owners of cats are compelled to realize that, if you provide them with food and water and shelter and affection, they draw the conclusion that they are gods.\u201d",
      "author": "Christopher Hitchens,"
  },
  {
      "x": 0.5548081398,
      "y": 0.9526166916,
      "quote": "\u201cIt's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers.\u201d",
      "author": "Patrick Rothfuss,"
  },
  {
      "x": 0.8451792598,
      "y": 0.7680754662,
      "quote": "\u201cDon't spend time beating on a wall, hoping to transform it into a door. \u201d",
      "author": "Coco Chanel"
  },
  {
      "x": 0.5604299903,
      "y": 0.3460864723,
      "quote": "\u201cTalk sense to a fool and he calls you foolish.\u201d",
      "author": "Euripides,"
  },
  {
      "x": 0.5030617118,
      "y": 0.9095368385,
      "quote": "\u201cIt's not gray,\" Clary felt compelled to point out. \"It's green.\"\"If there was such a thing as terminal literalism, you'd have died in childhood,\" said Jace.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4192540646,
      "y": 0.2732411325,
      "quote": null,
      "author": null
  },
  {
      "x": 0.1791867912,
      "y": 0.6841081381,
      "quote": "\u201cThen the Grinch thought of something he hadn't before! What if Christmas, he thought, doesn't come from a store. What if Christmas...perhaps...means a little bit more!\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.361420691,
      "y": 0.5803790092,
      "quote": "\u201cIt is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it. Those who, like you, have leadership thrust upon them, and take up the mantle because they must, and find to their own surprise that they wear it well.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.49243927,
      "y": 0.4479720891,
      "quote": "\u201cI don't want tea,\" said Clary, with muffled force. \"I want to find my mother. And then I want to find out who took her in the first place, and I want to kill them.\"\"Unfortunately,\" said Hodge, \"we're all out of bitter revenge at the moment, so it's either tea or nothing.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5696904659,
      "y": 0.9425282478,
      "quote": "\u201cReputation is what other people know about you. Honor is what you know about yourself.\u201d",
      "author": "Lois McMaster Bujold,"
  },
  {
      "x": 0.3130483031,
      "y": 0.2788981199,
      "quote": "\u201cWhen did we see each other face-to-face? Not until you saw into my cracks and I saw into yours. Before that, we were just looking at ideas of each other, like looking at your window shade but never seeing inside. But once the vessel cracks, the light can get in. The light can get out.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.4512457848,
      "y": 0.2837521434,
      "quote": "\u201cA word after a word after a word is power.\u201d",
      "author": "Margaret Atwood"
  },
  {
      "x": 0.5875422955,
      "y": 0.115744397,
      "quote": "\u201cGive her hell from us, Peeves.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4297175407,
      "y": 0.8349262476,
      "quote": "\u201cYou're just worried they'll hire a male instructor and he'll be hotter than you.\" Jace's eyebrows went up. \"Hotter than me?\" \"It could happen,\" Clary said, \"You know, theoretically.\"\"Theoretically the planet could suddenly crack in half, leaving me on one side and you on the other, forever and tragically parted, but I'm not worried about that either. Some things,\" Jace said, with his customary crooked smile, \"are just too unlikely to dwell upon.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4867060184,
      "y": 0.8046300411,
      "quote": "\u201cThat which can be asserted without evidence, can be dismissed without evidence.\u201d",
      "author": "Christopher Hitchens"
  },
  {
      "x": 0.6566232443,
      "y": 0.5234997272,
      "quote": "\u201cTry a little harder to be a little better.\u201d",
      "author": "Gordon B. Hinckley"
  },
  {
      "x": 0.676507473,
      "y": 0.6564877033,
      "quote": "\u201cCry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.\u201d",
      "author": "Steve Maraboli"
  },
  {
      "x": 0.1759272516,
      "y": 0.5456869602,
      "quote": "\u201cYou could have fooled me. Everytime I called you, Luke said you were sick. I figured you were avoiding me. Again.\"\"I wasn't. I did want to talk to you. I've been thinking about you all the time.\"\"I've been thinking about you, too.\"\"I really was sick. I swear. I almost died back there on the ship, you know.\"\"I know. Everytime you almost die, I almost die myself.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2991429567,
      "y": 0.6502945423,
      "quote": "\u201cLet me give you a piece of advice. The handsome young fellow who's trying to rescue you from a hideous fate is never wrong. Not even if he says the sky is purple and made of hedgehogs.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.8256805539,
      "y": 0.6974396706,
      "quote": "\u201cThere is something delicious about writing the first words of a story. You never quite know where they'll take you.\u201d",
      "author": "Beatrix Potter"
  },
  {
      "x": 0.2978330255,
      "y": 0.6111770868,
      "quote": "\u201cEvery book, every volume you see here, has a soul. The soul of the person who wrote it and of those who read it and lived and dreamed with it. Every time a book changes hands, every time someone runs his eyes down its pages, its spirit grows and strengthens.\u201d",
      "author": "Carlos Ruiz Zaf\u00c3\u00b3n,"
  },
  {
      "x": 0.7843694091,
      "y": 0.2444219291,
      "quote": "\u201cWho, being loved, is poor?\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.2939525843,
      "y": 0.405572027,
      "quote": "\u201cThere is only one page left to write on. I will fill it with words of only one syllable. I love. I have loved. I will love.\u201d",
      "author": "Dodie Smith,"
  },
  {
      "x": 0.5487881899,
      "y": 0.4824503362,
      "quote": "\u201cThe creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.4884205461,
      "y": 0.1084101349,
      "quote": "\u201cShe had always wanted words, she loved them; grew up on them. Words gave her clarity, brought reason, shape.\u201d",
      "author": "Michael Ondaatje,"
  },
  {
      "x": 0.5397447944,
      "y": 0.2323229909,
      "quote": "\u201cEven strength must bow to wisdom sometimes.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.7154877782,
      "y": 0.348117888,
      "quote": "\u201cTime doesn\u00e2\u20ac\u2122t heal emotional pain, you need to learn how to let go.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.6035853624,
      "y": 0.7624938488,
      "quote": "\u201cI'm on Aslan's side even if there isn't any Aslan to lead it. I'm going to live as like a Narnian as I can even if there isn't any Narnia.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.7814537883,
      "y": 0.2358091474,
      "quote": "\u201cIf A is a success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.8517121673,
      "y": 0.9439154863,
      "quote": "\u201cThe mind once enlightened cannot again become dark.\u201d",
      "author": "Thomas Paine,"
  },
  {
      "x": 0.2245709896,
      "y": 0.318786025,
      "quote": "\u201cNothing in the world is more dangerous than sincere ignorance and conscientious stupidity.\u201d",
      "author": "Martin Luther King Jr."
  },
  {
      "x": 0.6506717205,
      "y": 0.5017187595,
      "quote": "\u201cWhenever you read a cancer booklet or website or whatever, they always list depression among the side effects of cancer. But, in fact, depression is not a side effect of cancer. Depression is a side effect of dying.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.2276753783,
      "y": 0.7789307833,
      "quote": "\u201cThose who know do not speak. Those who speak do not know.\u201d",
      "author": "Lao Tsu,"
  },
  {
      "x": 0.8889823556,
      "y": 0.6111497879,
      "quote": "\u201cYou'd think people had better things to gossip about,\" said Ginny as she sat on the common room floor, leaning against Harry\u00e2\u20ac\u2122s legs and reading the Daily Prophet. \"Three Dementor attacks in a week, and all Romilda Vane does is ask me if it\u00e2\u20ac\u2122s true you\u00e2\u20ac\u2122ve got a Hippogriff tattooed across your chest.\"Ron and Hermione both roared with laughter. Harry ignored them.What did you tell her?\"I told her it's a Hungarian Horntail,\" said Ginny, turning a page of the newspaper idly. \"Much more macho.\"Thanks,\" said Harry, grinning. \"And what did you tell her Ron\u00e2\u20ac\u2122s got?\"A Pygmy Puff, but I didn\u00e2\u20ac\u2122t say where.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8715373874,
      "y": 0.4379419386,
      "quote": "\u201cEverything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.\u201d",
      "author": "Marcus Aurelius ,"
  },
  {
      "x": 0.2522255778,
      "y": 0.2729851604,
      "quote": "\u201cI wrote the story myself. It's about a girl who lost her reputation and never missed it.\u201d",
      "author": "Mae West"
  },
  {
      "x": 0.2544975877,
      "y": 0.5643607378,
      "quote": "\u201cLove can change a person the way a parent can change a baby- awkwardly, and often with a great deal of mess.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.7517634034,
      "y": 0.4746031463,
      "quote": "\u201cA childhood without books \u00e2\u20ac\u201c that would be no childhood. That would be like being shut out from the enchanted place where you can go and find the rarest kind of joy.\u201d",
      "author": "Astrid Lindgren"
  },
  {
      "x": 0.7333756089,
      "y": 0.2772151232,
      "quote": "\u201cReading brings us unknown friends\u201d",
      "author": "Honore de Balzac"
  },
  {
      "x": 0.3028339148,
      "y": 0.2286480963,
      "quote": "\u201cIf you want to keep a secret, you must also hide it from yourself.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.537687242,
      "y": 0.4607293904,
      "quote": "\u201cYou are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.1975445151,
      "y": 0.8019644022,
      "quote": "\u201cYou're an idiot.\"\"I've never claimed to be otherwise.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.8258005977,
      "y": 0.6502039433,
      "quote": "\u201cWhen people talk, listen completely. Most people never listen.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.127745688,
      "y": 0.3575651348,
      "quote": "\u201cThe important thing to you is not how many years in your life, but how much life in your years!\u201d",
      "author": "Edward J. Stieglitz"
  },
  {
      "x": 0.2046992183,
      "y": 0.7964606285,
      "quote": "\u201cThis is the way the world endsNot with a bang but a whimper.\u201d",
      "author": "T.S. Eliot"
  },
  {
      "x": 0.5817790627,
      "y": 1.0000001192,
      "quote": "\u201cMy soul will find yours.\u201d",
      "author": "Jude Deveraux,"
  },
  {
      "x": 0.3689854741,
      "y": 0.5249048471,
      "quote": "\u201cI think we ought to read only the kind of books that wound or stab us. If the book we're reading doesn't wake us up with a blow to the head, what are we reading for? So that it will make us happy, as you write? Good Lord, we would be happy precisely if we had no books, and the kind of books that make us happy are the kind we could write ourselves if we had to. But we need books that affect us like a disaster, that grieve us deeply, like the death of someone we loved more than ourselves, like being banished into forests far from everyone, like a suicide. A book must be the axe for the frozen sea within us. That is my belief.\u201d",
      "author": "Franz Kafka"
  },
  {
      "x": 0.0759562254,
      "y": 0.6228439808,
      "quote": "\u201cThe greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.\u201d",
      "author": "Daniel J. Boorstin"
  },
  {
      "x": 0.3787186742,
      "y": 0.3393847346,
      "quote": "\u201cAll parents damage their children. It cannot be helped. Youth, like pristine glass, absorbs the prints of its handlers. Some parents smudge, others crack, a few shatter childhoods completely into jagged little pieces, beyond repair.\u201d",
      "author": "Mitch Albom,"
  },
  {
      "x": 0.3723092675,
      "y": 0.3539791405,
      "quote": "\u201cDid you know that 'I told you so' has a brother,Jacob?\" she asked cutting me off. \"His name is 'Shut the hell up'.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.3998231888,
      "y": 0.7848026752,
      "quote": "\u201cWhen we least expect it, life sets us a challenge to test our courage and willingness to change; at such a moment, there is no point in pretending that nothing has happened or in saying that we are not yet ready. The challenge will not wait. Life does not look back. A week is more than enough time for us to decide whether or not to accept our destiny.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.6204348803,
      "y": 0.8883516788,
      "quote": "\u201cMay the odds be ever in your favor!\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.3985775709,
      "y": 0.802044034,
      "quote": "\u201cHow nice -- to feel nothing, and still get full credit for being alive.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.2770674825,
      "y": 0.3791426718,
      "quote": "\u201cI always channel my emotions into my work. That way, I don't hurt anyone but myself.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.6356583238,
      "y": 0.4246579111,
      "quote": "\u201cIn time, the hurt began to fade and it was easier to just let it go. At least I thought it was. But in every boy I met in the next few years, I found myself looking for you, and when the feelings got too strong, I'd write you another letter. But I never sent them for fear of what I might find. By then, you'd gone on with your life and I didn't want to think about you loving someone else. I wanted to remember us like we were that summer. I didn't ever want to lose that.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.4571716189,
      "y": 0.1541190147,
      "quote": "\u201cReally, the combination of the scabs and the ointment looks hideous. I can't help enjoying his distress.\"Poor Finnick. Is this the first time in your life you haven't looked pretty?\" I say.\"It must be. The sensation's completely new. How have you managed it all these years?\" he asks.\"Just avoid mirrors. You'll forget about it,\" I say.\"Not if I keep looking at you,\" he says.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.394620955,
      "y": 0.688116312,
      "quote": "\u201cI fell in love with you, smartass, because you were one of us\u00e2\u20ac\u201dbecause you weren\u00e2\u20ac\u2122t afraid of me, and you decided to end your spectacular victory by throwing that piece of bone at Amarantha like a javelin. I felt Cassian\u00e2\u20ac\u2122s spirit beside me in that moment, and could have sworn I heard him say, \u00e2\u20ac\u02dcIf you don\u00e2\u20ac\u2122t marry her, you stupid prick, I will.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.1308549643,
      "y": 0.5303684473,
      "quote": "\u201cAs it has been said:Love and a coughcannot be concealed.Even a small cough.Even a small love.\u201d",
      "author": "Anne Sexton"
  },
  {
      "x": 0.5670796633,
      "y": 0.5857158899,
      "quote": "\u201cBy the pricking of my thumbs, Something wicked this way comes.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.311152339,
      "y": 0.7474361658,
      "quote": "\u201cAsk not what you can do for your country. Ask what\u00e2\u20ac\u2122s for lunch.\u201d",
      "author": "Orson Welles"
  },
  {
      "x": 0.5328965187,
      "y": 0.6800736189,
      "quote": "\u201cThe pleasure of remembering had been taken from me, because there was no longer anyone to remember with. It felt like losing your co-rememberer meant losing the memory itself, as if the things we'd done were less real and important than they had been hours before.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.2514739037,
      "y": 0.1331142932,
      "quote": "\u201cNo one has ever become poor by giving.\u201d",
      "author": "Anne Frank,"
  },
  {
      "x": 0.6957735419,
      "y": 0.1411952227,
      "quote": "\u201cOf all the words of mice and men, the saddest are, \"It might have been.\u201d",
      "author": "Kurt Vonnegut"
  },
  {
      "x": 0.0485402346,
      "y": 0.2907980978,
      "quote": "\u201cTime is the longest distance between two places.\u201d",
      "author": "Tennessee Williams,"
  },
  {
      "x": 0.6868504882,
      "y": 0.3485584855,
      "quote": "\u201cLost opportunities, lost possibilities, feelings we can never get back. That's part of what it means to be alive. But inside our heads - at least that's where I imagine it - there's a little room where we store those memories. A room like the stacks in this library. And to understand the workings of our own heart we have to keep on making new reference cards. We have to dust things off every once in awhile, let in fresh air, change the water in the flower vases. In other words, you'll live forever in your own private library.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.8348678946,
      "y": 0.6389145851,
      "quote": "\u201cHope can be a powerful force. Maybe there's no actual magic in it, but when you know what you hope for most and hold it like a light within you, you can make things happen, almost like magic.\u201d",
      "author": "Laini Taylor,"
  },
  {
      "x": 0.2095399499,
      "y": 0.5247647762,
      "quote": "\u201cTomorrow may be hell, but today was a good writing day, and on the good writing days nothing else matters.\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.7140385509,
      "y": 0.3522261679,
      "quote": "\u201cForgive, O Lord, my little jokes on TheeAnd I'll forgive Thy great big one on me.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.8657006621,
      "y": 0.617852807,
      "quote": "\u201cMy concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.\u201d",
      "author": "Abraham Lincoln"
  },
  {
      "x": 0.1448402703,
      "y": 0.4646899402,
      "quote": "\u201cI love books, by the way, way more than movies. Movies tell you what to think. A good book lets you choose a few thoughts for yourself. Movies show you the pink house. A good book tells you there's a pink house and lets you paint some of the finishing touches, maybe choose the roof style,park your own car out front. My imagination has always topped anything a movie could come up with. Case in point, those darned Harry Potter movies. That was so not what that part-Veela-chick, Fleur Delacour, looked like.\u201d",
      "author": "Karen Marie Moning,"
  },
  {
      "x": 0.824808538,
      "y": 0.8944835663,
      "quote": "\u201cSometimes beautiful things come into our lives out of nowhere. We can't always understand them, but we have to trust in them. I know you want to question everything, but sometimes it pays to just have a little faith.\u201d",
      "author": "Lauren Kate,"
  },
  {
      "x": 0.5902432799,
      "y": 0.5423811674,
      "quote": "\u201cRemember, darkness does not always equate to evil, just as light does not always bring good.\u201d",
      "author": "P.C. Cast,"
  },
  {
      "x": 0.7194678187,
      "y": 0.3653899133,
      "quote": "\u201cA diary with no drawings of me in it? Where are the torrid fantasies? The romance covers?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4776821733,
      "y": 0.3702034056,
      "quote": "\u201cDo not be afraid; our fateCannot be taken from us; it is a gift.\u201d",
      "author": "Dante Alighieri,"
  },
  {
      "x": 0.9151007533,
      "y": 0.5439696312,
      "quote": "\u201cHe accused me of being Dumbledore's man through and through.\"\"How very rude of him.\"\"I told him I was.\"Dumbledore opened his mouth to speak and then closed it again. Fawkes the phoenix let out a low, soft, musical cry. To Harry's intense embarrassment, he suddenly realized that Dumbledore's bright blue eyes looked rather watery, and stared hastily at his own knee. When Dumbledore spoke, however, his voice was quite steady. \"I am very touched, Harry.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.2865781784,
      "y": 0.3755986691,
      "quote": "\u201cI meant what I said and I said what I meant. An elephant's faithful one-hundred percent!\u201d",
      "author": "Dr. Seuss,"
  },
  {
      "x": 0.731916368,
      "y": 0.7391314507,
      "quote": "\u201cFaith is not the belief that God will do what you want. It is the belief that God will do what is right.\u201d",
      "author": "Max Lucado,"
  },
  {
      "x": 0.7121728063,
      "y": 0.4517926872,
      "quote": "\u201cTo shine your brightest light is to be who you truly are.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.6988218427,
      "y": 0.9272127151,
      "quote": "\u201cSometimes you read a book so special that you want to carry it around with you for months after you've finished just to stay near it.\u201d",
      "author": "Markus Zusak"
  },
  {
      "x": 0.6285300851,
      "y": 0.5920219421,
      "quote": "\u201cThat's what careless words do. They make people love you a little less.\u201d",
      "author": "Arundhati Roy,"
  },
  {
      "x": 0.411419034,
      "y": 0.2919903696,
      "quote": "\u201cAnimals are my friends...and I don't eat my friends.\u201d",
      "author": "George Bernard Shaw"
  },
  {
      "x": 0.5940437317,
      "y": 0.3174462616,
      "quote": "\u201cIn individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.4058530927,
      "y": 0.5102961063,
      "quote": "\u201cWhat day is it?\u00e2\u20ac\ufffd asked Pooh. \u00e2\u20ac\u0153It\u00e2\u20ac\u2122s today,\u00e2\u20ac\ufffd squeaked Piglet.\u00e2\u20ac\u0153My favorite day,\u00e2\u20ac\ufffd said Pooh.\u201d",
      "author": "A.A. Milne"
  },
  {
      "x": 0.6906291246,
      "y": 0.4983477294,
      "quote": "\u201cCrying is for plain women. Pretty women go shopping.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.1770248711,
      "y": 0.2528119385,
      "quote": "\u201cWhat do we live for, if it is not to make life less difficult for each other?\u201d",
      "author": "George Eliot"
  },
  {
      "x": 0.8499609828,
      "y": 0.5421334505,
      "quote": "\u201cI do not think, sir, you have any right to command me, merely because you are older than I, or because you have seen more of the world than I have; your claim to superiority depends on the use you have made of your time and experience.\u201d",
      "author": "Charlotte Bront\u00c3\u00ab,"
  },
  {
      "x": 0.6492871642,
      "y": 0.1535113007,
      "quote": "\u201cAh, music,\" he said, wiping his eyes. \"A magic beyond all we do here!\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.2492622733,
      "y": 0.1366665214,
      "quote": "\u201cSometimes, when I have to do something I don't want to do, I pretend I'm a character from a book. It's easier to know what they would do.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4164868593,
      "y": 0.3769308925,
      "quote": "\u201cArt washes away from the soul the dust of everyday life.\u201d",
      "author": "Pablo Picasso"
  },
  {
      "x": 0.4345164299,
      "y": 0.1580420136,
      "quote": "\u201cWhen I was about eight, I decided that the most wonderful thing, next to a human being, was a book.\u201d",
      "author": "Margaret Walker"
  },
  {
      "x": 0.2979476452,
      "y": 0.7418875694,
      "quote": "\u201cKnowing too much of your future is never a good thing.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.5663454533,
      "y": 0.8701611757,
      "quote": "\u201cYou must not lose faith in humanity. Humanity is like an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.513330996,
      "y": 0.710003376,
      "quote": "\u201cThere are so many ways to be brave in this world. Sometimes bravery involves laying down your life for something bigger than yourself, or for someone else. Sometimes it involves giving up everything you have ever known, or everyone you have ever loved, for the sake of something greater.But sometimes it doesn't.Sometimes it is nothing more than gritting your teeth through pain, and the work of every day, the slow walk toward a better life. That is the sort of bravery I must have now.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.2298095822,
      "y": 0.3918905854,
      "quote": "\u201cBe thankful for everything that happens in your life; it\u00e2\u20ac\u2122s all an experience.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.6936892867,
      "y": 0.3226614296,
      "quote": "\u201cThe reason it hurts so much to separate is because our souls are connected. Maybe they always have been and will be. Maybe we've lived a thousand lives before this one and in each of them we've found each other. And maybe each time, we've been forced apart for the same reasons. That means that this goodbye is both a goodbye for the past ten thousand years and a prelude to what will come.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.5861743093,
      "y": 0.7399295568,
      "quote": "\u201cI'm going to wake Peeta,\" I say.\"No, wait,\" says Finnick. \"Let's do it together. Put our faces right in front of his.\"Well, there's so little opportunity for fun left in my life, I agree. We position ourselves on either side of Peeta, lean over until our faces are inches frim his nose, and give him a shake. \"Peeta. Peeta, wake up,\" I say in a soft, singsong voice.His eyelids flutter open and then he jumps like we've stabbed him. \"Aa!\"Finnick and I fall back in the sand, laughing our heads off. Every time we try to stop, we look at Peeta's attempt to maintain a disdainful expression and it sets us off again.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.7023929954,
      "y": 0.7119253874,
      "quote": "\u201cThe moon is a loyal companion.It never leaves. It\u00e2\u20ac\u2122s always there, watching, steadfast, knowing us in our light and dark moments, changing forever just as we do. Every day it\u00e2\u20ac\u2122s a different version of itself. Sometimes weak and wan, sometimes strong and full of light. The moon understands what it means to be human.Uncertain. Alone. Cratered by imperfections.\u201d",
      "author": "Tahereh Mafi,"
  },
  {
      "x": 0.4999889135,
      "y": 0.8080744743,
      "quote": "\u201cThey say time heals all wounds, but that presumes the source of the grief is finite\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.772541821,
      "y": 0.6806281805,
      "quote": "\u201cI have the simplest tastes. I am always satisfied with the best.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.5682579875,
      "y": 0.4781518281,
      "quote": "\u201cIf you know someone who\u00e2\u20ac\u2122s depressed, please resolve never to ask them why. Depression isn\u00e2\u20ac\u2122t a straightforward response to a bad situation; depression just is, like the weather.Try to understand the blackness, lethargy, hopelessness, and loneliness they\u00e2\u20ac\u2122re going through. Be there for them when they come through the other side. It\u00e2\u20ac\u2122s hard to be a friend to someone who\u00e2\u20ac\u2122s depressed, but it is one of the kindest, noblest, and best things you will ever do.\u201d",
      "author": "Stephen Fry"
  },
  {
      "x": 0.6424045563,
      "y": 0.2512280941,
      "quote": "\u201cFriendship marks a life even more deeply than love. Love risks degenerating into obsession, friendship is never anything but sharing.\u201d",
      "author": "Elie Wiesel"
  },
  {
      "x": 0.7835289836,
      "y": 0.884070158,
      "quote": "\u201cPeeta, how come I never know when you're having a nightmare?\u00e2\u20ac\ufffd I say.\u00e2\u20ac\u0153I don't know. I don't think I cry out or thrash around or anything. I just come to, paralyzed with terror,\u00e2\u20ac\ufffd he says.\u00e2\u20ac\u0153You should wake me,\u00e2\u20ac\ufffd I say, thinking about how I can interrupt his sleep two or three times on a bad night. About how long it can take to calm me down.\u00e2\u20ac\u0153It's not necessary. My nightmares are usually about losing you,\u00e2\u20ac\ufffd he says. \u00e2\u20ac\u0153I'm okay once I realize you're here.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.6899870038,
      "y": 0.6863081455,
      "quote": "\u201cI'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.\u201d",
      "author": "Abraham Lincoln"
  },
  {
      "x": 0.2548898458,
      "y": 0.1314114183,
      "quote": "\u201cYou may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.2545713782,
      "y": 0.7828892469,
      "quote": "\u201cSell your cleverness and buy bewilderment.\u201d",
      "author": "Rumi,"
  },
  {
      "x": 0.3874104023,
      "y": 0.7753189802,
      "quote": "\u201cThe scar had not pained Harry for nineteen years. All was well.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.2575576901,
      "y": 0.5231233835,
      "quote": "\u201cHave you really read all those books in your room?\u00e2\u20ac\ufffdAlaska laughing- \u00e2\u20ac\u0153Oh God no. I\u00e2\u20ac\u2122ve maybe read a third of \u00e2\u20ac\u02dcem. But I\u00e2\u20ac\u2122m going to read them all. I call it my Life\u00e2\u20ac\u2122s Library. Every summer since I was little, I\u00e2\u20ac\u2122ve gone to garage sales and bought all the books that looked interesting. So I always have something to read.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.079328984,
      "y": 0.4960373938,
      "quote": "\u201cStrange as it may seem, I still hope for the best, even though the best, like an interesting piece of mail, so rarely arrives, and even when it does it can be lost so easily.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.5549673438,
      "y": 0.5822458267,
      "quote": "\u201cEver has it been that love knows not its own depth until the hour of separation.\u201d",
      "author": "Kahlil Gibran"
  },
  {
      "x": 0.4595181942,
      "y": 0.2632322609,
      "quote": "\u201cHe was gone, and I did not have time to tell him what I had just now realized: that I forgave him, and that she forgave us, and that we had to forgive to survive in the labyrinth. There were so many of us who would have to live with things done and things left undone that day. Things that did not go right, things that seemed okay at the time because we could not see the future. If only we could see the endless string of consequences that result from our smallest actions. But we can\u00e2\u20ac\u2122t know better until knowing better is useless. And as I walked back to give Takumi\u00e2\u20ac\u2122s note to the Colonel, I saw that I would never know. I would never know her well enough to know her thoughts in those last minutes, would never know if she left us on purpose. But the not-knowing would not keep me from caring, and I would always love Alaska Young, my crooked neighbor, with all my crooked heart.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.6210185885,
      "y": 0.5129437447,
      "quote": "\u201cCome sleep with me: We won't make Love, Love will make us.\u201d",
      "author": "Julio Cort\u00c3\u00a1zar"
  },
  {
      "x": 0.4327501059,
      "y": 0.6255075932,
      "quote": "\u201cThe heart has its reasons which reason knows not.\u201d",
      "author": "Blaise Pascal"
  },
  {
      "x": 0.1571967304,
      "y": 0.6515612602,
      "quote": "\u201cThe longer and more carefully we look at a funny story, the sadder it becomes.\u201d",
      "author": "Nikolai V. Gogol"
  },
  {
      "x": 0.3512378931,
      "y": 0.57853508,
      "quote": "\u201cCourage is found in unlikely places.\u201d",
      "author": "J.R.R. Tolkien"
  },
  {
      "x": 0.7439424396,
      "y": 0.2311477959,
      "quote": "\u201cIf you look the right way, you can see that the whole world is a garden.\u201d",
      "author": "Frances Hodgson Burnett,"
  },
  {
      "x": 0.8891252875,
      "y": 0.1995459795,
      "quote": "\u201cTears are words that need to be written.\u201d",
      "author": "Paulo Coelho"
  },
  {
      "x": 0.29563272,
      "y": 0.5640999079,
      "quote": "\u201cThough my soul may set in darkness, it will rise in perfect light; I have loved the stars too fondly to be fearful of the night.\u201d",
      "author": "Sarah   Williams,"
  },
  {
      "x": 0.5002022982,
      "y": 0.1036957353,
      "quote": "\u201cWhere you used to be, there is a hole in the world, which I find myself constantly walking around in the daytime, and falling in at night. I miss you like hell.\u201d",
      "author": "Edna St. Vincent Millay"
  },
  {
      "x": 0.1674501896,
      "y": 0.3243442774,
      "quote": "\u201cI bet you could sometimes find all the mysteries of the universe in someone's hand.\u201d",
      "author": "Benjamin Alire S\u00c3\u00a1enz,"
  },
  {
      "x": 0.4368548989,
      "y": 0.7682497501,
      "quote": "\u201cAdults are just obsolete children and the hell with them.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.5018082857,
      "y": 0.6602356434,
      "quote": "\u201cIt is easy to love people in memory; the hard thing is to love them when they are there in front of you.\u201d",
      "author": "John Updike,"
  },
  {
      "x": 0.1594572663,
      "y": 0.7206730843,
      "quote": "\u201cI must learn to be content with being happier than I deserve.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.6616895795,
      "y": 0.5430593491,
      "quote": "\u201cTis the privilege of friendship to talk nonsense, and to have her nonsense respected.\u201d",
      "author": "Charles Lamb,"
  },
  {
      "x": 0.6632859111,
      "y": 0.6422023773,
      "quote": "\u201cThe spell. Victor said you had to want me... to care about me... for it to work.\" When he didn't say anything, I tried to grip his shirt, but my fingers were too weak. \"Did you? Did you want me?\"His words came out thickly. \"Yes, Roza. I did want you. I still do. I wish... we could be together.\"\"Then why did you lie to me?\"We reached the clinic, and he managed to open the door while still holding me. As soon as he stepped inside, he began yelling for help. \"Why did you lie?\" I murmured again.Still holding me in his arms, he looked down at me. I could hear voices and footsteps getting closer.\"Because we can't be together.\"\"Because of the age thing, right?\" I asked. \"Because you're my mentor?\"His fingertip gently wiped away a tear that had escaped down my cheek. \"That's part of it,\" he said. \"But also... well, you and I will both be Lissa's gaurdians someday. I need to protect her at all cost. If a pack of Strogoi come, I need to throw my body between them and her.\"I know that. Of course that's what you have to do.\" The black sparkles were dancing in front of my eyes again. I was fading out.\"No. If I let myself love you, I won't throw myself in front of her. I'll throw myself in front of you.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.5526192188,
      "y": 0.7490818501,
      "quote": "\u201cPeople come, people go \u00e2\u20ac\u201c they\u00e2\u20ac\u2122ll drift in and out of your life, almost like characters in a favorite book. When you finally close the cover, the characters have told their story and you start up again with another book, complete with new characters and adventures. Then you find yourself focusing on the new ones, not the ones from the past.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.5499487519,
      "y": 0.2602363825,
      "quote": "\u201cThe nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.\u201d",
      "author": "Carl Sagan,"
  },
  {
      "x": 0.50442487,
      "y": 0.0192036852,
      "quote": "\u201cI myself have never been able to find out precisely what feminism is: I only know that people call me a feminist whenever I express sentiments that differentiate me from a doormat.\u201d",
      "author": "Rebecca West"
  },
  {
      "x": 0.3408637643,
      "y": 0.6533278227,
      "quote": "\u201cAlways go to other people's funerals, otherwise they won't come to yours.\u201d",
      "author": "Yogi Berra,"
  },
  {
      "x": 0.6243209243,
      "y": 0.572435379,
      "quote": "\u201cIt's no good pretending that any relationship has a future if your record collections disagree violently or if your favorite films wouldn't even speak to each other if they met at a party.\u201d",
      "author": "Nick Hornby"
  },
  {
      "x": 0.3073585629,
      "y": 0.36431849,
      "quote": "\u201cWe are addicted to our thoughts. We cannot change anything if we cannot change our thinking.\u201d",
      "author": "Santosh Kalwar,"
  },
  {
      "x": 0.5575869083,
      "y": 0.9441766739,
      "quote": "\u201cHappiness can be found, even in the darkest of times, if one only remembers to turn on the light.\u201d",
      "author": "J.K.Rowling,"
  },
  {
      "x": 0.2909818292,
      "y": 0.4201332033,
      "quote": "\u201cI read once that the ancient Egyptians had fifty words for sand & the Eskimos had a hundred words for snow. I wish I had a thousand words for love, but all that comes to mind is the way you move against me while you sleep & there are no words for that.\u201d",
      "author": "Brian Andreas,"
  },
  {
      "x": 0.3220040798,
      "y": 0.833558917,
      "quote": "\u201cPretty women wonder where my secret lies.I'm not cute or built to suit a fashion model's sizeBut when I start to tell them,They think I'm telling lies.I say,It's in the reach of my armsThe span of my hips,The stride of my step,The curl of my lips.I'm a womanPhenomenally.Phenomenal woman,That's me.\u201d",
      "author": "Maya Angelou,"
  },
  {
      "x": 0.7726652026,
      "y": 0.4711481035,
      "quote": "\u201cYou know how they say you only hurt the ones you love? Well, it works both ways.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.4725390673,
      "y": 0.3756546676,
      "quote": "\u201cEven in half demon hunter clothes, Clary thought, he looked like the kind of boy who'd come over your house to pick you up for a date and be polite to your parents and nice to your pets.Jace on the other hand, looked like the kind of boy who'd come over your house and burn it down just for kicks.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5343516469,
      "y": 0.9091792107,
      "quote": "\u201cIt's not always necessary to be strong, but to feel strong.\u201d",
      "author": "Jon Krakauer,"
  },
  {
      "x": 0.5580750704,
      "y": 0.6061719656,
      "quote": "\u201cWhat do you want?\"\"Just coffee. Black - like my soul.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4967561364,
      "y": 0.5270789862,
      "quote": "\u201cIf we couldn't laugh we would all go insane.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.3087958694,
      "y": 0.7728458643,
      "quote": "\u201cSometimes you have to lose all you have to find out who you truly are.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.2906447053,
      "y": 0.8994227648,
      "quote": "\u201cI cannot go to school today\"Said little Peggy Ann McKay.\"I have the measles and the mumps,A gash, a rash and purple bumps.My mouth is wet, my throat is dry.I'm going blind in my right eye.My tonsils are as big as rocks,I've counted sixteen chicken pox.And there's one more - that's seventeen,And don't you think my face looks green?My leg is cut, my eyes are blue,It might be the instamatic flu.I cough and sneeze and gasp and choke,I'm sure that my left leg is broke.My hip hurts when I move my chin,My belly button's caving in.My back is wrenched, my ankle's sprained,My 'pendix pains each time it rains.My toes are cold, my toes are numb,I have a sliver in my thumb.My neck is stiff, my voice is weak,I hardly whisper when I speak.My tongue is filling up my mouth,I think my hair is falling out.My elbow's bent, my spine ain't straight,My temperature is one-o-eight.My brain is shrunk, I cannot hear,There's a hole inside my ear.I have a hangnail, and my heart is ...What? What's that? What's that you say?You say today is .............. Saturday?G'bye, I'm going out to play!\u201d",
      "author": "Shel Silverstein"
  },
  {
      "x": 0.4670194387,
      "y": 0.2973352075,
      "quote": "\u201cThe trouble is not that I am single and likely to stay single, but that I am lonely and likely to stay lonely.\u201d",
      "author": "Charlotte Bront\u00c3\u00ab"
  },
  {
      "x": 0.35338521,
      "y": 0.6631644964,
      "quote": "\u201cWe are the music makers, and we are the dreamers of dreams.\u201d",
      "author": "Arthur William Edgar O'Shaughnessy,"
  },
  {
      "x": 0.7228124738,
      "y": 0.2416714728,
      "quote": "\u201cI like too many things and get all confused and hung-up running from one falling star to another till i drop. This is the night, what it does to you. I had nothing to offer anybody except my own confusion.\u201d",
      "author": "Jack Kerouac"
  },
  {
      "x": 0.5673158169,
      "y": 0.2753385007,
      "quote": "\u201cIs it possible for home to be a person and not a place?\u201d",
      "author": "Stephanie Perkins,"
  },
  {
      "x": 0.4112631679,
      "y": 0.6437767744,
      "quote": "\u201cDon't let the bastards grind you down.\u201d",
      "author": "Margaret Atwood,"
  },
  {
      "x": 0.5141401887,
      "y": 0.5018491745,
      "quote": "\u201cLost love is still love. It takes a different form, that's all. You can't see their smile or bring them food or tousle their hair or move them around a dance floor. But when those senses weaken another heightens. Memory. Memory becomes your partner. You nurture it. You hold it. You dance with it.\u201d",
      "author": "Mitch Albom"
  },
  {
      "x": 0.1571190059,
      "y": 0.4128917158,
      "quote": "\u201cA word to the wise ain't necessary, it's the stupid ones who need advice.\u201d",
      "author": "Bill Cosby"
  },
  {
      "x": 0.4208616018,
      "y": 0.8788510561,
      "quote": "\u201cThe trouble is if you don\u00e2\u20ac\u2122t spend your life yourself, other people spend it for you.\u201d",
      "author": "Peter Shaffer,"
  },
  {
      "x": 0.2107360959,
      "y": 0.7896184921,
      "quote": "\u201cTime was passing like a hand waving from a train I wanted to be on. I hope you never have to think about anything as much as I think about you.\u201d",
      "author": "jonathan safran foer"
  },
  {
      "x": 0.6464178562,
      "y": 0.3583221734,
      "quote": "\u201cI travel not to go anywhere, but to go. I travel for travel's sake. The great affair is to move.\u201d",
      "author": "Robert Louis Stevenson,"
  },
  {
      "x": 0.6145572066,
      "y": 0.5591388941,
      "quote": "\u201cI don't think of all the misery, but of the beauty that still remains.\u201d",
      "author": "Anne Frank,"
  },
  {
      "x": 0.6680532694,
      "y": 0.4101022184,
      "quote": "\u201cI like flaws. I think they make things interesting.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.4627677798,
      "y": 0.4217716753,
      "quote": "\u201cChildren begin by loving their parents; as they grow older they judge them; sometimes they forgive them.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.3092232943,
      "y": 0.6573610306,
      "quote": "\u201cIf you don't know history, then you don't know anything. You are a leaf that doesn't know it is part of a tree. \u201d",
      "author": "Michael Crichton"
  },
  {
      "x": 0.4328564405,
      "y": 0.6301628351,
      "quote": "\u201cThere must be those among whom we can sit down and weep and still be counted as warriors.\u201d",
      "author": "Adrienne Rich"
  },
  {
      "x": 0.5013675094,
      "y": 0.7126917839,
      "quote": "\u201cA wonderful fact to reflect upon, that every human creature is constituted to be that profound secret and mystery to every other.\u201d",
      "author": "Charles Dickens,"
  },
  {
      "x": 0.2790528536,
      "y": 0.8160880804,
      "quote": "\u201cIt is good to have an end to journey toward; but it is the journey that matters, in the end.\u201d",
      "author": "Ursula K. Le Guin,"
  },
  {
      "x": 0.5310521722,
      "y": 0.1685854197,
      "quote": "\u201cI must have loved you a lot.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.3118665814,
      "y": 0.5820388794,
      "quote": "\u201cOnce upon a midnight dreary, while I pondered, weak and weary,Over many a quaint and curious volume of forgotten lore,While I nodded, nearly napping, suddenly there came a tapping,As of some one gently rapping, rapping at my chamber door.Tis some visitor,\" I muttered, \"tapping at my chamber door \u00e2\u20ac\u201d Only this, and nothing more.\"Ah, distinctly I remember it was in the bleak December,And each separate dying ember wrought its ghost upon the floor.Eagerly I wished the morrow; \u00e2\u20ac\u201d vainly I had sought to borrowFrom my books surcease of sorrow \u00e2\u20ac\u201d sorrow for the lost Lenore \u00e2\u20ac\u201dFor the rare and radiant maiden whom the angels name Lenore \u00e2\u20ac\u201d Nameless here for evermore.And the silken sad uncertain rustling of each purple curtainThrilled me \u00e2\u20ac\u201d filled me with fantastic terrors never felt before;So that now, to still the beating of my heart, I stood repeating,Tis some visitor entreating entrance at my chamber door \u00e2\u20ac\u201dSome late visitor entreating entrance at my chamber door; \u00e2\u20ac\u201d This it is, and nothing more.\"Presently my soul grew stronger; hesitating then no longer,Sir,\" said I, \"or Madam, truly your forgiveness I implore;But the fact is I was napping, and so gently you came rapping,And so faintly you came tapping, tapping at my chamber door,That I scarce was sure I heard you\"\u00e2\u20ac\u201d here I opened wide the door; \u00e2\u20ac\u201d Darkness there, and nothing more.Deep into that darkness peering, long I stood there wondering, fearing,Doubting, dreaming dreams no mortals ever dared to dream before;But the silence was unbroken, and the stillness gave no token,And the only word there spoken was the whispered word, \"Lenore?\"This I whispered, and an echo murmured back the word, \"Lenore!\" \u00e2\u20ac\u201d Merely this, and nothing more.Back into the chamber turning, all my soul within me burning,Soon again I heard a tapping somewhat louder than before.Surely,\" said I, \"surely that is something at my window lattice:Let me see, then, what thereat is, and this mystery explore \u00e2\u20ac\u201dLet my heart be still a moment and this mystery explore; \u00e2\u20ac\u201d 'Tis the wind and nothing more.\"Open here I flung the shutter, when, with many a flirt and flutter,In there stepped a stately raven of the saintly days of yore;Not the least obeisance made he; not a minute stopped or stayed he;But, with mien of lord or lady, perched above my chamber door \u00e2\u20ac\u201dPerched upon a bust of Pallas just above my chamber door \u00e2\u20ac\u201d Perched, and sat, and nothing more.Then this ebony bird beguiling my sad fancy into smiling,By the grave and stern decorum of the countenance it wore.Though thy crest be shorn and shaven, thou,\" I said, \"art sure no craven,Ghastly grim and ancient raven wandering from the Nightly shore \u00e2\u20ac\u201dTell me what thy lordly name is on the Night's Plutonian shore!\" Quoth the Raven, \"Nevermore.\"Much I marveled this ungainly fowl to hear discourse so plainly,Though its answer little meaning\u00e2\u20ac\u201d little relevancy bore;For we cannot help agreeing that no living human beingEver yet was blest with seeing bird above his chamber door \u00e2\u20ac\u201dBird or beast upon the sculptured bust above his chamber door, With such name as \"Nevermore.\u201d",
      "author": "Edgar Allan Poe,"
  },
  {
      "x": 0.3945665359,
      "y": 0.1402474791,
      "quote": "\u201cYou must write every single day of your life... You must lurk in libraries and climb the stacks like ladders to sniff books like perfumes and wear books like hats upon your crazy heads... may you be in love every day for the next 20,000 days. And out of that love, remake a world.\u201d",
      "author": "Ray Bradbury"
  },
  {
      "x": 0.7566284537,
      "y": 0.8277471066,
      "quote": "\u201cIt's not the size of the dog in the fight, it's the size of the fight in the dog.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.4167433381,
      "y": 0.3781538606,
      "quote": "\u201cWhen you are content to be simply yourself and don't compare or compete, everyone will respect you.\u201d",
      "author": "Lao Tzu,"
  },
  {
      "x": 0.1544562876,
      "y": 0.5704933405,
      "quote": "\u201cOne wordFrees us of all the weight and pain of life:That word is love.\u201d",
      "author": "Sophocles"
  },
  {
      "x": 0.9548216462,
      "y": 0.5557832718,
      "quote": "\u201cThinking something does not make it true. Wanting something does not make it real.\u201d",
      "author": "Michelle Hodkin,"
  },
  {
      "x": 0.4888715744,
      "y": 0.2213865221,
      "quote": "\u201cYou know, Hobbes, some days even my lucky rocket ship underpants don't help.\u201d",
      "author": "Bill Watterson"
  },
  {
      "x": 0.3766100407,
      "y": 0.7680544853,
      "quote": "\u201cWe're staying together,\" he promised. \"You're not getting away from me. Never again.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.6884867549,
      "y": 0.7078356743,
      "quote": "\u201cTrue love is usually the most inconvenient kind.\u201d",
      "author": "Kiera Cass,"
  },
  {
      "x": 0.3752456903,
      "y": 0.3558109701,
      "quote": "\u201cWhen I was your age, television was called books.\u201d",
      "author": "William Goldman,"
  },
  {
      "x": 0.6199387312,
      "y": 0.64225173,
      "quote": "\u201cThe greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.822070539,
      "y": 0.9311878681,
      "quote": "\u201cFrom childhood's hour I have not been. As others were, I have not seen. As others saw, I could not awaken. My heart to joy at the same tone. And all I loved, I loved alone.\u201d",
      "author": "Edgar Allan Poe"
  },
  {
      "x": 0.8557693362,
      "y": 0.646083951,
      "quote": "\u201cThere are two means of refuge from the misery of life \u00e2\u20ac\u201d music and cats.\u201d",
      "author": "Albert Schweitzer"
  },
  {
      "x": 0.3940102458,
      "y": 0.453139931,
      "quote": "\u201cIt gives me strength to have somebody to fight for; I can never fight for myself, but, for others, I can kill.\u201d",
      "author": "Emilie Autumn,"
  },
  {
      "x": 0.5998373628,
      "y": 0.3133827448,
      "quote": "\u201cWhen one tugs at a single thing in nature, he finds it attached to the rest of the world.\u201d",
      "author": "John Muir"
  },
  {
      "x": 0.796400249,
      "y": 0.6573439837,
      "quote": "\u201cGinny!\" said Mr. Weasley, flabbergasted. \"Haven't I taught you anything? What have I always told you? Never trust anything that can think for itself if you can't see where it keeps its brain?\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5793685317,
      "y": 0.5050297976,
      "quote": "\u201cThe love of learning, the sequestered nooks,And all the sweet serenity of books\u201d",
      "author": "Henry Wadsworth Longfellow"
  },
  {
      "x": 0.9618659616,
      "y": 0.3190315962,
      "quote": "\u201cI am always saying \"Glad to've met you\" to somebody I'm not at all glad I met. If you want to stay alive, you have to say that stuff, though.\u201d",
      "author": "J.D. Salinger,"
  },
  {
      "x": 0.4155272841,
      "y": 0.2155240774,
      "quote": "\u201cChildren have never been very good at listening to their elders, but they have never failed to imitate them.\u201d",
      "author": "James Baldwin"
  },
  {
      "x": 0.8165063262,
      "y": 0.4227348268,
      "quote": "\u201c[D]on't ever apologise to an author for buying something in paperback, or taking it out from a library (that's what they're there for. Use your library). Don't apologise to this author for buying books second hand, or getting them from bookcrossing or borrowing a friend's copy. What's important to me is that people read the books and enjoy them, and that, at some point in there, the book was bought by someone. And that people who like things, tell other people. The most important thing is that people read...\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.6443564892,
      "y": 0.6896398067,
      "quote": "\u201cThe brick walls are there for a reason. The brick walls are not there to keep us out. The brick walls are there to give us a chance to show how badly we want something. Because the brick walls are there to stop the people who don\u00e2\u20ac\u2122t want it badly enough. They\u00e2\u20ac\u2122re there to stop the other people.\u201d",
      "author": "Randy Pausch,"
  },
  {
      "x": 0.2047771811,
      "y": 0.634845376,
      "quote": "\u201cYou can make anything by writing.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.7247356772,
      "y": 0.7164013386,
      "quote": "\u201cThere are only the pursued, the pursuing, the busy and the tired.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.5321325064,
      "y": 0.3156824708,
      "quote": "\u201cYou are not entitled to your opinion. You are entitled to your informed opinion. No one is entitled to be ignorant.\u201d",
      "author": "Harlan Ellison"
  },
  {
      "x": 0.1352672577,
      "y": 0.5621644258,
      "quote": "\u201cAnd all the books you've read have been read by other people. And all the songs you've loved have been heard by other people. And that girl that's pretty to you is pretty to other people. and that if you looked at these facts when you were happy, you would feel great because you are describing 'unity.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.6515573859,
      "y": 0.3226875663,
      "quote": "\u201cTrust your heart if the seas catch fire, live by love though the stars walk backward.\u201d",
      "author": "E.E. Cummings"
  },
  {
      "x": 0.6723756194,
      "y": 0.863725543,
      "quote": "\u201cFriendship- my definition- is built on two things. Respect and trust. Both elements have to be there. And it has to be mutual. You can have respect for someone, but if you don't have trust, the friendship will crumble.\u201d",
      "author": "Stieg Larsson,"
  },
  {
      "x": 0.8256549239,
      "y": 0.4586848915,
      "quote": "\u201cWhen everything goes to hell, the people who stand by you without flinching -- they are your family. \u201d",
      "author": "Jim Butcher"
  },
  {
      "x": 0.5582288504,
      "y": 0.7482385635,
      "quote": "\u201cBlack holes are where God divided by zero.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.9289306998,
      "y": 0.4207893312,
      "quote": "\u201cLife is not a matter of holding good cards, but of playing a poor hand well.\u201d",
      "author": "Robert Louis Stevenson"
  },
  {
      "x": 0.5155262947,
      "y": 0.7285773754,
      "quote": "\u201cJace shook his blond head in exasperation. \"You had to make a crazy jail friend, didn't you? You couldn't just count ceiling tiles or tame a pet mouse like normal prisoners do?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.9769503474,
      "y": 0.3120900691,
      "quote": "\u201cIf I\u00e2\u20ac\u2122m honest I have to tell you I still read fairy-tales and I like them best of all.\u201d",
      "author": "Audrey Hepburn"
  },
  {
      "x": 0.4182788134,
      "y": 0.6792049408,
      "quote": "\u201cIf you have a sister and she dies, do you stop saying you have one? Or are you always a sister, even when the other half of the equation is gone?\u201d",
      "author": "Jodi Picoult,"
  },
  {
      "x": 0.1779162288,
      "y": 0.4167043269,
      "quote": "\u201cReading is the sole means by which we slip, involuntarily, often helplessly, into another's skin, another's voice, another's soul.\u201d",
      "author": "Joyce Carol Oates"
  },
  {
      "x": 0.837718904,
      "y": 0.9242531061,
      "quote": "\u201cTherefore, dear Sir, love your solitude and try to sing out with the pain it causes you. For those who are near you are far away... and this shows that the space around you is beginning to grow vast.... be happy about your growth, in which of course you can't take anyone with you, and be gentle with those who stay behind; be confident and calm in front of them and don't torment them with your doubts and don't frighten them with your faith or joy, which they wouldn't be able to comprehend. Seek out some simple and true feeling of what you have in common with them, which doesn't necessarily have to alter when you yourself change again and again; when you see them, love life in a form that is not your own and be indulgent toward those who are growing old, who are afraid of the aloneness that you trust.... and don't expect any understanding; but believe in a love that is being stored up for you like an inheritance, and have faith that in this love there is a strength and a blessing so large that you can travel as far as you wish without having to step outside it.\u201d",
      "author": "Rainer Maria Rilke,"
  },
  {
      "x": 0.9750959277,
      "y": 0.3273404837,
      "quote": "\u201cBeing a writer is a very peculiar sort of a job: it's always you versus a blank sheet of paper (or a blank screen) and quite often the blank piece of paper wins.\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.3937100172,
      "y": 0.805364728,
      "quote": "\u201cNo matter how careful you are, there's going to be the sense you missed something, the collapsed feeling under your skin that you didn't experience it all. There's that fallen heart feeling that you rushed right through the moments where you should've been paying attention.Well, get used to that feeling. That's how your whole life will feel some day.This is all practice.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.3021975756,
      "y": 0.7119082212,
      "quote": "\u201cBehind every beautiful thing, there's some kind of pain.\u201d",
      "author": "Bob Dylan"
  },
  {
      "x": 0.9246402383,
      "y": 0.586814642,
      "quote": "\u201cWhat happened down in the dungeons between you and Professor Quirrell is a complete secret, so, naturally the whole school knows.\u201d",
      "author": "J. K. Rowling,"
  },
  {
      "x": 0.4774214625,
      "y": 0.5493153334,
      "quote": "\u201cWriting is like sex. First you do it for love, then you do it for your friends, and then you do it for money.\u201d",
      "author": "Virginia Woolf"
  },
  {
      "x": 0.0347597599,
      "y": 0.5385475159,
      "quote": "\u201cMy name is Celaena Sardothien. But it makes no difference if my name's Celaena or Lillian or Bitch, because I'd still beat you, no matter what you call me.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.621383965,
      "y": 0.3875463009,
      "quote": "\u201cWhen I saw you I fell in love, and you smiled because you knew.\u201d",
      "author": "Arrigo Boito"
  },
  {
      "x": 0.7605665326,
      "y": 0.2854709625,
      "quote": "\u201cBooks have to be heavy because the whole world's inside them.\u201d",
      "author": "Cornelia Funke,"
  },
  {
      "x": 0.7052416205,
      "y": 0.4561426342,
      "quote": "\u201cplease believe that things are good with me, and even when they're not, they will be soon enough. And i will always believe the same about you.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.4651537538,
      "y": 0.1708336473,
      "quote": "\u201cA woman's heart should be so hidden in God that a man has to seek Him just to find her.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.4307740331,
      "y": 0.541228652,
      "quote": "\u201cSome people have a way with words, and other people...oh, uh, not have way.\u201d",
      "author": "Steve Martin"
  },
  {
      "x": 0.2287904024,
      "y": 0.2061377168,
      "quote": "\u201cIt ain't what they call you, it's what you answer to.\u201d",
      "author": "W.C. Fields"
  },
  {
      "x": 0.5272895098,
      "y": 0.1213977784,
      "quote": "\u201cIt's hard to enjoy practical jokes when your whole life feels like one.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.3294811249,
      "y": 0.7159570456,
      "quote": "\u201cI've lived through some terrible things in my life, some of which actually happened.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.2691286206,
      "y": 0.6971458197,
      "quote": "\u201cThe real voyage of discovery consists not in seeking new landscapes, but in having new eyes.\u201d",
      "author": "Marcel Proust"
  },
  {
      "x": 0.3455299139,
      "y": 0.6179499626,
      "quote": "\u201cThe best way to find yourself is to lose yourself in the service of others.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.1631507277,
      "y": 0.6768573523,
      "quote": "\u201cStop comparing yourself to other people, just choose to be happy and live your own life.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.08899194,
      "y": 0.5107293129,
      "quote": "\u201cI fell in love with her when we were together, then fell deeper in love with her in the years we were apart.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.2344495058,
      "y": 0.3144003451,
      "quote": "\u201cThe only thing better than imagining Dimitri carrying me in his arms was imagining him shirtless while carrying me in his arms.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.4354080558,
      "y": 0.7494436502,
      "quote": "\u201cYou're a painter. You're a baker. You like to sleep with the windows open. You never take sugar in your tea. And you always double-knot your shoelaces.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.6107478738,
      "y": 0.506862402,
      "quote": "\u201cThere is a crack in everything.That's how the light gets in.\u201d",
      "author": "Leonard Cohen,"
  },
  {
      "x": 0.0688878298,
      "y": 0.4909056723,
      "quote": "\u201cStories can conquer fear, you know. They can make the heart bigger.\u201d",
      "author": "Ben Okri"
  },
  {
      "x": 0.3017565012,
      "y": 0.4039247632,
      "quote": "\u201cForbidden to remember, terrified to forget; it was a hard line to walk.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.1256251633,
      "y": 0.4923759401,
      "quote": "\u201cI will love you always. When this red hair is white, I will still love you. When the smooth softness of youth is replaced by the delicate softness of age, I will still want to touch your skin. When your face is full of the lines of every smile you have ever smiled, of every surprise I have seen flash through your eyes, when every tear you have ever cried has left its mark upon your face,I will treasure you all the more, because I was there to see it all. I will share your life with you, Meredith, and I will love you until the last breath leaves your body or mine.\u201d",
      "author": "Laurell K. Hamilton,"
  },
  {
      "x": 0.47549963,
      "y": 0.3202402592,
      "quote": "\u201cAs a woman I have no country. As a woman I want no country. As a woman, my country is the whole world.\u201d",
      "author": "Virginia Woolf"
  },
  {
      "x": 0.0764412284,
      "y": 0.511952281,
      "quote": "\u201cThe emotion that can break your heart is sometimes the very one that heals it...\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.4182203412,
      "y": 0.6681444645,
      "quote": "\u201cAnyone can hide. Facing up to things, working through them, that's what makes you strong.\u201d",
      "author": "Sarah Dessen"
  },
  {
      "x": 0.5340929627,
      "y": 0.3999034464,
      "quote": "\u201cDon't give in to your fears. If you do, you won't be able to talk to your heart.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.395242393,
      "y": 0.6756081581,
      "quote": "\u201cNever be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life, but define yourself.\u201d",
      "author": "Harvey Fierstein"
  },
  {
      "x": 0.4815707803,
      "y": 0.6079404354,
      "quote": "\u201cYou are not rich until you have a rich heart.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.2228742838,
      "y": 0.3585318923,
      "quote": "\u201cI don't like people who have never fallen or stumbled. Their virtue is lifeless and it isn't of much value. Life hasn't revealed its beauty to them. \u201d",
      "author": "Boris Pasternak"
  },
  {
      "x": 0.7615745664,
      "y": 0.4880968034,
      "quote": "\u201cYou never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.2757282853,
      "y": 0.3453617096,
      "quote": "\u201cMemories, even your most precious ones, fade surprisingly quickly. But I don\u00e2\u20ac\u2122t go along with that. The memories I value most, I don\u00e2\u20ac\u2122t ever see them fading.\u201d",
      "author": "Kazuo Ishiguro,"
  },
  {
      "x": 0.1704902947,
      "y": 0.1965163648,
      "quote": "\u201c1. Be Impeccable With Your WordSpeak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love. 2. Don't Take Anything PersonallyNothing others do is because of you. What others say and do is a projection of their own reality, their own dream. When you are immune to the opinions and actions of others, you won't be the victim of needless suffering. 3. Don't Make AssumptionsFind the courage to ask questions and to express what you really want. Communicate with others as clearly as you can to avoid misunderstandings, sadness and drama. With just this one agreement, you can completely transform your life. 4. Always Do Your BestYour best is going to change from moment to moment; it will be different when you are healthy as opposed to sick. Under any circumstance, simply do your best, and you will avoid self-judgment, self-abuse and regret.\u201d",
      "author": "Don Miguel Ruiz"
  },
  {
      "x": 0.5600790977,
      "y": 0.5686683655,
      "quote": "\u201cWhen we don't know who to hate, we hate ourselves.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.5737148523,
      "y": 0.1874100864,
      "quote": "\u201cWhen the first baby laughed for the first time, its laugh broke into a thousand pieces, and they all went skipping about, and that was the beginning of fairies.\u201d",
      "author": "J.M. Barrie,"
  },
  {
      "x": 0.8169654012,
      "y": 0.5426179171,
      "quote": "\u201cThe more one judges, the less one loves.\u201d",
      "author": "Honor\u00c3\u00a9 de Balzac,"
  },
  {
      "x": 0.6538539529,
      "y": 0.1044523418,
      "quote": "\u201cBetter a cruel truth than a comfortable delusion.\u201d",
      "author": "Edward Abbey"
  },
  {
      "x": 0.3400524855,
      "y": 0.2082830369,
      "quote": "\u201cI must be a mermaid, Rango. I have no fear of depths and a great fear of shallow living.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.3352982998,
      "y": 0.2629247606,
      "quote": "\u201cSelfishness is not living as one wishes to live, it is asking others to live as one wishes to live.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4828221798,
      "y": 0.6336814165,
      "quote": "\u201cSometimes the Bible in the hand of one man is worse than a whisky bottle in the hand of (another)... There are just some kind of men who - who're so busy worrying about the next world they've never learned to live in this one, and you can look down the street and see the results.\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.5035549402,
      "y": 0.8675365448,
      "quote": "\u201cDo not let the memories of your past limit the potential of your future. There are no limits to what you can achieve on your journey through life, except in your mind.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.6773648858,
      "y": 0.4672995508,
      "quote": "\u201cA smile is a curve that sets everything straight.\u201d",
      "author": "Phyllis Diller"
  },
  {
      "x": 0.3548417687,
      "y": 0.6372125149,
      "quote": "\u201cRemember me and smile, for it's better to forget than to remember me and cry.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.9233936667,
      "y": 0.4900196493,
      "quote": "\u201cLet the first act of every morning be to make the following resolve for the day:- I shall not fear anyone on Earth. - I shall fear only God. - I shall not bear ill will toward anyone. - I shall not submit to injustice from anyone. - I shall conquer untruth by truth. And in resisting untruth, I shall put up with all suffering.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.5975948572,
      "y": 0.7518025637,
      "quote": "\u201cDid you see that dress?\u00e2\u20ac\ufffd \"I saw the dress.\u00e2\u20ac\ufffd \"Did you like it?\u00e2\u20ac\ufffd He didn't answer. I took that as a yes. \"Am I going to endanger my reputation if I wear it to the dance?\u00e2\u20ac\ufffd When he spoke, I could barely hear him. \"You'll endanger the school.\u00e2\u20ac\ufffd I smiled and fell asleep.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.4366275668,
      "y": 0.4767319858,
      "quote": "\u201cOne person's craziness is another person's reality.\u201d",
      "author": "Tim Burton"
  },
  {
      "x": 0.0847395957,
      "y": 0.623773098,
      "quote": "\u201cYou are not special. You're not a beautiful and unique snowflake. You're the same decaying organic matter as everything else. We're all part of the same compost heap. We're all singing, all dancing crap of the world.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.593423605,
      "y": 0.2677648962,
      "quote": "\u201cI kept always two books in my pocket, one to read, one to write in.\u201d",
      "author": "Robert Louis Stevenson,"
  },
  {
      "x": 0.4232965708,
      "y": 0.7473065853,
      "quote": "\u201cThat's the thing about depression: A human being can survive almost anything, as long as she sees the end in sight. But depression is so insidious, and it compounds daily, that it's impossible to ever see the end.\u201d",
      "author": "Elizabeth Wurtzel,"
  },
  {
      "x": 0.0826509595,
      "y": 0.57619977,
      "quote": "\u201cIf I had my life to live over again, I would have made a rule to read some poetry and listen to some music at least once every week.\u201d",
      "author": "Charles Darwin,"
  },
  {
      "x": 0.4633011818,
      "y": 0.3952247202,
      "quote": "\u201cMay it be a light to you in dark places, when all other lights go out.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.2150691152,
      "y": 0.2725989223,
      "quote": "\u201cThey always say time changes things, but you actually have to change them yourself.\u201d",
      "author": "Andy Warhol,"
  },
  {
      "x": 0.6222521663,
      "y": 0.3753664792,
      "quote": "\u201cI know we're fucked up, alright? I'm impulsive, and hot tempered, and you get under my skin like no one else. You act like you hate me one minute, and then need me the next. I never get anything right, and I don't deserve you...but I fucking love you, Abby. I love you more than I loved anyone or anything ever. When you're around, I don't need booze, or money, or the fighting, or the one-night stands...\u201d",
      "author": "Jamie McGuire,"
  },
  {
      "x": 0.7391545177,
      "y": 0.653354764,
      "quote": "\u201cWhat she had realized was that love was that moment when your heart was about to burst.\u201d",
      "author": "Stieg Larsson,"
  },
  {
      "x": 0.3833007812,
      "y": 0.4241390526,
      "quote": "\u201cAnxiety is the dizziness of freedom.\u201d",
      "author": "S\u00c3\u00b8ren Kierkegaard ,"
  },
  {
      "x": 0.1839573979,
      "y": 0.5015848875,
      "quote": "\u201cThings need not have happened to be true. Tales and dreams are the shadow-truths that will endure when mere facts are dust and ashes, and forgot.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.3170160055,
      "y": 0.4135213792,
      "quote": "\u201cTo choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation.\u201d",
      "author": "Yann Martel,"
  },
  {
      "x": 0.5448249578,
      "y": 0.5985102654,
      "quote": "\u201cIf you have good friends, no matter how much life is sucking , they can make you laugh.\u201d",
      "author": "P.C. Cast  Kristin Cast"
  },
  {
      "x": 0.9192282557,
      "y": 0.5079766512,
      "quote": "\u201cIn the endthese things matter most:How well did you love?How fully did you live?How deeply did you let go?\u201d",
      "author": "Jack Kornfield,"
  },
  {
      "x": 0.7467687726,
      "y": 0.3785165548,
      "quote": "\u201cThe ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.\u201d",
      "author": "Martin Luther King Jr."
  },
  {
      "x": 0.3267587423,
      "y": 0.6205331087,
      "quote": "\u201cDo not think that love in order to be genuine has to be extraordinary. What we need is to love without getting tired. Be faithful in small things because it is in them that your strength lies.\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.4693168998,
      "y": 0.4775824249,
      "quote": "\u201cI always arrive late at the office, but I make up for it by leaving early.\u201d",
      "author": "Charles Lamb"
  },
  {
      "x": 0.6932190657,
      "y": 0.6852608919,
      "quote": "\u201cIt doesn't matter. I have books, new books, and I can bear anything as long as there are books.\u201d",
      "author": "Jo Walton,"
  },
  {
      "x": 0.4649240971,
      "y": 0.4937559664,
      "quote": "\u201cIf you're too open-minded; your brains will fall out.\u201d",
      "author": "Lawrence Ferlinghetti"
  },
  {
      "x": 0.2657958865,
      "y": 0.3473034501,
      "quote": "\u201cKind words can be short and easy to speak, but their echoes are truly endless.\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.5157191753,
      "y": 0.4833015501,
      "quote": "\u201cWhy do people say \"grow some balls\"? Balls are weak and sensitive. If you wanna be tough, grow a vagina. Those things can take a pounding.\u201d",
      "author": "Sheng Wang"
  },
  {
      "x": 0.4686659575,
      "y": 0.4381075799,
      "quote": "\u201cI hope you're pleased with yourselves. We could all have been killed - or worse, expelled. Now if you don't mind, I'm going to bed.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5737604499,
      "y": 0.7219586372,
      "quote": "\u201cWhatever you are physically...male or female, strong or weak, ill or healthy--all those things matter less than what your heart contains. If you have the soul of a warrior, you are a warrior. All those other things, they are the glass that contains the lamp, but you are the light inside.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4052577019,
      "y": 0.4119796455,
      "quote": "\u201cMy rapier wit hides my inner pain.\u201d",
      "author": "Cassandra Clare"
  },
  {
      "x": 0.4000207782,
      "y": 0.294089824,
      "quote": "\u201cI say let the world go to hell, but I should always have my tea.\u201d",
      "author": "Fyodor Dostoevsky,"
  },
  {
      "x": 0.3734496832,
      "y": 0.4950785339,
      "quote": "\u201cBetter to die fighting for freedom then be a prisoner all the days of your life.\u201d",
      "author": "Bob Marley"
  },
  {
      "x": 0.452758193,
      "y": 0.6523381472,
      "quote": "\u201cNo sight so sad as that of a naughty child,\" he began, \"especially a naughty little girl. Do you know where the wicked go after death?\"\"They go to hell,\" was my ready and orthodox answer.\"And what is hell? Can you tell me that?\"\"A pit full of fire.\"\"And should you like to fall into that pit, and to be burning there for ever?\"\"No, sir.\"\"What must you do to avoid it?\"I deliberated a moment: my answer, when it did come was objectionable: \"I must keep in good health and not die.\u201d",
      "author": "Charlotte Bront\u00c3\u00ab,"
  },
  {
      "x": 0.5836113691,
      "y": 0.3001285493,
      "quote": "\u201cI'd rather die my way than live yours.\u201d",
      "author": "Lauren Oliver,"
  },
  {
      "x": 0.3793833256,
      "y": 0.3753910959,
      "quote": "\u201cTry to be a rainbow in someone's cloud.\u201d",
      "author": "Maya Angelou,"
  },
  {
      "x": 0.5713141561,
      "y": 0.6736272573,
      "quote": "\u201cWhere words leave off, music begins.\u201d",
      "author": "Heinrich Heine"
  },
  {
      "x": 0.3878555298,
      "y": 0.7995249033,
      "quote": "\u201cMorning is wonderful. Its only drawback is that it comes at such an inconvenient time of day.\u201d",
      "author": "Glen Cook,"
  },
  {
      "x": 0.7254254222,
      "y": 0.3511039317,
      "quote": "\u201cLife is too short to waste any amount of time on wondering what other people think about you. In the first place, if they had better things going on in their lives, they wouldn't have the time to sit around and talk about you. What's important to me is not others' opinions of me, but what's important to me is my opinion of myself.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.4644232392,
      "y": 0.6454336643,
      "quote": "\u201cI could die for you. But I couldn't, and wouldn't, live for you.\u201d",
      "author": "Ayn Rand,"
  },
  {
      "x": 0.9612253308,
      "y": 0.4989783466,
      "quote": "\u201cI am lonely, yet not everybody will do. I don't know why, some people fill the gaps and others emphasize my loneliness. In reality those who satisfy me are those who simply allow me to live with my ''idea of them.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.0969332755,
      "y": 0.5706671476,
      "quote": "\u201cHeadline?\" he asked.\"'Swing Set Needs Home,'\" I said.\"'Desperately Lonely Swing Set Needs Loving Home,'\" he said.\"'Lonely, Vaguely Pedophilic Swing Set Seeks the Butts of Children,'\" I said.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.8199663758,
      "y": 0.3322863579,
      "quote": "\u201cThe only thing necessary for the triumph of evil is for good men to do nothing.\u201d",
      "author": "Edmund Burke"
  },
  {
      "x": 0.2209891081,
      "y": 0.1907103062,
      "quote": "\u201cI hope that in this year to come, you make mistakes.Because if you are making mistakes, then you are making new things, trying new things, learning, living, pushing yourself, changing yourself, changing your world. You're doing things you've never done before, and more importantly, you're Doing Something.So that's my wish for you, and all of us, and my wish for myself. Make New Mistakes. Make glorious, amazing mistakes. Make mistakes nobody's ever made before. Don't freeze, don't stop, don't worry that it isn't good enough, or it isn't perfect, whatever it is: art, or love, or work or family or life.Whatever it is you're scared of doing, Do it.Make your mistakes, next year and forever.\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.4734326005,
      "y": 0.4177685678,
      "quote": "\u201cIf you have enough book space, I don't want to talk to you.\u201d",
      "author": "Terry Pratchett"
  },
  {
      "x": 0.4530118108,
      "y": 0.6636778116,
      "quote": "\u201cHolding Eleanor's hand was like holding a butterfly. Or a heartbeat. Like holding something complete, and completely alive.\u201d",
      "author": "Rainbow Rowell,"
  },
  {
      "x": 0.8934951425,
      "y": 0.3793765903,
      "quote": "\u201cEducation: the path from cocky ignorance to miserable uncertainty.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.5339767337,
      "y": 0.0797356516,
      "quote": "\u201cThe truth will set you free. But not until it is finished with you.\u201d",
      "author": "David Foster Wallace,"
  },
  {
      "x": 0.3801550865,
      "y": 0.3954348862,
      "quote": "\u201cThe only real prison is fear, and the only real freedom is freedom from fear\u201d",
      "author": "Aung San Suu Kyi"
  },
  {
      "x": 0.1392157376,
      "y": 0.4182970822,
      "quote": "\u201cI hope you will have a wonderful year, that you'll dream dangerously and outrageously, that you'll make something that didn't exist before you made it, that you will be loved and that you will be liked, and that you will have people to love and to like in return. And, most importantly (because I think there should be more kindness and more wisdom in the world right now), that you will, when you need to be, be wise, and that you will always be kind.\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.2524349689,
      "y": 0.4982279241,
      "quote": "\u201cIt's the job that's never started as takes longest to finish.\u201d",
      "author": "J.R.R. Tolkien,"
  },
  {
      "x": 0.5857510567,
      "y": 0.2776176333,
      "quote": "\u201cI am not proud, but I am happy; and happiness blinds, I think, more than pride.\u201d",
      "author": "Alexandre Dumas,"
  },
  {
      "x": 0.2459218502,
      "y": 0.4653944075,
      "quote": "\u201cI don\u00e2\u20ac\u2122t trust anybody. Not anybody. And the more that I care about someone, the more sure I am they\u00e2\u20ac\u2122re going to get tired of me and take off.\u201d",
      "author": "Rainbow Rowell,"
  },
  {
      "x": 0.6252127886,
      "y": 0.6809321642,
      "quote": "\u201cI can only note that the past is beautiful because one never realises an emotion at the time. It expands later, and thus we don't have complete emotions about the present, only about the past.\u201d",
      "author": "Virginia Woolf"
  },
  {
      "x": 0.5581029654,
      "y": 0.4586636126,
      "quote": "\u201cIt takes courage to love, but pain through love is the purifying fire which those who love generously know. We all know people who are so much afraid of pain that they shut themselves up like clams in a shell and, giving out nothing, receive nothing and therefore shrink until life is a mere living death.\u201d",
      "author": "Eleanor Roosevelt"
  },
  {
      "x": 0.6786778569,
      "y": 0.2989587486,
      "quote": "\u201cLearn from the mistakes of others. You can never live long enough to make them all yourself.\u201d",
      "author": "Groucho Marx"
  },
  {
      "x": 0.353828609,
      "y": 0.4301738441,
      "quote": "\u201cGreat heroes need great sorrows and burdens, or half their greatness goes unnoticed. It is all part of the fairy tale.\u201d",
      "author": "Peter S. Beagle,"
  },
  {
      "x": 0.6496093273,
      "y": 0.441981405,
      "quote": "\u201cI have faith that God will show you the answer. But you have to understand that sometimes it takes a while to be able to recognize what God wants you to do. That's how it often is. God's voice is usually nothing more than a whisper, and you have to listen very carefully to hear it. But other times, in those rarest of moments, the answer is obvious and rings as loud as a church bell.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.3346854448,
      "y": 0.6491748095,
      "quote": "\u201cThere's nowhere you can be that isn't where you're meant to be...\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.6426942348,
      "y": 0.7281631231,
      "quote": "\u201cEverything must be made as simple as possible. But not simpler.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.0951328576,
      "y": 0.5031309128,
      "quote": "\u201cI guess that\u00e2\u20ac\u2122s just part of loving people: You have to give things up. Sometimes you even have to give them up.\u201d",
      "author": "Lauren Oliver,"
  },
  {
      "x": 0.5281218886,
      "y": 0.6968950033,
      "quote": "\u201cThey say I'm old-fashioned, and live in the past, but sometimes I think progress progresses too fast!\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.777936995,
      "y": 0.4551538527,
      "quote": "\u201cWords dazzle and deceive because they are mimed by the face. But black words on a white page are the soul laid bare.\u201d",
      "author": "Guy de Maupassant"
  },
  {
      "x": 0.6602672935,
      "y": 0.5329202414,
      "quote": "\u201cWhen God Created Mothers\" When the Good Lord was creating mothers, He was into His sixth day of \"overtime\" when the angel appeared and said. \"You're doing a lot of fiddling around on this one.\" And God said, \"Have you read the specs on this order?\" She has to be completely washable, but not plastic. Have 180 moveable parts...all replaceable. Run on black coffee and leftovers. Have a lap that disappears when she stands up. A kiss that can cure anything from a broken leg to a disappointed love affair. And six pairs of hands.\" The angel shook her head slowly and said. \"Six pairs of hands.... no way.\" It's not the hands that are causing me problems,\" God remarked, \"it's the three pairs of eyes that mothers have to have.\" That's on the standard model?\" asked the angel. God nodded. One pair that sees through closed doors when she asks, 'What are you kids doing in there?' when she already knows. Another here in the back of her head that sees what she shouldn't but what she has to know, and of course the ones here in front that can look at a child when he goofs up and say. 'I understand and I love you' without so much as uttering a word.\" God,\" said the angel touching his sleeve gently, \"Get some rest tomorrow....\" I can't,\" said God, \"I'm so close to creating something so close to myself. Already I have one who heals herself when she is sick...can feed a family of six on one pound of hamburger...and can get a nine year old to stand under a shower.\" The angel circled the model of a mother very slowly. \"It's too soft,\" she sighed. But tough!\" said God excitedly. \"You can imagine what this mother can do or endure.\" Can it think?\" Not only can it think, but it can reason and compromise,\" said the Creator. Finally, the angel bent over and ran her finger across the cheek. There's a leak,\" she pronounced. \"I told You that You were trying to put too much into this model.\" It's not a leak,\" said the Lord, \"It's a tear.\" What's it for?\" It's for joy, sadness, disappointment, pain, loneliness, and pride.\" You are a genius, \" said the angel. Somberly, God said, \"I didn't put it there.\u201d",
      "author": "Erma Bombeck,"
  },
  {
      "x": 0.1481183469,
      "y": 0.33318308,
      "quote": "\u201cSorrow is how we learn to love. Your heart isn't breaking. It hurts because it's getting larger. The larger it gets, the more love it holds.\u201d",
      "author": "Rita Mae Brown,"
  },
  {
      "x": 0.6223202944,
      "y": 0.9108442068,
      "quote": "\u201c\u00e2\u20ac\u00a8Loneliness is the human condition. Cultivate it. The way it tunnels into you allows your soul room to grow. Never expect to outgrow loneliness. Never hope to find people who will understand you, someone to fill that space. An intelligent, sensitive person is the exception, the very great exception. If you expect to find people who will understand you, you will grow murderous with disappointment. The best you'll ever do is to understand yourself, know what it is that you want, and not let the cattle stand in your way.\u201d",
      "author": "Janet Fitch,"
  },
  {
      "x": 0.514044404,
      "y": 0.7842792273,
      "quote": "\u201cThe most effective way to destroy people is to deny and obliterate their own understanding of their history.\u201d",
      "author": "George Orwell"
  },
  {
      "x": 0.3803330064,
      "y": 0.1377342045,
      "quote": "\u201cYou do have a story inside you; it lies articulate and waiting to be written \u00e2\u20ac\u201d behind your silence and your suffering.\u201d",
      "author": "Anne Rice"
  },
  {
      "x": 0.7047612071,
      "y": 0.3038893044,
      "quote": "\u201cWe sit silently and watch the world around us. This has taken a lifetime to learn. It seems only the old are able to sit next to one another and not say anything and still feel content. The young, brash and impatient, must always break the silence. It is a waste, for silence is pure. Silence is holy. It draws people together because only those who are comfortable with each other can sit without speaking. This is the great paradox.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.4730644822,
      "y": 0.6952813864,
      "quote": "\u201cTrains are great dirty smoky things,\" said Will. \"You won't like it.\" Tessa was unmoved. \"I won't know if I like it until I try it, will I?\" \"I've never swum naked in the Thames before, but I know I wouldn't like it.\" \"But think how entertaining for sightseers,\" said Tessa, and she saw Jem duck his head to hide the quick flash of his grin.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.8586605191,
      "y": 0.9377880096,
      "quote": "\u201cWhen we're incomplete, we're always searching for somebody to complete us. When, after a few years or a few months of a relationship, we find that we're still unfulfilled, we blame our partners and take up with somebody more promising. This can go on and on--series polygamy--until we admit that while a partner can add sweet dimensions to our lives, we, each of us, are responsible for our own fulfillment. Nobody else can provide it for us, and to believe otherwise is to delude ourselves dangerously and to program for eventual failure every relationship we enter.\u201d",
      "author": "Tom Robbins"
  },
  {
      "x": 0.3918294907,
      "y": 0.8740233183,
      "quote": "\u201cFreeing yourself was one thing, claiming ownership of that freed self was another.\u201d",
      "author": "Toni Morrison,"
  },
  {
      "x": 0.1332082748,
      "y": 0.3193576336,
      "quote": "\u201cBetween two evils, I always pick the one I never tried before.\u201d",
      "author": "Mae West"
  },
  {
      "x": 0.6364232898,
      "y": 0.0692842752,
      "quote": "\u201cWhen the snows fall and the white winds blow, the lone wolf dies but the pack survives.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.5828946233,
      "y": 0.4095846117,
      "quote": "\u201cAn Unbreakable Vow?\" said Ron, looking stunned. \"Nah, he can\u00e2\u20ac\u2122t have.... Are you sure?\"\"Yes I\u00e2\u20ac\u2122m sure,\" said Harry. \"Why, what does it mean?\"\"Well, you can\u00e2\u20ac\u2122t break an Unbreakable Vow...\"\"I\u00e2\u20ac\u2122d worked that much out for myself, funnily enough.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.4656128883,
      "y": 0.5802481174,
      "quote": "\u201cCuriouser and curiouser!\u201d",
      "author": "Lewis Carroll,"
  },
  {
      "x": 0.4456982017,
      "y": 0.3461459279,
      "quote": "\u201cYour silence will not protect you.\u201d",
      "author": "Audre Lorde,"
  },
  {
      "x": 0.8156476617,
      "y": 0.5867202282,
      "quote": "\u201cThe past is always tense, the future perfect.\u201d",
      "author": "Zadie Smith"
  },
  {
      "x": 0.5146710873,
      "y": 0.7169140577,
      "quote": "\u201cIt is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to than I have ever known.\u201d",
      "author": "Charles Dickens,"
  },
  {
      "x": 0.4470067024,
      "y": 0.4925027192,
      "quote": "\u201cHeaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts. I was better after I had cried, than before--more sorry, more aware of my own ingratitude, more gentle.\u201d",
      "author": "Charles Dickens,"
  },
  {
      "x": 0.1004504859,
      "y": 0.5693827868,
      "quote": "\u201cI learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.\u201d",
      "author": "Nelson Mandela"
  },
  {
      "x": 0.050558418,
      "y": 0.3649769425,
      "quote": "\u201cAtticus, he was real nice.\"\"Most people are, Scout, when you finally see them.\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.771363914,
      "y": 0.3720670938,
      "quote": "\u201cHe awoke each morning with the desire to do right, to be a good and meaningful person, to be, as simple as it sounded and as impossible as it actually was, happy. And during the course of each day his heart would descend from his chest into his stomach. By early afternoon he was overcome by the feeling that nothing was right, or nothing was right for him, and by the desire to be alone. By evening he was fulfilled: alone in the magnitude of his grief, alone in his aimless guilt, alone even in his loneliness. I am not sad, he would repeat to himself over and over, I am not sad. As if he might one day convince himself. Or fool himself. Or convince others--the only thing worse than being sad is for others to know that you are sad. I am not sad. I am not sad. Because his life had unlimited potential for happiness, insofar as it was an empty white room. He would fall asleep with his heart at the foot of his bed, like some domesticated animal that was no part of him at all. And each morning he would wake with it again in the cupboard of his rib cage, having become a little heavier, a little weaker, but still pumping. And by the midafternoon he was again overcome with the desire to be somewhere else, someone else, someone else somewhere else. I am not sad.\u201d",
      "author": "Jonathan Safran Foer,"
  },
  {
      "x": 0.2258486152,
      "y": 0.3619786799,
      "quote": "\u201cPatience, grasshopper,\" said Maia. \"Good things come to those who wait.\"\"I always thought that was 'Good things come to those who do the wave,'\" said Simon. \"No wonder I've been so confused all my life.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5080873966,
      "y": 0.6620579958,
      "quote": "\u201cThe Very first moment I beheld him, my heart was irrevocably gone.\u201d",
      "author": "Jane Austen,"
  },
  {
      "x": 0.2586440444,
      "y": 0.3909690678,
      "quote": "\u201cThe last enemy that shall be destroyed is death.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5669403672,
      "y": 0.3171331286,
      "quote": "\u201cTo err is human, to forgive, divine.\u201d",
      "author": "Alexander Pope,"
  },
  {
      "x": 0.593895793,
      "y": 0.2027350664,
      "quote": "\u201cI'd rather be hated for who I am, than loved for who I am not.\u201d",
      "author": "Kurt Cobain"
  },
  {
      "x": 0.730510056,
      "y": 0.2864251137,
      "quote": "\u201cI am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself\u201d",
      "author": "Simone de Beauvoir"
  },
  {
      "x": 0.2967981696,
      "y": 0.6005663872,
      "quote": "\u201cNo one ever told me that grief felt so like fear.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.2997989058,
      "y": 0.8082147837,
      "quote": "\u201cWhenever you feel like criticizing any one...just remember that all the people in this world haven't had the advantages that you've had.\u201d",
      "author": "F. Scott Fitzgerald"
  },
  {
      "x": 0.376064837,
      "y": 0.5124044418,
      "quote": "\u201cSo many people walk around with a meaningless life. They seem half-asleep, even when they're busy doing things they think are important. This is because they're chasing the wrong things. The way you get meaning into your life is to devote yourself to loving others, devote yourself to your community around you, and devote yourself to creating something that gives you purpose and meaning.\u201d",
      "author": "Mitch Albom,"
  },
  {
      "x": 0.769661963,
      "y": 0.5410324335,
      "quote": "\u201cAll I have seen teaches me to trust the Creator for all I have not seen.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.5410391688,
      "y": 0.6621900797,
      "quote": "\u201cTo be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.5495337844,
      "y": 0.2762739062,
      "quote": "\u201cIn your light I learn how to love. In your beauty, how to make poems. You dance inside my chest where no-one sees you, but sometimes I do, and that sight becomes this art.\u201d",
      "author": "Rumi"
  },
  {
      "x": 0.5151317716,
      "y": 0.6833411455,
      "quote": "\u201cThe man who passes the sentence should swing the sword. If you would take a man's life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.7740083337,
      "y": 0.5880300999,
      "quote": "\u201cI don't know who invented high heels, but all women owe him a lot!\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.7306190133,
      "y": 0.5520871878,
      "quote": "\u201cThe major problem\u00e2\u20ac\u201done of the major problems, for there are several\u00e2\u20ac\u201done of the many major problems with governing people is that of whom you get to do it; or rather of who manages to get people to let them do it to them. To summarize: it is a well-known fact that those people who must want to rule people are, ipso facto, those least suited to do it. To summarize the summary: anyone who is capable of getting themselves made President should on no account be allowed to do the job.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.8126015067,
      "y": 0.8868746758,
      "quote": "\u201cLet the improvement of yourself keep you so busy that you have no time to criticize others.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.1313364506,
      "y": 0.6939535141,
      "quote": "\u201cWhat is family? They were the people who claimed you. In good, in bad, in parts or in whole, they were the ones who showed up, who stayed in there, regardless. It wasn't just about blood relations or shared chromosomes, but something wider, bigger. We had many families over time. Our family of origin, the family we created, and the groups you moved through while all of this was happening: friends, lovers, sometimes even strangers. None of them perfect, and we couldn't expect them to be. You can't make any one person your world. The trick was to take what each could give you and build your world from it.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.5458641648,
      "y": 0.9048813581,
      "quote": "\u201cSometimes I wonder if there's something wrong with me. Perhaps I've spent too long in the company of my literary romantic heroes, and consequently my ideals and expectations are far too high.\u201d",
      "author": "E.L. James,"
  },
  {
      "x": 0.7825077176,
      "y": 0.1821598709,
      "quote": "\u201cIf the real world were a book, it would never find a publisher. Overlong, detailed to the point of distraction-and ultimately, without a major resolution.\u201d",
      "author": "Jasper Fforde,"
  },
  {
      "x": 0.5648903847,
      "y": 0.9785307646,
      "quote": "\u201cIt's going to be all right, sir,\" Harry said over and over again, more worried by Dumbledore's silence than he had been by his weakened voice. \"We're nearly there ... I can Apparate us both back ... don't worry ...\"\"I am not worried, Harry,\" said Dumbledore, his voice a little stronger despite the freezing water. \"I am with you.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.399097681,
      "y": 0.0585906655,
      "quote": "\u201cSecond star to the right and straight on 'til morning. \u201d",
      "author": "J.M. Barrie,"
  },
  {
      "x": 0.2499630451,
      "y": 0.126180917,
      "quote": "\u201cYou're the first Shadowhunter I've ever met.\" \u00e2\u20ac\u0153That\u00e2\u20ac\u2122s too bad,\u00e2\u20ac\ufffd said Jace, \u00e2\u20ac\u0153since all the others you meet from now on will be a terrible letdown.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.8341057897,
      "y": 0.6334590912,
      "quote": "\u201cWhen will you learn that there isn't a word for everything?\u201d",
      "author": "Nicole Krauss,"
  },
  {
      "x": 0.5603078604,
      "y": 0.3060128987,
      "quote": "\u201cAlec looked at her and shook his head. \"How do you manage never to get mud on your clothes?\"Isabelle shrugged philosophically. \"I'm pure at heart. It repels the dirt.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3338440657,
      "y": 0.611499548,
      "quote": "\u201cEvil is always possible. And goodness is eternally difficult.\u201d",
      "author": "Anne Rice,"
  },
  {
      "x": 0.0726666451,
      "y": 0.4907098114,
      "quote": "\u201cWhen you have lost hope, you have lost everything. And when you think all is lost, when all is dire and bleak, there is always hope.\u201d",
      "author": "Pittacus Lore,"
  },
  {
      "x": 0.6204349995,
      "y": 0.9628759623,
      "quote": "\u201cWhat a blessing it is to love books as I love them;- to be able to converse with the dead, and to live amidst the unreal!\u201d",
      "author": "Thomas Babington Macaulay,"
  },
  {
      "x": 0.4876933694,
      "y": 0.0646826476,
      "quote": "\u201cWhy are you worrying about YOU-KNOW-WHO, when you should be worrying about YOU-NO-POO? The constipation sensation that's gripping the nation!\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5915335417,
      "y": 0.1885332763,
      "quote": "\u201cWords, I think, are such unpredictable creatures. No gun, no sword, no army or king will ever be more powerful than a sentence. Swords may cut and kill, but words will stab and stay, burying themselves in our bones to become corpses we carry into the future, all the time digging and failing to rip their skeletons from our flesh.\u201d",
      "author": "Tahereh Mafi,"
  },
  {
      "x": 0.3416067362,
      "y": 0.2367467284,
      "quote": "\u201cBlessed are the hearts that can bend; they shall never be broken.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.3850082159,
      "y": 0.5399005413,
      "quote": "\u201cMagnus, standing by the door, snapped his fingers impatiently. \"Move it along, teenagers. The only person who gets to canoodle in my bedroom is my magnificent self.\"\"Canoodle?\" repeated Clary, never having heard the word before.\"Magnificent?\" repeated Jace, who was just being nasty. Magnus growled. The growl sounded like \"Get out.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3636502028,
      "y": 0.0812581331,
      "quote": "\u201cMan only likes to count his troubles; he doesn't calculate his happiness.\u201d",
      "author": "Fyodor Dostoevsky,"
  },
  {
      "x": 0.0474179387,
      "y": 0.5130734444,
      "quote": "\u201cI'm killing time while I wait for life to shower me with meaning and happiness.\u201d",
      "author": "Bill Watterson"
  },
  {
      "x": 0.7238207459,
      "y": 0.3372323513,
      "quote": "\u201cThe best way to cheer yourself is to try to cheer someone else up.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.9163989425,
      "y": 0.5300984383,
      "quote": "\u201cI was dead until you found me, though I breathed. I was sightless, though I could see. And then you came...and I was awakened.\u201d",
      "author": "J.R. Ward,"
  },
  {
      "x": 0.4305390716,
      "y": 0.3339216709,
      "quote": "\u201cYou\u00e2\u20ac\u2122re dangerous,\u00e2\u20ac\ufffd he says.\u00e2\u20ac\u0153Why?\u00e2\u20ac\ufffd\u00e2\u20ac\u0153Because you make me believe in the impossible\u201d",
      "author": "Simone Elkeles,"
  },
  {
      "x": 0.0727695227,
      "y": 0.5632265806,
      "quote": "\u201cEducating the mind without educating the heart is no education at all.\u201d",
      "author": "Aristotle"
  },
  {
      "x": 0.3493870497,
      "y": 0.524283886,
      "quote": "\u201cThe price good men pay for indifference to public affairs is to be ruled by evil men.\u201d",
      "author": "Plato"
  },
  {
      "x": 0.6597827077,
      "y": 0.395909369,
      "quote": "\u201cOnce you have read a book you care about, some part of it is always with you.\u201d",
      "author": "Louis L'Amour,"
  },
  {
      "x": 0.6545901895,
      "y": 0.4824700654,
      "quote": "\u201cIgnore those that make you fearful and sad, that degrade you back towards disease and death.\u201d",
      "author": "Rumi Jalalud-Din"
  },
  {
      "x": 0.889572084,
      "y": 0.5390714407,
      "quote": "\u201cAnd then something invisible snapped insider her, and that which had come together commenced to fall apart.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.6348533034,
      "y": 0.9900013208,
      "quote": "\u201cThe two hardest tests on the spiritual road are the patience to wait for the right moment and the courage not to be disappointed with what we encounter.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.3490961194,
      "y": 0.3290899396,
      "quote": "\u201cThose who can make you believe absurdities, can make you commit atrocities.\u201d",
      "author": "Voltaire"
  },
  {
      "x": 0.2056561708,
      "y": 0.7897709608,
      "quote": "\u201cI write to give myself strength. I write to be the characters that I am not. I write to explore all the things I'm afraid of. \u201d",
      "author": "Joss Whedon"
  },
  {
      "x": 0.6421462297,
      "y": 0.9111647606,
      "quote": "\u201cBooks serve to show a man that those original thoughts of his aren't very new after all.\u201d",
      "author": "Abraham Lincoln"
  },
  {
      "x": 0.399769187,
      "y": 0.5638945103,
      "quote": "\u201cYou might want to lie down,\" Magnus advised. \"I find that it helps when the crushing sense of horrible realization sets in.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.6605474353,
      "y": 0.2942719162,
      "quote": "\u201cThe world was collapsing, and the only thing that really mattered to me was that she was alive.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.5595712662,
      "y": 0.3862810433,
      "quote": "\u201cParents can only give good advice or put them on the right paths, but the final forming of a person's character lies in their own hands.\u201d",
      "author": "Anne Frank"
  },
  {
      "x": 0.9663825631,
      "y": 0.3484916389,
      "quote": "\u201cUm...is that thing tame?\" Frank said.The horse whinnied angrily.\"I don't think so,\" Percy guessed. \"He just said, 'I will trample you to death, silly Chinese Canadian baby man'.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.6730077267,
      "y": 0.2826384604,
      "quote": "\u201cThis is how you do it: you sit down at the keyboard and you put one word after another until its done. It's that easy, and that hard.\u201d",
      "author": "Neil Gaiman"
  },
  {
      "x": 0.5166015029,
      "y": 0.2129961848,
      "quote": "\u201cThey're certainly entitled to think that, and they're entitled to full respect for their opinions... but before I can live with other folks I've got to live with myself. The one thing that doesn't abide by majority rule is a person's conscience.\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.5744401217,
      "y": 0.7980828285,
      "quote": "\u201cIn my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.\"Whenever you feel like criticizing any one,\" he told me, \"just remember that all the people in this world haven't had the advantages that you've had.\u201d",
      "author": "F. Scott Fitzgerald,"
  },
  {
      "x": 0.4516078234,
      "y": 0.4856727421,
      "quote": "\u201cYou should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.\u201d",
      "author": "Annie Proulx"
  },
  {
      "x": 0.2484968901,
      "y": 0.6360057592,
      "quote": "\u201cPeople tend to complicate their own lives, as if living weren't already complicated enough.\u201d",
      "author": "Carlos Ruiz Zaf\u00c3\u00b3n,"
  },
  {
      "x": 0.6040528417,
      "y": 0.3021749258,
      "quote": "\u201cmake a radical change in your lifestyle and begin to boldly do things which you may previously never have thought of doing, or been too hesitant to attempt. So many people live within unhappy circumstances and yet will not take the initiative to change their situation because they are conditioned to a life of security, conformity, and conservation, all of which may appear to give one peace of mind, but in reality nothing is more damaging to the adventurous spirit within a man than a secure future. The very basic core of a man's living spirit is his passion for adventure. The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun. If you want to get more out of life, you must lose your inclination for monotonous security and adopt a helter-skelter style of life that will at first appear to you to be crazy. But once you become accustomed to such a life you will see its full meaning and its incredible beauty.\u201d",
      "author": "Jon Krakauer,"
  },
  {
      "x": 0.5543041825,
      "y": 0.3760999143,
      "quote": "\u201cMaybe our girlfriends are our soulmates and guys are just people to have fun with.\u201d",
      "author": "Candace Bushnell,"
  },
  {
      "x": 0.3960700631,
      "y": 0.7053538561,
      "quote": "\u201cThe earth has its music for those who will listen\u201d",
      "author": "Reginald Vincent Holmes,"
  },
  {
      "x": 0.4145210981,
      "y": 0.4908712804,
      "quote": "\u201cWhen one is in love, one always begins by deceiving one's self, and one always ends by deceiving others. That is what the world calls a romance.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.636028111,
      "y": 0.5593031645,
      "quote": "\u201cA man who dares to waste one hour of time has not discovered the value of life.\u201d",
      "author": "Charles Darwin,"
  },
  {
      "x": 0.4795165658,
      "y": 0.0580466539,
      "quote": "\u201cWe do not need magic to transform our world. We carry all of the power we need inside ourselves already.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.426538825,
      "y": 0.127259776,
      "quote": "\u201cWhen I say it's you I like, I'm talking about that part of you that knows that life is far more than anything you can ever see or hear or touch. That deep part of you that allows you to stand for those things without which humankind cannot survive. Love that conquers hate, peace that rises triumphant over war, and justice that proves more powerful than greed.\u201d",
      "author": "Fred Rogers"
  },
  {
      "x": 0.7688105702,
      "y": 0.6212989092,
      "quote": "\u201cI wonder how many people don't get the one they want, but end up with the one they're supposed to be with.\u201d",
      "author": "Fannie Flagg,"
  },
  {
      "x": 0.2523645163,
      "y": 0.5750751495,
      "quote": "\u201cWhen we are young, the words are scattered all around us. As they are assembled by experience, so also are we, sentence by sentence, until the story takes shape.\u201d",
      "author": "Louise Erdrich,"
  },
  {
      "x": 0.2534591556,
      "y": 0.3987197876,
      "quote": "\u201cAll happiness depends on courage and work.\u201d",
      "author": "Honor\u00c3\u00a9 de Balzac"
  },
  {
      "x": 0.7759314179,
      "y": 0.3806462288,
      "quote": "\u201cBe thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.\u201d",
      "author": "Oprah Winfrey"
  },
  {
      "x": 0.7761994004,
      "y": 0.4657506645,
      "quote": "\u201cAll good books are alike in that they are truer than if they had really happened and after you are finished reading one you will feel that all that happened to you and afterwards it all belongs to you: the good and the bad, the ecstasy, the remorse and sorrow, the people and the places and how the weather was. If you can get so that you can give that to people, then you are a writer.\u201d",
      "author": "Ernest Hemingway"
  },
  {
      "x": 0.2943502665,
      "y": 0.5078164339,
      "quote": "\u201cThe supreme art of war is to subdue the enemy without fighting.\u201d",
      "author": "Sun Tzu,"
  },
  {
      "x": 0.2246748209,
      "y": 0.6904969215,
      "quote": "\u201cHolding anger is a poison...It eats you from inside...We think that by hating someone we hurt them...But hatred is a curved blade...and the harm we do to others...we also do to ourselves.\u201d",
      "author": "Mitch Albom,"
  },
  {
      "x": 0.4857743979,
      "y": 0.699899435,
      "quote": "\u201cI have nothing to declare except my genius.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.4441148043,
      "y": 0.4208723009,
      "quote": "\u201cThe earth laughs in flowers.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.6644901037,
      "y": 0.8361586332,
      "quote": "\u201cWhen someone is in your heart, they're never truly gone. They can come back to you, even at unlikely times.\u201d",
      "author": "Mitch Albom,"
  },
  {
      "x": 0.5052238107,
      "y": 0.4578243792,
      "quote": "\u201cEven After All this timeThe Sun never says to the Earth,\"You owe me.\"LookWhat happensWith a love like that,It lights the whole sky.\u201d",
      "author": "Hafiz"
  },
  {
      "x": 0.4145464301,
      "y": 0.5609202385,
      "quote": "\u201cBut I didn't understand then. That I could hurt somebody so badly she would never recover. That a person can, just by living, damage another human being beyond repair.\u201d",
      "author": "Haruki Murakami"
  },
  {
      "x": 0.6423994899,
      "y": 0.5276210308,
      "quote": "\u201cYou only live twice:Once when you are bornAnd once when you look death in the face\u201d",
      "author": "Ian Fleming,"
  },
  {
      "x": 0.5829761624,
      "y": 0.4343681037,
      "quote": "\u201cI don't go out with strangers,\" I said.\"Good thing I do. I'll pick you up at five.\u201d",
      "author": "Becca Fitzpatrick,"
  },
  {
      "x": 0.377255559,
      "y": 0.5624729395,
      "quote": "\u201cWe are each our own devil, and we make this world our hell.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.6524645686,
      "y": 0.1012346298,
      "quote": "\u201cTo-morrow, and to-morrow, and to-morrow,Creeps in this petty pace from day to day,To the last syllable of recorded time;And all our yesterdays have lighted foolsThe way to dusty death. Out, out, brief candle!Life's but a walking shadow, a poor player,That struts and frets his hour upon the stage,And then is heard no more. It is a taleTold by an idiot, full of sound and fury,Signifying nothing.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.8839979768,
      "y": 0.4612959325,
      "quote": "\u201cReality doesn't impress me. I only believe in intoxication, in ecstasy, and when ordinary life shackles me, I escape, one way or another. No more walls.\u201d",
      "author": "Ana\u00c3\u00afs Nin,"
  },
  {
      "x": 0.2389987111,
      "y": 0.4745552242,
      "quote": "\u201cWanting to be someone else is a waste of the person you are.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.5756211281,
      "y": 0.4247529209,
      "quote": "\u201cI know it's wrong - God, it's all kinds of wrong - but I just want to lie down with you and wake up with you, just once, just once ever in my life.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3845490217,
      "y": 0.4698807895,
      "quote": "\u201cThe future depends on what you do today.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.6780710816,
      "y": 0.5992324352,
      "quote": "\u201cTrees that are slow to grow bear the best fruit.\u201d",
      "author": "Moliere"
  },
  {
      "x": 0.6671093702,
      "y": 0.2182425559,
      "quote": "\u201cOnly people who are capable of loving strongly can also suffer great sorrow, but this same necessity of loving serves to counteract their grief and heals them.\u201d",
      "author": "Leo Tolstoy"
  },
  {
      "x": 0.8424654603,
      "y": 0.3655088842,
      "quote": "\u201cIf death meant just leaving the stage long enough to change costume and come back as a new character...Would you slow down? Or speed up?\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.4902209044,
      "y": 0.4411065876,
      "quote": "\u201cThe only truth is music.\u201d",
      "author": "Jack Kerouac"
  },
  {
      "x": 0.9662883878,
      "y": 0.3383250833,
      "quote": "\u201cLaughter is wine for the soul - laughter soft, or loud and deep, tinged through with seriousness - the hilarious declaration made by man that life is worth living.\u201d",
      "author": "Sean O'Casey"
  },
  {
      "x": 0.4229562283,
      "y": 0.6174749136,
      "quote": "\u201cIf you never did you should. These things are fun and fun is good.\u201d",
      "author": "Dr. Seuss"
  },
  {
      "x": 0.3045167923,
      "y": 0.3656018674,
      "quote": "\u201cIntelligence plus character-that is the goal of true education.\u201d",
      "author": "Martin Luther King Jr."
  },
  {
      "x": 0.4385137558,
      "y": 0.1300042272,
      "quote": "\u201cThe mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.\u201d",
      "author": "J.D. Salinger,"
  },
  {
      "x": 0.5995749235,
      "y": 0.845020175,
      "quote": "\u201cOnly a generation of readers will spawn a generation of writers.\u201d",
      "author": "Steven Spielberg"
  },
  {
      "x": 0.9435101151,
      "y": 0.5576424599,
      "quote": "\u201cI can't eat and I can't sleep. I'm not doing well in terms of being a functional human, you know?\u201d",
      "author": "Ned Vizzini,"
  },
  {
      "x": 0.8192641139,
      "y": 0.5189468861,
      "quote": "\u201cYou care so much you feel as though you will bleed to death with the pain of it.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.7378972173,
      "y": 0.2924051583,
      "quote": "\u201cDo not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.\u201d",
      "author": "Epicurus"
  },
  {
      "x": 0.3248000741,
      "y": 0.5247836113,
      "quote": "\u201cCan you surf really well, then?\"I looked at Grover, who was trying hard not to laugh.\"Jeez, Nico,\" I said. \"I've never really tried.\"He went on asking questions. Did I fight a lot with Thalia, since she was a daughter of Zeus? (I didn't answer that one.) If Annabeth's mother was Athena, the goddess of wisdom, then why didn't Annabeth know better than to fall off a cliff? (I tried not to strangle Nico for asking that one.) Was Annabeth my girlfriend? (At this point, I was ready to stick the kid in a meat-flavored sack and throw him to the wolves.)\u201d",
      "author": "Rick Riordan"
  },
  {
      "x": 0.6586893797,
      "y": 0.5773175955,
      "quote": "\u201cBooks are no more threatened by Kindle than stairs by elevators.\u201d",
      "author": "Stephen Fry"
  },
  {
      "x": 0.6491991282,
      "y": 0.6324948072,
      "quote": "\u201cThere is more than one way to burn a book. And the world is full of people running about with lit matches.\u201d",
      "author": "Ray Bradbury"
  },
  {
      "x": 0.5311689377,
      "y": 0.4535260499,
      "quote": "\u201cThe question is not what you look at, but what you see.\u201d",
      "author": "Henry David Thoreau"
  },
  {
      "x": 0.4219019413,
      "y": 0.1359803528,
      "quote": "\u201cI was always hungry for love. Just once, I wanted to know what it was like to get my fill of it -- to be fed so much love I couldn't take any more. Just once. \u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.2340949178,
      "y": 0.5855815411,
      "quote": "\u201c...you know that a good, long session of weeping can often make you feel better, even if your circumstances have not changed one bit.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.9048814178,
      "y": 0.6267876625,
      "quote": "\u201cDon't cry over someone who wouldn't cry over you.\u201d",
      "author": "Lauren Conrad"
  },
  {
      "x": 0.7024108768,
      "y": 0.7578306198,
      "quote": "\u201cYou can only be young once. But you can always be immature.\u201d",
      "author": "Pat  Monahan"
  },
  {
      "x": 0.9937976003,
      "y": 0.5615874529,
      "quote": "\u201cThe things you used to own, now they own you.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.2529172301,
      "y": 0.1504725367,
      "quote": "\u201cIf, then, I were asked for the most important advice I could give, that which I considered to be the most useful to the men of our century, I should simply say: in the name of God, stop a moment, cease your work, look around you.\u201d",
      "author": "Leo Tolstoy,"
  },
  {
      "x": 0.4686986208,
      "y": 0.50623703,
      "quote": "\u201cYou deal with mythological stuff for a few years, you learn that paradises are usually places where you get killed.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.3589246869,
      "y": 0.6166380644,
      "quote": "\u201cIf someone were to harm my family or a friend or somebody I love, I would eat them. I might end up in jail for 500 years, but I would eat them.\u201d",
      "author": "Johnny Depp"
  },
  {
      "x": 0.9165478349,
      "y": 0.7047333717,
      "quote": "\u201cIf you want to get laid, go to college. If you want an education, go to the library.\u201d",
      "author": "Frank Zappa"
  },
  {
      "x": 0.5226546526,
      "y": 0.7231624126,
      "quote": "\u201cHope is a waking dream.\u201d",
      "author": "Aristotle"
  },
  {
      "x": 0.3956840634,
      "y": 0.3434264362,
      "quote": "\u201cWe can't be afraid of change. You may feel very secure in the pond that you are in, but if you never venture out of it, you will never know that there is such a thing as an ocean, a sea. Holding onto something that is good for you now, may be the very reason why you don't have something better.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.4747039676,
      "y": 0.8229907751,
      "quote": "\u201cto love life, to love it evenwhen you have no stomach for itand everything you've held dearcrumbles like burnt paper in your hands,your throat filled with the silt of it.When grief sits with you, its tropical heatthickening the air, heavy as watermore fit for gills than lungs;when grief weights you like your own fleshonly more of it, an obesity of grief,you think, How can a body withstand this?Then you hold life like a facebetween your palms, a plain face,no charming smile, no violet eyes,and you say, yes, I will take youI will love you, again.\u201d",
      "author": "Ellen Bass"
  },
  {
      "x": 0.6000791192,
      "y": 0.4657045305,
      "quote": "\u201cThe good thing about science is that it's true whether or not you believe in it.\u201d",
      "author": "Neil deGrasse Tyson"
  },
  {
      "x": 0.2628275752,
      "y": 0.3831708729,
      "quote": "\u201cGod, but life is loneliness, despite all the opiates, despite the shrill tinsel gaiety of \"parties\" with no purpose, despite the false grinning faces we all wear. And when at last you find someone to whom you feel you can pour out your soul, you stop in shock at the words you utter - they are so rusty, so ugly, so meaningless and feeble from being kept in the small cramped dark inside you so long. Yes, there is joy, fulfillment and companionship - but the loneliness of the soul in its appalling self-consciousness is horrible and overpowering.\u201d",
      "author": "Sylvia Plath,"
  },
  {
      "x": 0.5649185777,
      "y": 0.2463206649,
      "quote": "\u201cHe died not for men, but for each man. If each man had been the only man made, He would have done no less.\u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.4654732943,
      "y": 0.5884820223,
      "quote": "\u201cI got schooled this yearbyaboy.A boy that I'm seriously, deeply, madly, incredibly, and undeniably in ",
      "author": "Colleen Hoover,"
  },
  {
      "x": 0.0784795582,
      "y": 0.3893754482,
      "quote": "\u201cI\u00e2\u20ac\u2122ve been fighting to be who I am all my life. What\u00e2\u20ac\u2122s the point of being who I am, if I can\u00e2\u20ac\u2122t have the person who was worth all the fighting for?\u201d",
      "author": "Stephanie Lennox,"
  },
  {
      "x": 0.9062544703,
      "y": 0.578879714,
      "quote": "\u201cAbsence diminishes small loves and increases great ones, as the wind blows out the candle and fans the bonfire.\u201d",
      "author": "Francois Duc de la Rochefoucauld,"
  },
  {
      "x": 0.4885184765,
      "y": 0.3252777755,
      "quote": "\u201cThose who cannot change their minds cannot change anything.\u201d",
      "author": "George Bernard Shaw"
  },
  {
      "x": 0.7766430974,
      "y": 0.6909749508,
      "quote": "\u201cHave you ever lost someone you love and wanted one more conversation, one more chance to make up for the time when you thought they would be here forever? If so, then you know you can go your whole life collecting days, and none will outweigh the one you wish you had back.\u201d",
      "author": "Mitch Albom,"
  },
  {
      "x": 0.5637716055,
      "y": 0.3529416919,
      "quote": "\u201cLiterature is a textually transmitted disease, normally contracted in childhood.\u201d",
      "author": "Jane Yolen,"
  },
  {
      "x": 0.8608115315,
      "y": 0.5760596991,
      "quote": "\u201cA well-composed book is a magic carpet on which we are wafted to a world that we cannot enter in any other way.\u201d",
      "author": "Caroline Gordon"
  },
  {
      "x": 0.6241348982,
      "y": 0.9630225897,
      "quote": "\u201cWe need not to be let alone. We need to be really bothered once in a while. How long is it since you were really bothered? About something important, about something real?\u201d",
      "author": "Ray Bradbury,"
  },
  {
      "x": 0.3081844449,
      "y": 0.3031609356,
      "quote": "\u201cAnybody can sympathise with the sufferings of a friend, but it requires a very fine nature to sympathise with a friend's success.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.5636986494,
      "y": 0.6093405485,
      "quote": "\u201cWe do not believe in ourselves until someone reveals that deep inside us something is valuable, worth listening to, worthy of our trust, sacred to our touch. Once we believe in ourselves we can risk curiosity, wonder, spontaneous delight or any experience that reveals the human spirit.\u201d",
      "author": "E.E. Cummings"
  },
  {
      "x": 0.2450656295,
      "y": 0.4046978652,
      "quote": "\u201cIf books could have more, give more, be more, show more, they would still need readers who bring to them sound and smell and light and all the rest that can\u00e2\u20ac\u2122t be in books.\tThe book needs you.\u201d",
      "author": "Gary Paulsen,"
  },
  {
      "x": 0.1681666672,
      "y": 0.4972402155,
      "quote": "\u201cIf you're texting Magnus to say 'I think u r kewl,' I'm going to kill you.\"\"Who's Magnus?\" Max inquired.\"He's a warlock,\" said Alec.\"A sexy, sexy warlock,\" Isabelle told Max, ignoring Alec's look of total fury.\"But warlocks are bad,\" protested Max, looking baffled.\"Exactly,\" said Isabelle.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.3269716501,
      "y": 0.4341424406,
      "quote": "\u201cIf no one cares for you at all, do you even really exist?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.1220251322,
      "y": 0.3936588466,
      "quote": "\u201cthere are two types of people in the world: those who prefer to be sad among others, and those who prefer to be sad alone.\u201d",
      "author": "Nicole Krauss,"
  },
  {
      "x": 0.7463095784,
      "y": 0.4204345644,
      "quote": "\u201cI imagine one of the reasons people cling to their hates so stubbornly is because they sense, once hate is gone, they will be forced to deal with pain.\u201d",
      "author": "James Baldwin,"
  },
  {
      "x": 0.2760625482,
      "y": 0.7331881523,
      "quote": "\u201cHeard melodies are sweet, but those unheard, are sweeter\u201d",
      "author": "John Keats,"
  },
  {
      "x": 0.517459929,
      "y": 0.3419654667,
      "quote": "\u201cSometimes love means letting go when you want to hold on tighter.\u201d",
      "author": "Melissa Marr,"
  },
  {
      "x": 0.6880232096,
      "y": 0.5786547661,
      "quote": "\u201cA man's face is his autobiography. A woman's face is her work of fiction.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.6592263579,
      "y": 0.6965179443,
      "quote": "\u201cAlways be a poet, even in prose.\u201d",
      "author": "Charles Baudelaire"
  },
  {
      "x": 0.3148702383,
      "y": 0.5425028801,
      "quote": "\u201cThe power of a glance has been so much abused in love stories, that it has come to be disbelieved in. Few people dare now to say that two beings have fallen in love because they have looked at each other. Yet it is in this way that love begins, and in this way only.\u201d",
      "author": "Victor Hugo,"
  },
  {
      "x": 0.3295428753,
      "y": 0.4025951624,
      "quote": "\u201cIncredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.\u201d",
      "author": "Steve Maraboli,"
  },
  {
      "x": 0.646045804,
      "y": 0.0849253833,
      "quote": "\u201cI believe in God, but not as one thing, not as an old man in the sky. I believe that what people call God is something in all of us. I believe that what Jesus and Mohammed and Buddha and all the rest said was right. It's just that the translations have gone wrong.\u201d",
      "author": "John Lennon"
  },
  {
      "x": 0.5640755296,
      "y": 0.4785466492,
      "quote": "\u201cA mother is the truest friend we have, when trials heavy and sudden fall upon us; when adversity takes the place of prosperity; when friends desert us; when trouble thickens around us, still will she cling to us, and endeavor by her kind precepts and counsels to dissipate the clouds of darkness, and cause peace to return to our hearts.\u201d",
      "author": "Washington Irving"
  },
  {
      "x": 0.4146263599,
      "y": 0.713501811,
      "quote": "\u201cI know how devastated you must be to miss me, but leave a message, and I'll try to ease your agony\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.5214433074,
      "y": 0.472184509,
      "quote": "\u201cDid you really want to die?\"\"No one commits suicide because they want to die.\"\"Then why do they do it?\"\"Because they want to stop the pain.\u201d",
      "author": "Tiffanie DeBartolo,"
  },
  {
      "x": 0.8406593204,
      "y": 0.9298288822,
      "quote": "\u201cThe past is never where you think you left it.\u201d",
      "author": "Katherine Anne Porter"
  },
  {
      "x": 0.3918461204,
      "y": 0.568800211,
      "quote": "\u201cThe homemaker has the ultimate career. All other careers exist for one purpose only - and that is to support the ultimate career. \u201d",
      "author": "C.S. Lewis"
  },
  {
      "x": 0.4933502078,
      "y": 0.8573160172,
      "quote": "\u201cI want to be in a relationship where you telling me you love me is just a ceremonious validation of what you already show me.\u201d",
      "author": "Steve Maraboli,"
  },
  {
      "x": 0.2489743829,
      "y": 0.1909588873,
      "quote": "\u201cThere are moments when troubles enter our lives and we can do nothing to avoid them.But they are there for a reason. Only when we have overcome them will we understand why they were there.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.6500269771,
      "y": 0.3717195094,
      "quote": "\u201cYou could say sorry,\" suggested Harry bluntly. \"What, and get attacked by another flock of canaries?\" muttered Ron.\"What did you have to imitate her for?\"\"She laughed at my mustache!\"\"So did I, it was the stupidest thing I've ever seen.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.6188670993,
      "y": 0.4884224236,
      "quote": "\u201cDreams are always crushing when they don't come true. But it's the simple dreams that are often the most painful because they seem so personal, so reasonable, so attainable. You're always close enough to touch, but never quite close enough to hold and it's enough to break your heart.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.1656424105,
      "y": 0.4653541148,
      "quote": "\u201cDemon pox, oh demon poxJust how is it acquired?One must go down to the bad part of townUntil one is very tired.Demon pox, oh demon pox, I had it all along\u00e2\u20ac\u201dNot the pox, you foolish blocks,I mean this very song\u00e2\u20ac\u201dFor I was right, and you were wrong!\"\"Will!\" Charlotte shouted over the noise, \"Have you LOST YOUR MIND? CEASE THAT INFERNAL RACKET! Jem\u00e2\u20ac\u201d\" Jem, rising to his feet, clapped his hands over Will's mouth. \"Do you promise to be quiet?\" he hissed into his friend's ear.Will nodded, blue eyes blazing. Tessa was staring at him in amazement; they all were. She had seen Will many things\u00e2\u20ac\u201damused, bitter, condescending, angry, pitying\u00e2\u20ac\u201dbut never giddy before.Jem let him go. \"All right, then.\"Will slid to the floor, his back against the armchair, and threw up his arms. \"A demon pox on all your houses!\" he announced, and yawned.\"Oh, God, weeks of pox jokes,\" said Jem. \"We're in for it now.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5289379358,
      "y": 0.2213520706,
      "quote": "\u201cWe dream to give ourselves hope. To stop dreaming - well, that\u00e2\u20ac\u2122s like saying you can never change your fate.\u201d",
      "author": "Amy Tan,"
  },
  {
      "x": 0.7040352225,
      "y": 0.4656298459,
      "quote": "\u201cNothing travels faster than the speed of light, with the possible exception of bad news, which obeys its own special laws.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.6558942199,
      "y": 0.3140101731,
      "quote": "\u201cIn one aspect, yes, I believe in ghosts, but we create them. We haunt ourselves.\u201d",
      "author": "Laurie Halse Anderson,"
  },
  {
      "x": 0.7190710902,
      "y": 0.7878426313,
      "quote": "\u201cFashion is a form of ugliness so intolerable that we have to alter it every six months.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.5281150341,
      "y": 0.0403807312,
      "quote": "\u201cGreat minds discuss ideas. Average minds discuss events. Small minds discuss people.\u201d",
      "author": "Henry Thomas Buckle"
  },
  {
      "x": 0.3342965245,
      "y": 0.4473160207,
      "quote": "\u201cI don't mind making jokes, but I don't want to look like one.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.1510980427,
      "y": 0.2234339714,
      "quote": "\u201cNothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.\u201d",
      "author": "Marie Curie"
  },
  {
      "x": 0.3434146643,
      "y": 0.3370898366,
      "quote": "\u201cA small but noteworthy note. I've seen so many young men over the years who think they're running at other young men. They are not. They are running at me.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.3864989281,
      "y": 0.3805469275,
      "quote": "\u201cI'm happy. Which often looks like crazy.\u201d",
      "author": "David Henry Hwang,"
  },
  {
      "x": 0.544141531,
      "y": 0.5547642708,
      "quote": "\u201cI guess that's what saying good-bye is always like--like jumping off an edge. The worst part is making the choice to do it. Once you're in the air, there's nothing you can do but let go.\u201d",
      "author": "Lauren Oliver,"
  },
  {
      "x": 0.5838680267,
      "y": 0.7233024836,
      "quote": "\u201cMost men would rather deny a hard truth than face it.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.3731591105,
      "y": 0.6341834068,
      "quote": "\u201cMen go to far greater lengths to avoid what they fear than to obtain what they desire.\u201d",
      "author": "Dan Brown,"
  },
  {
      "x": 0.3571083546,
      "y": 0.1556610614,
      "quote": "\u201cLife is either a daring adventure or nothing at all.\u201d",
      "author": "Helen Keller,"
  },
  {
      "x": 0.4745451808,
      "y": 0.380731523,
      "quote": "\u201cHe felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.\u201d",
      "author": "Douglas Adams,"
  },
  {
      "x": 0.6182562113,
      "y": 0.773213625,
      "quote": "\u201cThere is a pleasure in the pathless woods,There is a rapture on the lonely shore,There is society, where none intrudes,By the deep sea, and music in its roar:I love not man the less, but Nature more\u201d",
      "author": "Lord Byron"
  },
  {
      "x": 0.4460154176,
      "y": 0.7911113501,
      "quote": "\u201cWell, she's not responding to my advances,\" he observed more brightly than he felt, \"so she must be dead.\" \"Or she's a woman of good taste and sense.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.8020421863,
      "y": 0.2746801972,
      "quote": "\u201cI\u00e2\u20ac\u2122m not in this world to live up to your expectations and you\u00e2\u20ac\u2122re not in this world to live up to mine.\u201d",
      "author": "Bruce Lee"
  },
  {
      "x": 0.6511861086,
      "y": 0.8849043846,
      "quote": "\u201cFreedom lies in being bold.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.3441669941,
      "y": 0.0718812495,
      "quote": "\u201cGus: \"It tastes like...\"Me: \"Food.\"Gus: \"Yes, precisely. It tastes like food, excellently prepared. But it does not taste, how do I put this delicately...?\"Me: \"It does not taste like God Himself cooked heaven into a series of five dishes which were then served to you accompanied by several luminous balls of fermented, bubbly plasma while actual and literal flower petals floated down around your canal-side dinner table.\"Gus: \"Nicely phrased.\"Gus's father: \"Our children are weird.\"My dad: \"Nicely phrased.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.2785155773,
      "y": 0.1133605689,
      "quote": "\u201cIf you stay, I'll do whatever you want. I'll quit the band, go with you to New York. But if you need me to go away, I'll do that, too. I was talking to Liz and she said maybe coming back to your old life would be too painful, that maybe it'd be easier for you to erase us. And that would suck, but I'd do it. I can lose you like that if I don't lose you today. I'll let you go. If you stay.\u201d",
      "author": "Gayle Forman,"
  },
  {
      "x": 0.6846664548,
      "y": 0.3203391135,
      "quote": "\u201cA paranoid is someone who knows a little of what's going on. \u201d",
      "author": "William S. Burroughs"
  },
  {
      "x": 0.6137602925,
      "y": 0.4061017632,
      "quote": "\u201cYou are okay?\" he asked. \"Not eaten by monsters?\"\"Not even a little bit.\" I showed him that I still had both arms and both legs, and Tyson clapped happily.\"Yay!\" he said. \"Now we can eat peanut butter sandwiches and ride fish ponies! We can fight monsters and see Annabeth and make things go BOOM!\"I hoped he didn't mean all at the same time, but I told him absolutely, we'd have a lot of fun this summer.\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.6646242142,
      "y": 0.5446447134,
      "quote": "\u201cThe impossible could not have happened, therefore the impossible must be possible in spite of appearances.\u201d",
      "author": "Agatha Christie,"
  },
  {
      "x": 0.7414903045,
      "y": 0.6735275984,
      "quote": "\u201cThe best way to not feel hopeless is to get up and do something. Don\u00e2\u20ac\u2122t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.\u201d",
      "author": "Barack Obama"
  },
  {
      "x": 0.4912427664,
      "y": 0.6547945738,
      "quote": "\u201cThe surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.7160291076,
      "y": 0.5182458162,
      "quote": "\u201cIf you have the words, there's always a chance that you'll find the way.\u201d",
      "author": "Seamus Heaney,"
  },
  {
      "x": 0.4176179767,
      "y": 0.2831003368,
      "quote": "\u201cStories you read when you're the right age never quite leave you. You may forget who wrote them or what the story was called. Sometimes you'll forget precisely what happened, but if a story touches you it will stay with you, haunting the places in your mind that you rarely ever visit.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.7694128156,
      "y": 0.4172582924,
      "quote": "\u201cMany people will walk in and out of your life, but only true friends will leave footprints in your heart\u201d",
      "author": "Eleanor Roosevelt"
  },
  {
      "x": 0.1913942099,
      "y": 0.6997324228,
      "quote": "\u201cI sit beside the fire and think Of all that I have seenOf meadow flowers and butterfliesIn summers that have beenOf yellow leaves and gossamerIn autumns that there wereWith morning mist and silver sunAnd wind upon my hairI sit beside the fire and thinkOf how the world will beWhen winter comes without a spring That I shall ever seeFor still there are so many thingsThat I have never seenIn every wood in every springThere is a different greenI sit beside the fire and thinkOf people long agoAnd people that will see a worldThat I shall never knowBut all the while I sit and thinkOf times there were beforeI listen for returning feet And voices at the door\u201d",
      "author": "J.R.R. Tolkien"
  },
  {
      "x": 0.8225335479,
      "y": 0.3103204966,
      "quote": "\u201cHave you tried talking to her?\" \"No. We've been punching her in the face repeatedly. What? You don't think that will work?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.443205893,
      "y": 0.1580019146,
      "quote": "\u201cWith enough courage, you can do without a reputation.\u201d",
      "author": "Margaret Mitchell"
  },
  {
      "x": 0.3022987247,
      "y": 0.1904377937,
      "quote": "\u201cName the greatest of all inventors. Accident.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.7036655545,
      "y": 0.3844666779,
      "quote": "\u201cKeep your face always toward the sunshine - and shadows will fall behind you.\u201d",
      "author": "Walt Whitman"
  },
  {
      "x": 0.1143420935,
      "y": 0.5315288305,
      "quote": "\u201cWatch out for intellect,because it knows so much it knows nothingand leaves you hanging upside down,mouthing knowledge as your heartfalls out of your mouth.\u201d",
      "author": "Anne Sexton,"
  },
  {
      "x": 0.3798068166,
      "y": 0.5777982473,
      "quote": "\u201cAll our dreams can come true, if we have the courage to pursue them.\u201d",
      "author": "Walt Disney"
  },
  {
      "x": 0.5019024014,
      "y": 0.6688251495,
      "quote": "\u201cImagination is like a muscle. I found out that the more I wrote, the bigger it got.\u201d",
      "author": "Philip Jos\u00c3\u00a9 Farmer"
  },
  {
      "x": 0.2578733563,
      "y": 0.6479125023,
      "quote": "\u201cThe advantage of a bad memory is that one enjoys several times the same good things for the first time.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.4991258979,
      "y": 0.3402721286,
      "quote": "\u201cYour visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.\u201d",
      "author": "C.G. Jung"
  },
  {
      "x": 0.3223108649,
      "y": 0.6836441755,
      "quote": "\u201cMental pain is less dramatic than physical pain, but it is more common and also more hard to bear. The frequent attempt to conceal mental pain increases the burden: it is easier to say \u00e2\u20ac\u0153My tooth is aching\u00e2\u20ac\ufffd than to say \u00e2\u20ac\u0153My heart is broken.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.6539644599,
      "y": 0.2100569606,
      "quote": "\u201cAlone. Yes, that's the key word, the most awful word in the English tongue. Murder doesn't hold a candle to it and hell is only a poor synonym.\u201d",
      "author": "Stephen King"
  },
  {
      "x": 0.7761955857,
      "y": 0.1389407068,
      "quote": "\u201cNothing takes the taste out of peanut butter quite like unrequited love.\u201d",
      "author": "Charles M. Schulz"
  },
  {
      "x": 0.4738275409,
      "y": 0.7680208683,
      "quote": "\u201cYou can't wait for inspiration. You have to go after it with a club.\u201d",
      "author": "Jack London"
  },
  {
      "x": 0.839949429,
      "y": 0.9017649889,
      "quote": "\u201cWhen you trip over love, it is easy to get up. But when you fall in love, it is impossible to stand again.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.1317254603,
      "y": 0.3281253874,
      "quote": "\u201cUsually we walk around constantly believing ourselves. \"I'm okay\" we say. \"I'm alright\". But sometimes the truth arrives on you and you can't get it off. That's when you realize that sometimes it isn't even an answer--it's a question. Even now, I wonder how much of my life is convinced.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.1835042834,
      "y": 0.2147512734,
      "quote": "\u201cThe more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.\u201d",
      "author": "Rachel Carson"
  },
  {
      "x": 0.5919929743,
      "y": 0.8905813694,
      "quote": "\u201cYou think because he doesn't love you that you are worthless. You think that because he doesn't want you anymore that he is right -- that his judgement and opinion of you are correct. If he throws you out, then you are garbage. You think he belongs to you because you want to belong to him. Don't. It's a bad word, 'belong.' Especially when you put it with somebody you love. Love shouldn't be like that. Did you ever see the way the clouds love a mountain? They circle all around it; sometimes you can't even see the mountain for the clouds. But you know what? You go up top and what do you see? His head. The clouds never cover the head. His head pokes through, beacuse the clouds let him; they don't wrap him up. They let him keep his head up high, free, with nothing to hide him or bind him. You can't own a human being. You can't lose what you don't own. Suppose you did own him. Could you really love somebody who was absolutely nobody without you? You really want somebody like that? Somebody who falls apart when you walk out the door? You don't, do you? And neither does he. You're turning over your whole life to him. Your whole life, girl. And if it means so little to you that you can just give it away, hand it to him, then why should it mean any more to him? He can't value you more than you value yourself.\u201d",
      "author": "Toni Morrison"
  },
  {
      "x": 0.5555531383,
      "y": 0.6146013737,
      "quote": "\u201cSo light a fire!\" Harry choked. \"Yes...of course...but there's no wood!\" ... \"HAVE YOU GONE MAD!\" Ron bellowed. \"ARE YOU A WITCH OR NOT!\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8684313893,
      "y": 0.1986395121,
      "quote": "\u201cI decided it is better to scream. Silence is the real crime against humanity.\u201d",
      "author": "Nadezhda Mandelstam,"
  },
  {
      "x": 0.3239794374,
      "y": 0.865850687,
      "quote": "\u201cWhoever is careless with the truth in small matters cannot be trusted with important matters\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.601488471,
      "y": 0.9281932116,
      "quote": "\u201cWill rolled up his sleeves. \"We'll probably have to knock down the door--\" \"Or,\" said Jem, reaching out and giving the knob a twist, \"not.\" The door swung open onto a rectangle of darkness. \"Now, that's simply laziness,\" said Will.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4094533324,
      "y": 0.5934824944,
      "quote": "\u201cI am both happy and sad at the same time, and I'm still trying to figure out how that could be.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.7775208354,
      "y": 0.3589261174,
      "quote": "\u201cAnother belief of mine: that everyone else my age is an adult, whereas I am merely in disguise.\u201d",
      "author": "Margaret Atwood,"
  },
  {
      "x": 0.13160941,
      "y": 0.6837552786,
      "quote": "\u201cAutumn is a second spring when every leaf is a flower.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.4688639641,
      "y": 0.1719475091,
      "quote": "\u201cAtticus said to Jem one day, \"I\u00e2\u20ac\u2122d rather you shot at tin cans in the backyard, but I know you\u00e2\u20ac\u2122ll go after birds. Shoot all the blue jays you want, if you can hit \u00e2\u20ac\u02dcem, but remember it\u00e2\u20ac\u2122s a sin to kill a mockingbird.\" That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it. \"Your father\u00e2\u20ac\u2122s right,\" she said. \"Mockingbirds don\u00e2\u20ac\u2122t do one thing except make music for us to enjoy. They don\u00e2\u20ac\u2122t eat up people\u00e2\u20ac\u2122s gardens, don\u00e2\u20ac\u2122t nest in corn cribs, they don\u00e2\u20ac\u2122t do one thing but sing their hearts out for us. That\u00e2\u20ac\u2122s why it\u00e2\u20ac\u2122s a sin to kill a mockingbird.\u201d",
      "author": "Harper Lee,"
  },
  {
      "x": 0.076856643,
      "y": 0.5478186607,
      "quote": "\u201cBeing with you never felt wrong. It's the one thing I did right. You're the one thing I did right.\u201d",
      "author": "Becca Fitzpatrick,"
  },
  {
      "x": 0.4959968328,
      "y": 0.4837960303,
      "quote": "\u201cIs man merely a mistake of God's? Or God merely a mistake of man?\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.4360375404,
      "y": 0.7161325216,
      "quote": "\u201cShoot for the moon. Even if you miss, you'll land among the stars.\u201d",
      "author": "Norman Vincent Peale"
  },
  {
      "x": 0.5468252301,
      "y": 0.0745429248,
      "quote": "\u201cFor me, I am driven by two main philosophies: know more today about the world than I knew yesterday and lessen the suffering of others. You'd be surprised how far that gets you.\u201d",
      "author": "Neil deGrasse Tyson"
  },
  {
      "x": 0.6732570529,
      "y": 0.2857968211,
      "quote": "\u201cthere is a place in the heart thatwill never be filleda spaceand even during thebest momentsandthe greatest timestimeswe will know itwe will know itmore thaneverthere is a place in the heart thatwill never be filledandwe will waitandwaitin that space.\u201d",
      "author": "Charles bukowski"
  },
  {
      "x": 0.2604910135,
      "y": 0.2827157378,
      "quote": "\u201cI decided as long as I'm going to hell, I might as well do it thoroughly.\u201d",
      "author": "Stephenie Meyer,"
  },
  {
      "x": 0.2768480182,
      "y": 0.8243579865,
      "quote": "\u201cYou\u00e2\u20ac\u2122ll get over it\u00e2\u20ac\u00a6\u00e2\u20ac\ufffd It\u00e2\u20ac\u2122s the clich\u00c3\u00a9s that cause the trouble. To lose someone you love is to alter your life for ever. You don\u00e2\u20ac\u2122t get over it because \u00e2\u20ac\u02dcit\u00e2\u20ac\ufffd is the person you loved. The pain stops, there are new people, but the gap never closes. How could it? The particularness of someone who mattered enough to grieve over is not made anodyne by death. This hole in my heart is in the shape of you and no-one else can fit it. Why would I want them to?\u201d",
      "author": "Jeanette Winterson,"
  },
  {
      "x": 0.3512610197,
      "y": 0.7458845377,
      "quote": "\u201cDo not set aside your happiness. Do not wait to be happy in the future. The best time to be happy is always now.\u201d",
      "author": "Roy T. Bennett"
  },
  {
      "x": 0.1038817465,
      "y": 0.2868517935,
      "quote": "\u201cGood sex is like good bridge. If you don't have a good partner, you'd better have a good hand.\u201d",
      "author": "Mae West"
  },
  {
      "x": 0.5084568262,
      "y": 0.6161528826,
      "quote": "\u201c...and then, I have nature and art and poetry, and if that is not enough, what is enough?\u201d",
      "author": "Vincent Willem van Gogh"
  },
  {
      "x": 0.4278244972,
      "y": 0.7127028704,
      "quote": "\u201cHow do I love thee? Let me count the ways.I love thee to the depth and breadth and heightMy soul can reach\u201d",
      "author": "Elizabeth Barrett Browning"
  },
  {
      "x": 0.164170444,
      "y": 0.4315700829,
      "quote": "\u201cHe was the crazy one who had painted himself black and defeated the world.She was the book thief without the words.Trust me, though, the words were on their way, and when they arrived, Liesel would hold them in her hands like the clouds, and she would wring them out like rain.\u201d",
      "author": "Markus Zusak,"
  },
  {
      "x": 0.7052569985,
      "y": 0.3834083378,
      "quote": "\u201cWhenever people agree with me I always feel I must be wrong.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.5365238786,
      "y": 0.2138893604,
      "quote": "\u201cI was not a pet, not a doll, not an animal.I was a survivor, and I was strong.I would not be weak, or helpless again I would not, could not be broken. Tamed.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.1786973774,
      "y": 0.2956443131,
      "quote": "\u201cWithout you in my arms, I feel an emptiness in my soul. I find myself searching the crowds for your face - I know it's an impossibility, but I cannot help myself.\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.7876114249,
      "y": 0.6610568762,
      "quote": "\u201cWomen want love to be a novel. Men, a short story.\u201d",
      "author": "Daphne du Maurier"
  },
  {
      "x": 0.3087764978,
      "y": 0.3675449491,
      "quote": "\u201cWhen I do good, I feel good. When I do bad, I feel bad. That's my religion.\u201d",
      "author": "Abraham Lincoln"
  },
  {
      "x": 0.6228271127,
      "y": 0.5852421522,
      "quote": "\u201cOf course motivation is not permanent. But then, neither is bathing; but it is something you should do on a regular basis.\u201d",
      "author": "Zig Ziglar,"
  },
  {
      "x": 0.8726972938,
      "y": 0.4063262939,
      "quote": "\u201cNever miss a good chance to shut up.\u201d",
      "author": "Will Rogers"
  },
  {
      "x": 0.1578020155,
      "y": 0.5080229044,
      "quote": "\u201cIf all the world hated you and believed you wicked, while your own conscience approved of you and absolved you from guilt, you would not be without friends.\u201d",
      "author": "Charlotte Bront\u00c3\u00ab,"
  },
  {
      "x": 0.589255631,
      "y": 0.7872706652,
      "quote": "\u201cI hate men who are afraid of women's strength.\u201d",
      "author": "Ana\u00c3\u00afs Nin,"
  },
  {
      "x": 0.7839559913,
      "y": 0.6801918745,
      "quote": "\u201cNever marry at all, Dorian. Men marry because they are tired, women, because they are curious: both are disappointed.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.4379963875,
      "y": 0.1850036383,
      "quote": "\u201cWell-read people are less likely to be evil.\u201d",
      "author": "Lemony Snicket,"
  },
  {
      "x": 0.4336448908,
      "y": 0.7066655159,
      "quote": "\u201cThere will be a few times in your life when all your instincts will tell you to do something, something that defies logic, upsets your plans, and may seem crazy to others. When that happens, you do it. Listen to your instincts and ignore everything else. Ignore logic, ignore the odds, ignore the complications, and just go for it.\u201d",
      "author": "Judith McNaught,"
  },
  {
      "x": 0.1174250841,
      "y": 0.5697408915,
      "quote": "\u201cI suffer from girlnextdooritis where the guy is friends with you and that's it.\u201d",
      "author": "Taylor Swift"
  },
  {
      "x": 0.7246848941,
      "y": 0.506652832,
      "quote": "\u201cWhat draws people to be friends is that they see the same truth. They share it.\u201d",
      "author": "C. S. Lewis"
  },
  {
      "x": 0.9151653647,
      "y": 0.7135686874,
      "quote": "\u201cLook at everything always as though you were seeing it either for the first or last time: Thus is your time on earth filled with glory.\u201d",
      "author": "Betty Smith,"
  },
  {
      "x": 0.6321307421,
      "y": 0.9197838306,
      "quote": "\u201cBehind this mask there is more than just flesh. Beneath this mask there is an idea... and ideas are bulletproof.\u201d",
      "author": "Alan Moore,"
  },
  {
      "x": 0.3420757651,
      "y": 0.2366089225,
      "quote": "\u201cThe course of true love never did run smooth.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.7952966094,
      "y": 0.5840277672,
      "quote": "\u201cThe best way out is always through.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.6133015752,
      "y": 0.6252766848,
      "quote": "\u201cScience is not only compatible with spirituality; it is a profound source of spirituality.\u201d",
      "author": "Carl Sagan,"
  },
  {
      "x": 0.5532410741,
      "y": 0.9166946411,
      "quote": "\u201cHow long was I asleep?\" she whispered. He didn't respond. \"How long was I asleep?\" she asked again, and noticed a hint of red in his cheeks. \"You were asleep, too?\" \"Until you began drooling on my shoulder.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.5176613331,
      "y": 0.4019980133,
      "quote": "\u201cSometimes, the best way to help someone is just to be near them.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.9092170596,
      "y": 0.5984364748,
      "quote": "\u201cYou believe in a book that has talking animals, wizards, witches, demons, sticks turning into snakes, burning bushes, food falling from the sky, people walking on water, and all sorts of magical, absurd and primitive stories, and you say that we are the ones that need help?\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.2942135334,
      "y": 0.3425910771,
      "quote": "\u201cI am awfully greedy; I want everything from life. I want to be a woman and to be a man, to have many friends and to have loneliness, to work much and write good books, to travel and enjoy myself, to be selfish and to be unselfish\u00e2\u20ac\u00a6 You see, it is difficult to get all which I want. And then when I do not succeed I get mad with anger.\u201d",
      "author": "Simone de Beauvoir"
  },
  {
      "x": 0.8737505078,
      "y": 0.5534037352,
      "quote": "\u201cWhat's up?\" I asked.You tell me,\" he said. \"You were the one about ready to start making out with Adrian.\"It was an experiment,\" I said. \"It was part of my therapy.\"What the hell kind of therapy are you in?\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.3441991806,
      "y": 0.1205944866,
      "quote": "\u201cThis is a new year. A new beginning. And things will change.\u201d",
      "author": "Taylor Swift"
  },
  {
      "x": 0.117759347,
      "y": 0.4068654478,
      "quote": "\u201cDistrict 12: Where you can starve to death in safety.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.61655128,
      "y": 0.6230063438,
      "quote": "\u201cWhy do beautiful songs make you sad?' 'Because they aren't true.' 'Never?' 'Nothing is beautiful and true.\u201d",
      "author": "Jonathan Safran Foer,"
  },
  {
      "x": 0.3266878128,
      "y": 0.5632361174,
      "quote": "\u201cThere must be something in books, something we can\u00e2\u20ac\u2122t imagine, to make a woman stay in a burning house; there must be something there. You don\u00e2\u20ac\u2122t stay for nothing.\u201d",
      "author": "Ray Bradbury,"
  },
  {
      "x": 0.479473114,
      "y": 0.4127743542,
      "quote": "\u201cNow that she had nothing to lose, she was free.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.724796474,
      "y": 0.4126447737,
      "quote": "\u201cLuxury is not a necessity to me, but beautiful and good things are.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.4375350475,
      "y": 0.3279370964,
      "quote": "\u201cIt would seem that Our Lord finds our desires not too strong, but too weak. We are half-hearted creatures, fooling about with drink and sex and ambition when infinite joy is offered us, like an ignorant child who wants to go on making mud pies in a slum because he cannot imagine what is meant by the offer of a holiday at the sea. We are far too easily pleased.\u201d",
      "author": "C.S. Lewis,"
  },
  {
      "x": 0.1292826235,
      "y": 0.3520201445,
      "quote": "\u201cI guess by now I should know enough about loss to realize that you never really stop missing someone-you just learn to live around the huge gaping hole of their absence.\u201d",
      "author": "Alyson Noel,"
  },
  {
      "x": 0.2159816623,
      "y": 0.6927338839,
      "quote": "\u201cWhat's terrible is to pretend that second-rate is first-rate. To pretend that you don't need love when you do; or you like your work when you know quite well you're capable of better.\u201d",
      "author": "Doris Lessing,"
  },
  {
      "x": 0.2242500782,
      "y": 0.5449515581,
      "quote": "\u201cAll thinking men are atheists.\u201d",
      "author": "Ernest Hemingway,"
  },
  {
      "x": 0.2218220234,
      "y": 0.5646206141,
      "quote": "\u201cCourage isn't having the strength to go on - it is going on when you don't have strength.\u201d",
      "author": "Napoleon Bonaparte"
  },
  {
      "x": 0.6895349026,
      "y": 0.5279060602,
      "quote": "\u201cAnti-intellectualism has been a constant thread winding its way through our political and cultural life, nurtured by the false notion that democracy means that 'my ignorance is just as good as your knowledge.'\u201d",
      "author": "Isaac Asimov"
  },
  {
      "x": 0.3316956758,
      "y": 0.3935889006,
      "quote": "\u201cThe sunlight claps the earth, and the moonbeams kiss the sea: what are all these kissings worth, if thou kiss not me?\u201d",
      "author": "Percy Bysshe Shelley"
  },
  {
      "x": 0.8831062913,
      "y": 0.4471231401,
      "quote": "\u201cThe most terrible poverty is loneliness, and the feeling of being unloved.\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.7604429126,
      "y": 0.2342555821,
      "quote": "\u201cThe worst type of crying wasn't the kind everyone could see--the wailing on street corners, the tearing at clothes. No, the worst kind happened when your soul wept and no matter what you did, there was no way to comfort it. A section withered and became a scar on the part of your soul that survived. For people like me and Echo, our souls contained more scar tissue than life.\u201d",
      "author": "Katie McGarry,"
  },
  {
      "x": 0.3898764849,
      "y": 0.2764052749,
      "quote": "\u201cTo survive, you must tell stories.\u201d",
      "author": "Umberto Eco,"
  },
  {
      "x": 0.8456358314,
      "y": 0.3191467226,
      "quote": "\u201cA girl calls and asks, \"Does it hurt very much to die?\"\"Well, sweetheart,\" I tell her, \"yes, but it hurts a lot more to keep living.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.7544177175,
      "y": 0.5631492138,
      "quote": "\u201cHowever many holy words you read, however many you speak, what good will they do you if you do not act on upon them?\u201d",
      "author": "Buddha Siddhartha Guatama Shakyamuni"
  },
  {
      "x": 0.6625573039,
      "y": 0.5579391718,
      "quote": "\u201cHe who knows all the answers has not been asked all the questions.\u201d",
      "author": "Confucius"
  },
  {
      "x": 0.284412384,
      "y": 0.1252503246,
      "quote": "\u201cLet no one ever come to you without leaving better and happier. Be the living expression of God's kindness: kindness in your face, kindness in your eyes, kindness in your smile.\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.5203226805,
      "y": 0.5161209106,
      "quote": "\u201cThe more I read, the more I acquire, the more certain I am that I know nothing.\u201d",
      "author": "Voltaire"
  },
  {
      "x": 0.491465807,
      "y": 0.8380314112,
      "quote": "\u201cYou get what anybody gets - you get a lifetime.\u201d",
      "author": "Neil Gaiman,"
  },
  {
      "x": 0.1460748613,
      "y": 0.5833032131,
      "quote": "\u201cFeminism is the radical notion that women are human beings.\u201d",
      "author": "Cheris Kramarae"
  },
  {
      "x": 0.1274830103,
      "y": 0.5949424505,
      "quote": "\u201cAll human wisdom is contained in these two words - Wait and Hope\u201d",
      "author": "Alexandre Dumas,"
  },
  {
      "x": 0.2313007712,
      "y": 0.5778273344,
      "quote": "\u201cOh, we're playing nice now? Shall we have tea first? Brew up a nice pot of kiss-my-ass?\u201d",
      "author": "Julie Kagawa,"
  },
  {
      "x": 0.8057696223,
      "y": 0.7207148075,
      "quote": "\u201cStop fighting me!\" he said, trying to pull on the arm he held.He was in a precarious position himself, straddling the rail as he tried to lean over far enough to get me and actually hold onto me.\u00e2\u20ac\u0153Let go of me!\u00e2\u20ac\ufffd I yelled back.But he was too strong and managed to haul most of me over the rail, enough so that I wasn\u00e2\u20ac\u2122t in total danger of falling again.See, here\u00e2\u20ac\u2122s the thing. In that moment before I let go, I really had been contemplating my death. I\u00e2\u20ac\u2122d come to terms with it and accepted it. I also, however, had known Dimitri might do something exactly like this. He was just that fast and that good. That was why I was holding my stake in the hand that was dangling free.I looked him in the eye. \"I will always love you.\"Then I plunged the stake into his chest.It wasn\u00e2\u20ac\u2122t as precise a blow as I would have liked, not with the skilled way he was dodging. I struggled to get the stake in deep enough to his heart, unsure if I could do it from this angle. Then, his struggles stopped. His eyes stared at me, stunned, and his lips parted, almost into a smile, albeit a grisly and pained one.\"That\u00e2\u20ac\u2122s what I was supposed to say. . .\u00e2\u20ac\ufffd he gasped out.Those were his last words.\u201d",
      "author": "Richelle Mead,"
  },
  {
      "x": 0.4711601734,
      "y": 0.3980486989,
      "quote": "\u201cNo good deed goes unpunished.\u201d",
      "author": "Oscar Wilde"
  },
  {
      "x": 0.434702754,
      "y": 0.0822392255,
      "quote": "\u201cThe desire to reach for the stars is ambitious. The desire to reach hearts is wise.\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.6410430074,
      "y": 0.9311518669,
      "quote": "\u201cThe things we love destroy us every time, lad. Remember that.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.7426510453,
      "y": 0.4888603985,
      "quote": "\u201cMan is the cruelest animal.\u201d",
      "author": "Friedrich Nietzsche"
  },
  {
      "x": 0.4038812518,
      "y": 0.3831421733,
      "quote": "\u201cAlways be a first rate version of yourself and not a second rate version of someone else.\u201d",
      "author": "Judy Garland"
  },
  {
      "x": 0.513507247,
      "y": 0.4317820966,
      "quote": "\u201cSometimes you lose a battle. But mischief always wins the war\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.7765089869,
      "y": 0.886407733,
      "quote": "\u201cGod alert!\" Blackjack yelled. \"It's the wine dude!Mr. D sighed in exasperation. \"The next person, or horse, who calls me the 'wine dude' will end up in a bottle of Merlot!\u201d",
      "author": "Rick Riordan,"
  },
  {
      "x": 0.6127685308,
      "y": 0.0963580608,
      "quote": "\u201cHumor is reason gone mad.\u201d",
      "author": "Groucho Marx"
  },
  {
      "x": 0.47526896,
      "y": 0.1808758676,
      "quote": "\u201cIt is nothing to die. It is frightful not to live.\u201d",
      "author": "Victor Hugo,"
  },
  {
      "x": 0.6341803074,
      "y": 0.7493870258,
      "quote": "\u201cMaybe this world is another planet\u00e2\u20ac\u2122s hell.\u201d",
      "author": "Aldous Huxley"
  },
  {
      "x": 0.8576187491,
      "y": 0.3730203509,
      "quote": "\u201cSeventeen, eh!\" said Hagrid as he accepted a bucket-sized glass of wine from Fred.\"Six years to the day we met, Harry, d\u00e2\u20ac\u2122yeh remember it?\"\"Vaguely,\" said Harry, grinning up at him. \"Didn\u00e2\u20ac\u2122t you smash down the front door, give Dudley a pig\u00e2\u20ac\u2122s tail, and tell me I was a wizard?\"\"I forge\u00e2\u20ac\u2122 the details,\" Hagrid chortled.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8847445846,
      "y": 0.5593441725,
      "quote": "\u201cScars have the strange power to remind us that our past is real.\u201d",
      "author": "Cormac McCarthy,"
  },
  {
      "x": 0.5406520367,
      "y": 0.1857056022,
      "quote": "\u201cWe learn from failure, not from success!\u201d",
      "author": "Bram Stoker,"
  },
  {
      "x": 0.7639288306,
      "y": 0.4208417833,
      "quote": "\u201cGod does not play dice with the universe; He plays an ineffable game of His own devising, which might be compared, from the perspective of any of the other players [i.e. everybody], to being involved in an obscure and complex variant of poker in a pitch-dark room, with blank cards, for infinite stakes, with a Dealer who won't tell you the rules, and who smiles all the time.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.315053761,
      "y": 0.2317874134,
      "quote": "\u201cMarriage can wait, education cannot.\u201d",
      "author": "Khaled Hosseini,"
  },
  {
      "x": 0.6757569313,
      "y": 0.1289503723,
      "quote": "\u201cWe don\u00e2\u20ac\u2122t need a list of rights and wrongs, tables of dos and don\u00e2\u20ac\u2122ts: we need books, time, and silence. Thou shalt not is soon forgotten, but Once upon a time lasts forever.\u201d",
      "author": "Philip Pullman"
  },
  {
      "x": 0.5082967281,
      "y": 0.161102742,
      "quote": "\u201cThe greatness of a nation and its moral progress can be judged by the way its animals are treated.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.7490597367,
      "y": 0.4714705646,
      "quote": "\u201cThere are much worse games to play.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.8178548217,
      "y": 0.36994192,
      "quote": "\u201cI never forget a face, but in your case I'll be glad to make an exception.\u201d",
      "author": "Groucho Marx"
  },
  {
      "x": 0.1632241011,
      "y": 0.4781293571,
      "quote": "\u201cThis is where it all begins. Everything starts here, today.\u201d",
      "author": "David Nicholls,"
  },
  {
      "x": 0.2028781772,
      "y": 0.5580391884,
      "quote": "\u201cBut until a person can say deeply and honestly, \"I am what I am today because of the choices I made yesterday,\" that person cannot say, \"I choose otherwise.\u201d",
      "author": "Stephen R. Covey,"
  },
  {
      "x": 0.3836221099,
      "y": 0.3586041629,
      "quote": "\u201cI know not all that may be coming, but be it what it will, I'll go to it laughing.\u201d",
      "author": "Herman Melville,"
  },
  {
      "x": 0.4976944923,
      "y": 0.2715480924,
      "quote": "\u201cDo you not see how necessary a world of pains and troubles is to school an intelligence and make it a soul?\u201d",
      "author": "John Keats,"
  },
  {
      "x": 0.67807585,
      "y": 0.6287505627,
      "quote": "\u201cA short story is a different thing altogether \u00e2\u20ac\u201c a short story is like a quick kiss in the dark from a stranger.\u201d",
      "author": "Stephen King,"
  },
  {
      "x": 0.7292849422,
      "y": 0.449883908,
      "quote": "\u201cTo give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.7191116214,
      "y": 0.1512916386,
      "quote": "\u201cThere are perhaps many causes worth dying for, but to me, certainly, there are none worth killing for.\u201d",
      "author": "Albert Dietrich,"
  },
  {
      "x": 0.669629693,
      "y": 0.298427999,
      "quote": "\u201cDon't let the muggles get you down.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.7476409078,
      "y": 0.4734123051,
      "quote": "\u201cHe allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them, but that life obliges them over and over again to give birth to themselves.\u201d",
      "author": "Gabriel Garc\u00c3\u00ada M\u00c3\u00a1rquez,"
  },
  {
      "x": 0.6042699814,
      "y": 0.6541421413,
      "quote": "\u201cNo great mind has ever existed without a touch of madness.\u201d",
      "author": "Aristotle"
  },
  {
      "x": 0.4548793435,
      "y": 0.6501910686,
      "quote": "\u201cThe mountains are calling and I must go.\u201d",
      "author": "John Muir"
  },
  {
      "x": 0.3423616886,
      "y": 0.574627161,
      "quote": "\u201cMy religion is very simple. My religion is kindness.\u201d",
      "author": "Dalai Lama XIV"
  },
  {
      "x": 0.9345033765,
      "y": 0.4265122116,
      "quote": "\u201cFive exclamation marks, the sure sign of an insane mind.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.6640784144,
      "y": 0.260011375,
      "quote": "\u201cShe was a genius of sadness, immersing herself in it, separating its numerous strands, appreciating its subtle nuances. She was a prism through which sadness could be divided into its infinite spectrum.\u201d",
      "author": "Jonathan Safran Foer,"
  },
  {
      "x": 0.6566886306,
      "y": 0.4441232979,
      "quote": "\u201cThere is no such thing as a \"broken family.\" Family is family, and is not determined by marriage certificates, divorce papers, and adoption documents. Families are made in the heart. The only time family becomes null is when those ties in the heart are cut. If you cut those ties, those people are not your family. If you make those ties, those people are your family. And if you hate those ties, those people will still be your family because whatever you hate will always be with you.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.0574872196,
      "y": 0.2968862355,
      "quote": "\u201cYou're something between a dream and a miracle.\u201d",
      "author": "Elizabeth Barrett Browning"
  },
  {
      "x": 0.938729465,
      "y": 0.322345376,
      "quote": "\u201cReading is like thinking, like praying, like talking to a friend, like expressing your ideas, like listening to other people's ideas, like listening to music, like looking at the view, like taking a walk on the beach.\u201d",
      "author": "Roberto Bola\u00c3\u00b1o,"
  },
  {
      "x": 0.2793465257,
      "y": 0.7650300264,
      "quote": "\u201cBut if thought corrupts language, language can also corrupt thought.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.3405361176,
      "y": 0.4146446288,
      "quote": "\u201cInstructions for living a life. Pay attention. Be astonished. Tell about it.\u201d",
      "author": "Mary Oliver"
  },
  {
      "x": 0.109170109,
      "y": 0.6411641836,
      "quote": "\u201cAfter a good dinner one can forgive anybody, even one's own relations.\u201d",
      "author": "Oscar Wilde,"
  },
  {
      "x": 0.6874771118,
      "y": 0.8175834417,
      "quote": "\u201cThe role of a writer is not to say what we can all say, but what we are unable to say.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.54767555,
      "y": 0.3894689679,
      "quote": "\u201cLovers don't finally meet somewhere. They're in each other all along.\u201d",
      "author": "Mawlana Jalal-al-Din Rumi"
  },
  {
      "x": 0.3531165719,
      "y": 0.3691481352,
      "quote": "\u201cFear is a phoenix. You can watch it burn a thousand times and still it will return.\u201d",
      "author": "Leigh Bardugo,"
  },
  {
      "x": 0.3468355536,
      "y": 0.1344578862,
      "quote": "\u201cIt's so much darker when a light goes out than it would have been if it had never shone.\u201d",
      "author": "John Steinbeck,"
  },
  {
      "x": 0.4429790378,
      "y": 0.2394789457,
      "quote": "\u201cMy grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the heck she is.\u201d",
      "author": "Ellen DeGeneres"
  },
  {
      "x": 0.8571171165,
      "y": 0.5363852978,
      "quote": "\u201cThe way to get started is to quit talking and begin doing. \u201d",
      "author": "Walt Disney"
  },
  {
      "x": 0.6806306243,
      "y": 0.1010782719,
      "quote": "\u201cDeath is so terribly final, while life is full of possibilities.\u201d",
      "author": "George R.R. Martin,"
  },
  {
      "x": 0.0959076285,
      "y": 0.3839547336,
      "quote": "\u201cFreedom (n.): To ask nothing. To expect nothing. To depend on nothing.\u201d",
      "author": "Ayn Rand,"
  },
  {
      "x": 0.7403729558,
      "y": 0.6579259634,
      "quote": "\u201cI'm going to keep going until I succeed \u00e2\u20ac\u201d or die. Don't think I don't know how this might end. I've known it for years.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.117511332,
      "y": 0.6393287182,
      "quote": "\u201cI know some who are constantly drunk on books as other men are drunk on whiskey.\u201d",
      "author": "H.L. Mencken"
  },
  {
      "x": 0.6306270361,
      "y": 0.6172770262,
      "quote": "\u201cIf you want a picture of the future, imagine a boot stamping on a human face\u00e2\u20ac\u201dfor ever.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.2476981282,
      "y": 0.1454463899,
      "quote": "\u201cLiterature is a luxury; fiction is a necessity.\u201d",
      "author": "G.K. Chesterton"
  },
  {
      "x": 0.585488081,
      "y": 0.5876522064,
      "quote": "\u201cIf you are a student you should always get a good nights sleep unless you have come to the good part of your book, and then you should stay up all night and let your schoolwork fall by the wayside, a phrase which means 'flunk'.\u201d",
      "author": "Lemony Snicket"
  },
  {
      "x": 0.5762555599,
      "y": 0.2618968785,
      "quote": "\u201cStars, hide your fires; Let not light see my black and deep desires.\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.4677174687,
      "y": 0.7552690506,
      "quote": "\u201cWe are all born sexual creatures,thank God, but it's a pity so many people despise and crush this natural gift.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.5082610846,
      "y": 0.6176326275,
      "quote": "\u201cThere is a saying in Tibetan, 'Tragedy should be utilized as a source of strength.'No matter what sort of difficulties, how painful experience is, if we lose our hope, that's our real disaster.\u201d",
      "author": "Dalai Lama XIV"
  },
  {
      "x": 0.551176846,
      "y": 0.7685872316,
      "quote": "\u201cIt is easy in the world to live after the world's opinion; it is easy in solitude to live after our own; but the great man is he who in the midst of the crowd keeps with perfect sweetness the independence of solitude.\u201d",
      "author": "Ralph Waldo Emerson,"
  },
  {
      "x": 0.3897633553,
      "y": 0.4794666469,
      "quote": "\u201cLife has no remote....get up and change it yourself!\u201d",
      "author": "Mark A. Cooper,"
  },
  {
      "x": 0.4274220467,
      "y": 0.6286922693,
      "quote": "\u201cI want to be the friend you fall hopelessly in love with. The one you take into your arms and into your bed and into the private world you keep trapped in your head. I want to be that kind of friend. The one who will memorize the things you say as well as the shape of your lips when you say them. I want to know every curve, every freckle, every shiver of your body. I want to know where to touch you, I want to know how to touch you. I want to know convince you to design a smile just for me. Yes, I do want to be your friend. I want to be your best friend in the entire world.\u201d",
      "author": "Tahereh Mafi,"
  },
  {
      "x": 0.4171940088,
      "y": 0.4823344052,
      "quote": "\u201cAnd then I felt sad because I realized that once people are broken in certain ways, they can't ever be fixed, and this is something nobody ever tells you when you are young and it never fails to surprise you as you grow older as you see the people in your life break one by one. You wonder when your turn is going to be, or if it's already happened.\u201d",
      "author": "Douglas Coupland,"
  },
  {
      "x": 0.548814714,
      "y": 0.9403847456,
      "quote": "\u201cJane, be still; don't struggle so like a wild, frantic bird, that is rending its own plumage in its desperation.\"\"I am no bird; and no net ensnares me; I am a free human being, with an independent will; which I now exert to leave you.\u201d",
      "author": "Charlotte Bront\u00c3\u00ab ,"
  },
  {
      "x": 0.3125168681,
      "y": 0.2414314747,
      "quote": "\u201cMusic is ... A higher revelation than all Wisdom & Philosophy\u201d",
      "author": "Ludwig van Beethoven"
  },
  {
      "x": 0.5944613814,
      "y": 0.4247052968,
      "quote": "\u201cWhen things break, it's not the actual breaking that prevents them from getting back together again. It's because a little piece gets lost - the two remaining ends couldn't fit together even if they wanted to. The whole shape has changed.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.444280386,
      "y": 0.1615064144,
      "quote": "\u201cTo lose balance sometimes for love is part of living a balancedlife.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.7387263179,
      "y": 0.6869401932,
      "quote": "\u201cDamn, Claire. Warn a guy before you do a face-plant on the floor next time. I could have looked all heroic and caught you or something -Shane\u201d",
      "author": "Rachel Caine,"
  },
  {
      "x": 0.2622492909,
      "y": 0.8006247282,
      "quote": "\u201cWe are always the same age inside. \u201d",
      "author": "Gertrude Stein"
  },
  {
      "x": 0.6881958842,
      "y": 0.353505969,
      "quote": "\u201cMan often becomes what he believes himself to be. If I keep on saying to myself that I cannot do a certain thing, it is possible that I may end by really becoming incapable of doing it. On the contrary, if I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.7320511937,
      "y": 0.2828731835,
      "quote": "\u201cAsk for what you want and be prepared to get it!\u201d",
      "author": "Maya Angelou"
  },
  {
      "x": 0.3956338763,
      "y": 0.5839682817,
      "quote": "\u201cNever leave a friend behind. Friends are all we have to get us through this life--and they are the only things from this world that we could hope to see in the next.\u201d",
      "author": "Dean Koontz,"
  },
  {
      "x": 0.5637897253,
      "y": 0.1153130382,
      "quote": "\u201cIt is not the length of life, but the depth.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.3170753717,
      "y": 0.4201036394,
      "quote": "\u201cWhen I'm good, I'm very good, but when I'm bad, I'm better. \u201d",
      "author": "Mae West"
  },
  {
      "x": 0.4382868409,
      "y": 0.6886233091,
      "quote": "\u201cOthers have seen what is and asked why. I have seen what could be and asked why not. \u201d",
      "author": "Pablo Picasso,"
  },
  {
      "x": 0.5926058888,
      "y": 0.6770361662,
      "quote": "\u201cThe feelings that hurt most, the emotions that sting most, are those that are absurd - The longing for impossible things, precisely because they are impossible; nostalgia for what never was; the desire for what could have been; regret over not being someone else; dissatisfaction with the world\u00e2\u20ac\u2122s existence. All these half-tones of the soul\u00e2\u20ac\u2122s consciousness create in us a painful landscape, an eternal sunset of what we are.\u201d",
      "author": "Fernando Pessoa"
  },
  {
      "x": 0.1696272194,
      "y": 0.222591579,
      "quote": "\u201cI think and think and think, I\u00e2\u20ac\u02dcve thought myself out of happiness one million times, but never once into it.\u201d",
      "author": "Jonathan Safran Foer"
  },
  {
      "x": 0.7406194806,
      "y": 0.3164701164,
      "quote": "\u201cHolding people away from you, and denying yourself love, that doesn't make you strong. if anything, it makes you weaker. Because you're doing it out of fear.\u201d",
      "author": "Sarah Dessen,"
  },
  {
      "x": 0.3239459991,
      "y": 0.1501358747,
      "quote": "\u201cYou live like this, sheltered, in a delicate world, and you believe you are living. Then you read a book\u00e2\u20ac\u00a6 or you take a trip\u00e2\u20ac\u00a6 and you discover that you are not living, that you are hibernating. The symptoms of hibernating are easily detectable: first, restlessness. The second symptom (when hibernating becomes dangerous and might degenerate into death): absence of pleasure. That is all. It appears like an innocuous illness. Monotony, boredom, death. Millions live like this (or die like this) without knowing it. They work in offices. They drive a car. They picnic with their families. They raise children. And then some shock treatment takes place, a person, a book, a song, and it awakens them and saves them from death. Some never awaken.\u201d",
      "author": "Ana\u00c3\u00afs Nin,"
  },
  {
      "x": 0.5076082349,
      "y": 0.7388213873,
      "quote": "\u201cSo we shall let the reader answer this question for himself: who is the happier man, he who has braved the storm of life and lived or he who has stayed securely on shore and merely existed?\u201d",
      "author": "Hunter S. Thompson"
  },
  {
      "x": 0.3819537759,
      "y": 0.3545676172,
      "quote": "\u201cThere is nothing more deceptive than an obvious fact.\u201d",
      "author": "Arthur Conan Doyle,"
  },
  {
      "x": 0.5768822432,
      "y": 0.5618823767,
      "quote": "\u201cThe easy confidence with which I know another man's religion is folly teaches me to suspect that my own is also.\u201d",
      "author": "Mark Twain"
  },
  {
      "x": 0.7422911525,
      "y": 0.4833904803,
      "quote": "\u201cYour assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in.\u201d",
      "author": "Isaac Asimov"
  },
  {
      "x": 0.082541734,
      "y": 0.6129748821,
      "quote": "\u201cCan you be a girl for a few seconds?\"\"I'm always a girl\" I frown.\"You know what I mean. Like a silly, annoying girl\"I twirl my hair around my finger. \"Kay.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.3564165831,
      "y": 0.2067651153,
      "quote": "\u201cSometimes even to live is an act of courage.\u201d",
      "author": "Lucius Annaeus Seneca"
  },
  {
      "x": 0.6497497559,
      "y": 0.4949133098,
      "quote": "\u201cA concept is a brick. It can be used to build a courthouse of reason. Or it can be thrown through the window.\u201d",
      "author": "Gilles Deleuze,"
  },
  {
      "x": 0.7719500661,
      "y": 0.4297199547,
      "quote": "\u201cI don't suffer from my insanity -- I enjoy every minute of it.\u201d",
      "author": "Sherrilyn Kenyon,"
  },
  {
      "x": 0.6169655323,
      "y": 0.259260565,
      "quote": "\u201cIt was a bright cold day in April, and the clocks were striking thirteen.\u201d",
      "author": "George Orwell,"
  },
  {
      "x": 0.4531940818,
      "y": 0.5757199526,
      "quote": "\u201cHelp others without any reason and give without the expectation of receiving anything in return.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.6174139977,
      "y": 0.3180986047,
      "quote": "\u201cFairy tales do not tell children the dragons exist. Children already know that dragons exist. Fairy tales tell children the dragons can be killed.\u201d",
      "author": "G.K. Chesterton"
  },
  {
      "x": 0.6284969449,
      "y": 0.0887306035,
      "quote": "\u201cOne should always be drunk. That's all that matters...But with what? With wine, with poetry, or with virtue, as you chose. But get drunk.\u201d",
      "author": "Charles Baudelaire,"
  },
  {
      "x": 0.7867812514,
      "y": 0.4720490873,
      "quote": "\u201cIt is better to offer no excuse than a bad one.\u201d",
      "author": "George Washington"
  },
  {
      "x": 0.1974930167,
      "y": 0.5033169985,
      "quote": "\u201cThrow your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.\u201d",
      "author": "Anais Nin"
  },
  {
      "x": 0.4984523654,
      "y": 0.5622413158,
      "quote": "\u201cLife doesn't imitate art, it imitates bad television.\u201d",
      "author": "Woody Allen"
  },
  {
      "x": 0.5446715355,
      "y": 0.5030092001,
      "quote": "\u201cReal generosity towards the future lies in giving all to the present.\u201d",
      "author": "Albert Camus,"
  },
  {
      "x": 0.8441268802,
      "y": 0.386025548,
      "quote": "\u201cMan, when you lose your laugh you lose your footing.\u201d",
      "author": "Ken Kesey,"
  },
  {
      "x": 0.3963791728,
      "y": 0.5740942955,
      "quote": "\u201cThe most authentic thing about us is our capacity to create, to overcome, to endure, to transform, to love and to be greater than our suffering.\u201d",
      "author": "Ben Okri"
  },
  {
      "x": 0.5451892614,
      "y": 0.7059491873,
      "quote": "\u201cWe rip out so much of ourselves to be cured of things faster than we should that we go bankrupt by the age of thirty and have less to offer each time we start with someone new. But to feel nothing so as not to feel anything - what a waste!\u201d",
      "author": "Andre Aciman,"
  },
  {
      "x": 0.6209886074,
      "y": 0.7557226419,
      "quote": "\u201cI just want to be wonderful.\u201d",
      "author": "Marilyn Monroe"
  },
  {
      "x": 0.7879841924,
      "y": 0.3278189898,
      "quote": "\u201cAn intellectual? Yes. And never deny it. An intellectual is someone whose mind watches itself. I like this, because I am happy to be both halves, the watcher and the watched. \"Can they be brought together?\" This is a practical question. We must get down to it. \"I despise intelligence\" really means: \"I cannot bear my doubts.\u201d",
      "author": "Albert Camus"
  },
  {
      "x": 0.4936690927,
      "y": 0.7973309755,
      "quote": "\u201cI have accepted fear as part of life \u00e2\u20ac\u201c specifically the fear of change... I have gone ahead despite the pounding in the heart that says: turn back....\u201d",
      "author": "Erica Jong"
  },
  {
      "x": 0.428545475,
      "y": 0.6939835548,
      "quote": "\u201cIdeally, what should be said to every child, repeatedly, throughout his or her school life is something like this: 'You are in the process of being indoctrinated. We have not yet evolved a system of education that is not a system of indoctrination. We are sorry, but it is the best we can do. What you are being taught here is an amalgam of current prejudice and the choices of this particular culture. The slightest look at history will show how impermanent these must be. You are being taught by people who have been able to accommodate themselves to a regime of thought laid down by their predecessors. It is a self-perpetuating system. Those of you who are more robust and individual than others will be encouraged to leave and find ways of educating yourself \u00e2\u20ac\u201d educating your own judgements. Those that stay must remember, always, and all the time, that they are being moulded and patterned to fit into the narrow and particular needs of this particular society.\u201d",
      "author": "Doris Lessing,"
  },
  {
      "x": 0.4918587208,
      "y": 0.6843954325,
      "quote": "\u201cIf I should have a daughter\u00e2\u20ac\u00a6\u00e2\u20ac\u0153Instead of \u00e2\u20ac\u0153Mom\u00e2\u20ac\ufffd, she\u00e2\u20ac\u2122s gonna call me \u00e2\u20ac\u0153Point B.\u00e2\u20ac\ufffd Because that way, she knows that no matter what happens, at least she can always find her way to me. And I\u00e2\u20ac\u2122m going to paint the solar system on the back of her hands so that she has to learn the entire universe before she can say \u00e2\u20ac\u0153Oh, I know that like the back of my hand.\u00e2\u20ac\ufffdShe\u00e2\u20ac\u2122s gonna learn that this life will hit you, hard, in the face, wait for you to get back up so it can kick you in the stomach. But getting the wind knocked out of you is the only way to remind your lungs how much they like the taste of air. There is hurt, here, that cannot be fixed by band-aids or poetry, so the first time she realizes that Wonder-woman isn\u00e2\u20ac\u2122t coming, I\u00e2\u20ac\u2122ll make sure she knows she doesn\u00e2\u20ac\u2122t have to wear the cape all by herself. Because no matter how wide you stretch your fingers, your hands will always be too small to catch all the pain you want to heal. Believe me, I\u00e2\u20ac\u2122ve tried.And \u00e2\u20ac\u0153Baby,\u00e2\u20ac\ufffd I\u00e2\u20ac\u2122ll tell her \u00e2\u20ac\u0153don\u00e2\u20ac\u2122t keep your nose up in the air like that, I know that trick, you\u00e2\u20ac\u2122re just smelling for smoke so you can follow the trail back to a burning house so you can find the boy who lost everything in the fire to see if you can save him. Or else, find the boy who lit the fire in the first place to see if you can change him.\u00e2\u20ac\ufffdBut I know that she will anyway, so instead I\u00e2\u20ac\u2122ll always keep an extra supply of chocolate and rain boats nearby, \u00e2\u20ac\u02dccause there is no heartbreak that chocolate can\u00e2\u20ac\u2122t fix. Okay, there\u00e2\u20ac\u2122s a few heartbreaks chocolate can\u00e2\u20ac\u2122t fix. But that\u00e2\u20ac\u2122s what the rain boots are for, because rain will wash away everything if you let it.I want her to see the world through the underside of a glass bottom boat, to look through a magnifying glass at the galaxies that exist on the pin point of a human mind. Because that\u00e2\u20ac\u2122s how my mom taught me. That there\u00e2\u20ac\u2122ll be days like this, \u00e2\u20ac\u0153There\u00e2\u20ac\u2122ll be days like this my momma said\u00e2\u20ac\ufffd when you open your hands to catch and wind up with only blisters and bruises. When you step out of the phone booth and try to fly and the very people you wanna save are the ones standing on your cape. When your boots will fill with rain and you\u00e2\u20ac\u2122ll be up to your knees in disappointment and those are the very days you have all the more reason to say \u00e2\u20ac\u0153thank you,\u00e2\u20ac\ufffd \u00e2\u20ac\u02dccause there is nothing more beautiful than the way the ocean refuses to stop kissing the shoreline no matter how many times it\u00e2\u20ac\u2122s sent away.You will put the \u00e2\u20ac\u0153wind\u00e2\u20ac\ufffd in win some lose some, you will put the \u00e2\u20ac\u0153star\u00e2\u20ac\ufffd in starting over and over, and no matter how many land mines erupt in a minute be sure your mind lands on the beauty of this funny place called life.And yes, on a scale from one to over-trusting I am pretty damn naive but I want her to know that this world is made out of sugar. It can crumble so easily but don\u00e2\u20ac\u2122t be afraid to stick your tongue out and taste it.\u00e2\u20ac\u0153Baby,\u00e2\u20ac\ufffd I\u00e2\u20ac\u2122ll tell her \u00e2\u20ac\u0153remember your mama is a worrier but your papa is a warrior and you are the girl with small hands and big eyes who never stops asking for more.\u00e2\u20ac\ufffdRemember that good things come in threes and so do bad things and always apologize when you\u00e2\u20ac\u2122ve done something wrong but don\u00e2\u20ac\u2122t you ever apologize for the way your eyes refuse to stop shining.Your voice is small but don\u00e2\u20ac\u2122t ever stop singing and when they finally hand you heartbreak, slip hatred and war under your doorstep and hand you hand-outs on street corners of cynicism and defeat, you tell them that they really ought to meet your mother.\u201d",
      "author": "Sarah Kay"
  },
  {
      "x": 0.5182873607,
      "y": 0.5298523903,
      "quote": "\u201cLord, what fools these mortals be!\u201d",
      "author": "William Shakespeare,"
  },
  {
      "x": 0.6333881617,
      "y": 0.8237433434,
      "quote": "\u201cIf we listened to our intellect we'd never have a love affair. We'd never have a friendship. We'd never go in business because we'd be cynical: \"It's gonna go wrong.\" Or \"She's going to hurt me.\" Or,\"I've had a couple of bad love affairs, so therefore . . .\" Well, that's nonsense. You're going to miss life. You've got to jump off the cliff all the time and build your wings on the way down.\u201d",
      "author": "Ray Bradbury"
  },
  {
      "x": 0.5504119992,
      "y": 0.7551813126,
      "quote": "\u201cWhen someone you love dies, and you're not expecting it, you don't lose her all at once; you lose her in pieces over a long time\u00e2\u20ac\u201dthe way the mail stops coming, and her scent fades from the pillows and even from the clothes in her closet and drawers. Gradually, you accumulate the parts of her that are gone. Just when the day comes\u00e2\u20ac\u201dwhen there's a particular missing part that overwhelms you with the feeling that she's gone, forever\u00e2\u20ac\u201dthere comes another day, and another specifically missing part.\u201d",
      "author": "John Irving,"
  },
  {
      "x": 0.3783624172,
      "y": 0.6084160805,
      "quote": "\u201cWhat is that feeling when you're driving away from people and they recede on the plain till you see their specks dispersing? - it's the too-huge world vaulting us, and it's good-bye. But we lean forward to the next crazy venture beneath the skies.\u201d",
      "author": "Jack Kerouac,"
  },
  {
      "x": 0.550812006,
      "y": 0.9417122602,
      "quote": "\u201cI address you all tonight for who you truly are: wizards, mermaids, travelers, adventurers, and magicians. You are the true dreamers.\u201d",
      "author": "Brian Selznick,"
  },
  {
      "x": 0.6262796521,
      "y": 0.2420693934,
      "quote": "\u201cHang on, did you just call me Angel?\" I asked.\"If I did?\"\"I don't like it.\"He grinned. \"It stays, Angel.\u201d",
      "author": "Becca Fitzpatrick,"
  },
  {
      "x": 0.4830011725,
      "y": 0.8878034353,
      "quote": "\u201cThat's the thing about girls. Every time they do something pretty, even if they're not much to look at, or even if they're sort of stupid, you fall in love with them, and then you never know where the hell you are. Girls. Jesus Christ. They can drive you crazy. They really can.\u201d",
      "author": "J.D. Salinger,"
  },
  {
      "x": 0.0,
      "y": 0.3146962523,
      "quote": "\u201cYou think the dead we loved ever truly leave us? You think that we don't recall them more clearly in times of great trouble?\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.5397725105,
      "y": 0.3348840177,
      "quote": "\u201cI don't care,\" Clary said. \"He'd do it for me. Tell me he wouldn't. If I were missing-\" \"He'd burn the whole world down till he could dig you out of the ashes. I know,\" Alec said.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.5294750333,
      "y": 0.0773131698,
      "quote": "\u201cBelieve in your infinite potential. Your only limitations are those you set upon yourself.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.5991329551,
      "y": 0.5862079859,
      "quote": "\u201cYou're a guardian angel now.\" I was still too much in awe to wrap my mind around it, but at the same time I felt amazement, curiosity...happiness.\"I'm your guardian angel,\" he said.\"I get my very own guardian angel? What, exactly, is your job description?\"\"Guard your body.\" His smile tipped higher. \"I take my job seriously, which means I'm going to need to get acquainted with the subject matter on a personal level.\u201d",
      "author": "Becca Fitzpatrick,"
  },
  {
      "x": 0.3005538583,
      "y": 0.8343914747,
      "quote": "\u201cSometimes it takes a good fall to really know where you stand\u201d",
      "author": "Hayley Williams"
  },
  {
      "x": 0.6575444341,
      "y": 0.1559050977,
      "quote": "\u201cThe only person you are destined to become is the person you decide to be.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.6107429862,
      "y": 0.1392511725,
      "quote": "\u201cIf you want to be happy, be.\u201d",
      "author": "Tolstoy Leo"
  },
  {
      "x": 0.1745725274,
      "y": 0.2903743982,
      "quote": "\u201cThe unhappiest people in this world, are those who care the most about what other people think.\u201d",
      "author": "C. JoyBell C."
  },
  {
      "x": 0.5302044749,
      "y": 0.8713399172,
      "quote": "\u201cI love you as certain dark things are loved, secretly, between the shadow and the soul.\u201d",
      "author": "Pablo Neruda,"
  },
  {
      "x": 0.7308281064,
      "y": 0.4924387038,
      "quote": "\u201cUnfortunately, the clock is ticking, the hours are going by. The past increases, the future recedes. Possibilities decreasing, regrets mounting.\u201d",
      "author": "Haruki Murakami,"
  },
  {
      "x": 0.8276389241,
      "y": 0.4299882948,
      "quote": "\u201cThe thing I realize is, that it's not what you take, it's what you leave.\u201d",
      "author": "Jennifer Niven,"
  },
  {
      "x": 0.1062024832,
      "y": 0.6922057867,
      "quote": "\u201cPoetry is what gets lost in translation.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.5745247006,
      "y": 0.6528123617,
      "quote": "\u201cIf Peeta and I were both to die, or they thought we were....My fingers fumble with the pouch on my belt, freeing it. Peeta sees it and his hand clamps on my wrist. \"No, I won't let you.\" \"Trust me,\" I whisper. He holds my gaze for a long moment then lets go. I loosen the top of the pouch and pour a few spoonfuls of berries into his palm. Then I fill my own. \"On the count of three?\" Peeta leans down and kisses me once, very gently. \"The count of three,\" he says. We stand, our backs pressed together, our empty hands locked tight. \"Hold them out. I want everyone to see,\" he says. I spread out my fingers, and the dark berries glisten in the sun. I give Peeta's hand one last squeeze as a signal, as a good-bye, and we begin counting. \"One.\" Maybe I'm wrong. \"Two.\" Maybe they don't care if we both die. \"Three!\" It's too late to change my mind. I lift my hand to my mouth taking one last look at the world. The berries have just passed my lips when the trumpets begin to blare. The frantic voice of Claudius Templesmith shouts above them. \"Stop! Stop! Ladies and gentlemen, I am pleased to present the victors of the 74th Hunger Games, Katniss Everdeen and Peeta Mellark! I give you - the tributes of District 12!\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.419144094,
      "y": 0.7671670914,
      "quote": "\u201cIt crosses my mind that Cinna's calm and normal demeanor masks a complete madman.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.4154158235,
      "y": 0.7713205814,
      "quote": "\u201cDo not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each.\u201d",
      "author": "Plato"
  },
  {
      "x": 0.7814084888,
      "y": 0.5410197973,
      "quote": "\u201cWhen you consider things like the stars, our affairs don't seem to matter very much, do they?\u201d",
      "author": "Virginia Woolf"
  },
  {
      "x": 0.4420887828,
      "y": 0.1708304584,
      "quote": "\u201cMaybe there were people who lived those lives. Maybe this girl was one of them. But what about the rest of us? What about the nobodies and the nothings, the invisible girls? We learn to hold our heads as if we wear crowns. We learn to wring magic from the ordinary. That was how you survived when you weren\u00e2\u20ac\u2122t chosen, when there was no royal blood in your veins. When the world owed you nothing, you demanded something of it anyway.\u201d",
      "author": "Leigh Bardugo,"
  },
  {
      "x": 0.6984838843,
      "y": 0.2387233675,
      "quote": "\u201cI will love you as a thief loves a gallery and as a crow loves a murder, as a cloud loves bats and as a range loves braes. I will love you as misfortune loves orphans, as fire loves innocence and as justice loves to sit and watch while everything goes wrong. I will love you as a battlefield loves young men and as peppermints love your allergies, and I will love you as the banana peel loves the shoe of a man who was just struck by a shingle falling off a house. I will love you as a volunteer fire department loves rushing into burning buildings and as burning buildings love to chase them back out, and as a parachute loves to leave a blimp and as a blimp operator loves to chase after it.I will love you as a dagger loves a certain person\u00e2\u20ac\u2122s back, and as a certain person loves to wear dagger proof tunics, and as a dagger proof tunic loves to go to a certain dry cleaning facility, and how a certain employee of a dry cleaning facility loves to stay up late with a pair of binoculars, watching a dagger factory for hours in the hopes of catching a burglar, and as a burglar loves sneaking up behind people with binoculars, suddenly realizing that she has left her dagger at home. I will love you as a drawer loves a secret compartment, and as a secret compartment loves a secret, and as a secret loves to make a person gasp, and as a gasping person loves a glass of brandy to calm their nerves, and as a glass of brandy loves to shatter on the floor, and as the noise of glass shattering loves to make someone else gasp, and as someone else gasping loves a nearby desk to lean against, even if leaning against it presses a lever that loves to open a drawer and reveal a secret compartment. I will love you until all such compartments are discovered and opened, and until all the secrets have gone gasping into the world. I will love you until all the codes and hearts have been broken and until every anagram and egg has been unscrambled.I will love you until every fire is extinguised and until every home is rebuilt from the handsomest and most susceptible of woods, and until every criminal is handcuffed by the laziest of policemen. I will love until M. hates snakes and J. hates grammar, and I will love you until C. realizes S. is not worthy of his love and N. realizes he is not worthy of the V. I will love you until the bird hates a nest and the worm hates an apple, and until the apple hates a tree and the tree hates a nest, and until a bird hates a tree and an apple hates a nest, although honestly I cannot imagine that last occurrence no matter how hard I try. I will love you as we grow older, which has just happened, and has happened again, and happened several days ago, continuously, and then several years before that, and will continue to happen as the spinning hands of every clock and the flipping pages of every calendar mark the passage of time, except for the clocks that people have forgotten to wind and the calendars that people have forgotten to place in a highly visible area. I will love you as we find ourselves farther and farther from one another, where we once we were so close that we could slip the curved straw, and the long, slender spoon, between our lips and fingers respectively.I will love you until the chances of us running into one another slip from slim to zero, and until your face is fogged by distant memory, and your memory faced by distant fog, and your fog memorized by a distant face, and your distance distanced by the memorized memory of a foggy fog. I will love you no matter where you go and who you see, no matter where you avoid and who you don\u00e2\u20ac\u2122t see, and no matter who sees you avoiding where you go. I will love you no matter what happens to you, and no matter how I discover what happens to you, and no matter what happens to me as I discover this, and now matter how I am discovered after what happens to me as I am discovering this.\u201d",
      "author": "Lemony Snicket"
  },
  {
      "x": 0.5191603303,
      "y": 0.0340068117,
      "quote": "\u201cThis is how it works. I love the people in my life, and I do for my friends whatever they need me to do for them, again and again, as many times as is necessary. For example, in your case you always forgot who you are and how much you're loved. So what I do for you as your friend is remind you who you are and tell you how much I love you. And this isn't any kind of burden for me, because I love who you are very much. Every time I remind you, I get to remember with you, which is my pleasure.\u201d",
      "author": "James Lecesne"
  },
  {
      "x": 0.3504384756,
      "y": 0.5328581333,
      "quote": "\u201cI didn\u00e2\u20ac\u2122t go to religion to make me happy. I always knew a bottle of Port would do that. If you want a religion to make you feel really comfortable, I certainly don\u00e2\u20ac\u2122t recommend Christianity.\u201d",
      "author": "C. S. Lewis"
  },
  {
      "x": 0.2226626277,
      "y": 0.8173884153,
      "quote": "\u201cThe starting point of all achievement is DESIRE. Keep this constantly in mind. Weak desire brings weak results, just as a small fire makes a small amount of heat.\u201d",
      "author": "Napoleon Hill,"
  },
  {
      "x": 0.7022408843,
      "y": 0.1118085235,
      "quote": "\u201cListen with curiosity. Speak with honesty. Act with integrity. The greatest problem with communication is we don\u00e2\u20ac\u2122t listen to understand. We listen to reply. When we listen with curiosity, we don\u00e2\u20ac\u2122t listen with the intent to reply. We listen for what\u00e2\u20ac\u2122s behind the words.\u201d",
      "author": "Roy T. Bennett,"
  },
  {
      "x": 0.3183907866,
      "y": 0.8686850071,
      "quote": "\u201cHappiness is not the absence of problems, it's the ability to deal with them.\u201d",
      "author": "Steve Maraboli,"
  },
  {
      "x": 0.1102548838,
      "y": 0.6698981524,
      "quote": "\u201cWhen he died, all things soft and beautiful and bright would be buried with him.\u201d",
      "author": "Madeline Miller,"
  },
  {
      "x": 0.1283324957,
      "y": 0.3476731777,
      "quote": "\u201cHe is half of my soul, as the poets say.\u201d",
      "author": "Madeline Miller,"
  },
  {
      "x": 0.6187610626,
      "y": 0.9828115702,
      "quote": "\u201cWhen we are children we seldom think of the future. This innocence leaves us free to enjoy ourselves as few adults can. The day we fret about the future is the day we leave our childhood behind.\u201d",
      "author": "Patrick Rothfuss,"
  },
  {
      "x": 0.5719656944,
      "y": 0.3961887658,
      "quote": "\u201cSpring is the time of plans and projects.\u201d",
      "author": "Leo Tolstoy,"
  },
  {
      "x": 0.1926771104,
      "y": 0.4061847031,
      "quote": "\u201cAnd then I am going to rattle the stars.\u201d",
      "author": "Sarah J. Maas,"
  },
  {
      "x": 0.3841018677,
      "y": 0.8184357882,
      "quote": "\u201cI've begun to realize that you can listen to silence and learn from it. It has a quality and a dimension all its own.\u201d",
      "author": "Chaim Potok,"
  },
  {
      "x": 0.4215481281,
      "y": 0.8069667816,
      "quote": "\u201cBut-\" Maia, still looking at Alec and Magnus, broke off and rasied her eyebrows. Simon turned to see what she was looking at - and stared.Alec had his arms around Magnus and was kissing him full on the mouth. Magnus, who appeared to be in a state of shock, stood frozen. Several groups of people - Shadowhunters and Downworlders alike - were staring and whispering. Glancing to the side, Simon saw the Lightwoods, their eyes widen, gaping at the display. Maryse had her hand over her mouth.Maia looked perplexed. \"Wait a second,\" she said. \"Do we all have to do that, too?\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.7136560082,
      "y": 0.4313298166,
      "quote": "\u201cPeople, generally, suck.\u201d",
      "author": "Christopher Moore,"
  },
  {
      "x": 0.4038562775,
      "y": 0.6683117151,
      "quote": "\u201cPeace cannot be kept by force; it can only be achieved by understanding.\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.6037600636,
      "y": 0.474652499,
      "quote": "\u201cYou\u00e2\u20ac\u2122re in a car with a beautiful boy, and he won\u00e2\u20ac\u2122t tell you that he loves you, but he loves you. And you feel like you\u00e2\u20ac\u2122ve done something terrible, like robbed a liquor store, or swallowed pills, or shoveled yourself a grave in the dirt, and you\u00e2\u20ac\u2122re tired. You\u00e2\u20ac\u2122re in a car with a beautiful boy, and you\u00e2\u20ac\u2122re trying not to tell him that you love him, and you\u00e2\u20ac\u2122re trying to choke down the feeling, and you\u00e2\u20ac\u2122re trembling, but he reaches over and he touches you, like a prayer for which no words exist, and you feel your heart taking root in your body, like you\u00e2\u20ac\u2122ve discovered something you didn\u00e2\u20ac\u2122t even have a name for.\u201d",
      "author": "richard siken"
  },
  {
      "x": 0.1142936945,
      "y": 0.3675579131,
      "quote": "\u201cWhat else? She is so beautiful. You don\u00e2\u20ac\u2122t get tired of looking at her. You never worry if she is smarter than you: You know she is. She is funny without ever being mean. I love her. I am so lucky to love her, Van Houten. You don\u00e2\u20ac\u2122t get to choose if you get hurt in this world, old man, but you do have some say in who hurts you. I like my choices. I hope she likes hers.\u201d",
      "author": "John Green,"
  },
  {
      "x": 0.8775317073,
      "y": 0.1982667744,
      "quote": "\u201cPeople think it must be fun to be a super genius, but they don't realize how hard it is to put up with all the idiots in the world.\u201d",
      "author": "Bill Watterson,"
  },
  {
      "x": 0.2739540935,
      "y": 0.4857582152,
      "quote": "\u201cWe need to talk. All of us About what we're going to do now.\"\"I was going to watch Project Runway.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4049295187,
      "y": 0.8537766933,
      "quote": "\u201cIf you win, you need not have to explain...If you lose, you should not be there to explain!\u201d",
      "author": "Adolf Hitler"
  },
  {
      "x": 0.6037106514,
      "y": 0.7483286858,
      "quote": "\u201cMy only love sprung from my only hate!Too early seen unknown, and known too late!Prodigious birth of love it is to me,That I must love a loathed enemy.\u201d",
      "author": "William Shakespeare"
  },
  {
      "x": 0.5552591681,
      "y": 0.9335106611,
      "quote": "\u201cGrown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to them\u201d",
      "author": "Antoine de Saint-Exup\u00c3\u00a9ry,"
  },
  {
      "x": 0.4847405553,
      "y": 0.3717956543,
      "quote": "\u201cThis is what we call love. When you are loved, you can do anything in creation. When you are loved, there's no need at all to understand what's happening, because everything happens within you.\u201d",
      "author": "Paulo Coelho,"
  },
  {
      "x": 0.2328535914,
      "y": 0.328535527,
      "quote": "\u201cBlack hair and blue eyes are my favorite combination.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.6116517782,
      "y": 0.6139029264,
      "quote": "\u201cThere is no point treating a depressed person as though she were just feeling sad, saying, 'There now, hang on, you'll get over it.' Sadness is more or less like a head cold- with patience, it passes. Depression is like cancer.\u201d",
      "author": "Barbara Kingsolver,"
  },
  {
      "x": 0.5825989842,
      "y": 0.9239599705,
      "quote": "\u201cSebastian just smiled. \u00e2\u20ac\u0153I could hear your heart beating,\u00e2\u20ac\ufffd he said softly. \u00e2\u20ac\u0153When you were watching me with Valentine. Did it bother you?\u00e2\u20ac\ufffd\u00e2\u20ac\u0153That you seem to be dating my dad?\u00e2\u20ac\ufffd Jace shrugged. \"You\u00e2\u20ac\u2122re a little young for him, to be honest.\u00e2\u20ac\ufffd\u00e2\u20ac\u0153What?\u00e2\u20ac\ufffd For the first time since Jace had met him, Sebastian seemed flabbergasted.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.4122379422,
      "y": 0.7016755342,
      "quote": "\u201cYour emotions are the slaves to your thoughts, and you are the slave to your emotions.\u201d",
      "author": "Elizabeth Gilbert,"
  },
  {
      "x": 0.2046507597,
      "y": 0.2818083763,
      "quote": "\u201cI don't hate you.. I just don't like that you exist\u201d",
      "author": "Gena Showalter,"
  },
  {
      "x": 0.6163266897,
      "y": 0.3185787201,
      "quote": "\u201cI don't want to be married just to be married. I can't think of anything lonelier than spending the rest of my life with someone I can't talk to, or worse, someone I can't be silent with.\u201d",
      "author": "Mary Ann Shaffer,"
  },
  {
      "x": 0.5155928135,
      "y": 0.5276736021,
      "quote": "\u201cI figured all your classes were stuff like Slaughter 101 and Beheading for Beginners.\"Jace flipped a page. \"Very funny, Fray.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.2334341407,
      "y": 0.4474177063,
      "quote": "\u201cI just want you to know that you\u00e2\u20ac\u2122re very special\u00e2\u20ac\u00a6 and the only reason I\u00e2\u20ac\u2122m telling you is that I don\u00e2\u20ac\u2122t know if anyone else ever has.\u201d",
      "author": "Stephen Chbosky,"
  },
  {
      "x": 0.6154988408,
      "y": 0.8900468349,
      "quote": "\u201cPoetry is what happens when nothing else can.\u201d",
      "author": "Charles Bukowski"
  },
  {
      "x": 0.2108897567,
      "y": 0.8235955238,
      "quote": "\u201cA trap is only a trap if you don't know about it. If you know about it, it's a challenge.\u201d",
      "author": "China Mi\u00c3\u00a9ville,"
  },
  {
      "x": 0.5820643306,
      "y": 0.9200576544,
      "quote": "\u201cWe live as we dream--alone....\u201d",
      "author": "Joseph Conrad,"
  },
  {
      "x": 0.4827989936,
      "y": 0.7576801777,
      "quote": "\u201cNo one is useless in this world who lightens the burdens of another.\u201d",
      "author": "Charles Dickens"
  },
  {
      "x": 0.6422693729,
      "y": 0.3619326055,
      "quote": "\u201cMoths,\" repeats Will. \"You're afraid of moths?\" \"Not just a cloud of moths,\" she says, \"like...a swarm of them. Everywhere. All those wings and legs and...\" She shudders and shakes her head.\"Terrifying,\" Will says with mock seriousness. \"That's my girl. Tough as cotton balls.\"\"Oh, Shut up.\u201d",
      "author": "Veronica Roth,"
  },
  {
      "x": 0.4698164463,
      "y": 0.4756819904,
      "quote": "\u201cThe soul is healed by being with children.\u201d",
      "author": "Fyodor Dostoevsky"
  },
  {
      "x": 0.4021538496,
      "y": 0.5168977976,
      "quote": "\u201cClary felt suddenly annoyed. \"When the self-congratulatory part of the evening is over, maybe we could get back to saving my best friend from being exsanguinated to death?\"\"Exsanguinated,\" said Jace, impressed. \"That's a big word.\"\"And you're a big-\"\"Tsk tsk,\" he interupted. \"No swearing in church.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.140521735,
      "y": 0.2426028252,
      "quote": null,
      "author": null
  },
  {
      "x": 0.1902085543,
      "y": 0.4049377739,
      "quote": "\u201cLaugh, even when you feel too sick or too worn out or tired. Smile, even when you're trying not to cry and the tears are blurring your vision. Sing, even when people stare at you and tell you your voice is crappy. Trust, even when your heart begs you not to. Twirl, even when your mind makes no sense of what you see. Frolick, even when you are made fun of. Kiss, even when others are watching. Sleep, even when you're afraid of what the dreams might bring. Run, even when it feels like you can't run any more.And, always, remember, even when the memories pinch your heart. Because the pain of all your experience is what makes you the person you are now. And without your experience---you are an empty page, a blank notebook, a missing lyric. What makes you brave is your willingness to live through your terrible life and hold your head up high the next day. So don't live life in fear. Because you are stronger now, after all the crap has happened, than you ever were back before it started.\u201d",
      "author": "Alysha Speer"
  },
  {
      "x": 0.3673802018,
      "y": 0.5824636221,
      "quote": "\u201cIf everybody minded their own business, the world would go around a great deal faster than it does.\u201d",
      "author": "Lewis Caroll,"
  },
  {
      "x": 0.4248735905,
      "y": 0.4670810401,
      "quote": "\u201cIf you don't go after what you want, you'll never have it. If you don't ask, the answer is always no. If you don't step forward, you're always in the same place.\u201d",
      "author": "Nora Roberts"
  },
  {
      "x": 0.5086342096,
      "y": 0.8039562702,
      "quote": "\u201cTiger got to hunt, bird got to fly;Man got to sit and wonder 'why, why, why?'Tiger got to sleep, bird got to land;Man got to tell himself he understand.\u201d",
      "author": "Kurt Vonnegut,"
  },
  {
      "x": 0.5589632988,
      "y": 0.7823837996,
      "quote": "\u201cThat's what fiction is for. It's for getting at the truth when the truth isn't sufficient for the truth.\u201d",
      "author": "Tim O'Brien"
  },
  {
      "x": 0.4284293652,
      "y": 0.1509354562,
      "quote": "\u201cIf we have no peace, it is because we have forgotten that we belong to each other.\u201d",
      "author": "Mother Teresa"
  },
  {
      "x": 0.3677268624,
      "y": 0.5362741947,
      "quote": "\u201cIn times of grief and sorrow I will hold you and rock you and take your grief and make it my own. When you cry I cry and when you hurt I hurt. And together we will try to hold back the floods to tears and despair and make it through the potholed street of life\u201d",
      "author": "Nicholas Sparks,"
  },
  {
      "x": 0.2592471838,
      "y": 0.5386357307,
      "quote": "\u201cEach night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.\u201d",
      "author": "Mahatma Gandhi"
  },
  {
      "x": 0.4671745896,
      "y": 0.1898040175,
      "quote": "\u201cYou know it's never fifty-fifty in a marriage. It's always seventy-thirty, or sixty-forty. Someone falls in love first. Someone puts someone else up on a pedestal. Someone works very hard to keep things rolling smoothly; someone else sails along for the ride.\u201d",
      "author": "Jodi Picoult,"
  },
  {
      "x": 0.4759079814,
      "y": 0.5005731583,
      "quote": "\u201cThe bird, the pin, the song, the berries, the watch, the cracker, the dress that burst into flames. I am the mockingjay. The one that survived despite the Capitol's plans. The symbol of the rebellion.\u201d",
      "author": "Suzanne Collins,"
  },
  {
      "x": 0.7965288758,
      "y": 0.9096779823,
      "quote": "\u201cDare to live the life you have dreamed for yourself. Go forward and make your dreams come true.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.3649802208,
      "y": 0.0709336698,
      "quote": "\u201cI hope you find someone you can't live without.I really do. And I hope you never have to know what it's like to have to try and live without them.\u201d",
      "author": "Kiera Cass,"
  },
  {
      "x": 0.6928586364,
      "y": 0.6709660292,
      "quote": "\u201cDemons run when a good man goes to warNight will fall and drown the sunWhen a good man goes to warFriendship dies and true love liesNight will fall and the dark will riseWhen a good man goes to warDemons run, but count the costThe battle's won, but the child is lost\u201d",
      "author": "Steven Moffat"
  },
  {
      "x": 0.3482851386,
      "y": 0.502756834,
      "quote": "\u201cIf you try to fail, and succeed, which have you done?\u201d",
      "author": "George Carlin"
  },
  {
      "x": 0.5198892355,
      "y": 0.565585494,
      "quote": "\u201cListen to them, the children of the night. What music they make!\u201d",
      "author": "Bram Stoker"
  },
  {
      "x": 0.8299568295,
      "y": 0.2718759775,
      "quote": "\u201cHello, Harry\" said George, beaming at him. \"We thought we heard your dulcet tones.\"\"You don't want to bottle up your anger like that, Harry, let it all out,\" said Fred, also beaming. \"There might be a couple of people fifty miles away who didn't hear you.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8113470674,
      "y": 0.8531215191,
      "quote": "\u201cThe grand essentials to happiness in this life are something to do, something to love, and something to hope for.\u201d",
      "author": "George Washington Burnap,"
  },
  {
      "x": 0.4585288167,
      "y": 0.5210015774,
      "quote": "\u201cWe are all born mad. Some remain so.\u201d",
      "author": "Samuel Beckett"
  },
  {
      "x": 0.6408338547,
      "y": 0.7791221142,
      "quote": "\u201cWhatever you do, you need courage. Whatever course you decide upon, there is always someone to tell you that you are wrong. There are always difficulties arising that tempt you to believe your critics are right. To map out a course of action and follow it to an end requires some of the same courage that a soldier needs. Peace has its victories, but it takes brave men and women to win them.\u201d",
      "author": "Ralph Waldo Emerson"
  },
  {
      "x": 0.5106498003,
      "y": 0.8046809435,
      "quote": "\u201cIf my doctor told me I had only six minutes to live, I wouldn't brood. I'd type a little faster.\u201d",
      "author": "Isaac Asimov"
  },
  {
      "x": 0.2372011542,
      "y": 0.5331177711,
      "quote": "\u201cHalf the world is composed of people who have something to say and can't, and the other half who have nothing to say and keep on saying it.\u201d",
      "author": "Robert Frost"
  },
  {
      "x": 0.5586087108,
      "y": 0.069369182,
      "quote": "\u201cBut Dumbledore says he doesn't care what they do as long as they don't take him off the Chocolate Frog cards.\u201d",
      "author": "J.K. Rowling,"
  },
  {
      "x": 0.8904893994,
      "y": 0.5252056122,
      "quote": "\u201cIt's so strange how life works: You want something and you wait and wait and feel like it's taking forever to come. Then it happens and it's over and all you want to do is curl back up in that moment before things changed.\u201d",
      "author": "Lauren Oliver,"
  },
  {
      "x": 0.6676874757,
      "y": 0.2545015216,
      "quote": "\u201cIf he loved with all the powers of his puny being, he couldn't love as much in eighty years as I could in a day.\u201d",
      "author": "Emily Bront\u00c3\u00ab,"
  },
  {
      "x": 0.2738601565,
      "y": 0.3011290133,
      "quote": "\u201cYes, we praise women over 40 for a multitude of reasons. Unfortunately, it's not reciprocal. For every stunning, smart, well-coiffed, hot woman over 40, there is a bald, paunchy relic in yellow pants making a fool of himself with some 22-year old waitress. Ladies, I apologize. For all those men who say, \"Why buy the cow when you can get the milk for free?\", here's an update for you. Nowadays 80% of women are against marriage. Why? Because women realize it's not worth buying an entire pig just to get a little sausage!\u201d",
      "author": "Frank Kaiser"
  },
  {
      "x": 0.6555433869,
      "y": 0.0697471648,
      "quote": "\u201cSee, the problem is that God gives men a brain and a penis, and only enough blood to run one at a time.\u201d",
      "author": "Robin  Williams"
  },
  {
      "x": 0.5849835873,
      "y": 0.6311095953,
      "quote": "\u201cA question that sometimes drives me hazy: am I or are the others crazy?\u201d",
      "author": "Albert Einstein"
  },
  {
      "x": 0.1049847007,
      "y": 0.6685236692,
      "quote": "\u201cThe worst thing about new books is that they keep us from reading the old ones.\u201d",
      "author": "Joseph Joubert"
  },
  {
      "x": 0.3453148603,
      "y": 0.4453446567,
      "quote": "\u201cNone of us knows what might happen even the next minute, yet still we go forward. Because we trust. Because we have faith.\u201d",
      "author": "Paulo Coelho"
  },
  {
      "x": 0.159044534,
      "y": 0.3885373473,
      "quote": "\u201cDreams are the touchstones of our characters.\u201d",
      "author": "Henry David Thoreau"
  },
  {
      "x": 0.6553614736,
      "y": 0.8334214687,
      "quote": "\u201cThe past beats inside me like a second heart.\u201d",
      "author": "John Banville,"
  },
  {
      "x": 0.2253941894,
      "y": 0.5938197374,
      "quote": "\u201cThe VoiceThere is a voice inside of youThat whispers all day long,\"I feel this is right for me,I know that this is wrong.\"No teacher, preacher, parent, friendOr wise man can decideWhat's right for you--just listen toThe voice that speaks inside.\u201d",
      "author": "Shel Silverstein"
  },
  {
      "x": 0.4523717761,
      "y": 0.4115130007,
      "quote": "\u201cIt is often in the darkest skies that we see the brightest stars.\u201d",
      "author": "Richard Evans"
  },
  {
      "x": 0.2722508311,
      "y": 0.4925564826,
      "quote": "\u201cif you love two people at the same time, choose the second. Because if you really loved the first one, you wouldn't have fallen for the second.\u201d",
      "author": "Johnny Depp"
  },
  {
      "x": 0.423437655,
      "y": 0.1530475616,
      "quote": "\u201cNo matter how plain a woman may be, if truth and honesty are written across her face, she will be beautiful.\u201d",
      "author": "Eleanor Roosevelt"
  },
  {
      "x": 0.2248137593,
      "y": 0.4862849414,
      "quote": "\u201cAll right,\" said Susan. \"I'm not stupid. You're saying humans need... fantasies to make life bearable.\"REALLY? AS IF IT WAS SOME KIND OF PINK PILL? NO. HUMANS NEED FANTASY TO BE HUMAN. TO BE THE PLACE WHERE THE FALLING ANGEL MEETS THE RISING APE.\"Tooth fairies? Hogfathers? Little\u00e2\u20ac\u201d\"YES. AS PRACTICE. YOU HAVE TO START OUT LEARNING TO BELIEVE THE LITTLE LIES.\"So we can believe the big ones?\"YES. JUSTICE. MERCY. DUTY. THAT SORT OF THING.\"They're not the same at all!\"YOU THINK SO? THEN TAKE THE UNIVERSE AND GRIND IT DOWN TO THE FINEST POWDER AND SIEVE IT THROUGH THE FINEST SIEVE AND THEN SHOW ME ONE ATOM OF JUSTICE, ONE MOLECULE OF MERCY. AND YET\u00e2\u20ac\u201dDeath waved a hand. AND YET YOU ACT AS IF THERE IS SOME IDEAL ORDER IN THE WORLD, AS IF THERE IS SOME...SOME RIGHTNESS IN THE UNIVERSE BY WHICH IT MAY BE JUDGED.\"Yes, but people have got to believe that, or what's the point\u00e2\u20ac\u201d\"MY POINT EXACTLY.\u201d",
      "author": "Terry Pratchett,"
  },
  {
      "x": 0.4718555808,
      "y": 0.3454184532,
      "quote": "\u201cMy wish is that you may be loved to the point of madness.\u201d",
      "author": "Andr\u00c3\u00a9 Breton,"
  },
  {
      "x": 0.5935693383,
      "y": 0.5097537041,
      "quote": "\u201cIn the end that was the choice you made, and it doesn't matter how hard it was to make it. It matters that you did.\u201d",
      "author": "Cassandra Clare,"
  },
  {
      "x": 0.1044923961,
      "y": 0.5980017185,
      "quote": "\u201cThe difference between sex and love is that sex relieves tension and love causes it.\u201d",
      "author": "Woody Allen"
  },
  {
      "x": 0.6604712009,
      "y": 0.6377395391,
      "quote": "\u201cBe steady and well-ordered in your life so that you can be fierce and original in your work.\u201d",
      "author": "Gustave Flaubert"
  },
  {
      "x": 0.5449454784,
      "y": 0.4275746644,
      "quote": "\u201csex is the consolation you have when you can't have love\u201d",
      "author": "Gabriel Garc\u00c3\u00ada M\u00c3\u00a1rquez"
  },
  {
      "x": 0.6501941681,
      "y": 0.2548179924,
      "quote": "\u201cWhatever you can do or dream you can, begin it.Boldness has genius, power and magic in it!\u201d",
      "author": "John Anster,"
  },
  {
      "x": 0.4753335118,
      "y": 0.1543972045,
      "quote": "\u201cI am a part of all that I have met.\u201d",
      "author": "Alfred Tennyson,"
  },
  {
      "x": 0.4750659466,
      "y": 0.2692692578,
      "quote": "\u201cToday is the sort of day where the sun only comes up to humiliate you.\u201d",
      "author": "Chuck Palahniuk,"
  },
  {
      "x": 0.2910634279,
      "y": 0.9005849361,
      "quote": "\u201cI sought to hear the voice of God and climbed the topmost steeple, but God declared: \"Go down again - I dwell among the people.\u201d",
      "author": "John Henry Newman"
  },
  {
      "x": 0.1265020967,
      "y": 0.329418987,
      "quote": "\u201cStepping onto a brand-new path is difficult, but not more difficult than remaining in a situation, which is not nurturing to the whole woman.\u201d",
      "author": "Maya Angelou"
  }
]
let heart = [
  {
      "x": 0.4477810651,
      "y": 0.7
  },
  {
      "x": 0.4093195266,
      "y": 0.6627118644
  },
  {
      "x": 0.3708579882,
      "y": 0.6228813559
  },
  {
      "x": 0.3353550296,
      "y": 0.5855932203
  },
  {
      "x": 0.2976331361,
      "y": 0.5466101695
  },
  {
      "x": 0.2665680473,
      "y": 0.5084745763
  },
  {
      "x": 0.2377218935,
      "y": 0.4686440678
  },
  {
      "x": 0.2133136095,
      "y": 0.4245762712
  },
  {
      "x": 0.2,
      "y": 0.3711864407
  },
  {
      "x": 0.2044378698,
      "y": 0.3144067797
  },
  {
      "x": 0.2266272189,
      "y": 0.2559322034
  },
  {
      "x": 0.2643491124,
      "y": 0.2169491525
  },
  {
      "x": 0.3227810651,
      "y": 0.2
  },
  {
      "x": 0.3715976331,
      "y": 0.2118644068
  },
  {
      "x": 0.4130177515,
      "y": 0.2423728814
  },
  {
      "x": 0.4403846154,
      "y": 0.2771186441
  },
  {
      "x": 0.4514792899,
      "y": 0.2966101695
  },
  {
      "x": 0.4647928994,
      "y": 0.2728813559
  },
  {
      "x": 0.4936390533,
      "y": 0.2389830508
  },
  {
      "x": 0.5269230769,
      "y": 0.2161016949
  },
  {
      "x": 0.5661242604,
      "y": 0.2050847458
  },
  {
      "x": 0.6045857988,
      "y": 0.2076271186
  },
  {
      "x": 0.6400887574,
      "y": 0.2279661017
  },
  {
      "x": 0.6652366864,
      "y": 0.2533898305
  },
  {
      "x": 0.6852071006,
      "y": 0.2983050847
  },
  {
      "x": 0.7,
      "y": 0.3525423729
  },
  {
      "x": 0.6933431953,
      "y": 0.3966101695
  },
  {
      "x": 0.6815088757,
      "y": 0.4347457627
  },
  {
      "x": 0.6615384615,
      "y": 0.4669491525
  },
  {
      "x": 0.6415680473,
      "y": 0.4957627119
  },
  {
      "x": 0.6178994083,
      "y": 0.5237288136
  },
  {
      "x": 0.5905325444,
      "y": 0.556779661
  },
  {
      "x": 0.5624260355,
      "y": 0.5847457627
  },
  {
      "x": 0.5387573964,
      "y": 0.6084745763
  },
  {
      "x": 0.5158284024,
      "y": 0.6313559322
  },
  {
      "x": 0.4906804734,
      "y": 0.6559322034
  },
  {
      "x": 0.4721893491,
      "y": 0.6754237288
  },
  {
      "x": 0.4285502959,
      "y": 0.6796610169
  },
  {
      "x": 0.3915680473,
      "y": 0.6406779661
  },
  {
      "x": 0.349408284,
      "y": 0.6025423729
  },
  {
      "x": 0.3131656805,
      "y": 0.5627118644
  },
  {
      "x": 0.2798816568,
      "y": 0.5279661017
  },
  {
      "x": 0.251035503,
      "y": 0.4889830508
  },
  {
      "x": 0.2236686391,
      "y": 0.4466101695
  },
  {
      "x": 0.2059171598,
      "y": 0.3991525424
  },
  {
      "x": 0.2,
      "y": 0.3372881356
  },
  {
      "x": 0.2118343195,
      "y": 0.2813559322
  },
  {
      "x": 0.2421597633,
      "y": 0.2322033898
  },
  {
      "x": 0.2946745562,
      "y": 0.206779661
  },
  {
      "x": 0.3471893491,
      "y": 0.2050847458
  },
  {
      "x": 0.3937869822,
      "y": 0.2262711864
  },
  {
      "x": 0.425591716,
      "y": 0.2593220339
  },
  {
      "x": 0.4795857988,
      "y": 0.2542372881
  },
  {
      "x": 0.5106508876,
      "y": 0.2220338983
  },
  {
      "x": 0.5446745562,
      "y": 0.206779661
  },
  {
      "x": 0.5875739645,
      "y": 0.2033898305
  },
  {
      "x": 0.625295858,
      "y": 0.2152542373
  },
  {
      "x": 0.6534023669,
      "y": 0.2389830508
  },
  {
      "x": 0.6800295858,
      "y": 0.2745762712
  },
  {
      "x": 0.6970414201,
      "y": 0.3211864407
  },
  {
      "x": 0.6977810651,
      "y": 0.3728813559
  },
  {
      "x": 0.6881656805,
      "y": 0.4152542373
  },
  {
      "x": 0.674112426,
      "y": 0.4525423729
  },
  {
      "x": 0.6526627219,
      "y": 0.4813559322
  },
  {
      "x": 0.6282544379,
      "y": 0.5127118644
  },
  {
      "x": 0.599408284,
      "y": 0.543220339
  },
  {
      "x": 0.5772189349,
      "y": 0.5694915254
  },
  {
      "x": 0.549852071,
      "y": 0.5991525424
  },
  {
      "x": 0.525443787,
      "y": 0.6203389831
  },
  {
      "x": 0.5054733728,
      "y": 0.6449152542
  }
]
// Initialize an empty variable to hold pointsData
let pointsData = [];

// Initialize container in HTML and SVG for data
const container = document.getElementById("embedding-chart");

// Create SVG container
const svg = d3.create("svg").attr("width", width).attr("height", height);
svg
  .append("g")
  .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");

// Append a clipPath element to the SVG
svg.append("defs").append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width - marginLeft - marginRight)
    .attr("height", height - marginTop - marginBottom);

// Append a group element to the SVG and apply the clip path
const chartGroup = svg.append("g")
    .attr("clip-path", "url(#clip)")
    .attr("transform", "translate(" + marginLeft + "," + marginTop + ")");

// Initialise a X axis:
var x = d3.scaleLinear().range([marginLeft, width - marginRight]);
var xAxis = d3.axisBottom().scale(x);
svg
  .append("g")
  .attr("transform", `translate(0, ${height - marginBottom})`)
  .attr("class", "myXaxis");

// Initialize an Y axis
var y = d3.scaleLinear().range([height - marginBottom, marginTop]);
var yAxis = d3.axisLeft().scale(y);
svg
  .append("g")
  .attr("class", "myYaxis")
  .attr("transform", `translate(${marginLeft},0)`);

// Select the buttons
const endAnimationButton = document.getElementById("end");

// Function to update data
function updateData(dataset) {
  pointsData = []; // Reset pointsData
  svg.selectAll("circle").remove(); // Remove old data
  svg.selectAll("path").remove(); // Remove old path
  svg.selectAll("transition").remove(); // Remove old transition
  document.getElementById("delaunay_checkbox").checked = false;
  document.getElementById("voronoi_checkbox").checked = false;

  if (dataset === "noise") {
    for (var i = 0; i < noise.length; i++) {
      let xVal = noise[i]["2d"][0];
      let yVal = noise[i]["2d"][1];
      let pointClass = noise[i]["Index"];
      pointsData.push({ x: xVal, y: yVal, class: pointClass, color: 'blue' });
    }
  }
  else if (dataset === "anchor") {
    for (var i = 0; i < anchor.length; i++) {
      let xVal = anchor[i][0];
      let yVal = anchor[i][1];
      let pointClass = i;

      pointsData.push({ x: xVal, y: yVal, class: pointClass, color: 'blue' });
    }
  }
  else {
    for (var i = 0; i < heart.length; i++) {
        let xVal = heart[i]["x"];
        let yVal = heart[i]["y"];
        let pointClass = quotes.length + i;
        pointsData.push({ x: xVal, y: yVal, class: pointClass, color: 'red' });
        // heart[i]['class'] = quotes.length +i;
        // heart[i]['color'] = 'red';
    }
    for(var i = 0; i < quotes.length; i++) {
      quotes[i]['class'] = i;
      quotes[i]['color'] = 'blue';
    }
  }
  // Find the minimum and maximum of x and y in pointsData
  let xMin = d3.min(pointsData, function (d) {
    return d.x;
  });
  let xMax = d3.max(pointsData, function (d) {
    return d.x;
  });
  let yMin = d3.min(pointsData, function (d) {
    return d.y;
  });
  let yMax = d3.max(pointsData, function (d) {
    return d.y;
  });

  // Scale
  // x-scale
  x.domain([xMin - 1, xMax + 1]);
  svg.selectAll(".myXaxis").transition().duration(3000).call(xAxis);
  // y-scale
  y.domain([yMin - 1, yMax + 1]);
  svg.selectAll(".myYaxis").transition().duration(3000).call(yAxis);

  // Define mouseover and mouseleave functions
function mouseleave(event, d) {
  var element = d3.selectAll(".point.a" + d.class);
  // Hide the tooltip
  d3.select("#tooltip").style("display", "none");
  element.attr("r", 1).attr("fill", "blue");
}

function mouseover(event, d) {
  var element = d3.selectAll(".point.a" + d.class);
  // Get the tooltip element
  var tooltip = d3.select("#tooltip");

  // Set tooltip content and position
  tooltip
    .html("x: " + d.x + "<br>y: " + d.y)
    .style("left", event.pageX + 10 + "px")
    .style("top", event.pageY - 10 + "px")
    .style("display", "block"); // Show the tooltip

  element.attr("r", 3).attr("fill", "#3b3b3b");
}

  if (dataset === "quotes"){
    chartGroup.append("g")
    .selectAll("circle")
    .data(quotes)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 1)
    .attr("fill", (d) => d.color)
    .attr("class", function (d) {
      return "point a" + d.class;
    });
  }
  // Add points
  chartGroup
    .append("g")
    .selectAll("circle")
    .data(pointsData)
    .enter()
    .append("circle")
    .attr("cx", (d) => x(d.x))
    .attr("cy", (d) => y(d.y))
    .attr("r", 3)
    .attr("fill", (d) => d.color)
    .attr("class", function (d) {
      return "point a" + d.class;
    });

  // Create a line using curveCardinalClosed to go through all the circles
  var path = chartGroup
    .append("path")
    .attr("class", "curve-line")
    .datum(pointsData)
    .attr(
      "d",
      d3
        .line()
        .x(function (d) {
          return x(d.x);
        })
        .y(function (d) {
          return y(d.y);
        })
        .curve(d3.curveCardinalClosed)
    )
    .attr("fill", "none")
    .attr("stroke-width", 2)
    .attr("stroke", "#777777");

  // Create a repeating animation for the line
  const length = path.node().getTotalLength();
  function repeat() {
    path
      .attr("stroke-dasharray", length + " " + length)
      .attr("stroke-dashoffset", length)
      .transition()
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0)
      .duration(4000)
      .on("end", () => setTimeout(repeat, 1000));
  }

  repeat();
  let isEnded = false;

  // End animation button
  document.getElementById("end").addEventListener("click", function () {
    if (!isEnded) {
      // Jump to the end of the transition
      path
        .interrupt()
        .attr("stroke-dasharray", length + "," + length)
        .attr("stroke-dashoffset", 0); // Draw all paths immediately
      isEnded = true;
    }
  });
  // Concat quotes and hearts 
  if(dataset === 'quotes'){
    pointsData = quotes.concat(heart);
  }
  // Create Delaunay triangles
  const delaunay = d3.Delaunay.from(
    pointsData,
    (d) => x(d.x),
    (d) => y(d.y)
  );

  // Create voronoi cells
  const voronoi = delaunay.voronoi([
    marginLeft,
    marginTop,
    width - marginRight,
    height - marginBottom,
  ]);
  // console.log(voronoi);

  // Append Delaunay triangles
  chartGroup
    .append("g")
    .attr("class", "delaunay-triangles")
    .selectAll("path")
    .data(delaunay.trianglePolygons())
    .enter()
    .append("path")
    .attr("d", (d) => `M${d.join("L")}Z`)
    .attr("fill", "none")
    .attr("stroke", "gray")
    .attr("stroke-width", 0.5)
    .attr("visibility", "hidden");

  // Add an event listener to the checkbox to listen for changes
  document
  .getElementById("delaunay_checkbox")
  .addEventListener("change", function () {
    if (this.checked) {
      d3
        .selectAll(".delaunay-triangles path")
        .attr("visibility", "visible"); // Change visibility to visible
    } else {
      d3
        .selectAll(".delaunay-triangles path")
        .attr("visibility", "hidden");
    }
  });


  // Append Voronoi cells
  chartGroup
    .append("g")
    .attr("class", "voronoi-cells")
    .selectAll("path")
    .data(pointsData)
    .enter()
    .append("path")
    .attr("d", (d, i) => voronoi.renderCell(i))
    .attr("fill", "none")
    .attr("stroke", "#191970")
    .style("pointer-events", "all")
    .attr("stroke-width", 0.7)
    .on("mouseover", mouseover)
    .attr("visibility", "hidden")
    .on("mouseleave", mouseleave);

  document
    .getElementById("voronoi_checkbox")
    .addEventListener("change", function () {
      // resetZoom();
      if (this.checked) {
        d3.selectAll(".voronoi-cells path").attr("visibility", "visible");
      } else {
        d3.selectAll(".voronoi-cells path").attr("visibility", "hidden");
      }
    });

  document.getElementById("clear").addEventListener("click", function () {
    svg.select(".curve-line").remove();
   
  });
  // Create a zoom handler
  const zoomHandler = d3
    .zoom()
    .scaleExtent([0.5, 10]) // set the range of allowed zoom scale
    .on("zoom", zoomed); // call zoomed function on zoom event

  // Apply zoom handler to SVG container
  svg.call(zoomHandler);

  // Function to handle zooming
  function zoomed(event) {
    // Get current transform state
    svg.select(".curve-line").remove();
    // d3.selectAll(".voronoi-cells path").attr("visibility", "hidden");
    d3.selectAll(".delaunauy-triangles path").attr("visibility", "hidden");

    const { transform } = event;

    // Update axes based on current transform
    svg.select(".myXaxis").call(xAxis.scale(transform.rescaleX(x)));
    svg.select(".myYaxis").call(yAxis.scale(transform.rescaleY(y)));

    // Update points and Voronoi cells based on current transform
    svg
      .selectAll(".point")
      .attr("cx", (d) => transform.applyX(x(d.x)))
      .attr("cy", (d) => transform.applyY(y(d.y)));

    
    // Update Delaunay triangles based on current transform
    svg.selectAll(".delaunay-triangles path").attr("d", function(d) {
      const transformedPoints = d.map((point) => transform.apply(point));
      return "M" + transformedPoints.join("L") + "Z";
    });

    // Update Voronoi cells based on current transform
    svg.selectAll(".voronoi-cells path").attr("d", function(d, i) {
      const cell = voronoi.cellPolygon(i);
      const transformedPoints = cell.map(point => transform.apply(point));
      return "M" + transformedPoints.join("L") + "Z";
    });
}

  // Function to reset zoom
  function resetZoom() {
    svg.transition().duration(0).call(zoomHandler.transform, d3.zoomIdentity);
  }
  document.getElementById("reset_zoom").addEventListener("click", resetZoom);
}

updateData("anchor");

// Append the SVG element to the container
container.appendChild(svg.node());