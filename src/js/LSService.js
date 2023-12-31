export default function LSService () {

    function setProgressLS (xCells, oCells, oTurn) {
        localStorage.setItem('gameProgress', JSON.stringify({xCells, oCells, oTurn}));
    }

    function getProgressLS () {
        return JSON.parse(localStorage.getItem('gameProgress'));
    }

    function getDataFirstLoad () {
        if (getProgressLS()) {
            return getProgressLS();
            
        } else {
            return {oCells: [], xCells: [], oTurn:true};
        };
    }

    return {getProgressLS, setProgressLS, getDataFirstLoad};
}