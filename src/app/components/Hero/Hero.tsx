import Calculator from "../Calculator/Calculator";
import JPGtoPDF from "../JPGToPDF/JPGtoPDF";
import WordtoPDF from "../WordtoPDF/WordtoPDF";
import styles from "./Hero.module.css";
import { Zap } from "lucide-react";
// import cards from "../cards";
// import Link from "next/link";


const Homepage = () => {


    return (<>

{/* <div className="row">
  {cards.cardsarray.map((card) => {
    return (
      <div className="col-4" key={card.id}>
        <Link href={card.url}>
          <div className="card">
            <h3>{card.name}</h3>
            <p>{card.description}</p>
          </div>
        </Link>
      </div>
    );
  })}
</div> */}

        <section className={styles.herosection}>
            <div className="row">
                <div className="col-6"><span className={styles.herotext}><hr></hr>Convert PDF · calculators · body tests</span>
                    <div className={styles.biggertext}>
                        <h1>Every conversion,<br />
                            read like an <em>instrument.</em></h1>
                        <p>Conversion Web converts JPG, Word, PowerPoint, Excel and HTML to and from PDF right in your browser, alongside arithmetic, scientific and equation calculators, temperature and time conversion, and quick body-metric tests like blood pressure, blood sugar and BMI — all in one panel.
                        </p>

                    </div>
                    <div className="row g-2">
                        <div className="col-6">
                            <button className={styles.convertbutton}>
                                <Zap strokeWidth={0.8} style={{ width: "18px", height: "16px" }} />
                                Convert a Document
                            </button>
                        </div>

                        <div className="col-6">
                            <button className={styles.signinbutton}>
                                Create an account
                            </button>
                        </div>
                    </div>
                    <div className="row g-2 mt-3" style={{ color: "#6FD9C4" }}>
                        <div className="col-4">
                            <h4>19</h4>
                            <p style={{ fontSize: "12px" }}>working instruments</p>
                        </div>

                        <div className="col-4">
                            <h4>0.0s</h4>
                            <p style={{ fontSize: "12px" }}>Server round trip</p>
                        </div>
                        <div className="col-4">
                            <h4>100%</h4>
                            <p style={{ fontSize: "12px" }}>Runs in-browser</p>
                        </div>
                    </div>

                </div>
                <div className="col-6"><span className={styles.herotext}><hr></hr>Tools · calculators</span>
                    <div className={styles.calbiggertext}>
                        <h4>Standard calculator  </h4>
                        <p>Four-function calculator. Chain operations the way you would on a desk calculator.</p>

                    </div>

                    <Calculator />

                </div>
            </div>

        </section>

        <section className={styles.herosection}>
            <div className="row">
                <div><span className={styles.herotext}><hr></hr>Convert PDF</span>
                    <div className={styles.biggertext}>
                        <h1>Convert to and from PDF</h1>
                        <p>Runs fully in your browser — files never leave your device. Text-based tools<br /> (Word/Excel/PowerPoint ⇄ PDF) extract and rebuild content rather than pixel-copying it,<br />so complex layouts may need light cleanup afterward. </p>
                    </div>
                </div>
            </div>
            <div className={styles.pdfbiggertext} style={{ display: "flex" }}>

                <p className={styles.outText}>Convert to PDF</p>
            </div>
            <div className="row">
                <div className="col-6">

                    <section className={styles.cardsection}>
                        <div>

                            <span className={styles.number}>01</span>
                            <span className={styles.text}>JPG to PDF</span>

                            <p className={styles.uppertext}>Combine one or more images into a single PDF</p>

                            <JPGtoPDF />
                            <hr className={styles.hrDevider}></hr>
                            <p className={styles.lowertext}>Scanning an InPage (.inp) document? InPage's format is closed with no browser-readable library available, so export or print its pages as images first, then combine them here.</p>
                        </div>
                    </section>
                </div>
                <div className="col-6">

                    <section className={styles.cardsection}>
                        <div>

                            <span className={styles.number}>01</span>
                            <span className={styles.text}>Word to PDF</span>

                            <p className={styles.uppertext}>Combine one or more images into a single PDF</p>

                            <WordtoPDF />
                            <hr className={styles.hrDevider}></hr>
                            <p className={styles.lowertext}>Scanning an InPage (.inp) document? InPage's format is closed with no browser-readable library available, so export or print its pages as images first, then combine them here.</p>
                        </div>
                    </section>
                </div>

            </div>



        </section>



    </>)
}

export default Homepage;