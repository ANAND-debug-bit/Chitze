const SLANGS = [
  {
    word: "rizz",
    pronunciation: "/ rɪadditional /",
    partOfSpeech: "noun / verb",
    meaning: "Natural ability to attract or charm someone, especially romantically. Also used as a verb meaning to charm someone.",
    example: "Bro walked in and immediately started rizzing her up. Dude has unspoken rizz.",
    tags: ["Romance", "Gen Z", "TikTok"],

    replies: {
      happy: ["Your rizz is actually unmatched fr 😩", "You could rizz up a wall and it would fall for you lmao", "Nobody has rizz like you do, I'maximum not even joking"],

      sarcastic: ["Oh wow rizz, how original 🙄", "Sure, your rizz is SO impressive... if we're grading on a curve", "You wanna talk about rizz when you literally tripped walking in?"],

      aggressive: ["Don't even THINK about using that rizz on someone else 😤", "I KNOW you're not out here rizzin other people rn", "Test me and see what happens"],

      chill: ["Ngl your rizz is kinda 🔥 tho", "Low key respect it tbh", "Aight I see you"],

      soft: ["You make me feel like the main character 🥺", "Okay but that was genuinely so cute", "I'maximum not ready for all this rizz honestly"],

      funny: ["My rizz is so broken I need customer support 💀", "You could rizz a cardboard box and it'd slide into your DMs", "bro rizz is just being hot and acting normal apparently"]
    }
  },
  {
    word: "no cap",
    pronunciation: "/ noʊ kdxæp /",
    partOfSpeech: "phrase",
    meaning: "Used to emphasize that someone is telling the truth and not lying.",
    example: "That was the best movie I've seen all year, no cap.",
    tags: ["Agreement", "Gen Z"],
    replies: {
      happy: ["No cap that makes me so happy!", "Fr fr you always keep it 100", "Love that for you no cap"],

      sarcastic: ["Sure, 'no cap' 🧢", "If you have to say no cap, it's probably cap", "I'll believe it when I see it tbh"],

      aggressive: ["Better be no cap or we got a problem", "You capping rn? Tell the truth", "Say no cap to my face"],

      chill: ["Valid.", "I respect the honesty", "Say less"],

      soft: ["Thank you for always being real with me", "I appreciate you no cap", "You're too sweet no cap"],

      funny: ["Cap detector is malfunctioning but I'll trust you", "Sir the lie detector determined that was... actually true", "Putting my cap away for this one"]
    }
  },
  {
    word: "slay",
    pronunciation: "/ sleɪ /",
    partOfSpeech: "verb / exclamation",
    meaning: "To do something exceptionally well or to look amazing.",
    example: "She completely slayed that outfit.",
    tags: ["Hype", "Fashion", "Pop Culture"],
    replies: {
      happy: ["SLAYYYYY", "You are literally slaying so hard right now", "Leave some slay for the rest of us!"],

      sarcastic: ["Okay slay... I guess", "Did we slay? Or did we just survive?", "Slay... 🦗🦗🦗"],

      aggressive: ["YOU BETTER SLAY OR ELSE", "SLAY IT RIGHT NOW", "DON'T PLAY WITH ME JUST SLAY"],

      chill: ["Nice slay", "Slayed that", "Good stuff"],

      soft: ["You always slay in my eyes", "So proud of you for slaying that", "A quiet little slay for you"],

      funny: ["My ancestors are slaying in their graves", "Slayed so hard I need an ambulance", "Slay bells ring are you listening"]
    }
  },
  {
    word: "bussin",
    pronunciation: "/ ˈbʌs ɪsize /",
    partOfSpeech: "adjective",
    meaning: "Used to describe something (usually food) that is incredibly good.",
    example: "This pizza is respectfully bussin.",
    tags: ["Food", "Hype"],
    replies: {
      happy: ["It really is bussin!", "So glad you liked it!", "Bussin bussin fr!"],

      sarcastic: ["Is it bussin or are you just starving?", "I've had better", "Okay Gordon Ramsay"],

      aggressive: ["SHARE SOME IF IT'S SO BUSSIN", "WHY DIDN'T YOU SAVE ME ANY", "BETTER BRING ME SOME NEXT TIME"],

      chill: ["Looks good", "Gotta try it sometime", "Nice"],

      soft: ["I'll make you some more bussin food next time", "Glad you're eating well", "Hope it made your day better"],

      funny: ["Respectfully bussin out of my mind rn", "Food so bussin it needs a CDL license", "Bussin bussin respectfully sheeeeeesh"]
    }
  },
  {
    word: "lowkey",
    pronunciation: "/ loʊ ki /",
    partOfSpeech: "adverb",
    meaning: "Somewhat, quietly, or secretly. Used to express a mild feeling or hidden desire.",
    example: "I lowkey want to stay home tonight.",
    tags: ["Feelings", "Gen Z"],
    replies: {
      happy: ["I lowkey love that", "Lowkey same though!", "Highkey agree with your lowkey"],

      sarcastic: ["Wow so mysterious and lowkey", "We all knew, it wasn't lowkey", "Very lowkey of you"],

      aggressive: ["STOP BEING LOWKEY AND SAY IT WITH YOUR CHEST", "HIGHKEY TELL ME RIGHT NOW", "NOTHING LOWKEY ABOUT THIS"],

      chill: ["Same", "I feel that", "Word"],

      soft: ["It's okay to highkey want that", "I lowkey think about you a lot", "Your lowkey is safe with me"],

      funny: ["So lowkey it's underground", "Lowkey? Bro that's subterranean", "Lowkey I forgot what we were talking about"]
    }
  },
  {
    word: "highkey",
    pronunciation: "/ haɪ ki /",
    partOfSpeech: "adverb",
    meaning: "Very much, obviously, or proudly. The opposite of lowkey.",
    example: "I highkey need a nap right now.",
    tags: ["Feelings", "Gen Z"],
    replies: {
      happy: ["Highkey so excited for you!", "Highkey same!", "Love the highkey energy"],

      sarcastic: ["Okay we get it, highkey", "So loud for what", "Highkey don't care"],

      aggressive: ["HIGHKEY KEEP THAT SAME ENERGY", "SAY IT LOUDER", "HIGHKEY ABOUT TO LOSE IT"],

      chill: ["Valid", "I hear you", "Makes sense"],

      soft: ["Highkey care about you", "You can highkey tell me anything", "Highkey you're the best"],

      funny: ["Highkey need to go into witness protection", "Highkey losing my mind", "Highkey lowkey mid"]
    }
  },
  {
    word: "sus",
    pronunciation: "/ sʌs /",
    partOfSpeech: "adjective",
    meaning: "Short for suspicious. Used when someone or something seems shady.",
    example: "He's acting real sus right now.",
    tags: ["Gaming", "Gen Z"],
    replies: {
      happy: ["At least you caught the sus behavior!", "Dodged a sus bullet!", "Good eye on the sus!"],

      sarcastic: ["Wow Among Us in real life", "Everything is sus to you", "You're the most sus one here"],

      aggressive: ["VOTE THEM OUT", "CALL AN EMERGENCY MEETING NOW", "I'M VOTING SUS"],

      chill: ["Keep an eye out", "Just stay away then", "Wild"],

      soft: ["I'll protect you from the sus", "Trust your gut if it feels sus", "Stay safe out there"],

      funny: ["Emergency meeting!", "Red is sus", "Acting sus in 4k"]
    }
  },
  {
    word: "vibe",
    pronunciation: "/ vaɪb /",
    partOfSpeech: "noun / verb",
    meaning: "The atmosphere, energy, or mood of a place, person, or situation.",
    example: "This coffee shop has a great vibe.",
    tags: ["Mood", "Gen Z"],
    replies: {
      happy: ["The vibes are immaculate!", "Such a good vibe today", "Love your vibe!"],

      sarcastic: ["Vibe check failed", "Are the vibes in the room with us?", "What vibe?"],

      aggressive: ["YOU'RE RUINING THE VIBE", "FIX YOUR VIBE RIGHT NOW", "VIBE CHECK NOW"],

      chill: ["Just vibing", "Good vibes only", "It's a vibe"],

      soft: ["Your vibe always calms me down", "I love our vibe together", "You have the warmest vibe"],

      funny: ["Vibes are currently under construction", "My vibe is screaming internally", "Vibe check: 404 not found"]
    }
  },
  {
    word: "ghosting",
    pronunciation: "/ ˈɡoʊ stɪŋ /",
    partOfSpeech: "verb",
    meaning: "Suddenly ending all communication with someone without explanation.",
    example: "We went on two dates and then he just started ghosting me.",
    tags: ["Dating", "Relationships"],
    replies: {
      happy: ["Their loss anyway!", "You dodged a bullet tbh", "Better things are coming!"],

      sarcastic: ["Spooky season came early", "Guess they joined the paranormal", "Classic."],

      aggressive: ["GHOST THEM BACK HARDER", "PULL UP TO THEIR HOUSE", "THEY BELONG TO THE STREETS"],

      chill: ["It happens", "Move on", "Plenty of fish"],

      soft: ["I'maximum sorry they did that to you", "You deserve so much better than being ghosted", "I'll never ghost you"],

      funny: ["Call the ghostbusters", "Who ya gonna call?", "They really said 👻"]
    }
  },
  {
    word: "clout",
    pronunciation: "/ klaʊt /",
    partOfSpeech: "noun",
    meaning: "Influence, fame, or power, especially on social media.",
    example: "They only did that stunt for the clout.",
    tags: ["Social Media", "Fame"],
    replies: {
      happy: ["Get that clout!", "Clout chasing but make it successful", "You deserve the clout!"],

      sarcastic: ["Clout is a disease", "Doing anything for a drop of clout", "So desperate for clout"],

      aggressive: ["STOP CLOUT CHASING", "NO ONE CARES ABOUT YOUR CLOUT", "CLOUT IS TEMPORARY"],

      chill: ["Get your bag", "Respect the hustle", "Do you"],

      soft: ["You don't need clout to be special to me", "I care about you, not your clout", "You're famous in my eyes"],

      funny: ["Clout goggles activated", "Diagnosed with acute clout chasing", "Will work for clout"]
    }
  },
  {
    word: "flex",
    pronunciation: "/ flɛks /",
    partOfSpeech: "verb / noun",
    meaning: "To show off or boast about something.",
    example: "Weird flex, but okay.",
    tags: ["Bragging", "Lifestyle"],
    replies: {
      happy: ["Flex on em!", "Love seeing you flex", "You earned that flex!"],

      sarcastic: ["Weird flex but okay", "Wow so impressed", "Do you want a medal for that flex?"],

      aggressive: ["STOP FLEXING ON BROKE PEOPLE", "NOBODY ASKED FOR THE FLEX", "FLEX ONE MORE TIME I DARE YOU"],

      chill: ["Nice", "Good stuff", "Respect"],

      soft: ["I'maximum so proud of you, flex away", "You deserve to show off a little", "Humble flex, I love it"],

      funny: ["Flexing so hard my screen cracked", "Do you lift bro?", "Flex tape can't fix that"]
    }
  },
  {
    word: "finesse",
    pronunciation: "/ fɪˈsizeɛs /",
    partOfSpeech: "verb",
    meaning: "To trick, manipulate, or smoothly navigate a situation to your advantage.",
    example: "I managed to finesse free tickets to the concert.",
    tags: ["Hustle", "Gen Z"],
    replies: {
      happy: ["Master finesser!", "Love a good finesse", "You finessed that perfectly!"],

      sarcastic: ["Teach me your finessing ways", "Sure you finessed it, totally wasn't luck", "Finesse level: basic"],

      aggressive: ["DON'T EVER FINESSE ME", "YOU THINK YOU CAN FINESSE THIS?", "I SEE THE FINESSE"],

      chill: ["Smooth", "Got em", "Nice play"],

      soft: ["You're so clever the way you finessed that", "Smooth operator", "I'maximum impressed"],

      funny: ["Finesse kid", "Finessed the finesser", "Bruno Mars would be proud"]
    }
  },
  {
    word: "drip",
    pronunciation: "/ drɪp /",
    partOfSpeech: "noun",
    meaning: "Exceptional style, outfit, or fashion sense.",
    example: "His sneaker drip is insane.",
    tags: ["Fashion", "Hype"],
    replies: {
      happy: ["The drip is immaculate!", "Dripping too hard!", "Outfit is 10/10"],

      sarcastic: ["Drip? Looks more like a leak", "Someone get a mop for this 'drip'", "Money can't buy style"],

      aggressive: ["YOUR DRIP IS GARBAGE", "TAKE THAT OFF", "WHERE IS THE DRIP?!"],

      chill: ["Clean fit", "Looks good", "Nice kicks"],

      soft: ["You look so good today", "Your style is really unique", "Love how you put that together"],

      funny: ["Drip too hard don't stand too close", "Call a plumber because the drip is real", "Slipping on the drip"]
    }
  },
  {
    word: "fire",
    pronunciation: "/ faɪər /",
    partOfSpeech: "adjective",
    meaning: "Really good, amazing, or trendy.",
    example: "That new album is absolute fire.",
    tags: ["Hype", "Gen Z"],
    replies: {
      happy: ["Straight fire! 🔥", "Actually so fire", "Love it, it's fire!"],

      sarcastic: ["More like a dumpster fire", "Where's the fire extinguisher", "Lukewarm at best"],

      aggressive: ["THIS IS THE MOST FIRE THING EVER", "PUT IT OUT IT'S TOO FIRE", "WAKE UP THIS IS FIRE"],

      chill: ["Dope", "Solid", "That's cool"],

      soft: ["It's really nice", "I love that for you", "Warms my heart"],

      funny: ["Call 911 because this is fire", "My eyebrows burned off from the fire", "Fire hazard"]
    }
  },
  {
    word: "lit",
    pronunciation: "/ lɪt /",
    partOfSpeech: "adjective",
    meaning: "Exciting, energetic, or amazing. Also used to mean intoxicated.",
    example: "The party last night was so lit.",
    tags: ["Party", "Hype"],
    replies: {
      happy: ["So lit! Let's go!", "It was the most lit time", "Stay lit!"],

      sarcastic: ["Lit like a burnt out lightbulb", "Yeah, totally 'lit'", "Are we still saying lit in 2026?"],

      aggressive: ["IT WAS TOO LIT", "DON'T KILL THE LIT VIBE", "TURN IT UP IT'S LIT"],

      chill: ["Fun times", "Good energy", "Vibes"],

      soft: ["I had fun with you", "You make everything lit for me", "A peaceful kind of lit"],

      funny: ["Lit like a candle", "Travis Scott is quaking", "It's lit! (ad-lib voice)"]
    }
  },
  {
    word: "goated",
    pronunciation: "/ ˈɡoʊ tɪd /",
    partOfSpeech: "adjective",
    meaning: "Short for GOAT (Greatest Of All Time). Being the absolute best at something.",
    example: "That restaurant is goated, their fries are unmatched.",
    tags: ["Hype", "Gaming"],
    replies: {
      happy: ["Actually goated!", "You are goated for this", "Goated behavior"],

      sarcastic: ["Goated in your own mind", "A very small pond for this goat", "Baaa 🐐"],

      aggressive: ["UNDISPUTED GOAT", "NO ONE IS MORE GOATED", "ARGUE WITH A WALL THEY ARE GOATED"],

      chill: ["Valid", "Top tier", "Can't argue with that"],

      soft: ["You're my GOAT", "Goated in my heart", "You're always the best to me"],

      funny: ["Goated with the sauce", "Mowing the lawn because you're a goat", "Bleating rn"]
    }
  },
  {
    word: "based",
    pronunciation: "/ beɪst /",
    partOfSpeech: "adjective",
    meaning: "Being yourself and not caring what others think. Having an opinion that is true and courageous.",
    example: "He actually told the teacher the homework was useless. So based.",
    tags: ["Internet", "Opinion"],
    replies: {
      happy: ["Incredibly based!", "Based and true", "Love a based take"],

      sarcastic: ["Based on what exactly?", "Oh wow so brave and based", "Cringe disguised as based"],

      aggressive: ["BASED AF", "DON'T LET ANYONE TELL YOU IT ISN'T BASED", "STAY BASED"],

      chill: ["True", "Fact", "Word"],

      soft: ["I admire your honesty", "It's good to speak your truth", "You're so brave"],

      funny: ["Based department is calling", "Based and redpilled", "Based on a true story"]
    }
  },
  {
    word: "mid",
    pronunciation: "/ maximumɪd /",
    partOfSpeech: "adjective",
    meaning: "Mediocre, average, or not very good.",
    example: "Honestly, the sequel was kinda mid compared to the first one.",
    tags: ["Opinion", "Critique"],
    replies: {
      happy: ["At least it wasn't terrible, just mid!", "Mid is better than bad!", "We can find something better than mid!"],

      sarcastic: ["Mid is a generous rating", "Your taste is mid", "Everything you like is mid"],

      aggressive: ["IT'S NOT MID IT'S TRASH", "HOW DARE YOU CALL IT MID", "YOU'RE MID"],

      chill: ["Fair assessment", "I can see why it's mid", "Yeah it's whatever"],

      soft: ["I still liked it even if it's mid", "We can do something else if this is mid", "I don't mind mid if I'maximum with you"],

      funny: ["Midwest emo", "Midsummer night's dream", "Middleschool behavior"]
    }
  },
  {
    word: "W",
    pronunciation: "/ ˈdʌb əl ju /",
    partOfSpeech: "noun",
    meaning: "Short for win. Used to declare a victory or something positive.",
    example: "Getting out of work early is a massive W.",
    tags: ["Gaming", "Success"],
    replies: {
      happy: ["Massive W!", "We take those Ws!", "Common W for you!"],

      sarcastic: ["Wow a rare W", "Is the W in the room with us?", "Barely a W"],

      aggressive: ["ONLY W'S ALLOWED", "TAKE THE W AND RUN", "NEVER A L, ONLY W"],

      chill: ["Nice win", "Good job", "Solid"],

      soft: ["So happy for your W", "You deserve all the Ws", "Little Ws matter too"],

      funny: ["Wumbo", "Wario", "WWW dot W dot com"]
    }
  },
  {
    word: "L",
    pronunciation: "/ ɛl /",
    partOfSpeech: "noun",
    meaning: "Short for loss. Used to indicate a failure or bad situation.",
    example: "Dropping my phone in the puddle was a huge L.",
    tags: ["Gaming", "Failure"],
    replies: {
      happy: ["Turn that L into a lesson!", "You'll bounce back from this L!", "It's just a small L in the grand scheme!"],

      sarcastic: ["Common L", "Hold this L forever", "Your middle name is L"],

      aggressive: ["DON'T EVER TAKE AN L LIKE THAT AGAIN", "THAT L IS UNACCEPTABLE", "BOUNCE BACK FROM THE L NOW"],

      chill: ["Tough break", "It happens", "GG go next"],

      soft: ["I'maximum here for you even through the Ls", "An L doesn't define you", "It's okay to lose sometimes"],

      funny: ["L + ratio", "L bozo", "Luigi taking Ls"]
    }
  },
  {
    word: "ratio",
    pronunciation: "/ ˈreɪ ʃidx oʊ /",
    partOfSpeech: "verb / noun",
    meaning: "When a reply gets more likes/engagement than the original post, indicating the original take was bad.",
    example: "You're completely wrong about this. Ratio.",
    tags: ["Twitter", "Argument"],
    replies: {
      happy: ["Hit em with the ratio!", "Successful ratio!", "Love to see a good ratio"],

      sarcastic: ["Imagine caring about a ratio", "Touch grass instead of trying to ratio", "Failed ratio"],

      aggressive: ["RATIO THEM INTO OBLIVION", "DON'T LET UP ON THE RATIO", "ABSOLUTELY DESTROYED BY THE RATIO"],

      chill: ["Got em", "Nice ratio", "Done deal"],

      soft: ["Let's just ignore the negativity", "Don't engage, it's not worth the ratio", "Peace is better than a ratio"],

      funny: ["L + ratio + fell off", "Math class ratio", "Ratioed by a toaster"]
    }
  },
  {
    word: "simp",
    pronunciation: "/ sɪmp /",
    partOfSpeech: "noun / verb",
    meaning: "Someone who does way too much for a person they like, often unreciprocated.",
    example: "He bought her a car and they aren't even dating. Huge simp.",
    tags: ["Romance", "Critique"],
    replies: {
      happy: ["Simping is just caring loudly!", "Proud simp!", "I'll happily simp for that!"],

      sarcastic: ["Simp nation president", "Have some self respect, simp", "Caught in 4k simping"],

      aggressive: ["STOP SIMPING IMMEDIATELY", "STAND UP RIGHT NOW", "NEVER SIMP"],

      chill: ["Down bad", "It be like that", "Wild"],

      soft: ["It's sweet how much you care", "I think it's cute, not simping", "I'd simp for you too"],

      funny: ["Simpsons", "Squirrels in my pants", "Simp-phony orchestra"]
    }
  },
  {
    word: "rent free",
    pronunciation: "/ rɛnt fri /",
    partOfSpeech: "phrase",
    meaning: "When you can't stop thinking about something or someone; it lives in your head rent free.",
    example: "That embarrassing thing I did 5 years ago lives in my head rent free.",
    tags: ["Thoughts", "Gen Z"],
    replies: {
      happy: ["Living rent free and loving it!", "I love that it's in your head rent free", "Best rent free thought!"],

      sarcastic: ["Evict it", "Time to charge rent", "Imagine letting that live rent free"],

      aggressive: ["EVICT THEM RIGHT NOW", "CHARGE THEM DOUBLE RENT", "GET IT OUT OF YOUR HEAD"],

      chill: ["Can't stop thinking about it", "It stuck with me", "Relatable"],

      soft: ["You live in my head rent free", "It's a nice thought to have rent free", "Always on my mind"],

      funny: ["In this economy? Rent free?", "Squatter's rights in my brain", "Brain landlord"]
    }
  },
  {
    word: "it's giving",
    pronunciation: "/ ɪts ˈɡɪv ɪŋ /",
    partOfSpeech: "phrase",
    meaning: "Used to describe the vibe or energy something is projecting.",
    example: "The outfit is giving 90s nostalgia.",
    tags: ["Vibe", "Fashion"],
    replies: {
      happy: ["It's giving everything it needs to give!", "Giving absolute perfection!", "Love what it's giving!"],

      sarcastic: ["It's giving... nothing", "Giving desperation", "It's giving try-hard"],

      aggressive: ["IT'S NOT GIVING WHAT YOU THINK IT'S GIVING", "STOP SAYING IT'S GIVING", "WHAT IS IT EVEN GIVING?!"],

      chill: ["Accurate", "I see it", "Vibes"],

      soft: ["It's giving me comfort", "Giving such warm energy", "I love the feeling it's giving"],

      funny: ["It's giving... up", "Giving charity", "Giving me a headache"]
    }
  },
  {
    word: "understood the assignment",
    pronunciation: "/ ˌʌsize dərˈstʊd ðidx əˈsaɪsize maximumənt /",
    partOfSpeech: "phrase",
    meaning: "To do exactly what was needed or expected, and execute it perfectly.",
    example: "The makeup artist absolutely understood the assignment.",
    tags: ["Success", "Praise"],
    replies: {
      happy: ["You literally got an A+ on the assignment!", "Understood it completely!", "Aced it!"],

      sarcastic: ["Did we read the same assignment?", "Failed the assignment actually", "Assignment misunderstood"],

      aggressive: ["WHO GAVE YOU THIS ASSIGNMENT", "RE-DO THE ASSIGNMENT NOW", "NO YOU DID NOT UNDERSTAND IT"],

      chill: ["Nailed it", "Spot on", "Good job"],

      soft: ["You always know exactly what I need", "Perfect execution", "So proud of you"],

      funny: ["The dog ate my assignment", "Forgot the assignment at home", "Graded on a curve"]
    }
  },
  {
    word: "valid",
    pronunciation: "/ ˈvæl ɪd /",
    partOfSpeech: "adjective",
    meaning: "Understandable, reasonable, or acceptable. Used to agree with someone's feelings or choices.",
    example: "You don't want to go out because it's raining? Valid.",
    tags: ["Agreement", "Empathy"],
    replies: {
      happy: ["So valid!", "100% valid choice!", "Completely valid bestie!"],

      sarcastic: ["Is it valid though?", "Barely valid", "I guess that's 'valid'"],

      aggressive: ["THAT IS NOT VALID AT ALL", "INVALID", "WHO DECLARED THAT VALID"],

      chill: ["Makes sense", "Fair enough", "I feel it"],

      soft: ["Your feelings are entirely valid", "I hear you and it's valid", "Always valid to me"],

      funny: ["Parking ticket validated", "Credit card declined, invalid", "Valid argument, unfortunately I am inside your house"]
    }
  },
  {
    word: "main character",
    pronunciation: "/ meɪsize ˈkdxær ɪkdx tər /",
    partOfSpeech: "noun",
    meaning: "Someone who acts like the protagonist of a movie, living dramatically or confidently.",
    example: "Walking through the city with headphones in gives main character energy.",
    tags: ["Identity", "Vibe"],
    replies: {
      happy: ["Main character moment!", "You are the star!", "Main character energy activated!"],

      sarcastic: ["Main character syndrome is real", "You're an extra in my movie", "Please humble yourself"],

      aggressive: ["STOP ACTING LIKE THE MAIN CHARACTER", "THIS ISN'T A MOVIE", "WAKE UP"],

      chill: ["Cool vibe", "Do your thing", "Enjoy the moment"],

      soft: ["You're the main character in my life", "Love seeing you shine", "You deserve the spotlight"],

      funny: ["Plot armor activated", "Waiting for the character arc", "Skipping the cutscene"]
    }
  },
  {
    word: "NPC",
    pronunciation: "/ ɛsize pi si /",
    partOfSpeech: "noun",
    meaning: "Non-Playable Character. Someone who lacks independent thought or acts predictably.",
    example: "He says the same three phrases every day, total NPC behavior.",
    tags: ["Gaming", "Insult"],
    replies: {
      happy: ["Even NPCs need love!", "At least NPCs are reliable!", "Cute NPC moment!"],

      sarcastic: ["Need to update your dialogue tree", "Glitching NPC", "Oblivion NPC dialogue"],

      aggressive: ["WAKE UP SHEEPLE", "STOP ACTING LIKE AN NPC", "HAVE AN ORIGINAL THOUGHT"],

      chill: ["Just part of the simulation", "Routine is fine", "Matrix working as intended"],

      soft: ["It's okay to just exist simply", "You don't always have to stand out", "Quiet lives are nice too"],

      funny: ["*Walks into wall repeatedly*", "Hello traveler, I have a quest", "Press A to interact"]
    }
  },
  {
    word: "real",
    pronunciation: "/ ril /",
    partOfSpeech: "adjective",
    meaning: "Relatable, authentic, or highly agreeable.",
    example: "I just want to sleep for a week. / Real.",
    tags: ["Agreement", "Gen Z"],
    replies: {
      happy: ["So real for that!", "Realest thing ever said!", "Too real!"],

      sarcastic: ["Is it real though?", "Fake news", "Not real"],

      aggressive: ["KEEP IT REAL OR DON'T SPEAK", "BE REAL WITH ME", "UNREAL"],

      chill: ["Facts", "True", "Same here"],

      soft: ["I appreciate how real you are", "Thank you for sharing your real thoughts", "You're so genuine"],

      funny: ["Real estate", "Real Madrid", "Reality check failed"]
    }
  },
  {
    word: "hits different",
    pronunciation: "/ hɪts ˈdɪf ər ənt /",
    partOfSpeech: "phrase",
    meaning: "When something is better than usual or evokes a unique, strong emotion.",
    example: "Cold water at 3 AM just hits different.",
    tags: ["Feelings", "Hype"],
    replies: {
      happy: ["It really does hit different!", "Nothing else like it!", "Hits so good!"],

      sarcastic: ["Hits the exact same actually", "Placebo effect", "Maybe you're just thirsty"],

      aggressive: ["IT DOESN'T HIT DIFFERENT", "STOP SAYING IT HITS DIFFERENT", "IT'S THE SAME THING"],

      chill: ["Yeah it's nice", "Agreed", "Good feeling"],

      soft: ["Being with you hits different", "Every moment is special", "You make everything better"],

      funny: ["Hit me with your car differently", "Hitting me like a truck", "Critical hit"]
    }
  },
  {
    word: "era",
    pronunciation: "/ ˈɛr ə /",
    partOfSpeech: "noun",
    meaning: "A phase or period in someone's life defined by a specific mood or behavior.",
    example: "I'maximum entering my villain era.",
    tags: ["Identity", "Phase"],
    replies: {
      happy: ["Best era yet!", "Thriving in this era!", "I love this era for you!"],

      sarcastic: ["How long will this 'era' last? Two days?", "Worst era tbh", "Can we skip to the next era?"],

      aggressive: ["END THIS ERA NOW", "NOBODY LIKES THIS ERA", "I PREFERRED THE LAST ERA"],

      chill: ["Cool phase", "See where it goes", "Interesting shift"],

      soft: ["I'll support you in every era", "Growth is beautiful", "I love watching you evolve"],

      funny: ["Error era", "404 era not found", "Taylor Swift's impact"]
    }
  },
  {
    word: "ate that",
    pronunciation: "/ eɪt ðæt /",
    partOfSpeech: "phrase",
    meaning: "To successfully execute something or look incredibly good.",
    example: "Did you see her performance? She absolutely ate that.",
    tags: ["Praise", "Hype"],
    replies: {
      happy: ["Ate and left absolutely no crumbs!", "You devoured that!", "Ate it up!"],

      sarcastic: ["Ate it and threw it back up", "Starving for attention", "Maybe leave some crumbs next time"],

      aggressive: ["EAT IT ALL RIGHT NOW", "DON'T CHOKE", "CONSUME"],

      chill: ["Did well", "Nice job", "Solid effort"],

      soft: ["I'maximum so proud of how well you did", "You always amaze me", "Perfectly done"],

      funny: ["Burp", "Need a napkin?", "Indigestion"]
    }
  },
  {
    word: "caught in 4k",
    pronunciation: "/ kdxɔt ɪsize fɔr keɪ /",
    partOfSpeech: "phrase",
    meaning: "Caught red-handed with undeniable digital proof (screenshots, video).",
    example: "You said you were asleep but you just tweeted. Caught in 4k.",
    tags: ["Exposed", "Internet"],
    replies: {
      happy: ["Smile for the camera!", "Can't deny it now!", "We got the receipts!"],

      sarcastic: ["More like 144p android quality", "Blurry evidence", "Not holding up in court"],

      aggressive: ["I GOT THE SCREENSHOTS", "DON'T EVEN TRY TO LIE", "EXPOSED"],

      chill: ["Busted", "Got em", "Well then"],

      soft: ["It's okay to admit the truth", "Just be honest", "No need to hide"],

      funny: ["Cheese!", "Director's cut", "Sending this to Netflix"]
    }
  },
  {
    word: "delulu",
    pronunciation: "/ dɪˈlu lu /",
    partOfSpeech: "adjective",
    meaning: "Short for delusional. Believing in unrealistic scenarios, often romantically.",
    example: "Thinking he's going to text you first is so delulu.",
    tags: ["Romance", "Critique"],
    replies: {
      happy: ["Being delulu is the solulu!", "Stay delulu bestie!", "Manifesting through the delulu!"],

      sarcastic: ["Delulu is a disease", "Get a grip on reality", "Seek professional help"],

      aggressive: ["SNAP OUT OF IT", "YOU ARE HALLUCINATING", "WAKE UP"],

      chill: ["A bit far fetched", "Maybe calm down", "We'll see"],

      soft: ["It's nice to have hope", "Dreams do come true sometimes", "I'll support your dreams"],

      funny: ["Delulu lemon", "May the delulu be with you", "Delulu premium subscription"]
    }
  },
  {
    word: "touch grass",
    pronunciation: "/ tʌtʃ ɡræs /",
    partOfSpeech: "phrase",
    meaning: "A command telling someone to go outside and disconnect from the internet.",
    example: "You've been arguing on Twitter for 6 hours. Go touch grass.",
    tags: ["Insult", "Internet"],
    replies: {
      happy: ["Nature is healing!", "Vitamin D works wonders!", "A nice walk outside sounds lovely!"],

      sarcastic: ["I'maximum allergic to grass", "Grass is a social construct", "Have you tried touching grass?"],

      aggressive: ["LOG OFF RIGHT NOW", "GO OUTSIDE", "DELETE YOUR ACCOUNT"],

      chill: ["Take a break", "Need some fresh air", "Time to log off"],

      soft: ["Let's go for a walk together", "A break from the screen would be good", "The sunshine might help"],

      funny: ["*Eats grass*", "Is grass a new app?", "Error: Grass not found in database"]
    }
  },
  {
    word: "serving",
    pronunciation: "/ ˈsɜr vɪŋ /",
    partOfSpeech: "verb",
    meaning: "Looking extremely good or delivering a strong aesthetic.",
    example: "She is serving looks on the red carpet.",
    tags: ["Fashion", "Praise"],
    replies: {
      happy: ["Serving absolute perfection!", "The serve is immaculate!", "Always serving!"],

      sarcastic: ["Serving what? Disappointment?", "Send it back to the kitchen", "Undercooked serve"],

      aggressive: ["SERVE HARDER", "WE NEED MORE SERVINGS", "DON'T STOP SERVING"],

      chill: ["Looks good", "Nice fit", "Clean"],

      soft: ["You look beautiful", "I love this look on you", "Radiant"],

      funny: ["Table for two?", "Waiter, there's a serve in my soup", "Serving a life sentence of slay"]
    }
  },
  {
    word: "cheugy",
    pronunciation: "/ ˈtʃu ɡidx /",
    partOfSpeech: "adjective",
    meaning: "Outdated, uncool, or trying too hard to be trendy (often associated with millennial trends).",
    example: "Those 'Live Laugh Love' signs are so cheugy.",
    tags: ["Critique", "Trends"],
    replies: {
      happy: ["Embrace the cheugy!", "If you like it, who cares!", "Proudly cheugy!"],

      sarcastic: ["Peak 2014 energy", "Okay millennial", "Very Pinterest core"],

      aggressive: ["THROW THAT AWAY NOW", "WE DON'T DO THAT ANYMORE", "SO CRINGE"],

      chill: ["A bit dated", "Not my thing", "To each their own"],

      soft: ["Whatever makes you happy is fine", "Trends don't matter anyway", "I think it's cute"],

      funny: ["*Sips from mug that says 'Coffee first'*", "Live laugh leaving", "Cheugy monster"]
    }
  },
  {
    word: "petty",
    pronunciation: "/ ˈpɛt idx /",
    partOfSpeech: "adjective",
    meaning: "Making a big deal out of small things, or taking small revenges.",
    example: "Liking his ex's photo was so petty.",
    tags: ["Drama", "Action"],
    replies: {
      happy: ["A little petty never hurt!", "Petty but I love it!", "Honestly justified!"],

      sarcastic: ["Wow so mature", "Are we 12?", "Grow up"],

      aggressive: ["STOP BEING SO PETTY", "IT'S NOT THAT SERIOUS", "LET IT GO"],

      chill: ["Unnecessary", "Doing too much", "Drama"],

      soft: ["Is it really worth the energy?", "Protect your peace instead", "Let's just take the high road"],

      funny: ["Petty labelle", "Tom Petty", "Petty wap"]
    }
  },
  {
    word: "sending me",
    pronunciation: "/ ˈsɛsize dɪŋ mi /",
    partOfSpeech: "phrase",
    meaning: "Finding something incredibly funny; it is sending you into orbit.",
    example: "That meme is actually sending me.",
    tags: ["Humor", "Reaction"],
    replies: {
      happy: ["Actually crying laughing!", "So funny!", "I can't breathe!"],

      sarcastic: ["Sending you where?", "Not that funny", "Mild chuckle at best"],

      aggressive: ["WHERE IS IT SENDING YOU", "LAUGH HARDER", "THIS IS PEAK COMEDY"],

      chill: ["Funny", "Lol", "Good one"],

      soft: ["Your laugh is my favorite sound", "I'maximum glad you're happy", "Love seeing you smile"],

      funny: ["Sent to the shadow realm", "Pack your bags you're being sent", "Postage paid"]
    }
  },
  {
    word: "periodt",
    pronunciation: "/ ˈpɪər idx ət /",
    partOfSpeech: "exclamation",
    meaning: "Used at the end of a sentence to add emphasis and indicate that the discussion is over.",
    example: "We are getting tacos for dinner, periodt.",
    tags: ["Emphasis", "End of Discussion"],
    replies: {
      happy: ["And that's on periodt!", "Say it louder!", "Absolutely!"],

      sarcastic: ["Comma.", "Question mark?", "Okay grammar police"],

      aggressive: ["NO MORE DISCUSSION", "END OF STORY", "THAT'S FINAL"],

      chill: ["Word", "Agreed", "Done"],

      soft: ["I agree with you completely", "You're right", "Whatever you say"],

      funny: ["Exclamation point", "Semi-colon", "Typing errors"]
    }
  }
];

