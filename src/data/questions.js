import md5 from 'crypto-js/md5'

export const categories = {
    GENERIC: 'GENERIC',
    THOUGHTFUL: 'THOUGHTFUL',
    SEXY: 'SEXY',
    EDGY: 'EDGY',
    SAD: 'SAD',
    OTHER: 'OTHER'
}

const questionsSansIDs = [
    {
    text: "10 years ago, where did you want to be in 10 years?",
    category: categories.GENERIC
    },
    {
    text: "After you poop, on average, how many times do you have to wipe before you're done?",
    category: categories.GENERIC
    },
    {
    text: "Are yelling fights in relationships more typical/inevitable, or terrible/avoidable?",
    category: categories.GENERIC
    },
    {
    text: "Are you more concerned with improving the world or improving yourself?",
    category: categories.GENERIC
    },
    {
    text: "Can someone both be a kind person and also hold the exact opposite of your political views?",
    category: categories.GENERIC
    },
    {
    text: "Can you make your ears roar/rumble by contracting that one muscle inside your head?",
    category: categories.GENERIC
    },
    {
    text: "Could you have a serious relationship with someone who expressed that they thought they were unworthy of the relationship?",
    category: categories.GENERIC
    },
    {
    text: "Do you currently follow the same faith tradition of your parents?",
    category: categories.GENERIC
    },
    {
    text: "Do you own any cryptocurrency? (Bitcoin, ethereum, litecoin, etc...)",
    category: categories.GENERIC
    },
    {
    text: "Do you remember learning how to read?",
    category: categories.GENERIC
    },
    {
    text: "Do you wipe your butt primarily while sitting or standing?",
    category: categories.GENERIC
    },
    {
    text: "Does a straw have one hole or two holes?",
    category: categories.GENERIC
    },
    {
    text: "Does astrology hold predictive power?",
    category: categories.GENERIC
    },
    {
    text: "Have you been loved enough?",
    category: categories.GENERIC
    },
    {
    text: "Have you ever been arrested? If not, how close have you come?",
    category: categories.GENERIC
    },
    {
    text: "Have you ever dated someone who you felt was below your standards?",
    category: categories.GENERIC
    },
    {
    text: "Have you ever gotten a rash from poison ivy?",
    category: categories.GENERIC
    },
    {
    text: "Have you ever had (what you consider to be) a spiritual experience?",
    category: categories.GENERIC
    },
    {
    text: "Have you ever seen a message broadcast in a public place along the lines of \"You are beautiful!\" or \"You are worthwhile!\" or \"Things will get better!\" that made you feel better about yourself?",
    category: categories.GENERIC
    },
    {
    text: "Have you ever thrown up inside a car?",
    category: categories.GENERIC
    },
    {
    text: "Have you tried psychedelics?",
    category: categories.GENERIC
    },
    {
    text: "How boring are you?",
    category: categories.GENERIC
    },
    {
    text: "How do you feel about being naked in front of friends?",
    category: categories.GENERIC
    },
    {
    text: "If the people in the room were arranged on a spectrum from least to most attractive, who would be just below you and who would be just above?",
    category: categories.GENERIC
    },
    {
    text: "If there were a way to painlessly and permanently alter the thoughts of a person you know, who and what would you change?",
    category: categories.GENERIC
    },
    {
    text: "If you could ask every single person in the world one question, what would you ask?",
    category: categories.GENERIC
    },
    {
    text: "If you could have one but not the other, would you rather love someone or be loved by someone?",
    category: categories.GENERIC
    },
    {
    text: "If you died and got to be reborn right now, in the same city, you would choose to be born a man or woman?",
    category: categories.GENERIC
    },
    {
    text: "In general, you feel like your destiny is to be more of a hero or sidekick?",
    category: categories.GENERIC
    },
    {
    text: "In the last 10 years, have you ever gone an entire day without putting on any clothes?",
    category: categories.GENERIC
    },
    {
    text: "Is pee stored in the balls?",
    category: categories.GENERIC
    },
    {
    text: "Is success due more to hard work or luck?",
    category: categories.GENERIC
    },
    {
    text: "Should we give a posthumous medal to the guy who killed hitler?",
    category: categories.GENERIC
    },
    {
    text: "What about your past are you most ashamed of?",
    category: categories.GENERIC
    },
    {
    text: "What are the signs that someone really understands you?",
    category: categories.GENERIC
    },
    {
    text: "What groups or communities are you most judged for being a member of?",
    category: categories.GENERIC
    },
    {
    text: "What has been your biggest act of compassion?",
    category: categories.GENERIC
    },
    {
    text: "What is the best advice you've been given, and why did you need it?",
    category: categories.GENERIC
    },
    {
    text: "What is the coolest fact about yourself that few people know?",
    category: categories.GENERIC
    },
    {
    text: "What kind of people do you get along best with?",
    category: categories.GENERIC
    },
    {
    text: "What personality trait are you most proud of?",
    category: categories.GENERIC
    },
    {
    text: "What problems do you see in other people's relationships?",
    category: categories.GENERIC
    },
    {
    text: "What viewpoint is the most difficult for you to empathize with?",
    category: categories.GENERIC
    },
    {
    text: "What was the most significant thing you've ever changed your mind about?",
    category: categories.GENERIC
    },
    {
    text: "What was your embarrassing high school phase?",
    category: categories.GENERIC
    },
    {
    text: "What words or behaviors really offend you?",
    category: categories.GENERIC
    },
    {
    text: "What's the craziest drug experience you've had?",
    category: categories.GENERIC
    },
    {
    text: "What's the worst crime you've committed?",
    category: categories.GENERIC
    },
    {
    text: "When have you been treated differently because of your race?",
    category: categories.GENERIC
    },
    {
    text: "When you feel an emotion, how often does it involve a physical bodily sensation in addition to a mental state?",
    category: categories.GENERIC
    },
    {
    text: "when you make a typo, do you tend to delete the entire word and start over, or backspace exactly to the typo?",
    category: categories.GENERIC
    },
    {
    text: "When your hands are dry, can you make them sweat just by thinking?",
    category: categories.GENERIC
    },
    {
    text: "Which accomplishment are you most proud of?",
    category: categories.GENERIC
    },
    {
    text: "Which group is larger: people who trust you, or people you trust?",
    category: categories.GENERIC
    },
    {
    text: "Which has helped you more in life, your looks or intelligence?",
    category: categories.GENERIC
    },
    {
    text: "Who do you hate most?",
    category: categories.GENERIC
    },
    {
    text: "Who in the room right now do you admire the most?",
    category: categories.GENERIC
    },
    {
    text: "Who in your family do you get along the worst with?",
    category: categories.GENERIC
    },
    {
    text: "Who is the smartest person you personally know?",
    category: categories.GENERIC
    },
    {
    text: "Would you rather be completely unable to sing or swim?",
    category: categories.GENERIC
    },
    {
    text: "Would you rather change genders every time you sneeze, or be unable to tell the difference between babies and muffins?",
    category: categories.GENERIC
    },
    {
    text: "Would you rather double the amount of emotional pain and pleasure you feel on a daily basis, or cut both in half?",
    category: categories.GENERIC
    },
    {
    text: "Would you rather increase the amount that people respect or desire you?",
    category: categories.GENERIC
    },
    {
    text: "Would you rather lose the ability to sing or swear?",
    category: categories.GENERIC
    },
    {
    text: "Would you rather magically gain the ability to fall instantly asleep whenever you want, or wake up easily and full of energy?",
    category: categories.GENERIC
    },
    {
    text: "Would you rather spend the rest of your life with one lover, but no friends; or with many friends, but no lovers?",
    category: categories.GENERIC
    },
    {
    text: "You must visit a museum. Would you rather see an art or a history musem?",
    category: categories.GENERIC
    },



    {
    text: "A dragon demands a sacrifice. Either you can feed him a child, or your society can pool 1 trillion dollars to feed him instead. Would you cast a vote to feed him?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Are there any thoughts so offensive that you would advocate shaming those who think them? (Given that they aren't acting on those thoughts.)",
    category: categories.THOUGHTFUL
    },
    {
    text: "At what age did you first begin experiencing existential or self-aware thoughts?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Do you consider 'being at peace' to be the same thing as 'being happy'?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Do you ever enjoy the experience of emotional pain?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Do you feel 'being beautiful' counts as an unfair advantage in life?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Do you feel like you have conscious control over your beliefs? As in, could you, right now, decide to believe something else if you tried? Which beliefs?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Do you have any political or social opinions that you're generally afraid to express out loud to your peer group?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Given the guarantee that nobody will ask you the question: What is a question that you would refuse to answer?",
    category: categories.THOUGHTFUL
    },
    {
    text: "How do you personally know when something is immoral?",
    category: categories.THOUGHTFUL
    },
    {
    text: "How do your personal morals differ from society's morals?",
    category: categories.THOUGHTFUL
    },
    {
    text: "How much money would be enough for you to kill a bag of seven kittens with a mallet?",
    category: categories.THOUGHTFUL
    },
    {
    text: "If everyone's stats were displayed above their head at all times (intelligence, charisma, dexterity, etc.), would you be treated better or worse?",
    category: categories.THOUGHTFUL
    },
    {
    text: "If some men are doctors, and some doctors are tall, then does it follow that some men are tall?",
    category: categories.THOUGHTFUL
    },
    {
    text: "If you could become agelessly immortal, frozen at your physical prime - but you can only die once every other human is dead - would you?",
    category: categories.THOUGHTFUL
    },
    {
    text: "If you could press a button and get everything you wanted - no more hunger, no more pain (unless you want it), immediate wish fulfillment, immortality, with this power lasting for the rest of your existence - would you do it? Why or why not?",
    category: categories.THOUGHTFUL
    },
    {
    text: "If you could press a button and have everyone on the planet magically swap their physical sex for five years, would you do it and why?",
    category: categories.THOUGHTFUL
    },
    {
    text: "If you could press a button that would automatically erase every single false belief you have, would you do it? Why or why not? What about this experience would be most scary?",
    category: categories.THOUGHTFUL
    },
    {
    text: "If you had to name one thing you want that drives all your other wants, what would it be?",
    category: categories.THOUGHTFUL
    },
    {
    text: "If you press the button, all living humans instantly gain immortality, but lose the ability to have children. Do you press it?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Imagine that all your beliefs about society and identity - gender, politics, yourself, etc. - are completely disproven (by brilliant scientific studies, or loads of evidence). Would you realistically end up changing your mind? If so, what would be the most difficult thing to change your mind about, and why?",
    category: categories.THOUGHTFUL
    },
    {
    text: "In one room, a child is about to die. In the other room, a demon is about to increase unemployment in your country by 1% for 3 years. You can either save the child or kill the demon, but not both. Which do you choose?",
    category: categories.THOUGHTFUL
    },
    {
    text: "In one room, a child is about to die. In the other room, an evil demon is about to revert global ideas about gender roles to those of the 1950s. You can either save the child or kill the demon, but not both. Which do you choose?",
    category: categories.THOUGHTFUL
    },
    {
    text: "In one room, a child is about to die. In the other room, an evil demon is about to set the maximum legal (and enforced) speed limit to 45mph (72 km/h) across the globe. You can either save the child or kill the demon, but not both. Which do you choose?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Is bestiality wrong because animals can't consent to sex?",
    category: categories.THOUGHTFUL
    },
    {
    text: "It is before your birth, and you are standing in front of a vast wall of books. Each book is a character - less so the 'story' of the life, but more their values and traits. What sort of character do you choose to live?",
    category: categories.THOUGHTFUL
    },
    {
    text: "On planet A, everyone's 30% dumber, and you're a genius by comparison. On planet B, everyone's 30% smarter, and you're an idiot by comparison. Which planet would you prefer to live on?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Out of all the beliefs you hold, which will be most likely to be considered barbaric in 100 years?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Over the entire course of recorded human history, on a large abstract scale, are humans in general behaving morally worse or better?",
    category: categories.THOUGHTFUL
    },
    {
    text: "There are two buttons. One button kills a child who sits in the next room. The other button magically prevents anybody from drinking alcohol ever again. Which button do you press?",
    category: categories.THOUGHTFUL
    },
    {
    text: "There is a button before you. If you press it, the entire world loses the 'enchantment' it feels when looking at super beautiful faces. Everyone can still see and recognize faces, but all faces 'feel' equally attractive. Would you press the button?",
    category: categories.THOUGHTFUL
    },
    {
    text: "What do you think enlightenment is? Is it real?",
    category: categories.THOUGHTFUL
    },
    {
    text: "What's the most controversial opinion you hold among your own social group?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Which of your beliefs are you most invested in?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Would you prefer to date someone with 20 IQ points higher or 5 points lower than you?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Would you press a button that doubled your IQ? Why or why not?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Would you support parents genetically modifying their children in order to increase intelligence and attractiveness?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Would you support the ability for to parents genetically modify their children in order to increase intelligence or attractiveness?",
    category: categories.THOUGHTFUL
    },
    {
    text: "You find out your crush messages people more boring/ugly/dumber than you on dating sites. Does this reduce your attraction to them? Why or why not?",
    category: categories.THOUGHTFUL
    },
    {
    text: "You have the option of moving to one of two cities. In Omelas, 99% of people have 10/10 life quality, while the remaining 1% have 0/10 life quality. In Bergeron, everyone has 5/10 life quality. Which city do you move to?",
    category: categories.THOUGHTFUL
    },
    {
    text: "You travel 100 years into the future. Will you discover that you hold a social/moral belief that everyone around you considers outdated and barbaric?",
    category: categories.THOUGHTFUL
    },
    {
    text: "You're in a monogamous relationship. Your partner gets back late and says \"Honey, I just had sex with the new lifelike sex robot.\" Is this cheating?",
    category: categories.THOUGHTFUL
    },
    {
    text: "You've caught a man who knows the location of a bombing to take place tomorrow. What level of torture is permissible to attempt to discover the information?",
    category: categories.THOUGHTFUL
    },
    {
    text: "Your heart is failing and you need a new one. You have the ability to clone yourself, then before clone wakes up, kill him/her and take the heart. Do you do this?",
    category: categories.THOUGHTFUL
    },



    {
    text: "A girl walks by, and a man calls out, \"You look beautiful today!\" Is this catcalling?",
    category: categories.EDGY
    },
    {
    text: "Are all people who support Trump automatically assholes?",
    category: categories.EDGY
    },
    {
    text: "Do women have any systemic privilege due to their gender?",
    category: categories.EDGY
    },
    {
    text: "Do you believe that some viewpoints exist that are so outrageous or offensive that they deserve to be shut down or suppressed?",
    category: categories.EDGY
    },
    {
    text: "Do you feel like it's plausible that 'slutty empowerment' is something men encourage so that women are more likely to say 'yes' to sex with them?",
    category: categories.EDGY
    },
    {
    text: "Given a world where the technology makes it possible: Would you support the ability of a woman to choose to have an abortion because genetic testing has revealed that her fetus will resemble too much a racial group that she dislikes?",
    category: categories.EDGY
    },
    {
    text: "How do you feel about gun control? How do you predict the person nearest you feels about gun control?",
    category: categories.EDGY
    },
    {
    text: "If all sexism were magically and totally eliminated, would gender ratio of all jobs, ideologies, and communities reach 50/50?",
    category: categories.EDGY
    },
    {
    text: "If someone isn't sexually attracted to people of a certain race, is this racist?",
    category: categories.EDGY
    },
    {
    text: "If there were zero social repercussions for saying offensive words, such as racial slurs, would you say them more often? How do you feel about people who answer differently than you?",
    category: categories.EDGY
    },
    {
    text: "If you could push a button and give everyone perfect understanding of what makes a woman attracted to a man, would you?",
    category: categories.EDGY
    },
    {
    text: "If you had to fuck a cow, would you rather it be dead or alive?",
    category: categories.EDGY
    },
    {
    text: "If you had to press a button and eliminate 1 million people from one demographic, which would it be and why?",
    category: categories.EDGY
    },
    {
    text: "If you press the button before you, the top 1% of income earners in the world will be forced to pay 99% of their income to be redistributed equally to everyone else, proportionally according to need. Do you press the button?",
    category: categories.EDGY
    },
    {
    text: "In a world where different ethnicities had strong genetic differences which caused different moral behavior, would racism be okay or still not okay?",
    category: categories.EDGY
    },
    {
    text: "In a world where prostitution becomes totally legal/regulated, should sex workers be allowed to discriminate their customers based on race?",
    category: categories.EDGY
    },
    {
    text: "In general, in your city, who has it worse: men or women?",
    category: categories.EDGY
    },
    {
    text: "Is incest wrong? Should it be illegal?",
    category: categories.EDGY
    },
    {
    text: "Is it more or less traumatic (in the long run) for an attractive older female teacher to have sex with a 14 year old boy student, than an attractive older male teacher to have sex with a 14 year old girl student?",
    category: categories.EDGY
    },
    {
    text: "Is it okay to get aroused in response to fantasies of actions that would result in serious harm to another if done in real life?",
    category: categories.EDGY
    },
    {
    text: "Is male circumcision okay?",
    category: categories.EDGY
    },
    {
    text: "Is sex really about power?",
    category: categories.EDGY
    },
    {
    text: "Regardless of your conscious beliefs or actions - subconsciously, does your gut feel like it's degrading when someone does sex work?",
    category: categories.EDGY
    },
    {
    text: "Two schools are otherwise comparable. At one your child would be the only member of their race, the other is entirely their race. Which school would you send your child to?",
    category: categories.EDGY
    },
    {
    text: "What stereotype is really accurate?",
    category: categories.EDGY
    },
    {
    text: "What's your general opinion of education designed to help men learn how to be more seductive?",
    category: categories.EDGY
    },
    {
    text: "Which political party do you most identify with?",
    category: categories.EDGY
    },
    {
    text: "Would you advocate socially shaming white people who express that they are proud of being white?",
    category: categories.EDGY
    },
    {
    text: "Would you rather be raped or falsely (but convincingly) accused of rape?",
    category: categories.EDGY
    },
    {
    text: "Would you rather have accidentally killed someone, or be a nonoffending pedophile?",
    category: categories.EDGY
    },
    {
    text: "Would you support a system where person's vote was weighted by their average score of testing for several different types of intelligence?",
    category: categories.EDGY
    },



    {
    text: "Do you ever feel guilt or shame for romantically rejecting people who are interested in you?",
    category: categories.SAD
    },
    {
    text: "How do you feel about the fact that you're going to die?",
    category: categories.SAD
    },
    {
    text: "How do you heal from painful experiences? How do you know when you're done healing?",
    category: categories.SAD
    },
    {
    text: "How have you most disappointed your parents?",
    category: categories.SAD
    },
    {
    text: "Imagine everyone you loved died right now. You get to go back in time and talk to one of them before they die. Who would it be, and what would you say?",
    category: categories.SAD
    },
    {
    text: "In what ways do you tend to fail at communication?",
    category: categories.SAD
    },
    {
    text: "In what ways have you been treated unfairly or unequally?",
    category: categories.SAD
    },
    {
    text: "To what extent have you contemplated suicide?",
    category: categories.SAD
    },
    {
    text: "What about yourself have you been trying to fix for a long time?",
    category: categories.SAD
    },
    {
    text: "What are your coping mechanisms for stress?",
    category: categories.SAD
    },
    {
    text: "What do you still owe someone an apology for?",
    category: categories.SAD
    },
    {
    text: "What experience, though difficult or painful, would you recommend to everyone?",
    category: categories.SAD
    },
    {
    text: "What habit do you have that conflicts with your values?",
    category: categories.SAD
    },
    {
    text: "What is your biggest obstacle towards happiness?",
    category: categories.SAD
    },
    {
    text: "What is your greatest insecurity?",
    category: categories.SAD
    },
    {
    text: "What was the single most difficult thing you've ever had to do?",
    category: categories.SAD
    },
    {
    text: "What was your biggest financial mistake?",
    category: categories.SAD
    },
    {
    text: "What would you most like to change about your appearance?",
    category: categories.SAD
    },
    {
    text: "What's the most embarrassed you've ever been?",
    category: categories.SAD
    },
    {
    text: "What's the worst emotional pain you've experienced? What caused it?",
    category: categories.SAD
    },
    {
    text: "What's the worst physical or mental illness you've experienced?",
    category: categories.SAD
    },
    {
    text: "What's the worst physical pain you've experienced?",
    category: categories.SAD
    },
    {
    text: "When was the last time you cried? What was it over?",
    category: categories.SAD
    },
    {
    text: "Who last broke up with you and why?",
    category: categories.SAD
    },
    {
    text: "Would you rather hurt yourself or others?",
    category: categories.SAD
    },



    {
    text: "Assuming everyone you met were interested in having sex with you, what percentage of them would you accept?",
    category: categories.SEXY
    },
    {
    text: "Do any naked pictures of yourself exist? If yes, where are they and who has access to them?",
    category: categories.SEXY
    },
    {
    text: "Do experience the \"porn spiral + regret\"? As in - you open an increasingly weirder series of porn tabs while masturbating, and then after orgasm, immediately panic-close all of them out of shame?",
    category: categories.SEXY
    },
    {
    text: "Have you been involved in an open or polyamorous relationship? If yes with whom, and what were the terms? If not, would you consider it?",
    category: categories.SEXY
    },
    {
    text: "Have you ever been involved in a threesome or more?",
    category: categories.SEXY
    },
    {
    text: "Have you ever had a one night stand?",
    category: categories.SEXY
    },
    {
    text: "Have you ever had sex 3 or more times with someone who never performed oral sex on you?",
    category: categories.SEXY
    },
    {
    text: "Have you masturbated today? When was the last time you masturbated?",
    category: categories.SEXY
    },
    {
    text: "Have you named your genitals?",
    category: categories.SEXY
    },
    {
    text: "How do you feel about anal sex?",
    category: categories.SEXY
    },
    {
    text: "How easy is it for you to have an orgasm?",
    category: categories.SEXY
    },
    {
    text: "If you could press a button and double the sex drive of all women on earth, would you do it?",
    category: categories.SEXY
    },
    {
    text: "If you had to choose one, would you rather double or halve your sex drive?",
    category: categories.SEXY
    },
    {
    text: "If you tried, could you list the names of everyone you've had sex with?",
    category: categories.SEXY
    },
    {
    text: "If you were a sex toy, what sex toy would you be?",
    category: categories.SEXY
    },
    {
    text: "If you woke up to a 10/10 hot stranger of your desired sex performing oral on you (without asking), would you feel positively or negatively?",
    category: categories.SEXY
    },
    {
    text: "In total, have you given or received more oral sex?",
    category: categories.SEXY
    },
    {
    text: "Is there anything which arouses you that you've never admitted to anybody?",
    category: categories.SEXY
    },
    {
    text: "Of the things you've done sexually, what has made you the most uncomfortable?",
    category: categories.SEXY
    },
    {
    text: "What unusual trait do you find most attractive in a romantic partner?",
    category: categories.SEXY
    },
    {
    text: "What was your most disappointing sexual experience?",
    category: categories.SEXY
    },
    {
    text: "What's the wildest/most unusual thing you've ever done in bed?",
    category: categories.SEXY
    },
    {
    text: "What's your relationship to buttplugs?",
    category: categories.SEXY
    },
    {
    text: "When women say 'daddy' in a sexual context, do you find it more creepy or hot?",
    category: categories.SEXY
    },
    {
    text: "Which would have more volume if you liquified and poured it into a glass - your balls or your penis?",
    category: categories.SEXY
    },
    {
    text: "Who in this room would you most like to have sex with?",
    category: categories.SEXY
    },
    {
    text: "Would you ever have sex with someone you're not really that attracted to, if they were down for having sex with you? (given: you're available, you're aroused/ready to be aroused, etc.)",
    category: categories.SEXY
    },
    {
    text: "Would you rather blow your mind or load?",
    category: categories.SEXY
    },
    {
    text: "Would you rather have sex with someone 10 years younger than you or 5 years older?",
    category: categories.SEXY
    },



    {
    text: "You get to pick a number and live that many years, in good physical health. You can't die before, and you can't extend after. How many years do you live?",
    category: categories.OTHER
    },
    {
    text: "In what ways don't you trust yourself?",
    category: categories.OTHER
    },
    {
    text: "What talents have you developed accidentally?",
    category: categories.OTHER
    },
    {
    text: "What would you do if you had Bill Gates' money?",
    category: categories.OTHER
    },
    {
    text: "What do you most admire about the person to your right?",
    category: categories.OTHER
    },
    {
    text: "What aspect about the person to your left, gives you the strongest negative feeling?",
    category: categories.OTHER
    },
    {
    text: "Would you rather eliminate all dogs, or all members of a race? (Must be a major race - races with small populations don't count)",
    category: categories.OTHER
    },
    {
    text: "Do you feel that modern western culture encourages women to overreact or underreact to \"minor\" sexual assaults, such as groping, too-drunk sex, etc.?",
    category: categories.OTHER
    },
    {
    text: "How often does pooping feel great?",
    category: categories.OTHER
    },
    {
    text: "Would you rather a dangerous rapist go free or an innocent man be criminally punished for rape?",
    category: categories.OTHER
    },
    {
    text: "A 14 year old has sex. How large does the age gap have to be between the 14 year old and their partner before the child can no longer meaningfully consent to sex?",
    category: categories.OTHER
    },
    {
    text: "Generally speaking, have jews or black people experienced greater oppression throughout history?",
    category: categories.OTHER
    },
    {
    text: "Generally speaking, is it more pleasant or unpleasant when interacting with someone who wants to have sex with you - but you don't want to have sex with them?",
    category: categories.OTHER
    },
    {
    text: "All women are arranged before you on a spectrum of those who never wear makeup to those who always wear makeup. You must press a button and eliminate either the bottom 25% or the top 25% (your loved ones are safe regardless). Which end of the spectrum do you destroy?",
    category: categories.OTHER
    },
    {
    text: "Would you rather date someone who's an enthusiastic fan of astrology, or Donald Trump?",
    category: categories.OTHER
    },
    {
    text: "Which group - unattractive women, attractive women, unattractive men, or attractive men - would benefit the most from social justice/radical feminist/far left ideas?",
    category: categories.OTHER
    }

]

questionsSansIDs.forEach(function(question) {
    question.id = md5(question.text).toString()
})

export const questions = questionsSansIDs
