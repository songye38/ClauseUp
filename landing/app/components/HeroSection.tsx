'use client'
import { useEffect, useRef } from 'react'
import posthog from 'posthog-js'
import { aleo, swaggerFont } from '../styles/fonts'

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    posthog.capture('view_hero')
                    observer.disconnect()
                }
            },
            { threshold: 0.7 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={ref}
            className="relative flex h-[686px] w-full flex-col items-center justify-start bg-[#2855DD] px-6 pt-24 text-white"
        >
            {/* Eyebrow */}
            <p className="mb-3 text-center text-[16.5px] font-bold leading-[23.25px]">
                디자인 말고<br />
                계약에서 손해 보고 있다면
            </p>

            {/* Logo / Title */}
            <h1 className={`mb-8 text-[60px] font-black ${aleo.className}`}>
                ClauseUp
            </h1>

            {/* Headline */}
            <p
                className="mb-24 text-center text-[36.75px] leading-[49.5px]"
                style={{ fontFamily: swaggerFont.style.fontFamily }}
            >
                디자인은 늘 수정하는데<br />
                계약은 수정없이 사인하셨나요?
            </p>

            {/* Subcopy */}
            <p className="text-center text-[32px] font-bold leading-[42px]">
                ClauseUp은<br />
                디자이너가 묻지 못했던<br />
                기준을 대신 정리합니다.
            </p>
        </section>
    )
}