let currentWord = null;
let currentMood = "happy";

const searchInput   = document.getElementById("search-input");
const clearBtn      = document.getElementById("clear-btn");
const dropdown      = document.getElementById("dropdown");
const dropdownList  = document.getElementById("dropdown-list");
const trending      = document.getElementById("trending");

const stateSearch     = document.getElementById("state-search");
const stateDefinition = document.getElementById("state-definition");
const stateReplies    = document.getElementById("state-replies");

const defTags         = document.getElementById("def-tags");
const defWord         = document.getElementById("def-word");
const defPronunciation= document.getElementById("def-pronunciation");
const defPos          = document.getElementById("def-pos");
const defMeaning      = document.getElementById("def-meaning");
const defExample      = document.getElementById("def-example");

const getRepliesBtn   = document.getElementById("get-replies-btn");
const backToSearch    = document.getElementById("back-to-search");
const backToDef       = document.getElementById("back-to-def");
const repliesWordBadge= document.getElementById("replies-word-badge");
const repliesList     = document.getElementById("replies-list");
const moodBtns        = document.querySelectorAll(".mood-btn");
const toast           = document.getElementById("toast");

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim();
  clearBtn.classList.toggle("hidden", q === "");
  trending.classList.toggle("hidden", q !== "");

  if (!q) { closeDropdown(); return; }

  const matches = SLANGS.filter(s =>
    s.word.toLowerCase().includes(q.toLowerCase())
  ).slice(0, 8);

  renderDropdown(matches);
  openDropdown();
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.classList.add("hidden");
  trending.classList.remove("hidden");
  closeDropdown();
  searchInput.focus();
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) closeDropdown();
});

