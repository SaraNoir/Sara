const data = {
    en: [
        {
            "key": "name:",
            "value": "Sara",
            "id": 0
        },
        {
            "key": "surname:",
            "value": "Esu",
            "id": 1
        },
        {
            "key": "age:",
            "value": calculateAge("11/12/1992"),
            "id": 2
        },
        {
            "key": "city:",
            "value": "Cagliari",
            "id": 3
        },
        {
            "key": "birth date:",
            "value": "11/12/1992",
            "id": 4
        },
    ],

    it: [
        {
            "key": "nome:",
            "value": "Sara",
            "id": 0
        },
        {
            "key": "cognome:",
            "value": "Esu",
            "id": 1
        },
        {
            "key": "età:",
            "value": calculateAge("11/12/1992"),
            "id": 2
        },
        {
            "key": "città:",
            "value": "Cagliari",
            "id": 3
        },
        {
            "key": "data di nascita:",
            "value": "11/12/1992",
            "id": 4
        },
    ]
};

function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

export default data;


