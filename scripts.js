const data = [
    //Asterion
    {loot: 0, dungeon: "Nieblas de Tirna Scithe", slot: "Head", name: "Gran yelmo de iracorteza", player: "Asterion", ID: 178703},
    {loot: 0, dungeon: "Nieblas de Tirna Scithe", slot: "Neck", name: "Colgante hilasenderos", player: "Asterion", ID: 178707},
    {loot: 0, dungeon: "Grim Batol", slot: "Cloak", name: "Mantón de trogg cosido", player: "Asterion", ID: 157597},
    {loot: 0, dungeon: "El Rompealbas", slot: "Chest", name: "Caparazón de sacerdote oscuro", player: "Asterion", ID: 221139},
    {loot: 0, dungeon: "Grim Batol", slot: "Wrist", name: "Brazales de alivio umbrío", player: "Asterion", ID: 56464},
    {loot: 0, dungeon: "La Petrocámara", slot: "Belt", name: "Faja con fisura de cristal", player: "Asterion", ID: 221079},
    {loot: 0, dungeon: "Asedio de Boralus", slot: "Boots", name: "Hundidores de grava", player: "Asterion", ID: 159428},
    {loot: 0, dungeon: "Asedio de Boralus", slot: "Ring 1", name: "Sortija del pillastre errante", player: "Asterion", ID: 162541},
    {loot: 0, dungeon: "Grim Batol", slot: "Ring 2", name: "Banda de Umbriss", player: "Asterion", ID: 56126},
    {loot: 0, dungeon: "Ara-Kara", slot: "Trinket 1", name: "Saco eclosionador de Ara-Kara", player: "Asterion", ID: 219314},
    {loot: 0, dungeon: "La Petrocámara", slot: "Trinket 2", name: "Fragmento de Skarmorak", player: "Asterion", ID: 219300},

    //Mizu
    {loot: 0, dungeon: "Nieblas de Tirna Scithe", slot: "Head", name: "Hood of the Hidden Path", player: "Mizu", ID: 178691},
    {loot: 0, dungeon: "Ciudad Tejida", slot: "Neck", name: "Elder's Hemolymphal Periapt", player: "Mizu", ID: 221181},
    {loot: 0, dungeon: "Ara-Kara", slot: "Cloak", name: "Swarmcaller's Shroud", player: "Mizu", ID: 221154},
    {loot: 0, dungeon: "Estela Necrótica", slot: "Wrist", name: "Risen Monstrosity Cuffs", player: "Mizu", ID: 178741},
    {loot: 0, dungeon: "Nieblas de Tirna Scithe", slot: "Belt", name: "Sapgorger Belt", player: "Mizu", ID: 178699},
    {loot: 0, dungeon: "Estela Necrótica", slot: "Boots", name: "Viscera-Stitched Footpads", player: "Mizu", ID: 178731},
    {loot: 0, dungeon: "Estela Necrótica", slot: "Ring 1", name: "Stitchflesh's Misplaced Signet", player: "Mizu", ID: 178736},
    {loot: 0, dungeon: "Ciudad Tejida", slot: "Ring 2", name: "Experiment 08752's Band", player: "Mizu", ID: 221189},
    {loot: 0, dungeon: "Estela Necrótica", slot: "Trinket 1", name: "Bottled Flayedwing Toxin", player: "Mizu", ID: 178742},
    {loot: 0, dungeon: "Ara-Kara", slot: "Trinket 2", name: "Ara-Kara Sacbrood", player: "Mizu", ID: 219314},
    {loot: 0, dungeon: "Ara-Kara", slot: "Weapon 1", name: "Harvester's Interdiction", player: "Mizu", ID: 221159},

    //Sheciro
    {loot: 0, dungeon: "Nieblas de Tirna Scithe", slot: "Neck", name: "Colgante hilasenderos", player: "Sheciro", ID: 178707},
    {loot: 0, dungeon: "Grim Batol", slot: "Cloak", name: "Capa de la prole azul", player: "Sheciro", ID: 56126},
    {loot: 0, dungeon: "Ciudad Tejida", slot: "Chest", name: "Jubón de aracnoescarcha", player: "Sheciro", ID: 221176},
    {loot: 0, dungeon: "Estela Necrótica", slot: "Wrist", name: "Grilletes del señor de la necrópolis", player: "Sheciro", ID: 178782},
    {loot: 0, dungeon: "La Petrocámara", slot: "Belt", name: "Cinturón de seguridad de Dorlita", player: "Sheciro", ID: 221087},
    {loot: 0, dungeon: "El Rompealbas", slot: "Boots", name: "Zapatillas membranosas", player: "Sheciro", ID: 221149},
    {loot: 0, dungeon: "Asedio de Boralus", slot: "Ring 1", name: "Sortija del pillastre errante", player: "Sheciro", ID: 162541},
    {loot: 0, dungeon: "Grim Batol", slot: "Ring 2", name: "Banda de Umbriss", player: "Sheciro", ID: 56126},
    {loot: 0, dungeon: "Nieblas de Tirna Scithe", slot: "Trinket 1", name: "Cambiante desatado", player: "Sheciro", ID: 178708},
    {loot: 0, dungeon: "El Rompealbas", slot: "Trinket 2", name: "Cristal potenciador de Anub'ikkaj", player: "Sheciro", ID: 219312},
    {loot: 0, dungeon: "Nieblas de Tirna Scithe", slot: "Main Hand", name: "Cetro del bosque de Scithe", player: "Sheciro", ID: 178709},
    {loot: 0, dungeon: "El Rompealbas", slot: "Off Hand", name: "Cubo umbrío rebosante", player: "Sheciro", ID: 221132},
    {loot: 0, dungeon: "Grim Batol", slot: "Staff", name: "Bastón de esencias succionadas", player: "Sheciro", ID: 56137},

    //Ulv
    {loot: 0, dungeon: "Nieblas de Tirna Scithe", slot: "Neck", name: "Colgante hilasenderos", player: "Ulv", ID: 178707},
    {loot: 0, dungeon: "Ciudad Tejida", slot: "Wrist", name: "Guardaescarchas de penumbra", player: "Ulv", ID: 221174},
    {loot: 0, dungeon: "La Petrocámara", slot: "Gloves", name: "Mandiletes comecadáveres", player: "Ulv", ID: 221080},
    {loot: 0, dungeon: "La Petrocámara", slot: "Belt", name: "Malla de anillas contra intrusos reforzada", player: "Ulv", ID: 221075},
    {loot: 0, dungeon: "Asedio de Boralus", slot: "Boots", name: "Escarpes de pisada segura", player: "Ulv", ID: 159379},
    {loot: 0, dungeon: "El Rompealbas", slot: "Ring 1", name: "Anillo de zelote devoto", player: "Ulv", ID: 221136},
    {loot: 0, dungeon: "Asedio de Boralus", slot: "Ring 2", name: "Sello de vigilancia de la ciudad", player: "Ulv", ID: 162542},
    {loot: 0, dungeon: "Grim Batol", slot: "Trinket 1", name: "Gracia de skardyn", player: "Ulv", ID: 56115},
    {loot: 0, dungeon: "Ara-Kara", slot: "Trinket 2", name: "Saco eclosionador de Ara-Kara", player: "Ulv", ID: 219314},
    {loot: 0, dungeon: "El Rompealbas", slot: "Weapon", name: "Empalacascos corvo", player: "Ulv", ID: 221143}

];