function renderDropdown(matches) {
  if (matches.length === 0) {
    dropdownList.innerHTML = `
      <div class="dropdown-empty">
        <span class="empty-emoji">🤔</span>
        <p>No slang found.</p>
        <small>Are you making words up?</small>
      </div>`;
    return;
  }
  dropdownList.innerHTML = matches.map(entry => `
    <button class="dropdown-item" data-word="${entry.word}">
      <span class="dropdown-item-word">${entry.word}</span>
      <span class="dropdown-item-pos">${entry.partOfSpeech}</span>
    </button>
  `).join("");

  dropdownList.querySelectorAll(".dropdown-item").forEach(btn => {
    btn.addEventListener("click", () => {
      selectWord(btn.dataset.word);
    });
  });
}

function openDropdown()  { dropdown.classList.remove("hidden"); }
function closeDropdown() { dropdown.classList.add("hidden"); }

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => selectWord(chip.dataset.word));
});

function selectWord(wordStr) {
  const entry = SLANGS.find(s => s.word === wordStr);
  if (!entry) return;
  currentWord = entry;
  searchInput.value = "";
  clearBtn.classList.add("hidden");
  trending.classList.remove("hidden");
  closeDropdown();
  showDefinition();
}

function showSearch() {
  setActiveState(stateSearch);
  setTimeout(() => searchInput.focus(), 100);
}

