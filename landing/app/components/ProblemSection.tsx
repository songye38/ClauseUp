'use client'
import { useEffect, useRef } from 'react'
import posthog from 'posthog-js'
import Image from 'next/image'

export default function ProblemSection() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    posthog.capture('view_contract_problem')
                    observer.disconnect()
                }
            },
            { threshold: 0.4 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={ref}
            className="flex w-full flex-col items-center bg-white px-6 py-20 text-black"
        >
            {/* Lead */}
            <p className="mb-10 text-center text-[22px] font-normal leading-[29px]">
                왜냐하면,<br />
                기준을 안 정한 계약은 항상 같은 장면으로<br />
                끝나니까요.
            </p>

            {/* Visual */}
            <Image
                src="/images/3man.png"
                alt="디자이너와 클라이언트 사이의 반복되는 갈등 상황"
                width={345}
                height={442}
                className="mb-12 w-full rounded-xl"
                priority={false}
            />

            {/* Explanation */}
            <p className="mb-10 text-center text-[22px] leading-[30px]">
                사실 이 요청들은<br />
                클라이언트의 성격 때문만은 아닙니다.<br />
                이렇게 말할 수 있는 근거가<br />
                <span className="font-bold">
                    계약서 안에 그대로 써 있거든요.
                </span>
            </p>

            {/* Evidence */}
            <div className="flex flex-col gap-6 text-center text-[18px] font-light leading-[25px] text-neutral-700">
                <p>
                    “발주처의 요청에 따라 프로젝트에 필요한<br />
                    추가적인 디자인 작업을 수행한다”
                </p>
                <p>
                    “작업 일정은 발주처와 수급인의<br />
                    협의를 통해 조정할 수 있다”
                </p>
                <p>
                    “수급인은 발주처의 요청에 따라<br />
                    수정 작업을 성실히 수행한다”
                </p>
            </div>
        </section>
    )
}
