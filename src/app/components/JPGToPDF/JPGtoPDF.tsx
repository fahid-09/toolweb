"use client";
import { useState } from "react";
import { jsPDF } from "jspdf";
import styles from "../JPGToPDF/JPGtoPDF.module.css";
import { Image as ImageIcon } from "lucide-react";
import { url } from "inspector";

const JPGtoPDF = () => {
    const [image, setImage] = useState<File | null>(null);
    const [pdfurl, setpdfurl] = useState<string | null>(null)
    const convertToPDF = () => {
        if (!image) return;

        const reader = new FileReader();
        reader.onload = () => {
            const pdf = new jsPDF();

            pdf.addImage(
                reader.result as string,
                "JPEG",
                10,
                10,
                190,
                0
            );
            const pdfBlob = pdf.output("blob");
            const url = URL.createObjectURL(pdfBlob);
            setpdfurl(url)

            // pdf.save("converted.pdf");
        };
        reader.readAsDataURL(image);

    };


    return (
        <>
            <div className="row">
               
                    <section className={styles.inputSection}>
                        <div className="row">
                            <div className="col-9">

                                <ImageIcon className={styles.foldersvg} />

                                <label className={styles.upload}>
                                    {image
                                        ? `${image.name.replace(/\.[^/.]+$/, "")}.pdf`
                                        : "choose one or more images"}

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) =>
                                            setImage(e.target.files?.[0] || null)
                                        }
                                    />
                                </label>

                            </div>

                            <div className="col-3">
                                {!pdfurl && (
                                    <button onClick={convertToPDF}>
                                        Convert
                                    </button>
                                )}

                                {pdfurl && (
                                    <a
                                        href={pdfurl}
                                        className={styles.downloadButton}
                                        download={`${image?.name.replace(/\.[^/.]+$/, "")}.pdf`}
                                    >
                                        Download
                                    </a>
                                )}
                            </div>
                        </div>

                    </section>
              
            </div>
        </>
    );
};

export default JPGtoPDF;