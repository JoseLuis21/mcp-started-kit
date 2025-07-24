import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerAlertsTools } from "./alerts.js";
import { registerForecastTools } from "./forecast.js";

export function registerAllTools(server: McpServer) {
  registerAlertsTools(server);
  registerForecastTools(server);
}
