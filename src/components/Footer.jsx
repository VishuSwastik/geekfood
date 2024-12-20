import footer_logo from '../assets/footer_logo.png';
import facebook from '../assets/facebook.png';
import instragram from '../assets/instra.png';
import twiter from '../assets/twiter.png';
import github from '../assets/github.png';
import broser from '../assets/broser.png';
import styles from './Footer.module.css';
 const Footer = () => {
          return (
           <footer className={styles.footer}>
             <div className={styles.logo_f}>
                <img src={footer_logo}></img>
                <p>Logoipsum</p>
             </div>
             <div className={styles.para_div}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita<br></br> mollitia delectus nobis doloribus officiis explicabo optio doloremque enim dignissimos?</p>
             </div>
             <div>
                <ul className={styles.about_list}>
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
             </div>
             <div>
                <ul className={styles.social}>
                    <li><img src={facebook}></img></li>
                    <li><img src={instragram}></img></li>
                    <li><img src={twiter}></img></li>
                    <li><img src={github}></img></li>
                    <li><img src={broser}></img></li>
                </ul>
             </div>
           </footer>
           
    )
};

export default Footer;