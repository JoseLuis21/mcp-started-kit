import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export function registerPrompt(server: McpServer) {
  server.registerPrompt(
    "review-code",
    {
      title: "Code Review",
      description: "Review code for best practices and potential issues",
      argsSchema: { code: z.string() },
    },
    ({ code }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `Please review this code:\n\n${code}`,
          },
        },
      ],
    })
  );
}
