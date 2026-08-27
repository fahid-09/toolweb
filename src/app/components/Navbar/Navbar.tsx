import { Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbaritems}>

                <div className={styles.title}>Tool Web</div>

                <div className={styles.menulist}>
                    <ul>
                        <li className={styles.dropdown}>
                            <span className={styles.menuItem}>
                                Convert PDF
                                <ChevronDown strokeWidth={1} />
                            </span>

                            <div className={`${styles.submenu} row`}>
                                <div className="col-6">
                                    <ul className={styles.submenulist}>
                                        <span style={{ color: "#6e908e", fontSize: "12px", paddingLeft: "10px" }}>Convert to PDF</span>
                                        <li>
                                            <Link href="/jpg-to-pdf">JPG to PDF</Link>
                                        </li>
                                        <li>
                                            <Link href="/word-to-pdf">Word to PDF</Link>
                                        </li>
                                        <li>
                                            <Link href="/word-to-pdf">Powerpoint to PDF</Link>
                                        </li>
                                        <li>
                                            <Link href="/word-to-pdf">Excell to PDF</Link>
                                        </li>
                                        <li>
                                            <Link href="/word-to-pdf">HTML to PDF</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className={styles.submenulist}>
                                        <span style={{ color: "#6e908e", fontSize: "12px", paddingLeft: "10px" }}>Convert from PDF</span>
                                        <li>
                                            <Link href="/jpg-to-pdf">PDF to JPG</Link>
                                        </li>
                                        <li>
                                            <Link href="/word-to-pdf">PDF to Word</Link>
                                        </li>
                                        <li>
                                            <Link href="/word-to-pdf">PDF to Powerpoint</Link>
                                        </li>
                                        <li>
                                            <Link href="/word-to-pdf">PDF to Excell</Link>
                                        </li>
                                        <li>
                                            <Link href="/word-to-pdf">PDF to PDF/A</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li>
                            <Link href="/" className={styles.menuItem}>
                                Tools
                                <ChevronDown strokeWidth={1} />
                            </Link>
                        </li>

                        <li className={styles.searchBox}>
                            <input type="search" placeholder="search tools..." />
                            <span>
                                <Search strokeWidth={1} />
                            </span>
                        </li>

                        <li>
                            <Link href="/">
                                <button className={styles.buttoncolor}>Sign In</button>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}