
function UseCaseBlock({
  badge,
  situation,
  solutionTitle,
  solution,
}: {
  badge: string
  situation: string
  solutionTitle: string
  solution: string
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* 배지 */}
      <span className="rounded bg-[#2855DD] px-3 py-1 text-[14px] font-semibold text-white">
        {badge}
      </span>

      {/* 상황 카드 */}
      <div className="w-full rounded-lg bg-[#EAECF6] p-6 text-center">
        <p className="whitespace-pre-line font-serif text-[16px] font-medium text-black">
          {situation}
        </p>
      </div>

      {/* 솔루션 카드 */}
      <div className="w-full rounded-lg bg-[#2855DD] p-6 text-center">
        <p className="text-[16px] leading-[26px] text-white">
          <span className="font-bold">{solutionTitle}</span>
          <br />
          <span className="whitespace-pre-line font-normal">
            {solution}
          </span>
        </p>
      </div>
    </div>
  )
}


export default function RecommendationSection() {
  return (
    <section className="bg-white px-4 py-12">
      {/* 섹션 헤더 */}
      <h2 className="mb-12 text-center text-[22px] leading-[30px] text-black">
        <span className="font-bold">ClauseUp,</span>
        <br />
        <span className="font-normal text-neutral-700">
          이런 분들에게 추천합니다.
        </span>
      </h2>

      <div className="mx-auto flex max-w-[398px] flex-col gap-20">
        <UseCaseBlock
          badge="계약서 받았을 때 — 아직 사인 전"
          situation={`계약서 왔는데…
읽어도 뭔 말인지 모르겠고
지금 물어보면 예민해 보일까 봐 망설여질 때`}
          solutionTitle="ClauseUp이 하는 일"
          solution={`계약서에서 애매한 문장 자동 추출
기준 확인 / 해석 여지 / 협상 권장
꼭 짚어야 할 질문만 정리`}
        />

        <UseCaseBlock
          badge="계약 시작 직전 — ‘이대로 가도 되나’ 싶은 순간"
          situation={`문제는 없어 보이는데
뭔가 찝찝한 채로 시작하는 느낌`}
          solutionTitle="ClauseUp이 하는 일"
          solution={`이 계약을 어떻게 이해해야 하는지 한 장으로 정리
프로젝트 종료 기준, 수정 기준, 권리 범위 명확화`}
        />

        <UseCaseBlock
          badge="작업 도중 — 요청이 점점 늘어날 때"
          situation={`이것도 해달래…
근데 이게 추가인지 기본인지 모르겠음`}
          solutionTitle="ClauseUp이 하는 일"
          solution={`‘추가 작업으로 볼 수 있는 기준’을 문장으로 제공
감정 없는, 기준 중심의 설명 문구 생성`}
        />

        <UseCaseBlock
          badge="결과물 전달 후 — 이거 써도 되나? 싶은 순간"
          situation={`포트폴리오에 올려도 되나…
나중에 문제 생기진 않겠지?`}
          solutionTitle="ClauseUp이 하는 일"
          solution={`저작권 / 사용 범위 / 계약 종료 후 권리 정리
AI 사용·2차 활용 여부까지 함께 정리`}
        />
      </div>
    </section>
  )
}
