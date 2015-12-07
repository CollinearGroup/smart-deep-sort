module.exports = {
  musicStoresWithStringArray : {
	area: 'King County',
	stores: [{
	  name: 'Guitar Center', city: 'Tukwila', phone: '206-555-1234'
	}, {
	  name: 'Hidden Notes', city: undefined, phone: undefined
	}, {
	  name: 'Ukulele Town', city: 'Auburn', phone: '253-333-0987'
	}, {
	  name: 'Guitar Center', city: 'Tacoma', phone: '253-999-0000'
	}, {
	  name: 'Don\'s Green River Music', city: 'Auburn',  phone: '253-333-1234'
	}, {
	  name: 'Arnie\'s Music Center', city: undefined, phone: '253-999-0000'
	}],
	rating: undefined,
	state: 'WA'
  },

  sortedMusicStoresWithStringArray : {
	area: 'King County',
	rating: null,
	state: 'WA',
    stores: [ {
	  city: 'Auburn', name: 'Ukulele Town', phone: '253-333-0987'
	  }, {
	  city: 'Auburn', name: 'Don\'s Green River Music', phone: '253-333-1234'
	  }, {
	  city: 'Tacoma', name: 'Guitar Center', phone: '253-999-0000'
	  },{
	  city: 'Tukwila', name: 'Guitar Center', phone: '206-555-1234'
	  }, {
	  city: null, name: 'Hidden Notes', phone: null
	  }, {
	  city: null, name: 'Arnie\'s Music Center', phone: '253-999-0000'
	  }]
  },

  teamsWithNumberArray: {
    teams: [{
	    teamname: 'Miami Dolphins', rank: 4
	  }, {
	    teamname: 'New York Jets', rank: 2
	  }, {
	    teamname: 'Buffalo Bills', rank: 3
	  }, {
	    teamname: 'New England Patriots', rank: 1
	  }],
	  conference: 'AFC',
	  divison: 'east'
  },

  sortedTeamsWithNumberArray: {
	  conference: 'AFC',
	  divison: 'east',
    teams: [{
	    rank: 1, teamname: 'New England Patriots'
	  }, {
	    rank: 2, teamname: 'New York Jets'
	  }, {
	    rank: 3, teamname: 'Buffalo Bills'
	  }, {
      rank: 4, teamname: 'Miami Dolphins'
	  }]
  },

  musicStoresWithObjectArray:  {
    area: 'King County',
    stores: [{
      name: 'TBD',
      location: {zip: undefined, city: undefined, state: 'WA'},
	    phone: undefined
    }, {
      name: 'Guitar Center',
	    location: {zip: '98188', city: 'Tukwila', state: 'WA'},
	    phone: '206-555-1234'
    }, {
      name: 'Don\'s Green River Music',
      location: undefined,
	    phone: '253-333-0987'
    }, {
      name: 'Guitar Center',
      location: {zip: '98405', city: 'Tacoma', state: 'WA'},
	    phone: '253-999-0000'
    }]
  },
 
  sortedMusicStoresWithObjectArray: {
   area: 'King County',
   stores: [{
     location: {city: 'Tacoma', state: 'WA', zip: '98405'},
	   name: 'Guitar Center',
	   phone: '253-999-0000'
	 },{
	   location: {city: 'Tukwila', state: 'WA', zip: '98188'},
	   name: 'Guitar Center',
	   phone: '206-555-1234'
	 },{
	   location: {city: null, state: 'WA', zip: null},
	   name: 'TBD',
	   phone: null
	 },{
	   location: null,
	   name: 'Don\'s Green River Music',
	   phone: '253-333-0987'
	 }]
  },

  birthdays: {
    relationship: 'family',
	  people: [{
	    name: 'Mom', date: '1943-08-21'
	  }, {
	    name: 'Dad', date: '1942-03-20'
	  }, {
	    name: 'Kiddo', date: '1975-10-02'
	  }]
  },

  sortedBirthdays: {
	  people: [{
	    date: '1942-03-20', name: 'Dad'
	  }, {
	    date: '1943-08-21', name: 'Mom'
	  }, {
	    date: '1975-10-02', name: 'Kiddo'
	  }],
    relationship: 'family'
  },

  cjk: {
    numbers: [{
      itemNum: '第3关', weight: 2
    }, {
      itemNum: '第1关', weight: 4    
    }, {
      itemNum: '第2关', weight: 3
    }]
  },

  sortedcjk: {
    numbers: [{
      itemNum: '第1关', weight: 4
    }, {
      itemNum: '第2关', weight: 3   
    }, {
      itemNum: '第3关', weight: 2
    }]
  } ,

  stableCheck: {
    numbers: [{
      itemNum: '123', seatcolor: 'white'
    }, {
      itemNum: '456', seatcolor: 'blue'
    }, {
      itemNum: '123', seatcolor: 'red'
    }]
  },

  sortedStableCheck: {
    numbers: [{
      itemNum: '123', seatcolor: 'white'
    }, {
      itemNum: '123', seatcolor: 'red'
    }, {
      itemNum: '456', seatcolor: 'blue'
    }]
  }
}