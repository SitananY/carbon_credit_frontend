import { DataGroup } from "../../../../types";

export const mockDataGroups: DataGroup[] = [
  {
    id: 1,
    name: "กลุ่มข้อมูลป่าไม้",
    forestData: [
          {
        id: 101,
        number: 1,
        name: "ตะเคียนทอง",
        tree_type: "Hopea odorata", 
      },
      {
        id: 102,
        number: 2,
        name: "ยางนา",
        tree_type: "Dipterocarpus alatus", 
      },
      {
        id: 103,
        number: 3,
        name: "ประดู่",
        tree_type: "Pterocarpus macrocarpus", 
      },
      {
        id: 104,
        number: 4,
        name: "ไม้สัก",
        tree_type: "Tectona grandis Linn. f.", 
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
        land_type: "พื้นที่อนุรักษ์",
      },
      {
        id: 202,
        number: 2,
        name: "ที่ดินโครงการ B",
        land_type: "พื้นที่เกษตรกรรม",
      },
      {
        id: 203,
        number: 3,
        name: "ที่ดินชุมชน D",
        land_type: "พื้นที่การเรียนรู้", 
      },
      {
        id: 204,
        number: 4,
        name: "ที่ดินฟื้นฟู E",
        land_type: "พื้นที่ฟื้นฟูระบบนิเวศ", 
      },
    ],
  },
]