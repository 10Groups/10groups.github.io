questions =  [
  
//Economic Regulation - Planned
{"id": 0, "question": "In the current system, it is necessary for the government to intervene in the economy to protect consumers.", "effects": {"y": -2, "ay": 2}},
{"id": 2, "question": "Without state intervention, monopolies would violate human rights.", "effects": {"y": -2, "ay": -2}},
//Economic Regulation - Laissez Faire
{"id": 2, "question": "Most corporations should be state-owned.", "effects": {"y": -2, "ay": 2}},
{"id": 3, "question": "The market regulates itself, since unjust monopolies are punished by bankrupcy.", "effects": {"y": -2, "ay": -2}},
{"id": 4, "question": "A regulated economy is more unfair for the people, when compared to a laissez-faire economy.", "effects": {"y": -2, "ay": -2}},
  
//Economic System - Capitalism
{"id": 5, "question": "Freedom of business is the best practical way a society can prosper.", "effects": {"x": 2, "ax": 2}},
{"id": 6, "question": "Communism is an ideology that would never work in practice.", "effects": {"y": 2, "ay": 2}},
{"id": 7, "question": "Governmental social programs should be replaced with private charities and organizations.", "effects": {"x": 2, "ax": 2}},
{"id": 8, "question": "If wages and a currency exists, there should not be a minimum wage.", "effects": {"x": 2, "ax": 2}},
{"id": 9, "question": "All healthcare services should be privatized.", "effects": {"x": 2, "ax": 2}},
{"id": 20, "question": "Taxing any individual using involuntary methods can be considered an act of theft or agression.", "effects": {"x": 2, "ax": 2}},
{"id": 21, "question": "The Justice System should be partially privatized, or even fully privatized.", "effects": {"x": 2, "ax": 2}},
{"id": 22, "question": "Inheritance is a legitimate form of wealth.", "effects": {"x": 2, "ax": 2}},
//Economic System - Socialism
{"id": 23, "question": "From each according to his ability, to each according to his needs.", "effects": {"x": -2, "ax": -2}},
{"id": 24, "question": "Oppression by corporations is a huge concern.", "effects": {"x": -2, "ax": -2}},
{"id": 25, "question": "The means of production should belong to the workers.", "effects": {"x": -2, "ax": -2}},
{"id": 25, "question": "Roads and transportation should be publicly owned.", "effects": {"x": -2, "ax": -2}},
{"id": 26, "question": "Electricity should be publicly owned.", "effects": {"x": -2, "ax": -2}},
  
//Governmental System - Autocracy
{"id": 27, "question": "An autocracy is more beneficial than any democratic system.", "effects": {"y": 2, "bx": -2}},
{"id": 28, "question": "A beneficial democracy requires high levels of education.", "effects": {"y": 2, "bx": -2}},
//Governmental System - Democracy
{"id": 29, "question": "Liberal democracy is the least worst system for leadership.", "effects": {"y": -2, "bx": 2}},
  
//Governmental Size - Authoritarian
{"id": 20, "question": "The government is required for a well-functioning society to exist.", "effects": {"y": 2, "by": 2}},
{"id": 21, "question": "Violence is not acceptable when protesting a government.", "effects": {"y": 2, "by": 2}},
{"id": 22, "question": "The sacrifice of some civil liberties is necessary to protect us from acts of terrorism.", "effects": {"y": 2, "by": 2}},
{"id": 23, "question": "When a threat arrives, some liberties should be sacrificed in order to maintain stability and prosperity.", "effects": {"y": 2, "by": 2}},
//Governmental Size - Libertarian
{"id": 24, "question": "Any action that does not impose agression on any person should not be considered a criminal offence.", "effects": {"y": -2, "by": -2}},
{"id": 25, "question": "All authority should be questioned.", "effects": {"y": -2, "by": -2}},
{"id": 26, "question": "The existence of the state is a violation of our liberty and rights.", "effects": {"y": -2, "by": -2}},

//Diplomatic Applicability - Universal
{"id": 27, "question": "My political values should be spread as much as possible.", "effects": {"cx": -2}},
{"id": 28, "question": "Countries with authoritarian governments should be denounced.", "effects": {"cx": -2}},
//Diplomatic Applicability - Particular
{"id": 29, "question": "Different countries and cultures have different preferences for the type of government.", "effects": {"cx": 2}},

//Diplomatic Relations - Nationalism
{"id": 30, "question": "I will only support international organizations that align with my political beliefs.", "effects": {"cy": 2}},
{"id": 31, "question": "National sovereignty is very important.", "effects": {"cy": 2}},
//Diplomatic Relations - Globalism
{"id": 32, "question": "A global nation where all countries are united will be beneficial to humanity.", "effects": {"cy": -2}},
{"id": 33, "question": "A global organization that is generally beneficial should hold a substantial amount of power.", "effects": {"cy": -2}},
{"id": 34, "question": "I support Regional Unions, like the European Union.", "effects": {"cy": -2}},
  
//Societal Tradition - Tradition
{"id": 35, "question": "It's important that we maintain our culture and tradition.", "effects": {"dx": 2}},
//Societal Tradition - Progress
{"id": 36, "question": "Religion is mostly fictional.", "effects": {"dx": -2}},
{"id": 37, "question": "Traditions are of no value on their own.", "effects": {"dx": -2}},
{"id": 38, "question": "I support the LGBT Community.", "effects": {"dx": -2}},
{"id": 39, "question": "I support the Black Lives Matter organization.", "effects": {"dx": -2}},
{"id": 40, "question": "If taxation exists, churches should be taxed the same way other institutions are taxed.", "effects": {"dx": -2}},

//Societal Change - Conserve
{"id": 41, "question": "Rapid change often leads to the worsening of people's lives.", "effects": {"dy": 2}},
{"id": 42, "question": "Reforms should happen gradually and slowly.", "effects": {"dy": 2}},
//Societal Change - Reform
{"id": 43, "question": "Thinking in the long term is more important than thinking in the short term.", "effects": {"dy": -2}},
{"id": 44, "question": "The current political system in my nation is flawed.", "effects": {"dy": -2}},

//Technological Acceleration - Decelerate
{"id": 45, "question": "Technology is negatively affecting modern society.", "effects": {"ex": -2}},
{"id": 46, "question": "The Industrial Revolution and its consequences have been a disaster for the human race.", "effects": {"ex": -2}},
{"id": 47, "question": "Usage of genetic modification for animals and plants should be minimized.", "effects": {"ex": -2}},
{"id": 48, "question": "Modernity and social progress has led to a decrease of happiness, and often lacks meaning.", "effects": {"ex": -2}},
  
//Technological Transhumanism - Transhumanism
{"id": 49, "question": "Getting past physical limitations through technology would be beneficial to mankind.", "effects": {"ey": 2}},
{"id": 50, "question": "Technology that improves mental and physical capabilities shouldn't be used, in any political system.", "effects": {"ey": 2}},
//Technological Transhumanism - Primitivism
{"id": 51, "question": "Technology that improves mental and physical capabilities shouldn't be used, in any political system.", "effects": {"ey": -2}},
{"id": 52, "question": "The risks of transhumanism overweighs the benefits.", "effects": {"ey": -2}},

//Law System - Civil Law
{"id": 53, "question": "Law principles should be codified into a referable system.", "effects": {"fx": 2}},
{"id": 54, "question": "Lawmakers and legal experts should hold more influence than judges.", "effects": {"fx": 2}},
//Law System - Common Law
{"id": 55, "question": "Courts should reference to other judicial decisions.", "effects": {"fx": -2}},
{"id": 56, "question": "Judges should hold more power than legislators.", "effects": {"fx": -2}},
{"id": 57, "question": "If a decision cannot be made in courts, relevant cases in the past should be referenced.", "effects": {"fx": -2}},

//Law Focus - Punitive
{"id": 58, "question": "A rehabilitative system is unjust.", "effects": {"fy": 2}},
{"id": 59, "question": "Punishment should be valued, more than that of rehabilitation.", "effects": {"fy": 2}},
{"id": 60, "question": "It's a waste of time trying to rehabilitate some criminals.", "effects": {"fy": 2}},
{"id": 61, "question": "I support capital punishment.", "effects": {"fy": 2}},
//Law Focus - Rehabilitive
{"id": 62, "question": "Everybody deserves a second chance.", "effects": {"fy": -2}},

//Cultural Hierarchy - Equality
{"id": 63, "question": "A system of equal outcomes should be established.", "effects": {"gx": -2}},
{"id": 64, "question": "People should be treated equally regardless of their groups and characteristics.", "effects": {"gx": -2}},
//Cultural Hierarchy - Hierarchy
{"id": 65, "question": "Even though equal opportunities can lead to equal outcomes, society should still focus on equal opportunities, and not equal outcomes.", "effects": {"gx": -2}},
{"id": 66, "question": "Hierarchies will inevitably be formed in every society, at any time.", "effects": {"gx": -2}},
{"id": 67, "question": "Any well-functioning society requries a hierarchy.", "effects": {"gx": -2}},

//Cultural Assimilation - Monocultural
{"id": 68, "question": "If we accept migrants into our borders, the migrants should be expected to assimilate into our culture.", "effects": {"gy": 2}},
{"id": 69, "question": "Multiculturalism is unrealistic.", "effects": {"gy": 2}},
{"id": 70, "question": "Some cultures are inherently suprerior to other cultures.", "effects": {"gy": 2}},
//Cultural Assimilation - Multicultural
{"id": 71, "question": "My nation should be more diverse.", "effects": {"gy": 2}},
{"id": 72, "question": "Monoculturalism is disastrous for society.", "effects": {"gy": 2}},
{"id": 73, "question": "Some cultures are inherently suprerior to other cultures.", "effects": {"gy": 2}},

//Procedural Compromize - Compromize 
{"id": 74, "question": "Compromizes should be made in order to suit the needs of most people.", "effects": {"hx": -2}},
{"id": 75, "question": "Compromizing can avoid unnecessary conflict.", "effects": {"hx": -2}},
{"id": 76, "question": "Adopting radical ideas isn't possible unless compromizes are made.", "effects": {"hx": -2}},

//Procedural Transition - Transitional
{"id": 77, "question": "A transitional state should be made.", "effects": {"hy": 2}},
//Procedural Transition - Direct
{"id": 78, "question": "My ideology should be established as quick as possible.", "effects": {"hy": -2}},
{"id": 79, "question": "My political ideals can be acheived within 10 years.", "effects": {"hy": -2}},
  
//Political Extremism - Radical
{"id": 80, "question": "My ideology is sometimes considered 'extreme'.", "effects": {"ix": 2}},
{"id": 81, "question": "Violence and Revolutions are required in order to establish my ideology.", "effects": {"ix": 2}},
{"id": 82, "question": "The current mainstream societal attitudes are problematic.", "effects": {"ix": 2}},
{"id": 83, "question": "My political views are very different from the current status quo.", "effects": {"ix": 2}},

//Political Engagement - Apolitical
{"id": 84, "question": "Politics is boring to me.", "effects": {"iy": -2}},
{"id": 85, "question": "Nearly all politicians are evil and problematic, no matter what their political ideals are.", "effects": {"iy": -2}},
{"id": 86, "question": "Politics should be avoided in daily life.", "effects": {"iy": -2}},
//Political Engagement - Politicized
{"id": 87, "question": "Politics is very important for society, and shouldn't be ignored.", "effects": {"iy": 2}}
  
];
