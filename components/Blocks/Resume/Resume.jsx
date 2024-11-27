'use client';

import React, { useRef } from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styles from './Resume.module.scss';

import Image from "next/image";
import Container from "@/components/UI/Layout/Layout";
import FancyButton from "@/components/UI/Elements/Button/Button";
import commonConfig from "@/database/config/metadata.json";
import Link from "next/link";

export default function Resume() {
    const container = useRef();
    const cardGroup = useRef();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // CV Card
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardGroup.current,
                start: 'top 75%',
                end: 'top top',
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        tl.to(`.${styles.cardV1}`, {
            rotate: '-6deg',
            scale: 1.05,
        }, 0);
        tl.to(`.${styles.cardV2}`, {
            rotate: '6deg',
            scale: 1.05,
            x: '5%'
        }, 0);

    }, { scope: container })


    return (
        <section className={styles.section} ref={container} id={'resume'}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cardGroup} ref={cardGroup}>
                        <div className={`${styles.card} ${styles.cardV1}`}>
                            <div className={styles.cardInner}>
                                <div className={styles.cardTitle}>Nong Tuong</div>
                                <div className={styles.cardDesc}>Senior FullStack Developer</div>
                                <hr/>
                                <p>I am Nong Tuong, a senior fullStack developer with over 7 years of professional experience.
                                    Successfully building user-friendly websites with ReactJS & NextJS. I pay attention
                                    to
                                    small details, enjoy technical problems, and work well in teams. I like learning new
                                    technologies and always aim to improve my skills.
                                </p>
                                <div>
                                    <Link href={`mailto:${commonConfig.personal.email}`} target={'_blank'}>
                                        {/* {commonConfig.personal.email} */}
                                    </Link>
                                    <span>{commonConfig.personal.city}, {commonConfig.personal.country}</span>
                                </div>
                                <hr/>
                                <div className={styles.cardSectionTitle}>WORK EXPERIENCE</div>
                                <p>
                                    Senior FullStack Developer | Newwave Solutions <br/>
                                    UI & FullStack Developer | TPS Software Corporation <br/>
                                    Frontend Developer | Enlab Software Company <br/>
                                    FullStack Developer | TECHVIFY Software | Global AI & Software Development Company
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.card} ${styles.cardV2}`}>
                            <div className={styles.cardInner}>
                                <Image src="/code-snippet.svg" alt="Code Snippet" width={330} height={480}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <FancyButton theme='button-1' target={'_blank'} link={commonConfig.personal.resumeURL}>View
                            Resume</FancyButton>
                    </div>
                </div>
            </Container>
        </section>
    )
}