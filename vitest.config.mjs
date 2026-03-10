import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          environment: "node",
          include: [
            "test/**/*.test.ts"
          ],
          name: "node"
        }
      },
      {
        test: {
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium"
              },
              {
                browser: "firefox"
              },
              {
                browser: "webkit"
              }
            ]
          },
          include: [
            "test/**/*.test.ts"
          ],
          name: "browser"
        }
      }
    ]
  }
});
