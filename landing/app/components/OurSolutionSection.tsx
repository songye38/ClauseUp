
function CriteriaCard({
  bg,
  labelBg,
  labelText,
  title,
  result,
  textColor,
}: {
  bg: string
  labelBg: string
  labelText: string
  title: string
  result: string
  textColor: string
}) {
  return (
    <div className={`rounded-lg p-6 ${bg}`}>
      <p className="text-[16px] font-medium leading-[21px] text-neutral-600">
        {title}
      </p>

      <div className="my-4">
        <span
          className={`inline-block rounded px-3 py-1 text-[14px] font-semibold text-white ${labelBg}`}
        >
          {labelText}
        </span>
      </div>

      <p
        className={`whitespace-pre-line text-[18px] font-semibold leading-[26px] ${textColor}`}
      >
        {result}
      </p>
    </div>
  )
}




export default function OurSolutionSection() {
  return (
    <section className="bg-white px-4 py-10">
      {/* 헤더 */}
      <h2 className="text-center text-[18px] leading-[28px] text-black">
        <span className="font-bold">ClauseUp이 정리한 이 계약의 기준</span>
        <br />
        <span className="font-normal text-neutral-700">
          계약서 문장을 그대로 옮기지 않고,
          <br />
          실제 작업과 협의에 필요한 기준으로 정리했습니다.
        </span>
      </h2>

      {/* 카드 리스트 */}
      <div className="mt-10 flex flex-col gap-4">
        <CriteriaCard
          bg="bg-[#F8E1B7]"
          labelBg="bg-[#FFA500]"
          labelText="👇🏻 ClauseUp에서는 이렇게 바뀝니다"
          title="디자인 외 업무까지 포함될 수 있습니다"
          result="본 계약의 업무는 시각 디자인 작업으로 한정하고
기획, 마케팅, 운영 관련 업무는 계약 범위에 포함하지 않습니다"
          textColor="text-[#634000]"
        />

        <CriteriaCard
          bg="bg-[#D1DAF9]"
          labelBg="bg-[#4670FF]"
          labelText="👇🏻 ClauseUp에서는 이렇게 바뀝니다"
          title="프로젝트의 종료 시점이 불분명합니다"
          result="최종 산출물 납품 및 수정 2회 완료 시
본 프로젝트는 종료된 것으로 봅니다"
          textColor="text-[#002191]"
        />

        <CriteriaCard
          bg="bg-[#F4C3C3]"
          labelBg="bg-[#FF4747]"
          labelText="👇🏻 ClauseUp에서는 이렇게 바뀝니다"
          title="추가 작업을 추가라고 말하기 어렵습니다"
          result="최초 합의된 작업 범위를 벗어나는 요청은
추가 작업으로 보고 별도 협의합니다"
          textColor="text-[#570000]"
        />

        <CriteriaCard
          bg="bg-[#F9F9D1]"
          labelBg="bg-[#F8F844]"
          labelText="👇🏻 ClauseUp에서는 이렇게 바뀝니다"
          title="AI 사용 및 2차 활용에 대한 논의가 없습니다"
          result="본 프로젝트에서 AI 도구 사용이 포함될 수 있으며
해당 결과물의 권리와 활용 범위는 아래 기준을 따릅니다"
          textColor="text-[#313100]"
        />
      </div>
    </section>
  )
}
