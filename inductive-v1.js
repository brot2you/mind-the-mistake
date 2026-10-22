/* Mind the Mistake! — Inductive discovery bank.
   22 hand-authored comparisons and 44 noticing questions.
   Rules are intentionally stored in the original CODES, not revealed by this file. */
(function () {
  "use strict";
  const L = (focus, samples, lookAt, questions, hypothesis) => ({focus, samples, lookAt, questions, hypothesis});
  const Q = (text, options, correct, hint) => ({text, options, correct, hint});
  window.MTM_DISCOVERY = {
    1: L(
      "Observe deux façons de parler d'une activité au présent.",
      [["Every Saturday, Lucy plays basketball.", "Look! Lucy is playing basketball now."],
       ["I usually walk to school.", "Today, I am taking the bus."]],
      "Repère les expressions de temps et compare la forme des verbes.",
      [Q("Which sentences describe habits?", ["The sentences with usually / every Saturday.", "The sentences with now / today.", "All four describe habits."],0,"Cherche ce qui se répète."),
       Q("Look at « is playing » and « am taking ». What do they share?", ["A verb ending in -ed.", "A form of be and a verb ending in -ing.", "The word do before the verb."],1,"Observe le premier mot et la fin du deuxième.")],
      "Quand utilise-t-on chacune des deux formes ? Comment sont-elles construites ?"
    ),
    2: L(
      "Observe les actions longues et les événements qui les interrompent dans un récit passé.",
      [["I was reading when the phone rang.", "I read three chapters yesterday."],
       ["While we were walking, it started to rain.", "We walked home after school."]],
      "Cherche les actions en cours et celles qui surviennent à un moment précis.",
      [Q("In « I was reading when the phone rang », which action was already in progress?", ["The phone rang.", "I was reading.", "Both began at the same moment."],1,"Que faisait la personne avant que le téléphone sonne ?"),
       Q("What do « was reading » and « were walking » share?", ["Had + past participle.", "The infinitive after did.", "Was/were + verb-ing."],2,"Compare leurs auxiliaires et leurs terminaisons.")],
      "À quoi servent les deux temps dans un récit ? Comment reconnaît-on l'action en cours ?"
    ),
    3: L(
      "Observe l'ordre de deux événements dans le passé.",
      [["When I arrived, the film had started.", "I arrived at 8. The film started at 8:15."],
       ["She had finished her homework before she went out.", "She finished her homework after she came home."]],
      "Pour chaque phrase, identifie ce qui s'est produit en premier.",
      [Q("In « When I arrived, the film had started », what happened first?", ["The film started.", "I arrived.", "Both happened at the same time."],0,"Le film avait-il commencé à l'arrivée de la personne ?"),
       Q("Which verb group marks the earlier action?", ["Had + past participle.", "Was + verb-ing.", "Will + infinitive."],0,"Regarde « had started » et « had finished ».")],
      "Comment indiquer qu'un événement était déjà terminé avant un autre événement passé ?"
    ),
    4: L(
      "Compare une expérience liée au présent et un événement situé à un moment précis.",
      [["I have visited London twice.", "I visited London in 2024."],
       ["She has lost her keys. She can't open the door.", "She lost her keys yesterday."]],
      "Souligne les indications de date et cherche le lien avec maintenant.",
      [Q("Which sentence gives a specific finished time?", ["I have visited London twice.", "I visited London in 2024.", "She has lost her keys."],1,"Cherche une année ou une date."),
       Q("What do « have visited » and « has lost » have in common?", ["They use a form of have and a past participle.", "They use did and a base verb.", "They use was and verb-ing."],0,"Observe les deux mots qui composent le verbe.")],
      "Quelle différence constates-tu entre present perfect et past simple ?"
    ),
    5: L(
      "Observe comment trois phrases annoncent des événements futurs.",
      [["I think it will rain tomorrow.", "Look at those black clouds! It's going to rain."],
       ["I'll help you with those bags!", "I'm meeting Sam at 5 p.m. tomorrow."],
       ["We are going to paint our room this weekend.", "Our train is leaving at 7:30 tomorrow."]],
      "Cherche ce qui relève d'une prévision, d'une intention et d'un arrangement.",
      [Q("Which sentence describes a meeting already arranged?", ["I'm meeting Sam at 5 p.m. tomorrow.", "I think it will rain tomorrow.", "I'll help you with those bags!"],0,"Un horaire avec une autre personne peut signaler un arrangement."),
       Q("Which sentence describes a decision made as the speaker talks?", ["We are going to paint our room this weekend.", "I'll help you with those bags!", "Our train is leaving at 7:30 tomorrow."],1,"La personne propose spontanément son aide.")],
      "Distingue will, be going to et le présent en -ing pour parler du futur."
    ),
    6: L(
      "Observe les petits mots placés avant un verbe et le sens qu'ils ajoutent.",
      [["You must wear a helmet.", "You mustn't enter this room."],
       ["She can swim.", "She should practise more."],
       ["He might come later.", "He doesn't have to come today."]],
      "Compare les verbes après can, must, should et might ; distingue interdiction et absence d'obligation.",
      [Q("What comes immediately after « can », « must » and « should »?", ["A base verb without to.", "A verb ending in -s.", "To + verb every time."],0,"Observe wear, swim et practise."),
       Q("Which sentence means « ce n'est pas obligatoire »?", ["You mustn't enter this room.", "He doesn't have to come today.", "You must wear a helmet."],1,"Interdiction et absence d'obligation ne sont pas la même chose.")],
      "Comment construis-tu une phrase avec un modal ? Quelles nuances de sens repères-tu ?"
    ),
    7: L(
      "Observe pourquoi un nom apparaît avec a, an, the ou sans article.",
      [["I saw a dog. The dog was friendly.", "She bought an umbrella."],
       ["Dogs need water.", "The dogs next door are noisy."],
       ["He is an actor.", "She loves music."]],
      "Repère ce qui est mentionné pour la première fois, ce qui est identifié et ce qui est général.",
      [Q("Why does « the dog » come after « a dog »?", ["Because the dog is now identified.", "Because dog is a plural.", "Because the dog is an adjective."],0,"L'animal vient d'être présenté."),
       Q("Which sentence talks about dogs in general?", ["The dogs next door are noisy.", "Dogs need water.", "I saw a dog."],1,"Quelle phrase ne désigne pas d'animaux particuliers ?")],
      "Quand emploie-t-on a/an, the ou aucun article ?"
    ),
    8: L(
      "Observe comment on parle d'un objet que l'on peut compter et d'une matière.",
      [["There are three apples.", "There is some water."],
       ["How many books do you have?", "How much milk is there?"],
       ["Two children are playing.", "We need some information."]],
      "Compare les pluriels, many/much et les noms qui ne prennent pas un pluriel ordinaire.",
      [Q("Which question asks about something countable?", ["How much milk is there?", "How many books do you have?", "How much information do we need?"],1,"Peux-tu dire one book, two books ?"),
       Q("What is the plural of child in these examples?", ["Childs.", "Childes.", "Children."],2,"Relis la troisième paire.")],
      "Quelles différences remarques-tu entre les noms comptables et indénombrables ?"
    ),
    9: L(
      "Observe les prépositions devant un moment ou un lieu.",
      [["The lesson starts at 9 o'clock.", "My birthday is on Monday."],
       ["We travel in August.", "The cat is in the box."],
       ["The picture is on the wall.", "I'll meet you at the station."]],
      "Observe la précision de l'indication : heure, jour, mois, intérieur, surface ou point de rendez-vous.",
      [Q("Which preposition appears with a precise clock time?", ["In.", "On.", "At."],2,"Cherche 9 o'clock."),
       Q("Which pair is used with a day and a month?", ["On Monday / in August.", "At Monday / on August.", "In Monday / at August."],0,"Compare les deux premières paires.")],
      "Formule les régularités d'emploi de in, on et at pour le temps et pour l'espace."
    ),
    10: L(
      "Observe où se placent les mots dans une phrase anglaise.",
      [["She has a beautiful red bike.", "She rides her bike carefully."],
       ["He often plays chess.", "Where does he play chess?"],
       ["They are always late.", "Is he ready?"]],
      "Regarde la place de l'adjectif, de l'adverbe de fréquence et de l'auxiliaire.",
      [Q("In « a beautiful red bike », where are the adjectives?", ["Before the noun.", "After the noun.", "At the end of the sentence."],0,"Le nom est bike."),
       Q("What moves before the subject in « Is he ready? »?", ["The adjective ready.", "The auxiliary is.", "The noun bike."],1,"Compare la question avec l'ordre normal d'une déclaration.")],
      "Quelles positions occupent les adjectifs, les adverbes et les auxiliaires dans les questions ?"
    ),
    11: L(
      "Observe ce qui change selon le sujet au présent simple.",
      [["I play football on Sundays.", "He plays football on Sundays."],
       ["They watch films.", "She watches films."],
       ["You study English.", "Tom studies English."]],
      "Repère les sujets et entoure la terminaison de chaque verbe.",
      [Q("Which subjects make the verb change in these pairs?", ["I, you and they.", "He, she and Tom.", "All subjects."],1,"Tom peut être remplacé par he."),
       Q("Which verb form matches « she »?", ["She study English.", "She studies English.", "She studying English."],1,"Cherche la paire avec Tom.")],
      "Explique quand on ajoute -s, -es ou -ies au présent simple."
    ),
    12: L(
      "Compare les pronoms avant et après le verbe et les mots qui indiquent la possession.",
      [["She helps him.", "He helps her."],
       ["This is my bag.", "This bag is mine."],
       ["They call us.", "We call them."]],
      "Observe le rôle de chaque mot : sujet, complément, devant un nom ou seul.",
      [Q("In « She helps him », which word is the object of the verb?", ["She.", "Helps.", "Him."],2,"Qui reçoit l'aide ?"),
       Q("Which word can replace « my bag » without repeating bag?", ["Mine.", "My.", "Me."],0,"Compare This is my bag et This bag is mine.")],
      "Comment distinguer pronoms sujets, compléments et formes possessives ?"
    ),
    13: L(
      "Observe comment on compare deux éléments ou désigne le premier d'un groupe.",
      [["Mia is taller than Ben.", "Mia is the tallest in her class."],
       ["This film is more exciting than that one.", "This is the most exciting film."],
       ["My bike is better than yours.", "This is the best bike I've ridden."]],
      "Observe than, the et les changements de forme des adjectifs.",
      [Q("Which word often follows a comparison between two things?", ["Than.", "The.", "Very."],0,"Relis taller than et more exciting than."),
       Q("What does « the tallest » mean?", ["One person is taller than one other person.", "Nobody is tall.", "The person is at the top of a group."],2,"Regarde « in her class ».")],
      "Comment formes-tu le comparatif et le superlatif ? Que fais-tu des adjectifs irréguliers ?"
    ),
    14: L(
      "Observe les questions et phrases négatives au présent et au passé.",
      [["She likes music.", "Does she like music?"],
       ["They play tennis.", "They don't play tennis."],
       ["He visited London.", "Did he visit London?"]],
      "Compare la forme du verbe avant et après does/did.",
      [Q("What happens to « likes » after « does »?", ["It becomes like.", "It becomes liking.", "It becomes liked."],0,"Compare la première paire : likes / like."),
       Q("Which auxiliary introduces the past question?", ["Does.", "Do.", "Did."],2,"Regarde la question sur London.")],
      "Quel rôle jouent do, does et did ? Que devient le verbe principal ?"
    ),
    15: L(
      "Observe des mots qui se ressemblent à l'oreille mais pas à l'écrit.",
      [["They're playing football.", "Their football is new."],
       ["You're my friend.", "Your friend is here."],
       ["It's cold today.", "The cat is cleaning its paws."]],
      "Cherche quel mot peut se remplacer par they are, you are ou it is.",
      [Q("Which word means « they are »?", ["There.", "Their.", "They're."],2,"Essaie de remplacer chaque mot par they are."),
       Q("Which word shows that the paws belong to the cat?", ["Its.", "It's.", "It is."],0,"Compare « it's cold » et « its paws ».")],
      "Comment distinguer ces mots et contractions qui se prononcent de façon proche ?"
    ),
    16: L(
      "Observe les majuscules et les apostrophes dans les phrases anglaises.",
      [["I live in France.", "My cousin lives in Spain."],
       ["We meet on Friday.", "School starts in September."],
       ["I'm happy.", "She doesn't know."]],
      "Observe les noms de pays, les jours, les mois, le pronom I et les contractions.",
      [Q("Which words always have a capital letter in the examples?", ["Friday and September.", "Live and cousin.", "Meet and school."],0,"Regarde les jours et les mois."),
       Q("What does « doesn't » contain?", ["A hyphen.", "An apostrophe marking omitted letters.", "Two words with a space."],1,"L'apostrophe remplace une ou plusieurs lettres.")],
      "Dans quels cas faut-il une majuscule ? À quoi sert l'apostrophe ?"
    ),
    17: L(
      "Observe les formes qui suivent différents verbes.",
      [["I enjoy reading.", "I want to read."],
       ["She finished cooking.", "She decided to cook."],
       ["He avoids driving.", "He hopes to drive."]],
      "Repère les verbes suivis de -ing et ceux suivis de to + infinitif.",
      [Q("Which form follows « enjoy » in the examples?", ["To + base verb.", "Verb + -ing.", "Past participle."],1,"Regarde « enjoy reading »."),
       Q("Which form follows « decided »?", ["To + base verb.", "Verb + -ing.", "Auxiliary do + base verb."],0,"Regarde « decided to cook ».")],
      "Après quels verbes emploie-t-on -ing ou to + infinitif ?"
    ),
    18: L(
      "Observe la différence entre une situation possible et une situation imaginaire.",
      [["If it rains, I'll stay home.", "If I had wings, I would fly."],
       ["If you study, you will improve.", "If I were rich, I would travel."],
       ["I'll call you if I arrive early.", "I would help if I had time."]],
      "Observe les formes verbales dans la partie avec if et dans la conséquence.",
      [Q("Which sentence describes an imagined situation?", ["If you study, you will improve.", "If I had wings, I would fly.", "I'll call you if I arrive early."],1,"La personne a-t-elle réellement des ailes ?"),
       Q("Which word begins the consequence in the imaginary examples?", ["Would.", "Will.", "Did."],0,"Regarde « I would fly » et « I would travel ».")],
      "Comment distingues-tu condition possible et hypothèse imaginaire ?"
    ),
    19: L(
      "Observe quand une phrase insiste sur l'auteur d'une action ou sur ce qui la subit.",
      [["The chef prepared the meal.", "The meal was prepared by the chef."],
       ["People speak English here.", "English is spoken here."],
       ["Someone built the bridge in 1900.", "The bridge was built in 1900."]],
      "Observe qui ou quoi devient sujet, ainsi que la forme du verbe.",
      [Q("In « The meal was prepared by the chef », what is the subject?", ["The chef.", "The meal.", "Prepared."],1,"La phrase commence par The meal."),
       Q("Which pattern do « is spoken » and « was built » share?", ["Be + past participle.", "Have + verb-ing.", "Did + infinitive."],0,"Regarde l'auxiliaire et la forme du deuxième verbe.")],
      "Comment passe-t-on de la voix active à la voix passive ? Pourquoi le fait-on ?"
    ),
    20: L(
      "Observe des choix de mots qui ne se traduisent pas mot à mot du français.",
      [["I actually live in Paris.", "I currently live in Paris."],
       ["I do my homework.", "I make a cake."],
       ["She said hello.", "She told me a story."]],
      "Compare le sens des mots proches et les verbes associés aux expressions.",
      [Q("Which adverb means « actuellement »?", ["Actually.", "Currently.", "Finally."],1,"Actually introduit souvent « en réalité »."),
       Q("Which expression is idiomatic English?", ["Make my homework.", "Do my homework.", "Create my homework."],1,"Relis la deuxième paire.")],
      "Comment éviter les faux-amis et choisir les mots qui se combinent naturellement ?"
    ),
    21: L(
      "Observe l'article devant les pays, villes, rivières et autres noms propres.",
      [["I live in France.", "I live in the United States."],
       ["We visited London.", "We crossed the Thames."],
       ["She climbed Mount Fuji.", "They crossed the Alps."]],
      "Classe les noms de lieux avec the et sans the ; cherche leur catégorie.",
      [Q("Which geographical name uses « the »?", ["France.", "London.", "The Thames."],2,"Cherche le nom d'un fleuve."),
       Q("Which pair is correct?", ["The France / the Alps.", "France / the Alps.", "France / Alps."],1,"Relis la première et la troisième paires.")],
      "Quelles catégories de noms propres prennent the et lesquelles n'en prennent généralement pas ?"
    ),
    22: L(
      "Observe comment relier des informations et comment renvoyer au sujet.",
      [["This is the girl who won.", "This is the book which I bought."],
       ["I met a boy whose dog is famous.", "The film that we saw was funny."],
       ["I made the cake myself.", "They enjoyed themselves."]],
      "Repère les mots qui remplacent une personne, une chose ou expriment la possession ; puis observe les formes en -self/-selves.",
      [Q("Which relative word refers to a person in these examples?", ["Which.", "Who.", "Myself."],1,"Regarde « the girl ... won »."),
       Q("Which word matches « they » in a reflexive expression?", ["Themselves.", "Themself.", "Ourselves."],0,"Regarde la dernière phrase.")],
      "Quand emploie-t-on who, which, whose et les pronoms réfléchis ?"
    )
  };
})();
