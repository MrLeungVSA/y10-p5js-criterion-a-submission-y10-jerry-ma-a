var game = new Game(
    {
        title: 'Jerry Is Best Science Guy',
        rounds: 5,
        url: 'https://poddle.io/play/td/',
        facebook_id: '120r87240872408',
        lives: 3,
        questions: [
            {
                prompt: 'What is the symbol for Sodium?',
                answers: [
                    'S',
                    'So',
                    'Na'
                ],
                correct: 2
            },
            {
                prompt: 'The properties of metals include all but which one of the following',
                answers: [
                    'Conductors of heat',
                    'Ductile - you can stretch it in strings',
                    'Breaks easily'
                ],
                correct: 2
            },
            {
                prompt: 'Metal + acid -> Salt + ............. gas',
                answers: [
                    'Oxygen',
                    'Carbon dioxide',
                    'Hydrogen'
                ],
                correct: 2
            },
            {
                prompt: 'What is the function of respiration in living things?',
                answers: [
                    'So they can detect and respond to living things',
                    'To oxygenate blood in order to do exercise',
                    'To produce new offspring'
                ],
                correct: 1
            },
            {
                prompt: ' Which is the chemical property of Carbon dioxide?',
                answers: [
                    'Turns lime water milky',
                    'Heavier than air',
                    'Gas'
                ],
                correct: 2
            }
        ],
        judgements: {
            2000: {
                self: "I'm a proper fanboy.",
                third: "Jerry know your good science"
            },
            1000: {
                self: "I like it, I'm not a nerd about it.",
                third: "Not bad"
            },
            500: {
                self: "I wasn't really paying attention.",
                third: "you kinda suck at science"
            },
            0: {
                self: "I'm a 6-minute tracking shot away from oblivion.",
                third: "Jerry no like you, Your Science knowledge sucks."
            }
        }
    }
);
