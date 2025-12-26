
'use client'
import Image from 'next/image'
import { useFeatureFlagVariantKey } from 'posthog-js/react'


function PriceBlock() {
    return (
        <div className="mt-2 flex items-end gap-1 text-white">
            <span className="text-[66px] font-black leading-[54px]">700</span>
            <span className="pb-1 text-[17px] font-bold">원</span>
        </div>
    )
}


function BenefitList() {
    const benefits = [
        { text: '계약서 3건 무제한 정밀 분석', bold: false },
        { text: '협상용 메일 초안 무제한 생성', bold: true },
        { text: 'PDF/이미지 업로드 지원', bold: true },
    ]

    return (
        <ul className="mt-10 flex w-full max-w-[365px] flex-col gap-3">
            {benefits.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                    <Image
                        src="/icons/check.png"
                        alt="Check icon"
                        width={16}
                        height={16}
                    />
                    <span
                        className={`text-[13px] text-white ${item.bold ? 'font-semibold' : 'font-normal'
                            }`}
                    >
                        {item.text}
                    </span>
                </li>
            ))}
        </ul>
    )
}


export default function CTASection() {
    const variant = useFeatureFlagVariantKey('cta_variant_test')

    const buttonText =
        variant === 'variantA'
            ? '애매한 계약, 3건 700원으로 끝내기'
            : variant === 'variantB'
                ? '700원 결제하고 시작하기'
                : '애매한 계약, 3건 700원으로 끝내기' // 기본값


    return (
        <section className="relative w-full bg-white">
            {/* 파란 배경 */}
            <div className="absolute left-0 top-[77px] h-[588px] w-full bg-[#2855DD]" />

            <div className="relative z-10 flex flex-col items-center px-6 pt-[138px]">
                {/* 타이틀 */}
                <h2 className="mb-6 text-center text-[40px] font-extrabold leading-[51px] text-white">
                    오픈 한정 이벤트!
                    <br />
                    단돈 700원.
                </h2>

                {/* 패스 이름 */}
                <span className="mb-4 text-[15px] font-bold text-white">
                    Designer Protection pass
                </span>

                {/* 가격 */}
                <PriceBlock />

                {/* 정상가 */}
                <div className="mt-2 text-center text-[15px] font-bold text-[#BFBFBF]">
                    정상가 <span className="line-through">11,700원</span>
                </div>

                {/* 혜택 리스트 */}
                <BenefitList />

                {/* CTA 버튼 */}
                <button className="mt-10 w-full max-w-[365px] rounded-md bg-white px-6 py-[18px] text-[19px] font-extrabold text-[#2855DD]">
                    {buttonText}
                </button>
            </div>
        </section>
    )
}
