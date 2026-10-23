/* New error codes and inductive tasks; authored for collège A1-B1. */
(function(){
const raw=[[23,"There is / There are","grammar","A1",["There is a cat in the garden.","There are two cats in the garden."],"How many cats are there?",["One","Two","None"],1,"Singulier : there is ; pluriel : there are."],[24,"Some / Any / No","grammar","A1-A2",["I've got some apples.","I haven't got any apples."],"Which sentence is negative?",["The first","The second","Both"],1,"Some apparaît souvent dans l'affirmation ; any dans la négation et certaines questions ; no exprime l'absence."],[25,"Much / Many / A lot of","grammar","A2",["I have many books.","I don't have much time."],"Which noun can be counted?",["Time","Books","Both"],1,"Many accompagne les dénombrables ; much les indénombrables ; a lot of convient souvent aux deux."],[26,"Le génitif ('s)","grammar","A1-A2",["This is Lucy's bike.","This is the door of the school."],"Who owns the bike?",["Lucy","The school","Nobody"],0,"On exprime fréquemment la possession d'une personne avec 's : Lucy's bike."],[27,"This / That / These / Those","grammar","A1",["This book is mine.","These books are mine."],"Which form refers to more than one book?",["This","These","Both"],1,"This/that sont singuliers ; these/those sont pluriels ; this/these indiquent la proximité."],[28,"Like / Love / Hate + -ing","sentence","A1-A2",["I like reading.","I love swimming."],"Which form follows like and love here?",["The -ing form","The past simple","Will"],0,"Pour parler de ses goûts, on emploie souvent like/love/hate + nom ou verbe en -ing."],[29,"Les mots interrogatifs","sentence","A1-A2",["Where do you live?","When does she arrive?"],"What appears before the subject in both questions?",["A helping verb","An adjective","A comma"],0,"Les questions ordinaires utilisent souvent mot interrogatif + auxiliaire + sujet + verbe."],[30,"La négation au présent et au passé","sentence","A1-A2",["He doesn't eat meat.","They didn't watch the film."],"Which verb form follows doesn't / didn't?",["Base verb","Verb + -s","Verb + -ed"],0,"Don't/doesn't/didn't portent la négation, suivis généralement de la base verbale."],[31,"Prétérit : verbes irréguliers","grammar","A1-A2",["I went to school yesterday.","She saw a fox yesterday."],"Which past tense form comes from go?",["Goed","Went","Gone"],1,"Certains verbes ont un prétérit irrégulier : go → went, see → saw."],[32,"Adjectifs en -ed / -ing","vocabulary","A2",["The film is exciting.","I am excited about the film."],"Which adjective describes the person's feeling?",["Exciting","Excited","Neither"],1,"-ing décrit souvent ce qui provoque une émotion ; -ed, ce que ressent une personne."],[33,"Because / So / But / Although","writing","A2-B1",["I stayed home because I was tired.","I was tired, so I stayed home."],"Which word introduces the cause?",["Because","So","But"],0,"Because introduit une cause ; so une conséquence ; but/although une opposition."],[34,"Say / Tell / Speak / Talk","vocabulary","A2",["She said hello.","She told me a story."],"Which verb here takes a person directly after it?",["Said","Told","Both"],1,"Tell prend souvent un complément de personne : tell someone something ; say something (to someone)."],[35,"Les adverbes de fréquence","grammar","A1-A2",["She often plays tennis.","She is always late."],"Where is always placed in the second sentence?",["Before is","After is","After late"],1,"L'adverbe de fréquence se place souvent avant le verbe principal, mais après be."],[36,"Have got / Have / Be","grammar","A1-A2",["I've got a new bike.","I am 13 years old."],"Which verb expresses age in English?",["Have got","Be","Do"],1,"En anglais, on utilise be pour l'âge et have/have got pour la possession."],[37,"Les expressions de quantité","vocabulary","A2",["There are a few chairs.","There is a little milk."],"Which expression describes a small amount of something uncountable?",["A few","A little","Many"],1,"A few concerne le dénombrable pluriel ; a little l'indénombrable."],[38,"Les phrases complètes","writing","A2-B1",["Because I was tired.","I stayed home because I was tired."],"Which sentence communicates a complete main idea?",["The first","The second","Neither"],1,"Une phrase complète comporte généralement une proposition principale ; une subordonnée isolée peut être incomplète."],[39,"Éviter les répétitions","writing","A2-B1",["My town is nice. My town is nice.","My town is lively, friendly and welcoming."],"Which text gives more precise information?",["The first","The second","Both equally"],1,"Pour enrichir un texte, varie le lexique et remplace les répétitions par des détails précis."],[40,"Choisir le bon registre","writing","A2-B1",["Hey! Send me the info ASAP.","Dear Sir or Madam, could you please send me the information?"],"Which sentence suits a formal email?",["The first","The second","Both"],1,"Adapte formules, politesse et niveau de langue au destinataire."]];
const codes=[],discovery={};
for(const [id,title,family,level,pair,question,options,correct,rule] of raw){
 const sampleWrong=options[correct]; // labels are for noticing, not corrections
 const extra= id===23?["There is three cats.","There are three cats."]:
 id===24?["I haven't got some books.","I haven't got any books."]:
 id===25?["I have much friends.","I have many friends."]:
 id===26?["The bag of Lucy is here.","Lucy's bag is here."]:
 id===27?["This shoes are new.","These shoes are new."]:
 id===28?["I like swim.","I like swimming."]:
 id===29?["Where you live?","Where do you live?"]:
 id===30?["He don't like it.","He doesn't like it."]:
 id===31?["Yesterday, I goed home.","Yesterday, I went home."]:
 id===32?["I am boring by the movie.","I am bored by the movie."]:
 id===33?["I was tired so I stayed home because I was tired.","I stayed home because I was tired."]:
 id===34?["She said me hello.","She said hello to me."]:
 id===35?["He plays always football.","He always plays football."]:
 id===36?["I have 13 years old.","I am 13 years old."]:
 id===37?["There is a few milk.","There is a little milk."]:
 id===38?["Because I was tired.","I went home because I was tired."]:
 id===39?["My town is nice. My town is nice.","My town is lively and friendly."]:
 ["Hey teacher, gimme your answer.","Could you please explain your answer?"];
 const fix=[{wrong:extra[0],right:extra[1],explanation:rule}];
 const quiz=[
 {q:question,options,correct,explanation:rule},
 {q:"Which sentence is correct?",options:[extra[0],extra[1],"Both sentences are equally appropriate."],correct:1,explanation:rule},
 {q:"Choose the best explanation.",options:[rule,"Both forms always mean exactly the same thing.","English has no pattern for this."],correct:0,explanation:rule},
 {q:"Choose the correct example.",options:[extra[0],"Neither sentence is correct.",extra[1]],correct:2,explanation:rule}
 ];
 codes.push({id,title,summary:rule,rule,pitfalls:[rule],examples:[{wrong:extra[0],right:extra[1],note:rule}],quiz,fix,level,family});
 discovery[id]={
 focus:"Observe ces phrases avant de découvrir la règle.",
 samples:[pair,extra],
 lookAt:"Repère les formes qui changent et leur contexte.",
 questions:[
 {text:question,options,correct,hint:"Compare les deux phrases du premier groupe."},
 {text:"Which version is correct?",options:[extra[0],extra[1],"Neither"],correct:1,hint:"Observe les sujets, les mots et leur ordre."}
 ],
 hypothesis:"À partir des phrases, explique quand et comment on choisit la forme correcte."
 };
}
window.MTM_EXTRA_CODES=codes;
window.MTM_EXTRA_DISCOVERY=discovery;
window.MTM_FAMILIES=[
{id:"all",name:"Tous les codes",icon:"📚"},
{id:"grammar",name:"Grammar",icon:"🔵"},
{id:"vocabulary",name:"Vocabulary",icon:"🟣"},
{id:"sentence",name:"Sentence building",icon:"🟠"},
{id:"writing",name:"Writing skills",icon:"🟢"}
];
window.MTM_FAMILY_FOR_CODE={
 1:"grammar",2:"grammar",3:"grammar",4:"grammar",5:"grammar",6:"grammar",7:"grammar",8:"grammar",9:"grammar",
 10:"sentence",11:"grammar",12:"grammar",13:"grammar",14:"sentence",15:"vocabulary",16:"writing",17:"grammar",
 18:"grammar",19:"grammar",20:"vocabulary",21:"grammar",22:"grammar"
};
})();
