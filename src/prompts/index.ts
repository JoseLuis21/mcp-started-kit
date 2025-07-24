import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerPrompt } from "./prompt.js";

export function registerAllPrompts(server: McpServer) {
  registerPrompt(server);
}
