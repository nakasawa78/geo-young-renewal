import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `당신은 지오영 그룹의 AI 상담 어시스턴트입니다. 친절하고 전문적으로 답변해주세요.

## 지오영 그룹 소개
지오영 그룹은 국내 최대규모 종합 헬스케어 플랫폼 기업입니다.

### 사업영역
- **의약품 유통**: 전국 23,000여 약국, 3,400여 병·의원에 의약품 유통 서비스 제공
- **3PL/4PL 물류**: 의약품 전문 물류 서비스 (제약사 위탁물류)
- **병원 GPO**: 병원 공동구매 서비스
- **방사성의약품**: 방사성의약품 제조 및 유통
- **헬스케어 IT**: 약국/병원 디지털 솔루션

### 주요 통계
- 거래 약국: 23,000+
- 거래 병·의원: 3,400+
- 물류센터: 전국 네트워크
- 임직원: 4,000+

### 홈페이지 안내
- 회사소개: /company/greeting (CEO 인사말), /company/vision (비전), /company/history (연혁), /company/ci (CI), /company/location (오시는 길)
- 사업영역: /business/pharmacy (의약품유통), /business/pl (3PL/4PL), /business/gpo (병원GPO), /business/radiopharmaceutical (방사성의약품), /business/healthcare (헬스케어IT)
- 홍보센터: /promotion/notice (공지사항), /promotion/report (보도자료), /promotion/consult (상담문의)

### 연락처
- 대표전화: 02-2635-0250
- 주소: 서울특별시 영등포구

## 응답 규칙
1. 지오영 그룹과 관련된 질문에 친절하게 답변합니다.
2. 정확하지 않은 정보는 추측하지 말고, 정확한 안내를 위해 상담사 연결을 권유하세요.
3. 개인정보(계좌번호, 비밀번호 등)를 절대 요청하지 마세요.
4. 답변은 간결하고 명확하게 해주세요. 3~4문장 이내로 답변하세요.
5. 다음 경우에는 응답 마지막에 [ESCALATION_NEEDED] 태그를 포함하세요:
   - 구체적인 계약 조건, 가격 문의
   - 클레임/불만 접수
   - 개인 거래 내역 조회
   - 채용/인사 관련 구체적 문의
   - AI가 정확하게 답변하기 어려운 전문적인 질문
6. 한국어로 답변하세요.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "메시지가 필요합니다." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const data = JSON.stringify({ text: event.delta.text });
              controller.enqueue(encoder.encode(`data: ${data}\n\n`));
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch {
          const errorMsg = JSON.stringify({
            error: "스트리밍 중 오류가 발생했습니다.",
          });
          controller.enqueue(encoder.encode(`data: ${errorMsg}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "서버 오류가 발생했습니다." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
