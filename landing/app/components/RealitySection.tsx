export const contractIssues = [
  {
    tag: '기준이 모호해 확인이 필요함',
    text: '디자인 외 업무까지 포함될 수 있습니다',
  },
  {
    tag: '해석의 여지를 다툴 수 있으므로 상호협의 필요함',
    text: '프로젝트의 종료 시점이 불분명합니다',
  },
  {
    tag: '협상이 필요함',
    text: '추가 작업을 추가라고 말하기 어렵습니다',
  },
  {
    tag: '논의가 필요함',
    text: 'AI 사용 및 2차 활용에 대한 논의가 없습니다',
  },
]



export default function RealitySection() {
  return (
    // <section className="relative mx-auto w-[430px] bg-white overflow-hidden px-4 py-8">
    <section className="bg-white px-4 py-12">
      {/* Title */}
      <h2 className="mb-6 text-center text-[22px] leading-[30px] text-black">
        이 계약, <strong className="font-bold">현실</strong>에서는 이렇게 작동합니다
      </h2>

      {/* Contract Quote */}
      <div className="mb-6 rounded-lg bg-white p-5 shadow-sm">
        <p className="mb-2 text-sm font-bold text-[#2B41A3]">
          📄 계약서에 이렇게 적혀 있어요
        </p>
        <p className="font-serif text-base leading-6 text-black">
          “본 계약에 따른 업무는 본 프로젝트 수행에 필요한 모든 디자인 업무를 포함한다”
        </p>
      </div>

      {/* Issues */}
      <div className="flex flex-col gap-3">
        {contractIssues.map((issue, index) => (
          <IssueCard key={index} tag={issue.tag} text={issue.text} />
        ))}
      </div>
    </section>
  )
}

function IssueCard({ tag, text }: { tag: string; text: string }) {
  return (
    <div className="rounded-lg bg-[#F0F0F0] p-6">
      <span className="mb-3 inline-block rounded bg-black px-3 py-1 text-sm font-semibold text-white">
        {tag}
      </span>
      <p className="font-serif text-lg text-black">{text}</p>
    </div>
  )
}
