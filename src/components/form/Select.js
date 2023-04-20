import styles from './Select.module.css';

function Select( {name, text, options, handleOnchange, value} ) {
    return (
            <div className={styles.form_control}>
                <label htmlFor={name}>{text}:</label>
                <select id={name} name={name} onChange={handleOnchange} value={value}>
                    <option>Selecione uma opção:</option>
                </select>
            </div>
    )
}

export default Select;