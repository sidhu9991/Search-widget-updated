( function( angular ) {
  angular.module( 'peopleSearch' ).service( 'peopleService', function( $filter ) {
    
    this.peopleData = [ {
      "policy_no": 123456789,
      "first_name": "Sid",
      "phone_no": 9827546852,
      "email": "Sid@abc.com"
    }, {
      "policy_no": 987456321,
      "first_name": "Adi",
      "phone_no": 995874563,
      "email": "Adi@abc.com"
    }, {
      "policy_no": 154785236,
      "first_name": "Bob",
      "phone_no": 8852147852,
      "email": "Bob@abc.com"
    }, {
      "policy_no": 236547896,
      "first_name": "Cherry",
      "phone_no": 65741235,
      "email": "Cherry@abc.com"
    }, {
      "policy_no": 365471254,
      "first_name": "Docker",
      "phone_no": +61574125,
      "email": "Docker@abc.com"
    }, {
      "policy_no": 456789632,
      "first_name": "Elen",
      "phone_no": 478541236,
      "email": "Elen@abc.com"
    }, {
      "policy_no": 569874123,
      "first_name": "Ferry",
      "phone_no": 7423568945,
      "email": "Ferry@abc.com"
    }, {
      "policy_no": 698745123,
      "first_name": "George",
      "phone_no": 2236547812,
      "email": "George@abc.com"
    },{
      "policy_no": 3245689,
      "first_name": "Herry",
      "phone_no": 4785412589,
      "email": "Herry@abc.com"
    },  {
      "policy_no": 4785412,
      "first_name": "Iry",
      "phone_no": 998744563,
      "email": "Iry@abc.com"
    }, ]
    this.filteredPeople = function( searchKey ) {
      var people = [];
      
      if ( searchKey && searchKey.length > 0 ) people = $filter( 'filter' )( this.peopleData, isFinite(searchKey) ?  {policy_no:searchKey}: {first_name:searchKey} )
      return {
        people
      };
    }
  } )
} )( angular );
