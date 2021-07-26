// Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.

// Ex: given the following strings...

// sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
// sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
// sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]


function uncommonWords ( strA, strB){
    var s1 = strA.split(' ');
    var s2 = strB.split(' ');

   
    var uncommon1 =  s1.filter(x => !s2.includes(x))
   
    var uncommon2 = s2.filter(x => !s1.includes(x))
    
    return uncommon1.concat(uncommon2);

}

uncommonWords('copper coffee pot','hot coffee pot');