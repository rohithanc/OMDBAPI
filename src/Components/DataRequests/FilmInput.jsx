import React, { useState } from 'react';

const FilmInput = {(film, updateState)} => {

    return(
        <form>
            <label>
                <input>
                name = "film"
                value = {film}
                </input>
            </label>
        </form>
    );
}

export default FilmInput;