$(document).ready(function () {

    var friends = ['John', 'James', 'Jim', 'Janice', 'Jarod'];
    
    var locations = ['Homewood', 'Vestavia', 'Hoover', 'Pelham', 'Alabaster',
        'Calera', 'Irondale', 'Trussville', 'Leeds', 'Chelsea'];
    
        var weapons = ['brick', 'bat', 'board', 'knife', 'gun', 'sword',
        'grenade', 'mortar', 'mine', 'tank', 'plane', 'chopper', 'cannon',
        'club', 'shotty', 'water-ballon', 'paintball', 'pepper spray', 'brass knuckles'];

    for (var i = 1; i <= 100; i++) {
        var h3 = $('<h3>Accusation ' + i + ':</h3>')

        $('body').append(h3)
        $(h3).click(getAlert(i))

    };

    function getAlert(i) {
        var getFriend = friends[i % 5]
        var getLocation = locations[i % 10]
        var getWeapon = weapons[i % 20]

        function alertAccusation() {
            alert('Accusation ' + i + ': I think ' + getFriend + ' used a ' + getWeapon + ' in ' + getLocation)
        }

        return alertAccusation
    }
});
