export interface Theme {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  tags: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    textMain: string;
    gray: string;
    background: string;
    heroFrom: string;
    heroTo: string;
  };
  fonts: {
    display: string;
    body: string;
  };
  style: "decorative" | "moderate" | "minimal";
}

export const themes: Theme[] = [
  {
    id: "classic-navy",
    name: "Classic Navy & Gold",
    nameKo: "클래식 네이비 & 골드",
    description: "The original premium healthcare look with rich navy and gold accents. Elegant serif display fonts with decorative background elements.",
    descriptionKo: "풍부한 네이비와 골드 액센트의 오리지널 프리미엄 헬스케어 디자인. 장식적 배경 요소와 우아한 세리프 폰트.",
    tags: ["Premium", "Decorative", "Original"],
    colors: {
      primary: "#1B365D",
      secondary: "#0A1628",
      accent: "#C4A265",
      neutral: "#F5F6F8",
      textMain: "#1A1A2E",
      gray: "#6B7280",
      background: "#ffffff",
      heroFrom: "#070d16",
      heroTo: "#0A1628",
    },
    fonts: { display: "serif", body: "sans-serif" },
    style: "decorative",
  },
  {
    id: "modern-teal",
    name: "Modern Teal & Coral",
    nameKo: "모던 틸 & 코랄",
    description: "A fresh, contemporary look with teal greens and vibrant coral. Modern sans-serif fonts with moderate design elements.",
    descriptionKo: "틸 그린과 생동감 있는 코랄의 신선하고 현대적인 디자인. 모던 산세리프 폰트와 적절한 디자인 요소.",
    tags: ["Modern", "Fresh", "Vibrant"],
    colors: {
      primary: "#0D9488",
      secondary: "#042F2E",
      accent: "#F97066",
      neutral: "#F0FDFA",
      textMain: "#134E4A",
      gray: "#6B7280",
      background: "#ffffff",
      heroFrom: "#021716",
      heroTo: "#042F2E",
    },
    fonts: { display: "sans-serif", body: "sans-serif" },
    style: "moderate",
  },
  {
    id: "minimal-mono",
    name: "Minimal Monochrome",
    nameKo: "미니멀 모노크롬",
    description: "Ultra-clean black and white design stripped of decorative elements. Maximum whitespace, sharp typography, no visual noise.",
    descriptionKo: "장식 요소를 제거한 울트라 클린 흑백 디자인. 최대한의 여백, 날카로운 타이포그래피, 시각적 노이즈 제로.",
    tags: ["Minimal", "Clean", "B&W"],
    colors: {
      primary: "#111111",
      secondary: "#000000",
      accent: "#555555",
      neutral: "#FAFAFA",
      textMain: "#111111",
      gray: "#888888",
      background: "#ffffff",
      heroFrom: "#000000",
      heroTo: "#111111",
    },
    fonts: { display: "sans-serif", body: "sans-serif" },
    style: "minimal",
  },
  {
    id: "warm-earth",
    name: "Warm Earth Tones",
    nameKo: "웜 어스톤",
    description: "Organic warmth with terracotta and olive green. A natural, approachable feel with subtle textures and earthy palette.",
    descriptionKo: "테라코타와 올리브 그린의 자연적인 따뜻함. 은은한 텍스처와 어스 톤으로 친근하고 자연스러운 느낌.",
    tags: ["Warm", "Natural", "Organic"],
    colors: {
      primary: "#92400E",
      secondary: "#1C1917",
      accent: "#65A30D",
      neutral: "#FEFCE8",
      textMain: "#292524",
      gray: "#78716C",
      background: "#FFFBF5",
      heroFrom: "#0c0a09",
      heroTo: "#1C1917",
    },
    fonts: { display: "serif", body: "sans-serif" },
    style: "moderate",
  },
  {
    id: "cool-corporate",
    name: "Cool Corporate Blue",
    nameKo: "쿨 코퍼레이트 블루",
    description: "Sleek steel blue with bright cyan accents. Professional, trustworthy corporate identity with clean design lines.",
    descriptionKo: "밝은 시안 액센트의 세련된 스틸 블루. 깔끔한 디자인 라인과 함께 프로페셔널하고 신뢰감 있는 기업 아이덴티티.",
    tags: ["Corporate", "Professional", "Clean"],
    colors: {
      primary: "#3B82F6",
      secondary: "#0F172A",
      accent: "#06B6D4",
      neutral: "#F1F5F9",
      textMain: "#0F172A",
      gray: "#64748B",
      background: "#ffffff",
      heroFrom: "#020617",
      heroTo: "#0F172A",
    },
    fonts: { display: "sans-serif", body: "sans-serif" },
    style: "minimal",
  },
  {
    id: "vivid-violet",
    name: "Vivid Violet & Pink",
    nameKo: "비비드 바이올렛",
    description: "Bold electric purple with hot pink accents. A vivid, energetic look that transforms the entire site with eye-catching gradients.",
    descriptionKo: "일렉트릭 퍼플과 핫 핑크의 대담하고 에너지 넘치는 디자인. 눈길을 사로잡는 비비드한 그라데이션으로 사이트 전체가 확 바뀝니다.",
    tags: ["Vivid", "Bold", "Purple"],
    colors: {
      primary: "#8B5CF6",
      secondary: "#2E1065",
      accent: "#F472B6",
      neutral: "#FAF5FF",
      textMain: "#1E1B4B",
      gray: "#7C7C9A",
      background: "#FEFCFF",
      heroFrom: "#1a0533",
      heroTo: "#3B0764",
    },
    fonts: { display: "sans-serif", body: "sans-serif" },
    style: "moderate",
  },
  {
    id: "sunshine-orange",
    name: "Sunshine Orange & Gold",
    nameKo: "선샤인 오렌지",
    description: "Radiant orange with bright golden yellow accents. A warm, cheerful, and unmistakably bright theme with maximum visual impact.",
    descriptionKo: "찬란한 오렌지와 밝은 골든 옐로우의 밝고 경쾌한 디자인. 따뜻하고 에너지 넘치는 비주얼로 확연한 변화를 줍니다.",
    tags: ["Bright", "Cheerful", "Warm"],
    colors: {
      primary: "#EA580C",
      secondary: "#431407",
      accent: "#FBBF24",
      neutral: "#FFF7ED",
      textMain: "#1C1917",
      gray: "#78716C",
      background: "#FFFAF5",
      heroFrom: "#1a0a02",
      heroTo: "#7C2D12",
    },
    fonts: { display: "serif", body: "sans-serif" },
    style: "moderate",
  },
];

export function getThemeById(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}

export const DEFAULT_THEME_ID = "classic-navy";
