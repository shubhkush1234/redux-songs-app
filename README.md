components:

1. SongList
2. SongDetail


## Steps ##

1. Create a action-creator:

```javaScript

// action creator
export const selectSong = (song) => {
    // return an action
    return {
        type: "SELECT_SONG",
        payload: song
    }
};

```

2. Create a reducer for that action and some more reducers:

```javaScript

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

```















