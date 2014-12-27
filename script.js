function madLib () {
    var storyDiv = document.getElementById("story");
    var name = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;
    var plural = document.getElementById("plural-noun").value;
    
    storyDiv.innerHTML = name + " woke up to hear " + verb + " on the " + noun + " . It was so " + adjective + " and " + name + " was afraid that it might be an intruder. Skipping over his " + plural + " he fell to the floor. The last thing he saw was the door creeping open." ;
}

var getLib = document.getElementById('button');
getLib.addEventListener('click', madLib);
