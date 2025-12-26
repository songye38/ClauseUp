export default function LetterSection() {
  return (
    <section className="bg-white px-4 py-12">
      {/* 헤더 */}
      <h2 className="text-center text-[18px] leading-[28px] text-black">
        <span className="font-bold">클라이언트에게 이렇게 전달하세요</span>
        <br />
        <span className="font-normal text-neutral-700">
          ClauseUp은 기준을 정리하는 데서 끝나지 않습니다.
          <br />
          이 기준을 그대로 대화에 쓸 수 있게 만들어줍니다.
        </span>
      </h2>

      {/* 대화 예시 카드 */}
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-[384px] rounded-lg bg-black p-8">
          <p className="whitespace-pre-line text-[15px] leading-[29px] text-white font-normal font-serif">
            계약 진행 전에 몇 가지 기준을 맞추고 싶습니다.
            {"\n"}
            수정은 2회까지를 기본으로 생각하고 있습니다.
            {"\n"}
            추가 작업은 최초 합의 범위를 벗어나는 경우로 보고 있습니다.
            {"\n"}
            작업 종료 기준은 최종 산출물 납품 및 수정 완료 시점입니다.
            {"\n"}
            이 기준으로 진행 가능할지 확인 부탁드립니다.
          </p>
        </div>
      </div>
    </section>
  )
}
