let aElement = document.getElementsByClassName("sendMessage")[0];

aElement.addEventListener('click', createMessage);

function createMessage(event) {
    event.preventDefault();
    let inputUser = document.getElementsByClassName("typeMessage")[0];
    let body = document.body;    
    let pElement = document.createElement('p');
    pElement.className = 'userMessage';    
    body.appendChild(pElement);
    pElement.textContent = inputUser.value;
    document.getElementsByClassName("typeMessage")[0].value = "";
    return pElement;
};

function createBotMessage() {
    let body = document.body;    
    let botMessage = document.createElement('p');
    body.appendChild(botMessage);
    botMessage.style.width = '470px';
    botMessage.style.height = '30px';
    botMessage.style.position = 'relative';
    botMessage.style.bottom = '620px';
    botMessage.style.left = '60px';    
    botMessage.style.background = 'rosybrown';    
    botMessage.style.fontSize = 'x-large';    
    botMessage.style.wordWrap = 'break-word';
    botMessage.textContent = createM();
};

function createM() {
    let messagesList = ['Hi there!', 'How are you?', 'Do you wanna talk?'];
    let index = 0; 

    function showMessage() {        
        createBotMessage(messagesList[0]);
        index++;
        if(index === messagesList.length) {
            index = 0;
        };           
    };

    let showMessage1 = setInterval(showMessage, 5000);
    
    return showMessage1;
}

createM();