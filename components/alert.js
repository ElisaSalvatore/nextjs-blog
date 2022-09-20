import cn from 'classnames';
import styles from '../styles/alert.module.css';

export default function Alert( {children, type} ) {

    return (
        <div
            className={cn({
                [styles.success]: type === "success",
                [styles.error]: type === "error",
            })}
        >

            {children}
        </div>
    );
}
