import styles from './First_section.module.css';

const First_section = () => {
    return (
        <section className={styles.first_sec}>
            <div className={styles.content}>
                <h1>Let us find your</h1>
                <h1 className={styles.food}>Forever Food.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div>
                    <button className={styles.btn}>Search Now</button>
                    <button className={styles.btun}>Know More</button>
                </div>
            </div>
        </section>
    );
};

export default First_section;