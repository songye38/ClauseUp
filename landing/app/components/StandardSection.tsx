'use client'
import { useEffect, useRef } from 'react'
import posthog from 'posthog-js'

export default function StandardSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          posthog.capture('view_comparison')
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="w-full bg-white py-20">
      {/* Intro */}
      <p className="mb-10 px-6 text-center text-[22px] leading-[30px]">
        계약의 문제는 문장이 아니라 <b>기준</b>입니다.<br />
        ClauseUp은 그 기준부터 정리합니다.
      </p>

      {/* Comparison Wrapper */}
      <div className="bg-[#2855DD] px-6 py-16 text-white">
        <h2 className="mb-12 text-center text-[20px] font-bold">
          기준이 없을 때 vs 기준이 있을 때
        </h2>

        <div className="mx-auto flex max-w-[360px] flex-col gap-12">
          {/* Without */}
          <div>
            <p className="mb-6 text-center text-[16px] font-semibold">
              ClauseUp이 없을 때
            </p>
            <div className="flex flex-col gap-4">
              <Bubble>수정은 상황에 따라 계속 진행해 주세요 😵</Bubble>
              <Bubble>추가 작업도 필요하면 같이 해주시죠 🙀</Bubble>
              <Bubble>결과물은 당연히 저희가 쓰는 거죠? 🤢</Bubble>
            </div>
          </div>

          {/* With */}
          <div>
            <p className="mb-6 text-center text-[18px] font-semibold">
              👍<br />ClauseUp과 함께
            </p>
            <div className="flex flex-col gap-4">
              <Bubble large>수정은 2회까지, 이후는 추가 작업 😀</Bubble>
              <Bubble large>추가 작업의 기준은 화면 수 / 기능 단위 😀</Bubble>
              <Bubble large>결과물은 포트폴리오 활용 가능 😀</Bubble>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bubble({
  children,
  large = false,
}: {
  children: React.ReactNode
  large?: boolean
}) {
  return (
    <div
      className={`mx-auto rounded-2xl bg-white px-5 py-2 text-center font-bold text-black ${
        large ? 'text-[16px]' : 'text-[13px]'
      }`}
    >
      {children}
    </div>
  )
}
