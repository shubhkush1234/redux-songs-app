import {combinedReducers} from 'react-redux';

const songsReducer = () => {
    return [
        { title: "wo lamhe wo baatey", duration:"3:34" },
        { title: "backstreet boys" , duration:"3:34"},
        { title: "volume one" , duration:"3:34"},
        { title: "dope shope", duration:"3:34" },
        { title: "jaha daal daal par sone ki" , duration:"3:34"}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }
    return selectedSong;
};

export default combinedReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})