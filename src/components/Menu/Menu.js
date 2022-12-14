import Button from '../Button/Button';
import styles from './Menu.module.scss';
import React, { useState, useEffect } from 'react';

const Menu = () => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() =>  {
        let interval = null;

        if (running){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return() => clearInterval(interval);
    }, [running]);

    return (
        <div className={styles.menu}>
            <div>
                <span>
                    {("0" + Math.floor(time / 3600000) % 24).slice(-2)}:
                </span>
                <span>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span>
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>
            <div>
            <Button onClick={() => setRunning(true)}>START</Button>
            <Button onClick={() => setRunning(false)}>STOP</Button>
            <Button onClick={() => setTime(0)}>RESET</Button>
            </div>
        </div>
    );
};

export default Menu;