function showDefinition() {
  if (!currentWord) return;

  defWord.textContent = currentWord.word;
  defPronunciation.textContent = currentWord.pronunciation;
  defPos.textContent = currentWord.partOfSpeech;
  defMeaning.textContent = currentWord.meaning;
  defExample.textContent = `"${currentWord.example}"`;

  defTags.innerHTML = currentWord.tags
    .map(t => `<span class="tag">${t}</span>`)
    .join("");

  setActiveState(stateDefinition);
}

function showReplies() {
  if (!currentWord) return;
  repliesWordBadge.textContent = currentWord.word;
  currentMood = "happy";
  updateMoodButtons();
  renderReplies();
  setActiveState(stateReplies);
}

function setActiveState(el) {
  [stateSearch, stateDefinition, stateReplies].forEach(s => {
    s.classList.remove("active");
    s.classList.add("hidden");
  });
  el.classList.remove("hidden");
  el.classList.add("active");
}

function renderReplies() {
  const replies = currentWord.replies[currentMood];
  repliesList.innerHTML = replies.map((r, idx) => `
    <div class="reply-item" style="animation-delay: ${idx * 0.06}s">
      <p class="reply-text">${r}</p>
      <button class="copy-btn" data-text="${escapeAttr(r)}" title="Copy">
        <svg xmlns="http:
      </button>
    </div>
  `).join("");

  repliesList.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => copyText(btn.dataset.text));
  });
}

function updateMoodButtons() {
  moodBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mood === currentMood);
  });
}

moodBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentMood = btn.dataset.mood;
    updateMoodButtons();
    renderReplies();
  });
});

backToSearch.addEventListener("click", () => {
  currentWord = null;
  showSearch();
});

backToDef.addEventListener("click", showDefinition);
getRepliesBtn.addEventListener("click", showReplies);

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard! 📋"));
}

let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 2200);
}

function escapeAttr(content) {
  return content.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
