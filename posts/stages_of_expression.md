# Stages of Expression

When executing an idea in a written language, you essentially go through 4 stages.



Stage 1: Direct/Words

This is writing out the individual words. What is the translation to pig in french? What is the word for that warm feeling of something you experience when you were younger? There's really no strategy here, and usually just one answer, it's just rout memorization. In programming this is just literal syntax; How do I make a comment in lua? Does this language object based or prototype based?



Stage 2: Micro-ideas/Sentences.

Now you move onto a singular concept you want to express. A question; "are you going to the store?", a fact; "Walruses are mammals.". You are stringing together some concepts, worrying about grammer, best practices in the language. Your scope of knowledge in stage 1 can limit the breadth of expression in this stage. At this stage there's usually several approaches to express your micro-idea, but usually only one or two "right ones". In programming this maps to creating functions; "I want to write to a file", or "Loop over this player data structure and return me the winning player".



Stage 3: Features/Paragraphs/articles/stories.

The next layer up you now have a complex story or series of events you want to describe. Maybe it's a news article, maybe it's a tale of how your friend got locked out of the building. Context is maintained between sentences, ideas must be presented in the right order. You have to keep several ideas in mind, and organize all those micro-ideas together cohesivally. Theres really no right or wrong way, just cleaner or better ways; The same person could write vastly different stories about the same event and get across the same result. In programming this would be feature development or a small program. "User stories" are a great example of this anaolgy here. Every company does user auth slightly differently, but it's mostly the same story. What's interesting is that  here we start transcending actual confines of an actual language. The idea becomes more important than the actual implementation of it.



Stage 4: Applications/Novels

At this level we are writing long form pieces, ones that convey a vastly rich array of ideas and concepts, most that span several stories and some their utility is only realized through this transition. The bulk of the work here is to assemble the stories/articles/features in such a way that present the gesalt of your idea as accurately as possible. This is obviously the most difficult layer, and it is influenced by the stages under it, but is mostly stand-alone. There are very few novels that can't be translated, but there are many sentences (and many more individual words!) that don't survive translation. Lessons learned at this stage can easily be translated between different languages and styles since we are so far removed from the actual implementation and now dealing with high-level ideas exclusively. In programming this is full applications, massive libraries, operating systems, even languages themselves.





So here's the rub with programming; Failure at any stage results in a complete failure. Missed a semicolon? Your program fails to run. Have a memory leak due to a bad abstraction? Your program crashes. With written or spoken language you don't have fudemental failures like this. If someone speaks mispronounces a word you can still mostly make out what they are trying to say. It's this fundemental disconnect that makes programming so difficult, so alien.



Secondly, when your code doesn't work, it's often very difficult to know what stage the error is in, "Am I approaching this api in the right way? Or is the problem just in the way I'm looping? Or did I fucking forget a goddamn underscore?!". When it ends up being the latter it really kills your motivation to continue learning, because you see it as something so simple and basic, so therefore you can't possibly have the intelligence to operate at a higher stage. This, of course, is completely false, and even the most seasoned of programmers get caught by syntax errors from time to time.



In conclusion, when learning, focusing on proficiency in stage 1 & 2 is a bad use of time, yielding an upsetting ROI that drive many students to give up. You should look for strategies to sidestep them as much as you can when you are learning. My two best suggestions are Tooling and Mentorship.



Tooling

Two flavours of tooling you should seek out:

Linting/Good error handling/Easy tests - Basically anything that gives you more insight into your code without a ton of effort.
Iteration speed - The longer your iteration speeds (writing code -> seeing result of your code), the more changes you are incentivized to group together. The more changes that happen at once, the harder it becomes to understand where a bug is coming from.


Mentoring

The most useful role a programming mentor can have to answer these two questions: "Is idea/approach possible? If so, how difficult is it?" (https://xkcd.com/1425/)  and "What expression stage (see above) is my bug happening in?"



Having access to someone who can quickly tell you that you are missing an underscore in a complex bit of code is invaluable to your success in learning. Or vice versa, you've been scanning your code for syntax issues for 30min, when in fact your data structure is wrong. Dialing in on what layer where the bug is key.