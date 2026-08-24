import styles from "./Navbar.module.css";
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className="styles.navbar-items">
                <div className={styles.title}>Logo</div>
                <div className={styles.menulist}>
                    <ul className={styles.title}>
                        <li>Convert PDF</li>
                        <li>Tools</li>
                        <li><input type="search" placeholder="search tools..." /></li>
                         <li><button>SIgnin</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}