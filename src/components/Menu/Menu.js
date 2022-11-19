import Button from '../Button/Button';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <Button>START</Button>
            <Button>STOP</Button>
            <Button>RESET</Button>
        </div>
    );
};

export default Menu;