import house from '../assets/house.png'

import styles from './second.module.css'; 

const Second_sec = () => {
    return (
        <div className={styles.homeCont}>
            <img src={house} className={styles.img_home} alt="House" />
            <div className={styles.inner_div}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ad. Dignissimos, exercitationem voluptas!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste molestias quae inventore recusandae</p>
                <button className={styles.get_in_touch}>Get in touch</button>
            </div>
        </div>
    );
};

export default Second_sec;