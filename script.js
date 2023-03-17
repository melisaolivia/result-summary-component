document.addEventListener("DOMContentLoaded", function (event) {
    const jsonData = 
    `[{
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg",
        "background-color" : "#FFF6F5",
        "text-color" : "hsl(0, 100%, 67%)"
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg",
        "background-color" : "#FFFBF2",
        "text-color" : "hsl(39, 100%, 56%)"
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg",
        "background-color" : "#F2FBFA",
        "text-color" : "hsl(166, 100%, 37%)"
      },
      {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg",
        "background-color" : "#F3F3FD",
        "text-color" : "hsl(234, 85%, 45%)"
      }]`
    ;

    const jsonObject = JSON.parse(jsonData);

    console.log(jsonObject);
    console.log(typeof jsonObject);
    // AVERAGE RESULT (NILAI RATA2)


    // ITEMS SUMMARY
    // parent
    const listItem = document.querySelector(".list-items");
    

    jsonObject.forEach(item => {
        const Eachitem = document.createElement("div");
        Eachitem.className = "item-summary";
        // Eachitem.style.backgroundColor = item.background-color;
        Eachitem.style["background-color"] = item["background-color"];
        // EACH ITEM

        const icon = document.createElement("img");
        const textCategory = document.createElement("p");
        textCategory.className = "text-category";
        textCategory.style["color"] = item["text-color"];

        const score = document.createElement("div");
        score.className = "score";
        const textScore = document.createElement("p");
        const ofOneHundread = document.createElement("p");
        const flexGrow = document.createElement("div");
          flexGrow.className = "flex-grow";



        icon.src = item.icon;
        icon.alt = `${item.category} icon`;
        textCategory.textContent = item.category;
        textScore.textContent = item.score;
        ofOneHundread.textContent = " / 100";
        
        Eachitem.appendChild(icon);
        Eachitem.appendChild(textCategory);
        Eachitem.appendChild(flexGrow);
        Eachitem.appendChild(textScore);
        Eachitem.appendChild(ofOneHundread);

        listItem.appendChild(Eachitem);
    });

    /*
    90 or higher: Awesome
    80-89: Really great
    70-79: Great
    60-69: Good
    50-59: Okay
    40-49: Below average
    39 or lower: Needs improvement
    */

    






















})