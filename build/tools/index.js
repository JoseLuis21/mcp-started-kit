import { registerAlertsTools } from "./alerts.js";
import { registerForecastTools } from "./forecast.js";
export function registerAllTools(server) {
    registerAlertsTools(server);
    registerForecastTools(server);
}
