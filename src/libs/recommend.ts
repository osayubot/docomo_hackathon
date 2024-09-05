import { Prisma } from "@prisma/client";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import prisma from "@/libs/Prisma";

type Category =
  | "カメラ"
  | "XRデバイス"
  | "出力機器"
  | "家事"
  | "美容"
  | "健康"
  | "エンタメ";

const fetchRecommendCategory = async ({
  gender,
  birth,
  hobby,
  isOutdoor,
  budget,
}: {
  gender: string;
  birth: string;
  hobby: string;
  isOutdoor: boolean;
  budget: number;
}) => {
  const response = await fetch("/api/openai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      gender: gender ?? "未選択",
      birth: birth ?? "未選択",
      hobby: hobby ?? "未選択",
      activity:
        isOutdoor === undefined
          ? "未選択"
          : isOutdoor
          ? "アウトドア"
          : "インドア",
    }),
  });

  const json: { category: Category; message: string } = await response.json();
  const { category, message } = json;
  // sample response { category: "カメラ", message: "趣味が写真や映像撮影であれば、カメラカテゴリがおすすめです。" }

  // このカテゴリをもとに、prisma で作成した Items テーブル から、予算(budget)に一致するアイテムをとってくる
  //

  const items = await prisma.item.findMany({
      where: {
        category: category,
        initialPrice: { lte: budget },
      },
      orderBy: {
        initialPrice: "asc",
      },
  });

  return {
    name: "",
    category,
    url: "",
    imageUrl: "",
    overview: "", // あといろいろ..
  };
};

/*model Items {
  id        Int      @id @unique @default(autoincrement())
  name      String   @db.VarChar(256)
  category  String   @db.VarChar(128)
  url       String   @db.VarChar(512)
  imageUrl  String   @db.VarChar(512)
  initialPrice　Decimal  @db.Decimal(10, 2)
  monthlyPrice  Decimal  @db.Decimal(10, 2)
  overview  String   @db.Text
  detail    String   @db.Text
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}*/
