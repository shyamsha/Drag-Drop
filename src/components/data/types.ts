export interface Data {
  id: number;
  title: string;
  status: string;
}
export const data: Data[] = [
  { id: 1, title: "#item1", status: "todo" },
  { id: 2, title: "#item2", status: "todo" },
  { id: 3, title: "#item3", status: "todo" },
  { id: 4, title: "#item4", status: "in-progress" },
  { id: 5, title: "#item5", status: "in-progress" },
  { id: 6, title: "#item6", status: "done" },
  { id: 7, title: "#item7", status: "done" },
];
