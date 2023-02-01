/* Here is where our main goal is to have functions that create Objects and place them within the NPC Generation area as listed items.

1. Each NPC should have all the stats listed in the manual entry area.
2. Names should generated should be random and legible. Potentially a regex might work with a pattern of: [a-z],[a,e,i,o,u],[a-z],[a-z],....etc
3. People should be able to save each profile either as a jpeg, png, or text file.
4. Manually entered NPC stats should generate in the NPC generated area when using the "give life button"
5. Each NPC should have 3 Hobbies randomly chosen from an array.
6. Pressing any button should wipe the generated area clean and generate new random profiles, or manually entered profiles.
*/

let npcHobbiesArr = [
  "Sports", "Exercise", "Writing", "Painting", "Brawling", "Strength Contests", "Chess", "Board Games", "Singing", "Crafts"
]

let npcPersonalityArr = [
   "Argumentative", "Passionate", "Calm", "Sleepy", "Bubbly", "Arrogant",   "Happy", "Sweet", "Loving", "Shy", "Loud"
]

let npcGenIdArr = [
  "Female", "Non-binary", "Genderfluid", "Male"
]

let npcNameList = [ 
  "Zahir", "Saphirre", "Amare", "Zenobia", "Atwood", "Yzebel",  "Brigette", "Kester", "Kyle", "David", "Ricky", "Mike", "J.J.", "Katy",  "Suyin", "Quid",
  "Salvos", "Ruvia", "Osias", "Shiloh", "Pauldron",  "Falfir", "Sharn", "Aura", "Bubbles", "Laersdok"
]

function generateNpcProfiles() {
  document.getElementById("generatedNpcResultsA").innerHTML = 
    npcNameList[Math.floor(Math.random() * npcNameList.length)]
    + "<br>" + 
    Math.floor(Math.random() * 100) 
    + "<br>" +
    npcGenIdArr[Math.floor(Math.random() * npcGenIdArr.length)] 
    + "<br>" + 
    npcHobbiesArr[Math.floor(Math.random() * 
    npcHobbiesArr.length)] 
    + ", " + 
    npcHobbiesArr[Math.floor(Math.random() * npcHobbiesArr.length) + 2] 
    + "<br>" + 
    npcPersonalityArr[Math.floor(Math.random() * 
    npcPersonalityArr.length)];
  
  document.getElementById("generatedNpcResultsB").innerHTML = 
    npcNameList[Math.floor(Math.random() * npcNameList.length)]
    + "<br>" + 
    Math.floor(Math.random() * 100) 
    + "<br>" +
    npcGenIdArr[Math.floor(Math.random() * npcGenIdArr.length)] 
    + "<br>" + 
    npcHobbiesArr[Math.floor(Math.random() * 
    npcHobbiesArr.length)] 
    + ", " + 
    npcHobbiesArr[Math.floor(Math.random() * npcHobbiesArr.length) + 2] 
    + "<br>" + 
    npcPersonalityArr[Math.floor(Math.random() * 
    npcPersonalityArr.length)];
  
  document.getElementById("generatedNpcResultsC").innerHTML = 
    npcNameList[Math.floor(Math.random() * npcNameList.length)]
    + "<br>" + 
    Math.floor(Math.random() * 100) 
    + "<br>" +
    npcGenIdArr[Math.floor(Math.random() * npcGenIdArr.length)] 
    + "<br>" + 
    npcHobbiesArr[Math.floor(Math.random() * 
    npcHobbiesArr.length)] 
    + ", " + 
    npcHobbiesArr[Math.floor(Math.random() * npcHobbiesArr.length) + 2] 
    + "<br>" + 
    npcPersonalityArr[Math.floor(Math.random() * 
    npcPersonalityArr.length)];
};

console.log(npcNameResult);