window.onload = function() {
    loadData();
};

function loadData() {
    clearSections();
    loadUser(data);
    loadDungeon(data);
}

function clearSections() {
    const userSection = document.getElementById('player-section');
    const dungeonSection = document.getElementById('dungeon-section');
    userSection.innerHTML = '';
    dungeonSection.innerHTML = '';
}

function loadUser(data) {
    const players = {
        "Asterion": {color: "deathknight", img: "https://render.worldofwarcraft.com/eu/character/sanguino/14/169413646-avatar.jpg"},
        "Mizu": {color: "druid", img: "https://render.worldofwarcraft.com/eu/character/sanguino/97/182006625-avatar.jpg"},
        "Sheciro": {color: "priest", img: "https://render.worldofwarcraft.com/eu/character/sanguino/137/88757897-avatar.jpg"},
        "Ulv": {color: "hunter", img: "https://render.worldofwarcraft.com/eu/character/sanguino/22/175983894-avatar.jpg"}
    };

    const userSection = document.getElementById('player-section');

    for (const player in players) {
        const itemsplayer = data.filter(item => item.player.includes(player));
        if (itemsplayer.length > 0) {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-6');

            const card = document.createElement('div');
            card.classList.add('card', 'mb-4');
            card.style.backgroundColor = '#1C1C1C';

            const header = document.createElement('div');
            header.classList.add('card-header', players[player].color + '-color');
            header.innerHTML = `<img src="${players[player].img}" alt="${player} Avatar" class="avatar-img"><h3>${player}</h3>`;
            card.appendChild(header);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const ul = document.createElement('ul');
            ul.classList.add('list-group');

            itemsplayer.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item', 'bg-light-dark');

                const link = document.createElement('a');
                link.href = `https://www.wowhead.com/item=${item.ID}`;
                link.setAttribute('data-wowhead', `item=${item.ID}`);
                link.textContent = item.name;

                if (item.loot === 1) {
                    link.style.textDecoration = "line-through";
                }

                const spandungeon = document.createElement('span');
                spandungeon.style.fontStyle = "italic";
                spandungeon.style.float = "right";
                spandungeon.style.color = "white";
                spandungeon.textContent = item.dungeon;

                li.appendChild(link);
                li.appendChild(spandungeon);
                ul.appendChild(li);
            });

            cardBody.appendChild(ul);
            card.appendChild(cardBody);
            cardDiv.appendChild(card);
            userSection.appendChild(cardDiv);
        }
    }
}

function loadDungeon(data) {
    const dungeonSection = document.getElementById('dungeon-section');
    const dungeons = {};

    // Agrupar por dungeon y excluir ítems looteados
    data.forEach(item => {
        if (item.loot === 0) {
            const dungeon = item.dungeon;
            if (!dungeons[dungeon]) {
                dungeons[dungeon] = [];
            }
            dungeons[dungeon].push(item);
        }
    });

    const dungeonKeys = Object.keys(dungeons).sort();

    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'mb-4');

    dungeonKeys.forEach((dungeon, index) => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-3', 'mb-4');

        const header = document.createElement('h4');
        header.textContent = dungeon;

        const ul = document.createElement('ul');
        ul.classList.add('list-group');

        dungeons[dungeon].forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'bg-light-dark');

            const link = document.createElement('a');
            link.href = `https://www.wowhead.com/item=${item.ID}`;
            link.setAttribute('data-wowhead', `item=${item.ID}`);
            link.textContent = item.name;

            if (item.player.includes("Mizu")) link.style.color = "#FF7D0A";
            else if (item.player.includes("Ulv")) link.style.color = "#ABD473";
            else if (item.player.includes("Sheciro")) link.style.color = "#FFFFFF";
            else if (item.player.includes("Asterion")) link.style.color = "#C41F3B";

            li.appendChild(link);
            ul.appendChild(li);
        });

        colDiv.appendChild(header);
        colDiv.appendChild(ul);
        rowDiv.appendChild(colDiv);

    });

    if (rowDiv.childElementCount > 0) {
        dungeonSection.appendChild(rowDiv);
    }
}