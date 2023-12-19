import styles from './CreateCarForm.module.css'
function CreateCarForm() {
    return (
        <form className={styles.form}>
            <input placeholder='Name'/>
        </form>
    )
}

export default CreateCarForm;