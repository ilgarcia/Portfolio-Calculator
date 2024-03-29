type Buttons = {
  title: string;
  color: string;
  action: string;
};

export const buttons: Buttons[] = [
  { title: "%", color: "#64748b", action: "percentil" },
  { title: "CE", color: "#64748b", action: "clrDisplay" },
  { title: "C", color: "#64748b", action: "clrHistory" },
  { title: "BC", color: "#64748b", action: "backspace" },
  { title: "7", color: "#334155", action: "number" },
  { title: "8", color: "#334155", action: "number" },
  { title: "9", color: "#334155", action: "number" },
  { title: "/", color: "#ffa726", action: "operator" },
  { title: "4", color: "#334155", action: "number" },
  { title: "5", color: "#334155", action: "number" },
  { title: "6", color: "#334155", action: "number" },
  { title: "*", color: "#ffa726", action: "operator" },
  { title: "1", color: "#334155", action: "number" },
  { title: "2", color: "#334155", action: "number" },
  { title: "3", color: "#334155", action: "number" },
  { title: "-", color: "#ffa726", action: "operator" },
  { title: "0", color: "#334155", action: "number" },
  { title: ".", color: "#334155", action: "dot" },
  { title: "=", color: "#00897b", action: "operator" },
  { title: "+", color: "#ffa726", action: "operator" },
];
