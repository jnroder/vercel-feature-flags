import { flag } from "@vercel/flags/next";

export const exampleFlag = flag({
  key: "example-flag",
  decide() {
    return Math.random() > 0.5;
  },
});
