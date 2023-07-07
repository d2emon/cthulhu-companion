const data = [
  {
    id: '1',
    title: 'Aboleth',
    cr: 10,
    type: 'Large abberation',
    alignment: 'lawful evil',
    ac: '17 (natural armor)',
    hp: '135 (18d10 + 36)',
    speed: '10ft., swim 40ft.',
    stats: {
      STR: '21 (+5)',
      DEX: '9 (-1)',
      CON: '15 (+2)',
      INT: '18 (+4)',
      WIS: '15 (+2)',
      CHA: '18 (+4)',
    },
    savingThrows: 'Con +6 Int +8 Wis +6',
    skills: 'History +12, Perception +10',
    senses: 'darkvision 120ft., passive Perception 20',
    languages: 'DeepSpeech, telepathy 120 ft.',
    challenge: '10 (5,900 XP)',
    special: [
      {
        title: 'Amphibious',
        description: 'Lorem ipsum',
      },
      {
        title: 'Mucous cloud',
        description: 'Lorem ipsum',
      },
      {
        title: 'Probing Telepathy',
        description: 'Lorem ipsum',
      },
    ],
    actions: [
      {
        title: 'Amphibious',
        description: 'Lorem ipsum',
      },
      {
        title: 'Mucous cloud',
        description: 'Lorem ipsum',
      },
      {
        title: 'Probing Telepathy',
        description: 'Lorem ipsum',
      },
    ],
    legendaryActions: [
      {
        title: 'Amphibious',
        description: 'Lorem ipsum',
      },
      {
        title: 'Mucous cloud',
        description: 'Lorem ipsum',
      },
      {
        title: 'Probing Telepathy',
        description: 'Lorem ipsum',
      },
    ],

    source: {
      id: '1',
      title: 'SRD'
    },
    favourite: false,
    description: `
      No information available
    `,
  },
  {
    id: '2',
    title: 'Acolyte',
    cr: 0.25,
    type: 'Medium humanoid (any race)',
    alignment: 'lawful evil',
    source: {
      id: '1',
      title: 'SRD'
    },
    favourite: true,
    description: `
      No information available
    `,
  },
  {
    id: '3',
    title: 'Adult Black Dragon',
    cr: 14,
    type: 'Huge dragon',
    alignment: 'lawful evil',
    source: {
      id: '1',
      title: 'SRD'
    },
    favourite: false,
    description: `
      No information available
    `,
  },
  {
    id: '4',
    title: 'Adult Blue Dracolich',
    cr: 17,
    type: 'Huge undead',
    alignment: 'lawful evil',
    source: {
      id: '1',
      title: 'SRD'
    },
    favourite: true,
    description: `
      No information available
    `,
  },
  {
    id: '5',
    title: 'Adult Blue Dragon',
    cr: 16,
    type: 'Huge dragon',
    alignment: 'lawful evil',
    source: {
      id: '2',
      title: 'Custom Source'
    },
    favourite: false,
    description: `
      No information available
    `,
  },
];

export default data;
