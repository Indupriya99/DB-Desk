const MapColorToTeam =(teamNumber)=>{
    switch (teamNumber) {
        case 1: return "red";
        case 2: return "blue";
        case 3: return "green";
        case 4: return "purple";
        case 5: return "violet";
        default:
            break;
    }
}

module.exports = MapColorToTeam;