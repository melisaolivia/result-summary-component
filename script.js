document.addEventListener("DOMContentLoaded", function (event) {
    const jsonObject = 
    [{
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
      }]
    ;
  
    function DisplayAverageScore(jsonObject) { 
      // average value
      const totalScore = jsonObject.reduce((acc, obj) => acc + obj.score, 0);
      const averageScore = Math.round(totalScore / jsonObject.length);

      const averageRateElement = document.getElementById("average-rate");
      averageRateElement.textContent = averageScore;

      // result summary
      let resultSummary;
      switch (true) {
        case averageScore >= 90:
          resultSummary = "Awesome";
          break;
        case averageScore >= 80:
          resultSummary = "Really Great";
          break;
        case averageScore >= 70:
          resultSummary = "Great";
          break;
        case averageScore >= 60:
          resultSummary = "Good";
          break;
        case averageScore >= 50:
          resultSummary = "Okay";
          break;
        case averageScore >= 40:
          resultSummary = "Below Average";
          break;
        default:
          resultSummary = "Needs Improvement";
          break;
      }

      const resultSummaryElement = document.getElementById("result-summary");
      resultSummaryElement.textContent = resultSummary;
    }

    DisplayAverageScore(jsonObject);

    const listItem = document.querySelector(".list-items");

    // render the object to element
    jsonObject.forEach(item => {
        const Eachitem = document.createElement("div");
        Eachitem.className = "item-summary";
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
          ofOneHundread.className = "of-one-hundread";
        const flexGrow = document.createElement("div");
        flexGrow.className = "flex-grow";
        
        icon.src = item.icon;
        icon.alt = `${item.category} icon`;
        textCategory.textContent = item.category;
        textScore.textContent = item.score;
        ofOneHundread.textContent = "/ 100";
        
        Eachitem.appendChild(icon);
        Eachitem.appendChild(textCategory);
        Eachitem.appendChild(flexGrow);
        Eachitem.appendChild(textScore);
        Eachitem.appendChild(ofOneHundread);

        listItem.appendChild(Eachitem);
    });

    






















})