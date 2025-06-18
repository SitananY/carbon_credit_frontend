import { DataGroup } from "../../../../types";

export const mockDataGroups: DataGroup[] = [
  {
    id: 1,
    name: "กลุ่มข้อมูลป่าไม้",
    forestData: [
      {
        id: 101,
        number: 1,
        name: "ป่าดงใหญ่",
        tree_type: "ไม้สัก",
      },
      {
        id: 102,
        number: 2,
        name: "ป่าดิบชื้น",
        tree_type: "ยางนา",
      },
    ],
  },
  {
    id: 2,
    name: "กลุ่มข้อมูลที่ดิน",
    LandData: [
      {
        id: 201,
        number: 1,
        name: "ที่ดินโครงการ A",
        Land_type: "พื้นที่อนุรักษ์",
      },
      {
        id: 202,
        number: 2,
        name: "ที่ดินโครงการ B",
        Land_type: "พื้นที่เกษตรกรรม",
      },
    ],
  },
]