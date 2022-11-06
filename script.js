const btnNew = document.querySelector('.btn--new');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
let plaing = true;

resetGame();

function resetGame()
{
    playing = true;
    score0.textContent = '0';
    score1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}
btnNew.addEventListener('click', resetGame);

const rollDice = document.querySelector('.btn--roll');

let currentScore = 0;

function rollingDice()
{
    if(playing)
    {
        const random = Math.floor(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${random}.png`;

        if(random === 1)
        {
            editTurn();
        }
        else
        {
            currentScore += random;
            if(player0.classList.contains('player--active'))
            {
                current0.textContent = `${currentScore}`;
            }
            else
            {
                current1.textContent = `${currentScore}`;
            }
        }
    }
}

rollDice.addEventListener('click', rollingDice);


const hold = document.querySelector('.btn--hold');

function holdTheScore()
{
    if(player0.classList.contains('player--active') && playing)
    {
        const heldScore = currentScore + parseInt(score0.textContent);
        score0.textContent = `${heldScore}`;
        if(heldScore>=20)
        {
            playing = false;
            player0.classList.add('player--winner');
        }
        editTurn();
    }
    else if(player1.classList.contains('player--active') && playing)
    {
        const heldScore = currentScore + parseInt(score1.textContent);
        score1.textContent = `${heldScore}`;
        if(heldScore>=20)
        {
            playing = false;
            player1.classList.add('player--winner');
        }
        editTurn();
    }
}

hold.addEventListener('click', holdTheScore);


function editTurn()
{
    if(playing)
    {
        currentScore = 0;
        current0.textContent = '0';
        current1.textContent = '0';
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
}