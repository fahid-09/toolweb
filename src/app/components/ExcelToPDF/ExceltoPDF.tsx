"use client";

import { useState } from "react";
import styles from "../JPGToPDF/JPGtoPDF.module.css";
import { Image as ImageIcon } from "lucide-react";

const ExcelToPDF = () => {
    const [file, setFile] = useState<File | null>(null);
    const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            setFile(selectedFile);
            setPdfBlob(null);
        }
    };

    const handleConvert = async () => {
        if (!file) {
            alert("Please select an Excel file first.");
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch(
                "/api/excel-to-pdf",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Conversion failed");
            }

            // PDF response ko Blob mein convert karo
            const blob = await response.blob();

            setPdfBlob(blob);

            console.log("Excel to PDF conversion successful");

        } catch (error) {
            console.error("Conversion error:", error);
            alert(
                "Something went wrong while converting the Excel file."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!pdfBlob || !file) {
            return;
        }

        const url = window.URL.createObjectURL(pdfBlob);

        const a = document.createElement("a");

        a.href = url;

        // Excel filename ko PDF filename mein convert karo
        a.download = file.name.replace(
            /\.(xls|xlsx)$/i,
            ".pdf"
        );

        document.body.appendChild(a);

        a.click();

        a.remove();

        window.URL.revokeObjectURL(url);
    };

    return (
        <>
            <div className="row">

                <section className={styles.inputSection}>

                    <div className="row">

                        <div className="col-9">

                            <ImageIcon
                                className={styles.foldersvg}
                            />

                            <label className={styles.upload}>

                                {file
                                    ? file.name
                                    : "choose an Excel file"
                                }

                                <input
                                    type="file"
                                    accept=".xls,.xlsx"
                                    onChange={handleFileChange}
                                />

                            </label>

                        </div>

                        <div className="col-3">

                            {!pdfBlob ? (

                                <button
                                    onClick={handleConvert}
                                    disabled={loading}
                                >
                                    {loading
                                        ? "Converting..."
                                        : "Convert"
                                    }
                                </button>

                            ) : (

                                <button
                                    onClick={handleDownload}
                                >
                                    Download
                                </button>

                            )}

                        </div>

                    </div>

                </section>

            </div>
        </>
    );
};

export default ExcelToPDF;
