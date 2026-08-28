
import styles from "../JPGToPDF/JPGtoPDF.module.css"
const JPGtoPDF = () => {
    return (<>

        <div className="row">

            <div className="col-6">
                <section className={styles.cardsection}>
                    <span className={styles.number}>01</span> <span className={styles.text}>JPG to PDF</span>
                    <p>Combine one or more images into a single PDF</p>

                    <input type="search"/>
                </section>
            </div>

        </div>



    </>)
}

export default JPGtoPDF;