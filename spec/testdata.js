module.exports = {
  musicStoresWithStringArray: {
    area: 'King County',
    stores: [{
      name: 'Guitar Center',
      city: 'Tukwila',
      phone: '206-555-1234'
    }, {
      name: 'Hidden Notes',
      // city: undefined,
      // phone: undefined
    }, {
      name: 'Ukulele Town',
      city: 'Auburn',
      phone: '253-333-0987'
    }, {
      name: 'Guitar Center',
      city: 'Tacoma',
      phone: '253-999-0000'
    }, {
      name: 'Don\'s Green River Music',
      city: 'Auburn',
      phone: '253-333-1234'
    }, {
      name: 'Arnie\'s Music Center',
      // city: undefined,
      phone: '253-999-0000'
    }],
    // rating: undefined,
    state: 'WA'
  },

  sortedMusicStoresWithStringArray: {
    area: 'King County',
    // rating: undefined,
    state: 'WA',
    stores: [{
      city: 'Auburn',
      name: 'Don\'s Green River Music',
      phone: '253-333-1234'
    }, {
      city: 'Auburn',
      name: 'Ukulele Town',
      phone: '253-333-0987'
    }, {
      city: 'Tacoma',
      name: 'Guitar Center',
      phone: '253-999-0000'
    }, {
      city: 'Tukwila',
      name: 'Guitar Center',
      phone: '206-555-1234'
    }, {
      // city: undefined,
      name: 'Arnie\'s Music Center',
      phone: '253-999-0000'
    }, {
      // city: undefined,
      name: 'Hidden Notes',
      // phone: undefined
    }]
  },

  teamsWithNumberArray: {
    teams: [{
      teamname: 'Miami Dolphins',
      rank: 4
    }, {
      teamname: 'New York Jets',
      rank: 2
    }, {
      teamname: 'Buffalo Bills',
      rank: 3
    }, {
      teamname: 'New England Patriots',
      rank: 1
    }],
    conference: 'AFC',
    divison: 'east'
  },

  sortedTeamsWithNumberArray: {
    conference: 'AFC',
    divison: 'east',
    teams: [{
      rank: 1,
      teamname: 'New England Patriots'
    }, {
      rank: 2,
      teamname: 'New York Jets'
    }, {
      rank: 3,
      teamname: 'Buffalo Bills'
    }, {
      rank: 4,
      teamname: 'Miami Dolphins'
    }]
  },

  musicStoresWithObjectArray: {
    area: 'King County',
    stores: [{
      name: 'TBD',
      location: {
        // zip: undefined,
        city: null,
        state: 'WA'
      },
      // phone: undefined
    }, {
      name: 'Guitar Center',
      location: {
        zip: '98405',
        city: 'Tukwila',
        state: 'WA'
      },
      phone: '206-555-1234'
    }, {
      name: 'Don\'s Green River Music',
      // location: undefined,
      phone: '253-333-0987'
    }, {
      name: 'Guitar Center',
      location: {
        zip: '98405',
        city: 'Tacoma',
        state: 'WA'
      },
      phone: '206-555-1234'
    }]
  },

  sortedMusicStoresWithObjectArray: {
    area: 'King County',
    stores: [{
      location: {
        city: 'Tacoma',
        state: 'WA',
        zip: '98405'
      },
      name: 'Guitar Center',
      phone: '206-555-1234'
    }, {
      location: {
        city: 'Tukwila',
        state: 'WA',
        zip: '98405'
      },
      name: 'Guitar Center',
      phone: '206-555-1234'
    }, {
      location: {
        city: null,
        state: 'WA',
        // zip: undefined
      },
      name: 'TBD',
      // phone: undefined
    }, {
      // location: undefined,
      name: 'Don\'s Green River Music',
      phone: '253-333-0987'
    }]
  },

  birthdays: {
    relationship: 'family',
    people: [{
      name: 'Mom',
      date: '1943-08-21'
    }, {
      name: 'Dad',
      date: '1942-03-20'
    }, {
      name: 'Kiddo',
      date: '1975-10-02'
    }]
  },

  sortedBirthdays: {
    people: [{
      date: '1942-03-20',
      name: 'Dad'
    }, {
      date: '1943-08-21',
      name: 'Mom'
    }, {
      date: '1975-10-02',
      name: 'Kiddo'
    }],
    relationship: 'family'
  },

  cjk: {
    numbers: [{
      itemNum: '第3关',
      weight: 2
    }, {
      itemNum: '第1关',
      weight: 4
    }, {
      itemNum: '第2关',
      weight: 3
    }]
  },

  sortedcjk: {
    numbers: [{
      itemNum: '第1关',
      weight: 4
    }, {
      itemNum: '第2关',
      weight: 3
    }, {
      itemNum: '第3关',
      weight: 2
    }]
  },

  stableCheck: {
    numbers: [{
      seatcolor: 'blue',
    }, {
      username: 'xena',
    }, {
      itemNum: '123',
    }]
  },

  sortedStableCheck: {
    numbers: [{
      itemNum: '123',
    }, {
      seatcolor: 'blue'
    }, {
      username: 'xena',
    }]
  },

  mixedTypesCheck: {
    primativeInt: 2,
    primativeString: '1',
    mixedArray: [{
        nestedObjName: 'Nestle',
        abilities: ['rock', 'and', 'roll'],
      },
      [4, 1, 2, 'two', 'twenty-thousand'],
      'basicString',
    ]
  },

  sortedMixedTypesCheck: {
    mixedArray: [
      [1, 2, 4, 'twenty-thousand', 'two'], {
        abilities: ['and', 'rock', 'roll'],
        nestedObjName: 'Nestle',
      }, 'basicString',
    ],
    primativeInt: 2,
    primativeString: '1',
  },

  mixedTypesWithArrayFirst: {
    mixedArray: ['1', [1],
      [1, 3],
      [1, 2], {
        1: 1
      }, {
        pun: 'pun'
      },
      10, 100, 1111, '2000',
    ]
  },
  mixedTypesWithStringFirst: {
    mixedArray: [
      [1],
      [1, 3],
      [1, 2], {
        pun: 'pun'
      },
      10, 1111, 100, '2000', '1', {
        1: 1
      },
    ]
  },
  sortedMixedTypesWithStringFirst: {
    mixedArray: [
      [1],
      [1, 2],
      [1, 3], 10, 100, 1111, {
        1: 1
      }, {
        pun: 'pun'
      }, '1', '2000',
    ]
  },

  arrayOfThings: [1, '123', 987, '987'],
  sortedArrayOfThings: [1, 987, '123', '987'],
}