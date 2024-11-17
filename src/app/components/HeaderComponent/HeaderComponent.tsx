import React from 'react';
import './StyleForHeader.css'
import {apiService} from "@/app/services/api.service";
const HeaderComponent = async () => {
let genres = await apiService.genres.getAll();
    console.log(genres)


    return (
        <div className={'MainDivHeader'}>
            <div className={'Header'}>
                <div className={'divForSelect'}>
                    <div className={'withoutButton'}>
                        <p>Select your genre</p>
                        <select name="Genges" id="searchGenges">
                            <option value=""></option>
                            {genres.map((genre) => (
                                <option key={genre.id} value={genre.id} >{genre.name}</option>
                            ))}

                        </select>
                    </div>

                </div>

                <form className={'formForSearch'}>
                    <div>
                        <label>
                            <input className={'input'} type="text" placeholder={'Search your interesting...'}/>
                        </label>
                    </div>
                </form>



            </div>
        </div>

);
};

export default HeaderComponent;