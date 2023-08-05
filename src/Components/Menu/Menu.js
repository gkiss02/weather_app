import styles from './Menu.module.css'

import { useContext, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { FavoriteCitiesCTX } from '../../Context/Context';

function Menu (props) {
    const search = useRef()

    const cities = useContext(FavoriteCitiesCTX);
    console.log(cities.arr);

    function searchHandler(event) {
        if (event.key == 'Enter') props.func(search.current.value);
    }

    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faCloudSunRain} size='2x' color='white'/>
                <p>Weather App</p>
            </div>
            <div className={styles['menu-container']}>
                <input type='text' className={styles['search-bar']} placeholder='New York' onKeyDown={searchHandler} ref={search}></input>
                <div className={styles['menu-items_container']}>
                    <div className={styles['menu-item']}>
                        <p>Favorites</p>
                    </div>
                    <div className={styles['menu-item']}>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;