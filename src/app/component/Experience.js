import React from 'react'
import styles from "../Style/experience.module.scss";

const Experience = () => {
    return (
        <>
            <div className={styles.expSection} id="experience">

                <div className={styles.TopHeading}>
                    <div className={"headingContent"}>
                        <h2 className={"mainHeading"}>My Experience</h2>
                    </div>
                </div>

                <div className={styles.container}>

                    <div className={styles.leftContent}>
                        <div className={styles.straightLine}></div>
                    </div>

                    <div className={styles.rightContent}>
                        <div className={styles.CardContent}>
                            <div className={styles.firstCircle}>
                                <img src='/oneClick.jpg' alt='img here' />
                            </div>
                            <div className={styles.card}>
                                <div className={styles.cardDate}>
                                    <h4>March 2024 - Present</h4>
                                </div>
                                <h2 className={styles.cardTitle}>Frontend Developer Intern (Next.js)</h2>
                                <h4 className={styles.cardSubTitle}>OneClick Digital</h4>
                                <p className={styles.cardPera}>As a Frontend Developer specializing in Next.js, I am deeply involved in crafting innovative web solutions. Leveraging my expertise in Node.js and Express.js, I contribute to building robust and scalable applications. Passionate about staying at the forefront of technology, I am dedicated to delivering impactful user experiences and driving continuous improvement in every project I undertake.</p>
                            </div>
                        </div>
                        <div className={styles.CardContent}>
                            <div className={styles.secondCircle}>
                                <img src='/aptech1.png' alt='img here' />
                            </div>
                            <div className={styles.card}>
                                <div className={styles.cardDate}>
                                    <h4>July 2023 - Jan 2024</h4>
                                </div>
                                <h2 className={styles.cardTitle}>Faculty Member</h2>
                                <h4 className={styles.cardSubTitle}>Aptech Learning</h4>
                                <p className={styles.cardPera}>Dedicated to fostering student growth in web development, I instruct on HTML, CSS, JavaScript, jQuery, and UI/UX design. Passionate about empowering learners with practical skills and insights, I create engaging educational experiences that prepare individuals for success in the dynamic field of web development.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Experience