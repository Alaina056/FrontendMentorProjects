let data =[
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]
  
for (let i=0; i<data.length;i++) {

    let parent_div = document.createElement('div');
    parent_div.innerHTML = `<p>${data[i].category}</p>
    <p class='score_para'> <span class='score_span'>${data[i].score}</span> / 100 </p>`
  
    let element = document.getElementById('sum-container');
    element.appendChild(parent_div);

    let lastChild = element.lastElementChild;
    lastChild.setAttribute('id', `${data[i].category.toLowerCase()}`);
    lastChild.setAttribute('class', `sum_div`);
}