window.onload = () => {
    // what else should happen when the app is initialized?
    //  ie. before the user can use it
    //  often this will be rendering state to the UI


    // log the initial state
    log.push({
        state: deepClone(state)
    });
    // this log will always
    console.log(log);

    addCheatButton();

};

function addCheatButton() {
    const div = document.createElement('div');
    div.setAttribute('class', 'modify-buttons');

    const btn = document.createElement('button');
    btn.innerHTML = 'Cheat';
    btn.setAttribute('id', 'cheat');

    btn.addEventListener('click', cheatHandler);

    div.appendChild(btn);

    const btnSection = document.getElementsByClassName('modify')[0];
    btnSection.appendChild(div);
}