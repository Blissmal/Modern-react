import Button from "./Button.jsx";
import styles from "../style.js";

const CTA = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div>
                <h2>Let&apos;s try our services now!</h2>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div>
                <Button />
            </div>
        </section>
    )
}
export default CTA;