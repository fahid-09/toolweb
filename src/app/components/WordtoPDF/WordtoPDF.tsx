"use client";

import { useState } from "react";
import styles from "../JPGToPDF/JPGtoPDF.module.css";
import { Image as ImageIcon } from "lucide-react";
import mammoth from "mammoth";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const WordtoPDF = () => {
    const [wordfile, setwordfile] = useState<File | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const convertToPDF = async () => {
        if (!wordfile) {
            alert("Please choose a Word file");
            return;
        }

        try {
            const arrayBuffer = await wordfile.arrayBuffer();

            const result = await mammoth.convertToHtml({
                arrayBuffer: arrayBuffer,
            });

            const container = document.createElement("div");

            container.innerHTML = result.value;

            container.style.width = "794px";
            container.style.padding = "40px";
            container.style.background = "white";
            container.style.color = "black";
            container.style.position = "absolute";
            container.style.left = "-9999px";
            container.style.top = "0";

            document.body.appendChild(container);

            const canvas = await html2canvas(container, {
                scale: 2,
                backgroundColor: "white",
            });

            const pdf = new jsPDF("p", "mm", "a4");

            const imgData = canvas.toDataURL("image/png");

            const pdfWidth = 210;
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            let heightLeft = pdfHeight;
            let position = 0;

            pdf.addImage(
                imgData,
                "PNG",
                0,
                position,
                pdfWidth,
                pdfHeight
            );

            heightLeft -= 297;

            while (heightLeft > 0) {
                position = heightLeft - pdfHeight;

                pdf.addPage();

                pdf.addImage(
                    imgData,
                    "PNG",
                    0,
                    position,
                    pdfWidth,
                    pdfHeight
                );

                heightLeft -= 297;
            }

            const pdfBlob = pdf.output("blob");

            const url = URL.createObjectURL(pdfBlob);

            setPdfUrl(url);

            document.body.removeChild(container);

        } catch (error) {
            console.error("Conversion error:", error);
            alert("Unable to convert Word file");
        }
    };

    return (
        <>
            <div className="row">

                <section className={styles.inputSection}>

                    <div className="row">

                        <div className="col-9">

                            <ImageIcon className={styles.foldersvg} />

                            <label className={styles.upload}>

                                {wordfile
                                    ? wordfile.name
                                    : "Choose a Word file"}

                                <input
                                    type="file"
                                    accept=".doc,.docx"
                                    onChange={(e) =>
                                        setwordfile(
                                            e.target.files?.[0] || null
                                        )
                                    }
                                />

                            </label>

                        </div>

                        <div className="col-3">
                            {
                                !pdfUrl && (
                                    <button onClick={convertToPDF}>
                                        Convert
                                    </button>
                                )}
                            {pdfUrl && (
                                <a
                                    className={styles.downloadButton}
                                    href={pdfUrl}
                                    download={`${wordfile?.name.replace(
                                        /\.(docx?|DOCX?)$/,
                                        ""
                                    )}.pdf`}
                                >
                                    Download
                                </a>)}
                        </div>

                    </div> </section>

            </div>
        </>
    );
};

export default WordtoPDF;